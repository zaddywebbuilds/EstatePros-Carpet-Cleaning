# Owner Approval Checklist

Complete this before publicly launching the site. Each item requires owner confirmation.

## Contact & Identity

- [ ] **Phone number** — verified business phone number  
- [ ] **Email address** — preferred contact email  
- [ ] **Business address** — confirm if a physical/mailing address should be displayed  
- [ ] **Business hours** — confirm current operating hours  
- [ ] **Postal code** — for JSON-LD LocalBusiness schema  

## Services

- [ ] **Carpet Cleaning** — confirm this is an active service *(currently set as confirmed)*
- [ ] **Upholstery Cleaning** — confirm availability to publish this service page  
- [ ] **Area Rug Cleaning** — confirm availability to publish this service page  
- [ ] **Stain & Odour Treatment** — confirm availability to publish this service page  
- [ ] **Commercial Carpet Cleaning** — confirm availability to publish this service page  
- [ ] **Service area** — specific Calgary communities/neighborhoods served (currently "Calgary, Alberta")

## Quote & Booking

- [ ] **Free quotes** — confirm whether quotes are free (set `freeQuotes: true` in `business.ts`)
- [ ] **Booking vs. enquiry** — confirm whether the form should say "Request a Quote" or something else

## Form & Communications

- [ ] **Form endpoint** — Formspree, Netlify, or custom backend endpoint  
- [ ] **Notification email** — where form submissions should be sent  
- [ ] **Response time** — what turnaround to expect (for FAQ or copy)

## Imagery

- [ ] **Hero image** — confirm use of provided concept photography, or supply replacement  
- [ ] **Service images** — confirm use, or supply authorized company photography  
- [ ] **Gallery** — supply real before/after photos (only if matched, with permission) — current concept photos are clearly labeled  

## Reviews & Social Proof

- [ ] **Google reviews** — confirm Google Business Profile link is correct and current  
- [ ] **Review quotes** — supply any testimonials with full customer name and written permission  
- [ ] **Star rating / review count** — only add to schema/display if sourced from verified Google data  

## Legal & Domain

- [ ] **Privacy Policy** — review and confirm content is accurate; update if required  
- [ ] **Domain** — confirm target domain (e.g. `estatepros.ca`) and configure DNS  
- [ ] **Copyright** — confirm legal entity name for copyright footer  

## Social Profiles

- [ ] **Facebook** — verify page URL  
- [ ] **Instagram** — verify profile URL  

## Pre-launch QA

- [ ] Test all nav links at 375px, 768px, 1440px  
- [ ] Test quote form submission end-to-end (real endpoint)  
- [ ] Test FAQ accordion keyboard navigation  
- [ ] Test mobile drawer open/close/escape  
- [ ] Verify no placeholder/dummy content in any public-facing copy  
- [ ] Verify all "Concept photography" disclaimers are in place  
- [ ] Confirm draft service pages are not indexed (robots.txt + noindex meta if published)  
- [ ] Run Lighthouse audit (target >= 90 performance, accessibility, best practices, SEO)  
