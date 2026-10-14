---
name: run-search-ads
description: Build and tend a search-ads account for a small lead-gen business. Search first, built bottom-up on high-intent terms; manual bidding until conversion history exists; negatives and match types as the weekly loop; offline conversions by click id; one action per page; a founder-sized weekly routine; slow budget steps judged over months.
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  kind: workflow
  pack: oneiron.ads
  reads: the campaign brief, the search account's report claims, crm stage claims (qualified lead, closed) for offline import, knowledge/platform-facts.md, knowledge/stale-registry.md
---

# Run search ads

You run a search account where people already type the problem into a box. The account is small, the budget is small, and patience is the main skill. The pack floor in `PACK.md` applies throughout. Every named campaign type, setting and default below is perishable; the dated rows are in `knowledge/platform-facts.md`.

## Use this skill when

- Launching a search account for a low-volume lead-gen or services business.
- Choosing campaign types, bidding, match types or negatives.
- Wiring offline conversions from the crm pack's stage claims.
- Running the weekly hygiene pass, or deciding a budget step.

## First lesson: search first, bottom-up

A new low-volume account launches on search with high-intent terms. Not the automated all-channel campaign, not AI-expanded matching. Capture the people already searching, prove which terms, assets and pages convert (allow a quarter or two), add remarketing once lists exist, then step up to colder traffic. If search impression share is still low and profitable, the next unit of budget belongs in search, not in a new campaign type. Read your own impression-share-against-cost curve; niches differ.

## Procedure

### 1. Structure

As few campaigns and ad groups as possible. Start from one campaign and one ad group in your head. Split only for a real reason: a service or location that needs its own budget control. Group by keyword theme sharing ad copy and a landing page. Never one keyword per ad group. Split when copy or page relevance changes.

Earn your way into the automated all-channel campaign. Gate it behind steady smart-bidding function on search and proven offline conversion quality. Its strength is squeezing returning, brand and bounced traffic, not finding new customers. When you run it: brand exclusions and an incrementality holdout, always. Never quote the platform's uplift figure.

Keep AI-expanded matching in a separate, audited campaign with your own performing terms and brand as negatives. Judge whether it finds new terms or reclaims brand traffic you would have won anyway. If broad match can do the expansion with more control, test broad match first.

### 2. Bidding and conversion data

Smart bidding needs conversion density to function and far more to bid well. The platform's published floor is a dated row in `knowledge/platform-facts.md`. Below it, stay manual or max-clicks and feed the deepest trackable action. A new account with no history starts manual, accumulates the deepest trackable conversion, then moves to a target as a test while you watch spend.

Never accept the recommended target blindly. Review your own 30- to 90-day results on weekly trend lines. Set the target near or just below stable recent performance. Wait if it is volatile.

Import offline conversions by click id. Capture the click id as a hidden form field, store it with the lead, and upload id, conversion name, time and value when the lead reaches the chosen stage. The crm pack's stage claims (qualified, call held, closed) are the signal. The click id matching window is a dated row. Optimise to a stage that lands before it expires. Stage the values so the engine learns depth: a nominal value for a good lead, a larger one for a quote, the real value for a sale. Pass enough range and enough conversions inside it. Never pass flat or low-confidence values.

One primary conversion action, with enough monthly volume and a short enough delay. Several primary stages send mixed signals. If closed deals are too sparse, optimise an earlier high-volume stage. For a service business with thin revenue data, a qualified-lead target usually beats a return target.

Optimise to the deepest trackable action with volume. Judge the business by profit and margin, never by a return target that ignores cost of delivery.

### 3. The weekly loop: negatives and match types

This is the day-to-day work of a small search account. Review search terms weekly, sorted by cost, largest waste first. For each bad term, find the triggering keyword and decide: pause or change the keyword, or add a negative, and at what scope (ad group, campaign, account list).

- Match the negative's type to the intent you block. A broad negative for a single word you never want (a competitor brand, a product you do not sell). An exact negative when only the exact query is bad. A phrase negative when the phrase intent should go without blocking each word everywhere. Multi-word broad negatives are dangerous; each word can block future good queries.
- Seed a negative list before launch: free, cheap, discount, coupon, sample, template, how to, DIY, definition, meaning, what is, guide, pdf, jobs, salary, course, plus your own irrelevant neighbours. Whitelist high-value terms before any account-wide sweep.
- Start exact on a small account. If exact does not spend profitably, diagnose keyword choice, site, ad copy, offer and competitors before blaming match type. Test match-type changes through a split experiment, not on instinct in the live account.

Mine the niche's pain phrases into long-tail keywords nobody bids on. The list doubles as a read on the market's own language; the offer pack reads it. Run one-variable tournaments: change the headline, or the promise, or the offer per round, never several. Cap the bid by margin times conversion rate, worked backward from gross margin. Never merge funnels with different denominators (impression to sale against click to lead).

### 4. Defaults off, added on purpose

Partner network and display are on by default on a new search campaign. Start with both off. Auto-apply recommendations and auto-created assets off. Confirm brand exclusions on any automated campaign. Test additions after maturity, disable if worse. The current toggle behaviour is a dated row; verify.

### 5. Landing alignment

Ad, then the matching page, then one action. The page shows at once the service, offer and tone the ad promised. A specific-service click lands on that specific page, never a generic homepage. Mobile first: above the fold, answer what is this, who is it for, why trust it, what do I do next. Short forms. A multi-step form if spam is the problem. A misaligned page wastes the click you paid for; it is often the real constraint, not the keyword.

### 6. Size a tiny account honestly

Build the funnel as assumption ranges. Never fabricate a cost per click, click-through or conversion rate.

```
relevant searches per day (from the keyword tool, dated)
  x impression share           assume ~X%, validate
  x click-through rate         assume ~X%, validate
  = clicks per day
  x page conversion to lead    assume ~X%, validate
  = leads per day, x30 = leads per month, as a range
  x lead-to-qualified-to-sale  from the owner's own pipeline
  = expected sales per month
```

Say plainly when the pond is small: a few dozen relevant searches a day yields low single-digit clicks a day and a handful of leads a month. That is a trickle of high-intent demand, not a volume play, and it sits below the smart-bidding floor, which is why you start manual. At that size a weekly sheet beats an API or CRM build; add tracking complexity only when it changes a decision.

### 7. The founder's weekly routine, in priority order

1. Spend and segmentation. Move budget toward the terms already producing; cut obvious waste. The biggest, fastest lever.
2. Targeting. Keywords, locations, the search-terms report, the negatives sweep.
3. Ads and landing pages. Message match, the single next action, mobile.
4. Bidding. Last, and rarely at this volume.

Plus a simple sheet where the owner marks each lead good or bad with its source, so lead quality feeds back. Reinvest from profit, not emergency cash.

### 8. The agent ops loop

Connect, pull, audit, fix, ship, learn. The agent pulls the account, flags the four wastes, proposes the fixes; the owner approves through the dispatch gate; ship; re-measure. The four wastes, every cycle:

- Zero-conversion spend: terms and campaigns burning budget with no qualified conversion. Cut or fix first.
- Low-quality-score terms: poor relevance inflating cost per click. Fix ad, page and keyword match.
- Broad-match cannibalisation: broad terms eating queries an exact term would win cheaper. Tighten and add negatives.
- Dead budget: spend on campaigns that no longer convert. Reallocate to what produces.

The audit checklist is durable; the tooling churns. Reach for the loop when the account is big enough that manual auditing misses waste, not as complexity on a tiny account.

### 9. Budget and scaling

Budget changes are slow for small accounts: a step a month, and watch whether the campaign even spends the increase. Larger stable accounts with impression-share headroom move faster. Judge in months two and three; the first month is data collection. Never make bidding decisions on daily data; use weekly and monthly trend lines. Judging a new campaign at two or three weeks is the most common way a founder kills an account that was about to work.

The scale ceiling is diminishing returns, not the calendar: spend rises while conversions flatline, added budget stops spending, or cost per action degrades. Pull back, let it settle, wait a full sales-cycle window, retry. Scaling is non-linear.

Pre-register the kill and scale rule sized to the cap, with denominators. After a fair spend window matched to the sales cycle: exact terms that produce qualified leads at or under the CAC ceiling scale a step at a time. A term that spends a meaningful share of the cap with zero qualified leads is cut. Quality-adjust by close rate before naming a winner.

## Anti-patterns

- The automated all-channel campaign, or AI-expanded matching toggled into core search, on day one of a low-volume account.
- Many tiny automated campaigns starved of conversions; one campaign with the volume beats five with a tenth each.
- Accepting the recommended target, or a return target on thin sales data.
- Counting shallow events as conversions: page views, directions, widget clicks.
- Platform defaults left on: partners, display, auto-apply, auto-assets, missing brand exclusions.
- Expanding beyond exact before exact is maximised; live match-type changes on instinct.
- Heavy tracking or automation on a tiny account.

## Checks before you return

- Campaign type, bidding start and every default named carry a date and a verify flag.
- The sizing is ranges with "assume, validate" on every rate not from the account's own data.
- The conversion action is one, deep, and wired to a crm stage with a click id.
- The weekly loop is written as a routine the owner can run in the time they have.
- The kill and scale rule carries a spend floor, a time window and the CAC ceiling.
