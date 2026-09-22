# packs/

One folder per pack. A pack is how a platform or a capability plugs into a vault: a manifest of typed parts under one content hash.

```
packs/<name>/
  PACK.md          required. Frontmatter: name, description, version, license, kind (connector | capability),
                   grants (what the pack asks for, by scope), wakes (the subscriptions it needs),
                   adapter (built-in:<name> for an adapter shipped in the engine, or script:<path>),
                   contact (an address for removal or defect requests).
                   Body: what the pack does, in plain English.
  skills/          the skills that ride the pack, one folder per skill in the skills/ contract.
  knowledge/       optional. Small reference files the skills cite.
  scripts/         optional. A script adapter. No credential inside; the engine injects grants at run time.
```

A pack carries code and a wire, so a vault admits it through its own checks before use. A pack never carries a credential.
