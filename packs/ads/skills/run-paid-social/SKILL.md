---
name: run-paid-social
description: Build and tend a paid-social account for a consumer launch or a direct offer. Consolidate, go broad, let the creative do the targeting, optimise to the deepest trackable action, read delivery at the level where budget pools, scale in small steps, grow sideways through creative, and send each ad to a page that finishes the job.
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  kind: workflow
  pack: oneiron.ads
  reads: the campaign brief, per-creative performance claims, backend conversion claims, knowledge/platform-facts.md, knowledge/stale-registry.md
  data: references/delivery-mechanics.md, references/post-click-pages.md
---

# Run paid social

You run the machinery around the creative: structure, audiences, budgets, bidding, delivery, scaling, and the page each ad lands on. The creative itself is `build-creative`; synthetic video is `produce-ai-ugc`. The pack floor in `PACK.md` applies throughout. Every named setting is perishable; dated rows are in `knowledge/platform-facts.md`.

## Use this skill when

- Launching or restructuring a paid-social account.
- Setting budgets, bids, caps or attribution windows.
- Delivery looks erratic, a segment looks expensive, or an ad set sits in learning.
- Deciding a scale step, or diagnosing a plateau.
- Choosing which page an ad set points to.

## First lesson: the account is not the lever

Consolidate so conversion signal flows through one learning system. Daily work is add ads, turn off losers, adjust budget. Not re-architecting. If the day goes to debating budget modes and caps, you are working the wrong end. When performance lives and dies with one winning creative, the answer is a creative system, not a clever account.

## Procedure

### 1. Structure

Split campaigns only for meaningful differences: a different product line, a different business geography, a deliberately different strategy or economics. Not by colour, interest or persona. Fragmentation starves learning: a week's conversions spread across ten ad sets gives each a handful, too thin to optimise.

Campaign budget for scaling; ad-set budget for control. Validate a concept with an ad-set budget, promote proven winners into the campaign-budget scaler. Never add untested ads straight into the scaling campaign.

Ad-set size follows purpose. Reading a test: a few variants of one concept (the platform's own recommended count is a dated row). Scaling: pack many and judge the set by its total contribution. The question is "am I reading this, or scaling it?". Small budgets always lean fewer.

Copy testing follows the same question. Need to know which line wins (early learning, building taste)? Duplicate ads so each carries one text variant. Trust delivery at scale? Use the ad-level text fields. Default for a founder still learning the message: duplicate to learn, then switch.

Funnel-segmented account builds are historical (`knowledge/stale-registry.md`). The current shape is prospecting, retargeting and creative testing, with the creative doing the targeting.

### 2. Audiences

Go broad and let the creative call the buyer. Age, gender and location, and only where the product or the law requires a limit. The ad's message and visuals name the buyer, the persona and the awareness stage; the content creates the audience.

Know hard controls from suggestions. Only location, legal minimum age, required language and true exclusions are hard limits. Everything else is a suggestion the platform may exceed. Treating a suggestion as a guarantee is how a "cold" ad set fills with warm traffic.

Add warm custom audiences as suggestions, not as structure. Retention windows are dated rows. Do not exclude past buyers by default; they buy again, comment and refer. Exclude only a group that truly should not see the offer.

Retargeting share falls as the pixel matures. A new pixel front-loads prospecting to build pools. A mature account in the consolidated era keeps a small retargeting slice, because warm audiences already live inside broad prospecting. Lookalikes are a fading secondary test; the platform matches from your signals on its own. Never build the account around them.

### 3. Budgets and bidding

Daily budgets by default. Lifetime budgets only where scheduling matters, such as a lead campaign that should run business hours because speed-to-lead changes quality.

Cost-per-result is a target, not a cap. Set too low, ads underspend or fail to run. A business with idle sales capacity may prefer a higher cost with more volume.

No cost caps on a new campaign. Let it run at least a week to establish an average and a spike pattern, then set a first cap modestly above average. Caps at or below the average suffocate delivery. Loosen when targeting, product or creative changes materially.

Optimise to the deepest action you can track with volume. Purchases if you have them. A new pixel with no purchase volume optimises add-to-cart or checkout, then graduates. A lead motion optimises the qualified-lead event. For a subscription app, trial start or subscribe. Never link clicks, page views or engagement when the goal is sales. A thin pixel chases volume before targets and caps.

The attribution window is the data the platform learns from, not only a report setting. The common default and the alternatives are dated rows. Do not judge a 7-day-click campaign after two days.

### 4. Read delivery before you touch it

Three mechanics explain most wrong calls. Read them in `references/delivery-mechanics.md` before pausing, scaling or editing:

- Evaluate at the level where budget pools. Campaign totals on a campaign-budget campaign; ad-set totals under automatic placements.
- Delivery optimises marginal efficiency, not average. A high-average-cost segment can be the one keeping the campaign cheap. Never cut on a breakdown report alone.
- The learning phase resets on every significant edit. Batch changes, then leave it alone. "Learning limited" is structural, not creative.
- Your own overlapping ad sets suppress each other's learning; the platform dedupes. Consolidate.

Read soft metrics as a set, cost per click first, then click-through, hook and hold rates, and frequency. They are a check-engine light that routes a failing test to its cause; they are not the decision metric. Calibrate them against your own account, not a borrowed table.

### 5. Scaling

Grow in steps smaller than the platform's learning-reset threshold, a dated row. On one platform that is about a fifth of the budget. Step every few days, when the campaign hits its targets. Never double overnight; a doubling resets learning. The named exception is a real sales period or a product that is plainly crushing it.

Small automated increments beat big jumps. Set a ceiling. Read recent windows: a seven-day view, not a multi-year one that hides last week's deterioration.

Horizontal growth comes from creative, product and offer tests, not from new ad sets that test nothing. Scaling spend without scaling creative production is the central anti-pattern: budget with nothing fresh to spend on fatigues the winner faster.

Let a test winner prove itself with real spend, then promote it. Duplicate it into prospecting and retargeting, or move it by post id into a dedicated winner ad set to keep its engagement. Do not turn off the original while it stays in goal.

Diagnose a plateau before forcing budget. Weak cost per click means the creative or hook. Strong clicks and weak conversion means page congruence. Both strong means press on order value with bundles or post-purchase offers. Forcing budget into a saturated campaign degrades cost.

### 6. Reads and kills

Daily volatility at small and mid spend is noise. Read a seven-day window cleared of day-of-week effects. Read earlier only when volume is high. Never kill on a day with no purchases; the platform needs days to optimise. Do kill if a few days produce no spend at all; delivery refused it. Emergency shutoff inside a day only when an ad took real spend and damaged the account; check for backlash first.

Pre-register the kill rule with denominators before launch, every time. Prefer time-windowed reads with a spend floor as a sanity check. Has this had a fair chance, enough days and enough spend for a conversion or two? Is the campaign improving?

### 7. Consumer-app launch on a small budget

1. Economics first. Derive the CAC ceiling from price and assumed retention; write every rate as "assume, validate". A small budget buys learning, not scale; organic-first while the message is unknown still applies.
2. One consolidated campaign, broad, the creative carrying the targeting. A few variants in one small testing ad set. No funnel stages, no persona splits at the ad-set level; segment by creative.
3. Optimise to the deepest trackable action you have at launch (trial start or subscribe). If too thin, optimise a reliable earlier event and feed the deeper one as data accrues. Protect the training signal with a trial qualifier: fire trial-start only after a cancellation window you choose.
4. Post-privacy measurement: platform-reported installs are modeled; decide from first-party subscribe events and a simple holdout. The current measurement mechanics and the removed ones are in `knowledge/stale-registry.md`.
5. The honesty floor applies to every concept (`write-ad-copy`): real claims, disclosed presenters, no manufactured shame, nothing the product cannot deliver.
6. Pre-register kill and scale lines. At this budget read a seven-day window; kill an angle that gets fair spend and no trial starts; scale a step at a time only once an angle holds.

A solo operator runs one channel, adjusts a couple of times a week rather than daily, and needs no expensive measurement partner at this size. Web-to-app funnels (web onboarding and payment before install) are a common pattern; store policy decides whether your market allows it, a dated row.

### 8. Short-video platform specifics

Boost proven organic posts as ads; engagement accrues to the original post. The limits are dated rows. Creator codes track a creator's traffic and read as a floor. The hook window is longer than on the feed platform (a dated row); carry the two separately, never averaged. Refresh by adding creatives to the existing ad group, with big differences between creatives, not micro-variants.

### 9. The page each ad sends people to

The creative does the targeting; the page finishes the job. Map a competitor's post-click pages from the public ad library the way you mine their ads, and build your own in the small-budget order. Patterns and the order are in `references/post-click-pages.md`.

Two rules travel: never split-test the first page your ads point to (test with new post ids and a new URL; downstream pages test fine), and indirect ads need an indirect funnel (an advertorial, a listicle, a quiz) before the sales page. A mismatch reads as a page problem when it is funnel architecture.

### 10. The agent ops loop

Research, analyse, build, generate, funnel, optimise. The agent mines what is winning, models it, builds variants, generates assets, wires the funnel and optimises on the real outcome. Ads that have run thirty days or more count as proven in the swipe file; see the longevity rule below. One argument per ad. The owner approves spend through the dispatch gate. Reach for the loop when creative volume is the bottleneck, not as machinery on a tiny budget.

Ad longevity picks hypotheses, nothing more. A long-running ad shows sustained use, not proven performance. The ad count shows visible emphasis, not spend. The library shows no spend, no return, no budget. Use both to choose what to test first; never infer a competitor's return or budget from them.

## Anti-patterns

- Media-buying hacks to rescue stale creative: duplicating campaigns, stacking caps, building structure around a tired angle.
- Over-segmentation that spreads conversions below the learning floor.
- Suggested targeting treated as guaranteed; hard controls used for casual preferences.
- Excluding all purchasers by default.
- Optimising to a shallow action.
- Doubling overnight; scaling spend without scaling creative; big automated jumps; multi-year reporting windows.
- Killing on a day of noise at a small budget.
- Calling an account cold from one history (`measure-and-attribute`).
- Reading the ad library as a ledger.
- A page with a full menu and many choices when one button would do; a download button for the wrong device; a new layout per segment.

## Checks before you return

- Every setting named carries a date and a verify flag.
- The structure is consolidated and the reason for each split is written.
- The optimisation event is the deepest trackable action with volume, and its window is stated.
- Any pause or cut names the level it was read at and the mechanic it was checked against.
- The scale step is below the learning-reset threshold and the read window is seven days.
- Kill and scale lines carry denominators and were written before launch.
