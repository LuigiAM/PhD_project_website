# NOTICE — Copyright, Licensing Scope, and Permissions

This repository contains both software and non-software materials. Different
parts are governed by different licensing terms. This file clarifies which is
which.

---

## 1. Software components — MIT License

The following are licensed under the MIT License (see [LICENSE](./LICENSE)):

- Build configuration: `astro.config.mjs`, `package.json`, `package-lock.json`, `tsconfig.json`
- Astro components and layouts: everything under `src/components/` and `src/layouts/`
- Page template structure: the `.astro` and `.md` template/scaffolding code under `src/pages/`
  (the structural markup, frontmatter handling, and component composition — NOT the
  textual content authored within those pages)
- Any utility TypeScript, JavaScript, or CSS code
- Development tooling configuration under `.vscode/` and `.github/`

You may freely use, modify, and redistribute these components under MIT terms.
Attribution back to the original project is appreciated but not required.

---

## 2. Non-software materials — All Rights Reserved

The following materials are copyright © 2025–2026 Luigi A. Moretti and are
**not** covered by the MIT License. All rights are reserved unless explicit
written permission is granted.

### 2.1 Written content
- All prose, page copy, headings, descriptions, and narrative text authored
  within `src/pages/` (including but not limited to project descriptions,
  research summaries, value propositions, taglines, and bios)
- All newsletter content under `src/pages/newsletter/`
- Any blog posts, articles, or long-form text

### 2.2 Brand identity
- The "MEMoPAD" name and wordmark (currently in draft form pending formal
  trademark filing — see notes below)
- Any logo, monogram, or stylised mark associated with the project
- The visual brand identity: colour palette, typography choices, and any
  associated style guide elements

### 2.3 Images, graphics, and visual assets
All files under `public/`, including but not limited to:
- Hero images (e.g., `memopad-hero-image.png`, `memopad-hero-image-NOLOGO.png`,
  `hero-linkedin.webp`, `MEMoPAD-video-story.webp`, `MEMoPADpresentation.jpeg`)
- Prototype-related imagery and any UI screenshots or mockups
- Illustrations and graphics (e.g., `achievements-chart.jpg`,
  `achievements-hero-banner.jpg`, `co-design-tools.jpg`, `clinical_past.png`)
- Photographs (e.g., `HUGandMilbotix.jpg`, `HUGandMilbotix.png`,
  `google-pixel-watch.webp`)
- Favicons and app icons
- Open-graph and social-sharing images (e.g., `og-image.jpg`)

### 2.4 PDF documents
- All PDFs under `public/`, including the clinician one-pager
  (`one-page-clinician.pdf`), the public one-pager (`one-page-public.pdf`),
  and their preview images

### 2.5 Third-party assets used by permission
Some assets in `public/` are third-party trademarks or logos used by permission
or under fair-dealing exceptions (e.g., partner logos such as `logo-uwe-bristol.webp`,
`logo-milbotix.webp`, `logo-bristol247.webp`, `logo-bristol-health-partners.webp`).
These remain the property of their respective owners and are not granted under
any licence by this repository.

---

## 3. Text and data mining and AI training

All rights in the non-software materials listed in section 2 are expressly
reserved for text and data mining (TDM), including collecting, copying, or
using them to train or fine-tune AI models. This is a reservation of rights
under Article 4(3) of Directive (EU) 2019/790 (in Italy, articles 70-quater
and 70-septies of Law 633/1941). Providers of general-purpose AI models must
respect it under Article 53(1)(c) of the EU AI Act (Regulation (EU) 2024/1689).

The reservation is also published in machine-readable form on the website:
- `public/robots.txt`: Content Signals (`ai-train=no`), IETF AI preferences
  (`Content-Usage: train-ai=n`), and a list of AI training crawlers that are
  disallowed
- `public/.well-known/tdmrep.json` and a `tdm-reservation` meta tag on every
  page (W3C TDM Reservation Protocol)

It does not affect:
- search engines and AI tools that find, link to, or quote the website in
  search results and answers
- the MIT-licensed software in section 1
- exceptions that cannot be reserved, such as TDM for scientific research
  (Article 3 of the Directive)
- papers shared under a Creative Commons licence, which keep the terms of that
  licence (shown on each publication page)

To license content for TDM or AI training, contact hello@luigimoretti.com.

---

## 4. Notes on the brand

The MEMoPAD name and logo are currently in **draft form**. A formal trademark
filing decision is pending. Until then, the name and logo are protected only
by unregistered rights (passing-off, copyright in the artwork). Reuse without
permission is not authorised.

## 5. Notes on the prototype design

Screenshots, mockups, and any visual depictions of the MEMoPAD prototype
(phone application, smartwatch interface, and web application) shown in any
image, illustration, hero asset, or PDF in this repository are protected by
copyright. MEMoPAD prototype designs are also protected by **UK registered
designs**. Reproduction, derivative use, or incorporation into other products
is prohibited without written permission.

## 6. Permissions and licensing inquiries

For any use of the non-software materials listed above — including academic
citation that exceeds fair-dealing limits, commercial reuse, derivative works,
or media reproduction — contact:

**Luigi A. Moretti**
hello@luigimoretti.com
https://luigiandreamoretti.com

---

*Last updated: 2026-10-19*
