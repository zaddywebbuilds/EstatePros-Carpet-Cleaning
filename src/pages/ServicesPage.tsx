import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Lock } from 'lucide-react'
import { business, BASE } from '../config/business'
import ProcessTimeline from '../components/ProcessTimeline'

export default function ServicesPage() {
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    document.title = 'Services | Jose Cardoso Cleaning Service'
  }, [])

  const reveal = (delay = 0) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '240px' },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
        }

  return (
    <>
      {/* Header - asymmetric, image on one side so it reads differently to the home hero */}
      <section className="section-y px-4 sm:px-6 lg:px-8">
        <div className="panel-deep relative overflow-hidden max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_1fr] items-stretch">
            <div className="px-6 sm:px-12 py-14 lg:py-20">
              <motion.p
                className="section-eyebrow !text-brass mb-5"
                initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                What We Do
              </motion.p>
              <motion.h1
                className="font-heading text-linen leading-[1.08]"
                style={{ fontWeight: 400, fontSize: 'clamp(2.4rem, 5.2vw, 4.1rem)', letterSpacing: '-0.03em' }}
                initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                Services built around
                <br />
                <span className="accent-italic">your space</span>
              </motion.h1>
              <motion.p
                className="mt-6 font-ui text-linen/70 max-w-md leading-relaxed"
                style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}
                initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
              >
                Enquire about any of the work below. We confirm what is right for your
                particular space and situation before anything is booked in.
              </motion.p>
            </div>

            <div className="relative min-h-[260px] lg:min-h-0">
              <img
                src={`${BASE}/images/technician-equipment-setup.webp`}
                alt="Cleaning technician wheeling extraction equipment through a home entryway"
                className="absolute inset-0 h-full w-full object-cover"
                fetchPriority="high"
                decoding="async"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to right, rgba(14,42,35,0.96) 0%, rgba(14,42,35,0.45) 48%, rgba(14,42,35,0.05) 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial service blocks - alternating sides, not a repeated card grid */}
      <section className="section-y px-4 sm:px-6 lg:px-8" aria-label="Services offered">
        <div className="max-w-7xl mx-auto space-y-6">
          {business.services.map((service, i) => {
            const flipped = i % 2 === 1
            return (
              <motion.article
                key={service.id}
                className="surface overflow-hidden"
                {...reveal(0.04)}
              >
                <div
                  className={`grid items-stretch ${
                    flipped
                      ? 'md:grid-cols-[1fr_0.82fr] md:[&>*:first-child]:order-2'
                      : 'md:grid-cols-[0.82fr_1fr]'
                  }`}
                >
                  <div className="relative min-h-[240px] md:min-h-[320px]">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    {!service.confirmed && (
                      <div className="absolute left-5 top-5">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 backdrop-blur-sm">
                          <Lock size={11} className="text-stone" />
                          <span className="font-ui text-[11px] font-600 tracking-wide text-stone">
                            Not yet confirmed
                          </span>
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-center px-7 py-9 sm:px-10">
                    <h2
                      className="font-heading text-forest"
                      style={{ fontWeight: 500, fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', letterSpacing: '-0.02em' }}
                    >
                      {service.name}
                    </h2>
                    <p className="mt-3 font-ui text-sm leading-relaxed text-stone max-w-sm">
                      {service.shortDesc}
                    </p>

                    <div className="mt-7 flex flex-wrap items-center gap-5">
                      {service.confirmed ? (
                        <>
                          <Link
                            to={`/services/${service.id}`}
                            className="inline-flex items-center gap-1.5 font-ui text-sm font-600 text-forest transition-colors hover:text-brass-dark"
                          >
                            Learn more <ArrowRight size={13} strokeWidth={2.5} />
                          </Link>
                          <Link
                            to="/contact"
                            className="font-ui text-sm font-600 text-brass-dark transition-colors hover:text-forest"
                          >
                            Enquire
                          </Link>
                        </>
                      ) : (
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 font-ui text-sm font-600 text-brass-dark transition-colors hover:text-forest"
                        >
                          Ask about this service <ArrowRight size={13} strokeWidth={2.5} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      {/* Stays off the site until the owner confirms these are the real steps */}
      {business.process.confirmed && <ProcessTimeline />}

      {/* Pointer to the comparisons, which live on their own page */}
      <section className="section-y px-4 sm:px-6 lg:px-8">
        <div className="surface max-w-7xl mx-auto flex flex-col gap-5 px-7 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div>
            <p className="section-eyebrow mb-2">See The Difference</p>
            <p className="font-heading text-forest text-2xl" style={{ fontWeight: 500 }}>
              Drag through a before and after
            </p>
          </div>
          <Link
            to="/gallery"
            className="btn-primary shrink-0"
          >
            View comparisons <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-y px-4 sm:px-6 lg:px-8">
        <div className="panel-deep max-w-7xl mx-auto px-6 sm:px-12 py-16 text-center">
          <motion.h2
            className="font-heading text-linen leading-[1.1]"
            style={{ fontWeight: 500, fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
            {...reveal(0)}
          >
            Not sure what you need?
          </motion.h2>
          <motion.p
            className="mx-auto mt-5 max-w-md font-ui text-sm leading-relaxed text-linen/70"
            {...reveal(0.08)}
          >
            Describe the space and we will help you work out the right approach. Weekdays, 8am to 5pm.
          </motion.p>
          <motion.div className="mt-8" {...reveal(0.16)}>
            <Link
              to="/contact"
              className="btn-brass"
            >
              Send an enquiry <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
