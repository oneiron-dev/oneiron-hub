---
name: productivity-tree
description: "Set up and read a person's goals, milestones, tasks and habits as one checked TASK tree: create each node with its role and parent, then read the tree back."
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  pack: oneiron.productivity
  loads-when: you set up, extend or read goals, milestones, tasks and habits
---

# Productivity tree

Every goal, milestone, task, habit and check-in is a TASK. Its role says what it is. Its parent says where it sits. The engine checks both in the write.

## The roles and their doors

| role | create it with | input |
|---|---|---|
| `goal` | `vault.productivity.create` | `{"role": "goal", "label": "...", "parent_ref": null}` |
| `milestone` | `vault.productivity.create` | `{"role": "milestone", "label": "...", "parent_ref": "<goal ref>"}` |
| `habit` | `vault.productivity.create` | `{"role": "habit", "label": "..."}` |
| `task` | `tasks.create` | `{"spec": {...}, "label": "...", "parent_ref": "<milestone ref>"}` |
| `habit_checkin` | `vault.habits.checkin` | see the `habit-checkins` skill |

- `vault.productivity.create` takes exactly `role`, `label` and an optional `parent_ref`. Its role is `goal`, `milestone` or `habit`. The label must not be blank. The row is inert: nothing runs.
- `tasks.create` requests routed work. Check its receipt before you treat the task as created. When `effected` is `true`, keep `task_ref` and read `route`. When `effected` is `false` and `approval` is `proposed`, keep `proposal_ref`: no task and no route exist yet, and the proposal waits for approval. Do not create it again because it is absent from the tree.
- A landed task routes from its `assignee`; an absent assignee is the Dreamer lane. `parent_ref` files the landed task under its milestone.
- A ref is a short-id ref or a 32-hex id. `vault.productivity.create` answers with the new node's `entity_ref` and `id_hex`. Keep each node's ref for its children.
- The wire field is `parent_ref` on both doors. Older canon text says `parent_task_ref`; the doors do not take that name.

## Where a node may sit

Three parent and child pairs are legal:

| parent | child |
|---|---|
| `goal` | `milestone` |
| `milestone` | `task` |
| `habit` | `habit_checkin` |

- Every other pair fails. Same-role nesting fails: a task under a task, a goal under a goal.
- A `task` and a `habit_checkin` hold nothing.
- A node with no parent is a root. A root of any role is legal, so a lone task or a lone habit is fine.
- A goal does not hold a task directly. Put a milestone between them.
- A goal does not hold a habit. A habit is its own root; link it to the goal in words, in its label or note, not by a parent.

The engine judges the parent once over the write's final state, in this order: one parent at most, the parent exists, no cycle, then the role pair. A refused write applies nothing. The tree stays as it was, and no partial child remains. Do not retry a refused pair with a different door. Fix the shape.

## Build a tree

1. Create the goal with no parent. Keep its ref.
2. Create each milestone with the goal's ref as `parent_ref`.
3. Create each task with `tasks.create` and its milestone's ref as `parent_ref`.
4. Create each habit as a root.
5. Read the tree back to confirm it. A task whose create answered with a proposal is not in the tree until it is approved.

Ask the person before you write a node they did not ask for. A suggested milestone is a proposal until they say yes.

## Read a tree

`vault.productivity.tree` takes `{"root_ref": "<ref>", "max_depth": <levels>}`. `max_depth: 0` reads the root alone. The answer is `{"value": <tree or null>, "narrowing": <scope receipt>}`. When `value` is not null, read `value.nodes`: the root first, then each level by depth. Each node has `task_ref`, `id_hex`, `parent_ref`, `depth`, `role`, `label`, `current_streak` and `longest_streak`. The root's `parent_ref` is null. `label` may be null. The two streak fields are null for every role but `habit`.

The read is scoped. A child you may not read is left out, with its subtree. `value` is null when the root is withheld, missing or not a productivity TASK. Keep the `narrowing` receipt, and never take a scoped view as proof that a left-out node does not exist.

## Projects

A project is not a TASK role. It is a PROJECT entity, and its record lists its tasks. Never create a TASK to stand for a project, and never give a TASK a PROJECT as its parent.

## What these doors do not do

- They set no status. Do not promise the person a status change through them.
- They fire no reminder. Due-date and habit reminders are engine triggers that are not built yet.
- They never take a generic write as a substitute. If a door refuses, report the refusal.
