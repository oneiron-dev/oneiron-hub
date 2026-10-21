# Send windows and time zones

Checked 2026-10-21. Every value here is a default the owner can override; the override line records who and why. The record is `sending.defaults.send_windows` in `../defaults.json`.

## Loop default

Monday to Friday, 09:00 to 17:00 in the recipient's work-local time, with an IANA zone and daylight-saving rules. Spread messages through the window. Use the recipient's location where known, the company's head office as a labelled proxy, otherwise the campaign's recorded zone. Never treat the sending machine's clock as the prospect's time.

The eight-hour window is a convenience choice, not a law. Live calls have their own legal windows in some countries: `../channels/calls.md`.

## What the studies say

Belkins (2025 data, updated June 2026) finds Wednesday and Thursday, 08:00 to 12:00, strongest. Instantly finds Tuesday and Wednesday strongest. Both are observational averages with client, industry and volume mixed in. Neither is permission to burst every mailbox at 09:00 on Wednesday. Test morning first touches and midweek separately if the list is large enough.

## If you override

Niche audiences read at other hours: hospitality, shift workers, founders. A wider window reaches them; expect different engagement and slower replies. A send hour implies nothing about account safety either way.

Sources: `../sources.md` (I1, W2, B1, B3).
