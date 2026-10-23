# Owner Approval Checklist

Jose Cardoso Cleaning Service. Complete this before the site is launched
publicly or submitted to Google. Each item needs the owner's confirmation.

## Already verified — no action unless something has changed

Read off the company's own Google Business Profile on 2026-10-23 and already
live in `src/config/business.ts`:

- [x] **Business name** — Jose Cardoso Cleaning Service
- [x] **Phone** — (438) 922-6861
- [x] **Address** — 991 Caledonia Rd, North York, ON M6B 3Y7
- [x] **Hours** — Monday to Friday, 8:00am–5:00pm; closed Saturday and Sunday
- [x] **Coordinates** — 43.709131, −79.4656956
- [x] **Google rating** — 5.0 from 1 review, shown as exactly that
- [x] **Review quote** — Jake Den Adel, quoted verbatim with attribution

> Confirm these are still current. If the phone, address or hours have changed
> since the profile was last updated, change them in `src/config/business.ts`
> and nowhere else — the whole site reads from that file.

## Needs owner confirmation before launch

### Services — the most important item on this list

The Google listing gives the category only as **"Cleaning service"** with no
breakdown. The six services on the site are therefore **proposed, not
verified**, and every one is currently set `confirmed: true` so it appears:

- [ ] **Carpet Cleaning**
- [ ] **Upholstery Cleaning**
- [ ] **Area Rug Cleaning**
- [ ] **Stain & Odour Treatment**
- [ ] **Commercial Cleaning**
- [ ] **Tile & Grout Cleaning**

For anything the company does **not** actually do, set `confirmed: false` in
`src/config/business.ts`. That single change removes it from the home grid,
the footer, the form's service dropdown and the sitemap, and marks its detail
page as an unconfirmed draft.

Also confirm:

- [ ] **Anything missing** — services offered that are not listed above
- [ ] **Service wording** — that each description matches how the work is
      actually done
- [ ] **Cleaning process** — the four steps shown on /services
      (`business.process.steps`): inspection, pre-treatment, hot water
      extraction, walkthrough

### Contact & reach

- [ ] **Email address** — none is published on the Google listing. Add one to
      `business.email` or confirm the site should stay phone-and-form only
- [ ] **Service areas** — the eight neighbourhoods listed on the home page are
      inferred from the Caledonia Rd location, not confirmed coverage
      (`business.serviceAreas`)
- [ ] **Response time** — what turnaround to promise, if any

### Quote & booking

- [ ] **Free quotes** — set `freeQuotes: true` only if quotes genuinely are free
- [ ] **CTA wording** — "Request a Quote" throughout; confirm or change
      `ctaQuoteLabel`

### Form

- [ ] **Form endpoint** — Formspree, Netlify or custom. Until `formEndpoint` is
      set the form shows a demo-mode banner and delivers nothing
- [ ] **Notification email** — where submissions should land

### Imagery

Every image is editorial concept photography, not this company's work. The
site says so on the gallery, the comparison sliders and each service page.

- [ ] **Hero image** — approve the concept photo or supply a replacement
- [ ] **Service images** — approve or supply authorized photography
- [ ] **Before/after pairs** — supply real matched pairs, with the customer's
      permission, to replace the illustrations
- [ ] **og-image.jpg** — the link-preview image; replace alongside the hero

### Legal & domain

- [ ] **Privacy Policy** — review for accuracy (written against PIPEDA)
- [ ] **Legal entity name** — for the copyright line in the footer
- [ ] **Domain** — confirm whether a custom domain is wanted; see the README
- [ ] **Social profiles** — none on the Google listing; add to
      `business.social` if they exist

## Pre-launch QA

- [ ] Nav and layout at 375px, 768px and 1440px
- [ ] Quote form submitted end to end against the real endpoint
- [ ] FAQ accordion by keyboard; mobile drawer open / close / Escape
- [ ] Before/after sliders by keyboard (arrow keys) and touch
- [ ] "Open now" indicator reads correctly inside and outside business hours
- [ ] Every concept-photography disclaimer still in place
- [ ] No placeholder copy anywhere public-facing
- [ ] Lighthouse ≥ 90 on performance, accessibility, best practices and SEO
- [ ] Google Business Profile updated with the site URL once it is live
