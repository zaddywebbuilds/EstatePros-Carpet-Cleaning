import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'
import { business } from '../config/business'

const BASE = '/EstatePros-Carpet-Cleaning'

export default function ServiceArea() {
  const shouldReduce = useReducedMotion()

  return (
    <section className="bg-white py-24 px-4 sm:px-6" aria-labelledby="area-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-eyebrow mb-4">Where We Work</p>
            <h2
              id="area-heading"
              className="font-heading font-800 text-teal leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
            >
              Carpet Cleaning<br />in Calgary
            </h2>
            <p className="body-copy mb-4 max-w-md">
              EstatePros Carpet Cleaning serves residential and commercial properties across Calgary,
              Alberta. Whether you&rsquo;re in a downtown condo, a suburban family home, or a commercial suite,
              we&rsquo;re here to help.
            </p>
            <p className="body-copy mb-8 max-w-md">
              Specific service area details are confirmed during your enquiry. We&rsquo;re happy to let you
              know whether we cover your neighbourhood.
            </p>

            <div className="flex items-center gap-3 mb-3">
              <MapPin size={16} className="text-champagne shrink-0" />
              <span className="font-ui font-500 text-teal text-sm">Calgary, Alberta, Canada</span>
            </div>

            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-heading font-700 text-champagne hover:text-champagne-dark transition-colors"
            >
              View on Google Maps
              <ExternalLink size={13} strokeWidth={2.5} />
            </a>
          </motion.div>

          {/* Image collage side */}
          <motion.div
            className="relative"
            initial={shouldReduce ? {} : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main image */}
            <div className="rounded-3xl overflow-hidden shadow-card" style={{ aspectRatio: '4/3' }}>
              <img
                src={`${BASE}/images/estatepros-hero-living-room.webp`}
                alt="Bright Calgary interior with large windows and premium neutral carpet"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Accent card */}
            <div className="float-card absolute -bottom-4 -left-4 px-5 py-4 max-w-[200px]">
              <div className="flex items-center gap-2 mb-1">
                <MapPin size={14} className="text-teal" />
                <p className="font-heading font-700 text-teal text-sm">Calgary, AB</p>
              </div>
              <p className="font-ui text-stone text-xs leading-snug">
                Serving homes and businesses across the city.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
