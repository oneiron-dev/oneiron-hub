---
name: write-ad-copy
description: Turn a position into words a stranger gets at once. Value in the buyer's context, outcome before machinery, one through-line and one ask, headlines first, proof matched to objections, a voice guide earned over rounds, and the honesty floor every line passes before the reviewer sends it.
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  kind: workflow
  pack: oneiron.ads
  reads: the campaign brief (position, buyer, offer, voice guide), customer-language claims, the compliance pack's content-marking rows
  data: references/messaging-checklist.md
---

# Write ad copy

You write what the buyer sees: headlines, hooks, page copy, taglines, one-liners, proof lines. The position is decided upstream in the offer pack; this skill turns it into words. The pack floor in `PACK.md` applies throughout, and this skill carries the honesty floor for every other skill in the pack.

## Use this skill when

- A page, ad, listing or tagline needs words.
- A draft reads like machinery, a motto or adjective soup.
- Proof must be chosen and placed.
- A voice guide must be built, or a draft reviewed against one.
- A concept is close to the honesty line.

## Two registers, never mixed

PREP is the reasoning behind the words: the position, the message hierarchy, the harvested customer language, which proof, which objection. Internal; may carry numbers and sources; the reader never sees it. Do it first.

SEND is reader-facing copy that ships as is. Short lines, one idea each, contractions fine, no corporate words, no headers or bold inside a message, one ask. Placeholders only for real facts the owner will substitute, never to paper over a claim you cannot back. A SEND block a competitor could paste under their own logo unchanged is a failed block; rewrite it.

## Procedure

### 1. State value in the buyer's context

A feature is what the product has; the benefit is how it changes the buyer's day. Translate every feature to its outcome, one by one, not only in the headline. Tie it to money or to a countable unit where real. "AI-powered" is not a value claim; never lead with "we use AI". Buyers understand saved hours, fewer errors, faster onboarding, more leads. The word AI brings hype and hesitation. Do not confuse your process with the customer's solution; the customer wants the sneezing to stop, not a tour of the device.

Harvest the words from the customer, not the founder. Listen for the phrases buyers use for the workflow, the pain and the outcome. Paste the customer's sentence at the top; do not rewrite it into founder language. On a vault, these phrases are claims with their source; the moment bank in `build-creative` holds them.

Promise in money or countable units, never in vague time or "efficiency". "Forty qualified leads a month" and "a clean ledger by Friday" are promises; "hours saved" and "improved efficiency" are not. Tie a back-office offer to a front-end outcome before writing the promise.

### 2. Order: position, then sales story, then copy

Do not jump from a positioning statement to a hero line. Turn the position into a sales narrative first (problem, current ways, their gaps, the ideal solution, the category, value themes, objections, proof, next step), then compress it into copy.

Structure: one core message, a few pillars, proof under each pillar. One through-line, one call to action. If the visitor reads only the headlines, they should still understand the product. The completeness checklist, the page skeleton and the fast-scroll test are in `references/messaging-checklist.md`.

Clarity first, cleverness on top. If the reader is confused, the reader is gone. Personality is the flavour layer once comprehension is secured; it shines in voice-driven channels (email, video, a founder's feed) and least on a headline a stranger scans. When length or wit is genuinely contested and there is traffic, test it; an unclear headline does not earn a test slot.

### 3. Headlines first

Write the headline first; it is the frame, not a bow. A headline is a value exchange for the reader's time, so it promises a payoff. Specific language sorts readers in or out ("people" to "writers" to "digital writers"). Put the job in the first five words with a verb: reduce, automate, ship, track, restock, schedule, qualify, prevent, reconcile. Start at the category level so the buyer knows what kind of thing this is before comparing brands. Use the reader's own words.

A working spec: outcome, time frame, mechanism. The mechanism answers "why does this work when everything I tried failed". Checklist: curiosity, pain, promise, time frame, specificity, simplicity, credibility; several present. Plain reading level. Write to one awareness stage (`build-creative`, the ladder).

Mechanics, with examples in the reference: "how to [outcome] without [obstacle]"; the denial hook (off-register for most B2B); honest loss framing (never manufactured scarcity).

### 4. Wrappers: tagline, one-liner, pitch, name

A tagline describes the value in six to eight words. It is not a motto. "Empowering teams to do their best work" fails; "Payroll your accountant signs off first time" describes value. A new kind of product needs an explainer right next to the brand: a clear tagline, a terse blurb, a short learn-more path.

A one-liner: the most specific audience, their specific problem, the cost of inaction, the service, the outcome. An elevator pitch runs four sentences at most, names what it replaces rather than its category, embeds the ask, and ends early. Strip intensifiers. Success is being remembered.

Pick the pitch format by channel: one word, a question (only when the argument is strong), a subject line, a short post, a story arc. Decide what the listener should know, feel and do. Cut everything else.

Productise the one-liner: vague help becomes a specific deliverable, a timeline, an outcome, and a price placeholder the offer pack fills.

Name the offer after its outcome and its parts (the reason, the buyer, the goal, the interval, the container). A store listing is a mini sales letter: promise, proof, specific benefits.

### 5. Voice: small, direct, human; explain from zero

Sound like a small company, because that is what a big one cannot buy. Write to one person; lead with the feeling, let logic justify after; more "you" than "I". Say what it is before why it is better; a benefit that lands before the reader knows what the product is loses them.

Cut filler hard, but do not cut persuasion. Remove half the words, then half again, from navigation and unearned phrases. Keep problem education, proof and objection handling on a page that must do the whole selling job. Concision serves comprehension; length serves persuasion.

Interface copy is design: customer words, as few as the task allows, real data in mockups because dummy text hides friction.

### 6. The voice guide, and review

A voice guide is earned over rounds, not written in one pass. Generate a few drafts in the subject's voice on topics they really write about; have them flag what reads off; revise; repeat. Hold at least five rounds. The first pass always looks passable, which is why it is not done. Derive banned phrases from what this writer conspicuously never says in their real writing, not from a generic list of machine tells. The generic list is the floor. The absence-derived list is the signal. Most guides ban the em dash and set the punctuation defaults; the guide decides.

The campaign's reviewer checks every outbound line against the voice guide and the honesty floor. The reviewer is a judge model by default, a human when the owner pins it for that campaign. A pass ships. AI-written copy is neither banned nor exempt; campaigns A/B test copy variants on the outcome metric, model against model and AI against human, and keep what wins. The machine-writing tells in `PACK.md` are the floor for every variant.

### 7. Proof, shown honestly

Proof raises the perceived likelihood of the outcome; it is part of the value, not a badge. Decide where credibility comes from before you write: your own relevant experience, or someone else's result. Authority is relevant experience, not credentials; in a sophisticated market the trusted archetype is often "I've been there and built my own thing", so determine it from research.

Three tests for every important line: can the reader picture it, can it be checked, can nobody else say it? "Trusted by thousands" fails the second and the third.

Match testimonials to objections. Map each known doubt (price, distance, risk, rollout) to a testimonial that opens with that exact doubt and then says what the buyer found. Every review earns its place by changing a belief; transformations outrank praise; the people shown match the buyer. Source objections from buyers ("what almost stopped you?"), not from comment sections, which over-sample people who were never going to buy.

A founder story counts only as an example of the reader's change, never as self-display. B2B proof is a story the buyer can safely tell their boss. Social proof is similar customers' behaviour, matched on role, then size, then industry, then pain. When a client needs anonymity, use metrics-only proof.

Do not guarantee outcomes you do not control. Promise the thing you deliver. Quantify when results are real; mark an estimate as an estimate.

### 8. The honesty floor

Ad limits are about honesty, not targeting. Speak to a real need with warmth. Reaching the people a product truly serves, including people who are lonely, stressed or behind, is the product doing its job. The line is manufacturing shame to pressure a sale: it is predatory and it underperforms.

- No fabricated proof, testimonials, reviews, numbers or case results. Real, attributable numbers; everything else marked "assume (validate)". A cited number keeps its citation.
- Market the product as what it is. Never sell it as something its design rejects. A tool built to make itself unnecessary is not sold as "so you never need anyone again"; a plain-text editor is not sold as a design suite. The truth is the better pitch.
- No outcome or clinical claims near health: route, don't diagnose. Never "cure", never "guaranteed", never a result the product cannot deliver.
- No fake scarcity. Real capacity caps, real cohort dates, real price rises, real expiring bonuses.
- No rigged comparisons: concede where the rival is better, win clearly where you are, prove every row.
- Disclose a synthetic presenter where the compliance pack's content-marking rows require it, or geo-exclude.

If a concept cannot pass, say so and offer the honest alternative. Do not quietly ship the violating version; do not refuse to engage. An honest line must also be competitive; the aim is to win with it, not to neuter the creative.

### 9. Before and after

Before (fails the logo-swap test and all three proof tests):

> AI-powered all-in-one platform for modern teams.

After (outcome-led, specific, one job):

> Close the month by the tenth, not the twentieth.

The number must be real for the product; a placeholder stands in until the owner confirms it.

## Anti-patterns

- Adjective soup: "best-in-class, AI-powered, all-in-one, seamless, for modern teams".
- Leading with the stack, the process, or the fact that AI is involved.
- A wall of text with no hierarchy and no through-line.
- Fabricated proof, claimed leadership, invented market sizes, guaranteed outcomes.
- Jargon that impresses insiders and loses the buyer.
- Clever over clear on a headline a stranger scans.
- Shipping PREP as SEND.

## Checks before you return

- Every SEND block fails the logo-swap test in the right direction: a competitor could not paste it.
- Each important line can be pictured, checked, and said by nobody else.
- One through-line and one ask per page or message.
- Proof opens on the objection it answers; every number is real or a marked placeholder.
- The copy names its awareness stage and passes the voice guide and the machine-tell list.
- Nothing manufactures shame, fakes scarcity, promises an undeliverable outcome, or hides a synthetic presenter where a row requires disclosure.
