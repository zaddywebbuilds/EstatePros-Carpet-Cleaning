// Central business configuration for EstatePros Carpet Cleaning
// Replace PLACEHOLDER values with owner-verified data before launch

export const business = {
  name: 'EstatePros Carpet Cleaning',
  shortName: 'EstatePros',
  tagline: 'Beautiful spaces. Brilliantly cared for.',
  city: 'Calgary',
  province: 'Alberta',
  country: 'Canada',
  countryCode: 'CA',

  // UNVERIFIED - update with owner-confirmed data
  phone: null as string | null,          // e.g. '+14031234567'
  phoneDisplay: null as string | null,   // e.g. '(403) 123-4567'
  email: null as string | null,          // e.g. 'hello@estatepros.ca'
  address: null as string | null,
  postalCode: null as string | null,
  businessHours: null as string | null,  // e.g. 'Mon–Fri 8am–6pm, Sat 9am–4pm'

  // Google Business Profile (verified listing exists)
  googleMapsUrl: 'https://www.google.com/maps/place/EstatePros+Carpet+Cleaning/@51.0860872,-114.0440112,10z/data=!3m1!4b1!4m6!3m5!1s0x20aa5244cb8ef709:0xf98cf8b9469edc5a!8m2!3d51.0860872!4d-114.0440112!16s%2Fg%2F11ntp89kds',
  coordinates: { lat: 51.0860872, lng: -114.0440112 },

  // Form backend
  // Set to your Formspree endpoint e.g. 'https://formspree.io/f/xabcdefg'
  // Or configure Netlify Forms / custom serverless endpoint
  formEndpoint: '',

  // Quote policy
  // Set freeQuotes: true only when owner confirms quotes are free
  freeQuotes: false,
  ctaQuoteLabel: 'Request a Quote',

  // Services - set confirmed: true only for owner-approved services
  // Draft pages for unconfirmed services are created but marked noindex
  services: [
    {
      id: 'carpet-cleaning',
      name: 'Carpet Cleaning',
      shortDesc: 'Deep extraction cleaning for wall-to-wall carpets and open-plan spaces.',
      confirmed: true,
      featured: true,
      image: '/EstatePros-Carpet-Cleaning/images/carpet-extraction.webp',
      imageAlt: 'Extraction wand drawing a clean path across light wall-to-wall carpet beside a sofa',
    },
    {
      id: 'upholstery-cleaning',
      name: 'Upholstery Cleaning',
      shortDesc: 'Careful fabric care for sofas, chairs, and upholstered pieces.',
      confirmed: false,
      featured: false,
      image: '/EstatePros-Carpet-Cleaning/images/upholstery-extraction.webp',
      imageAlt: 'Hand guiding an upholstery extraction tool across a woven sofa cushion',
    },
    {
      id: 'area-rug-cleaning',
      name: 'Area Rug Cleaning',
      shortDesc: 'Specialist handling for area rugs of various fibers and constructions.',
      confirmed: false,
      featured: false,
      image: '/EstatePros-Carpet-Cleaning/images/area-rug-care.webp',
      imageAlt: 'Patterned area rug on hardwood being cleaned with an extraction wand',
    },
    {
      id: 'stain-odour-treatment',
      name: 'Stain & Odour Treatment',
      shortDesc: 'Targeted treatment for isolated stains and persistent odours.',
      confirmed: false,
      featured: false,
      image: '/EstatePros-Carpet-Cleaning/images/carpet-spot-treatment.webp',
      imageAlt: 'Gloved hand spraying a pre-treatment onto a marked patch of carpet',
    },
    {
      id: 'commercial-carpet-cleaning',
      name: 'Commercial Carpet Cleaning',
      shortDesc: 'Scheduled maintenance and deep cleans for commercial spaces.',
      confirmed: false,
      featured: false,
      image: '/EstatePros-Carpet-Cleaning/images/commercial-carpet-cleaning.webp',
      imageAlt: 'Open-plan office with desks and glass partitions, carpet being cleaned along a walkway',
    },
  ],

  // Illustrative before/after pairs for the comparison sliders.
  // These are concept visualizations, NOT photographs of completed jobs.
  // Swap in matched real client pairs once the owner supplies them.
  // Cleaning process shown on the Services page.
  // Owner-confirmed 2026-10-22. Set confirmed back to false if the steps
  // change, and the whole section drops off the site until re-approved.
  process: {
    confirmed: true,
    steps: [
      {
        id: 'inspect',
        name: 'Inspection',
        detail:
          'We walk the space with you, check fibre type and construction, and note the areas that need the most attention.',
      },
      {
        id: 'pre-treat',
        name: 'Pre-treatment',
        detail:
          'Traffic lanes and marked areas are treated first and given time to work before anything is rinsed.',
      },
      {
        id: 'extract',
        name: 'Hot water extraction',
        detail:
          'Hot water extraction lifts loosened soil out of the pile rather than pushing it further in.',
      },
      {
        id: 'walkthrough',
        name: 'Walkthrough',
        detail:
          'We go back over the work with you before we leave, and explain what to expect as the carpet dries.',
      },
    ],
  },

  // Two pairs shipped from the asset pack showed a bathroom and a kitchen
  // counter, which is not work this business does, so they are not used here.
  comparisons: [
    {
      id: 'residential-carpet',
      title: 'Residential carpet',
      caption: 'Settled soil through the main walkway of a living room, lifted by hot water extraction.',
      before: '/EstatePros-Carpet-Cleaning/images/before-after/carpet-comparison-before.webp',
      after: '/EstatePros-Carpet-Cleaning/images/before-after/carpet-comparison-after.webp',
      beforeAlt: 'Living room carpet beside a stone fireplace showing dulled traffic lanes and scattered marks',
      afterAlt: 'The same living room carpet cleaned, with an even tone and the pile lifted',
    },
    {
      id: 'commercial-carpet',
      title: 'Commercial floor',
      caption: 'Heavy traffic lanes across an open-plan office, cleaned back to an even tone.',
      before: '/EstatePros-Carpet-Cleaning/images/before-after/upholstery-comparison-before.webp',
      after: '/EstatePros-Carpet-Cleaning/images/before-after/upholstery-comparison-after.webp',
      beforeAlt: 'Open-plan office carpet with dark soiling worn along the walkway between desks',
      afterAlt: 'The same office carpet cleaned, with the loop texture reading evenly across the floor',
    },
  ],

  // Social - update when profiles are verified
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
  },

  // Site metadata
  siteUrl: 'https://zaddywebbuilds.github.io/EstatePros-Carpet-Cleaning',
  basePath: '/EstatePros-Carpet-Cleaning',
}

export type Service = typeof business.services[number]
