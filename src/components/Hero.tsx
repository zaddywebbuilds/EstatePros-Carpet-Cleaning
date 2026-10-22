import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { business } from '../config/business'

const BASE = '/EstatePros-Carpet-Cleaning'

export default function Hero() {
  const shouldReduce = useReducedMotion()

  const fadeUp = (delay = 0) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
        }

  return (
    <section
      className="relative px-4 sm:px-6 lg:px-8 pt-10 pb-8"
      aria-label="Beautiful spaces, brilliantly cared for"
    >
      {/* Ambient wash behind the surfaces */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[60%]"
        style={{
          background:
            'radial-gradient(ellipse 65% 60% at 50% 0%, rgba(220,236,233,0.5) 0%, rgba(242,237,228,0) 72%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div className="flex justify-center" {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 font-ui text-xs font-600 tracking-[0.14em] uppercase text-stone shadow-surface backdrop-blur-sm border border-white/70">
            <MapPin size={12} strokeWidth={2.5} className="text-champagne-dark" />
            Serving Calgary, Alberta
          </span>
        </motion.div>

        <motion.h1 className="mt-7 editorial-heading text-balance" {...fadeUp(0.08)}>
          Beautiful spaces.
          <br />
          <span style={{ fontStyle: 'italic', color: 'var(--champagne)' }}>Brilliantly</span>{' '}
          cared for.
        </motion.h1>

        <motion.p
          className="mx-auto mt-5 max-w-xl font-ui leading-relaxed text-stone"
          style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.0625rem)' }}
          {...fadeUp(0.16)}
        >
          Thoughtful carpet care for the spaces you live and work in. Tell us what needs
          attention and we&rsquo;ll help you take the next step.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          {...fadeUp(0.24)}
        >
          <Link to="/contact" className="btn-primary">
            {business.ctaQuoteLabel}
            <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
          <Link to="/services" className="btn-ghost">
            Explore Services
          </Link>
        </motion.div>
      </div>

      {/* Single anchoring image, held on a surface */}
      <motion.div
        className="relative z-10 mx-auto mt-12 max-w-6xl overflow-hidden rounded-5xl border-[6px] border-white bg-white shadow-surface-lg"
        initial={shouldReduce ? {} : { opacity: 0, y: 32 }}
        animate={shouldReduce ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={`${BASE}/images/luxury-living-room.webp`}
          alt="Open Calgary living room with a sectional sofa, stone fireplace and pale wall-to-wall carpet"
          className="aspect-[16/8] w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>
    </section>
  )
}
