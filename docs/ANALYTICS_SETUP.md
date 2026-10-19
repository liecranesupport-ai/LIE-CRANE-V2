# Website analytics — LIE_CRANE V2

## Current activation state

**Prepared, not collecting visits until the owner provides a real Cloudflare Web Analytics site token.** The public site includes `assets/analytics-config.js` and `assets/analytics-loader.js` on the English homepage, Arabic homepage, and iPhone survey page. The loader makes **no analytics request** while the token is empty. The Android app, APK, Supabase licensing backend, authentication and devices are unchanged.

## Why Cloudflare Web Analytics?

- Free and privacy-first; supports **Operating system** (Android, iOS, other), mobile/desktop device category, page path, country and referrer.
- Can be added to GitHub Pages via a snippet without moving hosting, changing DNS, or configuring a Cloudflare proxy.
- No Google/Firebase app changes, no user identity tracking.
- Cloudflare Web Analytics does **not** support custom click events at this time. It can measure visits to the iOS survey page by OS; genuine intent is recorded separately through submitted public GitHub survey issues and received Facebook messages.

Sources:
- https://developers.cloudflare.com/web-analytics/about/
- https://developers.cloudflare.com/web-analytics/data-metrics/dimensions/
- https://developers.cloudflare.com/web-analytics/get-started/
- https://developers.cloudflare.com/web-analytics/faq/

## One-time activation — needs the site's owner

1. Sign in at https://dash.cloudflare.com/ (sign up if necessary).
2. Open **Web Analytics** and select **Add a site**.
3. Enter the hostname **`liecranesupport-ai.github.io`**. *Do not add* `https://` or `/LIE-CRANE-V2/` (that part is a path, not a hostname).
4. Choose the hostname and complete creation. Copy the owner-generated Web Analytics beacon **site token** from **Manage site**.
5. Supply **only the site token**, not any Cloudflare password, API token, session cookie or other secret. Insert it as the string in `docs/assets/analytics-config.js` and publish GitHub Pages. The token will be public in page source by design, unlike an API credential.
6. Verify in Cloudflare dashboard by opening the English, Arabic and iOS site pages in a browser and checking **Web Analytics → Operating system** once data is available. Exclude bots when analyzing real users.

If the service issues a token in another format, use the provider's **official snippet** on the three pages rather than making up a token. Do not paste an unrelated token belonging to another website.

## Experiment metrics

| Metric | How to measure | Limitation |
|---|---|---|
| Android vs iOS site visitors | Cloudflare Web Analytics, Operating system | Starts only after a valid site token is installed; not all Daily Code searchers are visitors |
| Visits to iPhone survey | Filter page path `/LIE-CRANE-V2/ios/` and Operating system | Page visits ≠ submitted interest |
| Submitted iOS requests | Public GitHub issues using `[iOS interest]` | Github sign-in required |
| Private iOS requests | Count only messages actually received through official Facebook page | Requires manual deduplication |
| Android APK download clicks | Not measured by Cloudflare (no custom events). GitHub release asset download count is a separate proxy, not website click count | Cannot break APK downloads down by visitor OS with current setup |

**Privacy:** No personal contact information, crane serials, codes or account identifiers should be recorded in Web Analytics. Inform visitors that aggregated, privacy-first page analytics may be collected after activation. Check applicable privacy and consent requirements before enabling any third-party service. Cloudflare describes Web Analytics as not collecting personal data.

## What not to claim

The presence of the optional loader is **not activation**. Do not announce that tracking is live without confirming token installation and analytics showing a received real browser page view.
