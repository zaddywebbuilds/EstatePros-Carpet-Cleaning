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
      image: '/EstatePros-Carpet-Cleaning/images/estatepros-technician-extraction.webp',
      imageAlt: 'Professional holding carpet extraction wand over light carpet in modern Calgary living room',
    },
    {
      id: 'upholstery-cleaning',
      name: 'Upholstery Cleaning',
      shortDesc: 'Careful fabric care for sofas, chairs, and upholstered pieces.',
      confirmed: false,
      featured: false,
      image: '/EstatePros-Carpet-Cleaning/images/estatepros-upholstery-detail.webp',
      imageAlt: 'Close-up of upholstery cleaning tool working on cream sofa cushion',
    },
    {
      id: 'area-rug-cleaning',
      name: 'Area Rug Cleaning',
      shortDesc: 'Specialist handling for area rugs of various fibers and constructions.',
      confirmed: false,
      featured: false,
      image: '/EstatePros-Carpet-Cleaning/images/estatepros-carpet-wand-detail.webp',
      imageAlt: 'Carpet wand detail on light fiber area rug',
    },
    {
      id: 'stain-odour-treatment',
      name: 'Stain & Odour Treatment',
      shortDesc: 'Targeted treatment for isolated stains and persistent odours.',
      confirmed: false,
      featured: false,
      image: '/EstatePros-Carpet-Cleaning/images/estatepros-technician-extraction.webp',
      imageAlt: 'Technician applying spot treatment to carpet',
    },
    {
      id: 'commercial-carpet-cleaning',
      name: 'Commercial Carpet Cleaning',
      shortDesc: 'Scheduled maintenance and deep cleans for commercial spaces.',
      confirmed: false,
      featured: false,
      image: '/EstatePros-Carpet-Cleaning/images/estatepros-hero-living-room.webp',
      imageAlt: 'Wide angle view of open plan commercial space with carpeted floor',
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
