# European Union baseline: outreach law

Checked 2026-10-22 by Opus against primary sources (statute text, regulator guidance, court decisions), read live. Status: **confirmed with corrections**. Every default below is a recommendation the owner can override; an override changes the chosen action, not the law. Exposure is sized from the statute and the real enforcement record. Claim-by-claim results: the claim check below; the machine record is `../defaults.json` under `law.jurisdictions.EU`. Every default is a starting value. The owner, or his agent within its grant, can override it; the override line records who and why.

**Bottom line:** The EU sets the floor; each member state decides B2B email and live calls. Natural persons: consent for email, SMS, social DMs and automated calls, with a same-seller customer exception. Every marketing email, B2B included, must show the sender and give a valid stop address. GDPR legitimate interest covers the data, not the channel. First message: flag the right to object, clearly and separately.

Read the recipient-country file as well (DE, FR, NL, IE, ES, IT, SE, PL). This file is the floor, not a permission to send anywhere in the EU.

## What the Opus pass changed

- Art 13(4) content duties (sender identity, valid stop address) apply to B2B mail too (EU-05).
- Platform DMs: CJEU StWL and OLG Hamm treat stored platform messages as electronic mail; default upgraded from "may be" (EU-06).
- Art 21(4) objection notice at first message added (EU-08).
- ePrivacy Regulation proposal withdrawn: no new EU instrument is coming (EU-14).
- Kaspr €240,000 could not be read (CNIL down): left UNCONFIRMED (EU-12).

## Channel defaults, legal basis and override exposure

### Email

- **B2B default:** Use the recipient-country rule. If no country file exists: consent for named natural persons; for legal-person subscribers, follow the national file when added (until then, consent).
- **B2C default:** Prior consent, or the Art 13(2) same-seller customer exception.
- **Channel basis:** ePrivacy Art 13(1)/(2) for natural persons; national law for legal persons (Art 13(5)); Art 13(4) for all.
- **Data basis:** GDPR Art 6(1)(f) after a necessity and balance test (recital 47; CJEU KNLTB), or consent where the channel needs consent.
- **Legal rule:** Opt-in for natural persons; customer exception; national choice for legal persons. Identity and stop-address rules bind every sender.
- **Required content (law):**
  - No disguised or concealed sender (Art 13(4)).
  - A valid address for stop requests (Art 13(4)).
  - Commercial communication clearly identifiable, sender identifiable (E-Commerce Directive Art 6, via Art 13(4)).
  - First message to a named person: the right to object, explicit and separate (GDPR Art 21(4)); Art 14 information or a link (Art 14(3)(b)).
- **Recommended content (loop default, not law):**
  - Company name and postal address in the footer.
- **Opt-out, legal timing:** On objection, stop direct-marketing processing at once (Art 21(3)); the one-month response deadline (Art 12(3)) is not a window to keep sending.
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** National ePrivacy sanctions (set by each state, Art 15a) plus GDPR fines up to €20m/4% for basis, rights and information breaches. A legitimate-interest assessment does not cure a national consent breach. Size by country: see the national file.
- **Status:** `opus_corrected` — claims EU-01, EU-02, EU-04, EU-05, EU-07, EU-08, EU-09, EU-10, EU-11. Sources: [EU-EPRIV], [EU-GDPR], [EU-CJEU-KNLTB].

### LinkedIn and other private social DMs

- **B2B default:** Treat as electronic mail: same as email for the recipient country.
- **B2C default:** Prior consent.
- **Channel basis:** Art 2(h) electronic mail; Art 13 as for email.
- **Data basis:** GDPR Art 6(1)(f) after a balance test, or consent.
- **Legal rule:** Any message stored in the network until the recipient collects it is electronic mail. Courts have applied this to inbox ads (CJEU) and to Xing, Facebook, LinkedIn and WhatsApp messages (OLG Hamm).
- **Required content (law):**
  - Sender not disguised; a valid way to ask you to stop (Art 13(4)).
  - First message: Art 21(4) objection line; Art 14 information or a link.
- **Recommended content (loop default, not law):**
  - Say who you are and why you write in the first lines.
- **Opt-out, legal timing:** Stop on objection (Art 21(3)).
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** As for email in the recipient country. In Germany an appellate court has already applied the consent rule to LinkedIn messages.
- **Status:** `opus_corrected` — claims EU-04, EU-05, EU-06, EU-08. Sources: [EU-EPRIV], [EU-CJEU-STWL], [DE-OLG-HAMM].

### SMS

- **B2B default:** Recipient-country rule; consent where no national file exists.
- **B2C default:** Prior consent or the customer exception.
- **Channel basis:** Art 13 as for email (SMS is electronic mail).
- **Data basis:** GDPR Art 6(1)(f) after a balance test, or consent.
- **Legal rule:** SMS is electronic mail under Art 2(h).
- **Required content (law):**
  - Sender not disguised; valid stop route (Art 13(4)).
  - First message: Art 21(4) objection line.
- **Recommended content (loop default, not law):**
  - "Reply STOP" in every message.
- **Opt-out, legal timing:** Stop on objection (Art 21(3)).
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** National sanctions plus GDPR exposure, as for email.
- **Status:** `opus_confirmed` — claims EU-01, EU-02, EU-04, EU-05, EU-08. Sources: [EU-EPRIV], [EU-GDPR].

### Live human telephone calls

- **B2B default:** Recipient-country rule (opt-in or opt-out plus national do-not-call lists).
- **B2C default:** Recipient-country rule.
- **Channel basis:** National choice under Art 13(3).
- **Data basis:** GDPR lawful basis (usually Art 6(1)(f)).
- **Legal rule:** Live human calls are outside Art 13(1); each state picks consent or opt-out.
- **Required content (law):**
  - National caller-identification rules; GDPR Art 21(4) objection notice at first contact with a named person.
- **Recommended content (loop default, not law):**
  - Name, company and purpose at the start of the call.
- **Opt-out, legal timing:** National rules; Art 21(3) for personal data.
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** Varies by state; see the national file.
- **Status:** `opus_confirmed` — claims EU-03, EU-04, EU-08. Sources: [EU-EPRIV], [EU-GDPR].

### Automated / recorded / artificial-voice calls

- **B2B default:** Prior consent (required for natural persons by EU law; for legal persons check the country file, consent until then).
- **B2C default:** Prior consent.
- **Channel basis:** Art 13(1) automatic calling machines, for natural persons; national law for legal persons.
- **Data basis:** GDPR consent.
- **Legal rule:** Automated calling systems without human intervention need prior consent. The loop treats AI-voice agents that dial and talk alone as such systems.
- **Required content (law):**
  - Identity of the caller and a way to stop; national recorded-call rules.
- **Recommended content (loop default, not law):**
  - Disclose at the start that the voice is automated.
- **Opt-out, legal timing:** Withdrawal of consent stops further calls; Art 21(3).
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** Consent breach under national ePrivacy law plus GDPR exposure. No EU ruling on AI voices yet.
- **Status:** `opus_partly_unconfirmed` — claims EU-01, EU-04, EU-13. Sources: [EU-EPRIV].

## Lead lists: collection, scraping and enrichment

GDPR applies to business contact data about identifiable people. Basis: Art 6(1)(f) after a necessity and balance test (recital 47; CJEU KNLTB: a commercial interest can qualify if strictly necessary), or consent. Art 14 information within a month of collection, or at the first message if earlier, including the source of the data. Art 21 objections are absolute for direct marketing. Processors need Art 28 terms; transfers out of the EEA need Chapter V tools. Public profiles and bought lists are not exemptions.

## Penalties and the real enforcement record

GDPR: up to €20m or 4% of worldwide annual turnover for basis, rights and information breaches (Art 83(5)); €10m or 2% for processor and security duties (Art 83(4)). ePrivacy: penalties are national (Art 15a); there is no single EU spam fine.

| Case | Date | Amount | What it was | Status | Source |
|---|---|---|---|---|---|
| KASPR (CNIL) | Dec 2024 (reported) | €240,000 (reported, UNCONFIRMED) | Scraped LinkedIn contact enrichment; a data-broker case, not a per-message tariff | UNCONFIRMED: CNIL site in maintenance during the check | [EU-KASPR] |

EU-level fines are national. Use the recipient-country file for real cases. A missing case is not proof of no enforcement.

## Claim check (summary)

| ID | Claim | Status | Source |
|---|---|---|---|
| EU-01 | Email, fax and automated calling systems without human intervention need prior consent, for natural-person subscribers. | confirmed | EU-EPRIV |
| EU-02 | Contact details obtained in a sale may be used for own similar products if the customer can object free and easily at collection and in every message. | confirmed | EU-EPRIV |
| EU-03 | Each member state chooses consent or opt-out for live calls and other non-Art 13(1) channels. | confirmed | EU-EPRIV |
| EU-04 | B2B mail to a legal-person subscriber is decided nationally. EU law alone gives neither a consent rule nor a cold-send permission for companies. | confirmed | EU-EPRIV |
| EU-05 | Art 13(4) applies to every marketing electronic mail, B2B included (Art 13(5) limits only paras 1 and 3): no disguised sender, a valid address for stop requests, and compliance with E-Commerce Directive Art 6 (commercial communications clearly identifiable, sender identifiable). | corrected | EU-EPRIV |
| EU-06 | Stronger than "may": "electronic mail" is any message stored in the network until collected (Art 2(h)); the CJEU applied Art 13(1) to inbox ads (StWL), and a German appellate court applied it to Xing, Facebook, LinkedIn and WhatsApp messages. Default: treat platform DMs as electronic mail. | corrected | EU-EPRIV, EU-CJEU-STWL |
| EU-07 | Recital 47 says direct marketing "may be regarded" as a legitimate interest. The CJEU (KNLTB) accepts a purely commercial interest only if processing is strictly necessary and passes the balance. Channel consent under ePrivacy is a separate test. | confirmed | EU-GDPR, EU-CJEU-KNLTB |
| EU-08 | Confirmed, and the draft missed Art 21(4): the right to object must be flagged explicitly, clearly and separately, at the latest in the first message. | corrected | EU-GDPR, EU-GDPR |
| EU-09 | Where data are used to communicate with the person, the Art 14 information is due at the first communication at the latest. | confirmed | EU-GDPR |
| EU-10 | Art 83(5) covers basis, rights (incl. Art 14 and 21) and transfers: €20m or 4% of worldwide turnover. Art 83(4) covers processor and security duties: €10m or 2%. | confirmed | EU-GDPR, EU-GDPR |
| EU-11 | Member states set the penalties for ePrivacy breaches (Art 15a). | confirmed | EU-EPRIV |
| EU-12 | Not read. The CNIL site was in maintenance (HTTP 503) on every attempt and Légifrance returned a bot challenge. Keep as a lead; recheck the CNIL decision. | unconfirmed | EU-KASPR |
| EU-13 | No CJEU, EDPB or Commission text on AI voices was found. Art 13(1) covers systems "without human intervention"; an AI agent that dials and speaks alone fits that wording on its face. Kept as the loop default, not as confirmed law. | unconfirmed | EU-EPRIV |
| EU-14 | No. The Commission withdrew the ePrivacy Regulation proposal (COM(2017)10); the 2002 Directive and national laws stay the baseline. | added | EU-EPREG-WITHDRAW |
| EU-15 | Done. ePrivacy: the 19.12.2009 consolidation is the latest. GDPR: EUR-Lex lists 04/05/2016 as the current consolidated version. The quoted Art 13 and GDPR texts are the current EU texts. | confirmed | EU-GDPR |

## For a lawyer

- Which national ePrivacy law applies when a Japanese sender emails an EU recipient (usually the recipient’s state), and whether GDPR Art 3(2) and an Art 27 EU representative apply to B2B prospecting from Japan. Not read in this pass.
- For named work addresses (firstname@company), is the subscriber the employer (legal person) or the employee (natural person) in each target state? It decides whether Art 13(1) consent applies.
- AI voice agents under Art 13(1) "without human intervention" (EU-13).
- Kaspr decision: read it when the CNIL site is back (EU-12).

## Open questions (no block; recheck)

- Recheck CNIL KASPR decision (SAN-2024) when cnil.fr is reachable.
- Watch the Digital Omnibus GDPR/ePrivacy proposals; none was in force or consolidated on EUR-Lex at the check date.

## Sources and primary quotations

Quotes are verbatim from the saved evidence file (whitespace collapsed). Mirror sources are labelled.

### EU-EPRIV — Directive 2002/58/EC (ePrivacy), consolidated text 19.12.2009 (latest consolidation), EUR-Lex

- URL: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02002L0058-20091219
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): EU-EPRIV.txt
- Note: EUR-Lex answered HTTP 202 to plain requests; full text captured remotely.

> The use of automated calling and communication systems without human intervention (automatic calling machines), facsimile machines (fax) or electronic mail for the purposes of direct marketing may be allowed only in respect of subscribers or users who have given their prior consent.

> 2. Notwithstanding paragraph 1, where a natural or legal person obtains from its customers their electronic contact details for electronic mail, in the context of the sale of a product or a service, in accordance with Directive 95/46/EC, the same natural or legal person may use these electronic contact details for direct …

> 3. Member States shall take appropriate measures to ensure that unsolicited communications for the purposes of direct marketing, in cases other than those referred to in paragraphs 1 and 2, are not allowed either without the consent of the subscribers or users concerned or in respect of subscribers or users who do not wish to receive these communications, the choice between these options to be determined by national legislation,

> 5. Paragraphs 1 and 3 shall apply to subscribers who are natural persons. Member States shall also ensure, in the framework of Community law and applicable national legislation, that the legitimate interests of subscribers other than natural persons with regard to unsolicited communications are sufficiently protected.

> 4. In any event, the practice of sending electronic mail for the purposes of direct marketing which disguise or conceal the identity of the sender on whose behalf the communication is made, which contravene Article 6 of Directive 2000/31/EC, which do not have a valid address to which the recipient may send a request that such communications cease or which encourage recipients to visit websites that contravene that Article shall be prohibited.

> ‘electronic mail’ means any text, voice, sound or image message sent over a public communications network which can be stored in the network or in the recipient's terminal equipment until it is collected by the recipient;

### EU-CJEU-STWL — CJEU C-102/20 StWL Städtische Werke Lauf, 25 Nov 2021

- URL: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:62020CJ0102
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: court. Evidence copy (research record, outside this pack): EU-CJEU-STWL.txt

> the display, in the inbox of an electronic mail service user, of advertising messages in a form similar to that of real emails, and placed in the same position as those emails, without the fact that …

> constitutes ‘use of … electronic mail for the purposes of direct marketing’, such use being allowed only on the …

### EU-GDPR — Regulation (EU) 2016/679 (GDPR), Official Journal text, EUR-Lex

- URL: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: statute. Evidence copy (research record, outside this pack): EU-GDPR.txt
- Note: EUR-Lex lists 04/05/2016 as the current consolidated version (no later substantive consolidation).

> The processing of personal data for direct marketing purposes may be regarded as carried out for a legitimate interest. …

> Where the data subject objects to processing for direct marketing purposes, the personal data shall no longer be processed for such purposes.

> At the latest at the time of the first communication with the data subject, the right referred to in paragraphs 1 and 2 shall be explicitly brought to the attention of the data subject and shall be presented clearly and separately from any other information.

> if the personal data are to be used for communication with the data subject, at the latest at the time of the first communication to that data subject;

> 5. Infringements of the following provisions shall, in accordance with paragraph 2, be subject to administrative fines up to 20 000 000 EUR, or in the case of an undertaking, up to 4 % of the total worldwide annual turnover of the preceding financial year, whichever is higher:

> 4. Infringements of the following provisions shall, in accordance with paragraph 2, be subject to administrative fines up to 10 000 000 EUR, or in the case of an undertaking, up to 2 % of the total worldwide annual turnover of the preceding financial year, whichever is higher:

### EU-CJEU-KNLTB — CJEU C-621/22 Koninklijke Nederlandse Lawn Tennisbond, 4 Oct 2024

- URL: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:62022CJ0621
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: court. Evidence copy (research record, outside this pack): EU-CJEU-KNLTB.txt

> in order to satisfy a commercial interest of the controller, may be regarded as necessary for the purposes of the legitimate interests pursued by that controller or by a third party, within the meaning of that provision, and whether that provision requires that such an interest be determined by law. 26 In order to answer those questions, it should, as a preliminary point, be borne in mind that the objective pursued by the GDPR, as is set out in Article 1 thereof and in recitals 1 and 10 thereof, consists, inter alia, in ensuring a high level of protection of the fundamental rights and freedoms of natural persons, in particular their right to privacy with respect to the processing of personal data, as enshrined in Article 8(1) of the Charter and Article 16(1) TFEU (judgment of 7 March 2024, IAB Europe, C‑604/22 , EU:C:2024:214 , paragraph 53 and the case-law cited). 27 In accordance with that objective, any processing of personal data must, inter alia, comply with the principles relating to the processing of such data set out in Article 5 of that regulation and satisfy the lawfulness conditions listed in Article 6 of that regulation (see, to that effect, judgments of 6 October 2020, La Quadrature du Net and Others, C‑511/18, C‑512/18 and C‑520/18 , EU:C:2020:791 , paragraph 208 , and of 11 July 2024, Meta Platforms Ireland (Representative action), C‑757/22 , EU:C:2024:598 , paragraph 49 ). 28 In that regard, it should be noted that, under Article 5(1)(a) of the GDPR, personal data are to be processed lawfully, fairly and in a transparent manner in relation to the data subject. 29 In particular, as the Court has held, the first subparagraph of Article 6(1) of the GDPR sets out an exhaustive and restrictive list of the cases in which processing of personal data can be regarded as lawful. Thus, in order to be capable of being regarded as such, processing must fall within one of the cases provided for in that provision (judgment of 4 July 2023, Meta Platforms and Others (General terms of use of a social network), C‑252/21 , EU:C:2023:537 , paragraph 90 ). 30 Under point (a) of the first subparagraph of Article 6(1) of the GDPR, processing of personal data is lawful if and to the extent that the data subject has given consent to such processing for one or more specific purposes. In the absence of such consent, or where that consent has not been given in a free, specific, informed and unambiguous manner for the purposes of Article 4(11) of that regulation, such processing is nevertheless justified where it meets one of the requirements of necessity referred to in points (b) to (f) of the first subparagraph of Article 6(1) of that regulation. 31 In that context, the justifications provided for in that latter provision, in so far as they allow the processing of personal data carried out in the absence of the data subject’s consent to be made lawful, must be interpreted restrictively (judgment of 4 July 2023, Meta Platforms and Others (General terms of use of a social network), C‑252/21 , EU:C:2023:537 , paragraph 93 and the case-law cited). 32 Furthermore, as the Court has held, where it can be found that the processing of personal data is necessary in respect of one of the justifications provided for in points (b) to (f) of the first subparagraph of Article 6(1) of the GDPR, it is not necessary to determine whether that processing also falls within the scope of another of those justifications (judgment of 4 July 2023, Meta Platforms and Others (General terms of use of a social network), C‑252/21 , EU:C:2023:537 , paragraph 94 and the case-law cited). 33 The Court has also held that, in accordance with Article 5 of the GDPR, the controller bears the burden of proving that those data are collected, inter alia, for specified, explicit and legitimate purposes and that they are processed lawfully, fairly and in a transparent manner in relation to the data subject. In addition, according to Article 13(1)(c) of that regulation, where personal data are collected from the data subject, the controller must inform the data subject of the purposes of the processing for which those data are intended as well as the legal basis for the processing (judgment of 4 July 2023, Meta Platforms and Others (General terms of use of a social network), C‑252/21 , EU:C:2023:537 , paragraph 95 ). 34 In the present case, it is apparent from the documents before the Court that the members of the KNLTB have not given consent, within the meaning of point (a) of the first subparagraph of Article 6(1) of the GDPR, to the disclosure by the KNLTB, for consideration, of their personal data to third parties, in particular to TennisDirect and the NLO. 35 In those circumstances, in order to provide the referring court with an answer which will be of use to it, it must be ascertained whether the provisions of point (f) of the first subparagraph of Article 6(1) of that regulation, referred to specifically in the request for a preliminary ruling, may be relied on to justify the disclosure of such data to those third parties. 36 In that regard, it should be recalled that, in accordance with point (f) of the first subparagraph of Article 6(1) of the GDPR, processing of personal data is lawful if it is necessary for the purposes of the legitimate interests pursued by the controller or by a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject which require protection of such personal data. 37 As the Court has previously held, that provision lays down three cumulative conditions so that the processing of personal data is lawful, namely, first, the pursuit of a legitimate interest by the data controller or by a third party; second, the need to process personal data for the purposes of the legitimate interests pursued; and, third, that the interests or fundamental freedoms and rights of the person concerned by the data protection do not take precedence over the legitimate interest of the controller or of a third party (judgment of 4 July 2023, Meta Platforms and Others (General terms of use of a social network), C‑252/21 , EU:C:2023:537 , paragraph 106 and the case-law cited). 38 As regards, first, the condition relating to the pursuit of a ‘legitimate interest’, it should be emphasised that, in the absence of a definition of that concept in the GDPR, as the Court has previously held, a wide range of interests is, in principle, capable of being regarded as legitimate (see, to that effect, judgment of 7 December 2023, SCHUFA Holding (Discharge from remaining debts), C‑26/22 and C‑64/22 , EU:C:2023:958 , paragraph 76 ). 39 As is also apparent from recital 47 of the GDPR, which concerns the concept of ‘legitimate interest’, the EU legislature did not require that the interest pursued by a controller be provided for by law in order for the processing of personal data carried out by that controller to be legitimate within the meaning of point (f) of the first subparagraph of Article 6(1) of that regulation. That finding is particularly true given that that recital cites, by way of example, direct marketing purposes in general as legitimate interests that may be pursued by a controller. 40 However, while the concept of ‘legitimate interest’, within the meaning of point (f) of the first subparagraph of Article 6(1) of the GDPR, is not limited to interests enshrined in and determined by law, it requires that the alleged legitimate interest be lawful. 41 In addition, it should be recalled that, according to Article 13(1)(d) of the GDPR, it is the responsibility of the controller, at the time when personal data relating to a data subject are collected from that person, to inform him or her of the legitimate interests pursued where that processing is based on point (f) of the first subparagraph of Article 6(1) of that regulation (judgment of 4 July 2023, Meta Platforms and Others (General terms of use of a social network), C‑252/21 , EU:C:2023:537 , paragraph 107 ). 42 Second, with regard to the condition that the processing of personal data be necessary for the purposes of the legitimate interests pursued, that condition requires the referring court to ascertain that the legitimate data processing interests pursued cannot reasonably be achieved just as effectively by other means less restrictive of the fundamental rights and freedoms of data subjects, in particular the rights to respect for private life and to the protection of personal data guaranteed by Articles 7 and 8 of the Charter (judgment of 7 December 2023, SCHUFA Holding (Discharge from remaining debts), C‑26/22 and C‑64/22 , EU:C:2023:958 , paragraph 77 and the case-law cited). 43 In that context, it should also be recalled that the condition relating to the need for processing must be examined in conjunction with the ‘data minimisation’ principle enshrined in Article 5(1)(c) of the GDPR, in accordance with which personal data must be ‘adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed’ (judgment of 4 July 2023, Meta Platforms and Others (General terms of use of a social network), C‑252/21 , EU:C:2023:537 , paragraph 109 and the case-law cited). 44 Lastly, as regards, third, the condition that the interests or fundamental rights and freedoms of the person concerned by the data protection do not take precedence over the legitimate interests of the controller or of a third party, the Court has previously held that that condition entails a balancing of the opposing rights and interests at issue which depends in principle on the specific circumstances of the particular case and that, consequently, it is for the referring court to carry out that balancing exercise, taking account of those specific circumstances (judgment of 4 July 2023, Meta Platforms and Others (General terms of use of a social network), C‑252/21 , EU:C:2023:537 , paragraph 110 and the case-law cited). 45 Furthermore, recital 47 of the GDPR states that the interests and fundamental rights of the data subject may in particular override the interest of the data controller where personal data are processed in circumstances where data subjects do not reasonably expect such processing (judgment of 4 July 2023, Meta Platforms and Others (General terms of use of a social network), C‑252/21 , EU:C:2023:537 , paragraph 112 ). 46 While it is ultimately for the national court to assess whether, in relation to the processing of personal data at issue in the main proceedings, the three conditions referred to in paragraph 37 of the present judgment are satisfied, it is open to the Court, when giving a preliminary ruling on a reference, to give clarifications to guide the national court in that determination (judgments of 4 July 2023, Meta Platforms and Others (General terms of use of a social network), C‑252/21 , EU:C:2023:537 , paragraph 96 , and of 7 December 2023, SCHUFA Holding (Discharge from remaining debts), C‑26/22 and C‑64/22 , EU:C:2023:958 , paragraph 81 and the case-law cited). 47 In the present case, as regards, first, the condition relating to the pursuit of a legitimate interest by the controller or by a third party, within the meaning of point (f) of the first subparagraph of Article 6(1) of the GDPR, the referring court refers to the commercial interest of the controller, that is to say a sports federation such as the KNLTB, which consists in the disclosure, for consideration, of the personal data of its members to third parties, namely, in this case, a company that sells sports products and a provider of games of chance and casino games in the Netherlands, for advertising or marketing purposes, in particular so that that company and provider may send advertising messages and special offers to those members. 48 In that regard, the Court has not ruled out the possibility that a commercial interest of the controller which consists in the promotion and sale of advertising space for marketing purposes may be regarded as a legitimate interest within the meaning of point (f) of the first subparagraph of Article 6(1) of the GDPR (see, by analogy, judgment of 13 May 2014, Google Spain and Google, C‑131/12 , EU:C:2014:317 , paragraph 73 ). 49 In those circumstances, a commercial interest of the controller such as the one referred to in paragraph 47 of the present judgment could constitute a legitimate interest, within the meaning of point (f) of the first subparagraph of Article 6(1) of the GDPR, provided that it is not contrary to the law. It is, however, for the referring court to assess, on a case-by-case basis, whether such an interest exists, taking into account the applicable legal framework and all the circumstances of the case. 50 Where such an interest is regarded as legitimate, it is also necessary, in order for the pursuit of that interest to allow the processing of personal data pursuant to point (f) of the first subparagraph of Article 6(1) of the GDPR, that the controller comply with all its other obligations under that regulation. 51 Second, as regards the condition that such processing be necessary for the purposes of that interest and, in particular, the existence of means that are less restrictive of the fundamental rights and freedoms of data subjects and equally appropriate, it must be stated that it would, in particular, be possible for a sports federation such as the KNLTB, wishing to disclose its members’ personal data to third parties for consideration, to inform its members beforehand and to ask them whether they want their data to be transmitted to those third parties for advertising or marketing purposes. 52 That solution would make it possible for the members concerned, in accordance with the data minimisation principle referred to in paragraph 43 of the present judgment, to retain control over the disclosure of their personal data and thus to limit the disclosure of those data to what is in fact necessary and relevant in relation to the purposes for which those data are transmitted and processed (see, by analogy, judgment of 12 September 2024, HTB Neunte Immobilien Portfolio and Ökorenta Neue Energien Ökostabil IV, C‑17/22 and C‑18/22 , EU:C:2024:738 , paragraph 60 ). 53 A procedure such as that described in the preceding paragraph of the present judgment may involve the least intrusion in the right to protection of the confidentiality of the data subject’s personal data, whilst allowing the controller to pursue, in an equally efficient manner, the legitimate interest on which it relies, which it is however for the referring court to ascertain (see, by analogy, judgment of 12 September 2024, HTB Neunte Immobilien Portfolioand Ökorenta Neue Energien Ökostabil IV, C‑17/22 and C‑18/22 , EU:C:2024:738 , paragraph 61 ). 54 Third, as regards the balancing of interests which it is for the referring court to carry out in the light of the specific circumstances of the dispute in the main proceedings, that court must take account, in particular, of the reasonable expectations of the data subject as well as the scale of the processing at issue and its impact on that person (judgment of 4 July 2023, Meta Platforms and Others (General terms of use of a social network), C‑252/21 , EU:C:2023:537 , paragraph 116 ). 55 In the context of such a balancing exercise, it is for the referring court to ascertain whether the right of the members of tennis associations to privacy with respect to the processing of their personal data, as enshrined in Article 8(1) of the Charter and Article 16(1) TFEU, may take precedence over the commercial interest of a national tennis federation. From that point of view, as is apparent from recital 47 of the GDPR, particular importance should be attached to the question whether those members could reasonably expect, at the time when their personal data were collected in order for them to become members of a tennis association, that those data would be disclosed, for consideration, to third parties – in the present case, to sponsors of the KNLTB – for advertising and marketing purposes. 56 In addition, the referring court will have to take account of the fact that the data in question are transmitted, inter alia, to a provider of games of chance and casino games, such as the NLO, the promotional and marketing activities of which, although legitimate, are carried out in a context which, contrary to what follows from recital 47 of the GDPR, does not appear to be characterised by a relevant and appropriate relationship between the data subjects and the controller. Moreover, in certain circumstances, the processing of such data could have harmful effects on the members of the tennis associations concerned since those activities may expose those members to the risks associated with the development of gambling addiction. 57 In the light of the foregoing, the answer to the questions referred is that point (f) of the first subparagraph of Article 6(1) of the GDPR must be interpreted as meaning that the processing of personal data which consists in the disclosure, for consideration, of personal data of the members of a sports federation, in order to satisfy a commercial interest of the controller, may be regarded as necessary for the purposes of the legitimate interests pursued by that controller, within the meaning of that provision, only on condition that that processing is strictly necessary for the purposes of the legitimate interest in question and that, in the light of all the relevant circumstances, the interests or fundamental rights and freedoms of those members do not override that legitimate interest.

### EU-KASPR — CNIL: KASPR sanction page (site in maintenance during the check)

- URL: https://www.cnil.fr/en/data-scraping-kaspr-fined-eu240000
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): EU-KASPR.txt
- Note: HTTP 503 maintenance on every attempt; Légifrance returned a bot challenge. Nothing about the case was read.

### EU-EPREG-WITHDRAW — Withdrawal of Commission proposals, OJ C/2025/5423 (lists COM(2017)10 ePrivacy Regulation)

- URL: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52025XC05423
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: official_journal. Evidence copy (research record, outside this pack): EU-EPREG-WITHDRAW-OJ.txt

> COM(2017)10 final 2017/0003 (COD) Proposal for a REGULATION OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL concerning the respect for private life and the protection of personal data in electronic communications and repealing Directive 2002/58/EC (Regulation …

### DE-OLG-HAMM — OLG Hamm, Hinweisbeschluss 3 May 2023, 18 U 154/22 (social-network messages are electronic mail), mirror with headnotes

- URL: https://medien-internet-und-recht.de/volltext.php?mir_dok_id=3302
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: mirror. Evidence copy (research record, outside this pack): DE-COURT-SOCIALDM-MIRROR.txt
- Note: Official NRWE database timed out; text from the MIR mirror. Full decision text also saved as DE-COURT-SOCIALDM.txt (nulegal mirror).

> 3. Unter den Begriff der elektronische Post im Sinne des § 7 Abs. 2 Nr. 3 UWG a.F. fallen neben E-Mails, SMS und MMS auch sämtliche Nachrichten über Social Media-Dienste wie Xing, Facebook, LinkedIn oder WhatsApp. Werbung über solche Dienste erfordert daher …

> 3. Unter den Begriff der elektronische Post im Sinne des § 7 Abs. 2 Nr. 3 UWG a.F. fallen neben E-Mails, SMS und MMS auch sämtliche Nachrichten über Social Media-Dienste wie Xing, Facebook, LinkedIn oder WhatsApp. Werbung über solche Dienste erfordert daher grundsätzlich die vorherige ausdrückliche …


[EU-EPRIV]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:02002L0058-20091219 "Read 2026-10-22 JST (2026-10-21 UTC)"
[EU-CJEU-STWL]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:62020CJ0102 "Read 2026-10-22 JST (2026-10-21 UTC)"
[EU-GDPR]: https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng "Read 2026-10-22 JST (2026-10-21 UTC)"
[EU-CJEU-KNLTB]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:62022CJ0621 "Read 2026-10-22 JST (2026-10-21 UTC)"
[EU-KASPR]: https://www.cnil.fr/en/data-scraping-kaspr-fined-eu240000 "Read 2026-10-22 JST (2026-10-21 UTC)"
[EU-EPREG-WITHDRAW]: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52025XC05423 "Read 2026-10-22 JST (2026-10-21 UTC)"
[DE-OLG-HAMM]: https://medien-internet-und-recht.de/volltext.php?mir_dok_id=3302 "Read 2026-10-22 JST (2026-10-21 UTC)"
