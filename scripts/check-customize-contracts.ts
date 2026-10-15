#!/usr/bin/env bun
// Checks skills/customize-oneiron against the hub folder contracts.
//
// The contract data lives in oneiron-docs (site/src/data/oneiron-contracts.ts,
// `hubFolderContracts`), with the authoring verbs and the mount on the canon
// pages ARCH-0053 and ARCH-0051. oneiron-docs is private and this hub is public,
// so the hub keeps a generated snapshot of that data with its docs commit and
// a hash. Nobody edits the snapshot by hand; `--write` regenerates it.
//
//   bun scripts/check-customize-contracts.ts                    check the skill against the snapshot
//   bun scripts/check-customize-contracts.ts --docs <checkout>  also fail if the snapshot drifted from the docs
//   bun scripts/check-customize-contracts.ts --docs <checkout> --write   regenerate the snapshot
//
// No network. The skill's NOTES.md is the folder's engine-gap list and is not checked.

import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

export const ROOT = resolve(import.meta.dir, "..");
export const SNAPSHOT_PATH = join(ROOT, "scripts/contracts/hub-folder-contracts.json");
export const SKILL_DIR = join(ROOT, "skills/customize-oneiron");

const DOCS_REPO = "oneiron-dev/oneiron-docs";
const DOCS_CONTRACTS = "site/src/data/oneiron-contracts.ts";
const DOCS_AUTHORING = "generated/oneiron/agents/oneiron-arch-0053-skills-agent-self-knowledge-v1.md";
const DOCS_MOUNT = "generated/oneiron/surfaces/oneiron-arch-0051-graph-fs-lens.md";
const AUTHORING_MARK = "**An agent authors through the SDK.**";
const MOUNT_VERB_MARK = "There is one verb.";
const MOUNT_ROOTS_MARK = "A folder written under ";

// ─── contract shapes ────────────────────────────────────────────────────

interface Field {
  name: string;
  required: boolean;
  meaning: string;
}
interface Contract {
  kind: string;
  manifest: string;
  frontmatter: Field[];
  layout: Field[];
  rules: string[];
  source: string;
}
export interface Payload {
  hubFolderContracts: Contract[];
  authoring: {
    source: string;
    line: string;
    families: string[];
    methods: string[];
    reimport: { family: string; method: string };
  };
  mount: { source: string; verbLine: string; verb: string; rootsLine: string; roots: string[] };
}
export interface Snapshot {
  note: string;
  docsRepo: string;
  docsCommit: string;
  sources: string[];
  payloadSha256: string;
  payload: Payload;
}

export const sha256 = (payload: Payload): string =>
  createHash("sha256").update(JSON.stringify(payload)).digest("hex");

// ─── generating the payload from an oneiron-docs checkout ──────────────

const backticked = (text: string): string[] => [...text.matchAll(/`([^`\n]+)`/g)].map((m) => m[1].trim());

function lineWith(text: string, mark: string, source: string): string {
  const line = text.split("\n").find((l) => l.includes(mark));
  if (!line) throw new Error(`${source}: no line contains ${JSON.stringify(mark)}; the canon moved, update the marks`);
  return line.trim();
}

export async function payloadFromDocs(docs: string): Promise<Payload> {
  const mod = await import(join(docs, DOCS_CONTRACTS));
  if (!Array.isArray(mod.hubFolderContracts)) throw new Error(`${DOCS_CONTRACTS}: no hubFolderContracts export`);
  const hubFolderContracts = JSON.parse(JSON.stringify(mod.hubFolderContracts)) as Contract[];

  const authoringText = readFileSync(join(docs, DOCS_AUTHORING), "utf8");
  const line = lineWith(authoringText, AUTHORING_MARK, DOCS_AUTHORING);
  const tokens = backticked(line);
  const families = tokens.flatMap((t) => t.match(/^vault\.([a-zA-Z]+)\.put\b/)?.[1] ?? []);
  const methods = ["put", ...tokens.flatMap((t) => t.match(/^\.([a-zA-Z]+)\(/)?.[1] ?? [])];
  const reimports = tokens.flatMap((t) => {
    const m = t.match(/^vault\.([a-zA-Z]+)\.([a-zA-Z]+)\(\)$/);
    return m ? [{ family: m[1], method: m[2] }] : [];
  });
  if (families.length === 0 || methods.length < 2 || reimports.length !== 1) {
    throw new Error(`${DOCS_AUTHORING}: could not read the families, methods and re-import verb from ${JSON.stringify(line)}`);
  }

  const mountText = readFileSync(join(docs, DOCS_MOUNT), "utf8");
  const verbLine = lineWith(mountText, MOUNT_VERB_MARK, DOCS_MOUNT);
  const verb = backticked(verbLine).find((t) => /^mount\(/.test(t));
  const rootsLine = lineWith(mountText, MOUNT_ROOTS_MARK, DOCS_MOUNT);
  const roots = backticked(rootsLine).filter((t) => t.endsWith("/"));
  if (!verb || roots.length === 0) throw new Error(`${DOCS_MOUNT}: could not read the mount verb and roots`);

  return {
    hubFolderContracts,
    authoring: { source: DOCS_AUTHORING, line, families, methods, reimport: reimports[0] },
    mount: { source: DOCS_MOUNT, verbLine, verb, rootsLine, roots },
  };
}

function git(docs: string, ...args: string[]): string {
  const run = spawnSync("git", ["-C", docs, ...args], { encoding: "utf8" });
  if (run.status !== 0) throw new Error(`git ${args.join(" ")} failed in ${docs}: ${run.stderr.trim()}`);
  return run.stdout.trim();
}

export function readSnapshot(path = SNAPSHOT_PATH): Snapshot {
  return JSON.parse(readFileSync(path, "utf8")) as Snapshot;
}

// ─── reading the skill's markdown ───────────────────────────────────────

interface Table {
  file: string;
  line: number;
  kind: string | null;
  header: string[];
  rows: string[][];
}
interface Block {
  file: string;
  line: number;
  kind: string | null;
  lines: string[];
}
interface Token {
  file: string;
  line: number;
  text: string;
}
interface Doc {
  frontmatter: string[];
  headings: { level: number; text: string }[];
  tables: Table[];
  blocks: Block[];
  /** Inline code spans, headings and tables included. */
  tokens: Token[];
  /** Authoring and mount calls inside fenced examples. */
  calls: Token[];
}

const strip = (cell: string): string => cell.trim().replace(/^`(.*)`$/, "$1").trim();
const cells = (row: string): string[] => row.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());

/** Top-level keys of a `---` frontmatter block. */
function frontmatterKeys(lines: string[]): string[] {
  return lines.filter((l) => /^[^\s#][^:]*:/.test(l)).map((l) => l.slice(0, l.indexOf(":")).trim());
}

function readDoc(file: string, text: string, kindOfHeading: (h: string) => string | null): Doc {
  const doc: Doc = { frontmatter: [], headings: [], tables: [], blocks: [], tokens: [], calls: [] };
  const lines = text.split("\n");
  let i = 0;
  if (lines[0] === "---") {
    const end = lines.indexOf("---", 1);
    if (end < 0) throw new Error(`${file}: frontmatter is not closed`);
    doc.frontmatter = frontmatterKeys(lines.slice(1, end));
    i = end + 1;
  }
  let kind: string | null = null;
  let fence: { mark: string; start: number; lines: string[] } | null = null;
  let table: Table | null = null;
  for (; i < lines.length; i++) {
    const raw = lines[i];
    const lineNo = i + 1;
    const fenceMark = raw.match(/^\s*(```|~~~)/)?.[1];
    if (fence) {
      if (fenceMark === fence.mark) {
        doc.blocks.push({ file, line: fence.start, kind, lines: fence.lines });
        fence = null;
      } else {
        fence.lines.push(raw);
        // Code in an example is not prose: only its authoring and mount calls are read.
        for (const m of raw.matchAll(/\bvault\.[\w<>]+(?:\.\w+)?(?:\([^)\n]*\))?|\bmount\([^)\n]*\)/g)) {
          doc.calls.push({ file, line: lineNo, text: m[0] });
        }
      }
      continue;
    }
    if (fenceMark) {
      table = null;
      fence = { mark: fenceMark, start: lineNo, lines: [] };
      continue;
    }
    for (const m of raw.matchAll(/`([^`\n]+)`/g)) doc.tokens.push({ file, line: lineNo, text: m[1].trim() });
    const heading = raw.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      table = null;
      const level = heading[1].length;
      const text = heading[2].trim();
      doc.headings.push({ level, text });
      const k = kindOfHeading(text);
      if (k) kind = k;
      else if (level <= 2) kind = null;
      continue;
    }
    if (raw.trim().startsWith("|")) {
      const row = cells(raw);
      if (!table) {
        table = { file, line: lineNo, kind, header: row.map((c) => strip(c).toLowerCase()), rows: [] };
        doc.tables.push(table);
      } else if (!row.every((c) => /^:?-{3,}:?$/.test(c))) {
        table.rows.push(row);
      }
    } else {
      table = null;
    }
  }
  if (fence) throw new Error(`${file}:${fence.start}: code fence is not closed`);
  return doc;
}

// ─── the check ──────────────────────────────────────────────────────────

export interface Result {
  checks: number;
  errors: string[];
}

export function checkSkill(skillDir: string, snapshot: Snapshot): Result {
  const errors: string[] = [];
  let checks = 0;
  const check = (ok: boolean, message: string) => {
    checks++;
    if (!ok) errors.push(message);
  };

  // Snapshot integrity first: everything below reads it.
  check(sha256(snapshot.payload) === snapshot.payloadSha256, `snapshot: payloadSha256 does not match its payload; regenerate it with --write, never by hand`);

  const { hubFolderContracts: contracts, authoring, mount } = snapshot.payload;
  const byKind = new Map(contracts.map((c) => [c.kind, c]));
  const kindIds = contracts.map((c) => c.kind);
  const label = (kind: string) => kind.replace(/_/g, " ");
  const kindOfHeading = (heading: string): string | null => {
    const h = heading.toLowerCase();
    return kindIds.find((k) => h.startsWith(`${label(k)} folder`)) ?? null;
  };
  const kindValues = new Map(
    contracts.map((c) => [c.kind, (c.frontmatter.find((f) => f.name === "kind")?.meaning ?? "").split(/\s+or\s+|,\s*/).map((v) => v.trim()).filter(Boolean)]),
  );
  const allFields = new Set(contracts.flatMap((c) => c.frontmatter.map((f) => f.name)));
  const allValues = new Set([...kindValues.values()].flat());
  const layoutWords = new Set(contracts.flatMap((c) => c.layout.map((f) => f.name)).filter((n) => /^[a-z][a-z0-9_]*$/.test(n)));
  const folderNames = new Set([...contracts.flatMap((c) => c.layout.map((f) => f.name)).filter((n) => n.endsWith("/")), ...mount.roots]);
  const fileNames = new Set([
    ...contracts.map((c) => c.manifest),
    ...contracts.flatMap((c) => c.layout.map((f) => f.name)).filter((n) => /\.\w+$/.test(n)),
    ...contracts.flatMap((c) => c.layout.flatMap((f) => [...f.meaning.matchAll(/\b[\w-]+\.(?:md|json|js)\b/g)].map((m) => m[0]))),
  ]);
  const corpus = contracts.flatMap((c) => [c.manifest, ...c.rules, ...c.frontmatter.map((f) => f.meaning), ...c.layout.map((f) => f.meaning)]).join("\n");

  // Read SKILL.md and every markdown reference beside it.
  const skillFile = join(skillDir, "SKILL.md");
  if (!existsSync(skillFile)) return { checks: checks + 1, errors: [...errors, `${skillFile}: missing`] };
  const files = [skillFile];
  const refs = join(skillDir, "references");
  if (existsSync(refs)) for (const f of readdirSync(refs).sort()) if (f.endsWith(".md")) files.push(join(refs, f));
  const docs = files.map((f) => readDoc(f.slice(skillDir.length + 1), readFileSync(f, "utf8"), kindOfHeading));
  const skill = docs[0];
  const tables = docs.flatMap((d) => d.tables);
  const blocks = docs.flatMap((d) => d.blocks);
  const tokens = docs.flatMap((d) => d.tokens);
  const at = (x: { file: string; line: number }) => `${x.file}:${x.line}`;

  // 1. The skill's own frontmatter obeys the skill contract.
  const skillContract = byKind.get("skill");
  check(!!skillContract, "snapshot: the contract data has no skill kind");
  if (skillContract) {
    const allowed = new Set(skillContract.frontmatter.map((f) => f.name));
    for (const key of skill.frontmatter) check(allowed.has(key), `SKILL.md frontmatter: \`${key}\` is not a skill field in the contract data`);
    for (const f of skillContract.frontmatter.filter((f) => f.required)) check(skill.frontmatter.includes(f.name), `SKILL.md frontmatter: required field \`${f.name}\` is missing`);
    const nameLine = readFileSync(skillFile, "utf8").match(/^name:\s*(.+)$/m)?.[1].trim().replace(/^"(.*)"$/, "$1");
    check(nameLine === basename(skillDir), `SKILL.md frontmatter: name ${JSON.stringify(nameLine)} does not match the folder ${basename(skillDir)}`);
  }

  // 2. The kinds table names exactly the contract's kinds and manifests.
  const kindTables = tables.filter((t) => t.header[0] === "kind");
  check(kindTables.length > 0, "the skill has no table whose first column is `kind`; it must list the hub kinds");
  for (const t of kindTables) {
    const names = t.rows.map((r) => strip(r[0]));
    for (const n of names) check(byKind.has(n), `${at(t)}: kind \`${n}\` is not in the contract data (kinds: ${kindIds.join(", ")})`);
    for (const k of kindIds) check(names.includes(k), `${at(t)}: kind \`${k}\` from the contract data is missing`);
    const mi = t.header.indexOf("manifest");
    if (mi >= 0) for (const r of t.rows) {
      const c = byKind.get(strip(r[0]));
      if (c) check(strip(r[mi] ?? "") === c.manifest, `${at(t)}: kind \`${c.kind}\` has manifest ${c.manifest} in the contract data, not ${strip(r[mi] ?? "")}`);
    }
  }

  // 3. Field and part tables match each kind exactly, required flags included.
  for (const [head, part] of [["field", "frontmatter"], ["part", "layout"]] as const) {
    const found = new Set<string>();
    for (const t of tables.filter((t) => t.header[0] === head)) {
      if (!t.kind) {
        check(false, `${at(t)}: a \`${head}\` table must sit under a "<kind> folder" heading`);
        continue;
      }
      found.add(t.kind);
      const contract = byKind.get(t.kind)!;
      const want = new Map(contract[part].map((f) => [f.name, f]));
      const names = t.rows.map((r) => strip(r[0]));
      for (const n of names) check(want.has(n), `${at(t)}: \`${n}\` is not a ${t.kind} ${part} entry in the contract data`);
      for (const n of want.keys()) check(names.includes(n), `${at(t)}: ${t.kind} ${part} entry \`${n}\` from the contract data is missing`);
      const ri = t.header.indexOf("required");
      check(ri >= 0, `${at(t)}: a \`${head}\` table needs a \`required\` column, so its flags can be checked`);
      if (ri >= 0) for (const r of t.rows) {
        const f = want.get(strip(r[0]));
        const said = strip(r[ri] ?? "").toLowerCase();
        if (f) check(said === (f.required ? "yes" : "no"), `${at(t)}: \`${f.name}\` is ${f.required ? "required" : "optional"} for ${t.kind} in the contract data, the table says ${JSON.stringify(said)}`);
      }
    }
    for (const k of kindIds) check(found.has(k), `the skill has no \`${head}\` table under the ${label(k)} folder heading`);
  }

  // 4. Example frontmatter blocks use only the kind's fields, and every required one.
  for (const b of blocks) {
    const first = b.lines.findIndex((l) => l.trim() !== "");
    if (first < 0 || b.lines[first].trim() !== "---") continue;
    const end = b.lines.indexOf("---", first + 1);
    const keys = frontmatterKeys(b.lines.slice(first + 1, end < 0 ? undefined : end));
    const kindLine = b.lines.find((l) => /^kind:/.test(l))?.slice(5).trim().replace(/^"(.*)"$/, "$1");
    const inferred = kindLine ? kindIds.find((k) => k !== "skill" && kindValues.get(k)?.includes(kindLine)) ?? null : "skill";
    check(inferred !== null, `${at(b)}: example kind \`${kindLine}\` is not a kind value in the contract data`);
    const kind = b.kind ?? inferred;
    if (b.kind && inferred && b.kind !== inferred) check(false, `${at(b)}: example under the ${label(b.kind)} heading reads as a ${label(inferred)}`);
    const contract = kind ? byKind.get(kind) : undefined;
    if (!contract) continue;
    const allowed = new Set(contract.frontmatter.map((f) => f.name));
    for (const key of keys) check(allowed.has(key), `${at(b)}: example frontmatter key \`${key}\` is not a ${contract.kind} field in the contract data`);
    for (const f of contract.frontmatter.filter((f) => f.required)) check(keys.includes(f.name), `${at(b)}: example ${contract.kind} frontmatter lacks required \`${f.name}\``);
  }

  // 5. Every inline code token names something the contract data or canon carries;
  //    every authoring or mount call in a fenced example is a canon verb.
  const families = new Set(authoring.families);
  const methods = new Set(authoring.methods);
  const isVerb = (s: string): boolean => {
    const m = s.match(/^vault\.(<kind>|[a-zA-Z]+)(?:\.([a-zA-Z]+)(\([^)]*\))?)?$/);
    return (
      !!m &&
      (m[1] === "<kind>" || families.has(m[1])) &&
      (!m[2] || methods.has(m[2]) || (m[1] === authoring.reimport.family && m[2] === authoring.reimport.method))
    );
  };
  // The canon signature names the parameter; a call may pass any reference.
  const mountName = mount.verb.slice(0, mount.verb.indexOf("("));
  const isMount = (s: string): boolean => new RegExp(`^${mountName}\\([^()]*\\)$`).test(s);
  for (const c of docs.flatMap((d) => d.calls)) {
    if (c.text.startsWith("vault.")) check(isVerb(c.text), `${at(c)}: example call \`${c.text}\` is not an authoring verb in canon (${authoring.source})`);
    else check(isMount(c.text), `${at(c)}: example call \`${c.text}\` is not the mount verb in canon (${mount.verb})`);
  }
  for (const t of tokens) {
    const s = t.text;
    const where = at(t);
    if (/^vault\./.test(s)) {
      check(isVerb(s), `${where}: \`${s}\` is not an authoring verb in canon (${authoring.source})`);
    } else if (/^\.[a-zA-Z]+\(/.test(s)) {
      check(methods.has(s.slice(1, s.indexOf("("))), `${where}: \`${s}\` is not an authoring method in canon`);
    } else if (/^mount\(/.test(s)) {
      check(isMount(s), `${where}: \`${s}\` is not the mount verb in canon (${mount.verb})`);
    } else if (/^[^\s]+\/$/.test(s)) {
      const segments = s.slice(0, -1).split("/");
      const ok = segments.every((seg) => /^<[^>]+>$/.test(seg) || folderNames.has(`${seg}/`));
      check(ok, `${where}: folder \`${s}\` is not in the contract layouts or the canon mount roots`);
    } else if (/^[^\s/]+\.(md|json|js)$/.test(s)) {
      check(fileNames.has(s), `${where}: file \`${s}\` is not named by the contract data`);
    } else if (/^[a-z][a-z0-9_]*$/.test(s)) {
      check(allFields.has(s) || byKind.has(s) || allValues.has(s) || layoutWords.has(s), `${where}: \`${s}\` names a field or kind the contract data lacks`);
    } else if (/^[a-z][a-z0-9_]*:\s/.test(s)) {
      const key = s.slice(0, s.indexOf(":"));
      check(allFields.has(key), `${where}: \`${s}\` uses key \`${key}\`, which the contract data lacks`);
    } else {
      check(corpus.includes(s), `${where}: \`${s}\` is not in the contract data or the canon verbs`);
    }
  }

  // 6. Coverage: every canon verb, the mount verb, every root and every contract file are taught.
  const texts = tokens.map((t) => t.text);
  for (const f of fileNames) check(texts.includes(f), `the skill never names the contract file \`${f}\``);
  for (const f of authoring.families) check(texts.some((s) => s.startsWith(`vault.${f}.put`)), `the skill never teaches \`vault.${f}.put\``);
  for (const m of authoring.methods) check(texts.some((s) => s.startsWith(`.${m}(`) || new RegExp(`^vault\\.\\w+\\.${m}\\b`).test(s)), `the skill never teaches the \`.${m}\` method`);
  const reimport = `vault.${authoring.reimport.family}.${authoring.reimport.method}()`;
  check(texts.includes(reimport), `the skill never teaches \`${reimport}\``);
  check(texts.includes(mount.verb), `the skill never teaches \`${mount.verb}\``);
  for (const r of mount.roots) check(texts.includes(r), `the skill never names the mount root \`${r}\``);
  check(skill.headings.some((h) => h.level === 2 && /\blens/i.test(h.text)), "the skill must teach lenses in a section of their own (a level-2 heading naming lenses)");

  return { checks, errors };
}

// ─── main ───────────────────────────────────────────────────────────────

async function main(argv: string[]): Promise<number> {
  const arg = (flag: string) => {
    const i = argv.indexOf(flag);
    return i >= 0 ? argv[i + 1] : undefined;
  };
  const docs = arg("--docs") ?? process.env.ONEIRON_DOCS;
  const write = argv.includes("--write");
  const skillDir = resolve(arg("--skill") ?? SKILL_DIR);
  const snapshotPath = resolve(arg("--snapshot") ?? SNAPSHOT_PATH);

  if (write) {
    if (!docs) throw new Error("--write needs --docs <oneiron-docs checkout>");
    const sources = [DOCS_CONTRACTS, DOCS_AUTHORING, DOCS_MOUNT];
    const dirty = git(docs, "status", "--porcelain", "--", ...sources);
    if (dirty) throw new Error(`refusing to snapshot uncommitted docs sources:\n${dirty}`);
    const payload = await payloadFromDocs(docs);
    const snapshot: Snapshot = {
      note: "VENDORED CANON SNAPSHOT. Do not hand-edit. Generated by scripts/check-customize-contracts.ts --write from oneiron-docs at docsCommit. payloadSha256 is SHA-256 over JSON.stringify(payload).",
      docsRepo: DOCS_REPO,
      docsCommit: git(docs, "rev-parse", "HEAD"),
      sources,
      payloadSha256: sha256(payload),
      payload,
    };
    writeFileSync(snapshotPath, `${JSON.stringify(snapshot, null, 2)}\n`);
    console.log(`wrote ${snapshotPath} from ${DOCS_REPO}@${snapshot.docsCommit}`);
  }

  const snapshot = readSnapshot(snapshotPath);
  const result = checkSkill(skillDir, snapshot);
  let { checks } = result;
  const errors = [...result.errors];

  if (docs) {
    checks++;
    const live = await payloadFromDocs(docs);
    if (JSON.stringify(live) !== JSON.stringify(snapshot.payload)) {
      errors.push(`snapshot drift: ${DOCS_REPO} at ${git(docs, "rev-parse", "HEAD")} differs from the snapshot (docsCommit ${snapshot.docsCommit}); rerun with --docs <checkout> --write, then update the skill until this check passes`);
    }
  }

  for (const e of errors) console.log(`FAIL ${e}`);
  const kinds = snapshot.payload.hubFolderContracts.map((c) => c.kind).join(", ");
  console.log(
    `customize-oneiron: ${checks} checks, ${errors.length} failures (contracts ${snapshot.docsRepo}@${snapshot.docsCommit.slice(0, 8)}; kinds ${kinds}${docs ? "; drift checked against the docs checkout" : ""})`,
  );
  return errors.length === 0 ? 0 : 1;
}

if (import.meta.main) {
  main(process.argv.slice(2)).then(
    (code) => process.exit(code),
    (err) => {
      console.error(`error: ${err instanceof Error ? err.message : String(err)}`);
      process.exit(2);
    },
  );
}
