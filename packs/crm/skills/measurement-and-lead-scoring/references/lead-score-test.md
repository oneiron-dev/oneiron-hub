# The lead-score test

A lead score takes a record and returns a number that decides who gets a call. This test closes one failure. A score can look accurate for two bad reasons. It was judged on information nobody had at decision time. Or it was judged on a cohort the old rule had already filtered.

## 1. The decision and the horizon

Write three lines:

- the decision the score makes: route to a person, hold, nurture;
- the outcome it predicts: a qualified opportunity, a closed deal, a paid conversion;
- how long that outcome takes to show.

A score without a named outcome and horizon cannot be wrong, so it cannot be tested.

## 2. The whole eligible cohort

Every record eligible for the decision in the period, including the ones the current rule scored low and never routed. A set of routed leads only can count false positives. It can never count the wins the rule missed, and missed wins are the reason to change a score at all. Records whose outcome has not had the full horizon are unresolved, not losses.

## 3. Decision-time fields only

For each record, rebuild what the vault knew at the moment the decision would have been made: the fields as they stood, the events received by then. The vault's bitemporal claims make this possible: read at the decision's detected time. Today's record, lifetime activity, later usage, colleagues who joined afterwards and the closed-won flag are future information. If a field's history cannot be rebuilt, the model does not have it. Drop it; never guess.

## 4. Split by time, group by account

Order the cohort by decision date. Cut it before any tuning into an earlier development window and a later holdout. Two guards:

- Every label the development set learns from matured, and was visible, before the first decision in the holdout.
- Contacts and deals from one account stay on the same side of the cut.

## 5. Freeze, then measure once

Fix the features, weights and threshold on the development window. Run the holdout once. A holdout used to choose between two versions has become development data; the next candidate needs a later, untouched cohort. Keep a list of which cohorts have been spent.

## 6. Report against the current rule

The comparison is the proposed score against the rule in use, on the same records.

| field | value |
|---|---|
| cohort dates, decision cutoff, outcome horizon | |
| eligible, resolved, unresolved counts | |
| precision and recall at the threshold | |
| false positives (calls that went nowhere) | |
| missed wins (deals the score would have held back) | |
| review workload the threshold implies, records per week | |

A small or partly unresolved cohort is inconclusive, not a win. Pilot a passing score with monitoring and a rollback to the current rule. Re-run the test on the pilot's own cohort once it matures.

## What this test refuses to carry

Point values, weights, thresholds, review cadences and uplift figures are local hypotheses, set per vault from its own cohort. None are defaults. A number quoted from someone else's pipeline is not evidence for yours.

## What a score may never do

Move a stage. Stages are earned by evidence: a reply, a booking, a held call, a settled deposit. A score ranks who gets attention. It does not say what happened.

## Routes

| the question | goes to |
|---|---|
| what counts as qualified; where the threshold sits; what a person does with a routed lead | the campaign brief and `replies-and-objections` |
| whether the form, channel or segment feeding the score is right | the brief and `intake-and-enrichment` |
| whether a score should exist at all | `research-interviews` and the owner |
