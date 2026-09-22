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

## License

Apache-2.0, the same as the engine.
