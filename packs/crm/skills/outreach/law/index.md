# Law files: coverage, status and open items

Checked 2026-10-22 (JST; 2026-10-21 UTC). Every law file states facts with sources and checked dates. Every default in them is a starting value. The owner, or his agent within its grant, can override it; the override line records who and why. Exposure is sized from the statute and the real enforcement record. None of this is legal advice.

## Coverage

| file | country | status | what "status" means here |
|---|---|---|---|
| `uk.md` | United Kingdom | confirmed with corrections | a second reader checked every claim against the live primary text |
| `eu.md` | European Union baseline | confirmed with corrections | same |
| `de.md` | Germany | confirmed with corrections | same |
| `us.md` | United States, federal and six states | confirmed with corrections | same |
| `jp.md` | Japan | confirmed with corrections | same |
| `fr.md` | France | draft | one reader wrote it from primary sources where reachable; the CNIL site was down |
| `nl.md` | Netherlands | draft | same; the fine ceiling is unverified |
| `ie.md` | Ireland | draft | same |
| `es.md` | Spain | draft | same; the Vodafone appeal status is unverified |
| `it.md` | Italy | draft | same |
| `se.md` | Sweden | draft | same |
| `pl.md` | Poland | draft | same |
| `ca.md` | Canada | draft | same |
| `au.md` | Australia | draft | same |
| `sg.md` | Singapore | draft | same |
| `in.md` | India | draft | same; DPDP operative dates need confirmation |
| `br.md` | Brazil | draft | same |
| `kr.md` | South Korea | draft | same |

The confirmation pass read 99 claims across the five confirmed files: 14 added, 60 confirmed, 22 corrected, 3 unconfirmed. Each file's "Claim check" section lists its claims and their status. The machine record is `../defaults.json` under `law.jurisdictions.<CC>.confirmation`.

A draft file is a lead list with sources. To promote one, follow `../keeping-current.md`: read each cited source live, confirm or correct each claim, and update the status line.

## What the confirmation pass changed

These corrections change what the loop does. Each one is in the country file with its claim id.

- First message to a named person in the UK or the EU, Germany included: add one clear, separate line that they can object to direct marketing, plus a privacy-notice link. GDPR and UK GDPR Art 21(4) and Art 14(3)(b) require it at the first communication (UK-08, EU-08, DE-05).
- Platform DMs differ by country. Germany: an appellate court treats LinkedIn and Xing messages as electronic mail, so consent (OLG Hamm 2023). EU: electronic mail under Art 2(h) and the CJEU StWL decision. UK: the strict reading is consent for member accounts; realistic exposure is low, with no ICO case found. US: district courts apply CAN-SPAM, so add identification, an opt-out and a postal address. Japan: outside the email statute on its face (UK-05, EU-06, DE-03, US-07, JP-12).
- UK penalties: £17.5m or 4% of turnover for breaches from 5 February 2026. Emails sent but not received now count. Failed call attempts count. Directors can get their own penalty notice. TPS and CTPS lists must be no older than 28 days (UK-10, UK-11, UK-12, UK-16).
- Germany: the "Telefonica 2021 €225,000" case does not exist in BNetzA records. The BGH presumed-consent test for B2B calls is quoted. Consumer-call consent must be documented and kept five years under §7a (DE-07, DE-08, DE-10).
- US states verified: Oklahoma and Maryland need written consent for automated selection or dialling, calls 8am to 8pm, at most three per 24 hours, $500 trebled. Florida gives a 15-day STOP cure for texts. Washington bars commercial texts without clear consent, allows $100 per email or text in suits from 11 June 2026, and bars false subject-line facts. California §17529.5 sets $1,000 per deceptive email. Texas SB 140 makes texts telephone solicitations from 1 September 2025 (US-06, US-21 to US-25).
- US federal dates: $53,088 per email still applies in 2026. The FCC "revoke-all" rule is waived to 31 January 2027. The one-to-one consent rule is vacated. After McLaughlin (2025), courts are not bound by FCC readings such as the AI-voice ruling (US-04, US-11, US-12, US-18).
- AI-voice agents: UK reg 19(4) defines automated systems by "sounds which are not live speech". The US FCC calls AI voices "artificial". The loop treats an AI agent that dials and speaks alone as an automated call everywhere (UK-19, US-17, EU-13).
- Japan: the published-address exception needs the recipient's own web publication with no refusal note; enriched or guessed addresses do not qualify. Business cards are a statutory route. Consumer mail-order email ads are a direct ¥1m crime under 特商法, which does not apply to B2B. An APPI surcharge for profiting from illegal data handling is enacted but not yet in force (JP-02, JP-03, JP-13, JP-14, JP-19).

## The three unconfirmed claims

These stayed leads. The loop keeps its default on each; nothing blocks on them.

| claim | what is open | loop default |
|---|---|---|
| EU-12 | The Kaspr decision (CNIL, December 2024, €240,000 for scraped contact enrichment) was not read. The CNIL site returned HTTP 503 on every attempt and Légifrance returned a bot challenge. | Treat the figure as a lead. Recheck the CNIL decision. |
| EU-13 | No CJEU, EDPB or Commission text on AI voices was found. Art 13(1) covers systems "without human intervention". An AI agent that dials and speaks alone fits that wording on its face. | Consent for an AI-voice call to an EU natural person. Kept as the loop default, not as confirmed law. |
| JP-17 | No statute or guidance read addresses recorded or AI voices under 電話勧誘販売. | Consent for automated consumer calls; identification and refusal handling for any call. |

## What a lawyer should read first

These are the questions the files leave open across the five confirmed countries. A country's own "For a lawyer" section lists its specifics.

- A Japanese company prospecting UK and EU individuals: does UK GDPR or GDPR Art 3(2) reach B2B prospecting, and is an Art 27 representative needed? Which member state's ePrivacy law governs each send? Not read in this pass.
- Platform DMs: who is the PECR "subscriber" of a LinkedIn account (UK). Does platform email-forwarding of an InMail make the advertiser a sender (Japan). CAN-SPAM coverage of InMail rests on district-court authority only (US).
- AI-voice agents under PECR reg 19 "recorded matter", ePrivacy Art 13(1) "without human intervention", the TCPA after McLaughlin, and 特商法.
- US texting or automated calling: a state-by-state check for the real recipient states, including Texas chapter 302 registration and exemptions.
- Germany: realistic Abmahnung cost and contractual-penalty levels for one B2B cold email or LinkedIn message. Whether a pitch-free first question counts as Werbung.
- Leads not read: the CNIL Kaspr decision (site down), the CAA 特商法 guide (site down), e-Gov official texts (maintenance; labelled mirrors used).

## How the law files were made

One reader fetched and saved 197 evidence records in three parallel jobs on 2026-10-21 UTC. A second reader read the statute texts, regulator pages and decisions and decided every status for the five confirmed files. A build script cut each quote verbatim from the saved file; a missing anchor stopped the build. Official hosting came first. Labelled mirrors were used where the official site failed: Japan's statutes (e-Gov under maintenance) and OLG Hamm (NRWE timeout). The 13 draft files kept the first reader's text with a status line that says so.

Exposure is sized from the statute ceiling and the real enforcement record read in the pass. No probability or expected-loss figure is given. A missing case is never read as no enforcement.

## Unknown country

A country not in the table is not a refusal. Read `../add-your-country.md`, write the file from the official sources, and save it as a proposal with the shape every other file uses.
