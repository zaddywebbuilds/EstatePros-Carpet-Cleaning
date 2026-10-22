import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { business } from '../config/business'

const BASE = '/EstatePros-Carpet-Cleaning'

export default function ClosingCTA() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      className="relative py-32 px-4 sm:px-6 overflow-hidden"
      aria-labelledby="closing-cta-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={`${BASE}/images/estatepros-carpet-wand-detail.webp`}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(16,44,51,0.92) 0%, rgba(16,44,51,0.75) 50%, rgba(16,44,51,0.50) 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <motion.p
            className="font-ui text-xs font-600 tracking-[0.2em] uppercase text-ivory/50 mb-5"
            initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Ready to Begin
          </motion.p>

          <motion.h2
            id="closing-cta-heading"
            className="font-heading font-800 text-ivory leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em' }}
            initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Ready to feel the<br />
            <em
              className="font-serif"
              style={{ fontStyle: 'italic', fontWeight: 300, color: '#DCECE9' }}
            >
              difference
            </em>{' '}
            in your space?
          </motion.h2>

          <motion.p
            className="font-ui text-ivory/70 leading-relaxed mb-10 max-w-lg"
            style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}
            initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            Tell us about your carpets and we&rsquo;ll help you plan the next step.
            No obligation, no pressure.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-champagne text-ink font-heading font-700 text-sm rounded-full hover:bg-champagne-dark transition-colors shadow-lg"
              style={{ letterSpacing: '0.03em' }}
            >
              {business.ctaQuoteLabel}
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
