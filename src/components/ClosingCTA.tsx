import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { business, BASE } from '../config/business'
import OpenStatus from './OpenStatus'

export default function ClosingCTA() {
  const shouldReduce = useReducedMotion()

  const reveal = (delay = 0) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '140px' },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  })

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="closing-cta-heading">
      <div className="panel-deep mx-auto max-w-7xl">
        {/* Photograph bleeds in from the right and fades under the type */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, #000 60%)',
            maskImage: 'linear-gradient(to right, transparent, #000 60%)',
          }}
        >
          <img
            src={`${BASE}/images/luxury-living-room.webp`}
            alt=""
            className="h-full w-full object-cover opacity-30"
            loading="lazy"
          />
        </div>

        <div className="px-6 py-20 sm:px-12 lg:py-24">
          <div className="max-w-2xl">
            <motion.p className="section-eyebrow mb-6 !text-brass" {...reveal(0)}>
              Ready to Begin
            </motion.p>

            <motion.h2
              id="closing-cta-heading"
              className="mb-7 font-heading leading-[1.06] text-linen"
              style={{ fontSize: 'clamp(2.1rem, 4.6vw, 3.6rem)', fontWeight: 400, letterSpacing: '-0.028em' }}
              {...reveal(0.07)}
            >
              Let&rsquo;s get your place
              <br />
              <span className="accent-italic">properly clean</span>.
            </motion.h2>

            <motion.p
              className="mb-10 max-w-lg font-ui leading-[1.7] text-linen/70"
              style={{ fontSize: 'clamp(0.94rem, 1.5vw, 1.06rem)' }}
              {...reveal(0.14)}
            >
              Tell us what needs doing and we&rsquo;ll walk you through the options. No obligation,
              no pressure, and a straight answer about what the work involves.
            </motion.p>

            <motion.div className="flex flex-wrap items-center gap-3" {...reveal(0.2)}>
              <Link to="/contact" className="btn-brass">
                {business.ctaQuoteLabel}
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
              <a href={`tel:${business.phone}`} className="btn-outline-light">
                <Phone size={14} strokeWidth={2.5} />
                {business.phoneDisplay}
              </a>
            </motion.div>

            <motion.div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2" {...reveal(0.26)}>
              <OpenStatus tone="dark" />
              <span className="font-ui text-xs text-linen/50">{business.businessHours}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
