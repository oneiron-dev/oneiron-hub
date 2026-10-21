# Japan: outreach law

Checked 2026-10-22 by Opus against primary sources (statute text, regulator guidance, court decisions), read live. Status: **confirmed with corrections**. Every default below is a recommendation the owner can override; an override changes the chosen action, not the law. Exposure is sized from the statute and the real enforcement record. Claim-by-claim results: the claim check below; the machine record is `../defaults.json` under `law.jurisdictions.JP`. Every default is a starting value. The owner, or his agent within its grant, can override it; the override line records who and why.

**Bottom line:** Japan is opt-in for email and SMS with real B2B exceptions: an address the business published itself (with no refusal note), a business card, or an existing trading relationship. LinkedIn and other in-app DMs fall outside the email statute on its face. Consumer sales email adds a ¥1m criminal rule. Calls are refusal-based (identify, state purpose, never re-solicit after a no); B2B calls are outside the consumer rules. Enforcement is orders first, criminal penalties rare.

## What the Opus pass changed

- Published-address exception made precise: published by the recipient itself, no refusal note; enrichment or guessed addresses do not qualify (JP-02). Business-card exception added (JP-03).
- Social DMs: the Act covers only SMTP and phone-number messaging, so in-app DMs are outside it on its face (JP-12).
- Penalties confirmed with current 拘禁刑 wording; orders target bulk senders (JP-08, JP-09). Named orders and the criminal-use record added (JP-10).
- B2C email: 特商法 Art 12-3 consent rule with a direct ¥1m criminal fine (JP-13); 特商法 does not apply to B2B or to buyers abroad (JP-14).
- Telephone rules quoted (Arts 16, 17) (JP-15). APPI 2026 amendment (課徴金) promulgated, not yet in force (JP-19).

## Channel defaults, legal basis and override exposure

### Email

- **B2B default:** Send to (a) people who consented, (b) people who handed over their address in writing (business card), (c) existing trading partners, or (d) an address the business itself published on the web with no refusal note. Record which, with the URL or card. Otherwise consent.
- **B2C default:** Prior consent (承諾) with a record; for online sales also 特商法 Art 12-3.
- **Channel basis:** 特定電子メール法 Art 3(1) items 1–4; Art 3(2) records; 特商法 Art 12-3 for consumer mail-order ads.
- **Data basis:** APPI: purpose published or notified (Art 21), fair acquisition (Art 20), third-party provision rules (Art 27).
- **Legal rule:** Opt-in with enumerated exceptions. The published-address exception requires the recipient’s own publication on the internet without a refusal statement. The Act applies to email sent from or to equipment in Japan.
- **Required content (law):**
  - Name of the responsible sender (Art 4(1)).
  - An email address or URL to refuse further mail (Art 4(2)).
  - A statement that refusal is possible, right before or after that address (Rule Art 9(1), Art 7(1)(2)).
  - The sender’s postal address and a phone, email or URL for complaints; may be on a linked page if the email shows the link (Rule Art 9(2)-(3), Art 7(1)(3)).
  - Truthful sender information (Art 5).
- **Recommended content (loop default, not law):**
  - A Japanese-language opt-out line for Japanese recipients.
- **Opt-out, legal timing:** Stop on receipt of a refusal (Art 3(3)); no grace period. 特商法 Art 12-3(2) for consumer ads.
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** First step is a MIC/CAA improvement order, aimed at bulk senders (Art 7). Breaching the order, or falsifying sender data, is a crime: up to 1 year 拘禁刑 or ¥1m, company fine up to ¥30m. Real record: named orders (2017, 2018), 8 criminal cases in 2006–2014, no case-level fine amount found. For consumer mail-order ads, breach of 特商法 Art 12-3 is directly punishable by up to ¥1m.
- **Status:** `opus_corrected` — claims JP-01, JP-02, JP-03, JP-04, JP-05, JP-06, JP-07, JP-08, JP-09, JP-10, JP-13, JP-14. Sources: [JP-TOKUDEN-ACT], [JP-TOKUDEN-RULE], [JP-TOKUDEN-GL], [JP-TOKUSHO-ACT], [JP-MIC-ORDER-MOTHER], [JP-DEKYO-PENAL].

### LinkedIn and other private social DMs

- **B2B default:** Opt-out human DMs are open under the email statute (in-app messages are outside it). Keep the content truthful and honour a no at once.
- **B2C default:** Consent recommended for consumer sales DMs (特商法 may treat them as electronic advertising; untested).
- **Channel basis:** Outside 特定電子メール法 unless the message travels by SMTP or phone number (ordinance H21 No. 85).
- **Data basis:** APPI for profile data.
- **Legal rule:** Only SMTP-based and phone-number-based messages are "電子メール" under the Act. Platform terms still apply.
- **Required content (law):**
  - No statutory DM footer under the email Act.
  - If a platform forwards your message by email, the Art 4 display items may apply (untested).
- **Recommended content (loop default, not law):**
  - Sender name and company, purpose, and a one-line way to say no.
- **Opt-out, legal timing:** No statutory deadline; loop suppresses on a no.
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** Low legal exposure under the email Act on its face; the open point is platform email forwarding. Platform account action is the practical risk.
- **Status:** `opus_corrected` — claims JP-11, JP-12. Sources: [JP-TOKUDEN-ACT], [JP-TOKUDEN-METHOD].

### SMS

- **B2B default:** Consent by default. A published email address is not consent to SMS; the published-address exception covers the address published.
- **B2C default:** Consent.
- **Channel basis:** 特定電子メール法 Art 3 (SMS is a designated method).
- **Data basis:** APPI.
- **Legal rule:** Phone-number messaging to mobile devices (SMS, +メッセージ-type apps) is "電子メール" under the Act.
- **Required content (law):**
  - The Art 4 display items; in SMS, use a short notice with a URL for the full details (Rule Art 7(1)(3) allows the address and complaint contact on a linked page).
- **Recommended content (loop default, not law):**
  - Sender name first; a refusal number or URL.
- **Opt-out, legal timing:** Stop on refusal (Art 3(3)).
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** Same order-first regime as email; criminal exposure only after an order or for falsified sender data.
- **Status:** `opus_confirmed` — claims JP-01, JP-05, JP-06, JP-07, JP-08, JP-11. Sources: [JP-TOKUDEN-METHOD], [JP-MIC-SMS], [JP-TOKUDEN-ACT], [JP-TOKUDEN-RULE].

### Live human telephone calls

- **B2B default:** Live calls to businesses are outside the consumer telephone rules (特商法 Art 26). Identify yourself, state the purpose, stop on a no.
- **B2C default:** Before the pitch, give company name, caller name, product type and that it is a sales call (Art 16); never re-solicit after a refusal (Art 17).
- **Channel basis:** 特商法 Arts 16–17 for consumer telephone solicitation; no national DNC.
- **Data basis:** APPI.
- **Legal rule:** Refusal-based, not consent-based. Breaches lead to instructions and business-suspension orders.
- **Required content (law):**
  - Consumer calls: business name, caller name, product or service type, and that the call is a sales solicitation, before soliciting (Art 16).
- **Recommended content (loop default, not law):**
  - The same opening for B2B calls.
- **Opt-out, legal timing:** After a refusal, no further solicitation of that person (Art 17).
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** Consumer calls: CAA or METI-bureau instructions and business suspension orders (e.g. 3 months for a health-food seller, Jun 2025), plus director bans; buyers also get statutory cancellation rights (not re-read here). B2B: no 特商法 exposure.
- **Status:** `opus_confirmed` — claims JP-14, JP-15, JP-16. Sources: [JP-TOKUSHO-ACT], [JP-CAA-ORDER-2025].

### Automated / recorded / artificial-voice calls

- **B2B default:** Identification and refusal handling; consent recommended for automated or AI-voice calls.
- **B2C default:** Consent recommended; Arts 16–17 apply to any solicitation call.
- **Channel basis:** 特商法 telephone-solicitation rules; no robocall-specific statute found.
- **Data basis:** APPI.
- **Legal rule:** No Japanese rule read addresses recorded or AI voices directly.
- **Required content (law):**
  - Consumer calls: the Art 16 disclosures at the start.
- **Recommended content (loop default, not law):**
  - Say that the voice is automated.
- **Opt-out, legal timing:** Stop on refusal (Art 17).
- **Opt-out, loop handling:** Suppress further marketing on receipt, across the requested scope; same-day target. Keep a minimal suppression record, not the discarded lead profile.
- **If overridden:** As for live consumer calls; classification of automated calls is unconfirmed.
- **Status:** `opus_partly_unconfirmed` — claims JP-14, JP-15, JP-17. Sources: [JP-TOKUSHO-ACT].

## Lead lists: collection, scraping and enrichment

APPI has no lawful-basis test. Publish or notify the purpose of use when acquiring (Art 21); do not acquire by deception or unfair means (Art 20); giving personal data to a third party needs consent unless an exception or a PPC opt-out filing applies (Art 27); foreign transfers have their own rule (Art 28). Business contact data is personal information. The 2026 amendment (promulgated 17 Jul 2026, in force within two years) adds an administrative surcharge for profiting from illegal handling — watch it for list buying.

## Penalties and the real enforcement record

特定電子メール法: improvement order first (Art 7); breach of an order or falsified sender data: up to 1 year 拘禁刑 or ¥1m (Art 34), company up to ¥30m (Art 37). 特商法: email advertising without consent for mail-order sales, up to ¥1m (Art 72); telephone solicitation breaches: instructions, suspension orders. APPI: orders, and later the new surcharge.

| Case | Date | Amount | What it was | Status | Source |
|---|---|---|---|---|---|
| 株式会社MOTHER (MIC/CAA) | 13 Mar 2018 | Order (no fine) | Ads for a website sent without consent, no consent records, no sender/refusal display | 措置命令 | [JP-MIC-ORDER-MOTHER] |
| 株式会社ライトニング (MIC/CAA) | 20 Nov 2017 | Order (no fine) | Same pattern: no consent, no records, missing display | 措置命令 | [JP-MIC-ORDER-LIGHTNING] |
| Criminal application, 特定電子メール法 | 2006–2014 | Not stated per case | Art 5 sender falsification: 6 cases (2006–2013); breach of an Art 7 order: 2 cases (2014) | Aggregate (MIC-commissioned centre) | [JP-DEKYO-PENAL] |
| 有限会社マイケア (特商法 telephone solicitation) | 26 Jun 2025 | 3-month partial business suspension + director ban | Consumer health-food telephone sales | Administrative order | [JP-CAA-ORDER-2025] |

Calibration: Japanese enforcement is administrative and aimed at bulk spam and consumer harm. No published fine for a B2B email exists in the sources read. A missing case is not proof of no enforcement.

## Claim check (summary)

| ID | Claim | Status | Source |
|---|---|---|---|
| JP-01 | Art 3(1): no specified email except to (1) those who consented or asked, (2) those who notified their address as prescribed, (3) those in a trading relationship, (4) organisations or business individuals who publish their address as prescribed. | confirmed | JP-TOKUDEN-ACT |
| JP-02 | The address must be put on the internet by the organisation or business individual itself ("自己の"). A refusal statement next to it (e.g. "広告メールお断り") removes the exception. An address found by an enrichment tool, guessed from a pattern, or listed by a third party does not qualify. | confirmed | JP-TOKUDEN-RULE |
| JP-03 | A person who gave you their email address in writing, e.g. on a business card, is a statutory exception (Art 3(1)(2), Rule Art 2). Event and meeting contacts count. | added | JP-TOKUDEN-GL |
| JP-04 | The statute has no relevance test. The guideline explains the exception by B2B practice: ads for business products to businesses that publish their address. Keep relevance as the loop default. | confirmed | JP-TOKUDEN-GL |
| JP-05 | Art 3(2): senders relying on consent or a request must keep records proving it (Rule Art 4 sets the method). | confirmed | JP-TOKUDEN-ACT |
| JP-06 | Art 4 + Rule Arts 7–9: show (1) the responsible sender’s name, (2) an email address or URL for refusal, (3) a statement that refusal is possible, placed right before or after that address, (4) the sender’s postal address and (5) a phone, email or URL for complaints. Items (4) and (5) may sit on a linked page if the email shows where. | confirmed | JP-TOKUDEN-ACT, JP-TOKUDEN-RULE |
| JP-07 | Art 3(3): once a refusal is received, no further specified email against that wish. No grace period. | confirmed | JP-TOKUDEN-ACT |
| JP-08 | Current text: up to 1 year 拘禁刑 or ¥1m fine for falsifying sender information (Art 5) or breaching a MIC/CAA order (Art 7) (Art 34); the company can be fined up to ¥30m (Art 37). A plain consent breach is not a crime by itself: it leads first to an improvement order. | corrected | JP-TOKUDEN-ACT, JP-TOKUDEN-ACT |
| JP-09 | Orders (措置命令) target senders who send to many people at once and breach Arts 3 or 4, where needed to prevent disruption of email. Bulk sending is the trigger. | added | JP-TOKUDEN-ACT |
| JP-10 | Named orders exist: MIC/CAA ordered 株式会社ライトニング (Nov 2017) and 株式会社MOTHER (Mar 2018) for sending without consent, keeping no consent records and missing displays. Criminal use is rare: 6 Art 5 cases (2006–2013) and 2 order-breach cases (2014). No case-level fine amount was found. | corrected | JP-MIC-ORDER-MOTHER, JP-DEKYO-PENAL |
| JP-11 | The ordinance designates (1) any method using SMTP in whole or part and (2) phone-number messaging to portable devices. MIC says SMS and phone-number app messaging are covered. | confirmed | JP-TOKUDEN-METHOD, JP-MIC-SMS |
| JP-12 | Sharper: the Act covers only SMTP-based and phone-number-based messaging. A LinkedIn or other in-app message is neither, so on the statute’s face it is outside the Act. Open point: platforms often forward the message text by email (SMTP) — whether that makes the advertiser a "sender" is untested (lawyer item). | corrected | JP-TOKUDEN-ACT |
| JP-13 | Checked: for online sales (通信販売), email advertising needs the recipient’s prior approval (承諾), a consent record and an opt-out display (Art 12-3). Breach is directly a crime: up to ¥1m fine (Art 72). This sits on top of the Specified Email Act. | corrected | JP-TOKUSHO-ACT, JP-TOKUSHO-ACT |
| JP-14 | Art 26(1): the mail-order and telephone-solicitation rules do not apply where the buyer contracts for its business (営業のために若しくは営業として), nor to sales to persons outside Japan. | added | JP-TOKUSHO-ACT |
| JP-15 | Art 16: before soliciting, give the business name, the caller’s name, the product type, and that the call is a sales solicitation. Art 17: no further solicitation of someone who said they will not contract. Orders in practice: 3-month business suspensions. | confirmed | JP-TOKUSHO-ACT, JP-TOKUSHO-ACT |
| JP-16 | The telephone-solicitation rule is refusal-based (Art 17), not consent-based. No national do-not-call register appears in the Act. (An absence cannot be quoted; the structure confirms it.) | confirmed | JP-TOKUSHO-ACT |
| JP-17 | Still open. 電話勧誘販売 is defined by the seller placing a call and soliciting in it; no statute or guidance read addresses recorded or AI voices. Default stays: consent for automated consumer calls; identification and refusal handling for any call. | unconfirmed | JP-TOKUSHO-ACT |
| JP-18 | Notify or publish the purpose when acquiring (Art 21); no deceptive or unfair acquisition (Art 20); no third-party provision of personal data without consent unless an exception or the opt-out filing applies (Art 27). | confirmed | JP-APPI-ACT, JP-APPI-ACT |
| JP-19 | An APPI amendment passed on 10 Jul 2026 and was promulgated on 17 Jul 2026; most of it takes effect within two years by cabinet order (not yet). It adds an administrative surcharge (課徴金) where a business profits from illegal handling of personal information — relevant to buying or selling lead lists. | corrected | JP-APPI-2026, JP-APPI-2026-BILL |

## For a lawyer

- LinkedIn and similar platforms email the message text to the recipient (SMTP). Does that make the advertiser a "送信者" under the Act? (JP-12)
- Automated and AI-voice consumer calls under 特商法 (JP-17).
- Whether a SaaS sign-up sold online to consumers is 通信販売 for Art 12-3 (likely yes; confirm), and how the 2026 APPI surcharge will apply to bought lead lists (JP-13, JP-19).
- Official e-Gov text was under maintenance; re-read the three statutes on e-Gov when it is back (texts here are from a mirror).

## Open questions (no block; recheck)

- Re-read 特定電子メール法, its rule and 特商法 on e-Gov after the maintenance window.
- Track the cabinet order setting the 2026 APPI amendment start date.
- CAA 特商法 guide (no-trouble.caa.go.jp) was down (HTTP 503); recheck its B2B exclusion page.

## Sources and primary quotations

Quotes are verbatim from the saved evidence file (whitespace collapsed). Mirror sources are labelled.

### JP-TOKUDEN-ACT — 特定電子メールの送信の適正化等に関する法律 (Act on Regulation of Transmission of Specified Electronic Mail, Act No. 26 of 2002)

- URL: https://laws.e-gov.go.jp/law/414AC0100000026
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: mirror. Evidence copy (research record, outside this pack): JP-TOKUDEN-ACT.txt
- Note: e-Gov (official) returned a maintenance HTTP 403 during the check; text read from a mirror of the e-Gov text. The mirror shows the 2025 拘禁刑 wording, so it post-dates the June 2025 Penal Code change; exact consolidation date unverified. Mirror URL: https://elaws.jp/view/414AC0100000026

> 第三条 送信者は、次に掲げる者以外の者に対し、特定電子メールの送信をしてはならない。 一 あらかじめ、特定電子メールの送信をするように求める旨又は送信をすることに同意する旨を送信者又は送信委託者（電子メールの送信を委託した者（営利を目的とする団体及び営業を営む場合における個人に限る。）をいう。以下同じ。）に対し通知した者 二 前号に掲げるもののほか、総務省令・内閣府令で定めるところにより自己の電子メールアドレスを送信者又は送信委託者に対し通知した者 三 前二号に掲げるもののほか、当該特定電子メールを手段とする広告又は宣伝に係る営業を営む者と取引関係にある者 四 前三号に掲げるもののほか、総務省令・内閣府令で定めるところにより自己の電子メールアドレスを公表している団体又は個人（個人にあっては、営業を営む者に限る。）

> ２ 前項第一号の通知を受けた者は、総務省令・内閣府令で定めるところにより特定電子メールの送信をするように求めがあったこと又は送信をすることに同意があったことを証する記録を保存しなければならない。

> 第四条 送信者は、特定電子メールの送信に当たっては、総務省令・内閣府令で定めるところにより、その受信をする者が使用する通信端末機器の映像面に次に掲げる事項（前条第三項ただし書の総務省令・内閣府令で定める場合においては、第二号に掲げる事項を除く。）が正しく表示されるようにしなければならない。 一 当該送信者（当該電子メールの送信につき送信委託者がいる場合は、当該送信者又は当該送信委託者のうち当該送信に責任を有する者）の氏名又は名称 二 前条第三項本文の通知を受けるための電子メールアドレス又は電気通信設備を識別するための文字、番号、記号その他の符号であって総務省令・内閣府令で定めるもの 三 その他総務省令・内閣府令で定める事項

> ３ 送信者は、第一項各号に掲げる者から総務省令・内閣府令で定めるところにより特定電子メールの送信をしないように求める旨（一定の事項に係る特定電子メールの送信をしないように求める場合にあっては、その旨）の通知を受けたとき（送信委託者がその通知を受けたときを含む。）は、その通知に示された意思に反して、特定電子メールの送信をしてはならない。

> 第三十四条 次の各号のいずれかに該当する者は、一年以下の拘禁刑又は百万円以下の罰金に処する。 一 第五条の規定に違反した者 二 第七条の規定による命令（第三条第二項の規定による記録の保存に係るものを除く。）に違反した者

> 一 第三十四条 三千万円以下の罰金刑 二 …

### JP-TOKUDEN-RULE — 特定電子メールの送信の適正化等に関する法律施行規則 (MIC/Cabinet Office Ordinance No. 66 of 2002)

- URL: https://laws.e-gov.go.jp/law/414M60000008066
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: mirror. Evidence copy (research record, outside this pack): JP-TOKUDEN-RULE.txt
- Note: e-Gov (official) returned a maintenance HTTP 403 during the check; text read from a mirror of the e-Gov text. The mirror shows the 2025 拘禁刑 wording, so it post-dates the June 2025 Penal Code change; exact consolidation date unverified. Mirror URL: https://elaws.jp/view/414M60000008066

> 自己の電子メールアドレスの公表の方法は、自己の電子メールアドレスをインターネットを利用して公衆が閲覧することができる状態に置く方法とする。 ただし、自己の電子メールアドレスと併せて特定電子メールの送信をしないように求める旨の文言をインターネットを利用して公衆が閲覧することができる状態に置いたときは、この限りではない。

> 第九条 法第四条第三号の総務省令・内閣府令で定める事項は、次に掲げる事項とする。 ただし、第六条各号のいずれかに掲げる場合における特定電子メールの送信をする場合は、この限りでない。 一 第五条に定める方法により、特定電子メールの送信をしないように求める旨の通知を、法第四条第二号に掲げる電子メールアドレスをそのあて先とする電子メールの送信をすることにより又は前条に定める文字、番号、記号その他の符号を用いることにより行うことができる旨 二 法第四条第一号に規定する者の住所 三 …

### JP-TOKUDEN-GL — 特定電子メールの送信等に関するガイドライン (MIC/CAA, Aug 2011; the version linked from MIC today)

- URL: https://www.soumu.go.jp/main_sosiki/joho_tsusin/d_syohi/pdf/m_mail_081114_1.pdf
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): JP-TOKUDEN-GL.txt

> 名刺などの書面により自己の電子メールアドレスを通知した場合には、書 面を提供した側にも、書面の通知を受けた者から電子メールの送信が行われ ることについての一定の予測可能性があるものと考えられるため、施行規則 第２条第１項本文では、書面による通知が規定されている。

> 正当な営業活動の一環として事業者間（ＢｔｏＢ）で電子メールを送受信 する場合に、ウェブサイト等でメールアドレスを公開している事業者に対し てビジネス向けサービス・製品の広告・宣伝メールを送信することは実態的 に行われており、ビジネス慣習上も一定の範囲で認められているものと考え られる。また、そもそも電子メールアドレスの公表は、基本的に、電子メー …

### JP-MIC-ORDER-MOTHER — MIC/CAA press release: 措置命令 against 株式会社MOTHER (13 Mar 2018)

- URL: https://www.soumu.go.jp/menu_news/s-news/01kiban18_01000036.html
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): JP-MIC-ORDER-MOTHER.txt

> 株式会社MOTHERは、少なくとも平成29年10月8日から平成30年1月24日までの間、同社が運営するウェブサイト「MOON」に係る特定電子メールを送信するに当たり、受信者の同意を得ておらず、法第3条第1項の規定に違反する行為を行っていた事実が認められました。

### JP-DEKYO-PENAL — Japan Data Communications Association (MIC-commissioned anti-spam centre): 特定電子メール法の罰則の適用状況

- URL: https://www.dekyo.or.jp/soudan/contents/antispam/data/jp/JP_Penal_Provisions.pdf
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: delegated_regulator. Evidence copy (research record, outside this pack): JP-MIC-CRIMINAL.txt

> 特定電子メール法第5条（送信者情報偽装）違反 年 件数 2006 2 2007 1 2008 1 2011 1 2013 1 特定電子メール法第7条に基づく措置命令（行政処分）違反 年 件数 2014 2

### JP-TOKUDEN-METHOD — 特定電子メール法第二条第一号の通信方式を定める省令 (MIC Ordinance No. 85 of 2009)

- URL: https://laws.e-gov.go.jp/law/421M60000008085
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: mirror. Evidence copy (research record, outside this pack): JP-TOKUDEN-METHOD.txt
- Note: e-Gov unavailable; mirror (LawPlayer, 収録時点 2026-04-05) quoting e-Gov. The MIC-hosted PDF of the same text (JP-TOKUDEN-METHOD-OFFICIAL.txt) is the undated draft.

> 一 その全部又は一部においてシンプルメールトランスファープロトコルが用いられる通信方式 二 携帯して使用する通信端末機器に、電話番号を送受信のために用いて通信文その他の情報を伝達する通信方式

### JP-MIC-SMS — MIC: 迷惑メール対策 page (SMS and phone-number messaging are covered)

- URL: https://www.soumu.go.jp/main_sosiki/joho_tsusin/d_syohi/m_mail.html
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): JP-mic-fixed.txt

> ショートメッセージサービス（SMS）及び電話番号を用いてアプリケーションによりメッセージを送受信するサービス）も特定電子メール法に規定する電子メールの通信方式の一つとされています。よって、当該サービスにより広告・宣伝メールを送信する場合も …

### JP-TOKUSHO-ACT — 特定商取引に関する法律 (Act on Specified Commercial Transactions, Act No. 57 of 1976)

- URL: https://laws.e-gov.go.jp/law/351AC0000000057
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: mirror. Evidence copy (research record, outside this pack): JP-TOKUSHO-ACT.txt
- Note: e-Gov (official) returned a maintenance HTTP 403 during the check; text read from a mirror of the e-Gov text. The mirror shows the 2025 拘禁刑 wording, so it post-dates the June 2025 Penal Code change; exact consolidation date unverified. Mirror URL: https://elaws.jp/view/351AC0000000057

> 第十二条の三 販売業者又は役務提供事業者は、次に掲げる場合を除き、通信販売をする場合の商品若しくは特定権利の販売条件又は役務の提供条件について、その相手方となる者の承諾を得ないで電子メール広告（当該広告に係る通信文その他の情報を電磁的方法により送信し、これを当該広告の相手方の使用に係る電子計算機の映像面に表示されるようにする方法により行う広告をいう。以下同じ。）をしてはならない。

> 第七十二条 次の各号のいずれかに該当する場合には、当該違反行為をした者は、百万円以下の罰金に処する。 一 第十二条、第三十六条、第四十三条又は第五十四条の規定に違反して、著しく事実に相違する表示をし、又は実際のものよりも著しく優良であり、若しくは有利であると人を誤認させるような表示をしたとき。 二 第十二条の三第一項若しくは第二項

> 第二十六条 前三節の規定は、次の販売又は役務の提供で訪問販売、通信販売又は電話勧誘販売に該当するものについては、適用しない。 一 売買契約又は役務提供契約で、第二条第一項から第三項までに規定する売買契約若しくは役務提供契約の申込みをした者が営業のために若しくは営業として締結するもの又は購入者若しくは役務の提供を受ける者が営業のために若しくは営業として締結するものに係る販売又は役務の提供 二 本邦外に在る者に対する商品若しくは権利の販売又は役務の提供

> 第十六条 販売業者又は役務提供事業者は、電話勧誘販売をしようとするときは、その勧誘に先立つて、その相手方に対し、販売業者又は役務提供事業者の氏名又は名称及びその勧誘を行う者の氏名並びに商品若しくは権利又は役務の種類並びにその電話が売買契約又は役務提供契約の締結について勧誘をするためのものであることを告げなければならない。

> 第十七条 販売業者又は役務提供事業者は、電話勧誘販売に係る売買契約又は役務提供契約を締結しない旨の意思を表示した者に対し、当該売買契約又は当該役務提供契約の締結について勧誘をしてはならない。

> 「電話勧誘販売」とは、販売業者又は役務提供事業者が、電話をかけ又は政令で定める方法により電話をかけさせ、その電話において行う売買契約又は役務提供契約の締結についての勧誘（以下「電話勧誘行為」という。）により、その相手方（以下「電話勧誘顧客 …

### JP-APPI-ACT — 個人情報の保護に関する法律 (APPI, Act No. 57 of 2003)

- URL: https://laws.e-gov.go.jp/law/415AC0000000057
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: mirror. Evidence copy (research record, outside this pack): JP-APPI-ACT.txt
- Note: e-Gov (official) returned a maintenance HTTP 403 during the check; text read from a mirror of the e-Gov text. The mirror shows the 2025 拘禁刑 wording, so it post-dates the June 2025 Penal Code change; exact consolidation date unverified. Mirror URL: https://elaws.jp/view/415AC0000000057

> 第二十一条 個人情報取扱事業者は、個人情報を取得した場合は、あらかじめその利用目的を公表している場合を除き、速やかに、その利用目的を、本人に通知し、又は公表しなければならない。

> 第二十七条 個人情報取扱事業者は、次に掲げる場合を除くほか、あらかじめ本人の同意を得ないで、個人データを第三者に提供してはならない。 一 法令に基づく場合 二 …

### JP-APPI-2026 — PPC: promulgation of the 2026 APPI amendment (17 Jul 2026)

- URL: https://www.ppc.go.jp/news/press/2026/260717/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): JP-APPI-REVIEW-20260717.txt

> 令和８年７月10日の国会において可決、成立し、本日（令和８年７月17日）公布されました。 改正法は、一部を除き、公布日から起算して２年以内で政令で定める日から施行されます。

### JP-APPI-2026-BILL — PPC: cabinet decision on the APPI amendment bill (7 Apr 2026)

- URL: https://www.ppc.go.jp/news/press/2026/260407/
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): JP-APPI-REVIEW-20260407.txt

> 個人情報の違法な取扱い等によって財産上の利益を得た場合に個人情報保護委員会が課徴金納付を命ずる制度を設けるほか、統計等 …

### JP-CAA-ORDER-2025 — CAA / Hokkaido METI bureau: 業務停止命令 (3 months) against telephone-solicitation seller 有限会社マイケア (26 Jun 2025)

- URL: https://www.caa.go.jp/notice/assets/consumer_transaction_cms203_250626_01.pdf
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): JP-CAA-ORDER-20250626.txt

> 令和７年６月２６日 から同年９月２５日までの３か月間、電話勧誘販売に関する業務の一部（勧誘、申 込受付及び契約締結）を停止するよう命じました。 （注）同名の別会社と間違えないよう会社所在地なども確認してください。 ○ …

### JP-MIC-ORDER-LIGHTNING — MIC/CAA press release: 措置命令 against 株式会社ライトニング (20 Nov 2017)

- URL: https://www.soumu.go.jp/menu_news/s-news/01kiban18_01000032.html
- Read: 2026-10-22 JST (2026-10-21 UTC). Kind: regulator. Evidence copy (research record, outside this pack): JP-MIC-ORDER-LIGHTNING.txt

> 株式会社ライトニングは、少なくとも平成29年7月6日から同年10月10日までの間、同社が運営するウェブサイト「アプリ」及び「チャット」に係る特定電子メールを送信するに当たり、受信者の同意を得ておらず、法第3条第1項の規定に違反する行為を行っていた事実が認められました。 …


[JP-TOKUDEN-ACT]: https://laws.e-gov.go.jp/law/414AC0100000026 "Read 2026-10-22 JST (2026-10-21 UTC)"
[JP-TOKUDEN-RULE]: https://laws.e-gov.go.jp/law/414M60000008066 "Read 2026-10-22 JST (2026-10-21 UTC)"
[JP-TOKUDEN-GL]: https://www.soumu.go.jp/main_sosiki/joho_tsusin/d_syohi/pdf/m_mail_081114_1.pdf "Read 2026-10-22 JST (2026-10-21 UTC)"
[JP-MIC-ORDER-MOTHER]: https://www.soumu.go.jp/menu_news/s-news/01kiban18_01000036.html "Read 2026-10-22 JST (2026-10-21 UTC)"
[JP-DEKYO-PENAL]: https://www.dekyo.or.jp/soudan/contents/antispam/data/jp/JP_Penal_Provisions.pdf "Read 2026-10-22 JST (2026-10-21 UTC)"
[JP-TOKUDEN-METHOD]: https://laws.e-gov.go.jp/law/421M60000008085 "Read 2026-10-22 JST (2026-10-21 UTC)"
[JP-MIC-SMS]: https://www.soumu.go.jp/main_sosiki/joho_tsusin/d_syohi/m_mail.html "Read 2026-10-22 JST (2026-10-21 UTC)"
[JP-TOKUSHO-ACT]: https://laws.e-gov.go.jp/law/351AC0000000057 "Read 2026-10-22 JST (2026-10-21 UTC)"
[JP-APPI-ACT]: https://laws.e-gov.go.jp/law/415AC0000000057 "Read 2026-10-22 JST (2026-10-21 UTC)"
[JP-APPI-2026]: https://www.ppc.go.jp/news/press/2026/260717/ "Read 2026-10-22 JST (2026-10-21 UTC)"
[JP-APPI-2026-BILL]: https://www.ppc.go.jp/news/press/2026/260407/ "Read 2026-10-22 JST (2026-10-21 UTC)"
[JP-CAA-ORDER-2025]: https://www.caa.go.jp/notice/assets/consumer_transaction_cms203_250626_01.pdf "Read 2026-10-22 JST (2026-10-21 UTC)"
[JP-MIC-ORDER-LIGHTNING]: https://www.soumu.go.jp/menu_news/s-news/01kiban18_01000032.html "Read 2026-10-22 JST (2026-10-21 UTC)"
