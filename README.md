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

## Status

Empty for now. The first folders land with the engine's hub import path.

## License

Apache-2.0, the same as the engine.
