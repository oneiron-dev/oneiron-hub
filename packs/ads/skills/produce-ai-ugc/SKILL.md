---
name: produce-ai-ugc
description: Make synthetic-creator video at volume to find the winning angle, then scale it with real people. A consistent character plus a reusable workflow is the asset. Script, actor, video, edit; keep the character and the room locked; review every variant end to end before it takes budget; disclose synthetic presenters where the compliance pack's rows require it, or geo-exclude.
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  kind: workflow
  pack: oneiron.ads
  reads: the campaign brief (buyer, offer, voice guide, markets), the compliance pack's content-marking rows, knowledge/platform-facts.md
---

# Produce AI-made UGC

You produce synthetic-creator video for paid social. It finds the angle at volume; real people scale it. The hooks and the creative system are `build-creative`; the honesty floor is `write-ad-copy`. The pack floor in `PACK.md` applies throughout. Tools, models, prices and clip limits churn monthly; name none as current without a dated row.

## Use this skill when

- A batch of angle variants is needed faster than a human shoot can make them.
- A reaction-plus-demo format is on the table.
- A synthetic variant is about to take budget and needs its review.
- A market in the plan has a disclosure rule for synthetic performers.

## First lesson: find the angle with AI, scale it with people

Produce several variations cheaply, test angles, find what the audience responds to. Then bring real creators, or heavy human refinement, to scale the proven concept. Do not jump to an expensive human shoot before you know the angle. Do not go all-in on AI because one test won.

The trust ceiling on synthetic creators is real and unquantified. The loudest decay stories come from vendors selling the human alternative. Decide from your own trust metrics, not from a promotional case. Promotional return figures are never benchmarks; if you need a planning number, write "assume ~X (validate)".

## Procedure

### 1. Build the asset once: character plus workflow

The asset was never the clip. It is the character and the workflow. Every new ad is a re-roll of an existing character through an existing pipeline, not a re-shoot. A new emotion is a new motion prompt; a new market is a new language line; a new angle is a new hook overlay.

One face within an ad. A consistent, recognisable figure with a point of view out-converts a fresh face per clip, and a face that changes mid-ad is the tell that burns trust. Across a campaign, vary characters and angles so one synthetic face does not run forever.

Which image or video model wins right now is a perishable verdict. Keep it in a dated registry of your own tests, never hard-coded in this skill.

### 2. The four-stage pipeline

1. Script. A model writes scripts from a brief that carries how customers think, talk and complain in their own words, plus real reviews and comments. The beats: hook, problem, solution, proof, call to action, in a short spoken clip. Ask for several scripts, one per pain angle, each scored; keep only the top ones. Suggest an actor type per script: age, setting, emotion.
2. Actor. Either a platform's actor library with the script pasted in, or an image model that puts a chosen actor in the scene holding the product. Source realistic reference images of the buyer type, not only generated portraits; they anchor consistency.
3. Video. Feed the actor image and one script line to a video model. Run two models side by side on the same script. Expect to stitch short generations for a longer ad.
4. Edit. Vertical, hook first, trim into speech, cut rogue frames, mutated products, awkward faces and machine-feeling pauses. Captions in the safe zone. Keep a talking-head-only cut before adding B-roll. For B-roll, extract a creator frame, reuse it as the reference, and have a model write the prompt.

Prompt the video model per second rather than in one prose block. Write a timeline of what happens in each second. Tell the prompt-writer which model it targets, and attach the product and character images. Confirm the prompt includes the spoken line before you generate; generations cost real money per press. Harvest each run: keep the best few seconds from every generation and stitch, rather than re-rolling the whole clip.

### 3. Keep it consistent

Generators drift. The actor in the preview is not always the actor in the output. Moves that hold:

- Lock the face with an actor preset or a starting frame.
- Lock one maximum-quality reference portrait before any image-to-video step: real skin texture, visible imperfections, phone-selfie framing. A low-quality reference makes a non-human avatar.
- Reuse one reference frame for every B-roll shot.
- Generate line by line when the whole script drifts.
- Extract the last frame of clip one as the reference for clip two, so consecutive clips keep the same hair, jacket and hands.
- Cut what survives in the edit.

Reference-to-video gotchas observed on one model's 2026 versions; verify on yours:

- For clip two onward, reuse the returned seed with the same reference images. Feeding the previous clip as a video reference makes wardrobe and product drift worse.
- Lock the room with a dedicated background image as a reference slot, no people, reused across every clip. A text-only setting drifts to a generic rental between scenes.
- Name the full wardrobe, top and bottom and hair and accessories, with negations, or the model invents the missing half.
- Spell a brand name phonetically inside the spoken line. Never in a parenthetical; the model reads the parenthetical aloud. Check every render's transcript against the intended pronunciation.

### 4. The reaction-plus-demo format

The split: a synthetic person reacting (surprise, disbelief, a quiet "wait, how did I not know this") is the scroll-stopper; your real hand, screen or app is the proof. You film one thing: a few seconds of the product working. The synthetic half carries no product claim; the real half carries the proof.

Real reactions are small, not theatrical. Eyes forward at a screen in front of them, then a hand to the mouth. Two findings worth testing against each other: a silent reaction with the words as on-screen text often beats a synthetic voice, and a restrained, moved reaction often beats a gasp. Generate both; let your numbers pick.

This format sits on the honesty line. Two stacked issues: the presenter is synthetic (disclose or geo-exclude), and the emotion is manufactured. An undisclosed "this got me" passed off as a real person's discovery is a fabricated testimonial. The honest version is a disclosed synthetic presenter dramatising a real, deliverable benefit over a real demo. If the concept needs the viewer to believe the emotion was real, it fails; offer the disclosed dramatisation, a real human, or the founder's own voice.

### 5. Tool roles last; prices perish

Roles in the stack: a language model for scripts and prompts; an actor platform for talking heads; an image model for actor-plus-product scenes; a video model for motion; a voice model for narration; an editor for assembly. Judge any tool by cost per usable ad after iteration and polish, never by the headline monthly fee. AI generation works on common products the models have seen; it fails repeatedly on exotic designs. Use strong outputs as briefs for real production rather than shipping them raw.

### 6. Authenticity craft, and the line

Imperfection beats polish. Natural speech: cut dead space, read scripts aloud before production, do not leave default synthetic pauses in the launch file. Sound-off design still applies. Matching the presenter's age, setting and manner to the buyer raises trust.

The line is not "is the avatar good". It is: no fabricated proof (staged organic comments, invented testimonials), and no undisclosed presenter where disclosure is required. A disclosed or geo-excluded synthetic presenter selling a real benefit is fine; make it as watchable as you can.

### 7. Disclosure and platform labels

Where a jurisdiction requires disclosure of a synthetic performer in an ad, disclose conspicuously or exclude that market from synthetic-presenter ads. The jurisdictions and the wording live in the compliance pack's content-marking rows; this skill applies them. Excluding one region from a campaign is an ordinary media-buying decision. Some brands disclose by choice everywhere; that is a brand call.

Platform terms on generative output stack on top of the legal duty: no passing generated output off as human-made, no stripping its watermark or metadata (a dated row in `knowledge/platform-facts.md`). Meet both.

### 8. Review before budget

Every synthetic variant is reviewed end to end before it takes budget. The campaign's reviewer does it: a judge model by default, a human when the owner pins it.

- Watch it muted at least once: does the hook stop the thumb, is the point clear?
- Scan for hallucinations, rogue frames, mutated products, machine pauses, gibberish captions. Cut them or kill the variant.
- Confirm disclosure is present and conspicuous where a row requires it.
- Confirm no fabricated comment or testimonial, and no claim the product cannot deliver.

Synthetic output fails in ways human footage does not; the review is the pre-spend gate.

### 9. Kill criteria for the lane

Pre-register when to kill the whole lane, not only a variant:

- Synthetic creative underperforms human creative on trust metrics in your account: a widening click-to-conversion gap, rising CAC at flat reach. Switch winners to human production; budget the handoff before you start.
- Consistency or quality problems survive the edit. The lane then costs more in review than it saves in production.
- Disclosure depresses conversion in a required market. Options: geo-exclude synthetic ads there, run human or founder-voice creative there, or weigh the lane. The one thing off the table is running undisclosed where disclosure is required.

Feed performance data (cost, click-through, cost per result after a couple of days) back into each batch. Generation without a feedback loop is just volume.

## Anti-patterns

- Going all-in on AI because one test won.
- Fake authority figures (a synthetic doctor, a miracle claim). The avatar does not launder the claim; it compounds it. No unproven claims against competitors.
- Recycled faces across a long campaign; an inspiration image reused so closely the real person is recognisable.
- Accepting hallucinations, garbled captions or rogue frames.
- Stopping at generation; no feedback loop.
- All-model scripts with no human judgment; judging a tool by its polished demo; choosing on monthly fee.

## Checks before you return

- The character and workflow are reusable, and the face holds within each ad.
- Each variant passed the muted watch, the defect scan, the disclosure check and the proof check.
- Markets with a disclosure row are either disclosed or excluded.
- Platform label policy is met, with its dated row cited.
- The lane's kill criteria are written and compare against human creative on trust metrics.
