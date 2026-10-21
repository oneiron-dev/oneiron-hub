# United States: outreach law

Checked 2026-10-22 by Opus against primary sources (statute text, regulator guidance, court decisions), read live. Status: **confirmed with corrections**. Every default below is a recommendation the owner can override; an override changes the chosen action, not the law. Exposure is sized from the statute and the real enforcement record. Claim-by-claim results: the claim check below; the machine record is `../defaults.json` under `law.jurisdictions.US`. Every default is a starting value. The owner, or his agent within its grant, can override it; the override line records who and why.

**Bottom line:** Cold email is lawful on an opt-out basis under CAN-SPAM, B2B and B2C, with ad identification, a postal address and a working opt-out honoured within 10 business days; Washington and California add subject-line liability. Commercial social DMs: give them CAN-SPAM content (district courts treat platform messages as email). Texts and calls turn on technology, number type, DNC lists and state law: default to prior express written consent for texts and any automated or AI-voice call; live B2B calls to business lines are the open route.

## What the Opus pass changed

- FTC penalty figure confirmed for 2026: $53,088 (FTC kept the 2025 amounts) (US-04).
- Social DMs: district courts apply CAN-SPAM to platform messages; default content added (US-07).
- FCC revoke-all rule dates confirmed: delayed to 31 Jan 2027 (US-11). One-to-one consent rule vacated: confirmed (US-12).
- McLaughlin (2025): FCC interpretations do not bind courts in private TCPA suits (US-18).
- State watchlist verified: OK, MD, WA texts, TX SB 140; Washington email damages cut to $100 from 11 Jun 2026; California §17529.5 $1,000 per email (US-06, US-21–US-25).
- California DROP duties from 1 Aug 2026 confirmed (US-27).

## Channel defaults, legal basis and override exposure

### Email

- **B2B default:** Opt-out commercial email with full CAN-SPAM content; honour opt-outs immediately.
- **B2C default:** Same federal opt-out model.
- **Channel basis:** CAN-SPAM (15 U.S.C. §7704): no prior consent; content and opt-out duties.
- **Data basis:** No federal lawful-basis rule. State privacy laws (e.g. CCPA notice and opt-outs) apply to the lead data.
- **Legal rule:** Every commercial email, including one-to-one and B2B, must meet CAN-SPAM. State laws survive only against falsity or deception (WA subject lines; CA §17529.5).
- **Required content (law):**
  - Accurate From, To, Reply-To and routing information.
  - No deceptive subject line (and no false or misleading facts in the subject for WA residents).
  - Clear identification as an advertisement or solicitation (unless prior affirmative consent).
  - A valid physical postal address (street, registered PO box, or registered private mailbox).
  - Clear notice of how to opt out; a mechanism that works for at least 30 days; no fee, login or extra data to opt out.
- **Recommended content (loop default, not law):**
  - A plain subject line with no urgency claims you cannot back up.
- **Opt-out, legal timing:** Honour within 10 business days; do not sell or transfer opted-out addresses.
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** FTC civil penalties up to $53,088 per email (2026); real cases: Verkada $2.95m for 30m+ emails, Experian $650,000. No consumer private action under CAN-SPAM, but recipients can sue under California §17529.5 ($1,000 per email, cap $1m per incident) and Washington RCW 19.190 ($100 per email for suits from 11 Jun 2026) for deceptive headers or subject lines; class actions follow volume.
- **Status:** `opus_confirmed` — claims US-01, US-02, US-03, US-04, US-05, US-06, US-28, US-29. Sources: [US-FTC-CANSPAM], [US-USC-7704], [US-USC-7706], [US-USC-7707], [US-FTC-INFL-2026], [US-WA-CEMA], [US-CA-17529], [US-FTC-VERKADA].

### LinkedIn and other private social DMs

- **B2B default:** Opt-out human DMs with CAN-SPAM content: say it is a solicitation, give a one-line opt-out, and include a postal address (in the message or signature).
- **B2C default:** Same; consent recommended for consumers.
- **Channel basis:** CAN-SPAM as read by district courts (MySpace 2007; Facebook v. MaxBounty 2011): platform messages can be "electronic mail messages". A DM to a phone number (SMS-based) is a text under the TCPA.
- **Data basis:** State privacy law for the profile data.
- **Legal rule:** No appellate ruling; district courts reject the argument that CAN-SPAM needs a traditional email inbox. Platform terms add their own limits.
- **Required content (law):**
  - If treated as CAN-SPAM email: ad identification, opt-out notice, postal address, non-deceptive sender and subject.
- **Recommended content (loop default, not law):**
  - Name, company and purpose in the first lines.
- **Opt-out, legal timing:** Treat as CAN-SPAM: honour within 10 business days; the loop suppresses the same day.
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** The cases were brought by platforms (MySpace, Facebook) and the FTC/state AGs can enforce; consumers have no CAN-SPAM action. Realistic first risk is account restriction by the platform. Statutory ceiling: $53,088 per message.
- **Status:** `opus_corrected` — claims US-05, US-07. Sources: [US-CASE-MAXBOUNTY], [US-USC-7704], [US-USC-7706].

### SMS

- **B2B default:** Prior express written consent by default, mobile numbers included. Business use of a mobile is no exemption.
- **B2C default:** Prior express written consent.
- **Channel basis:** TCPA where an ATDS or artificial voice is used (§64.1200(a)(2)); federal DNC for texts to wireless numbers; state laws (FL, OK, MD, WA, TX).
- **Data basis:** State privacy law.
- **Legal rule:** Texts are calls under the TCPA. Most list-based texting is not an ATDS (Duguid), but DNC rules apply to telemarketing texts to registered wireless numbers, and FL, OK and MD require written consent for texts sent with automated selection or dialing; WA bans commercial texts without clear advance consent.
- **Required content (law):**
  - Identify the sender.
  - Honour "stop", "quit", "end", "revoke", "opt out", "cancel", "unsubscribe" and any reasonable revocation; no exclusive opt-out channel.
  - If replies are impossible, say so in each text and give other ways to opt out.
- **Recommended content (loop default, not law):**
  - "Reply STOP to opt out" in every text; one confirmation text within 5 minutes of a STOP, with no marketing.
- **Opt-out, legal timing:** Within 10 business days (federal); Florida: stop within 15 days of a STOP reply. Revoke-all across unrelated message types is waived until 31 Jan 2027.
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** Per-text statutory damages: TCPA $500–$1,500 (where (b) applies) or up to $500 (trebled if wilful) for DNC texts once a person has received more than one in 12 months; FL/OK/MD $500 trebled; WA $100. These stack into class actions; volume, not intent, drives the size.
- **Status:** `opus_corrected` — claims US-08, US-09, US-10, US-11, US-12, US-13, US-18, US-21, US-22, US-23, US-24, US-25. Sources: [US-CFR-64-1200], [US-USC-227], [US-SCOTUS-DUGUID], [US-FCC-REVOKE-2026], [US-CA11-IMC], [US-FL-501059], [US-OK-OTSA], [US-MD-STOP], [US-WA-CEMA], [US-TX-SB140].

### Live human telephone calls

- **B2B default:** Manual live calls to business lines; screen mobiles and any residential number against the National DNC (≤31 days old), state lists and the internal do-not-call list; call 8am–8pm recipient time (OK/MD limit).
- **B2C default:** Screen federal and state DNC and internal lists; 8am–9pm federal (8pm in OK and MD); max three calls per 24 hours on one subject in OK and MD.
- **Channel basis:** FCC DNC rules (§64.1200(c)-(d)) for residential and wireless subscribers; FTC TSR (B2B exempt except misrepresentation); state laws.
- **Data basis:** State privacy and call-recording laws.
- **Legal rule:** The federal DNC protects residential subscribers (a mobile used personally can count). Genuine B2B calls to business lines are largely outside the TSR and the DNC Registry, but misrepresentation bans apply.
- **Required content (law):**
  - Name of the caller, the business called for, and a phone number or address (§64.1200(d)(4)).
  - Transmit caller ID (§64.1601(e)).
  - No misrepresentations (TSR §310.3(a)(2),(4), B2B included).
- **Recommended content (loop default, not law):**
  - Offer to add the number to the do-not-call list on any objection.
- **Opt-out, legal timing:** Honour internal do-not-call requests within 10 business days and keep them five years; the loop suppresses the same day.
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** DNC private action: up to $500 per call once a person has received more than one call in 12 months, trebled if wilful (§227(c)(5)); FTC TSR civil penalties up to $53,088 per call for covered calls; state $500 trebled. Manual dialling avoids the ATDS rules but not DNC or state rules.
- **Status:** `opus_confirmed` — claims US-13, US-14, US-15, US-16, US-21, US-22, US-23. Sources: [US-CFR-64-1200], [US-CFR-64-1601], [US-CFR-310], [US-FTC-TSRGUIDE], [US-USC-227], [US-OK-OTSA], [US-MD-STOP].

### Automated / recorded / artificial-voice calls

- **B2B default:** Prior express written consent for any prerecorded, artificial or AI-voice marketing call. Verified business landlines are outside the federal rule but inside some state rules; keep consent as the default.
- **B2C default:** Prior express written consent.
- **Channel basis:** §64.1200(a)(2)-(3): prior express written consent for telemarketing robocalls to wireless and residential lines; AI voices are artificial (FCC 24-17).
- **Data basis:** State privacy law; written consent records.
- **Legal rule:** Artificial or prerecorded voice triggers the TCPA even without an ATDS. FCC rulings persuade but do not bind courts in private suits (McLaughlin).
- **Required content (law):**
  - Identity of the business at the start of the message (§64.1200(b)(1)).
  - A callback number during or after the message (§64.1200(b)(2)).
  - An automated interactive opt-out for telemarketing robocalls (§64.1200(b)(3)).
  - Caller ID (§64.1601(e)).
- **Recommended content (loop default, not law):**
  - Tell the listener at the start that the voice is AI-generated.
- **Opt-out, legal timing:** Honour revocation within 10 business days (key-press opt-out records the number at once).
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** $500–$1,500 per call in private suits (§227(b)(3)), plus state $500 trebled. FCC enforcement on AI voices so far: $6m forfeiture (Kramer, caller-ID spoofing) and a $1m carrier consent decree (Lingo).
- **Status:** `opus_confirmed` — claims US-08, US-10, US-11, US-12, US-13, US-16, US-17, US-18, US-19, US-20, US-30. Sources: [US-CFR-64-1200], [US-FCC-AIVOICE], [US-SCOTUS-MCLAUGHLIN], [US-USC-227], [US-FCC-KRAMER], [US-FCC-LINGO].

## Lead lists: collection, scraping and enrichment

No federal lawful-basis rule. California: the CCPA B2B and employee exemptions expired on 31 Dec 2022, so covered businesses owe notice, access/deletion rights and sale/sharing opt-outs for B2B contacts. From 1 Aug 2026 registered data brokers must process DROP deletion requests at least every 45 days. Other states have their own business-contact carve-outs. Scraping behind access controls, deceptive collection and sensitive data raise separate laws. Public availability is not a federal permission.

## Penalties and the real enforcement record

Email: FTC civil penalties up to $53,088 per email (2026 unchanged from 2025); no consumer private action under CAN-SPAM; state actions for deception (CA $1,000 per email; WA $100). Calls and texts: TCPA $500 per violation, up to $1,500 if wilful; DNC private action after two calls in 12 months; FTC TSR penalties up to $53,088 per call for covered calls; state mini-TCPAs $500, trebled.

| Case | Date | Amount | What it was | Status | Source |
|---|---|---|---|---|---|
| Verkada (FTC/DOJ) | 30 Aug 2024 | $2.95m (proposed order) | 30m+ commercial emails to prospects over three years; no opt-out, opt-outs ignored, no postal address. Largest FTC CAN-SPAM penalty. | Proposed stipulated order; final entry not checked | [US-FTC-VERKADA] |
| Experian Consumer Services (FTC/DOJ) | 14 Aug 2023 | $650,000 (proposed order) | Marketing emails to account holders without an opt-out | Proposed stipulated order; final entry not checked | [US-FTC-EXPERIAN] |
| Steve Kramer (FCC) | 30 Sep 2024 | $6,000,000 forfeiture | AI-voice robocalls with spoofed caller ID before the 2024 NH primary (Truth in Caller ID Act) | Forfeiture order | [US-FCC-KRAMER] |
| Lingo Telecom (FCC) | Aug 2024 | $1,000,000 | Carrier that transmitted the Kramer calls with wrong STIR/SHAKEN attestation | Consent decree | [US-FCC-LINGO] |

Calibration: federal email penalties land on campaigns in the tens of millions. Text and call exposure is driven by private class actions at $500–$1,500 per message, so volume times rate is the real number. A missing case is not proof of no enforcement.

## Claim check (summary)

| ID | Claim | Status | Source |
|---|---|---|---|
| US-01 | CAN-SPAM covers every commercial email, not just bulk, and makes no B2B exception. It sets content and opt-out duties; it does not require consent before the first email. | confirmed | US-FTC-CANSPAM, US-FTC-CANSPAM |
| US-02 | Statute: clear identification as an advertisement (unless prior affirmative consent), clear notice of the opt-out, and a valid physical postal address; plus accurate headers and honest subject lines. | confirmed | US-USC-7704 |
| US-03 | Confirmed as stated. | confirmed | US-FTC-CANSPAM |
| US-04 | $53,088 is the 2025 figure, and the FTC’s 15 Sep 2026 notice keeps the 2025 amounts for 2026. | confirmed | US-FTC-INFL-2026, US-FTC-INFL-2025 |
| US-05 | Only the FTC, other federal agencies, state attorneys general and internet access providers can sue (§7706). State laws survive only against falsity or deception in commercial email (§7707(b)). | confirmed | US-USC-7706, US-USC-7707 |
| US-06 | Washington: no false or misleading subject lines to WA residents (Brown v. Old Navy, 2025, covered any false fact incl. fake urgency); a 2026 amendment added a knowledge standard and cut damages to $100 per email for suits filed from 11 Jun 2026. California §17529.5: $1,000 per email (cap $1m per incident) for falsified headers or misleading subjects, and recipients can sue. | added | US-WA-CEMA, US-CA-17529 |
| US-07 | Federal district courts read CAN-SPAM broadly: both MySpace cases (2007) and Facebook v. MaxBounty (2011) rejected the argument that an "electronic mail message" must be traditional email sent to a traditional inbox. Default: give commercial DMs to US recipients CAN-SPAM content (identification, opt-out, postal address). | corrected | US-CASE-MAXBOUNTY |
| US-08 | Supreme Court (Duguid): an ATDS must use a random or sequential number generator to store or produce numbers. Texting from a stored customer list is usually outside it. | confirmed | US-SCOTUS-DUGUID |
| US-09 | The FCC’s DNC and company-specific do-not-call rules apply to telemarketing text messages to wireless numbers. | confirmed | US-CFR-64-1200 |
| US-10 | Any reasonable method revokes consent; "stop", "quit", "end", "revoke", "opt out", "cancel", "unsubscribe" are per se valid; honour within 10 business days; no exclusive opt-out channel. | confirmed | US-CFR-64-1200 |
| US-11 | Dates confirmed: the FCC delayed the rule that one revocation covers all unrelated robocalls/robotexts to 11 Apr 2026 (DA 25-312), then extended the waiver to 31 Jan 2027 (DA 26-12). The rest of the revocation rule is in force. | corrected | US-FCC-REVOKE-2026, US-FCC-REVOKE-2025 |
| US-12 | The 11th Circuit vacated Part III.D of the 2023 Order (24 Jan 2025): the one-to-one consent restrictions exceeded the FCC’s authority. | confirmed | US-CA11-IMC |
| US-13 | §227(b)(3) for robocall/robotext violations; §227(c)(5) gives a DNC private action after more than one call in 12 months (up to $500, trebled if wilful). | confirmed | US-USC-227, US-USC-227 |
| US-14 | All confirmed in §64.1200(c)-(d). | confirmed | US-CFR-64-1200, US-CFR-64-1200 |
| US-15 | B2B calls are exempt from the TSR except its misrepresentation bans (§310.3(a)(2) and (4)) and calls selling nondurable office or cleaning supplies. The FTC’s Registry ban does not apply to B2B calls. | confirmed | US-CFR-310, US-FTC-TSRGUIDE |
| US-16 | Anyone engaged in telemarketing must transmit caller ID (number, and name where available). | confirmed | US-CFR-64-1601 |
| US-17 | §64.1200(a)(2) requires prior express written consent for telemarketing robocalls to wireless numbers; (a)(3) for residential lines. The FCC ruled that AI-generated voices are "artificial" voices under the TCPA. | confirmed | US-CFR-64-1200, US-FCC-AIVOICE |
| US-18 | Supreme Court (McLaughlin, 2025): district courts are not bound by FCC interpretations in enforcement suits; they decide the statute’s meaning, giving the agency "appropriate respect". FCC rulings (AI voice, texts) stay persuasive, not binding. | added | US-SCOTUS-MCLAUGHLIN |
| US-19 | Confirmed (§64.1200(b)). | confirmed | US-CFR-64-1200 |
| US-20 | The federal robocall consent rules reach emergency/hospital lines, wireless numbers ((a)(1)(iii), (a)(2)) and residential lines ((a)(3)). A business landline falls outside them; a business mobile does not. State laws can still apply. | confirmed | US-CFR-64-1200 |
| US-21 | Florida requires prior express written consent for sales calls/texts using an automated system for the selection AND dialing of numbers or a recorded message; texts need a STOP and a 15-day cure before suit; $500 per violation, trebled if wilful. | confirmed | US-FL-501059, US-FL-501059 |
| US-22 | Now verified: prior express written consent for sales calls/texts using an automated system for the selection OR dialing of numbers or a recorded message; calls only 8am–8pm; at most three calls per 24 hours on one subject; caller ID required; $500 per violation, trebled if wilful. | corrected | US-OK-OTSA, US-OK-OTSA |
| US-23 | Now verified: prior express written consent for solicitations using an automated system for the selection or dialing of numbers or a recorded message; no calls 8pm–8am; at most three per 24 hours on one subject; up to $500 per violation, trebled if wilful; MD area codes presumed MD residents. | corrected | US-MD-STOP, US-MD-STOP |
| US-24 | From 1 Sep 2025, Texas counts text messages as "telephone solicitation" under Bus. & Com. Code ch. 302 (registration regime, private action through the DTPA). Which B2B exemptions apply was not read. | added | US-TX-SB140, US-TX-SB140 |
| US-25 | Now verified: no commercial text messages to a Washington resident’s mobile unless the subscriber clearly and affirmatively consented in advance. Damages $100 per message (2026 amendment). | corrected | US-WA-CEMA, US-WA-CEMA |
| US-26 | Confirmed (expired 31 Dec 2022). Covered businesses owe notice, rights and opt-outs for B2B contact data. | confirmed | US-CA-CCPA-FAQ |
| US-27 | Now verified: from 1 Aug 2026, registered data brokers must pull deletion requests from DROP at least every 45 days and process them. Matters if the loop buys or sells California lead data. | corrected | US-CA-DROP |
| US-28 | $650,000 for marketing emails to account holders with no opt-out; proposed stipulated order; final entry not checked. | confirmed | US-FTC-EXPERIAN |
| US-29 | Confirmed: the largest FTC CAN-SPAM penalty, for 30m+ emails to prospective (business) customers without opt-out, opt-out honouring or a postal address. Proposed order; final entry not checked. | confirmed | US-FTC-VERKADA, US-FTC-VERKADA |
| US-30 | FCC: $6,000,000 forfeiture against Steve Kramer (AI-cloned voice robocalls before the 2024 NH primary; Truth in Caller ID Act, not TCPA) and a $1,000,000 consent decree with the carrier Lingo Telecom. | added | US-FCC-KRAMER, US-FCC-LINGO |

## For a lawyer

- State-by-state check for the actual recipient states before any texting or automated calling (FL, OK, MD, TX, WA confirmed here; others not read).
- Texas ch. 302 registration and exemptions for B2B texting after SB 140 (US-24).
- Whether LinkedIn InMail counts as a CAN-SPAM "electronic mail message" for a sender (district-court authority only, platform plaintiffs) (US-07).
- AI-voice agents: FCC 24-17 says "artificial voice"; after McLaughlin a court may decide independently (US-17, US-18).
- Final entry and payment status of the Verkada and Experian orders (not checked).

## Open questions (no block; recheck)

- Recheck FCC revoke-all waiver before 31 Jan 2027.
- Recheck state mini-TCPA changes each legislative session.
- MySpace v. TheGlobe.com opinion not retrieved; cited through MaxBounty.

## Sources and primary quotations

Quotes are verbatim from the saved evidence file (whitespace collapsed). Mirror sources are labelled.

### US-FTC-CANSPAM — FTC: CAN-SPAM Act compliance guide for business

- URL: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): US-FTC-CANSPAM.txt

> Despite its name, the CAN-SPAM Act doesn’t apply just to bulk email. It covers all commercial messages, which the law defines as “any electronic mail message the primary …

> The law makes no exception for business-to-business email. That means …

> 30 days after you send your message. You must honor a recipient’s opt-out request within 10 business days. You can’t …

### US-USC-7704 — 15 U.S.C. §7704 (CAN-SPAM requirements), uscode.house.gov

- URL: https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section7704&num=0&edition=prelim
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): US-USC-7704.txt

> (A) It is unlawful for any person to initiate the transmission of any commercial electronic mail message to a protected computer unless the message provides⁠— (i) clear and conspicuous identification that the message is an advertisement or solicitation; (ii) clear and conspicuous notice of the opportunity under paragraph (3) to decline to receive further commercial electronic mail messages from the sender; and (iii) a valid physical postal address of the sender.

### US-FTC-INFL-2026 — FTC: Civil Penalty Inflation Adjustments, 91 FR 58446 (15 Sep 2026), FR Doc 2026-18853

- URL: https://www.federalregister.gov/documents/2026/09/15/2026-18853/civil-penalty-inflation-adjustments
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: official_journal. Evidence copy (research record, outside this pack): US-FTC-INFL-2026-FR.txt
- Note: Clean Federal Register text fetched by Opus; the govinfo PDF (US-FTC-INFL-2026.txt) has the same notice in a multi-column layout.

> penalty amounts will remain unchanged during 2026. The FTC will continue to apply the 2025 civil penalty levels.

### US-FTC-INFL-2025 — FTC: Adjustments to Civil Penalty Amounts, 90 FR (17 Jan 2025), FR Doc 2025-01361

- URL: https://www.govinfo.gov/content/pkg/FR-2025-01-17/pdf/2025-01361.pdf
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: official_journal. Evidence copy (research record, outside this pack): US-FTC-INFL-2025.txt

> Increase and Obstacle Departure Procedures from $51,744 to $53,088; …

### US-USC-7706 — 15 U.S.C. §7706 (CAN-SPAM enforcement), uscode.house.gov

- URL: https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section7706&num=0&edition=prelim
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): US-USC-7706.txt

> (g) Action by provider of Internet access service (1) Action authorized A provider of Internet access service adversely affected by a violation of section …

### US-USC-7707 — 15 U.S.C. §7707 (CAN-SPAM preemption), uscode.house.gov

- URL: https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section7707&num=0&edition=prelim
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): US-USC-7707.txt

> This chapter supersedes any statute, regulation, or rule of a State or political subdivision of a State that expressly regulates the use of electronic mail to send commercial messages, except to the extent that any such statute, regulation, or rule prohibits falsity or deception in any portion of a commercial electronic mail message or information attached thereto.

### US-WA-CEMA — Washington RCW ch. 19.190 (commercial electronic mail and text messages), current with 2026 c 135

- URL: https://app.leg.wa.gov/RCW/default.aspx?cite=19.190&full=true
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): US-WA-CEMA.txt

> This act applies to all causes of action commenced on or after June 11, 2026, regardless of when the cause of action …

> Damages to the recipient of a commercial electronic mail message or a commercial electronic text message sent in violation of this chapter are $100, or actual damages, whichever is greater.

> No person conducting business in the state may initiate or assist in the transmission of an electronic commercial text message to a telephone number assigned to a Washington …

> The unsolicited commercial electronic text message is transmitted by a person to a subscriber and the subscriber has clearly and affirmatively consented in advance to …

### US-CA-17529 — California Business and Professions Code §17529.5

- URL: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=17529.5
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): US-CA-17529.txt

> Liquidated damages of one thousand dollars ($1,000) for each unsolicited commercial e-mail advertisement transmitted in violation of this section, up to one million dollars ($1,000,000) per incident.

### US-CASE-MAXBOUNTY — Facebook, Inc. v. MaxBounty, Inc., No. 5:10-cv-04712 (N.D. Cal. 28 Mar 2011), govinfo

- URL: https://www.govinfo.gov/content/pkg/USCOURTS-cand-5_10-cv-04712/pdf/USCOURTS-cand-5_10-cv-04712-1.pdf
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: court. Evidence copy (research record, outside this pack): US-CASE-MAXBOUNTY.txt

> in both MySpace cases the court rejected the argument 4 that an “electronic mail message” must be capable of characterization as “e-mail” or must be 5 directed to a traditional e-mail address or inbox. Instead, the court defined …

### US-SCOTUS-DUGUID — Facebook, Inc. v. Duguid, 592 U.S. 395 (2021), slip opinion

- URL: https://www.supremecourt.gov/opinions/20pdf/19-511_p86b.pdf
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: court. Evidence copy (research record, outside this pack): US-SCOTUS-DUGUID.txt

> To qualify as an “automatic telephone dialing system” under the TCPA, a device must have the capacity either to store a telephone number using a random or sequential number generator, or to produce a telephone number using a random or sequential number …

### US-CFR-64-1200 — 47 CFR §64.1200 (TCPA rules), eCFR current as of 2026-10-19

- URL: https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulation. Evidence copy (research record, outside this pack): US-CFR-64-1200.txt

> are applicable to any person or entity making telephone solicitations or telemarketing calls or text messages to wireless telephone numbers to the …

> All requests to revoke prior express consent or prior express written consent made in any reasonable manner must be honored within a reasonable time not to exceed ten business days from receipt of such request.

> Any residential telephone subscriber before the hour of 8 a.m. or after 9 p.m. (local time at the called party's location), or …

> must provide the called party with the name of the individual caller, the name of the person or entity on whose behalf the call is being made, and a telephone number or address at which the person or …

> using an automatic telephone dialing system or an artificial or prerecorded voice, to any of the lines or telephone numbers described in paragraphs (a)(1)(i) through (iii) of this section, other than a call made with the prior express written consent of the …

> At the beginning of the message, state clearly the identity of the business, individual, or other entity that is responsible for initiating the call. If a …

### US-FCC-REVOKE-2026 — FCC CGB Order DA 26-12 (6 Jan 2026): revoke-all rule waiver extended to 31 Jan 2027

- URL: https://docs.fcc.gov/public/attachments/DA-26-12A1.pdf
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): US-FCC-REVOKE-2026.txt

> we find that good cause exists to extend the effective date for this requirement until January 31, 2027,

### US-FCC-REVOKE-2025 — FCC CGB Order DA 25-312 (7 Apr 2025): revoke-all rule delayed to 11 Apr 2026

- URL: https://docs.fcc.gov/public/attachments/DA-25-312A1.pdf
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): US-FCC-REVOKE-2025.txt

> we find that good cause exists to delay the effective date for this requirement until April 11, 2026

### US-CA11-IMC — Insurance Marketing Coalition Ltd. v. FCC, No. 24-10277 (11th Cir. 24 Jan 2025)

- URL: https://media.ca11.uscourts.gov/opinions/pub/files/202410277.pdf
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: court. Evidence copy (research record, outside this pack): US-CA11-IMC.txt

> we grant IMC’s petition for review, vacate Part III.D of the 2023 Order, and remand for further proceedings. …

### US-USC-227 — 47 U.S.C. §227 (TCPA), uscode.house.gov

- URL: https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title47-section227&num=0&edition=prelim
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): US-USC-227.txt

> or to receive $500 in damages for each such violation, whichever is greater, or (C) both such actions. If the court …

> A person who has received more than one telephone call within any 12-month period by or on behalf of the same entity in violation of the regulations prescribed …

### US-CFR-310 — 16 CFR Part 310 (Telemarketing Sales Rule), eCFR current as of 2026-10-19

- URL: https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-310
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulation. Evidence copy (research record, outside this pack): US-CFR-310.txt

> Telephone calls between a telemarketer and any business to induce the purchase of goods or services or a charitable contribution by the business, provided, however that this exemption does not apply to: (i) The requirements of § 310.3(a)(2) and(4);

### US-FTC-TSRGUIDE — FTC: Complying with the Telemarketing Sales Rule (business guide)

- URL: https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): US-dnc.txt

> The prohibition on calls to numbers on the Registry does not apply to business-to-business calls or calls to …

### US-CFR-64-1601 — 47 CFR §64.1601(e) (caller ID for telemarketing), eCFR current as of 2026-10-19

- URL: https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-P/section-64.1601
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulation. Evidence copy (research record, outside this pack): US-CFR-64-1601.txt
- Note: Fetched directly by Opus from the eCFR versioner API.

> (e) Any person or entity that engages in telemarketing, as defined in section 64.1200(f)(10) must transmit caller identification information.

### US-FCC-AIVOICE — FCC Declaratory Ruling FCC 24-17 (8 Feb 2024): AI-generated voices are "artificial"

- URL: https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): US-FCC-AIVOICE.txt

> we confirm that the TCPA’s restrictions on the use of “artificial or prerecorded voice” encompass current AI technologies that generate human voices.3 As a …

### US-SCOTUS-MCLAUGHLIN — McLaughlin Chiropractic Associates v. McKesson Corp., 606 U.S. 146 (2025)

- URL: https://www.supremecourt.gov/opinions/24pdf/606us1r55_3d9g.pdf
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: court. Evidence copy (research record, outside this pack): US-SCOTUS-MCLAUGHLIN.txt

> The Hobbs Act does not bind district courts in civil enforcement proceedings to an agency's interpretation of a statute. District courts must independently determine the law's meaning under ordinary princi- ples of statutory interpretation while affording …

### US-FL-501059 — Florida Statutes §501.059 (Telephone Solicitation), current

- URL: https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.059.html
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): US-FL-501059.txt

> using an automated system for the selection and dialing of telephone numbers, the playing of a recorded message when a connection is …

> Within 15 days after receipt of such notice, the telephone solicitor shall cease sending text message solicitations to the called …

### US-OK-OTSA — Oklahoma Telephone Solicitation Act, 15 O.S. §775C.1–775C.6 (Title 15 compilation)

- URL: https://www.oklegislature.gov/OK_Statutes/CompleteTitles/os15.pdf
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): US-OK-OTSA.txt
- Note: Official Oklahoma Legislature Title 15 compilation PDF; §775C is inside it.

> if such call involves an automated system for the selection or dialing of telephone numbers or the playing of a recorded message when a connection is completed to a Oklahoma Statutes - Title 15. Contracts Page 172 number called …

> A commercial telephone solicitation phone call before 8 a.m. or after 8 p.m. local time in the called person's time zone; and 2. More than three commercial telephone solicitation phone calls from any number to a person …

### US-MD-STOP — Maryland Code, Commercial Law §§14-4501 to 14-4503 (Stop the Spam Calls Act)

- URL: https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gcl&section=14-4501&enactments=false
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): US-MD-STOP.txt

> Without the prior express written consent of the called party, a person may not make or cause to be made a telephone solicitation that involves: (i) An automated system for the selection or dialing of telephone numbers; or (ii) The playing of a recorded …

> To a called party during the hours between 8 p.m. and 8 a.m. in the called party’s time zone; (2) More than three times to the same called party during a 24–hour period on the same subject matter or …

### US-TX-SB140 — Texas SB 140 (89th Leg., 2025), enrolled

- URL: https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00140F.htm
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): US-TX-SB140.txt

> (7) "Telephone solicitation" means a [ telephone ] call or other transmission, including a transmission of a text or graphic message or of an image, initiated by a seller or salesperson [ initiates ] …

> This Act takes effect September 1, 2025. …

### US-CA-CCPA-FAQ — California Attorney General: CCPA FAQ (B2B and employee exemptions expired)

- URL: https://oag.ca.gov/privacy/ccpa
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): US-ca-privacy.txt

> The exemptions for employment-related personal information and personal information reflecting business-to-business transactions described in Civil Code Sec. 1798.145(m)-(n) expired on December 31, 2022.

### US-CA-DROP — California Privacy Protection Agency: Delete Request and Opt-Out Platform (DROP) for data brokers

- URL: https://cppa.ca.gov/data_broker_registry/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): US-CA-CPPA-DROP.txt

> Under the Delete Act , beginning August 1, 2026 , data brokers must access the “accessible deletion mechanism” at least once every 45 days and process consumer deletion requests, subject to …

### US-FTC-EXPERIAN — FTC press release: Experian Consumer Services, $650,000 (proposed order), 14 Aug 2023

- URL: https://www.ftc.gov/news-events/news/press-releases/2023/08/ftc-charges-experian-spamming-consumers-who-signed-company-accounts-marketing-emails-they-couldnt
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): US-experian.txt

> In addition to the $650,000 penalty, the proposed order prohibits ECS from sending marketing emails that fail to offer a mechanism to opt out of such …

### US-FTC-VERKADA — FTC press release: Verkada, $2.95m CAN-SPAM penalty (proposed order), 30 Aug 2024

- URL: https://www.ftc.gov/news-events/news/press-releases/2024/08/ftc-takes-action-against-security-camera-firm-verkada-over-charges-it-failed-secure-videos-other
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): US-verkada.txt

> Verkada relied on commercial email campaigns to help market its products, sending more than 30 million commercial emails over a three-year period. Verkada’s …

> the largest penalty obtained by the FTC for a CAN-SPAM violation. A …

### US-FCC-KRAMER — FCC Forfeiture Order FCC 24-104 (Steve Kramer, AI-voice robocalls), 30 Sep 2024

- URL: https://docs.fcc.gov/public/attachments/FCC-24-104A1.pdf
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): US-FCC-AIENF.txt

> We impose a penalty of $6,000,000 against Steve Kramer (Kramer) for effectuating an illegal robocall campaign that targeted potential New Hampshire …

### US-FCC-LINGO — FCC Order and Consent Decree DA 24-790 (Lingo Telecom), Aug 2024

- URL: https://docs.fcc.gov/public/attachments/DA-24-790A1.pdf
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): US-FCC-AIENF-LINGO.txt

> Lingo Telecom agrees to implement a robust compliance plan and pay a $1,000,000 civil penalty. 2. …

### US-WA-OLDNAVY — Brown v. Old Navy, LLC, Wash. Sup. Ct. No. 102592-1 (17 Apr 2025)

- URL: https://www.courts.wa.gov/opinions/pdf/1025921.pdf
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: court. Evidence copy (research record, outside this pack): US-WA-OLDNAVY.txt

> We hold that RCW 19.190.020(1)(b) prohibits sending Washington residents commercial e-mails that contain any false or misleading information in the subject lines of such e-mails. 20 For the current …


[US-FTC-CANSPAM]: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-USC-7704]: https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section7704&num=0&edition=prelim "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-FTC-INFL-2026]: https://www.federalregister.gov/documents/2026/09/15/2026-18853/civil-penalty-inflation-adjustments "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-FTC-INFL-2025]: https://www.govinfo.gov/content/pkg/FR-2025-01-17/pdf/2025-01361.pdf "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-USC-7706]: https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section7706&num=0&edition=prelim "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-USC-7707]: https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section7707&num=0&edition=prelim "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-WA-CEMA]: https://app.leg.wa.gov/RCW/default.aspx?cite=19.190&full=true "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-CA-17529]: https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=17529.5 "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-CASE-MAXBOUNTY]: https://www.govinfo.gov/content/pkg/USCOURTS-cand-5_10-cv-04712/pdf/USCOURTS-cand-5_10-cv-04712-1.pdf "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-SCOTUS-DUGUID]: https://www.supremecourt.gov/opinions/20pdf/19-511_p86b.pdf "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-CFR-64-1200]: https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200 "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-FCC-REVOKE-2026]: https://docs.fcc.gov/public/attachments/DA-26-12A1.pdf "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-FCC-REVOKE-2025]: https://docs.fcc.gov/public/attachments/DA-25-312A1.pdf "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-CA11-IMC]: https://media.ca11.uscourts.gov/opinions/pub/files/202410277.pdf "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-USC-227]: https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title47-section227&num=0&edition=prelim "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-CFR-310]: https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-310 "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-FTC-TSRGUIDE]: https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-CFR-64-1601]: https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-P/section-64.1601 "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-FCC-AIVOICE]: https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-SCOTUS-MCLAUGHLIN]: https://www.supremecourt.gov/opinions/24pdf/606us1r55_3d9g.pdf "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-FL-501059]: https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.059.html "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-OK-OTSA]: https://www.oklegislature.gov/OK_Statutes/CompleteTitles/os15.pdf "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-MD-STOP]: https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gcl&section=14-4501&enactments=false "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-TX-SB140]: https://capitol.texas.gov/tlodocs/89R/billtext/html/SB00140F.htm "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-CA-CCPA-FAQ]: https://oag.ca.gov/privacy/ccpa "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-CA-DROP]: https://cppa.ca.gov/data_broker_registry/ "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-FTC-EXPERIAN]: https://www.ftc.gov/news-events/news/press-releases/2023/08/ftc-charges-experian-spamming-consumers-who-signed-company-accounts-marketing-emails-they-couldnt "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-FTC-VERKADA]: https://www.ftc.gov/news-events/news/press-releases/2024/08/ftc-takes-action-against-security-camera-firm-verkada-over-charges-it-failed-secure-videos-other "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-FCC-KRAMER]: https://docs.fcc.gov/public/attachments/FCC-24-104A1.pdf "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-FCC-LINGO]: https://docs.fcc.gov/public/attachments/DA-24-790A1.pdf "Read 2026-10-22 JST (2026-10-21 UTC)"
[US-WA-OLDNAVY]: https://www.courts.wa.gov/opinions/pdf/1025921.pdf "Read 2026-10-22 JST (2026-10-21 UTC)"
