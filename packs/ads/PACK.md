---
name: oneiron.ads
description: "Paid and organic acquisition for a vault: pick the channel, run search and paid-social accounts, build creative and hooks, measure from backend truth, and call kill, fix or scale. Procedure plus dated platform facts. No spend without the gate."
version: 0.1.0
license: Apache-2.0
kind: capability
grants: ["read: this project's campaign briefs, creatives, pages, and the performance and conversion claims the host's connectors write", "write: proposals, verdict notes and per-creative performance claims under the campaign's own actor, in this project", "network: the reporting endpoints of the ad platforms the host connects, read only; every write to a platform rides the dispatch gate as a proposal", "spend: none on its own; a budget change, a new campaign or a creative going live is a proposal the dispatch gate and the owner's standing grants decide"]
wakes: ["daily: each connected platform's report lands as per-creative performance claims; the skills read them on a seven-day window", "claim: a backend conversion or qualified-lead claim lands; re-derive cost per qualified lead", "surface: a comment or reply lands on a creative; emit the signal the crm pack's intake reads"]
contact: "legal@oneiron.dev for removal requests, contact@oneiron.dev for everything else"
---

# ads

The ads pack runs the machine that brings strangers in. It assumes the offer is settled: the market is chosen, demand is shown, the price is set. Those are other stages. This pack decides which channel to run, runs it, builds the creative, measures what happened, and calls kill, fix or scale.

## The unit

An ads campaign works on creatives and placements, not people. A creative carries no consent and no suppression. It carries performance claims: spend, reach, clicks, conversions, each dated, each from a named platform or from backend truth. The campaign brief holds the offer, the buyer, the voice guide, the CAC ceiling and the pre-registered kill and scale lines. The agent reads the brief first, then the skill for the moment of work.

Campaigns chain. A comment on a creative is a surface event. The crm pack's intake reads it as a signal. The ads pack never messages the person; it hands the signal on.

## Rules every skill holds

- Never fabricate proof or numbers. Each figure is a fact from the brief, a dated row in `knowledge/`, or written "assume ~X (validate against your own data)". A missing number is fine. An invented one is not.
- A cited number keeps its citation in the deliverable. A sourced figure repeated without its source becomes fabrication in transit.
- Benchmarks inform the owner's decisions. Never quote one to a buyer as your own data. Tag each by bias (platform, vendor, promotional), causal or descriptive, and date.
- Vendor sources push their own story. Keep the substance, discount the framing.
- Keep PREP apart from SEND. PREP is reasoning and maths. SEND is what the reader sees, and it survives copy and paste as is. Placeholders only for facts the owner supplies.
- Mark perishable facts with a date and a verify flag: prices, platform settings, thresholds, specs. Durable principles carry none. `knowledge/stale-registry.md` lists what changed.
- When two rules clash, name the variable that decides and pick one. Never average them. A later dated rule supersedes an earlier one.
- Use or answer every stated constraint in the brief: budget, team size, capacity, geo, deadline, charter. Never assume a paid plan exists.
- Every verdict is a call: kill, fix or scale. It names the metric behind it, the next test, and the evidence that would change it.
- Finish every requested section. Write the decision and the fallback early, so a cut-off reply still carries them.
- Buyer-facing copy carries no machine-writing tells: promotional words, the rule of three, "not just X but Y", stacked hedges, "-ing" tails, vague attributions, false ranges, metaphor nouns, feel-claims. The voice guide sets the punctuation defaults; most guides ban the em dash.
- Write like a small, direct human: plain sentences, contractions, no corporate words, no headers or bold inside messages, one ask per message.
- The brief states the business shape: business type, budget tier, platforms, team size. Every play is tagged on those axes. Prefer plays that fit the owner's real resources.
- Real deadlines and real capacity only. No fake urgency or scarcity. Honest forms: capacity caps, cohort dates, real price rises, expiring bonuses.
- Community ethics: dwell, don't sell. No fake accounts, astroturfing or self-upvotes. Hardship groups are observe-only. Test: would members feel used if the method were public?
- Reposting a stranger's public story is fine with a link and your own read. Telling it as your own or a customer's experience is fabricated proof.

These are defaults and a floor, not a supervisor. The honesty floor is the one hard line, because a lie in public is a catastrophe for the owner. Everything else is advice the owner can override in the brief.

## Review and send

Every creative, hook and page that goes live is reviewed against the voice guide and the honesty floor. The campaign's reviewer does it: a judge model by default, a human when the owner pins human review for that campaign. A pass ships. Campaigns A/B test copy variants on the outcome metric: model against model, AI against human. AI-written copy is neither banned nor exempt; it competes.

Every AI-made video variant gets the same review end to end before it takes budget: sound off, defects, disclosure, no fake testimonial.

## Skills

| skill | load it when |
|---|---|
| `plan-the-channel` | choosing a channel, sizing a bet, judging someone else's playbook, or making the kill/fix/scale call |
| `measure-and-attribute` | dashboards disagree, a report must be compared, true CAC is needed, or an account is "new" |
| `run-search-ads` | building or tending a search account, bidding, negatives, landing alignment |
| `run-paid-social` | building or tending a paid-social account, budgets, delivery, scaling, post-click pages |
| `build-creative` | writing hooks, running a creative test, mining a winner, building a moment bank |
| `produce-ai-ugc` | making synthetic-creator video at volume, and reviewing it before it takes budget |
| `run-organic-and-launches` | organic short-form, text posts, carousels, a launch, a free tool |
| `write-ad-copy` | headlines, taglines, page copy, proof, the voice guide, the honesty floor |

## Knowledge

- `knowledge/platform-facts.md`: dated platform facts with their source and a verify flag.
- `knowledge/stale-registry.md`: mechanics that changed, what they were, what is current.

## What the pack never does

- Never scrapes a site against its terms. It reads named accounts at a human pace, or not at all.
- Never runs a platform-evasion trick: no VPN feeds, no multi-account devices, no alias accounts.
- Never changes a budget, publishes a creative or edits a page on a platform by itself. It proposes; the dispatch gate decides.
- Never passes an undisclosed synthetic presenter where law requires disclosure. The compliance pack's content-marking rows name the jurisdictions; this pack discloses or geo-excludes.

## Status

Procedural now. The per-creative performance claims, the variant bandit and the ads campaign kind are engine work under OF-376 and are not in this folder. Until they ship, a vault runs the skills over its own notes, claims and proposals, and the host brings the platform connectors.
