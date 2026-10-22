import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { business } from '../config/business'

const BASE = '/EstatePros-Carpet-Cleaning'

export default function Hero() {
  const shouldReduce = useReducedMotion()

  const fadeUp = (delay = 0) => shouldReduce
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      }

  return (
    <section
      className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden"
      aria-label="Hero - Beautiful spaces. Brilliantly cared for."
    >
      {/* Hero image */}
      <div className="absolute inset-0">
        <img
          src={`${BASE}/images/estatepros-hero-living-room.webp`}
          alt="Bright, modern Calgary living room with light neutral carpet and floor-to-ceiling windows"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        {/* Cinematic deep-teal scrim */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(16,44,51,0.90) 0%, rgba(16,44,51,0.60) 40%, rgba(22,35,40,0.30) 75%, rgba(22,35,40,0.10) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 pt-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            className="font-ui text-xs font-600 tracking-[0.22em] uppercase text-ivory/60 mb-5"
            {...fadeUp(0.05)}
          >
            EstatePros &middot; Calgary
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="font-heading font-800 text-ivory leading-none mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', letterSpacing: '-0.03em' }}
            {...fadeUp(0.15)}
          >
            Beautiful spaces.
            <br />
            <em
              className="font-serif not-italic"
              style={{
                fontStyle: 'italic',
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: '1.04em',
                color: 'rgba(247,245,240,0.92)',
              }}
            >
              Brilliantly
            </em>{' '}
            cared for.
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            className="font-ui text-ivory/75 leading-relaxed mb-10 max-w-xl"
            style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}
            {...fadeUp(0.25)}
          >
            Thoughtful carpet care for the spaces you live and work in. Tell us what needs attention
            and we&rsquo;ll help you take the next step.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            {...fadeUp(0.35)}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-champagne text-ink font-heading font-700 text-sm rounded-full transition-all duration-300 hover:bg-champagne-dark hover:shadow-lg"
              style={{ letterSpacing: '0.03em' }}
            >
              {business.ctaQuoteLabel}
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-ivory/50 text-ivory font-heading font-600 text-sm rounded-full transition-all duration-300 hover:bg-ivory/10 hover:border-ivory/80"
              style={{ letterSpacing: '0.03em' }}
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Floating cards */}
        <motion.div
          className="absolute right-6 bottom-16 hidden md:flex flex-col gap-3"
          initial={shouldReduce ? {} : { opacity: 0, x: 20 }}
          animate={shouldReduce ? {} : { opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Card 1: label */}
          <div className="float-card px-5 py-3.5 flex items-center gap-3">
            <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center">
              <Sparkles size={15} className="text-teal" />
            </div>
            <div>
              <p className="font-heading font-700 text-teal text-sm leading-tight">Carpet care, considered</p>
              <p className="font-ui text-stone text-xs mt-0.5">Calgary&apos;s thoughtful clean</p>
            </div>
          </div>

          {/* Card 2: image thumbnail */}
          <div className="float-card overflow-hidden w-36 h-24">
            <img
              src={`${BASE}/images/estatepros-carpet-wand-detail.webp`}
              alt="Carpet extraction wand close-up"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5"
        initial={shouldReduce ? {} : { opacity: 0 }}
        animate={shouldReduce ? {} : { opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-ivory/40" />
        <span className="font-ui text-[10px] tracking-widest uppercase text-ivory/40">Scroll</span>
      </motion.div>
    </section>
  )
}
