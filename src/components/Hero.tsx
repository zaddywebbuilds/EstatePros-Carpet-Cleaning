import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MapPin, Phone, Star } from 'lucide-react'
import { business, BASE } from '../config/business'
import OpenStatus from './OpenStatus'

export default function Hero() {
  const shouldReduce = useReducedMotion()

  const fadeUp = (delay = 0) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          },
        }

  return (
    <section className="px-4 pb-6 pt-4 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
      <div className="relative mx-auto max-w-7xl">
        {/* The image is the frame: type sits on it rather than beside it. */}
        <div className="relative overflow-hidden rounded-5xl bg-forest-deep shadow-panel">
          <motion.img
            src={`${BASE}/images/hero-living-room.webp`}
            alt="Bright living room with pale wall-to-wall carpet and daylight through tall windows"
            className="absolute inset-0 h-full w-full object-cover object-center"
            width={768}
            height={512}
            fetchPriority="high"
            decoding="async"
            initial={shouldReduce ? {} : { scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Scrim: dark enough at the bottom-left for the headline to hold
              AAA contrast, clear at the top-right so the room still reads. */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(7,25,15,0.93) 0%, rgba(7,25,15,0.72) 32%, rgba(14,42,35,0.32) 62%, rgba(14,42,35,0.18) 100%)',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 55% 85% at 110% 0%, rgba(190,155,94,0.26) 0%, rgba(14,42,35,0) 62%)',
            }}
          />

          <div className="relative flex min-h-[560px] flex-col justify-end px-6 pb-10 pt-24 sm:min-h-[640px] sm:px-10 sm:pb-12 lg:min-h-[720px] lg:px-16 lg:pb-16">
            <motion.div className="flex flex-wrap items-center gap-3" {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 rounded-full border border-linen/25 bg-forest-deep/50 px-4 py-2 font-ui text-[0.68rem] uppercase tracking-[0.18em] text-linen/85 backdrop-blur-md">
                <MapPin size={12} strokeWidth={2.5} className="text-brass" />
                {business.city}, {business.province}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-linen/25 bg-forest-deep/50 px-4 py-2 backdrop-blur-md">
                <OpenStatus tone="dark" />
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="mt-7 max-w-3xl font-heading leading-[1.02] text-linen text-balance"
              style={{
                fontSize: 'clamp(2.6rem, 6.4vw, 5.2rem)',
                fontWeight: 400,
                letterSpacing: '-0.032em',
              }}
              {...fadeUp(0.1)}
            >
              Thorough work.
              <br />
              <span className="accent-italic">Every room.</span> Every time.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl font-ui leading-[1.7] text-linen/75"
              style={{ fontSize: 'clamp(0.97rem, 1.5vw, 1.125rem)' }}
              {...fadeUp(0.18)}
            >
              Carpet, upholstery and deep cleaning for homes and businesses across North York
              and Toronto. Tell us what needs attention and we&rsquo;ll take it from there.
            </motion.p>

            <motion.div className="mt-9 flex flex-wrap items-center gap-3" {...fadeUp(0.26)}>
              <Link to="/contact" className="btn-brass">
                {business.ctaQuoteLabel}
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
              <a href={`tel:${business.phone}`} className="btn-outline-light">
                <Phone size={14} strokeWidth={2.5} />
                {business.phoneDisplay}
              </a>
            </motion.div>
          </div>

          {/* Google rating, pinned to the open corner of the frame */}
          <motion.a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-5 top-5 hidden items-center gap-3 rounded-2xl border border-linen/20 bg-forest-deep/55 px-4 py-3 backdrop-blur-md transition-colors hover:bg-forest-deep/75 sm:flex lg:right-8 lg:top-8"
            initial={shouldReduce ? {} : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="leading-tight">
              <span className="flex items-center gap-1.5">
                <span className="font-heading text-base text-linen" style={{ fontWeight: 600 }}>
                  {business.googleRating.toFixed(1)}
                </span>
                <span className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={11} className="fill-brass text-brass" />
                  ))}
                </span>
              </span>
              <span className="font-ui text-[0.65rem] uppercase tracking-[0.14em] text-linen/60">
                on Google
              </span>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
