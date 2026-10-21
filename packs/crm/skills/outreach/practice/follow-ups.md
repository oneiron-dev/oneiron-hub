# Cadence, replies, out-of-office and suppression

Checked 2026-10-21. Every value here is a default the owner can override; the override line records who and why. The records are `sending.defaults.follow_up_cadence` and `optout_and_reply_handling` in `../defaults.json`.

## Loop default: the email cadence

Touch one on day 0. Follow-ups on calendar days 4 and 10. Three campaign emails per non-responder at most. A follow-up that falls outside the send window rolls to the next eligible window in the recipient's zone. Every touch adds something.

This is a three-touch starting plan, not a measured optimum. Instantly recommends 4 to 7 touches. Forum playbooks often run 2 to 4. Instantly's 2026 report says 58% of replies came on step one and 42% later; that is not proof that more steps add 42%.

The pack's `outbound-and-follow-up` skill runs 5 to 8 touches across channels for a founder sequence. The two agree: three automated emails, with LinkedIn notes and calls making up the rest.

## Replies

- Any human reply stops the automated sequence. Route it to the owner or operator.
- Code it: positive, negative, opt-out, referral, out-of-office. Each goes a different way.
- Review positive replies the same business day. No "five minutes doubles conversion" claim is established.
- Send from a monitored mailbox that receives replies. Keep the conversation with the same sender.

## Out-of-office

An out-of-office is not an objection and not interest. Pause the member until the stated return date, then review. No return date: a human decides when to resume. Clay and Instantly handle OOO differently in their exports; normalise before comparing.

## Opt-outs and suppression

- Process an opt-out at once. Same-day is the target. Statutory outer deadlines (10 business days in the US, two days at Yahoo, 48 hours at Gmail) are ceilings, not targets.
- Share suppression across campaigns, mailboxes, domains and imports in the project. A re-import or a "quarterly recycle" never resurrects a suppressed person.
- Keep the minimal suppression row. Deleting it is how the person gets re-imported.
- A hard bounce writes a bounce claim; the bounce writes a suppression claim.

## If you override

Fewer touches miss late interest. More touches use capacity and add annoyance and complaints; later replies are more often negative. Continuing after an opt-out changes nothing outside the loop. The provider's 48-hour or two-day terms still apply. The legal objection duty still applies. The exposure is complaints, loss of provider access and the law file's penalty. A human reply is never permission to continue the automation.

Sources: `../sources.md` (B3, P3, P12, I1, C1, G2, Y1, A1, PM1, RFC1).
