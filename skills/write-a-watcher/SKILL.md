---
name: write-a-watcher
description: "Write a watcher: a TASK with a due time, plus a hook that runs when that TASK falls due or when a connector event arrives, and returns nothing or enqueues the next TASK. Load it when the owner asks you to check something later, to check it again on a schedule, or to act when a message arrives on a connector."
version: 1.0.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  requires: tasks.create with due_at (FIX 685, FIX 4749), the schedule.tick and surface.inbound hook sources (ONEIRON-ARCH-0080 §4 Watchers), and vault.packs.put from an agent handle (ONEIRON-ARCH-0080 §7)
  checked-against: oneiron origin/main 6901f1903, 2026-11-08
  seeded-from: owner ruling 2026-10-19 (ONEIRON-ARCH-0080 §4 Watchers, ONEIRON-ARCH-0053 watcher skill)
---

# Write a watcher

A watcher checks something later, or again and again, while no agent stays awake. It has three parts:

1. A TASK with a due time.
2. A hook that runs when that TASK falls due, or when a connector event arrives.
3. The hook's answer: nothing, or the next TASK.

There is no scheduler and no new kind of object. The due time is the clock.

## When to use it

- The owner asks you to check something at a time: "on Friday, check whether the invoice is paid".
- The owner asks you to check something again and again: "every morning, look at ...".
- The owner asks you to act when a message arrives on a connector: "when Acme writes on Slack, ...".

Write a watcher only when the owner asks for one. The ask is the consent. For work that should run now, create a plain TASK instead.

The hook has no network. A check that needs the network goes through its connector. The connector delivers an event, and your hook takes it from `surface.inbound`.

Read "Limits today" before you promise the owner anything.

## Part 1: the TASK and its due time

Create the TASK with `tasks.create` and set `due_at` to a Unix time in seconds.

- Use the brief-less create: leave out `intent_key` and `brief`. Today a briefed create that carries a due time is refused.
- The create makes a standard TASK, and a standard TASK with a due time ticks.
- The TASK ticks once, on the first hook-runner pass after its due time has passed, if it is still open then. A TASK that is done, refused or expired by then never ticks.
- Leave out `ttl`, or set it later than `due_at`.
- If your ceiling parks the create as a proposal, nothing ticks until the owner approves it.
- Keep the TASK id from the receipt (`task_ref`).

The due time is shown on the TASK's card. It does not delay the TASK's work. See "Limits today".

## Part 2: the hook

A hook is a folder in the vault's `local` pack:

```
PACK.md                    name: local, kind: capability, the hook listed under hooks
hooks/<name>/HOOK.md       the selector
hooks/<name>/intent.md     the owner's ask, in plain words
hooks/<name>/body.js       the body
```

A hook folder holds these three files and nothing else. `intent.md` is optional. Write it anyway: the engine stores it as the hook's prompt, and the hook's regen reads it.

### HOOK.md

| field | write |
|---|---|
| `name` | The folder name. Lowercase letters, digits, `-` and `_`, starting with a letter. |
| `version` | Any short version. Raise it when the body changes. |
| `verbs` | The selector, as a JSON list on one line. See below. |
| `phase` | `fact`. Only a fact hook may select a tick or an inbound event. |
| `outcomes` | `["nothing", "enqueue"]`. |
| `budget_ms` | Optional. The default for a fact hook is 1000; the maximum is 60000. A run that goes past it keeps its outcome, and the overrun is recorded. |

Write one key per line, with no indent. Write each list as a JSON array on one line. Other HOOK.md keys exist. A watcher needs none of them. Leave out `actors`. If you write it, include `system`: the actor of a tick or an inbound event is the engine itself.

The selector:

| entry in `verbs` | takes |
|---|---|
| `schedule.tick:<TASK id>` | The tick of one TASK. The id is 32 lowercase hex. |
| `schedule.tick` | Every tick this hook may see. |
| `surface.inbound:<connector>` | The inbound events of one connector. The key is the channel in lowercase, with `-` written as `_`: `slack`, `line`. |
| `surface.inbound` | Every inbound event this hook may see. |

Use `schedule.tick:<TASK id>` for a one-time check. A watch that renews itself needs the bare `schedule.tick`, because the next TASK has no id yet.

### Put the hook

Call `vault.packs.put` from your own handle, with every file of the `local` pack:

```json
{"files": [{"path": "PACK.md", "text": "..."}, {"path": "hooks/<name>/HOOK.md", "text": "..."}]}
```

- From your handle, the put takes the `local` pack only, and replaces it. Each hook you wrote binds as yours and runs at your ceiling. Raise `version` in `PACK.md` on each put.
- A fact hook that returns only `nothing` and `enqueue` asks for nothing beyond your ceiling. So no proposal goes to the owner.
- Send every hook of yours on every put. A hook of yours that the new files leave out stops. Keep a copy of the files you put. Hooks of other authors stay as they are.
- Put the hook before the TASK falls due. A new hook starts at the newest tick, so it can miss a tick that another hook's pass released before it was bound.

## Part 3: the body

The body is JavaScript: the inside of an async function. It sees `input`, it may `await oneiron.read(...)`, and it returns one outcome. It has no network, no files, no clock and no randomness. `Date.now()` returns `input.now`.

What `input` holds:

```
input.hook     {binding, code, pack, name, version, body_hash}
input.fact     {kind, source, position, entity, op, actor: {principal, class}, recorded_at}
input.claim    null on a tick or an inbound event
input.now      the vault clock, Unix milliseconds
input.tick     {task, due_at}             on a tick; due_at in Unix seconds
input.surface  {connector, channel, action, receiving_identity, actor, attempt, received_at}
                                          on an inbound event
```

On a tick, `input.fact.entity` and `input.tick.task` are the TASK id. On an inbound event, `action` is `message`, `reaction`, `card_completion`, `dwell`, `tap` or `opt_out`. An inbound event carries ids and tokens only, never the provider's text.

What the body may read, under the hook's own grant:

- `await oneiron.read({claim: "<id>"})` gives one claim, or `null`.
- `await oneiron.read({claims_about: "<id>", predicate: "<glob>", limit: 10})` gives a list of the claims about that entity. `predicate` and `limit` are optional.
- Each claim reads as `{id, subject, predicate, value, confidence, source, lifecycle, approval}`. `lifecycle` is `active`, `superseded` or `retracted`.

What the body returns, exactly one:

- `{kind: "nothing"}`: there is nothing new. Only the run's receipt is written. This is the owner's "Skip".
- `{kind: "enqueue", task: {title, body, assignee, due_at}}`: the next TASK. `title` is 1 to 256 bytes. `body` is at most 16 KiB. `assignee` is optional: the 32-hex id of an agent definition or of a person. Without it, the TASK goes to the Dreamer. `due_at` is optional. With it, the new TASK is a watcher too.

The enqueued TASK lands through the same brief-less `tasks.create`, as you, with source Generated, at your ceiling. If the owner turns the hook, or every hook, off before the outcome applies, the outcome is refused.

One run gives one outcome. So:

- A one-time watch returns `nothing` when nothing is new, and enqueues the follow-up TASK when something is.
- A connector watch returns `nothing` for the events it does not care about, and enqueues a TASK for each one it does.
- A watch that renews itself enqueues the next occurrence on every run that should keep watching, because a TASK ticks once. It hands news on with a TASK that has no due time. That TASK does not tick, so the watch ends there.

## Worked example: a daily check that enqueues tomorrow's TASK

The owner says: "Each morning, check whether the Acme invoice is paid. When it is, tell me."

The plan:

- Every TASK of this watch falls due at 07:00:17 UTC. That is 25217 seconds into the UTC day. Convert the owner's morning to UTC for your own watch.
- The hook takes every tick (`schedule.tick`), because tomorrow's TASK has no id yet.
- The body cannot read a TASK. It knows this watch's TASKs by their due second. Pick a second that no other watcher in the vault uses.
- Not paid yet: enqueue tomorrow's TASK. Paid: enqueue a TASK with no due time that says so, and the watch ends. A tick of another TASK: nothing.

### Step 1: put the hook

`PACK.md`:

```
---
name: local
description: This vault's own hooks. It never publishes to a hub.
version: 2
kind: capability
hooks: ["invoice-watch"]
---
```

`hooks/invoice-watch/HOOK.md`:

```
---
name: invoice-watch
version: 1.0.0
verbs: ["schedule.tick"]
phase: fact
outcomes: ["nothing", "enqueue"]
---
Each morning at 07:00:17 UTC, check whether the Acme invoice is paid.
```

`hooks/invoice-watch/intent.md`:

```
Each morning, check whether the Acme invoice is paid. When it is, tell the owner.
Act only on TASKs that fall due at 07:00:17 UTC. Until the invoice reads paid,
keep the watch going with tomorrow's TASK.
```

`hooks/invoice-watch/body.js`:

```js
const DAY = 86400;
const MARK = 25217; // 07:00:17 UTC: the due second of every TASK of this watch
const INVOICE = "<32-hex id of the Acme invoice>";

// A tick of another TASK.
if (input.tick.due_at % DAY !== MARK) {
  return { kind: "nothing" };
}

const rows = await oneiron.read({ claims_about: INVOICE, predicate: "invoice.status" });
const paid = rows.some((row) => row.lifecycle === "active" && row.value === "paid");

if (paid) {
  // News. No due time: this TASK does not tick, so the watch ends.
  return {
    kind: "enqueue",
    task: {
      title: "The Acme invoice is paid",
      body: "The morning check found an active invoice.status claim that reads paid.",
    },
  };
}

// Nothing new yet. Keep watching: the next 07:00:17 UTC after now.
const now = Math.floor(input.now / 1000);
let next = input.tick.due_at + DAY;
while (next <= now) {
  next += DAY;
}
return {
  kind: "enqueue",
  task: {
    title: "Acme invoice watch",
    body: "Watcher TASK. The invoice-watch hook checks the invoice when this TASK falls due.",
    due_at: next,
  },
};
```

Send the four files in one `vault.packs.put`, with the other hooks you keep in `local`.

### Step 2: create the first TASK

Call `tasks.create`:

```json
{
  "spec": {
    "title": "Acme invoice watch",
    "description": "Watcher TASK. The invoice-watch hook checks the invoice when this TASK falls due."
  },
  "label": "Acme invoice watch",
  "due_at": 1794207617
}
```

`1794207617` is 2026-11-09 07:00:17 UTC. Compute yours from the clock: the next 07:00:17 UTC after now. Then read the TASK with `describe` (`{"task_ref": "<task_ref>"}`) and check that it is still open.

### Step 3: tell the owner

Say what is checked, when, and what lands when it finds something. Name the limits below that apply to this vault.

## What the owner sees and approves

- The owner's ask is the consent for the hook. Tell the owner in plain words what you set up.
- The hook binds as yours. The owner sees every hook binding and can turn any one off. The owner's `hooks.enabled` switch turns every hook off.
- By default the hook reads at your ceiling. The owner can narrow what it reads with `vault.packs.hooks.grant.set`.
- Each run writes a receipt, a `nothing` run too. The owner can replay the hook over past facts as a dry run with `vault.hooks.replay`.
- Each TASK the hook enqueues is yours, with source Generated. If your ceiling parks creates as proposals, the owner approves each one.
- A watch that renews itself raises an "is everything okay" check on every run from the second run on, with the reason `cycle`: the same hook ran again inside its own chain. The owner reads the checks with `vault.hooks.checks`. A check never stops a run. Tell the owner to expect one check per run.

## Limits today

- **The TASK must still be open when it falls due.** `due_at` does not hold the TASK back. The create queues the TASK's work at once. A TASK with no assignee goes to the Dreamer, which answers it with one model step and marks it Done. A TASK for an agent definition starts that agent now. If the TASK settles before its due time, it never ticks, and the watch stops there. A TASK for a person starts no work and stays open until that person settles it, but the create is refused unless the vault can already reach that person on one of its channels. On a host that lends the Dreamer no model, the Dreamer's TASK waits and stays open. Tell the owner about this limit before the owner relies on a watcher. Check each TASK you create with `describe`.
- **The body cannot read a TASK.** It sees only the TASK id and the due time; `oneiron.read` reads claims. A hook on the bare `schedule.tick` runs for every due TASK its grant shows. Test the due second, as the example does.
- **One outcome per run.** A run either renews the watch or hands news on, never both.
- **Lineage checks.** A hook that runs again inside its own chain raises a `cycle` check. A run whose chain already holds 8 runs raises a `depth` check. Neither stops the run.
- **Ticks stay on one machine.** The due index, the tick feed, the inbound feed, each hook's cursors and the `hooks.enabled` switch are vault-meta rows. Sync does not carry them, and a home move does not carry them. A TASK ticks only on the machine where it was created, and an inbound event feeds hooks only on the machine that admitted it, while `oneiron serve` there runs its hook runner. `--no-hooks` stops that runner. Create watcher TASKs on the vault's home, the machine that serves the vault all the time. The runner wakes on each write and at least every 2 seconds.
- **While hooks are off, nothing ticks.** A TASK that fell due meanwhile ticks when hooks come back on, if it is still open.
- **The grant decides what the hook sees.** A tick reaches the hook only if its grant shows the TASK. An inbound event reaches it only if its grant shows the identity the event addressed. A grant narrowed to a world or a predicate shows neither.
- **An enqueued TASK's assignee** is an agent definition or a person. A peer or a running child cannot be named.
