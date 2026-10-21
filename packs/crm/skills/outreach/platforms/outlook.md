# Outlook.com: the receiving side

Checked 2026-10-21. Scope: consumer Outlook.com, Hotmail, Live and MSN recipients. Microsoft 365 outbound quotas are a different topic: `m365.md`. An override changes the loop's default, not what Microsoft accepts.

## The policy, in force since 5 May 2025

High-volume senders must pass SPF and DKIM, publish DMARC at least `p=none`, and pass DMARC through alignment of From with SPF or DKIM. The policy page says "more than 5,000 a day" from the same From domain. The current NDR page says "5,000 or more". Take the stricter reading. Do not copy Gmail's permanent-bulk or subdomain rule into Microsoft; no Microsoft page says it.

The policy describes junk placement first, then possible rejection if unresolved. The diagnostic page documents a real rejection:

```text
550 5.7.515 Access denied, sending domain <domain> does not meet the required authentication level.
```

So the authentication rule is live, not announced. It does not mean every non-compliant message gets this result.

## Other published requirements

Valid reverse DNS. Standards-compliant mail. A clearly documented, easy unsubscribe. No repeated retries of a permanently rejected message. No insecure relays. No namespace mining: verifying addresses against Microsoft's inbound servers without sending is prohibited. A verifier vendor's product is not a licence to probe Outlook.

Monitoring runs through SNDS and JMRP. On a shared ESP IP the ESP may own that enrolment. Microsoft publishes no Gmail-style 0.1% or 0.3% complaint cutoff here.

## Loop default

SPF, DKIM and aligned DMARC and an easy opt-out at any campaign volume. Read rejection codes and the SNDS and JMRP data that is available. The 0.1% review line is the loop's own choice.

## If you override

Skipping authentication means junking, throttling or the 5.7.515 rejection. Staying under 5,000 does not avoid ordinary spam filtering.

Sources: `../sources.md` (O1, O3).
