# oneiron-hub — agent instructions

The default hub for Oneiron vaults: `skills/`, `packs/`, `agents/`. Read `README.md` and the README of the folder you touch first.

## Rules

- One folder per skill, pack or agent pack. `SKILL.md` (skills) or `PACK.md` (packs, agent packs) with frontmatter is required. Small scripts and references only.
- Never commit a secret, a key, a credential or personal data. A pack names the grants it needs; the engine injects them at run time.
- Bump the version in the frontmatter on every change to any file in a folder. The engine hashes the folder.
- If a folder needs an engine mechanism that does not exist yet, it belongs in the engine, not here.
- No AI attribution lines in commits or pull requests.
- Writing: short active sentences, one idea each, plain English.
