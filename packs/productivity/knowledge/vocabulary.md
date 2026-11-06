# Productivity vocabulary

Canon names more than the engine builds today. This file lists that vocabulary and marks each item. "Built" means a typed door or the engine does it now. "Not built" means design only: talk about it, never fake it with a generic write.

Sources: ARCH-0016 (productivity plugin) and ARCH-0003 (semantic memory), in oneiron-docs.

## Roles

| canon word | wire spelling | built |
|---|---|---|
| goal | `goal` | yes: `vault.productivity.create` |
| milestone | `milestone` | yes: `vault.productivity.create` |
| task | `task` | yes: `tasks.create` |
| habit | `habit` | yes: `vault.productivity.create` |
| check-in | `habit_checkin` | yes: `vault.habits.checkin` |

## Nesting

| parent | legal child | built |
|---|---|---|
| goal | milestone | yes |
| milestone | task | yes |
| habit | check-in | yes |
| any other pair | none | yes: refused in the write |

A root of any role is legal.

## Status

Canon's unified status set is `idle`, `active`, `paused`, `completed`, `failed`, `cancelled`, `abandoned`. Not built as a typed input: `vault.productivity.create` takes a role, a label and a parent only. Routed work has its own task phases on the task highway; those are a different axis.

## Role fields

Canon's role field table names fields per role, among them `title`, `dueDate`, `priority`, `frequency`, `frequencyDetail`, `note`, `completed`, and the trial fields `isExperiment`, `experimentDuration`, `experimentEndsAt`, `experimentContext`, `parentExperimentId`, `dropNote`, `dropFinal`.

- Built: a role and a label at creation; extra check-in fields through `data` on `vault.habits.checkin`.
- Built and derived: `currentStreak` and `longestStreak` on a habit, recounted by the engine.
- Not built as typed inputs: every other field above.
- The engine does not check field applicability at TASK admission.

## Derived counters

Canon assigns eight derived predicates to this pack:

| predicate | meaning | built |
|---|---|---|
| `task.overdue_count` | tasks past their due date | no |
| `task.completed_today` | tasks completed today | no |
| `task.active_count` | active tasks | no |
| `cadence.streak` | a cadence's current streak | no (the habit body carries `currentStreak`) |
| `cadence.active_count` | active cadences | no |
| `cadence.longest_streak` | a cadence's longest streak | no (the habit body carries `longestStreak`) |
| `project.active_count` | active projects | no |
| `project.completion_rate` | a project's completion rate | no |

This pack does not register them. A pack predicate must start with the pack's own name, and `project` is an engine namespace. Read the streak from the habit node, not from a claim.

## Triggers

Canon names six time-based triggers: `productivity.calendar.upcoming`, `productivity.task.overdue`, `productivity.task.due_today`, `productivity.habit.reminder`, `productivity.habit.streak_risk`, `productivity.habit.streak_milestone`. Not built. Do not promise a reminder.
