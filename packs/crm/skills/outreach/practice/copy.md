# Format, tracking, links and attachments

Checked 2026-10-21. This page covers the shape of a message. The words belong to the pack's voice floor and the campaign's voice guide. Every value here is a default the owner can override; the override line records who and why. The record is `sending.defaults.message_format_and_tracking` in `../defaults.json`.

## Loop default

- Short plain text, or minimal HTML that looks like ordinary correspondence.
- One relevant question or ask.
- No decorative images. No attachment on touch one.
- Open tracking off. Click tracking off.
- No promotional link in the first ask unless it adds clear value. A case study or a scheduling link can follow interest.
- Keep every required element: the opt-out, the sender identity, the privacy link where the law needs it. "No links" is never a reason to drop them.
- No fake `Re:` or `Fwd:`, no hidden text, no claim of an existing conversation.

## Why tracking is off

Apple Mail can fetch remote content when a message arrives, so a pixel fires without a human read, on any mailbox the Mail app reads. Google says it does not track opens and cannot verify third-party open rates. Clicks include security scanners. A tracked click is not buyer interest. Measure replies, positive replies, held meetings and economics instead: `measurement.md`.

## HTML is not spam

Google accepts standards-compliant HTML. Plain text does not bypass filtering. Google warns against deceptive subjects, headers and content. Instantly offers text-only modes; Clay defaults to text with tracking off. Those are product choices, not proof that a pixel causes junk placement.

## If you override

HTML, images and links can explain a visual offer and record interaction. They add rendering and URL-reputation variables and noisy metrics. Use branded HTTPS links, not shorteners or hidden destinations. A tracking subdomain does not make a bad destination safe.

Sources: `../sources.md` (G1, A2, I1, C1, C2, SG1, P2, P6).
