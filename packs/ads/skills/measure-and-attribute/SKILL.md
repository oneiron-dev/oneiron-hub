---
name: measure-and-attribute
description: Decide what the ads did from backend truth, not from platform dashboards. Compare two reports field by field, run cheap incrementality, compute cost per qualified lead on a trustworthy join, classify a "new" account's three histories one by one, and score an audit without punishing missing evidence.
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  kind: workflow
  pack: oneiron.ads
  reads: the platform report claims the host's connectors write, backend conversion claims, the campaign brief's metric definitions, knowledge/stale-registry.md
  data: references/true-cac.md
---

# Measure and attribute

You decide what is working. Every platform grades its own homework, so you read the business from backend truth and use platform numbers for diagnosis only. The pack floor in `PACK.md` applies throughout.

## Use this skill when

- Two dashboards disagree, or a team wants to move budget to the one that looks best.
- A report from one platform must be set beside another.
- A kill, fix or scale call needs a cost per qualified lead or per new customer.
- An account, pixel or conversion signal is called "new" or "cold".
- An audit rolls its checks into a score.

## First lesson: marketing platforms run ads; reporting tools tell the truth

The sum of platform-claimed conversions exceeds reality. Each dashboard over-credits itself. Decide budget from backend or blended truth (orders, CRM stages, first-party events), never from the platform reporting the best return. At small scale a holdout or a geo on/off test beats any attribution model.

Write the metric definitions before the numbers disappoint. Before launch: the exact conversion event, the attribution window, who owns the number, and what backend value sits behind it. One conversion per lead, not every call. Tune any quality gate (a call-length floor, for example) from your own logs; a flat rule lets spam through and blocks real buyers.

## Procedure

### 1. Name the self-attribution traps

Check each against first-party data before trusting a platform's count:

- Conversions with no click path. A video or discovery campaign that reports conversions with no click and no import match is platform-attributed, not business-verified. Look for existing customers inside the count.
- An automated campaign claiming brand or returning demand. If the account claims an enormous return, ask why the bank does not show it. Demand a holdout.
- A "new customer" flag that does not exclude existing customers. Validate with your own list, and compare returning-to-new before and after switching it on.

Analytics "direct" traffic is unattributable, not proven direct. An attribution model is not an incrementality measurement; the platform documents them as different tools (`knowledge/platform-facts.md`). Never quote one "attribution is X% accurate" figure. The numbers people quote describe different things: an untracked baseline, a platform's self-report, a first-party edge tag. Platform self-report is the least trustworthy of the three.

### 2. Compare two reports field by field

Two reports add up only when they share, or explicitly normalise, every counting rule:

- the conversion event, and the value attached to it
- the attribution window
- click-through or view-through scope
- the counting method (one per lead, every event, first or last)
- the identity used to dedupe (cookie, email, user id)
- timezone
- currency
- the attribution model (last click, data-driven, position-based)
- how modeled conversions are treated (included, flagged, excluded)

Any field that differs makes the two numbers describe different things. Show them side by side with their definitions and compute no total, no blended rate and no winner until the mismatch is fixed or written down as normalised. A 7-day-click figure beside a 30-day figure is two unrelated numbers sharing a column.

Matching fields earns a comparison, nothing more. Two comparable reports can still both claim the same customer, and neither proves the spend caused anything. The order is: match the fields, then compare, then decide from backend truth and holdouts.

### 3. Run cheap incrementality

- Holdout or geo on/off. Turn a channel or a region off, or hold out a slice of the audience, and read the backend difference over a few weeks. Protect brand search at high impression share, exclude brand from automated campaigns, use unique tags, split by region or alternate weeks.
- Input-output check. "I put extra budget into campaign X. Did the backend produce the revenue?" Track spend by campaign and backend revenue by campaign.
- Platform lift products have spend minimums (dated row in `knowledge/platform-facts.md`). Below them, run the manual holdout.

### 4. Use the metric stack in its place

| metric | what it is | use it for |
|---|---|---|
| blended efficiency | revenue attributed to all media over total media spend | business truth; whether the whole machine works. Adds little when all media sits in one channel |
| platform return | in-platform return on spend | short-term diagnosis of which campaign moves; never business truth |
| new-customer CAC | all ad spend over incremental first-time customers | the honest acquisition cost; excludes existing buyers the platform counted |
| cost per new visit | channel spend over new visits | allocation: scale budget goes to the cheaper new visitor; capture budget only harvests demand made elsewhere |
| retention-adjusted CAC | acquisition cost over the retained fraction of the cohort | the kill/fix/scale call; see `plan-the-channel` |

Watch the whipsaw: cutting a low-return awareness channel and raising a high-return capture channel often collapses the capture channel, because it fed on the awareness.

### 5. Pre-register what moves budget

The reallocation rule is written in advance and read from backend truth:

- A channel with no downstream activity (repeat sessions, orders, qualified leads) loses budget to the one with real downstream activity.
- Scale on a blended signal held flat or better while new customers rise, not on a same-day platform spike.
- Respect the buyer's lag. Identify the journey length and wait for buyers to mature before judging a budget change.

This stops the dashboard chase: platform A reports the best return, the team shifts budget to it, and the backend later shows platform B drove the customers.

### 6. Optimise to the deepest trackable action with volume

Bid toward the action furthest down the funnel that you can track reliably and that has enough volume: purchases over add-to-cart, qualified leads over form fills, trial starts over installs. Never clicks, page views or engagement when the goal is sales. A thin pixel chases volume before it chases targets. The attribution window is the data the platform learns from, not only a report setting.

### 7. Cost per qualified lead

Platform cost per action is a half-truth whenever the optimised event (a signup, a lead, a trial) is not the event that makes money. The lowest-cost creative is routinely the one bringing the worst leads. Compute both spend per signup and spend per qualified lead, show them side by side, and never make a kill or scale call on platform cost alone.

First decide how ad-side rows join to product-side outcomes, then check how much spend the join covers, then split cohorts by maturity. The three join patterns, the three coverage modes (the owner sets the cut-offs) and the maturity split are in `references/true-cac.md`.

### 8. Judge three cold-start histories apart

"New account" is three questions. Record each as its own field and classify each on its own evidence:

1. Account history: status, first-spend date, how much and how steadily it delivered.
2. Pixel or event-source history: which dataset, when connected, first and latest valid event, what diagnostics say.
3. Conversion-signal history: the event you optimise toward, first and latest accepted conversion, lag-mature history, its window and known lag.

Classify each as mature, cold or unknown. A fresh account can sit on a pixel that has fired for years. A mature pixel can carry an optimisation event switched on last week. Raw events (page views, clicks) do not make a purchase event mature. Missing or contradictory evidence is unknown, never cold by default. No fixed conversion count turns cold into mature.

A confirmed cold start gets measurement checks (does the event fire, does it match the backend), explicit creative hypotheses, small reversible tests, and a confidence label on every read. Do not blame the creative for results a new pixel cannot yet report.

### 9. Score an audit without punishing the unseen

Keep two numbers apart: health (how the controls you saw are doing) and evidence coverage (how much you could see).

- Known and applicable: score it. Pass or fail counts toward health.
- Unknown: lowers coverage, not health. A control you could not inspect is not a failure.
- Not applicable: touches neither. Do not pad coverage with checks that had nothing to see.
- A requested platform whose pull failed: partial, never zero. Leave it out of the portfolio score and its denominator, or withhold the portfolio score. Never call that audit complete.

Health, coverage and the list of unknowns ship together. No borrowed grade bands; the owner picks the coverage at which they will act.

### 10. Mark current against historical

Before naming any setup step, read `knowledge/stale-registry.md`. The removed eight-event priority flow on one platform is the classic trap. Mark every mechanic you name as current or historical, with its date.

## Checks before you return

- Every figure names its source: backend, a platform report (with its definitions), or "assume".
- No total was computed across reports with differing fields.
- The call rests on a mature cohort, a holdout, or backend truth; a platform dashboard alone decides nothing.
- Each cold-start history carries its own label; "unknown" is written as unknown.
- Audit health and coverage are reported apart.
- Any platform mechanic carries current/historical and a date.
