---
name: oneiron.productivity
description: "Goals, milestones, tasks and habits in a vault: one TASK type with five roles, a checked parent tree, append-only habit check-ins and derived streaks."
version: 0.1.0
license: Apache-2.0
kind: capability
contact: "legal@oneiron.dev for removal requests, contact@oneiron.dev for everything else"
---

# productivity

This pack teaches an agent the vault's native productivity model (canon ARCH-0016). The engine already holds that model: one TASK type, five roles, the ChildOf gate and the habit streak count. The pack adds the instructions to use it well.

The pack requests no grants and no wakes. It declares no kinds and no predicates. It carries no code, so it needs no sandbox run. It installs through `vault.packs.install` and the ordinary scan.

## One TASK type, five roles

| role | what it is | example | written by |
|---|---|---|---|
| `goal` | a high-level outcome | "Learn Japanese to N3" | `vault.productivity.create` |
| `milestone` | a date-bound checkpoint | "Submit grant by Apr 1" | `vault.productivity.create` |
| `task` | a discrete unit of work | "Draft refund email" | `tasks.create` |
| `habit` | a recurring practice | "Meditate daily" | `vault.productivity.create` |
| `habit_checkin` | one logged occurrence of a habit | "Meditated 10 min on 2026-03-28" | `vault.habits.checkin` |

A habit and a check-in are not new entity types. They are TASKs with a different role. The engine keeps TASK_LIST, TASK and MACHINE compiled in, so this pack never declares them.

## The tree

A child names its parent at birth with `parent_ref`. The engine writes the ChildOf edge and judges it in the same write. Three pairs are legal:

- a `goal` holds a `milestone`;
- a `milestone` holds a `task`;
- a `habit` holds a `habit_checkin`.

Every other pair fails, same-role nesting too. A `task` and a `habit_checkin` hold nothing. A root of any role is legal. A refused write leaves the tree as it was.

A project is not a TASK role. It is a PROJECT entity, and its record lists its tasks (canon ARCH-0068).

## Skills

Each skill loads at one moment of work. Read the one for the moment you are in.

| skill | loads when |
|---|---|
| `productivity-tree` | you set up, extend or read goals, milestones, tasks and habits |
| `habit-checkins` | you log one occurrence of a habit, or read its streak |

## Knowledge

| file | what it holds |
|---|---|
| `knowledge/vocabulary.md` | the canon vocabulary around the model (statuses, the role field table, derived counters, triggers), each marked built or not built |

## Install

The pack is a folder of the first-party hub. Install it through the ordinary import door, at a full commit of this repository:

```json
{
  "hub_ref": {
    "hub_id": "<the default hub id: hub in vault.skill_hubs.default.get>",
    "ref_string": "packs/productivity",
    "pin": { "type": "commit", "value": "<the full 40-hex hub commit>" }
  },
  "publisher": "publisher:oneiron-hub"
}
```

`vault.packs.install` admits the publisher for this hub, fetches the folder at that commit, scans it and installs it. `vault.packs.get` with `{"name": "oneiron.productivity"}` reads the receipt back. The engine's released hub commit is the `skills` pin that `vault.skill_hubs.default.get` returns on an unchanged vault.

## What it does not do

- It registers no predicates. Canon names eight derived counters under `task.*`, `cadence.*` and `project.*` (canon ARCH-0003). The engine does not maintain them yet, and a pack predicate must start with the pack's own name. `knowledge/vocabulary.md` lists them as design vocabulary.
- It sets no status. `vault.productivity.create` takes a role, a label and a parent, and nothing else.
- It fires none of the six time-based triggers in ARCH-0016. Those are engine work.
- It never writes a check-in by a generic write. Its skills log every check-in through `vault.habits.checkin`.
