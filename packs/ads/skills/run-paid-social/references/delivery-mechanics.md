# Delivery mechanics: read the system before you touch it

Three mechanics govern why paid-social delivery does what it does. Misreading them is a top source of wrong calls: pausing the segment that kept the campaign cheap, editing an ad set while it learns, or fragmenting until nothing can optimise. Diagnose against the right mechanic, at the right level, before you pause, scale or edit. Thresholds are dated rows in `knowledge/platform-facts.md`; verify them.

## The selection model

Delivery is roughly bid times predicted click-through times predicted conversion. The auction buys predicted outcomes. So "the creative is the targeting" is mechanical fact, not a slogan. The signals an ad encodes: hook, format, copy, script, thumbnail, who appears on screen, landing page. Since the platform's retrieval rework, volume alone no longer buys reach: a new concept earns delivery; the hundredth variation of one does not.

## 1. Evaluate at the level where budget pools

On a campaign-budget campaign the system pools spend across ad sets. Only campaign totals reflect reality; an ad-set or placement cost is misleading. Under automatic placements it pools across placements inside the ad set, so read at the ad-set level. "Is this placement underperforming?" on a campaign-budget campaign is the wrong question. State the evaluation level before interpreting any number.

## 2. The breakdown effect: marginal, not average

Delivery shifts budget toward wherever the next conversion is cheapest, not where the average conversion in a breakdown report is cheapest. A placement, age or device row with a high average cost and high spend usually means the system found cheap marginal conversions there earlier in the window. Never pause or cut a segment on a higher average cost in a breakdown alone; removing it often raises total cost. To test a cut, frame it as a holdout and watch the campaign total, not the segment average. The mechanic's name may change; the misread of average for marginal will not.

## 3. The learning phase resets on edits

An ad set needs a number of optimisation events inside a window after its last significant edit to exit learning (a dated row). While learning, delivery is less stable, cost runs higher, and results are not predictive. Do not judge, and never pause on cost alone, an ad set still in learning.

Edits that reset learning (a dated row): targeting, the optimisation event, large creative changes, bid strategy or amount, budget changes above a threshold. The implication is the load-bearing part: batch your changes, then leave it alone. Daily tinkering keeps resetting the clock, so the ad set never stabilises.

"Learning limited" (cannot reach the event count in the window) is a structural problem: budget too low, audience too narrow, or too many ad sets splitting the events. Fix the structure. Do not swap the creative.

## 4. Auction overlap suppresses, it does not outbid

When your own ad sets target overlapping audiences, the platform enters only your single highest-value ad in each auction and excludes the rest. It dedupes; you do not bid up your own prices. The damage is that the suppressed ad sets cannot accumulate events, so they sit learning-limited, underspend, or deliver erratically. The account overview flags overlap. Fix it by consolidating the overlapping ad sets or pausing the weaker ones. This is the same consolidate-don't-fragment rule, here as the specific reason erratic delivery shows up.

## A diagnosis order

1. Which level am I reading at? Campaign, ad set, or ad?
2. Is the ad set in learning, or learning limited? If so, structure first.
3. Is the "expensive" row a breakdown average? If so, no cut without a holdout.
4. Do my own ad sets overlap? If so, consolidate.
5. Only then: creative, page, offer.
