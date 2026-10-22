import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'
import { business } from '../config/business'

const AREAS = [
  'Downtown & Beltline condos',
  'Suburban family homes',
  'Commercial suites & offices',
  'Rental & estate turnovers',
]

export default function ServiceArea() {
  const shouldReduce = useReducedMotion()

  return (
    <section className="py-8 px-4 sm:px-6" aria-labelledby="area-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Text side */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '240px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-eyebrow mb-4">Where We Work</p>
            <h2
              id="area-heading"
              className="font-heading font-600 text-teal leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.01em' }}
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
              className="inline-flex items-center gap-2 mt-4 text-sm font-heading font-600 text-champagne hover:text-champagne-dark transition-colors"
            >
              View on Google Maps
              <ExternalLink size={13} strokeWidth={2.5} />
            </a>
          </motion.div>

          {/* Coverage surface - no photograph, so no empty image slot */}
          <motion.div
            className="surface p-8 sm:p-10"
            initial={shouldReduce ? {} : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '240px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-eyebrow mb-5">Coverage</p>
            <ul className="space-y-4" role="list">
              {AREAS.map((area) => (
                <li key={area} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" aria-hidden="true" />
                  <span className="font-heading text-teal text-lg" style={{ fontWeight: 500 }}>
                    {area}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-7 font-ui text-xs leading-relaxed text-stone">
              Coverage is confirmed when you enquire &mdash; tell us your neighbourhood and
              we&rsquo;ll let you know right away.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
