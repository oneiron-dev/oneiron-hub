# iCloud Mail: the receiving side

Checked 2026-10-21. Scope: icloud.com, me.com and mac.com. Apple's postmaster page is dated 2025-02-25. An override changes the loop's default, not what Apple accepts.

## What Apple requires of bulk mail

Apple's page says: "All requirements must be met in order to send a bulk email. If not, the email will be rejected."

The requirements, as listed on the page:

- bulk mail only to recipients who explicitly subscribed;
- no purchased, rented or appended lists;
- an immediate unsubscribe link;
- SPF and DKIM, and a published DMARC policy;
- valid reverse DNS; RFC 5321 and 5322;
- consistent sending IPs and domains, and a recognisable From identity;
- handling of temporary and permanent errors and bounces;
- removal of inactive subscribers; no reactivation of suppressed recipients;
- ARC on forwarded mail.

Apple recommends separate marketing and transactional streams.

Apple publishes no daily number and no complaint percentage. Do not invent either. Apple offers no bulk allowlist and no complaint feedback loop. Missing complaint data from Apple is not a clean result.

The subscription rule is stricter than the law in several B2B countries. It is Apple's policy, enforced by Apple's filtering: reputation, content and user feedback.

## Mail Privacy Protection

Apple Mail can fetch remote content "when you receive a message (instead of when you view it)". A tracking pixel therefore fires without a human read, on any mailbox the Mail app reads, not only iCloud. This is why the loop keeps open tracking off: `../practice/copy.md`.

## Loop default

Consent-based bulk traffic only to iCloud. Keep cold prospecting out of the bulk route to these domains. A genuine individual message gets no numeric guarantee and no exemption from filtering.

## If you override

Cold bulk to iCloud conflicts with the published policy. Expect filtering or rejection. The source gives no suspension probability and no monetary penalty.

Sources: `../sources.md` (A1, A2).
