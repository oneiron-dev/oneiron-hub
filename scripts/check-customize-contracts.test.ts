// Proves the customize-oneiron check fails on the drift it exists to catch.
import { describe, expect, test } from "bun:test";
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { checkSkill, readSnapshot, SKILL_DIR, type Snapshot } from "./check-customize-contracts";

const snapshot = readSnapshot();

/** Runs the check on a copy of the skill with SKILL.md rewritten by `edit`. */
function checkEdited(edit: (text: string) => string, snap: Snapshot = snapshot) {
  const dir = join(mkdtempSync(join(tmpdir(), "customize-check-")), "customize-oneiron");
  cpSync(SKILL_DIR, dir, { recursive: true });
  const file = join(dir, "SKILL.md");
  const before = readFileSync(file, "utf8");
  const after = edit(before);
  expect(after).not.toBe(before);
  writeFileSync(file, after);
  try {
    return checkSkill(dir, snap).errors;
  } finally {
    rmSync(join(dir, ".."), { recursive: true, force: true });
  }
}

const row = (anchor: string, extra: string) => (t: string) => t.replace(anchor, `${anchor}\n${extra}`);

describe("customize-oneiron conformance", () => {
  test("the shipped skill passes", () => {
    const result = checkSkill(SKILL_DIR, snapshot);
    expect(result.errors).toEqual([]);
    expect(result.checks).toBeGreaterThan(100);
  });

  test("a fourth hub kind fails", () => {
    const errors = checkEdited(row("| `agent_pack` | `PACK.md` | A whole agent as a folder: identity, policy, skill refs and starting knowledge. |", "| `lens` | `LENS.md` | A view. |"));
    expect(errors.some((e) => e.includes("kind `lens` is not in the contract data"))).toBe(true);
  });

  test("a skill field the contract lacks fails", () => {
    const errors = checkEdited(row("| `metadata` | no | A free map: author, tags, contact. |", "| `role` | no | knowledge, workflow or callable. |"));
    expect(errors.some((e) => e.includes("`role` is not a skill frontmatter entry"))).toBe(true);
  });

  test("a wrong required flag fails", () => {
    const errors = checkEdited((t) => t.replace("| `wakes` | no |", "| `wakes` | yes |"));
    expect(errors.some((e) => e.includes("`wakes` is optional for pack"))).toBe(true);
  });

  test("a missing contract field fails", () => {
    const errors = checkEdited((t) => t.replace(/^\| `hooks` \| no \| The pack's hook bindings.*\n/m, ""));
    expect(errors.some((e) => e.includes("pack frontmatter entry `hooks` from the contract data is missing"))).toBe(true);
  });

  test("an invented verb fails", () => {
    const errors = checkEdited((t) => t.replace("There is no verb family for hooks.", "Or use `vault.hooks.put(folder)`."));
    expect(errors.some((e) => e.includes("`vault.hooks.put(folder)` is not an authoring verb in canon"))).toBe(true);
  });

  test("an inline field name the contract lacks fails", () => {
    const errors = checkEdited((t) => t.replace("Bundled reference material. |", "Bundled reference material, named in `facets`. |"));
    expect(errors.some((e) => e.includes("`facets` names a field or kind the contract data lacks"))).toBe(true);
  });

  test("an example frontmatter key the contract lacks fails", () => {
    const errors = checkEdited((t) => t.replace("kind: capability\ngrants:", "kind: capability\npredicates: [\"oneiron.notes-sync.note\"]\ngrants:"));
    expect(errors.some((e) => e.includes("example frontmatter key `predicates` is not a pack field"))).toBe(true);
  });

  test("dropping the lens section fails", () => {
    const errors = checkEdited((t) => t.replace("## Lenses: a vault object, not a hub kind", "## Views"));
    expect(errors.some((e) => e.includes("teach lenses in a section of their own"))).toBe(true);
  });

  test("dropping the mount verb fails", () => {
    const errors = checkEdited((t) => t.replaceAll("`mount(ref)`", "mount"));
    expect(errors.some((e) => e.includes("never teaches `mount(ref)`"))).toBe(true);
  });

  test("an invented verb inside a fenced example fails", () => {
    const errors = checkEdited((t) => t.replace("There is no verb family for hooks.", "There is no verb family for hooks.\n\n```ts\nvault.hooks.put(folder);\n```"));
    expect(errors.some((e) => e.includes("example call `vault.hooks.put(folder)` is not an authoring verb in canon"))).toBe(true);
  });

  test("a canon verb inside a fenced example passes", () => {
    const errors = checkEdited((t) => t.replace("There is no verb family for hooks.", "There is no verb family for hooks.\n\n```ts\nconst h = vault.packs.put(folder);\nvault.packs.export(h);\nmount(forkHash);\n```"));
    expect(errors).toEqual([]);
  });

  test("a mount call with another reference passes", () => {
    const errors = checkEdited((t) => t.replace("Use a fork hash when a read must replay the same way.", "Use a fork hash, as in `mount(forkHash)`, when a read must replay the same way."));
    expect(errors).toEqual([]);
  });

  test("dropping a contract file fails", () => {
    const errors = checkEdited((t) => t.replace(/^- `HOOK\.md` carries .*\n/m, ""));
    expect(errors.some((e) => e.includes("never names the contract file `HOOK.md`"))).toBe(true);
  });

  test("a table without a required column fails", () => {
    const errors = checkEdited((t) => t.replace("| field | required | write |\n|---|---|---|\n| `name` | yes | The pack's name.", "| field | requirement | write |\n|---|---|---|\n| `name` | yes | The pack's name."));
    expect(errors.some((e) => e.includes("needs a `required` column"))).toBe(true);
  });

  test("a hand-edited snapshot fails", () => {
    const tampered = structuredClone(snapshot);
    tampered.payload.hubFolderContracts[0].frontmatter.push({ name: "role", required: false, meaning: "hand-added" });
    const errors = checkSkill(SKILL_DIR, tampered).errors;
    expect(errors.some((e) => e.includes("payloadSha256 does not match"))).toBe(true);
  });
});
