# Singapore: outreach law
Researched 2026-10-22 (JST; 2026-10-21 UTC) by Sol from primary sources where they were reachable. Status: **draft, not yet confirmed by a second reader against the primary texts**. Each rule below is a lead with its source, not a confirmed statement; `../keeping-current.md` says how to confirm one. Every default is a starting value. The owner, or his agent within its grant, can override it; the override line records who and why. An override changes the chosen action, not the law. Scope: ordinary commercial B2B and B2C outreach. Source and version gaps are marked in the text.

**Bottom line:** Opt-out bulk-message model, including IM; separate Singapore-number DNC rules and real B2B organisation-purpose exclusion.

## Channel defaults, legal reasons and override exposure

### Email

- **B2B default:** Targeted opt-out business-contact email; observe bulk SCA rules if aggregate similar-message thresholds are crossed.
- **B2C default:** Consent or a confirmed PDPA exception for personal-data use by default; SCA itself is opt-out, not universal prior-consent law.
- **Default channel basis:** SpamControlAct opt-out/content model for unsolicited bulk commercial messages.
- **Data-processing basis:** PDPA business-contact exclusion where genuinely applicable; otherwise consent/valid exception.
- **Legal rule / uncertainty:** SCA bulk means more than 100 similar-subject messages/24h, more than 1,000/30 days, or more than 10,000/year. It counts the sender’s campaign, not a separate allowance per recipient. Non-bulk is outside bulk-content rules, not outside all law. Publication alone is not consent under SCA5.
- **Required content (qualified by scope/verification):** For unsolicited bulk email: accurate nonmisleading subject/header; subject prefix<ADV> followed by space. Accurate functional contact email/phone; clear English unsubscribe notice and an email address to submit it. Unsubscribe facility valid at least 30 days. Physical postal address is one possible contact route, not an obligatory US-style footer.
- **Opt-out legal timing:** Bulk SCA: no further unsolicited messages after10 business days from unsubscribe submission; default immediate.
- **Loop handling:** Suppress further marketing on receipt, across the requested scope; recommended same-day handling. Keep a minimal suppression record, not the full discarded lead profile.
- **If overridden:** Noncompliant bulk email can support civil injunction/damages claims; personal-data collection/use may also breach PDPA even if SCA permits an opt-out model.
- **Evidence:** [SG-spam], [SG-schedule], [SG-remedies], [SG-pdpa]. Status: `mixed`.

### LinkedIn and other private social DMs

- **B2B default:** Targeted opt-out business-contact DM; classify instant-messaging account and campaign aggregate; personal-data basis still needed.
- **B2C default:** Consent recommended where personal-data use lacks a verified exception.
- **Default channel basis:** SCA covers commercial instant-messaging accounts; bulk threshold and unsubscribe rules.
- **Data-processing basis:** PDPA business-contact exclusion / consent or verified exception.
- **Legal rule / uncertainty:** SCA4A distinguishes instant-messaging accounts from an email/phone address merely used as account name. The SecondSchedule label/header paragraph3(1) does NOT apply to IM accounts; unsubscribe provisions still can. Do not impose<ADV> on IM as a statutory rule.
- **Required content (qualified by scope/verification):** For covered bulk IM: clear English unsubscribe instructions and usable route, functional30 days. Identity and nondeception recommended; exact statutory paragraph3 label/contact exemption for IM must be preserved.
- **Opt-out legal timing:** Covered bulk IM:10 business days after request, default immediate.
- **Loop handling:** Suppress further marketing on receipt, across the requested scope; recommended same-day handling. Keep a minimal suppression record, not the full discarded lead profile.
- **If overridden:** Bulk IM remains within SCA remedies despite the label exception. A phone-number account name alone does not establish that PDPA DNC number-addressed rules apply.
- **Evidence:** [SG-spam], [SG-schedule], [SG-remedies]. Status: `mixed`.

### SMS

- **B2B default:** Genuine receiving-organisation-purpose B2B message may use PDPA EighthSchedule exclusion; otherwise valid DNC check/consent. Apply SCA if bulk unsolicited.
- **B2C default:** Prior consent or clear current DNC status plus lawful personal-data basis; default consent.
- **Default channel basis:** PDPA Part9 number-addressed marketing/DNC plus SCA bulk-message rules.
- **Data-processing basis:** PDPA business-contact exclusion / consent or verified exception.
- **Legal rule / uncertainty:** DNC concerns Singapore telephone numbers, not all email/social inboxes. It excludes messages for the receiving organisation’s purposes under EighthSchedule1(1)(g); “selling to an employee personally” is not that. Valid registry confirmation or clear unambiguous recorded consent is required for covered specified messages.
- **Required content (qualified by scope/verification):** Covered PDPA message: clear accurate sender/authoriser identity and readily usable contact details. Bulk unsolicited SMS: <ADV> at start when no subject; unsubscribe by text to mobile number; clear English notice, functional30 days.
- **Opt-out legal timing:** SCA bulk10 business days; DNC consent-withdrawal and registry-validity exact prescribed periods not quoted—suppress immediately and check registry immediately before use.
- **Loop handling:** Suppress further marketing on receipt, across the requested scope; recommended same-day handling. Keep a minimal suppression record, not the full discarded lead profile.
- **If overridden:** Overclaiming B2B exclusion or ignoring DNC status can trigger PDPA enforcement; SCA bulk civil exposure can coexist.
- **Evidence:** [SG-dnc-law], [SG-excluded], [SG-spam], [SG-schedule]. Status: `mixed`.

### Live human telephone calls

- **B2B default:** Organisation-purpose B2B call exclusion if evidenced; otherwise current DNC confirmation or recorded clear unambiguous consent. Consent recommended for automated campaigns.
- **B2C default:** Consent default; an otherwise lawful DNC-clear cold call may exist, subject to PDPA personal-data basis.
- **Default channel basis:** PDPA Part9 DNC; organisation-purpose EighthSchedule exclusion.
- **Data-processing basis:** PDPA business-contact exclusion / lawful personal-data basis.
- **Legal rule / uncertainty:** SCA excludes telephone voice calls. PDPA DNC applies to covered Singapore-number calls, not just automated calls. Clear consent can override a DNC entry; absence from DNC is not itself a lawful source/data-use basis. No universal separate Singapore TCPA-like robocall consent rule is asserted.
- **Required content (qualified by scope/verification):** Identify sender/principal and contact; do not conceal calling-line identity. For automated delivery, provide a workable contact/cessation route as default; check any telecom-specific obligations.
- **Opt-out legal timing:** Suppress immediately; current withdrawal/check-validity periods need regulations confirmation.
- **Loop handling:** Suppress further marketing on receipt, across the requested scope; recommended same-day handling. Keep a minimal suppression record, not the full discarded lead profile.
- **If overridden:** DNC/PDPA investigation, orders and financial penalties; do not apply SCA$25-per-message damages automatically to voice calls.
- **Evidence:** [SG-dnc-law], [SG-excluded], [SG-spam]. Status: `mixed`.

### Automated / recorded / artificial-voice telephone calls

- **B2B default:** Organisation-purpose B2B call exclusion if evidenced; otherwise current DNC confirmation or recorded clear unambiguous consent. Consent recommended for automated campaigns.
- **B2C default:** Consent default; an otherwise lawful DNC-clear cold call may exist, subject to PDPA personal-data basis.
- **Default channel basis:** PDPA Part9 DNC; organisation-purpose EighthSchedule exclusion.
- **Data-processing basis:** PDPA business-contact exclusion / lawful personal-data basis.
- **Legal rule / uncertainty:** SCA excludes telephone voice calls. PDPA DNC applies to covered Singapore-number calls, not just automated calls. Clear consent can override a DNC entry; absence from DNC is not itself a lawful source/data-use basis. No universal separate Singapore TCPA-like robocall consent rule is asserted.
- **Required content (qualified by scope/verification):** Identify sender/principal and contact; do not conceal calling-line identity. For automated delivery, provide a workable contact/cessation route as default; check any telecom-specific obligations.
- **Opt-out legal timing:** Suppress immediately; current withdrawal/check-validity periods need regulations confirmation.
- **Loop handling:** Suppress further marketing on receipt, across the requested scope; recommended same-day handling. Keep a minimal suppression record, not the full discarded lead profile.
- **If overridden:** DNC/PDPA investigation, orders and financial penalties; do not apply SCA$25-per-message damages automatically to voice calls.
- **Evidence:** [SG-dnc-law], [SG-excluded], [SG-spam]. Status: `mixed`.

## Shared content recommendation — not universal law

Use a truthful sender and company identity. Give a working reply/opt-out route; include a privacy-notice link when personal data is used. For email use a real postal/company address as a loop recommendation even where the channel law does not mandate one. Do not transplant this into a universal SMS/DM address requirement. These are defaults where the local statute does not expressly require the item. A physical postal address is not a universal SMS/DM requirement.

## Lead lists: collection, scraping and enrichment

PDPA generally excludes business-contact information in its business context, not all data about employees. For personal rather than business-contact data, use consent or a genuinely available exception, notify purpose, protect and limit retention/transfers. Do not casually use the PDPA legitimate-interest exception to send direct marketing: marketing limitations and public-availability/other exceptions need the exact text. SCA/PDPA also prohibit relevant harvesting/dictionary attacks; manually finding a published address is not automatically harvesting software. [SG-pdpa; SG-spam; SG-dnc-law] Detailed exception/harvesting text still needs primary quotes.

Sources: [SG-spam], [SG-schedule], [SG-remedies], [SG-dnc-law], [SG-excluded], [SG-pdpa], [SG-starzest].

## Penalties and actual enforcement record

SCA14: statutory damages up to SGD25/message and aggregateSGD1m unless proved actual loss exceedsSGD1m; plaintiff must meet statutory loss/damage standing, so this is not an automatic fine per unwanted message. Separate PDPA enforcement framework and current DNC ceilings need provision-specific confirmation.

- **StarZest Tuition Agency first DNC conviction reported2014 — Amount/split not verified in this run.** PRIMARY-QUOTE-UNVERIFIED: candidate PDPC URL404; locate original judgment/release before using an amount. No actual fine amount is claimed; SCA civil damages are not a substitute for a DNC conviction amount. Sources: [SG-starzest].

Statutory ceilings, announced settlements, original administrative decisions and money actually collected are different. No probability or expected-loss estimate is asserted. A large campaign/enrichment decision is not a tariff for one ordinary relevant B2B message. No claim of “no enforcement” follows from a missing case.

## Open questions (recheck before relying on these)

- Retrieve current DNC regulations for check-validity and withdrawal timing; do not import SCA10 business days to voice.
- Quote current PDPA direct-marketing exceptions and business-contact scope.
- Retrieve StarZest judgment and exact imposed amount; confirm any current PDPA DNC financial-penalty ceiling.

## Sources and primary quotations

A source marked archival/version-check has a real quote but is not proof of October2026 consolidation. Unquoted legal/case details stay **PRIMARY-QUOTE-UNVERIFIED** until checked.

### SG-spam — Singapore Spam Control Act, sections 5–7

- URL: https://sso.agc.gov.sg/Act/SCA2007
- Read: 2026-10-22 (JST; 2026-10-21 UTC). HTTP: 200. Kind: statute. Verification: `quoted_primary`.

Exact retrieved excerpts (whitespace collapsed; excerpts can end mid-sentence):

> more than 100 electronic messages containing the same or similar subject matter during a 24‑hour period; ( b ) more than 1,000 electronic messages containing the same or similar subject matter during a 30‑day period; or ( c ) more than 10,000 electronic messages containing the same or similar subject matter during a one‑year period. (2) The Minist …

> (2) For the purposes of subsection (1), a recipient is not to be treated as having requested to receive the message or consented to the receipt of the message merely because the electronic address of the recipient was given or published by or on behalf of the recipient. (3) For the purposes of subsection (1), where a recipient of an electronic message, other than an unsolicited electronic message, submits an unsubscribe request, the recipient is not to be treated as having …

> more than 1,000 electronic messages containing the same or similar subject matter during a 30‑day period; or ( c ) more than 10,000 electronic messages containing the same or similar subject matter during a one‑year period. (2) The Minister may, by order in the Gazette , vary the number of electronic messages specified in subsection (1)( a ), ( b ) or ( c ). Application of Act 7. —(1) This Act does not apply unless an electronic message has a Singapore link. (2) For the pu …


### SG-schedule — Singapore Spam Control Act Second Schedule: instant-messaging label exception

- URL: https://sso.agc.gov.sg/Act/SCA2007?ProvIds=Sc2-
- Read: 2026-10-22 (JST; 2026-10-21 UTC). HTTP: 200. Kind: statute. Verification: `quoted_primary`.

Exact retrieved excerpts (whitespace collapsed; excerpts can end mid-sentence):

> (3) Sub‑paragraph (1) does not apply to any unsolicited commercial electronic message that is sent to an instant messaging account. [40/2020] Singapore Statutes Online FAQs Feedback Sitemap Report Vulnerability Privacy Statement Terms of Use © 2026 Attorney-General's Chambers of Singapore, Last upd …

> after the expiry of 10 business days after the day on which the unsubscribe request is submitted. (8) Any person who receives an unsubscribe request under this paragraph must not disclose any information contained in the unsubscribe request to any other person, except with the consent of the person whose particulars are contained in the unsubscribe request. (9) Sub‑paragraphs (1) to (7) do not apply if the unsolicited commercial electronic mess …

> the letters “<ADV>” with a space before the title in the subject field, or if there is no subject field, in the words first appearing in the message, to clearly identify that the message is an advertisement; ( c ) header information that is not false or misleading; and ( d ) an accurate and functional email address or telephone number by which the sender can be readily contacted. (2) Sub‑paragraph (1) does not apply if the unsolicited commercial …


### SG-remedies — Singapore Spam Control Act section 14 damages

- URL: https://sso.agc.gov.sg/Act/SCA2007?ProvIds=P14-
- Read: 2026-10-22 (JST; 2026-10-21 UTC). HTTP: 200. Kind: statute. Verification: `quoted_primary`.

Exact retrieved excerpts (whitespace collapsed; excerpts can end mid-sentence):

> not exceeding $25 for each electronic message mentioned in section 13(1); and (ii) not exceeding in the aggregate $1 million, unless the claimant proves that the actual loss suffered by the claimant from such electronic messages exceeds $1 million. [Act 25 of 2021 wef 01/04/2022] (4) In awarding statutory damages under subsection (3)( b ), the cou …

> any person who has suffered loss or damage as a direct or an indirect result of that contravention may commence an action in a court against — ( a ) the sender; or ( b ) a person who has contravened section 12(1). (2) This section does not affect any liability that any person has under any other written law or rule of law. Injunction and damages for civil action 14. —(1) Subject to the provisions of this Act, in an action under section 13(1), the types of relief that the court may grant includ …


### SG-dnc-law — Singapore PDPA Part 9, DNC

- URL: https://sso.agc.gov.sg/Act/PDPA2012?ProvIds=P19-
- Read: 2026-10-22 (JST; 2026-10-21 UTC). HTTP: 200. Kind: statute. Verification: `quoted_primary`.

Exact retrieved excerpts (whitespace collapsed; excerpts can end mid-sentence):

> a person must not send a specified message addressed to a Singapore telephone number unless the person has, at the time the person sends the specified message, valid confirmation that the Singapore telephone number is not listed in the relevant register. [40/2020] (2) For the purposes of subsection (1), the person has valid confirmation that a Sin …

> gave clear and unambiguous consent to the sending of the specified message to that Singapore telephone number; and ( b ) the consent is evidenced in written or other form so as to be accessible for subsequent reference. [40/2020] (5) For the purposes of this section and section 43A — ( a ) where there is only one register kept or maintained under section 39, the relevant register refers to that register; and ( b ) where there are 2 or more registers kept or maintai …

> Calling line identity not to be concealed 46 Consent 47 Withdrawal of consent 48 Defence for employee Part 9A DICTIONARY ATTACKS AND ADDRESS‑HARVESTING SOFTWARE 48A Interpretation of this Part 48B Prohibition on use of dictionary attacks and address‑harvesting software Part 9B OFFENCES AFFECTING PERSONAL DATA AND ANONYMISED INFORMATION 48C Interpretation and application of this Part 48D Unauthorised disclosure of personal data 48E Improper use of personal data 48F U …


### SG-excluded — Singapore PDPA Eighth Schedule: organisation-purpose messages

- URL: https://sso.agc.gov.sg/Act/PDPA2012?ProvIds=Sc8-
- Read: 2026-10-22 (JST; 2026-10-21 UTC). HTTP: 200. Kind: statute. Verification: `quoted_primary`.

Exact retrieved excerpts (whitespace collapsed; excerpts can end mid-sentence):

> any message sent to an organisation other than an individual acting in a personal or domestic capacity, for any purpose of the receiving organisation. (2) In sub‑paragraph (1)( e ), “ongoing relationship” means a relationship, on an ongoing basis, between the sender and the recipient of the message, arising from the carrying on or conduct of a bus …


### SG-pdpa — Singapore PDPA current Act, preliminary provisions

- URL: https://sso.agc.gov.sg/Act/PDPA2012?WholeDoc=1
- Read: 2026-10-22 (JST; 2026-10-21 UTC). HTTP: 200. Kind: statute. Verification: `quoted_primary`.

Exact retrieved excerpts (whitespace collapsed; excerpts can end mid-sentence):

> business contact information” means an individual’s name, position name or title, business telephone number, business address, business electronic mail address or business fax number and any other similar information about the individual, not provided by the individual solely for his or her personal purposes; “Chief Executive”, in relation to the A …


### SG-starzest — PDPC first DNC conviction URL candidate (not retrieved)

- URL: https://www.pdpc.gov.sg/news-and-events/announcements/2014/09/first-conviction-under-do-not-call-provisions
- Read: 2026-10-22 (JST; 2026-10-21 UTC). HTTP: 404. Kind: regulator. Verification: `primary_quote_unverified`.

**PRIMARY-QUOTE-UNVERIFIED.** A failed/empty/index response is not proof of the substantive rule or case amount.



[SG-spam]: https://sso.agc.gov.sg/Act/SCA2007 "Read 2026-10-22 (JST; 2026-10-21 UTC)"
[SG-schedule]: https://sso.agc.gov.sg/Act/SCA2007?ProvIds=Sc2- "Read 2026-10-22 (JST; 2026-10-21 UTC)"
[SG-remedies]: https://sso.agc.gov.sg/Act/SCA2007?ProvIds=P14- "Read 2026-10-22 (JST; 2026-10-21 UTC)"
[SG-dnc-law]: https://sso.agc.gov.sg/Act/PDPA2012?ProvIds=P19- "Read 2026-10-22 (JST; 2026-10-21 UTC)"
[SG-excluded]: https://sso.agc.gov.sg/Act/PDPA2012?ProvIds=Sc8- "Read 2026-10-22 (JST; 2026-10-21 UTC)"
[SG-pdpa]: https://sso.agc.gov.sg/Act/PDPA2012?WholeDoc=1 "Read 2026-10-22 (JST; 2026-10-21 UTC)"
[SG-starzest]: https://www.pdpc.gov.sg/news-and-events/announcements/2014/09/first-conviction-under-do-not-call-provisions "Read 2026-10-22 (JST; 2026-10-21 UTC)"
