---
name: connect-a-seat
description: Walk a person through connecting their own Claude or ChatGPT subscription to their vault as a seat, without a terminal, without a token ever leaving the vendor's own tool.
version: 0.1.0
license: Apache-2.0
metadata:
  author: oneiron-dev
  contact: contact@oneiron.dev
  terms: your login, your plan, the vendor's terms apply
  requires: the engine's seat row and the claude-seat or codex-seat pack
---

# Connect a seat

A seat is one vendor tool, signed in by one person, running on one machine of their vault. This skill guides the person through connecting one. It renders three cards through the vault's generated UI. It never asks for a password or a token, and it never stores the login code.

Say the terms line first, on the first card, before anything else:

> This uses your own login and your own plan. The vendor's terms apply. Oneiron never sees your token.

## Card 1: which seat

Offer the two seats the hub carries: Claude Code (Anthropic) and Codex (OpenAI). Show what each will be allowed to do, in the words the pack manifest gives you under `grants`, under the heading "Asks for permission". The person's tap on this card is their word: it is recorded by reference on the receipt, and it is the standing grant for that seat. Nothing installs before the tap.

## Card 2: sign in

The pack's install step runs in the vault's sandbox and installs the vendor's own tool from the vendor's own source. Then the vendor's own login flow starts inside the seat process. The card shows only what the person has to do:

- Claude Code: tap Open, sign in on Anthropic's page, copy the code Anthropic shows, paste it here. The paste goes once to the seat process's input and is never kept.
- Codex: tap Open, enter the code shown on the card on OpenAI's page, approve. Nothing is pasted back.

If the person prefers a terminal, say so: the same login works by running the vendor's login command on the machine that holds the seat. Never offer to take a token or a credential file from them.

## Card 3: done

Show the seat card: the plan, the window with its reset time, the session state. Say the one fact people miss: headless use meters heavier than typing into the vendor's terminal. Give the measured number the pack manifest carries and the source. Then say what the person can do next: assign the seat work, or archive it in one tap.

## Rules

- The person's tap is their word. Never proceed without it.
- Never read, copy or move the vendor's login store. The seat process owns it.
- Never present the seat as the vendor's own tool to anyone. The seat says it is Oneiron wherever a vendor asks harnesses to identify themselves.
- If a vendor changes its terms, stop offering that seat and say why. The pack is archived, nothing else changes.
- Keep every card in plain words. No vendor jargon, no plan tiers a normal person has not heard of.
