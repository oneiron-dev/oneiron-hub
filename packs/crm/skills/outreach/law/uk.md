# United Kingdom: outreach law

Checked 2026-10-22 by Opus against primary sources (statute text, regulator guidance, court decisions), read live. Status: **confirmed with corrections**. Every default below is a recommendation the owner can override; an override changes the chosen action, not the law. Exposure is sized from the statute and the real enforcement record. Claim-by-claim results: the claim check below; the machine record is `../defaults.json` under `law.jurisdictions.UK`. Every default is a starting value. The owner, or his agent within its grant, can override it; the override line records who and why.

**Bottom line:** Cold email and SMS to companies (corporate subscribers) are lawful on an opt-out basis with sender identity and a valid stop address. Sole traders, partnerships, personal addresses, unknown subscribers and LinkedIn members default to consent. Live calls need TPS/CTPS screening (list ≤28 days old). Automated or AI-voice calls need specific consent. Since 5 Feb 2026 the PECR ceiling is £17.5m or 4% of turnover; real fines are £100k–£300k for campaigns of 100,000+ messages.

## What the Opus pass changed

- Penalty regime dated: the £17.5m / 4% ceiling and director penalty notices apply to breaches from 5 Feb 2026 (SI 2026/82); emails sent but not received now count (UK-10, UK-11, UK-12).
- TPS/CTPS list age is statutory: 28 days (reg 21(3)). Screen at least every 28 days (UK-16).
- First message to a named person must flag the right to object, clearly and separately (UK GDPR Art 21(4)) (UK-08).
- UK GDPR Art 6(11)(a) now names direct marketing as an example of a legitimate interest; the balance test still applies (UK-07).
- AI-voice calls: reg 19(4) defines automated systems by "sounds which are not live speech"; the loop treats AI-voice dialling as automated (UK-19).
- Trading-disclosure rules bind UK-registered companies only; for a non-UK sender a postal address is a recommendation (UK-21).
- Enforcement record refreshed to Oct 2026: 15 call/text penalties since April 2025 totalling £2.37m; one email case, £105k for 67m emails (UK-14).

## Channel defaults, legal basis and override exposure

### Email

- **B2B default:** Opt-out outreach to corporate subscribers (company, LLP, Scottish partnership, public body) at their work address. Sole traders, ordinary partnerships, personal addresses and anything unverified: consent or soft opt-in.
- **B2C default:** Prior consent, or the soft opt-in with all reg 22(3) conditions recorded.
- **Channel basis:** PECR reg 22 consent applies to individual subscribers only; reg 23 (identity, valid stop address) applies to all marketing email.
- **Data basis:** UK GDPR Art 6(1)(f) legitimate interests after a three-part test; Art 6(11)(a) lists direct marketing as an example. Consent where PECR requires consent.
- **Legal rule:** Reg 22: consent or soft opt-in for individual subscribers. Corporate subscribers: no PECR consent, but reg 23 applies. Subscriber type follows who holds the account (employer for a work address), not the job title.
- **Required content (law):**
  - Do not disguise or conceal the sender (reg 23(a)).
  - A valid address for stop requests (reg 23(b)); a reply address or link works.
  - First message to a named person: a clear, separate line that they can object to direct marketing (UK GDPR Art 21(4)), and privacy information or a link (Art 14(3)(b)).
  - UK-registered companies only: registered name, number, office and part of the UK (2015 Regs reg 25).
- **Recommended content (loop default, not law):**
  - Company name and a postal address in the footer, even where not legally required.
  - One-click or reply-STOP unsubscribe that works without login.
- **Opt-out, legal timing:** No PECR day count. On objection, stop processing personal data for direct marketing (Art 21(3)). The ICO says honour corporate opt-outs too.
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** Mis-classifying an individual subscriber (sole trader, personal address, unknown) as corporate is a reg 22 breach. Ceiling for breaches from 5 Feb 2026: £17.5m or 4% of worldwide turnover; undelivered emails count; directors can be fined separately. Real fines: ZMLUK £105,000 for 67m+ emails (Jan 2026); HelloFresh £140,000 for 79m emails and 1m texts (Jan 2024). All ICO penalties read are for campaigns of 100,000+ messages or calls. A few hundred relevant B2B emails to companies sit far below that pattern. UK GDPR exposure for the list processing is separate.
- **Status:** `opus_corrected` — claims UK-01, UK-02, UK-03, UK-06, UK-07, UK-08, UK-09, UK-10, UK-11, UK-12, UK-13, UK-14, UK-21. Sources: [UK-PECR-22], [UK-PECR-23], [UK-ICO-B2B], [UK-GDPR-6], [UK-GDPR-14], [UK-GDPR-21], [UK-DPA-157], [UK-DUAA], [UK-DUAA-COMM].
- **Note:** A Companies House number is good evidence of corporate status, not a legal precondition.

### LinkedIn and other private social DMs

- **B2B default:** Consent default for marketing DMs to LinkedIn members and other personal social accounts (strict reading: the member holds the account). Opt-out only where the account is demonstrably held by a corporate body.
- **B2C default:** Prior consent.
- **Channel basis:** Social DMs are electronic mail under PECR (ICO); reg 22 applies to individual-subscriber accounts; reg 23 to all.
- **Data basis:** UK GDPR legitimate interests (three-part test) for collecting profile data; consent where PECR requires it.
- **Legal rule:** The ICO treats social-media DMs as electronic mail and says PECR applies to professional networks. If subscriber status is unclear, treat it as individual. No ICO case or guidance addresses who is the "subscriber" of a LinkedIn account.
- **Required content (law):**
  - Do not disguise the sender (reg 23(a)).
  - A valid way to ask you to stop (reg 23(b)); a reply works.
  - First message: the Art 21(4) objection line and privacy information or a link.
- **Recommended content (loop default, not law):**
  - Name the company and why you are writing in the first two lines.
- **Opt-out, legal timing:** Stop on objection; no day count. Art 21(3) for personal data.
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** Strict-reading exposure is the same reg 22 breach as email. Realistic exposure is low: no ICO penalty or guidance targeting LinkedIn DMs was found, and penalties cluster at 100,000+ messages. The practical risks are a complaint and LinkedIn account restriction. Treat this as an owner call: many UK B2B senders DM on an opt-out basis.
- **Status:** `opus_confirmed` — claims UK-03, UK-04, UK-05, UK-08, UK-09, UK-10. Sources: [UK-ICO-B2B], [UK-PECR-22], [UK-PECR-23], [UK-GDPR-21].
- **Note:** A Sales Navigator seat paid by the recipient’s employer may make the employer the subscriber; untested.

### SMS

- **B2B default:** Opt-out only to a number contracted by a corporate body (company phone plan). Personal or unknown mobiles: consent or soft opt-in.
- **B2C default:** Prior consent, or the soft opt-in with all conditions recorded.
- **Channel basis:** PECR reg 22 (individual subscribers) and reg 23 (all).
- **Data basis:** UK GDPR legitimate interests after a three-part test, or consent where PECR requires it.
- **Legal rule:** SMS is electronic mail. The subscriber is whoever contracts for the line: a work mobile on a company plan is corporate; a personal mobile used for work is individual.
- **Required content (law):**
  - Sender identity not concealed (reg 23(a)).
  - A valid stop route at no more than transmission cost (reg 23(b); reg 22(3)(c) for soft opt-in).
  - First message to a named person: Art 21(4) objection line.
- **Recommended content (loop default, not law):**
  - Sender name in the first words; "Reply STOP to opt out".
- **Opt-out, legal timing:** No PECR day count; stop on objection (Art 21(3)).
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** SMS is where ICO fines concentrate: KRA Consultancy £300,000 (5.5m texts, 2026), Bharat Singh Chand £200,000 (966,449 texts, 2025), Allay Claims £120,000 (4m texts, 2026). Ceiling from 5 Feb 2026: £17.5m or 4%; directors can be fined.
- **Status:** `opus_confirmed` — claims UK-01, UK-02, UK-03, UK-06, UK-08, UK-10, UK-11, UK-12, UK-14. Sources: [UK-PECR-22], [UK-PECR-23], [UK-ICO-B2B], [UK-ICO-KRA], [UK-ICO-BSC], [UK-ICO-ZMLUK].

### Live human telephone calls

- **B2B default:** Manual live calls after screening against TPS and CTPS (list no older than 28 days) and your own do-not-call list.
- **B2C default:** Same, plus: no claims-management marketing without consent; pension calls only by authorised firms with consent or a qualifying relationship.
- **Channel basis:** PECR reg 21 opt-out regime (objections + TPS/CTPS), regs 21A/21B sector rules.
- **Data basis:** UK GDPR legitimate interests after a three-part test.
- **Legal rule:** Live calls are lawful to numbers that have not objected and are not on TPS/CTPS. A number registered under 28 days ago does not count. The caller must present a contactable calling-line ID.
- **Required content (law):**
  - Say who is calling (reg 24(1)(b)).
  - Present a calling-line ID you can be reached on (reg 21(A1)).
  - On request, give an address or a freephone number (reg 24(2)(b)).
- **Recommended content (loop default, not law):**
  - Offer to add them to the do-not-call list on any objection.
- **Opt-out, legal timing:** Stop calling a number once it objects. TPS/CTPS listing binds from 28 days after registration (reg 21(3)).
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** Calling unscreened lists is the core of ICO enforcement: TMAC £100,000 (260,332 calls), Jacksons £130,000 (232,776 calls), Elderly Aids £190,000 (758,053 calls), all 2026. Ceiling from 5 Feb 2026: £17.5m or 4%.
- **Status:** `opus_corrected` — claims UK-10, UK-11, UK-12, UK-15, UK-16, UK-17. Sources: [UK-PECR-21], [UK-PECR-24], [UK-TPS], [UK-ICO-PHONE], [UK-ICO-B2B], [UK-ICO-TMAC], [UK-ICO-JACKSONS], [UK-ICO-EAL].

### Automated / recorded / artificial-voice calls

- **B2B default:** Specific consent to automated calls from you, before the call. Applies to AI-voice agents that dial on their own.
- **B2C default:** Same.
- **Channel basis:** PECR reg 19: consent specific to automated calls from the caller; calling-line ID.
- **Data basis:** UK GDPR consent (the PECR consent doubles as the lawful basis).
- **Legal rule:** An automated calling system auto-dials a sequence of calls and transmits sounds that are not live speech. General marketing consent or live-call consent is not enough.
- **Required content (law):**
  - Name of the caller (reg 24(1)(a)).
  - Address or freephone number (reg 24(2)(b)).
  - Calling-line ID you can be reached on (reg 19(2)(b)).
- **Recommended content (loop default, not law):**
  - Say at the start that the voice is automated or AI.
- **Opt-out, legal timing:** Consent can be withdrawn at any time; stop on withdrawal.
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** Clearest consent breach in PECR, B2B included. Home Improvement Marketing £300,000 and Green Spark Energy £250,000 (9.5m automated calls), Sept 2025. Ceiling from 5 Feb 2026: £17.5m or 4%; directors can be fined.
- **Status:** `opus_corrected` — claims UK-10, UK-12, UK-18, UK-19. Sources: [UK-PECR-19], [UK-PECR-24], [UK-ICO-B2B], [UK-ICO-ROBO].

## Lead lists: collection, scraping and enrichment

UK GDPR applies to business contact data about identifiable people. Use Art 6(1)(f) legitimate interests after a three-part test (Art 6(11)(a) lists direct marketing as an example), or consent. Give Art 14 information within a month of collection, or at the first message if earlier. Honour Art 21 objections at once and keep a suppression record. Public availability is not permission, but business contacts on employer sites and professional networks may expect B2B contact (ICO). Bought or enriched lists do not transfer PECR consent: for individual subscribers the buyer needs consent given to it as sender. Sign Art 28 terms with processors.

## Penalties and the real enforcement record

PECR breaches of regs 19–24 from 5 Feb 2026: up to £17.5m or 4% of worldwide annual turnover, whichever is higher (DPA 2018 s.157(5) as applied by PECR Sch 1). Breaches before that date stay under the pre-DUAA regime (SI 2026/82 reg 11); its cap, widely cited as £500,000, was not re-read in this pass. Officers can receive their own penalty notice. UK GDPR fines are separate (same higher maximum).

| Case | Date | Amount | What it was | Status | Source |
|---|---|---|---|---|---|
| ZMLUK Ltd (formerly Zuru Media) | 20 Jan 2026 | £105,000 | 67m+ marketing emails, Jan–Jul 2023, no valid consent. The only email-only case in the period read. | Monetary penalty (ICO news) | [UK-ICO-ZMLUK] |
| Allay Claims Ltd | 20 Jan 2026 | £120,000 | 4m+ marketing texts, no valid consent or soft opt-in | Monetary penalty + enforcement notice | [UK-ICO-ZMLUK] |
| HelloFresh (Grocery Delivery E-Services UK Ltd) | 12 Jan 2024 | £140,000 | 79m emails + 1m texts over 7 months; bundled consent | Monetary penalty; appeal/payment not checked | [UK-ICO-HELLOFRESH] |
| Bharat Singh Chand (sole lead generator) | 16 Sep 2025 | £200,000 | 966,449 SMS; 19,138 complaints | Monetary penalty + enforcement notice | [UK-ICO-BSC] |
| KRA Consultancy Ltd | 20 May 2026 | £300,000 | 5.5m+ texts incl. fake bailiff threats; 60,000+ complaints | Monetary penalty | [UK-ICO-KRA] |
| TMAC Ltd | 3 Feb 2026 | £100,000 | 260,332 live calls to TPS-registered numbers | Monetary penalty + enforcement notice | [UK-ICO-TMAC] |
| Jacksons Marketing Ltd | 12 Mar 2026 | £130,000 | 232,776 live calls to TPS numbers registered 28+ days | Monetary penalty | [UK-ICO-JACKSONS] |
| Elderly Aids Ltd | 27 Aug 2026 | £190,000 | 758,053 live calls to TPS-registered people | Monetary penalty | [UK-ICO-EAL] |
| Home Improvement Marketing Ltd; Green Spark Energy Ltd | 25 Sep 2025 | £300,000; £250,000 | Automated (recorded) marketing calls; GSE 9.5m calls | Monetary penalties + enforcement notices | [UK-ICO-ROBO] |
| ICO aggregate (calls and texts) | Apr 2025 – 9 Oct 2026 | £2,370,000 over 15 notices | About £158k per notice on average | ICO statement | [UK-ICO-2370] |

Calibration: every penalty read involves 100,000+ messages or calls, most with complaints and deception. That is the enforcement pattern, not a tariff for low-volume relevant B2B email. Ceilings, settlements and money collected differ. A missing case is not proof that the ICO would not act.

## Claim check (summary)

| ID | Claim | Status | Source |
|---|---|---|---|
| UK-01 | Reg 22 applies only to individual subscribers. Companies, LLPs, Scottish partnerships and some public bodies need no PECR consent for marketing email or SMS. | confirmed | UK-PECR-22, UK-ICO-B2B |
| UK-02 | Sole traders, ordinary (non-LLP) English/Welsh/NI partnerships and other unincorporated bodies are individual subscribers: consent or soft opt-in. | confirmed | UK-ICO-B2B |
| UK-03 | Every marketing electronic mail, corporate or not, must not disguise the sender and must give a valid address for stop requests. | confirmed | UK-PECR-23 |
| UK-04 | The ICO treats social-media direct messages as electronic mail under PECR. | confirmed | UK-ICO-B2B |
| UK-05 | PECR applies to marketing via professional networks. If you cannot tell whether a contact is corporate, the ICO says treat it as an individual subscriber. A LinkedIn member account is held by the person, so the strict reading is: consent for marketing DMs. | confirmed | UK-ICO-B2B, UK-ICO-B2B |
| UK-06 | Soft opt-in needs: details obtained in a sale or negotiation, own similar products, a free refusal offered at collection and in every message. | confirmed | UK-PECR-22 |
| UK-07 | Still a three-part test, but the DUAA now writes direct marketing into UK GDPR Art 6(11)(a) as an example of processing that may be necessary for a legitimate interest. It is an example, not a pass: the balance test still applies. | corrected | UK-GDPR-6, UK-ICO-B2B |
| UK-08 | Add the Art 21(4) line: at the first message to a named person, tell them they can object to direct marketing, clearly and separately from other text. Privacy information (or a link) is due at the first communication under Art 14(3)(b). | corrected | UK-GDPR-21, UK-GDPR-14 |
| UK-09 | No N-day grace exists. On objection, personal data may no longer be processed for direct marketing. The ICO also says to honour corporate opt-outs. | confirmed | UK-GDPR-21, UK-ICO-B2B |
| UK-10 | Confirmed, with the date: the new ceiling applies to breaches on or after 5 Feb 2026 (SI 2026/82 reg 11); earlier breaches stay under the pre-DUAA regime (cap widely cited as £500k; not re-read). | confirmed | UK-DPA-157, UK-DUAA-COMM |
| UK-11 | Since 5 Feb 2026 an email sent but not received, or an unsuccessful call attempt, counts against its intended recipient. Bounced sends to individual subscribers still count. | added | UK-DUAA, UK-DUAA-COMM |
| UK-12 | The ICO can now also give a penalty notice to a director or officer when a company breaches regs 19–24 with the officer’s consent, connivance or neglect. | added | UK-DUAA |
| UK-13 | £140,000 for 79m emails and 1m texts over seven months, on bundled consent wording. | confirmed | UK-ICO-HELLOFRESH |
| UK-14 | Since April 2025 the ICO issued 15 penalty notices for calls and texts totalling £2.37m (about £158k each). The one email case in the period: ZMLUK, £105,000 for 67m+ emails. None of the 13 penalty pages read targets low-volume B2B email to companies. | confirmed | UK-ICO-2370, UK-ICO-ZMLUK |
| UK-15 | Reg 21 bars calls to objectors and to TPS/CTPS-listed numbers; reg 21(A1) requires a contactable calling-line ID; reg 24 requires the caller’s name, and an address or freephone number on request. | confirmed | UK-PECR-21, UK-PECR-24 |
| UK-16 | There is a statutory list age: a number listed on TPS/CTPS for under 28 days does not breach reg 21. So screen at least every 28 days; a list older than that is the exposure. | corrected | UK-PECR-21, UK-TPS |
| UK-17 | Pension calls: only trustees/managers or FCA-authorised firms, with specific consent or a qualifying relationship. Claims-management calls: not on the general opt-out route. | confirmed | UK-ICO-B2B, UK-ICO-PHONE |
| UK-18 | Reg 19: recorded-matter marketing by an automated calling system only with the subscriber’s consent to such calls from you, and with a contactable calling-line ID. The ICO applies it to B2B calls. | confirmed | UK-PECR-19, UK-ICO-B2B |
| UK-19 | The statute is more direct than the draft said: an "automated calling system" is one that auto-dials a sequence of calls and transmits "sounds which are not live speech". A synthetic AI voice is not live speech, so an auto-dialled AI-voice call fits the definition. Whether generated speech is "recorded matter" is untested: lawyer item. | corrected | UK-PECR-19 |
| UK-20 | Public business data is usable under UK GDPR with a lawful basis, privacy information and objection handling. Bought lists do not carry consent: a buyer needs consent given to it as sender for individual subscribers. | confirmed | UK-ICO-B2B, UK-ICO-B2B |
| UK-21 | The 2015 Trading Disclosures Regulations bind companies registered in the UK (registered number, office, part of UK on websites, business letters and order forms). A Japanese KK with no UK registration is outside them. PECR itself needs only a valid opt-out address, which can be an email address. | corrected | UK-TRADING-DISC |
| UK-22 | Reg 22(3A), in force 5 Feb 2026, lets charities use a soft opt-in for supporters. It does not apply to commercial senders. | added | UK-PECR-22 |

## For a lawyer

- Who is the PECR "subscriber" for a LinkedIn member account, and for an employer-paid Sales Navigator seat? The strict reading makes cold LinkedIn marketing DMs consent-based (UK-05).
- Is a live generative AI voice "recorded matter" under reg 19(1)? Reg 19(4) "not live speech" points to yes (UK-19).
- A non-UK sender targeting UK individuals: does UK GDPR Art 3(2) reach B2B prospecting, and is an Art 27 UK representative needed? Not checked in this pass.

## Open questions (no block; recheck)

- ICO electronic-mail guidance carries a DUAA "under review" banner; recheck when it is reissued.
- HelloFresh appeal and payment status not checked.
- Art 3(2)/Art 27 UK GDPR applicability to a Japanese sender: not read in this pass.

## Sources and primary quotations

Quotes are verbatim from the saved evidence file (whitespace collapsed). Mirror sources are labelled.

### UK-PECR-22 — PECR 2003 reg 22 (electronic mail; soft opt-in; charities), current revised text

- URL: https://www.legislation.gov.uk/uksi/2003/2426/regulation/22
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): UK-PECR-22.txt

> (1) This regulation applies to the transmission of unsolicited communications by means of electronic mail to individual subscribers.

> (3) A person may send or instigate the sending of electronic mail for the purposes of direct marketing where— (a) that person has obtained the contact details of the recipient of that electronic mail in the course of the sale or negotiations for the sale of a product or service to that recipient; (b) the direct marketing is in …

> (3A) A charity may send or instigate the sending of electronic mail for the purposes of direct marketing where— (a) the sole purpose of the direct marketing is to further one or more of the charity’s …

### UK-ICO-B2B — ICO: Business-to-business marketing

- URL: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): UK-ICO-B2B.txt

> this means the customer named on the bill for a telephone line or internet connection. There are …

> The PECR rule on direct marketing by electronic mail does not apply to corporate subscribers. For example, this means you can send B2B direct marketing emails or texts to any corporate body. You do not need their consent under PECR to send such messages.

> However not all types of businesses are classed as corporate subscribers under PECR. Some are actually classed as individual subscribers. This includes: sole traders; certain types of partnerships (eg non-limited liability partnerships or other types of English, Welsh and Northern Irish partnerships); and other unincorporated bodies of individuals. This means they are treated the same as individuals and have greater protections under PECR.

> It covers any electronically stored messages. For example emails, text messages, picture or video messages, voicemails, direct messages via social media or any similar message that is stored electronically.

> If you are unsure whether the contact details belong to an individual subscriber or a corporate subscriber this puts you at risk of breaching PECR. To mitigate that risk you should treat the details as belonging to an individual subscriber

> You must also comply with PECR, if you are intending to send marketing to these individuals by electronic means.

### UK-PECR-23 — PECR 2003 reg 23 (identity; valid opt-out address), current revised text

- URL: https://www.legislation.gov.uk/uksi/2003/2426/regulation/23
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): UK-PECR-23.txt

> where the identity of the person on whose behalf the communication has been sent has been disguised or concealed; F1 ... (b) where a valid address to which the recipient of the communication may send a request that such communications cease has not been provided;

### UK-GDPR-6 — UK GDPR Art 6, current revised text

- URL: https://www.legislation.gov.uk/eur/2016/679/article/6
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): UK-GDPR-6.txt

> For the purposes of paragraph 1(f), examples of types of processing that may be processing that is necessary for the purposes of a legitimate interest include— (a) processing that is necessary for the purposes of direct marketing,

### UK-GDPR-21 — UK GDPR Art 21, current revised text

- URL: https://www.legislation.gov.uk/eur/2016/679/article/21
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): UK-GDPR-21.txt

> At the latest at the time of the first communication with the data subject, the right referred to in paragraphs 1 and 2 shall be explicitly brought to the attention of the data subject and shall be presented clearly and separately from any other information.

> Where the data subject objects to processing for direct marketing purposes, the personal data shall no longer be processed for such purposes.

### UK-GDPR-14 — UK GDPR Art 14, current revised text

- URL: https://www.legislation.gov.uk/eur/2016/679/article/14
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): UK-GDPR-14.txt

> if the personal data are to be used for communication with the data subject, at the latest at the time of the first communication to that data subject;

### UK-DPA-157 — Data Protection Act 2018 s.157 (maximum penalty), applied to PECR by PECR Sch 1

- URL: https://www.legislation.gov.uk/ukpga/2018/12/section/157
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): UK-PECR-ENF-DPA157.txt

> The “higher maximum amount” is— (a) in the case of an undertaking, [ F6 £17,500,000 ] or 4% of the undertaking's total annual worldwide turnover in the preceding financial year, whichever is higher, or (b) in any other case, [ F6 £17,500,000 ] .

### UK-DUAA-COMM — Data (Use and Access) Act 2025 (Commencement No. 6 and Transitional and Saving Provisions) Regulations 2026 (SI 2026/82)

- URL: https://www.legislation.gov.uk/uksi/2026/82/made
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): UK-DUAA-COMM.txt

> Where any act or omission constituting a breach of the PEC Regulations occurred on or after 5th February 2026, any enforcement action taken in respect of that act or omission must be taken under those Regulations as amended by section 115 of, and Schedule 13 to, the 2025 Act.

> section 110 (interpretation of the PEC Regulations); (w) …

### UK-DUAA — Data (Use and Access) Act 2025 (c. 18), ss.110, 114, 115 and Sch 13

- URL: https://www.legislation.gov.uk/ukpga/2025/18
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): UK-DUAA-PECR.txt

> In the application of these Regulations in relation to— (a) information that is sent but not received, (b) a communication that is transmitted but not received, (c) an electronic mail that is sent but not received, or (d) an unsuccessful attempt to make a call, a reference to the recipient of the information, communication, electronic mail or call is to be read as a reference to the intended recipient.

> If a penalty notice is given to a body in respect of a failure to comply with any of regulations 19 to 24 of the PEC Regulations, the Commissioner may also give a penalty notice to an officer of the body if the Commissioner is satisfied that the failure— (a) took place with the consent or connivance of the officer, or (b) was attributable to any neglect on the part of the officer.

### UK-ICO-HELLOFRESH — ICO penalty: Grocery Delivery E-Services UK Ltd t/a HelloFresh, 12 Jan 2024

- URL: https://ico.org.uk/action-weve-taken/enforcement/2024/01/grocery-delivery-e-services-uk-ltd-ta-hellofresh/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): UK-ICO-HELLOFRESH.txt

> has fined food delivery company HelloFresh £140,000 for a campaign of 79 million spam emails and 1 million spam texts over a seven-month period.

### UK-ICO-2370 — ICO news: complaints about automated nuisance calls hit five-year high, 9 Oct 2026

- URL: https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/10/complaints-about-automated-nuisance-calls-hit-five-year-high/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): UK-ICO-ENF-NEWS-complaints-about-automated-nuisance-calls-hit-five-year-high.txt

> Since April 2025, we have issued 15 Monetary Penalty Notices in respect of nuisance calls and spam texts totaling £2,370,000.

### UK-ICO-ZMLUK — ICO news: Fines of £225,000 for nuisance marketing messages (ZMLUK, Allay Claims), 20 Jan 2026

- URL: https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/01/fines-of-225-000-for-nuisance-marketing-messages/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): UK-ICO-ENF-NEWS-fines-of-225-000-for-nuisance-marketing-messages.txt

> ZMLUK Limited (formerly Zuru Media Ltd), based in Bristol, has been fined £105,000 for sending over 67 million marketing emails between January and July 2023 without valid consent.

### UK-PECR-21 — PECR 2003 reg 21 (unsolicited calls; TPS/CTPS; 28 days), current revised text

- URL: https://www.legislation.gov.uk/uksi/2003/2426/regulation/21
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): UK-PECR-21.txt

> (1) A person shall neither use, nor instigate the use of, a public electronic communications service for the purposes of making unsolicited calls for direct marketing purposes where— (a) the called line is that of a subscriber who has previously notified the caller that such calls should not for the time being be made on that line; or (b) the number allocated to a subscriber in respect of the called line is one listed in the register kept under regulation 26.

> (3) A person shall not be held to have contravened paragraph (1)(b) where the number allocated to the called line has been listed on the register for less than 28 days preceding that on which the call is made.

### UK-PECR-24 — PECR 2003 reg 24 (information on calls), current revised text

- URL: https://www.legislation.gov.uk/uksi/2003/2426/regulation/24
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): UK-PECR-24.txt

> (2) The particulars referred to in paragraph (1) are— (a) the name of the person; (b) either the address of the person or a telephone number on which he can be reached free of charge.

### UK-TPS — TPS (operator): business page

- URL: https://www.tpsonline.org.uk/pages/business
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: register_operator. Evidence copy (research record, outside this pack): UK-TPS.txt

> Organisations are required by law to screen their data against the TPS register every 28 days, but …

### UK-ICO-PHONE — ICO: Telephone marketing (guide to PECR)

- URL: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/telephone-marketing/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): UK-ICO-PHONE.txt

> You can call a number if it is not listed on the TPS or CTPS and you are not marketing claims management services. So …

### UK-PECR-19 — PECR 2003 reg 19 (automated calling), current revised text

- URL: https://www.legislation.gov.uk/uksi/2003/2426/regulation/19
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): UK-PECR-19.txt

> A person shall neither transmit, nor instigate the transmission of, communications comprising recorded matter for direct marketing purposes by means of an automated calling [ F1 or communication ] system except in the circumstances referred to in paragraph (2).

> (4) For the purposes of this regulation, an automated calling system is a system which is capable of— (a) automatically initiating a sequence of calls to more than one destination in accordance with instructions stored in that system; and (b) transmitting sounds which are not live speech for reception by persons at some or all of the destinations so called.

### UK-TRADING-DISC — Company, LLP and Business (Names and Trading Disclosures) Regulations 2015 (SI 2015/17)

- URL: https://www.legislation.gov.uk/uksi/2015/17/contents
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): UK-TRADING-DISC.txt

> Every company shall disclose the particulars set out in paragraph (2) on— (a) its business letters; (b) its order forms; and (c) its websites.

### UK-ICO-KRA — ICO penalty: KRA Consultancy Ltd, 20 May 2026

- URL: https://ico.org.uk/action-weve-taken/enforcement/2026/05/kra-consultancy-ltd-mpn/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): UK-ICO-ENF-kra-consultancy-ltd-mpn.txt

> KRA Consultancy Ltd was fined £300,000 for sending over 5.5 million unsolicited direct marketing and fake bailiff texts in breach of regulations 22 and 23 of PECR. The messages resulted in over …

### UK-ICO-BSC — ICO penalty: Bharat Singh Chand, 16 Sep 2025

- URL: https://ico.org.uk/action-weve-taken/enforcement/2025/09/bharat-singh-chand-1/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): UK-ICO-ENF-bharat-singh-chand-1.txt

> he sent or instigated the sending of 966,449 direct marketing SMS messages in breach of regulations 22 and 23 of PECR. This resulted in 19,138 complaints to the 7726 spam reporting service. He was …

### UK-ICO-TMAC — ICO penalty: TMAC Ltd, 3 Feb 2026

- URL: https://ico.org.uk/action-weve-taken/enforcement/2026/02/tmac-ltd-mpn/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): UK-ICO-ENF-tmac-ltd-mpn.txt

> TMAC contravened regulations 21 and 24 of PECR and the ICO issued a monetary penalty of £100,000 and an enforcement notice. Between 8 February 2024 and 24 September 2024, TMAC used a public …

### UK-ICO-JACKSONS — ICO penalty: Jacksons Marketing Ltd, 12 Mar 2026

- URL: https://ico.org.uk/action-weve-taken/enforcement/2026/03/jacksons-marketing-ltd-mpn/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): UK-ICO-ENF-jacksons-marketing-ltd-mpn.txt

> Jacksons Marketing Ltd was fined £130,000 for making 232,776 unsolicited live direct marketing calls between 29 January 2024 and 12 December 2024 to telephone numbers that had been registered with …

### UK-ICO-EAL — ICO news: Elderly Aids Ltd fined £190k, 27 Aug 2026

- URL: https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/08/ico-hits-company-selling-call-blockers-with-190k-fine-for-nuisance-calls/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): UK-ICO-ENF-NEWS-ico-hits-company-selling-call-blockers-with-190k-fine-for-nuisance-calls.txt

> The ICO has fined Elderly Aids Ltd (EAL) £190,000 for bombarding people with the very nuisance calls it claimed to protect them from. The company deliberately targeted elderly people to promote …

### UK-ICO-ROBO — ICO news: energy firms fined half a million pounds for automated calls, 25 Sep 2025

- URL: https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2025/09/warning-over-robo-calls-as-energy-firms-fined-half-a-million-pounds-for-unlawful-marketing-calls/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): UK-ICO-ENF-NEWS-warning-over-robo-calls-as-energy-firms-fined-half-a-million-pounds-for-unlawful-marketing-calls.txt

> We have fined Home Improvement Marketing Ltd (HIM) , based in Pembrokeshire, £300,000 and issued it with an enforcement notice ordering it to stop its unlawful practices. We have also fined Green Spark Energy Ltd (GSE) , based in Durham, £250,000 for making …

### UK-ICO-DUAA — ICO: Statement on the commencement of the DUAA, 5 Feb 2026

- URL: https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/02/statement-on-the-commencement-of-the-data-use-and-access-act-duaa/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): UK-ICO-DUAA.txt

> issue fines of up to £17.5 million or 4% of global turnover under the Privacy and Electronic Communications Regulations (PECR). We have published more …

### UK-ICO-EMAIL — ICO: Electronic mail marketing (guide to PECR; page carries a DUAA "under review" banner)

- URL: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): UK-ICO-EMAIL.txt


[UK-PECR-22]: https://www.legislation.gov.uk/uksi/2003/2426/regulation/22 "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-ICO-B2B]: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/ "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-PECR-23]: https://www.legislation.gov.uk/uksi/2003/2426/regulation/23 "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-GDPR-6]: https://www.legislation.gov.uk/eur/2016/679/article/6 "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-GDPR-21]: https://www.legislation.gov.uk/eur/2016/679/article/21 "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-GDPR-14]: https://www.legislation.gov.uk/eur/2016/679/article/14 "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-DPA-157]: https://www.legislation.gov.uk/ukpga/2018/12/section/157 "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-DUAA-COMM]: https://www.legislation.gov.uk/uksi/2026/82/made "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-DUAA]: https://www.legislation.gov.uk/ukpga/2025/18 "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-ICO-HELLOFRESH]: https://ico.org.uk/action-weve-taken/enforcement/2024/01/grocery-delivery-e-services-uk-ltd-ta-hellofresh/ "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-ICO-2370]: https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/10/complaints-about-automated-nuisance-calls-hit-five-year-high/ "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-ICO-ZMLUK]: https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/01/fines-of-225-000-for-nuisance-marketing-messages/ "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-PECR-21]: https://www.legislation.gov.uk/uksi/2003/2426/regulation/21 "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-PECR-24]: https://www.legislation.gov.uk/uksi/2003/2426/regulation/24 "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-TPS]: https://www.tpsonline.org.uk/pages/business "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-ICO-PHONE]: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/telephone-marketing/ "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-PECR-19]: https://www.legislation.gov.uk/uksi/2003/2426/regulation/19 "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-TRADING-DISC]: https://www.legislation.gov.uk/uksi/2015/17/contents "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-ICO-KRA]: https://ico.org.uk/action-weve-taken/enforcement/2026/05/kra-consultancy-ltd-mpn/ "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-ICO-BSC]: https://ico.org.uk/action-weve-taken/enforcement/2025/09/bharat-singh-chand-1/ "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-ICO-TMAC]: https://ico.org.uk/action-weve-taken/enforcement/2026/02/tmac-ltd-mpn/ "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-ICO-JACKSONS]: https://ico.org.uk/action-weve-taken/enforcement/2026/03/jacksons-marketing-ltd-mpn/ "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-ICO-EAL]: https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/08/ico-hits-company-selling-call-blockers-with-190k-fine-for-nuisance-calls/ "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-ICO-ROBO]: https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2025/09/warning-over-robo-calls-as-energy-firms-fined-half-a-million-pounds-for-unlawful-marketing-calls/ "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-ICO-DUAA]: https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/02/statement-on-the-commencement-of-the-data-use-and-access-act-duaa/ "Read 2026-10-22 JST (2026-10-21 UTC)"
[UK-ICO-EMAIL]: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/ "Read 2026-10-22 JST (2026-10-21 UTC)"
