import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { business } from '../config/business'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

export default function GalleryPage() {
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    document.title = 'Before & After | EstatePros Carpet Cleaning Calgary'
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
      {/* Header */}
      <section className="panel-deep relative overflow-hidden mx-4 sm:mx-6 lg:mx-8 mt-4 mb-8 py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="font-ui text-xs font-600 tracking-[0.2em] uppercase text-champagne mb-4"
            initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            A Closer Look
          </motion.p>
          <motion.h1
            className="font-heading text-ivory leading-[1.08]"
            style={{ fontWeight: 500, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.01em' }}
            initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Before and after
          </motion.h1>
          <motion.p
            className="mt-4 font-ui text-ivory/65 max-w-lg leading-relaxed text-sm"
            initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            Drag the handle, or focus it and use the arrow keys, to move between the before and
            after state of each scene.
          </motion.p>
        </div>
      </section>

      {/* Disclosure, then the sliders */}
      <section className="px-4 sm:px-6 lg:px-8 py-4" aria-labelledby="comparisons-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="comparisons-heading" className="sr-only">
            Before and after comparisons
          </h2>

          <div
            className="rounded-4xl border border-champagne/35 bg-champagne/10 px-6 py-4"
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

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="panel-deep max-w-7xl mx-auto px-6 sm:px-12 py-16 text-center">
          <motion.h2
            className="font-heading text-ivory leading-[1.1]"
            style={{ fontWeight: 500, fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
            {...reveal(0)}
          >
            Interested in what we can do for your space?
          </motion.h2>
          <motion.div className="mt-8" {...reveal(0.1)}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-champagne px-8 py-4 font-sans text-sm text-ink transition-all duration-300 hover:bg-champagne-dark"
              style={{ fontWeight: 600, letterSpacing: '0.02em' }}
            >
              Get in touch <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
