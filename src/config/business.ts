// Central business configuration for Jose Cardoso Cleaning Service
//
// Everything under "Verified" was read off the company's own Google Business
// Profile on 2026-10-23. Everything under "Unverified" is still waiting on the
// owner — see OWNER_APPROVAL_CHECKLIST.md before launch.

export const business = {
  name: 'Jose Cardoso Cleaning Service',
  shortName: 'Jose Cardoso',
  initials: 'JC',
  tagline: 'Thorough work. Every room. Every time.',
  city: 'North York',
  region: 'Toronto',
  province: 'Ontario',
  provinceCode: 'ON',
  country: 'Canada',
  countryCode: 'CA',

  // Verified — Google Business Profile, 2026-10-23
  phone: '+14389226861',
  phoneDisplay: '(438) 922-6861',
  streetAddress: '991 Caledonia Rd',
  addressLocality: 'North York',
  postalCode: 'M6B 3Y7',
  addressFull: '991 Caledonia Rd, North York, ON M6B 3Y7, Canada',
  plusCode: 'PG5M+MP North York, Ontario',

  // Verified — Mon to Fri 8am–5pm, closed weekends
  hours: [
    { day: 'Monday', short: 'Mon', open: '08:00', close: '17:00' },
    { day: 'Tuesday', short: 'Tue', open: '08:00', close: '17:00' },
    { day: 'Wednesday', short: 'Wed', open: '08:00', close: '17:00' },
    { day: 'Thursday', short: 'Thu', open: '08:00', close: '17:00' },
    { day: 'Friday', short: 'Fri', open: '08:00', close: '17:00' },
    { day: 'Saturday', short: 'Sat', open: null, close: null },
    { day: 'Sunday', short: 'Sun', open: null, close: null },
  ] as { day: string; short: string; open: string | null; close: string | null }[],
  businessHours: 'Mon–Fri 8:00am–5:00pm · Closed weekends',
  timeZone: 'America/Toronto',

  // Verified — Google Business Profile
  googleMapsUrl:
    'https://www.google.com/maps/place/Jose+Cardoso+Cleaning+Service/@43.709131,-79.4656956,17z/data=!3m1!4b1!4m6!3m5!1s0x882b334a344e6131:0x6ccbd6cbfa7e2c22!8m2!3d43.709131!4d-79.4656956!16s%2Fg%2F11my3f935_',
  googleReviewUrl:
    'https://search.google.com/local/writereview?placeid=ChIJMWFONEozK4gRIix--svWy2w',
  coordinates: { lat: 43.709131, lng: -79.4656956 },
  googleRating: 5.0,
  googleReviewCount: 1,

  // Unverified — no email or website listed on the Google profile
  email: null as string | null,

  // Form backend. Set to a Formspree endpoint (https://formspree.io/f/xxxx)
  // or another handler before launch; empty means the form stays client-side.
  formEndpoint: '',

  // Quote policy. Set freeQuotes true only once the owner confirms it.
  freeQuotes: false,
  ctaQuoteLabel: 'Request a Quote',

  // Services. The Google profile lists the category as "Cleaning service"
  // without a breakdown, so these are the proposed set for owner sign-off.
  services: [
    {
      id: 'carpet-cleaning',
      name: 'Carpet Cleaning',
      shortDesc: 'Deep hot water extraction for wall-to-wall carpet, stairs and open-plan floors.',
      confirmed: true,
      featured: true,
      image: '/Jose-Cardoso-Cleaning-Service/images/carpet-extraction.webp',
      imageAlt: 'Extraction wand drawing a clean path across light wall-to-wall carpet beside a sofa',
    },
    {
      id: 'upholstery-cleaning',
      name: 'Upholstery Cleaning',
      shortDesc: 'Careful fabric work on sofas, sectionals, dining chairs and headboards.',
      confirmed: true,
      featured: true,
      image: '/Jose-Cardoso-Cleaning-Service/images/upholstery-extraction.webp',
      imageAlt: 'Hand guiding an upholstery extraction tool across a woven sofa cushion',
    },
    {
      id: 'area-rug-cleaning',
      name: 'Area Rug Cleaning',
      shortDesc: 'Fibre-appropriate handling for wool, synthetic and hand-knotted rugs.',
      confirmed: true,
      featured: true,
      image: '/Jose-Cardoso-Cleaning-Service/images/area-rug-care.webp',
      imageAlt: 'Patterned area rug on hardwood being cleaned with an extraction wand',
    },
    {
      id: 'stain-odour-treatment',
      name: 'Stain & Odour Treatment',
      shortDesc: 'Targeted work on pet accidents, spills and the smells that outlast them.',
      confirmed: true,
      featured: false,
      image: '/Jose-Cardoso-Cleaning-Service/images/pet-stain-example.webp',
      imageAlt: 'Dog resting on pale carpet beside a trail of dried paw marks',
    },
    {
      id: 'commercial-cleaning',
      name: 'Commercial Cleaning',
      shortDesc: 'Scheduled maintenance and deep cleans for offices, suites and common areas.',
      confirmed: true,
      featured: false,
      image: '/Jose-Cardoso-Cleaning-Service/images/commercial-carpet-cleaning.webp',
      imageAlt: 'Open-plan office with desks and glass partitions, carpet being cleaned along a walkway',
    },
    {
      id: 'tile-grout-cleaning',
      name: 'Tile & Grout Cleaning',
      shortDesc: 'Hard floor and grout line cleaning for kitchens, entryways and bathrooms.',
      confirmed: true,
      featured: false,
      image: '/Jose-Cardoso-Cleaning-Service/images/tile-grout-cleaning.webp',
      imageAlt: 'Rotary hard floor tool cleaning large format tile and the grout lines between',
    },
  ],

  // The cleaning process shown on the Services page. Set confirmed back to
  // false if the steps change and the whole section drops off the site.
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
          'We go back over the work with you before we leave, and explain what to expect as everything dries.',
      },
    ],
  },

  // Illustrative before/after pairs. These are concept visualizations, NOT
  // photographs of completed jobs. Swap in real matched pairs once supplied.
  comparisons: [
    {
      id: 'residential-carpet',
      title: 'Residential carpet',
      caption: 'Settled soil through the main walkway of a living room, lifted by hot water extraction.',
      before: '/Jose-Cardoso-Cleaning-Service/images/before-after/carpet-comparison-before.webp',
      after: '/Jose-Cardoso-Cleaning-Service/images/before-after/carpet-comparison-after.webp',
      beforeAlt: 'Living room carpet beside a stone fireplace showing dulled traffic lanes and scattered marks',
      afterAlt: 'The same living room carpet cleaned, with an even tone and the pile lifted',
    },
    {
      id: 'commercial-carpet',
      title: 'Commercial floor',
      caption: 'Heavy traffic lanes across an open-plan office, cleaned back to an even tone.',
      before: '/Jose-Cardoso-Cleaning-Service/images/before-after/upholstery-comparison-before.webp',
      after: '/Jose-Cardoso-Cleaning-Service/images/before-after/upholstery-comparison-after.webp',
      beforeAlt: 'Open-plan office carpet with dark soiling worn along the walkway between desks',
      afterAlt: 'The same office carpet cleaned, with the loop texture reading evenly across the floor',
    },
  ],

  // Verified — the only review on the Google profile, quoted with attribution.
  reviews: [
    {
      author: 'Jake Den Adel',
      meta: 'Local Guide · 194 reviews',
      rating: 5,
      when: '5 years ago',
      body: 'Very thorough cleaning services from this company. I would definitely hire them again!',
    },
  ],

  // Neighbourhoods the Caledonia Rd base sits closest to. Exact coverage is
  // confirmed per enquiry — the site says so wherever this list appears.
  serviceAreas: [
    'North York',
    'Caledonia–Fairbank',
    'Yorkdale–Glen Park',
    'Lawrence Heights',
    'Briar Hill–Belgravia',
    'Downsview',
    'Forest Hill',
    'Midtown Toronto',
  ],

  // Unverified — no profiles listed on the Google Business Profile
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
  },

  siteUrl: 'https://zaddywebbuilds.github.io/Jose-Cardoso-Cleaning-Service',
  basePath: '/Jose-Cardoso-Cleaning-Service',
}

export const BASE = business.basePath

export type Service = typeof business.services[number]
