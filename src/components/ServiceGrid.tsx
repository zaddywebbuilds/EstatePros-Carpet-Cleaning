import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { business } from '../config/business'

export default function ServiceGrid() {
  const shouldReduce = useReducedMotion()
  const services = business.services.filter((s) => s.confirmed)

  return (
    <section className="section-y px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="section-eyebrow mb-5">What We Do</p>
            <h2 id="services-heading" className="section-heading text-balance">
              Cleaning built around
              <br />
              <span className="accent-italic">your space</span>
            </h2>
          </div>
          <Link to="/services" className="link-arrow shrink-0">
            View all services <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Photograph on top, words underneath on the card itself. Nothing is
            set over the image. */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              className="service-card group flex flex-col"
              initial={shouldReduce ? {} : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '140px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="p-3 pb-0">
                <div className="overflow-hidden rounded-3xl bg-bone-deep">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-44 w-full object-cover sm:h-52 transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                <div className="mb-2 flex items-baseline gap-3">
                  <span
                    className="font-ui text-[0.7rem] tabular-nums text-brass-dark"
                    style={{ fontWeight: 600 }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="font-heading leading-snug text-forest"
                    style={{ fontSize: '1.25rem', fontWeight: 500 }}
                  >
                    {service.name}
                  </h3>
                </div>

                <p className="mb-6 font-ui text-[0.85rem] leading-relaxed text-stone">
                  {service.shortDesc}
                </p>

                <Link
                  to={`/services/${service.id}`}
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-forest/15 px-5 py-2.5 font-ui text-[0.8rem] text-forest transition-all duration-300 hover:border-forest hover:bg-forest hover:text-linen"
                  style={{ fontWeight: 600 }}
                >
                  Learn more
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                  <span className="sr-only">about {service.name}</span>
                </Link>
              </div>
            </motion.article>
          ))}

          {/* Catch-all so an unlisted job still has somewhere to land */}
          <motion.div
            className="flex flex-col justify-between rounded-4xl border border-dashed border-forest/20 bg-sage/40 p-7"
            initial={shouldReduce ? {} : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '140px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <h3 className="font-heading text-[1.25rem] leading-snug text-forest" style={{ fontWeight: 500 }}>
                Something else?
              </h3>
              <p className="mt-3 font-ui text-[0.85rem] leading-relaxed text-stone">
                Move-outs, post-renovation cleans, one-off jobs. Describe the space and
                we&rsquo;ll tell you honestly whether it&rsquo;s work we take on.
              </p>
            </div>
            <Link to="/contact" className="btn-primary mt-7 w-full !px-6">
              Send an enquiry
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
