import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Lock } from 'lucide-react'
import { business, BASE } from '../config/business'
import ProcessTimeline from '../components/ProcessTimeline'
import PageHero from '../components/PageHero'

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
      <PageHero
        eyebrow="What we do"
        title={<>Services built around<br /><span className="accent-italic">your space</span></>}
        intro="Enquire about any of the work below. We confirm what is right for your particular space and situation before anything is booked in."
        image={`${BASE}/images/technician-equipment-setup.webp`}
        imageAlt="Cleaning technician wheeling extraction equipment through a home entryway"
      />

      {/* Editorial service blocks - alternating sides, not a repeated card grid */}
      <section className="section-y px-4 sm:px-6 lg:px-8" aria-label="Services offered">
        <div className="max-w-7xl mx-auto space-y-5">
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
                    {/* inset-3 leaves the card's own white showing as a mat,
                        so the photo is framed rather than bleeding to the edge */}
                    <div className="absolute inset-3 overflow-hidden rounded-3xl bg-bone-deep">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    {!service.confirmed && (
                      <div className="absolute left-8 top-8">
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
        <div className="panel-deep max-w-7xl mx-auto px-5 sm:px-12 py-11 sm:py-14 text-center">
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
