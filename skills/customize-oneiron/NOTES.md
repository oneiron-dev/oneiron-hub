# Engine work this skill needs

Hub rule: a folder that needs a missing engine mechanism names it here and does not fake it. Checked against oneiron `origin/main` at `5b55794ce` and oneiron-docs `main` at `a13b8d7e` on 2026-10-16. Engine paths are under `crates/oneiron/src/` unless they say otherwise.

SKILL.md teaches the hub folder contracts and the canon verbs only. This file holds what the engine does today where it differs. `scripts/check-customize-contracts.ts` checks SKILL.md against the contract data. It does not read this file.

## The authoring verbs are canon, not engine verbs yet

1. **No vault authoring verbs in the SDK verb table.** `scripts/sdk/agent-verbs.json` has no `vault.skills`, `vault.packs`, `vault.lenses`, `vault.agents` or `vault.artifacts` rows, no `restoreDefaults` and no `mount`. ARCH-0080 slice 1 adds the `vault.packs.put` row and a route that installs a pack from a path. Until a verb row exists, an agent cannot call it; say so to the person.
2. **Restore defaults exists as library calls only.** `Vault::restore_default_skills` (`skill_hub/bootstrap.rs:232`) restores the engine's four; `restore_default_hub_skill` (`skill_hub/default_hub.rs:146`) restores a hub default at the pinned commit. A restored skill gets a new id, the pinned content hash, and lands Candidate (`skill_hub/bootstrap/tests.rs:318`).
3. **The mount reads, it does not write.** The owner route `GET /v1/owner/graph-fs` serves `ls`, `cat`, `head`, `wc`, `find`, `grep` and `readlink` through the owner's scoped read (`crates/oneiron-server/src/api/owner_routes.rs:68`; ARCH-0051, engine `e53093487`, #1341). The route is read-only. No folder put on save exists.
4. **Hooks are designed, not built.** The PACK.md parser refuses a `hooks` key as an unknown field (`skill_hub/pack_catalog/manifest.rs:225-255`). No hook runner, no CODE entity on install.
5. **Hub install of a pack at a pinned ref** is ARCH-0080 slice 3. `install_pack_from_adapter` (`skill_hub/pack_catalog/transport.rs:85`) has no caller outside tests.
6. **The first-party hub pin** is `e1040cb` (`skill_hub/default_hub.rs:12`). A new folder here reaches vaults only after a reviewed engine update moves it.

## The contract data lags the engine's parsers

Docs reconciles each item: a ruling adds the key to `hubFolderContracts` in `oneiron-contracts.ts`, or the engine changes. Until then SKILL.md does not teach these keys, and the check fails if it does.

7. **SKILL.md keys.** The parser also accepts `compatibility`, `role`, `call`, `allowed-tools`, `requires-bins`, `requires-env` and `requires-mcp` (`skill_hub/folder.rs:152-192`). Canon names `role` and `call` (ARCH-0053 §6, the skill role) and a requires block (§12, written there as `metadata.requires.{bins,env,mcp}`). The contract data names none of them. `skills/tune-oneiron-retrieval` in this hub already writes `role: knowledge`. A skill with no `role` reads as knowledge.
8. **PACK.md keys.** The parser also reads `predicates`, `kinds` and `facets` (`manifest.rs:225-255`). Predicates and kinds must sit inside the pack's own name, as `<name>.<x>`, and never overlap (`manifest.rs:188-198`).
9. **Agent packs need a facet map, and typed files.** For `kind: agent` the parser requires `facets` naming `identity.md`, `policy.md`, `skills.json` and an optional `knowledge/*.json` (`manifest.rs:154-172`; `skill_hub/pack_catalog/agent_facets.rs:40-61`). `policy.md` holds typed JSON, not prose: schema `oneiron.agent-policy.v1`, the agent's entity id and its native definition. `skills.json` holds typed refs: entity id, skill id, version and content hash. The definition's agent id, description, version and instructions must equal the PACK.md name, description, version and `identity.md` (`agent_facets.rs:63-114`). This is why SKILL.md says to export an agent pack and never hand-write one. The contract data still describes `policy.md` as prose.
10. **Pack names.** The contract says the folder name matches the name. The parser requires an author-scoped, dotted, lowercase name (`manifest.rs:382-398`), so this hub writes `oneiron.<folder>`.
11. **License.** The contract marks `license` required. Both parsers accept a folder without it.
12. **Lenses ride packs, but the pack contract has no lens part.** The surfaces hub's tentative pins say lenses ship with their pack and a lens-only pack is a personal view. Neither the contract data nor the PACK.md parser has a lens field or folder.
