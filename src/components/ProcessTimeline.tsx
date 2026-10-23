import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { business } from '../config/business'

export default function ProcessTimeline() {
  const steps = business.process.steps
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const shouldReduce = useReducedMotion()

  // Roving tabindex: arrows move selection, Home/End jump to the ends.
  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = steps.length - 1
    let next: number | null = null
    if (e.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (e.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = last
    if (next !== null) {
      e.preventDefault()
      setActive(next)
      tabRefs.current[next]?.focus()
    }
  }

  return (
    <section className="section-y px-4 sm:px-6 lg:px-8" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <p className="section-eyebrow mb-3">How The Work Goes</p>
          <h2 id="process-heading" className="section-heading text-forest">
            The cleaning process
          </h2>
        </div>

        <div className="surface mt-8 p-6 sm:p-10">
          {/* Step selector */}
          <div
            role="tablist"
            aria-label="Cleaning process steps"
            aria-orientation="horizontal"
            onKeyDown={onKeyDown}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {steps.map((step, i) => {
              const selected = i === active
              return (
                <button
                  key={step.id}
                  ref={(el) => { tabRefs.current[i] = el }}
                  role="tab"
                  id={`process-tab-${step.id}`}
                  aria-selected={selected}
                  aria-controls={`process-panel-${step.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`group rounded-3xl border px-5 py-5 text-left transition-all duration-300 ${
                    selected
                      ? 'border-forest/20 bg-forest text-linen shadow-surface'
                      : 'border-white/70 bg-white/60 text-forest hover:bg-white'
                  }`}
                >
                  <span
                    className={`font-ui text-xs font-600 tracking-[0.18em] ${
                      selected ? 'text-brass' : 'text-stone'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="mt-2 block font-heading text-xl leading-snug"
                    style={{ fontWeight: 600 }}
                  >
                    {step.name}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Detail for the selected step */}
          {steps.map((step, i) => (
            <div
              key={step.id}
              role="tabpanel"
              id={`process-panel-${step.id}`}
              aria-labelledby={`process-tab-${step.id}`}
              hidden={i !== active}
              tabIndex={0}
              className="mt-7 rounded-3xl bg-sage/45 px-6 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brass"
            >
              <motion.p
                key={active}
                className="font-ui leading-relaxed text-ink/85"
                style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.0625rem)' }}
                initial={shouldReduce ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {step.detail}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
