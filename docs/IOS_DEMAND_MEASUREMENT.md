# LIE_CRANE V2 — 30-day Android vs iOS demand check

Start baseline: 2026-10-19. Goal: identify demand **among actual crane-service prospects**, not global smartphone market share. No iOS app, SDK, backend, or licensing changes are part of this experiment.

## Live collection routes

- Public GitHub issue form: [iOS interest](https://github.com/liecranesupport-ai/LIE-CRANE-V2/issues/new?template=ios_interest.yml). Count **submitted issues** with title prefix `[iOS interest]`; clicks alone are not qualified leads. GitHub sign-in is required.
- Official [Facebook page](https://www.facebook.com/profile.php?id=61595205793839): the /ios/ page offers a copyable structured message. Manually tally **messages actually received** using the same fields, never mere link clicks.
- Android visitors retain the original download and release links.

## What can and cannot be measured today

A privacy-first Cloudflare Web Analytics loader has been prepared, but analytics will not collect visits until an owner-generated Cloudflare site token is installed (see [Analytics setup](ANALYTICS_SETUP.md)). This static GitHub Pages site has no anonymous form backend. It **cannot yet measure all site visitors by operating system**, unique devices, impressions, click-through rates, or Android-vs-iOS traffic. GitHub Issues and Facebook messages are self-selected samples, not representative of all searchers. Some prospects will have neither account.

If the project owner later enables a privacy-respecting analytics service, add the verified site ID and an appropriate privacy notice before collecting website analytics. Track page views segmented by OS (Android/iOS/Other) and button events (`android_download`, `ios_interest`) without uploading names, emails, equipment serial numbers, access codes, or account credentials. Never add an unverified analytics ID or secret to the repository.

## Weekly tally (manual)

| Week | Unique iOS GitHub issues | Unique iOS Facebook messages | iOS: would pay yes/maybe | Android/both users requesting iOS | Notes |
|---|---:|---:|---:|---:|---|
| 1 | — | — | — | — | |
| 2 | — | — | — | — | |
| 3 | — | — | — | — | |
| 4 | — | — | — | — | |

Deduplicate repeat messages where clearly identifiable; do not copy personal details into the public tally. Exclude spam and non-crane-service requests. Separate definite intent from `Maybe`. Report total qualified responses, country mix and professional roles. Use `0` only when verified; `—` means not yet measured.

## Decision after 30 days

Compare (1) qualified iOS requests, (2) willingness to pay, (3) support burden/complexity, and (4) estimated engineering effort to adapt device attestation and licensing. Small samples are directional only: **do not claim Android or iOS predominance among Daily Code searchers** without visitor or search-platform data. Do not touch production Android, Supabase functions, credentials, or the license backend without explicit owner review and permission.
