# Publish the LIE_CRANE V2 search landing page

**Prepared:** 19 October 2026. Files are committed, but **GitHub Pages must be enabled** by the repository owner before the public website URL is live.

> **Update (19 October 2026):** The owner has confirmed the site opens, and GitHub Pages reports a successful deployment. English and Arabic landing pages, a two-language sitemap, and a factual llms.txt file are now in the /docs publishing directory. The remaining account-level work is the About description, Topics and optional verified Search Console/Bing registration.

## Step 1 — Enable the page (repository owner action)

Open **https://github.com/liecranesupport-ai/LIE-CRANE-V2/settings/pages** and set:

- **Build and deployment → Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/docs`
- Click **Save**.

This uses GitHub's built-in publishing flow; no custom GitHub Actions workflow has been added to the repository.

The expected address **after Pages confirms publication** is:

https://liecranesupport-ai.github.io/LIE-CRANE-V2/

If it isn't available immediately, check the Pages deployment status under Settings → Pages. GitHub documentation says publication can take several minutes. **Do not advertise the page as live until it loads.**

## Step 2 — Fix the visible GitHub About metadata

Repository About still has the older description and **0 Topics** (verified 19 October 2026).

On the repository home, click **About → gear icon**.

**Description** (paste):
`LIE_CRANE V2: Independent Android Liebherr Daily Code Calculator with previous-date selection, trial access and in-app license support.`

**Website** (after Pages works):
`https://liecranesupport-ai.github.io/LIE-CRANE-V2/`

**Topics** (add individually, where accepted):
`liebherr`, `daily-code`, `liccon`, `android-app`, `mobile-crane`, `crane-maintenance`, `heavy-equipment`, `crane-calculator`.

Click **Save changes**. GitHub's repository connector here can edit text files, but **cannot edit repository About, Topics or GitHub Pages settings**, so these two owner-level settings require a quick manual change.

## Step 3 — Search indexing and AI discovery

1. After the website loads, use **Google Search Console** URL-prefix ownership for `https://liecranesupport-ai.github.io/LIE-CRANE-V2/` if Google accepts the chosen verification method. Google may require an HTML or meta verification token; apply it to the site files only after receiving it from your own Search Console account.
2. Provide the sitemap at `https://liecranesupport-ai.github.io/LIE-CRANE-V2/sitemap.xml` when Search Console accepts this property.
3. Use **Bing Webmaster Tools** to set up discovery for the new project site where eligible.
4. Publish one real video of historical-date selection and link to the official site/Release; create helpful articles for professional audiences only where promotion is permitted.
5. Evaluate searches for `"LIE_CRANE V2"`, `"Liebherr daily code previous date"`, and `"Liebherr daily code calculator Android"` over the next 2–4 weeks; note whether a link is actually indexed/cited. None of this guarantees organic ranking or an AI recommendation.
6. Review GitHub Release asset download counts and real app trial activations **separately**; downloads aren't unique users.

**Crawler caveat:** In a GitHub Pages **project site**, `robots.txt` at `/LIE-CRANE-V2/robots.txt` is **not** the site's domain-root robots file. This repo intentionally does not supply a misleading project-level robots.txt. Crawling depends on the host-level policy and the site's public accessibility.

## Official links

- Repository: https://github.com/liecranesupport-ai/LIE-CRANE-V2
- APK Release: https://github.com/liecranesupport-ai/LIE-CRANE-V2/releases/tag/LIECRANEV2
- Product SEO page source: https://github.com/liecranesupport-ai/LIE-CRANE-V2/blob/main/docs/index.html
- AI discovery document: https://github.com/liecranesupport-ai/LIE-CRANE-V2/blob/main/docs/AI_DISCOVERY.md
- Sitemap source: https://github.com/liecranesupport-ai/LIE-CRANE-V2/blob/main/docs/sitemap.xml

> This is an independent Android engineering utility for authorized personnel. Not affiliated with or endorsed by Liebherr/LICCON. Device attestation, trial and real-device activation should be verified before broad promotion.

---

## Earlier GitHub discoverability notes

# LIE_CRANE V2 — GitHub Discoverability & Google Search Setup

**Status (17 October 2026):** Public release V2.2.4 is live, and the README plus dedicated daily-code guide and FAQ are published. GitHub repository **About description and Topics are not yet optimized**; they must be edited in GitHub's graphical interface because this connector does not offer a repository-metadata write operation.

## A. IMPORTANT: Update Repository About (one minute)

Open the [LIE_CRANE V2 repository](https://github.com/liecranesupport-ai/LIE-CRANE-V2) while signed in as the owner.

On the **right sidebar**, click the **gear icon** next to **About**.

### Description — copy this exact text

```text
Liebherr Daily Code Calculator for Android with historical date selection. Crane serial input, Level 1–3 results, trial and in-app license support. Independent app.
```

### Website

```text
https://github.com/liecranesupport-ai/LIE-CRANE-V2/releases/latest
```

### Topics — add these individually

```text
liebherr
daily-code
daily-code-calculator
liccon
crane-calculator
mobile-crane
crane-maintenance
android-app
heavy-equipment
crane-service
```

Then click **Save changes**.

**Why it matters:** GitHub Topics are an official project classification and discovery feature. Google's search indexing of a new repository is a separate process that cannot be guaranteed by adding topics or changing the README. The repository was created on 17 October 2026.

## B. Improve the public GitHub Release description

Open the [published V2.2.4 release](https://github.com/liecranesupport-ai/LIE-CRANE-V2/releases/tag/LIECRANEV2). Use its edit control (often a pencil icon or **... → Edit**).

Replace the one-line Release body with the contents of:
[docs/RELEASE_BODY_v2.2.4.md](RELEASE_BODY_v2.2.4.md)

Do **not** change the tag `LIECRANEV2` or delete the APK. The existing release's published SHA-256 matches the supplied upload.

## C. Google indexing — expected behavior

Google may not show a brand-new GitHub repository for days or weeks. Indexing is not guaranteed. Users searching for the broad phrase *daily code liebherr* are also competing with older, stronger pages.

**Do not attempt to submit the `github.com` repository to Search Console as if you own the github.com domain.** Requesting indexing via Search Console normally requires site/property ownership verification, which you do not have for GitHub.com.

For organic discovery:
1. Make About/Topics descriptive and factual (section A).
2. Share the official URL in a substantive, *permitted* LinkedIn post with a genuine app demonstration; avoid bulk links/spam.
3. Add a real product video showing the historical-date feature, with the official URL in its caption.
4. Participate respectfully in relevant crane engineering communities; obey group rules and offer useful information before any link.
5. Recheck visibility using exact-name search first, e.g. `"LIE_CRANE V2" "daily code"`, then broaden to `Liebherr daily code calculator Android`.
6. Track qualified APK downloads and actual eligible trial starts separately. Do not treat download counts as customers.

## D. Queries this app is intended to answer

- Liebherr daily code calculator Android
- Liebherr daily code previous date
- Liebherr daily code historical date
- LICCON daily code calculator
- Mobile crane daily code app
- LIE_CRANE V2 APK download

The specialized [historical-date guide](LIEBHERR_DAILY_CODE_CALCULATOR.md) and [FAQ](FAQ.md) contain real answers to these queries, not an artificial list of repeated keywords.

## E. Brand and access checks

- This is a **third-party independent app**, not an OEM product. No false sponsorship claims.
- Daily codes are access-sensitive: market solely for **authorized service professionals**, not bypassing security.
- Do not claim compatibility with every crane model or controller.
- Never publish user/customer IDs, passwords, license tokens, or working daily codes in screenshots.
- Do not publish fabricated testimonials or untested product promises.

**References:** [GitHub documentation about repository Topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) · [Google indexing FAQ](https://developers.google.com/search/help/crawling-index-faq) · [Google Search Console indexing guidance](https://support.google.com/webmasters/answer/9012289)
