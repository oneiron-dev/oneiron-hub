# agents/

One folder per agent pack: a whole agent as a folder, the same container as a pack with the parts an agent needs.

```
agents/<name>/
  PACK.md            required. Frontmatter: name, description, version, license, kind: agent.
                     Body: who this agent is, in plain English.
  identity.md        the identity prompt.
  policy.md          the policy the agent runs under.
  skills.json        skill refs by content hash (from skills/ here, from another hub, or bundled below).
  skills/            optional. Bundled skills, one folder per skill in the skills/ contract.
  knowledge/         optional. Selected knowledge the agent starts with.
```

Keys and signatures never leave a vault, so none are ever in this folder. Editing an installed agent pack forks it; the fork remembers its parent here.
