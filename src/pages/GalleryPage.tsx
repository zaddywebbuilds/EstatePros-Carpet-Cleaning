import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { business } from '../config/business'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import PageHero from '../components/PageHero'

export default function GalleryPage() {
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    document.title = `Before & After | ${business.name}`
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
        eyebrow="A closer look"
        title={<>Before and <span className="accent-italic">after</span></>}
        intro="Drag the handle, or focus it and use the arrow keys, to move between the before and after state of each scene."
      />

      {/* Disclosure, then the sliders */}
      <section className="section-y px-4 sm:px-6 lg:px-8" aria-labelledby="comparisons-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="comparisons-heading" className="sr-only">
            Before and after comparisons
          </h2>

          <div
            className="rounded-4xl border border-brass/35 bg-brass/10 px-6 py-4"
            role="note"
          >
            <p className="font-ui text-xs leading-relaxed text-ink/80">
              <strong className="font-600">About these images:</strong> the comparisons below are
              illustrative visualizations created to show the kind of change cleaning can make. They
              are not photographs of completed Jose Cardoso Cleaning Service jobs, and they are not customer results.
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
      <section className="section-y px-4 sm:px-6 lg:px-8">
        <div className="panel-deep max-w-7xl mx-auto px-6 sm:px-12 py-16 text-center">
          <motion.h2
            className="font-heading text-linen leading-[1.1]"
            style={{ fontWeight: 400, fontSize: 'clamp(1.9rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
            {...reveal(0)}
          >
            Interested in what we can do for your space?
          </motion.h2>
          <motion.div className="mt-8" {...reveal(0.1)}>
            <Link to="/contact" className="btn-brass">
              Get in touch <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
