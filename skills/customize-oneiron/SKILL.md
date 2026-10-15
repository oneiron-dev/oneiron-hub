---
name: customize-oneiron
description: "Change an Oneiron vault through its real contracts. Write, fork, archive, export and restore skills, packs, agent packs, hooks, lenses and artifacts. Use the SDK verbs, or write folders on the mount. Load it when a person or an agent wants to add, change, share, remove or restore any of these."
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  tags: vault, skills, packs, agent packs, hooks, lenses, mount
  contracts: the hub folder contracts, checked by scripts/check-customize-contracts.ts in oneiron-hub
  engine-gaps: NOTES.md
---

# Customize Oneiron

You change a vault by writing folders. A hub serves three kinds of folder. The vault has two more families of its own, lenses and artifacts. All five take the same verbs. The engine hashes every folder, and the hash is its identity.

This page holds the contracts, the verbs and the rules. The tables are the whole contract. Write only the fields they name. [NOTES.md](NOTES.md) says which verbs today's engine runs. Read it before you tell a person that something works now.

## Three hub kinds

| kind | manifest | what it is |
|---|---|---|
| `skill` | `SKILL.md` | One skill: plain-English instructions, with small scripts and references. |
| `pack` | `PACK.md` | How a platform or a capability plugs into a vault. It names the permissions it asks for, its `wakes`, its `adapter`, its `hooks` and the skills that ride it. |
| `agent_pack` | `PACK.md` | A whole agent as a folder: identity, policy, skill refs and starting knowledge. |

A hub carries these three kinds and nothing else. Lenses and artifacts are vault families. Hooks live inside packs. Never add a fourth kind.

## The verbs

| verb | what it does |
|---|---|
| `vault.skills.put(folder)` | Writes a skill folder into the vault. |
| `vault.packs.put(folder)` | Writes a pack folder, its hooks included. |
| `vault.agents.put(folder)` | Writes an agent definition. |
| `vault.lenses.put(folder)` | Writes a lens. |
| `vault.artifacts.put(folder)` | Writes an artifact. |
| `.fork(h)` | Makes a fork of the object at hash h. The fork remembers its parent. |
| `.archive(h)` | Retires the object softly. It stops loading, its evidence stays, and it can come back. |
| `.export(h)` | Writes the object out as a clean folder. |
| `vault.skills.restoreDefaults()` | Re-imports a deleted or changed default skill from its pinned source. |
| `mount(ref)` | Opens the vault as one file tree. A folder written there is the same put. |

Every family takes `.fork(h)`, `.archive(h)` and `.export(h)`. The families are `vault.skills`, `vault.packs`, `vault.agents`, `vault.lenses` and `vault.artifacts`.

### What happens on put

1. The engine hashes the folder. Same bytes make one object. Two hubs that serve the same bytes give one object with two source rows.
2. The fit check runs, then the folder installs at once with a receipt. A skill with no code lands Active. A rules hit lands it Candidate. Code while the vault's code flag is off lands it Candidate too. The card says why.
3. The permissions the folder asks for go through the same fit check. A confident, reversible grant lands granted, with one-tap undo. An unsure or irreversible grant asks the person on the card, in plain words. A rules hit blocks the ask. The rules catch a removed hash, a known-bad pattern, a secret-shaped string and a call outside the sandbox.
4. A pack with code and a wire also passes the qualification suite, the grant slate and the advisory check. It asks again whenever it changes.
5. An update that widens what the folder may do asks the person again. A doc-only or narrower update installs on its own.
6. Trust tier changes how the card reads. It never decides whether a folder may install.

### Edit means fork

Editing an installed folder forks it. The fork remembers its parent. Upstream updates stop arriving on their own. They arrive as proposals. Accepting a proposal merges the upstream changes into the fork. One fork rule serves skills, packs and agents.

To replace a shipped or imported object, fork it. To retire one, archive it. There is no delete verb for authoring. Deletion belongs to the person. They erase through their own route, and the engine writes a receipt. Never delete for them, and never delete to tidy up.

### Export

Every skill exports as a clean Agent Skills folder. A whole agent exports as an agent pack. Keys and signatures never leave the vault.

## Skill folder: SKILL.md

| field | required | write |
|---|---|---|
| `name` | yes | The skill's name. The folder name matches it. |
| `description` | yes | One paragraph. The index row shows it, and the vault matches work on it, so name the moments the skill serves. |
| `version` | yes | Bump it on every change to any file in the folder. |
| `license` | yes | An SPDX id. |
| `metadata` | no | A free map: author, tags, contact. |

| part | required | holds |
|---|---|---|
| `body` | yes | Plain English after the frontmatter. It is the prompt the skill injects. |
| `scripts/` | no | Small helpers. No network unless the body says so and why. |
| `references/` | no | Small files the body points at. |

```yaml
---
name: pdf-tables
description: "Pull the tables out of a PDF into rows the vault can query. Use it when a person drops a PDF with tables, or asks for the numbers in one."
version: 0.1.0
license: Apache-2.0
metadata:
  author: your-handle
  tags: pdf, tables
---
```

Rules for a skill folder:

- Bump `version` on any change.
- No secrets, no vault text, no personal data.
- No network by default.
- A skill that needs an engine mechanism that has not shipped belongs in the engine, not in a hub. Name the gap in the folder's notes. Never fake it.

## Pack folder: PACK.md

| field | required | write |
|---|---|---|
| `name` | yes | The pack's name. The folder name matches it. |
| `description` | yes | One paragraph for the index row and the install card. |
| `version` | yes | Bump it on every change to any file in the folder. |
| `license` | yes | An SPDX id. |
| `kind` | yes | `connector` or `capability`. |
| `grants` | no | The permissions the pack asks for, by scope. The install card lists them under "Asks for permission". |
| `wakes` | no | The wake subscriptions the pack registers. |
| `adapter` | no | `built-in:<name>` for an adapter shipped in the engine, or `script:<path>`. Its presence marks a pack that carries code. |
| `contact` | no | An address for removal or defect requests. It grants nothing. |
| `migrations` | no | A JSON list of the pack's own predicate migration maps, each from an earlier version. Install applies the map that matches the installed source. |
| `hooks` | no | The pack's hook bindings, one per folder in `hooks/`. Designed, not built. |

| part | required | holds |
|---|---|---|
| `skills/` | no | The skillset that rides the pack, one folder per skill, each under the skill contract. |
| `knowledge/` | no | Reference material the pack's skills read. |
| `scripts/` | no | Code the adapter or an install step runs, in the sandbox, under the pack's grant. |
| `hooks/` | no | One folder per hook. |

```yaml
---
name: oneiron.notes-sync
description: "Keeps a folder of plain notes in step with the vault. Use it when a person wants their notes app and the vault to agree."
version: 0.1.0
license: Apache-2.0
kind: capability
grants: ["read: notes in this project", "write: note proposals under the pack's own actor"]
wakes: ["claim: a note claim lands in this project"]
contact: "contact@example.org for removal or defect requests"
---
```

Rules for a pack folder:

- Never a credential. The engine injects grants at run time.
- Bump `version` on any change.
- No secrets, no vault text, no personal data. The engine scans every decoded frontmatter value for secrets, and `contact` too.
- A pack with no verbs, no wire and no section installs like a skill. Its permissions are the widening, never the install.
- Keep the pack's `name`, predicates and kinds out of every namespace the engine owns. Install refuses a pack that takes one.

### Hooks

A hook lives in its own folder under `hooks/`. It holds three files:

- `HOOK.md` carries the hook's name, version, selector, phase, the outcome kinds it may return, and its budget.
- `intent.md` holds the prompt the body came from.
- `body.js` is the body. It runs in the in-process sandbox, with no network, no files and no secrets.

How hooks work:

- Write a hook with `vault.packs.put`. There is no verb family for hooks.
- List each hook under `hooks` in `PACK.md`. Install turns each one into a code entity plus the claim that binds it.
- A `wakes` entry is a hook with no body. One runner serves both keys.
- Every vault has one pack named local, of kind `capability`. Vault open creates it. The owner's own hooks go there. It never publishes to a hub.
- Write a hook only when the owner asks for one. The ask is the consent.
- Hooks are designed, not built. Today's engine refuses a `PACK.md` that carries `hooks`. A pack with hooks does not install yet.

## Agent pack folder: PACK.md

| field | required | write |
|---|---|---|
| `name` | yes | The agent's name. |
| `description` | yes | One paragraph for the index row. |
| `version` | yes | Bump it on any change. |
| `license` | yes | An SPDX id. |
| `kind` | yes | `agent`. |
| `contact` | no | An address for removal or defect requests. |

| part | required | holds |
|---|---|---|
| `identity.md` | yes | Who the agent is. |
| `policy.md` | yes | How it acts. A policy only narrows. |
| `skills.json` | yes | Skill refs by content hash, from a hub or bundled. |
| `skills/` | no | Bundled skills. |
| `knowledge/` | no | Bundled reference material. |

Rules for an agent pack:

- Keys and signatures never go in the folder.
- Bump `version` on any change.
- No secrets, no vault text, no personal data.
- An agent pack carries none of a pack's runtime fields. Leave out `grants`, `wakes`, `adapter`, `migrations` and `hooks`.
- Write the agent with `vault.agents.put`, then take its pack with `vault.agents.export(h)`. The export writes the files in the form the engine checks. Never write an agent pack by hand.
- Editing an installed agent pack forks it.

### Agents in the vault

- `vault.agents.put` writes an agent definition for later use. A definition that widens nothing lands Active, at the author's own ceiling. Anything wider than the author's own share becomes a proposal.
- Defining an agent and launching a child agent are two acts.
- A put may narrow an agent's ceiling. It never widens it. Only the owner widens a ceiling.

## So the engine parses it

- Write the frontmatter between two lines of three dashes. One key per line. Each key once.
- In a `PACK.md`, indent nothing. Write `grants` and `wakes` as a JSON array of strings on one line. Write `migrations` as a JSON array of maps on one line.
- In a `SKILL.md`, `metadata` may hold one level of lines indented by two spaces. Each line is a key, a colon and a plain value.
- Quote a value as a JSON string when it holds an apostrophe. Quote it too when it holds any of & * ! { [ | > #. When in doubt, quote.
- A connector pack needs an `adapter`. A script adapter's path starts with `scripts/`.
- The engine reads a pack's `name` as author-scoped and lowercase. It is the author, a dot, then lowercase letters, digits, dashes or underscores. [NOTES.md](NOTES.md) says how this hub names the folder.
- Today's engine reads some keys the contract does not name. The agent pack check needs one of them. [NOTES.md](NOTES.md) lists them. Keep them out of a hub folder until the contract carries them.

## Lenses: a vault object, not a hub kind

A lens is a view the workbench mounts. In this version a lens is written code. There is no lens language.

- Write a lens with `vault.lenses.put(folder)`, or as a folder under `lenses/` on the mount. Fork, archive and export it like anything else.
- A lens reads. It never writes. Lens code has no write host-imports. A change a lens offers goes through the host, under the normal write rules.
- A lens builds on the public atom kit, its tokens and the apps design contract.
- A lens keeps its intent prompt in the vault. The prompt regenerates the lens when the shell upgrades.
- A lens exists only while its pack is installed. The vault lens and the admin lens are always there.
- To share a lens, ship it with a pack. A pack that holds only a lens is a personal view, private by default. Sharing the view publishes that pack.
- The pack contract has no lens part yet. Add no lens folder and no lens field to a hub pack. Never make lenses a hub kind. Each of these needs a ruling first.
- How lenses ride packs is still tentative. The UI co-design sessions decide it.

## Artifacts

`vault.artifacts.put(folder)` writes an artifact. Fork, archive and export work as for the others. Artifacts are not a hub kind. The mount names no folder for them.

## Restore defaults

The defaults are the shipped skills. The engine carries four of them: the improver, the judge, goal intake and the wake recipe. Every other default comes from this hub, at a pinned ref.

- `vault.skills.restoreDefaults()` re-imports a deleted or changed default from its pinned source. It is a fresh import with the same content hash. It passes the same admission as any import.
- Use it when a person deleted a default and wants it back. Use it when they changed one and want the shipped bytes again.
- An archived default comes back from the archive view, not through restore.

## The mount

`mount(ref)` opens the whole vault as one file tree. The ref is a live head, a fork hash or a repo snapshot. Use a fork hash when a read must replay the same way. Use the live head when freshness matters.

- A read is a path. The engine resolves it as a scoped query when you walk it. Nothing materializes.
- A write is one put per path. A folder written under `skills/`, `packs/`, `agents/` or `lenses/` is the same put that `vault.<kind>.put(folder)` makes. The engine hashes the folder on save and lands it Active or Candidate by the rules above.
- In scope, the write lands at once with a receipt. Out of scope, it asks the owner and waits for the word.
- A git push is the same write. The vault is the origin. Pushed files become ops under the pusher.

## Publish to a hub

A vault reads oneiron-dev/oneiron-hub as its first hub, at pinned refs. Any git repository or static JSON index can be a hub.

- Put the folder in the hub at `skills/<name>/`, `packs/<name>/` or `agents/<name>/`, under the contract above.
- Bump `version` on every change. A vault reads each hub ref under its own sync policy. The engine pins this hub at a reviewed commit. A change here reaches vaults only when that pin moves.
- A folder that pulls in something from another hub never inherits that hub's trust.

## You slip here

- You call lenses, hooks or artifacts a hub kind. A hub has three kinds.
- You add a field the tables do not name.
- You look for a hooks verb. Hooks ride `vault.packs.put`.
- You change a file and leave `version` as it was.
- You indent a `PACK.md`, or write a list across lines.
- You hand-write an agent pack. Export it instead.
- You delete for the person, or to tidy up. Archive instead. Deletion is theirs.
- You edit an installed folder and expect upstream updates to keep coming. The edit forked it. Updates now come as proposals.
- You put a credential, a key, a signature, vault text or personal data in a folder.
- You expect a pack with `hooks` to install today.
- You tell a person a verb works today without checking [NOTES.md](NOTES.md).
