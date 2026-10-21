# Gmail and Yahoo: the receiving side

Checked 2026-10-21. These are the rules a receiving provider applies to mail that reaches its users. They are not law and not a sending service's contract. An override changes the loop's default, not what Gmail or Yahoo accepts.

## Gmail

Scope: mail to personal Gmail accounts. The rules apply whatever the sender uses: Workspace, Microsoft, an ESP. They do not apply to inbound Google Workspace accounts.

| sender class | published requirements | what happens if unmet |
|---|---|---|
| all senders | SPF or DKIM; valid forward and reverse DNS; TLS; RFC 5322 formatting; spam rate under 0.3%; no Gmail From impersonation | temporary or permanent SMTP failure, rate limits or spam placement |
| bulk senders | SPF and DKIM; DMARC at least `p=none`; From aligned with passing SPF or DKIM | authentication failures bring failures or spam placement; missing DMARC removes mitigation eligibility |
| bulk marketing, promotional or subscribed mail | RFC 8058 one-click headers and a visible body unsubscribe link; honour within 48 hours | Google does not automatically reject or junk for the missing header alone; complaints rise and mitigation is unavailable |

**Bulk** means close to 5,000 messages or more in 24 hours to personal Gmail accounts, counted across the primary domain and its subdomains. A sender that reaches it once stays bulk. Splitting across mailboxes or subdomains does not reset it. The guidelines sometimes say "more than 5,000"; the FAQ's "close to" is the reading to use. Enforcement has been phased since February 2024 and increased from November 2025, including temporary and permanent rejections.

### The complaint lines

| rate | Google's words | meaning |
|---|---|---|
| under 0.1% | the recommended target | not a guarantee of inbox placement |
| above 0.1%, under 0.3% | already a negative effect on bulk-sender inbox delivery; the effect is graduated | not a cliff |
| 0.3% or higher | avoid ever reaching it | worse delivery |
| above 0.3% | ineligible for mitigation until 7 consecutive days below 0.3% | a support condition, not an automatic domain ban |

The denominator matters. Google counts mail that reached an engaged recipient's inbox and was then marked spam, for DKIM-authenticated Gmail traffic. Mail that landed in spam does not enter that count. A low or zero rate can sit beside bad reputation. Postmaster data runs about 24 hours behind, in UTC, and is absent at low volume. Absent data is unknown, not zero. An ESP's complaints divided by all accepted mail is a different number.

**Loop default:** read the provider's rate daily while sending. Review at 0.1% on the provider's own rate. Review any credible single complaint at small volume. This is an early-warning choice, not Google's suspension rule.

## Yahoo

Scope: consumer mail hosted by Yahoo, AOL included. Yahoo Japan is separate.

Yahoo says bulk is "a significant volume of mail" and "We will not specify a volume threshold." Do not copy Gmail's 5,000 into Yahoo.

| sender class | published requirements | what happens if unmet |
|---|---|---|
| all | SPF or DKIM; spam under 0.3%; valid forward and reverse DNS; RFC 5321 and 5322 | spam folder, deferral or rejection |
| bulk | SPF and DKIM; a DMARC record at least `p=none` that passes; relaxed alignment accepted | spam placement or rejection |
| bulk marketing or subscribed | a working one-click List-Unsubscribe (HTTPS POST highly recommended, `mailto:` accepted); a visible body link; honour within 2 days | rejection or spam placement, and more complaints |

Yahoo publishes the 0.3% line only. The loop's 0.1% review line is its own choice. Yahoo counts complaints against inbox-delivered mail. Enrol the signing DKIM domain in Yahoo's Complaint Feedback Loop where available; it does not expose every complaint.

## The headers, for bulk marketing

```text
List-Unsubscribe: <https://sender.example/unsubscribe/opaque-token>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

DKIM must cover both headers. The endpoint processes the POST without login, cookies, a second confirmation or a redirect. A footer link or `mailto:` alone does not meet Gmail's requirement. `.example` is a documentation placeholder.

A one-to-one message is not bulk and does not need the header. It still carries a plain opt-out line. The sources hold no evidence that the header itself harms delivery; one vendor offers it as a feature.

## DMARC policy

`p=none` with reports meets the bulk requirements. Tighten to quarantine and reject after inventorying legitimate senders and reading the reports. No fixed 4-to-6-week schedule is required. Leaving `p=none` forever gives weaker spoofing protection; Yahoo recommends enforcement when spoofing is a problem.

## If you override

Above the complaint lines: spam placement, throttling, and at the top line the loss of mitigation. Without authentication: failures or spam placement at any volume. Without the header on bulk marketing: more complaints and no mitigation. The 5,000 tier is not a safe zone; ordinary filtering runs below it.

Sources: `../sources.md` (G1, G2, G5, Y1, Y2, RFC1, I1).
