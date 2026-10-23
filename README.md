# Jose Cardoso Cleaning Service

Website for Jose Cardoso Cleaning Service — 991 Caledonia Rd, North York, Ontario.

**Live site:** https://zaddywebbuilds.github.io/Jose-Cardoso-Cleaning-Service/
**Google Business Profile:** [Jose Cardoso Cleaning Service](https://www.google.com/maps/place/Jose+Cardoso+Cleaning+Service/@43.709131,-79.4656956,17z/)

## Stack

- React 18 + Vite + TypeScript
- Tailwind CSS v3
- Framer Motion (selective, respects `prefers-reduced-motion`)
- Lucide React icons
- React Router v6

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173/Jose-Cardoso-Cleaning-Service/

## Build

```bash
npm run build
```

`build` runs Vite and then `scripts/prerender.mjs`, which writes a real
`dist/<route>/index.html` for every route. GitHub Pages otherwise answers an
unknown path with a 404, and link crawlers discard metadata on a 404, so a
shared `/reviews` link would preview as a bare hostname.

```bash
npm run preview   # serve the production build locally
npm run typecheck # tsc -b
```

## Deploy

Automated by GitHub Actions on push to `master` (`.github/workflows/deploy.yml`).

**First-time setup:** Settings → Pages → Source: GitHub Actions, then push to `master`.

## Where the content lives

`src/config/business.ts` is the single source of truth for name, phone,
address, hours, services, coordinates, service areas and reviews. Components
read from it rather than hard-coding anything.

Everything in that file marked *Verified* was read off the company's Google
Business Profile on 2026-10-23:

| Field | Value |
|-------|-------|
| Phone | (438) 922-6861 |
| Address | 991 Caledonia Rd, North York, ON M6B 3Y7 |
| Hours | Mon–Fri 8:00am–5:00pm, closed weekends |
| Rating | 5.0 from 1 Google review |
| Category | Cleaning service |

Still unverified — see `OWNER_APPROVAL_CHECKLIST.md`:

| Field | Status |
|-------|--------|
| `email` | `null` — no email on the Google listing |
| `formEndpoint` | Empty — the form runs in demo mode until this is set |
| `freeQuotes` | `false` — set `true` only once the owner confirms |
| `social.facebook` / `social.instagram` | `null` |
| Service list | Proposed, not owner-confirmed (Google lists only "Cleaning service") |

## Connect the contact form

The form shows a visible "demo mode" banner and delivers nothing until
`formEndpoint` is set.

**Formspree (recommended for GitHub Pages):**
1. Create a form at https://formspree.io
2. Copy the endpoint (e.g. `https://formspree.io/f/xabcdefg`)
3. Set `formEndpoint` in `src/config/business.ts`

**Netlify Forms:** deploy to Netlify, add `data-netlify="true"` to the form in
`QuoteForm.tsx`, and drop the `fetch` call.

## Imagery

Everything in `public/images/` is editorial concept photography, not
photographs of this company's work. The before/after sliders and the gallery
both say so on the page. Replace with authorized company photography when it
is available:

- `hero-living-room.webp` — home hero
- `technician-extraction.webp` — approach section
- `carpet-wand-detail.webp`, `upholstery-detail.webp` — gallery details
- `technician-equipment-setup.webp` — services header and gallery
- `before-after/*.webp` — comparison sliders

## Design system

Tokens live in `tailwind.config.ts` and `src/index.css`.

- **Colour** — `forest` (deep evergreen, the brand), `brass` (the single
  accent), `linen` / `bone` (paper grounds), `sage` (cool tint), `stone` (body
  text).
- **Type** — Fraunces for display, Inter for UI.
- **Surfaces** — `.surface` (translucent card), `.panel-deep` (dark panel with
  a brass bloom), `.service-card`, `.float-card`.
- **Buttons** — `.btn-primary`, `.btn-brass`, `.btn-ghost`,
  `.btn-outline-light`, `.link-arrow`.

The page background is two fixed radial washes plus an SVG grain layer applied
to `body::before` / `body::after`, so long pages keep an even light.

## Add a custom domain

1. Add `public/CNAME` containing the domain
2. Set `siteUrl` and `basePath` in `src/config/business.ts` (`basePath` → `''`)
3. Set `base` to `'/'` in `vite.config.ts`
4. Update the URLs in `index.html`, `public/404.html`, `public/robots.txt`,
   `public/sitemap.xml` and `SITE` in `scripts/prerender.mjs`
