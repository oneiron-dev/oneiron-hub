# oneiron-hub

The default hub for [Oneiron](https://github.com/oneiron-dev/oneiron) vaults. A vault reads this repository as its first hub and installs from it three kinds of folder: skills, packs and agent packs.

## Layout

```
skills/<name>/    one skill: SKILL.md with frontmatter, plus small scripts and references
packs/<name>/     one pack: PACK.md with frontmatter, the skillset that rides it, knowledge, a script adapter
agents/<name>/    one agent pack: PACK.md, identity, policy, skill refs, starting knowledge
```

Each folder has its own README with the folder contract. A folder is the unit the engine hashes, installs, forks and exports.

## Rules for every folder

- No secrets, no keys, no credentials, no personal data. A pack names the grants it needs; the engine injects them at run time.
- Bump the version in the frontmatter on every change to any file in the folder.
- No script reaches the network unless the folder says so and why.

## Contact and removal

- Something in a folder is wrong or unwelcome: **contact@oneiron.dev**.
- A vendor or an author wants a folder removed: **legal@oneiron.dev**. We remove a listing on a vendor's or author's request, usually within a day. Installed copies belong to the person who installed them.
- A vulnerability: **security@oneiron.dev**, see [SECURITY.md](SECURITY.md).

A pulled folder goes on [removed.json](removed.json) by name and content hash, and a vault refuses to install it from then on.

## Status

The first folders are manifests for the seat packs (`packs/claude-seat`, `packs/codex-seat`) and the skill that guides a person through connecting one (`skills/connect-a-seat`). They become installable when the engine's seat row and headless seat adapter ship.

`skills/team-shape` teaches the planner how to organise agents for a spawn, seeded from the cooperation research. It goes live with the engine's planner ladder.

`packs/ads` is the first GTM pack: eight skills for channel choice, search and paid-social accounts, creative, synthetic video, organic and launches, copy and measurement, plus dated platform facts. Procedural now; its performance claims and variant bandit are engine work under OF-376.

`skills/tune-oneiron-retrieval` is what the slow retrieval loop reads at sleep: the knobs, how to read the retrieval receipts, how to judge a change on held-out runs, and what it must never touch. Its `NOTES.md` lists the engine work it waits on.

`packs/crm` is the relationship-pipeline pack: nine skills a campaign agent loads at one moment of work (intake, outbound, replies, calls, deliverability, research interviews, lifecycle, accounts, measurement), a voice floor, dated defaults and platform facts, and two presets (consultancy, creator program). Its `PACK.md` names the engine work it waits on.

`skills/customize-oneiron` is the guide an agent loads to change a vault: the three hub folder contracts, the authoring verbs, lenses, restore defaults and the mount. A check keeps it equal to the contract data. Its `NOTES.md` lists the engine work it waits on.

## Checks

```
bun run check
```

This runs `scripts/check-customize-contracts.ts` and its tests. The check fails when `skills/customize-oneiron` names a hub kind, a field, a folder part or a verb that the contract data and canon do not carry, or leaves one out.

The contract data lives in oneiron-docs, which is private. `scripts/contracts/hub-folder-contracts.json` is a generated snapshot of it, with the docs commit and a hash. Never edit it by hand. With an oneiron-docs checkout:

```
bun scripts/check-customize-contracts.ts --docs <oneiron-docs>           # also fails if the snapshot drifted
bun scripts/check-customize-contracts.ts --docs <oneiron-docs> --write   # regenerate it, then fix the skill until the check passes
```

## License

Apache-2.0, the same as the engine.
