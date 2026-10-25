# Humus Waste & Energy Management

Phase-one homepage built from `Website final.docx` and the supplied `humus_homepage_mockup.png` visual reference. Next.js App Router, TypeScript, Tailwind CSS, Manrope, Inter, and Lucide icons. Only the homepage is implemented; navigation points to actual page sections.

## Run locally

Use Node 22 (the project includes `.nvmrc`). Your machine's default Node 18 is too old for this Next.js version.

```sh
nvm use
npm ci
npm run dev
```

Open http://127.0.0.1:3000. For a production preview, run `npm run build` followed by `npm run start`. Google Fonts are downloaded at build time by `next/font/google` and served locally at runtime.

```sh
npm run typecheck
npm run lint
npm run build
```

## Edit the website

| File | Purpose |
| --- | --- |
| `content/site.ts` | Main copy, navigation labels, project facts, metadata, image path, disclaimers, and contact note. |
| `app/globals.css` | Tailwind theme colors, typography, spacing, and responsive layouts. |
| `app/page.tsx` | Homepage section order. |
| `app/layout.tsx` | Google Fonts, document language, metadata, skip link, and preview indexing policy. |
| `components/` | SiteHeader, Hero, ProjectFacts, MissionPillars, ProcessFlow, ProjectHighlight, PartnerCTA, SiteFooter, and shared Brand. |
| `public/images/biomethane-concept.png` | Generated conceptual facility illustration used in Hero and ProjectHighlight. |
| `public/images/biomethane-concept.prompt.txt` | Exact generation prompt and asset provenance. |
| `app/icon.svg` | Temporary favicon using the same Lucide arrow as the placeholder identity. |
| `qa/` | Desktop, tablet, mobile, and menu screenshots; browser checks and comparison evidence. |
| `design-qa.md` | Visual comparison findings and verification status. |

The menu is the only interactive client component. Other page sections render on the server. Raster artwork uses `next/image`, responsive image sizes, reserved layout space, and hero preloading. The diagram branches at digestion into two separately labeled recovery paths. Reduced-motion preferences are respected.

## Content and image decisions

- The facility remains explicitly **proposed**, with feasibility and approvals outstanding.
- 3.5 TPD, 4 acres, and a 15 km collection radius are proposal figures, not operational results.
- No IGL logo, confirmed partnership, pipeline connection, carbon saving, testimonial, or certification is claimed.
- The facility artwork was made with built-in Image Gen and is visibly labeled as a concept, not a site photograph. It is not engineering documentation or an accurate site layout.
- The user's three photographs were visible in chat, but source image files were not available in the attachment directory or among matching local Downloads images. They are not recreated or represented as generated substitutes. The seedling-in-hands photograph would be a strong candidate for a later soil/farming section once its original file is available.
- Official email and phone are pending. The partnership CTA leads to that clearly labeled contact area. There is no form or fabricated submission confirmation.

## Before public launch

Confirm the official company name/logo, email/phone, project status, approval of each numeric claim, and the illustration/photo choices. Replace the temporary identity when brand assets are supplied. Review and remove the preview `noindex` metadata in `app/layout.tsx` when ready for search indexing. No site has been published, no messages have been sent, and no backend has been configured.

About, Project, Process, Partners, and Contact routes are intentionally deferred until homepage approval.

## Browser verification

`scripts/verify-browser.mjs` uses Chrome's DevTools protocol without a browser automation dependency. Run a separate headless Chrome profile exposing debugging port 9227, start the production preview on port 3000, and execute it with Node 22+. It captures the 1440, 768, 390, and 320 px layouts and checks horizontal overflow, image loading, anchor targets, heading count, reduced motion, menu keyboard activation/Escape/focus, CTA destinations, and browser errors. It does not modify your normal Chrome profile.

Reference setup documentation: [Next.js installation](https://nextjs.org/docs/app/getting-started/installation) and [Tailwind with Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs).
