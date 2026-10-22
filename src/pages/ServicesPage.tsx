import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Lock } from 'lucide-react'
import { business } from '../config/business'

const BASE = '/EstatePros-Carpet-Cleaning'

export default function ServicesPage() {
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    document.title = 'Services | EstatePros Carpet Cleaning Calgary'
  }, [])

  return (
    <>
      {/* Page header */}
      <section className="bg-teal py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="font-ui text-xs font-600 tracking-[0.2em] uppercase text-ivory/50 mb-4"
            initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            EstatePros &middot; Calgary
          </motion.p>
          <motion.h1
            className="font-heading font-800 text-ivory leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}
            initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Services built around
            <br />
            <em className="font-serif" style={{ fontStyle: 'italic', fontWeight: 300, color: '#DCECE9' }}>
              your space
            </em>
          </motion.h1>
          <motion.p
            className="mt-6 font-ui text-ivory/65 max-w-lg leading-relaxed"
            style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}
            initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            Enquire about any of the services below. We&rsquo;ll confirm what&rsquo;s available for your specific
            space and situation.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-ivory py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {business.services.map((service, i) => (
              <motion.div
                key={service.id}
                className={`rounded-2xl overflow-hidden shadow-card bg-white ${!service.confirmed ? 'opacity-70' : ''}`}
                initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
                whileInView={{ opacity: service.confirmed ? 1 : 0.7, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {!service.confirmed && (
                    <div className="absolute inset-0 bg-ink/40 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2">
                        <Lock size={12} className="text-stone" />
                        <span className="font-heading font-600 text-stone text-xs">Coming soon</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="font-heading font-700 text-teal text-lg mb-2">{service.name}</h2>
                  <p className="font-ui text-stone text-sm leading-relaxed mb-5">{service.shortDesc}</p>
                  <div className="flex items-center gap-4">
                    {service.confirmed ? (
                      <>
                        <Link
                          to={`/services/${service.id}`}
                          className="text-sm font-heading font-700 text-teal hover:text-teal-light transition-colors flex items-center gap-1"
                        >
                          Learn more <ArrowRight size={13} strokeWidth={2.5} />
                        </Link>
                        <Link
                          to="/contact"
                          className="ml-auto text-xs font-heading font-600 text-champagne hover:text-champagne-dark transition-colors"
                        >
                          Enquire
                        </Link>
                      </>
                    ) : (
                      <Link
                        to="/contact"
                        className="text-sm font-heading font-700 text-champagne hover:text-champagne-dark transition-colors flex items-center gap-1"
                      >
                        Ask about this service <ArrowRight size={13} strokeWidth={2.5} />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-ui text-sm text-stone mb-6 max-w-md mx-auto">
              Not sure what you need? Describe your space and we&rsquo;ll help you figure out the best approach.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal text-ivory font-heading font-700 text-sm rounded-full hover:bg-teal-light transition-colors"
              style={{ letterSpacing: '0.03em' }}
            >
              Send an enquiry <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
