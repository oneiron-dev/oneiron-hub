# skills/

One folder per skill. The folder is the unit the engine hashes, installs, forks and exports.

```
skills/<name>/
  SKILL.md        required. Frontmatter: name, description, version, license, metadata.
                  Body: the instructions, in plain English.
  scripts/        optional. Small scripts the body names. No network by default.
  references/     optional. Small files the body cites. Source material stays off-repo.
```

The format follows the [Agent Skills](https://agentskills.io) convention: a directory is a skill, markdown plus frontmatter, the filename is the slot name. Two folders with the same bytes are one skill.

Rules:

- No secrets, no keys, no personal data.
- No script reaches the network unless the body says so and why.
- A version bump on every change to any file in the folder.

## Related libraries

Places a vault may also import from, each at a pinned ref. Trust never chains from one to another.

| repository | what it is |
|---|---|
| [anthropics/skills](https://github.com/anthropics/skills) | public skill examples in the same folder format |
| [vercel-labs/skills](https://github.com/vercel-labs/skills) (skills.sh) | a public skill index with per-skill hashes |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | slide-making skill |
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | slide-making skill |
| [nicobailon/visual-explainer](https://github.com/nicobailon/visual-explainer) | explainer skill |
