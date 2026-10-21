# Domains, mailboxes and rotation

Checked 2026-10-21. Every value here is a default the owner can override; the override line records who and why.

## Loop default

- Automated campaigns go out from a brand-related secondary domain, not the domain that carries billing, support, client mail and invoices.
- Two mailboxes per sending domain to start.
- A stable sender per prospect. Follow-ups come from the mailbox that opened the thread.
- Transactional and support streams stay separate from campaign streams.
- Rotate load across healthy senders. Never rotate identity to step around complaints or suppressions.

This is a blast-radius arrangement, not a receiver mandate and not a safe number. Vendor practice runs from one to three or more mailboxes a domain.

## What the providers say

- Microsoft recommends keeping bulk off the primary domain and using subdomains for marketing and transactional streams. That is primary-source support for separation.
- Gmail counts a subdomain with its parent for bulk status. A subdomain is not isolation from the parent's bulk classification.
- A secondary domain inside the same Workspace account or Microsoft tenant does not isolate account or tenant enforcement.
- SendGrid names spreading traffic across domains or IPs to evade reputation controls as snowshoeing, and prohibits it.

"Never send from your main domain" is vendor folklore as a law. The real question is what else lives on the domain.

## When reputation drops

Diagnose first: list quality, authentication, content, the provider's own signals. Moving the same unwanted campaign to fresh domains repeats the cause and adds cost. The pack's sender-health skill cuts volume near 2% bounces and benches a sender at 0.3% complaints; a benched sender rests, then re-ramps.

## If you override

Sending founder correspondence from the main domain at a handful a day is reasonable; the exposure is the concentration of the business's mail reputation in one place. More domains add cost, DNS work and split monitoring; they do not erase brand, tenant or IP correlation. Buying pre-aged domains supplies no verified history: `warm-up.md`.

Sources: `../sources.md` (M3, G2, G4, M1, SG1, C1, W2, P1, P10, SL1).
