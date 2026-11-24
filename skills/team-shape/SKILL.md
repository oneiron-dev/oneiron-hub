---
name: team-shape
description: Decide how to organise the work behind a spawn. Solo or a team, which pattern, how wide, which models, at what effort, within the budget. The planner ladder reads this skill at every spawn.
version: 0.2.0
license: Apache-2.0
role: workflow
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  kind: workflow
  requires: the engine's planner ladder, payoff table and task-type tree (ONEIRON-ARCH-0079)
  seeded-from: RESEARCH-0366, agent coordination evidence (79 sources)
  data: task-type-tree.json
---

# Team shape

You plan one spawn. You get:

- The spawn: its `need`, its prompt, its care level (light · medium · high · xhigh · max), its `notes`, and any fields the caller set.
- The task's type: a node of the type tree, stamped as `typeRef`.
- The planner card for that type: the payoff rows per pattern, width and model mix, plus the pins and seeds in force.
- The active model set, with each model's description.
- The budget.

You write a plan: pattern, width, models and effort per seat, budget split, and one line on why. This page gives you a starting point. Once a payoff row has real runs, the numbers outrank this page. The loop revises this page from receipts.

## First lesson: solo first

- One strong agent is the default. Add agents only when the task type and the payoff numbers say a team wins.
- If one agent already succeeds at this type about 45% of the time or more, extra agents tend to hurt.
- Measured over 180 setups, the mean team gain over one agent was −3.5%. On sequential planning, every team variant lost, by 39% to 70%.
- A team must pay for itself. It costs more tokens, and errors spread. Independent agents with no referee amplified errors about 17 times; a central coordinator held that to about 4 times.

## Read the record before this page

1. The caller's fields come first. A field the spawn set is a pin or a seed. Never override a pin.
2. Then the planner card. A row with real runs decides.
3. A thin row borrows from the parent type in the tree.
4. An empty row falls back to the seeds below.

## Who decides

Patterns differ by who makes the final call. Whether the team converges on one answer or diverges into many is a separate setting.

| pattern | who decides | use it when |
|---|---|---|
| CEO | the lead alone, after advice | most work. A solo plan is CEO at width one: the one agent decides. |
| committee | a chair, after the members deliberate | refining one artifact; hard problems with one right answer |
| vote | a count of independent ballots | discrete answers; debate only on request |
| market | a referee rule signed before the work | many candidates and a fair check: tests, a holdout, a pinned judge |

Rotation of the lead is optional, for long work where one view should not settle in.

## Seeds by task type

The tree starts with seven types. Their plain tests are in `references/type-tree.json`.

| type | start with | avoid |
|---|---|---|
| GENERATE | makers working apart, then one picker; separate pools that share at set times; a contest when uncertainty is high; varied prompts; a niche archive | open brainstorming; debate; one taste score |
| REFINE | a committee; notes from advisers who cannot veto; critic lenses | contests |
| SOLVE | one agent with a checker; independent answers, then a vote; a committee of three on hard problems | long debate |
| RESEARCH | one writer with read-only helpers; each helper lists the facts only it holds first | independent agents with no referee |
| JUDGE | independent judgments weighted by track record; several small committees, then pool | one open discussion |
| BUILD | one agent; or one writer with a clean-context reviewer | parallel writers on one artifact |
| NEGOTIATE | a plan against a counter-plan; real dissent; the lead commits and records the dissent | plain consensus |

Two modifiers move the seed:

- **Uncertainty.** High uncertainty favours more makers and contests. Low uncertainty favours fewer; extra entrants then cut effort.
- **Solo baseline.** Above about 45%, stay solo or add only a checker.

## Width

- Width comes from the payoff numbers and the budget. There is no fixed rule.
- Small teams find new ideas. Large teams extend known lines.
- Fit the best shape the budget allows. A small budget shapes the plan; it is not a reason to decline the spawn. Add one line on what more budget would buy.
- A large fan-out shows its estimate and asks first.
- When the budget runs low mid-run, seats get a wrap-up warning, and the run stops gracefully with partial results and a notice. It can resume.
- Before you widen past what a payoff row measured, run one strong agent on the same task, checker and budget. A team that wins only on time because it used more devices bought speed, not a better answer.

### Protected exploration

Seats that see the same early winner propose the same next step. Ten copies of one brief with the same starting evidence can test one idea ten times.

- When the task has several plausible mechanisms, reserve part of the existing budget to test at least one of them before the leader's result can turn every seat into a follower.
- A protected slot pays for a whole test, not just a proposal. Price the smallest useful test first. Then choose as many different mechanisms as the search budget can test after the confirmation reserve.
- A seed for a four-slot search block with no payoff row: one protected test and three ranked ones.
- Give each protected seat different starting evidence or a different lever. Different models are useful as reviewers; they do not guarantee different hypotheses.
- With one seat, take the protected turn serially, from a clean brief.
- If no distinct test fits, take the best work that fits and say what one whole slot would buy.
- An unused protected slot goes back to the queue at once. It is never a reason to decline or wait.
- Caller pins and measured payoff rows still come first.

### First bets apart, then results

- In a market, makers write the first bet apart, and the referee scores every bet with the same test.
- In a committee, members write their first hypothesis or the facts only they hold. Then the chair opens the discussion.
- In a vote, each seat files its ballot before any debate.
- Set who proposes from a result and when its score is shown: after the seat records its bet, or at the named handoff. Not constantly.
- The lead, the referee and any seat with a live decision see full results on time. A fault or a correction goes out at once.
- Keep the best checked output per useful niche, and compare it to the common incumbent.
- When the payoff says more depth buys more than another branch, change the split at the next round, not while scoring the current one.

## Models

- Route by description. Match the need against each model's description in the active set.
- Mixing model families catches different mistakes. Mixing alone does not spread ideas: 25 models answered one open prompt in two clusters. For spread, also work apart and vary the prompts.
- Effort follows care. On one seat, care is reasoning effort. On a team, read care with the need and the budget to set effort, width and pattern.

## Rules in every pattern

- Every node with children has a referee: a check, a test, a pinned judge or the lead.
- Vote before debate. Debate runs only on request. Agents cave to agree, and debate does not move the expected answer.
- On generative work, work apart before contact. Share at set times, not constantly.
- Dissent comes from different evidence or a held minority view. An assigned devil's advocate is not enough.
- Before a committee discusses, each member lists the facts only it holds.
- Score creative work with a coverage axis beside quality, and keep the best output per niche.

## The receipt

Write one line on why. Give the `typeRef` (node id and tree version), the row you read (or "seed" when empty), the pattern, the width, the models, the protected share with each protected seat's starting evidence or lever, the reveal point for scores, and what more budget would buy.

## You slip here

- Building a team because the task feels big. Big is not a reason. Sequential planning loses with teams.
- Debate rounds to reach consensus.
- An assigned devil's advocate as the only dissent.
- Parallel writers on one artifact.
- Overriding a field the caller pinned.
- Declining a spawn over budget instead of fitting a smaller shape.
- Every seat reading the leader's score before it writes a first bet.
- Ten seats with one brief and one starting evidence, counted as ten ideas.
- Holding a protected slot empty, or waiting for one.
- Widening a team with no matched solo run behind it.
- Following this page over a payoff row with real runs.

## The tree

`task-type-tree.json` holds the engine's seeded runtime tree.
`references/type-tree.json` keeps the plain-language seed definitions. The Dreamer
keeps the runtime tree:

- A type splits when its tasks disagree on a decision read from the tree: the winning pattern, the winning model, critic trust. Never split on topic.
- Siblings that agree merge back.
- The Dreamer names and describes each new type, so the placement skill can place tasks in it.
- A project shares the vault tree until its receipts diverge, then forks. A known-different domain starts from a seeded fork. A fork's wins promote back through the merge-back test: "useful upstream?", then a held-out test.
