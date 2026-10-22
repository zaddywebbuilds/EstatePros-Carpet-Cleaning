# EstatePros Carpet Cleaning

Production website for EstatePros Carpet Cleaning, serving Calgary, Alberta.

**Live site:** https://zaddywebbuilds.github.io/EstatePros-Carpet-Cleaning/

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

Open http://localhost:5173/EstatePros-Carpet-Cleaning/

## Build

```bash
npm run build
npm run preview  # preview the production build locally
```

## Deploy

Automated via GitHub Actions on push to `master`. The workflow builds and deploys to GitHub Pages.

**First-time setup:**
1. In your GitHub repo: Settings → Pages → Source: GitHub Actions
2. Push to `master` — the action deploys automatically

## Owner configuration checklist

Edit `src/config/business.ts` to add verified business details:

| Field | Status | Notes |
|-------|--------|-------|
| `phone` / `phoneDisplay` | Placeholder | Add once verified |
| `email` | Placeholder | Add once verified |
| `address` / `postalCode` | Placeholder | Add if business has a physical address |
| `businessHours` | Placeholder | Add once confirmed |
| `formEndpoint` | Empty | Set Formspree/Netlify endpoint |
| `freeQuotes` | `false` | Set `true` only if quotes are confirmed free |
| Services `confirmed` flags | Only `carpet-cleaning: true` | Set others to `true` once owner confirms |
| Social profiles | `null` | Add once verified |

## Connect the contact form

**Option A — Formspree (recommended for GitHub Pages):**
1. Create a form at https://formspree.io
2. Copy the endpoint URL (e.g. `https://formspree.io/f/xabcdefg`)
3. Set `formEndpoint` in `src/config/business.ts`

**Option B — Netlify Forms:**
1. Deploy to Netlify instead
2. Add `data-netlify="true"` to the form element in `QuoteForm.tsx`
3. Remove the fetch call and use Netlify's built-in handling

## Replace imagery

All images in `public/images/` are editorial concept photography. Replace with authorized company imagery:

- `estatepros-hero-living-room.webp` — main hero background
- `estatepros-technician-extraction.webp` — service/process sections
- `estatepros-upholstery-detail.webp` — upholstery service (when confirmed)
- `estatepros-carpet-wand-detail.webp` — detail/closing CTA

## Add custom domain

1. Add a `CNAME` file to `public/` with the domain (e.g. `estatepros.ca`)
2. Update `siteUrl` and `basePath` in `src/config/business.ts`
3. Update `base` in `vite.config.ts` to `'/'`
4. Update all references in `index.html` and `public/sitemap.xml`

## Local SEO TODO

Once business details are verified:
- Add `aggregateRating` to the JSON-LD in `index.html` (only with real verified data)
- Add `OpeningHoursSpecification` to JSON-LD
- Add `telephone` and `email` to JSON-LD
- Add canonical URLs per page
