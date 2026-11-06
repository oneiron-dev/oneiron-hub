---
name: habit-checkins
description: "Log one occurrence of a habit as an append-only check-in under it, replay the same check-in safely, and read the habit's derived streak."
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  pack: oneiron.productivity
  loads-when: you log one occurrence of a habit, or read its streak
---

# Habit check-ins

A check-in is one logged occurrence of a habit. It is a child TASK of the habit, with the role `habit_checkin`. Each check-in is a new entity. The engine never rewrites one and never stores check-ins as a list on the habit. Two devices that log at once make two check-ins, and both survive sync.

## Log a check-in

Call `vault.habits.checkin`:

```json
{
  "habit_ref": "<the habit's ref>",
  "id": "<a stable 32-hex id for this occurrence>",
  "data": { "note": "10 min" },
  "occurred_at": 1769947200,
  "learned_at": 1769947260
}
```

- `habit_ref` names a habit that exists. The check-in lands under it, and the engine writes the ChildOf edge in the same write.
- `occurred_at` is when the occurrence happened, in Unix seconds.
- `learned_at` is when the vault learned it. It defaults to `occurred_at`.
- `data` is an optional JSON object of extra fields. Never put `role` in it: the door sets the role and refuses a supplied one.
- `id` is your idempotency key. Derive it from the occurrence, not from the clock of the call, so that a retry sends the same id. Without an `id`, the engine makes a fresh one, and a retry makes a second check-in.

## Replays and changes

- The same `id` with the same data and the same clocks is a replay. The engine accepts it and writes nothing new.
- The same `id` with changed data or a changed clock fails. A check-in is immutable.
- To correct a check-in, tell the person what you would change. Do not resend it with new data under the old id.

## Streaks

The habit carries two derived counters: `currentStreak` and `longestStreak` on the stored body, read as `current_streak` and `longest_streak` in `vault.productivity.tree`.

- The engine recounts them in the same write as each check-in, from the habit's check-in children.
- A day is a UTC day: `occurred_at` divided by 86,400 seconds. Two check-ins on one day count once.
- The current streak is the run of consecutive days that ends at the newest logged day, not at today. A habit last logged three days ago still shows that run.
- Every check-in child counts. The count does not read a `completed` field or a status.
- A check-in with no habit parent counts toward no streak.

Never write a streak yourself. Never write a check-in through a generic write. Log every check-in through `vault.habits.checkin`, which checks the habit, writes the edge and recounts the streak in one write.

## Read back

Read the habit with `vault.productivity.tree`, its ref as `root_ref` and `max_depth: 1`. The habit node shows the two counters. Each check-in appears below it with the role `habit_checkin`.

## Trials and drops

Canon lets a habit start as a short trial and lets a dropped habit sleep with a short note in the person's own words (ARCH-0016, habit trials). No typed door sets those fields yet. Talk about them with the person; do not fake them with a generic write.
