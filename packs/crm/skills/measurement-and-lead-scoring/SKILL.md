---
name: measurement-and-lead-scoring
description: Judge a campaign, a copy variant, a cohort, a retention bet or a lead score on evidence the vault holds. Pre-register the gate, read enough sends, compare arms on the outcome metric, read cohorts by shape, and test a lead score without hindsight. A score never moves a stage.
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  pack: oneiron.crm
  loads-when: you judge a campaign, an A/B arm, a channel test, a cohort, a retention bet or a lead score
  data: references/lead-score-test.md, ../../knowledge/defaults.md
---

# Measurement and lead scoring

Every verdict is a call: kill, fix or scale; invest, hold or drop. It names the metric behind it, the next test and the evidence that would change it. Write the gates before the test. Never negotiate them after.

## What counts

- Coded replies, booked events, held calls, settled deposits. Not opens, not clicks. There is no open tracking.
- Reply rate is the clock on an outbound tactic. Date any reply rate you quote. Someone else's benchmark is a hypothesis, tagged by bias, never your number.
- The arm tag on each send and the code on each reply are the A/B loop. Compare arms on the campaign's outcome metric: positive replies, bookings, deposits. Model against model; model against human. Keep arm assignment fixed for the read.

## Procedure: read a campaign

1. Read the brief's GO and KILL gates and their denominators.
2. Count sends per arm. Below the floor in `defaults.md`, no verdict. Make big changes early (offer, list, angle); micro-changes only near a working baseline.
3. Hold the no-change window per channel test. Early kills are false negatives; the market lags.
4. Find the bottleneck stage before fixing anything: list, copy, reply, booking, show-up, close. Improving a stage that is not the constraint moves nothing.
5. Quality-adjust before comparing: replies that booked, bookings that showed, deals that paid. A cheap reply that never books is not cheap.
6. Write the verdict with the three parts.

## Procedure: read a sequence

- Which touch earns the replies. Put the whole case in touch one regardless.
- Which arm wins on the outcome, not on a soft metric.
- Which trigger class converts. Feed it back to the standing query's filters.
- Which reply codes dominate. Many `not-interested` on a fit list is a copy problem. Many `complaint` is a list or basis problem; stop and read `deliverability-and-opt-out`.

## Procedure: cohorts (retention)

- A cohort is bucketed by the period it started. Plot the share still paying N months on. Read the shape, not one number.
- A flat tail is a retained core. A curve that never flattens is a fit problem.
- Logo retention and revenue retention diverge. Report both. Net revenue retention above 100% needs expansion and low gross churn together.
- Realised lifetime value per cohort, not a blended average. No month-twelve reads on cohorts too young to have one.
- Lifespan is roughly one over churn. Value retention in gross profit, not revenue.
- Four dials: traffic, conversion, price, churn. Keep only metrics that trigger an action.
- Start with a spreadsheet cohort table. Do not build tooling bigger than the team.
- Watch for delayed cohort effects after any change. Aggregates bury what cohorts show.

## The north star

Quality-adjusted: frequency times depth, with guardrails that go red if the number was bought with manipulation or dependence. Before every test ask: what gets worse as this gets better. Never present daily users, time in app, logins or streaks as retention success. Graduation churn is not disappointment churn.

## Procedure: retention bets

One focus at a time. The earliest leak first. Each bet ships with the cohort number it should move, by when, and the result that would kill it. Verdicts: invest, hold, drop. Win-back usually has the worst return; earn its slot.

## Services fit

A repeatable offer shape, the share of deals that come inbound, win rate in context, pricing power, delivery leverage. Expansion counts as retention.

## Procedure: a lead score

A score decides who gets a call. It is tested like an instrument, not admired for its weights. The full test is in `references/lead-score-test.md`. In short:

1. Define the decision and the outcome horizon first.
2. Test on the whole eligible cohort, low scores included, so missed wins count. Keep unresolved outcomes apart until they mature.
3. Rebuild each lead's fields as the vault knew them at decision time. No future information.
4. Split by time before tuning. Keep one account's contacts and deals on one side.
5. Freeze features, weights and threshold. Score an untouched later holdout once. A holdout used to choose becomes development data.
6. Compare with the current routing rule on the same leads. Report precision, recall, false positives, missed wins and review cost.
7. A small or unfinished cohort is inconclusive.
8. A score never moves a stage. Stages are earned by evidence. No borrowed thresholds, horizons or cadences.

The engine has no lead-score harness yet. Until it ships, the test runs on an export and the receipt is written by hand.

## Checks

- Every verdict names metric, next test and what would change it.
- Every read cleared the send floor and the no-change window.
- Every arm comparison used the outcome metric.
- Every cohort read states its period and its denominator.
- Every lead-score report shows the cohort dates, the cutoff and the horizon.

## You slip here

- Reading a variant on single-digit sends.
- Killing a channel in week two.
- Comparing arms on reply rate when the gate is bookings.
- A twelve-month read on a three-month cohort.
- Letting a score promote a member.
