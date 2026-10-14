---
name: research-interviews
description: Run a campaign that recruits people to learn from, not to sell to. Recruit by recent behaviour, ask about their past, listen far more than you talk, grade what you heard by commitment, and pre-sell only with the price and the current state said plainly.
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  pack: oneiron.crm
  loads-when: the campaign recruits interviewees, runs churn or switch interviews, or pre-sells an offer that does not exist yet
  data: references/question-library.md, ../../knowledge/voice-floor.md, ../../knowledge/defaults.md, ../../knowledge/presets/consultancy.md
---

# Research interviews

Research is not selling. No pitch dressed as research. No leading questions. If you slip, say so and recover. A research campaign and a sales campaign never share a person: cross-campaign exclusion is a claim, not a courtesy.

## Who to interview

| moment | who |
|---|---|
| before the product exists | only people who pass the early-adopter filter: they have the problem, they know it, they have budget, they already built a workaround |
| after it exists | new, happy and churned users; churned yield the most and are the least run |

Feedback from people who match none of the four is noise wearing a smile. Weight synthesis accordingly.

## Recruiting

- Recruit by recent concrete behaviour, never by your guess about their pain. "People who hosted a weekly event this month," not "people who struggle with event planning."
- The ask says it is research. One ask per message. Easy to accept. Specific time windows. Under 120 words.
- A cold meeting ask has five beats. The thing you want to make less painful. That you have nothing to sell. The thing you do not understand. Why they, specifically, can cut through it. The ask, with a window.
- Channels, each with its own shape:
  - forums: check the rules; a plain post with goal, who, length, confidentiality, incentive
  - social: people already posting about the problem or a rival's flaw; name the post
  - professional networks: evidence of relevance; ask for insight, never a demo
  - existing customers: a founder-signed note, a short ask, a calendar link
  - in-product: a short ask with an incentive, routed to scheduling
- Overbook. Plan for no-shows. Incentives by type: a small card for discovery, cash for churned users, something more for screen-share labour, a thank-you note for happy customers. Send the incentive on the call and confirm receipt.
- No-show: wait a quarter hour, then a kind note assuming something came up, with a link.

## Format by mode

| mode | format |
|---|---|
| open discovery: what matters to these people | one or two story prompts |
| a known process: switch, cancellation, usability | a typed script anyone trained can run |
| a casual or early chat | a short list of three big questions |

Across all three: their past, specifics, mostly listening. A plan is a timed script: core versus optional, minutes per part; the midpoint "anything else I should know?" then silence.

## Technique

- Ask to record. Say you are paranoid about missing things and it will not be shared.
- Neutral acknowledgements. Validate without agreeing. Never correct their facts; their model is the data.
- Anchor fluff: "usually," "always," "I would" get "when did that last happen? Walk me through it."
- Dig at emotion. Stop the script and ask for the story.
- Deflect compliments: "how are you dealing with it at the moment?"
- Conceal the idea when testing the problem. Reveal it when testing the solution. The sin is pitching while calling it research.
- One or two interviews a day. They are expensive. Start with easier types before cancellations.

## The question library

In `references/question-library.md`: replacements for "would you buy" and "how much would you pay," story prompts, and sequences for discovery, switch, cancellation and usability.

## Churn interviews

- Never a win-back call. The goal is to learn what misfit your marketing attracted.
- Discard non-target users; their fixes optimise the wrong product.
- Act on repeated signals, not one loud one.
- Ask for concrete inputs: "what did you expect on this screen?" Never "what should we build?"
- Discard praise from people who never used it.
- Interview happy customers too; weighting only cancellations distorts toward bad fit.

## Observe, do not only ask

What they do with an answer on Monday morning beats what they say they want. A stubborn technical objection often protects a workflow; go watch it. Interview the exception path, not the golden path. When embedded with a customer and the fix is under a day, ship it instead of a study; what they do with it is the evidence.

## Grading what you heard

Facts, commitment and advancement count. Everything else is a hint.

| level | evidence |
|---|---|
| 1 | stated intent, compliments, likes |
| 2 | an unprompted public complaint |
| 3 | time: they showed up, returned unprompted |
| 4 | reputation: a public recommendation, an introduction, a letter of intent |
| 5 | money: a prepay, a deposit, a subscription |
| 6 | repeated behaviour over time |

Say "hint," not "validated." A future promise converts on the spot: ask for the deposit, the introduction, the pilot date. A claimed problem with no search history is a non-problem. Existing spend is the anchor. Competitor traction proves a market, not you. A synthetic persona may kill or revise a draft, never pass a demand gate.

## Synthesis

- A snapshot after each interview: one quote, quick facts, the need in the customer's own words.
- A need counts once it appears twice. Pain times frequency sorts them.
- Keep exact phrasing. It becomes copy and positioning later.
- Set the next three questions after every batch. A program with no current question list is a habit, not research.
- Stop at saturation inside a tight segment. Five is the floor for a decision. Scatter past ten means the segment is fuzzy; tighten it, do not add interviews.

## Pre-sales

- A pre-sell pitch states the price, the deliverable and the timing plainly. Hiding the price turns a commitment test into a curiosity test.
- The sprint: ten reachable likely buyers; "for {{price}} I will {{outcome}} in {{time}}"; ask for money; set the pass bar before you start.
- Listen to the problem, float two or three options, turn the one that lands into a priced offer.
- A commitment offer for businesses: a small named early cohort, a time window, money back if the promise fails, charged on day one.
- The parallel offer test: mine community questions, write five to ten truly different offers, send each to a cold list, pre-register booking-rate bars, kill fast.
- Warm contacts are fine for the first sales if the ask is real money at a real price. Cold buyers before claiming repeatability.
- Every no gets four questions: why, who would want this, what would make it obvious, what would you pay for that.
- Never misrepresent the current state. Say what exists and when it ships. Take a founding-customer commitment on that basis.

## Checks

- Every recruiting message says it is research and carries one ask under the cap.
- No interviewee is also a prospect in any campaign.
- Every interview snapshot exists before the next interview starts.
- Every verdict names the highest evidence level reached and the next commitment step.

## You slip here

- A question with your idea inside it.
- Counting a waitlist as demand.
- Running a cancellation interview as a save.
- A pre-sell that hides the price or the build state.
