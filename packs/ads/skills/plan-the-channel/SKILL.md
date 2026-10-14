---
name: plan-the-channel
description: Pick one acquisition channel for an offer whose demand and price are settled, size the bet to the owner's real money and hours, pre-register the kill and scale lines, judge a borrowed playbook against the offer, and make the quarter-end kill, fix or scale call.
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  kind: workflow
  pack: oneiron.ads
  reads: the campaign brief (offer, buyer, price, CAC ceiling, business shape), knowledge/platform-facts.md
  data: references/playbook-fit.md
---

# Plan the channel

You choose where the next acquisition experiment runs and what result ends it. You write the economics before the buildout and the verdict rule before the first spend. The pack floor in `PACK.md` applies throughout.

## Use this skill when

- The brief asks which channel to test, or whether to add one.
- Someone's growth playbook, course or case study is on the table.
- A channel has run its window and needs a kill, fix or scale call.
- A budget tier changed and the plan must change with it.

Not this skill: market choice, demand tests, pricing and live deals belong to their own stages. If demand or price is unsettled, say so and route there. Ads scale a known winner; they do not find one.

## First lesson: economics before buildout

1. Name the north-star metric and the backend economics: margin, value of a customer, lead-to-sale rate, how many leads make a sale.
2. Derive the CAC ceiling from lifetime gross profit, not revenue, not a topline LTV.
3. Set platform targets from the ceiling.
4. Only then build.

Write the quarter-end rule first. What result triggers KILL, what triggers SCALE, what triggers FIX. Each line carries its metric and its denominators: a spend floor and a time window. "CPL under X" is not a rule. "CPL under X over at least N conversions and N weeks" is.

Any value-to-CAC ratio or payback window you plan on is an assumption to validate against the owner's own cohorts. Write it as "assume ~X (validate)". Never write a borrowed one as a benchmark.

## Procedure

### 1. Read the market before the channel

Demand shape picks the channel:

| the market | the channel |
|---|---|
| people already type the problem into a search box | search, SEO, AI answers |
| a new category nobody searches for yet | education: content, video, social |
| a sudden need that strikes once | search, at the moment |
| a mass consumer product with broad appeal | one big social platform |

A trigger moment goes where the person goes when it hits. If they search, feed the moment bank into search pages and ad copy. Run it as social posts only when the moment recurs across many new people and they already talk about it there.

Funnel shape follows price band, awareness stage and buyer behaviour. A cheap purchase takes a lead magnet or a direct message. A mid-priced one earns its price through a quiz or an advertorial. A costly one needs a call, often fronted by a video. A very costly one needs a long nurture before the ask. Unaware traffic needs a story first; problem-aware traffic takes a comparison; solution-aware traffic can go straight to the page. A funnel without its email spine (after opt-in, before the call, after the call) is unfinished; the crm pack owns the sequences.

### 2. Size the bet to the team

One channel experiment at a time for a team of two or fewer. Two is the ceiling. Four logos on a slide is four half-run tests.

Budget founder-hours per channel as well as money. A search account at small scale runs on a short weekly review. A creative-led social channel needs a creative system shipping new concepts every week. A channel the team cannot staff is a guaranteed failed test, not a cheaper channel.

Budget tiers, by what is realistic:

- Small. One channel, fully resourced. High-value B2B goes to search on high-intent terms, manual bidding while conversion data is thin, a weekly hygiene pass. No automated all-channel campaign, no mass paid social. Incrementality is a manual holdout. Referrals systematised first; search authority as the compounding long game.
- Mid. A second channel becomes defensible once the first is proven and systematised. For B2B lead-gen, the automated campaign types are earned, with brand exclusions and a holdout. For a consumer app, a weekly creative system is the real unlock.
- Scaled. Several channels, blended efficiency as the north star, platform return demoted to diagnosis. Separate acquisition from retention budgets. Run formal incrementality. Scaling is non-linear; never forecast it as a line.

Mass social rarely pays for a niche, high-ticket service. Show the arithmetic. A social platform sells reach by the thousand impressions; the buyers for a niche service are a sliver of any feed, so most spend reaches people who will never buy. The same buyer, when the problem hits, types it into search, where you pay per click for declared intent. For a small team selling a few costly engagements a year, reach cost loses to intent cost before taste enters it.

### 3. Give each channel a role before stacking

Stacking needs people, not only budget. When the team can feed it, each channel gets a role first:

- Spend channels (paid search, paid social) turn budget into cash fastest.
- Print channels (in-house creative, creator programs, launches) make creatives and touch points; their winners feed paid.
- Track channels (affiliates with links and codes) are the closest organic gets to attribution.

Several organic touches before a paid last touch make paid look cheaper than it is. Read the stack by blended efficiency, never by one channel's return.

### 4. Minimise account machinery

The ad account is not the lever. Consolidate so conversion signal flows into one learning system. Spend the freed day on creative, offer and message. When performance rises and falls with one winning creative, the answer is a creative system, not an account tweak.

Go organic while the winning message is unknown. Paid scales a known winner. A founder who cannot name the winning angle is buying data, not customers; buy it as cheaply as possible.

### 5. Judge a borrowed playbook

Take any playbook apart into five parts: attention, trust, close, price and decision, operator load. Write what it assumes without saying. Read the offer on the nine fit variables. Check the fit table. Treat the seller's numbers as hypotheses: check the denominator, the arithmetic, the review ledger, independence and attribution. Keep the mechanism; drop the numbers. The method, the fit table and a worked teardown are in `references/playbook-fit.md`.

Revenue gates ("ads only above X revenue") and arbitrage calls ("this platform is underpriced right now") are both gating rules, not verdicts. Reconcile them on unit economics and a floor budget. A small operator skips the expensive mainstream auction. It may still take a mispriced pocket, with a pre-registered kill line and a dated read of the platform. These pockets reverse within quarters.

### 6. Test fit cheaply

The cheapest fit test is one offer, one channel, a pre-registered window, a tagged chain, a weekly human read and a kill line.

- The window. A learning window and a stopping rule chosen up front. For an organic channel, the window is a post count across formats that you set and write as "assume ~X (validate)"; a format search needs many posts before it says anything.
- The chain. Reach, then profile visits, then link clicks, then unique paying buyers, minus refunds. Tag the link per format so buyers are countable.
- The weekly read. The scheduler posts. A person reads the chain each week and changes formats. Drop what gets reach and no clicks.
- The kill line. A count of paying buyers by the end of the window, written first.

A smoke test for an unproven offer belongs to the discovery stage. These rules carry over:

- One problem-first promise and one action, graded by commitment: an email is weak, a deposit is real.
- Two or three ad framings as separate creatives.
- Honest budget maths: a few hundred visitors gives direction, not significance.
- A time box, and failure forks written in advance.
- Signups become the interview pool, not a green light.
- The page never claims the product exists and never charges for vaporware.

Ad-native tests skip the page: a platform lead form straight to a conversation; a free tool that does one job; a demo video; a manifesto page for a values-led product. Each has its gate. The conversations are the evidence, not the clicks.

Test a channel on its own before building for it: post problem content from a small account. No breakout after many tries kills the channel, whatever the product.

Read competitors' launch-era pages in a web archive. Their early copy shows what the category believed before it had money.

### 7. Make the call

Find the bottleneck stage first. A funnel is a chain. Improving a stage that is not the constraint moves nothing. Name which stage caps revenue (creative, traffic, page conversion, response time, close rate) and put the next test there.

Then three disciplines:

1. Quality-adjust CAC by retention before comparing channels. Effective CAC per retained user = acquisition cost divided by the fraction still paying after the retention window. A cheap channel that churns is not cheap.
2. Read the trend and the learning, not a snapshot. A channel whose effective CAC improves and that still teaches you what converts is a fix or scale candidate. A flat, expensive channel with worsening cohorts is a kill, or gets one last pre-registered creative test.
3. Treat paid as a bridge on the organic engine. If referrals carry the business, paid's job is to accelerate, not to be the engine.

Compute payback on retained gross profit, never on first-payment revenue.

For a consumer app, install costs only rise as a platform matures. Underwrite the CAC ceiling against rising install cost and recover revenue in the first session; the offer pack owns the monetisation.

The three verdicts:

| verdict | the metric | the next test | what changes the call |
|---|---|---|---|
| KILL | effective CAC above the ceiling, trend flat or worse, cohort quality falling, no diagnosable lever left | none, or one final pre-registered creative or offer test | a genuinely new angle, or a retention fix upstream |
| SCALE | effective CAC under the ceiling, payback met on gross profit, a winning message, headroom | the specific scale step, at a safe cadence | diminishing returns: added budget stops spending or CAC degrades |
| FIX | economics close, trend improving, one lever diagnosably off | the single change to that lever, with a re-judge date | the fix lands (scale) or fails to move the metric in a fair window (kill) |

Actionable metrics over vanity metrics. When growth stalls, hunt the fact that disproves your story, not the one that comforts it.

### 8. Agencies and help

Hire an agency to learn a capability and bring it in-house, not to rent it forever. Structure the engagement so they teach until the skill lives with the owner. Match fees to spend and stage. Never hire an agency so a channel is "managed".

## Checks before you return

- The CAC ceiling and its derivation are written, with the backend inputs named.
- Kill, scale and fix lines each carry a spend floor and a time window.
- The plan names one channel and the weekly founder-hours it needs.
- Every platform fact carries a date and a verify flag; every figure is sourced or marked "assume".
- The verdict names its metric, its next test and what would change it.
- PREP (maths, structure) and SEND (anything a buyer sees) are visibly separate.
