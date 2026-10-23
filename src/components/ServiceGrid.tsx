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
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
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

        {/* The first service runs wide; the rest tile beneath it. */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              className={`plate group relative rounded-4xl !bg-forest-deep transition-all duration-500 hover:-translate-y-1 hover:shadow-surface-lg ${
                i === 0 ? 'sm:col-span-2' : ''
              }`}
              initial={shouldReduce ? {} : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '140px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                className={`w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.06] ${
                  i === 0 ? 'h-72 sm:h-[22rem]' : 'h-72'
                }`}
                loading="lazy"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(to top, rgba(7,25,15,0.95) 0%, rgba(7,25,15,0.68) 38%, rgba(7,25,15,0.12) 72%, rgba(7,25,15,0.05) 100%)',
                }}
              />

              <span
                className="absolute right-5 top-5 font-heading text-linen/25 transition-colors duration-500 group-hover:text-brass/60"
                style={{ fontSize: '1.6rem', fontWeight: 400, lineHeight: 1 }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <h3
                  className="font-heading leading-snug text-linen"
                  style={{ fontSize: i === 0 ? '1.65rem' : '1.3rem', fontWeight: 500 }}
                >
                  {service.name}
                </h3>
                <p className="mt-2 max-w-md font-ui text-[0.85rem] leading-relaxed text-linen/70">
                  {service.shortDesc}
                </p>

                <Link
                  to={`/services/${service.id}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-linen/25 px-5 py-2.5 font-ui text-[0.8rem] text-linen transition-all duration-300 hover:border-brass hover:bg-brass hover:text-forest-deep"
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
              <h3 className="font-heading text-[1.3rem] leading-snug text-forest" style={{ fontWeight: 500 }}>
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
