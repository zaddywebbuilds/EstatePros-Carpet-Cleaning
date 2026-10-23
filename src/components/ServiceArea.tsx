import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, ExternalLink, Clock, Phone } from 'lucide-react'
import { business } from '../config/business'

// Keyless embed: q=lat,lng with output=embed needs no Maps API key.
const mapEmbed = `https://maps.google.com/maps?q=${business.coordinates.lat},${business.coordinates.lng}&z=14&output=embed`

export default function ServiceArea() {
  const shouldReduce = useReducedMotion()

  return (
    <section className="section-y px-4 sm:px-6 lg:px-8" aria-labelledby="area-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '140px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-eyebrow mb-5">Where We Work</p>
          <h2 id="area-heading" className="section-heading mb-7">
            North York and
            <br />
            <span className="accent-italic">across Toronto</span>
          </h2>

          <p className="body-copy mb-5 max-w-md">
            We work out of 991 Caledonia Road in North York, which puts most of midtown and the
            west end within a short drive. Homes, condos, offices and commercial suites all
            welcome.
          </p>
          <p className="body-copy mb-9 max-w-md">
            Tell us your neighbourhood when you enquire and we&rsquo;ll confirm straight away
            whether we cover it.
          </p>

          <ul className="mb-9 flex flex-wrap gap-2" role="list">
            {business.serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-forest/12 bg-white/70 px-4 py-2 font-ui text-[0.78rem] text-forest backdrop-blur-sm"
              >
                {area}
              </li>
            ))}
          </ul>

          <dl className="space-y-4 border-t border-forest/10 pt-7">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brass-dark" strokeWidth={2} />
              <div>
                <dt className="sr-only">Address</dt>
                <dd className="font-ui text-sm text-forest">{business.addressFull}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={16} className="mt-0.5 shrink-0 text-brass-dark" strokeWidth={2} />
              <div>
                <dt className="sr-only">Opening hours</dt>
                <dd className="font-ui text-sm text-forest">{business.businessHours}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-brass-dark" strokeWidth={2} />
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a
                    href={`tel:${business.phone}`}
                    className="font-ui text-sm text-forest transition-colors hover:text-brass-dark"
                  >
                    {business.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow mt-7"
          >
            Open in Google Maps
            <ExternalLink size={13} strokeWidth={2.5} />
          </a>
        </motion.div>

        <motion.div
          className="plate rounded-5xl shadow-surface-lg"
          initial={shouldReduce ? {} : { opacity: 0, x: 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '140px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <iframe
            src={mapEmbed}
            title={`Map showing ${business.name} at ${business.addressFull}`}
            className="h-[26rem] w-full border-0 lg:h-[34rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  )
}
