import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Lock } from 'lucide-react'
import { business } from '../config/business'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

const BASE = '/EstatePros-Carpet-Cleaning'

export default function ServicesPage() {
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    document.title = 'Services | EstatePros Carpet Cleaning Calgary'
  }, [])

  const reveal = (delay = 0) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-60px' },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
        }

  return (
    <>
      {/* Header - asymmetric, image on one side so it reads differently to the home hero */}
      <section className="px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <div className="panel-deep relative overflow-hidden max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_1fr] items-stretch">
            <div className="px-6 sm:px-12 py-14 lg:py-20">
              <motion.p
                className="font-ui text-xs font-600 tracking-[0.2em] uppercase text-champagne mb-4"
                initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                What We Do
              </motion.p>
              <motion.h1
                className="font-heading text-ivory leading-[1.08]"
                style={{ fontWeight: 500, fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.01em' }}
                initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                Services built around
                <br />
                <span style={{ fontStyle: 'italic', color: '#DCECE9' }}>your space</span>
              </motion.h1>
              <motion.p
                className="mt-6 font-ui text-ivory/70 max-w-md leading-relaxed"
                style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}
                initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
              >
                Enquire about any of the work below. We&rsquo;ll confirm what&rsquo;s available for your
                specific space and situation before anything is booked.
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
                    'linear-gradient(to right, rgba(16,44,51,0.95) 0%, rgba(16,44,51,0.35) 45%, rgba(16,44,51,0) 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial service blocks - alternating sides, not a repeated card grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-4" aria-label="Services offered">
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
                  className={`grid md:grid-cols-2 items-stretch ${
                    flipped ? 'md:[&>*:first-child]:order-2' : ''
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
                      className="font-heading text-teal"
                      style={{ fontWeight: 600, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
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
                            className="inline-flex items-center gap-1.5 font-ui text-sm font-600 text-teal transition-colors hover:text-champagne-dark"
                          >
                            Learn more <ArrowRight size={13} strokeWidth={2.5} />
                          </Link>
                          <Link
                            to="/contact"
                            className="font-ui text-sm font-600 text-champagne-dark transition-colors hover:text-teal"
                          >
                            Enquire
                          </Link>
                        </>
                      ) : (
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 font-ui text-sm font-600 text-champagne-dark transition-colors hover:text-teal"
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

      {/* Before / after sliders */}
      <section className="px-4 sm:px-6 lg:px-8 py-10" aria-labelledby="comparisons-heading">
        <div className="max-w-7xl mx-auto">
          <motion.div className="max-w-2xl" {...reveal(0)}>
            <p className="section-eyebrow mb-3">See The Difference</p>
            <h2 id="comparisons-heading" className="section-heading text-teal">
              Drag to compare
            </h2>
            <p className="mt-4 font-ui text-sm leading-relaxed text-stone">
              Drag the handle, or focus it and use the arrow keys, to move between the before and
              after state of each scene.
            </p>
          </motion.div>

          <div
            className="mt-8 rounded-4xl border border-champagne/35 bg-champagne/10 px-6 py-4"
            role="note"
          >
            <p className="font-ui text-xs leading-relaxed text-ink/80">
              <strong className="font-600">About these images:</strong> the comparisons below are
              illustrative visualizations created to show the kind of change cleaning can make. They
              are not photographs of completed EstatePros jobs, and they are not customer results.
              They will be replaced with real matched pairs once project photography is available.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {business.comparisons.map((c, i) => (
              <motion.div key={c.id} {...reveal(i * 0.06)}>
                <BeforeAfterSlider
                  title={c.title}
                  caption={c.caption}
                  beforeSrc={c.before}
                  afterSrc={c.after}
                  beforeAlt={c.beforeAlt}
                  afterAlt={c.afterAlt}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="panel-deep max-w-7xl mx-auto px-6 sm:px-12 py-16 text-center">
          <motion.h2
            className="font-heading text-ivory leading-[1.1]"
            style={{ fontWeight: 500, fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
            {...reveal(0)}
          >
            Not sure what you need?
          </motion.h2>
          <motion.p
            className="mx-auto mt-5 max-w-md font-ui text-sm leading-relaxed text-ivory/70"
            {...reveal(0.08)}
          >
            Describe your space and we&rsquo;ll help you work out the right approach.
          </motion.p>
          <motion.div className="mt-8" {...reveal(0.16)}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-champagne px-8 py-4 font-sans text-sm text-ink transition-all duration-300 hover:bg-champagne-dark"
              style={{ fontWeight: 600, letterSpacing: '0.02em' }}
            >
              Send an enquiry <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
