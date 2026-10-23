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
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.75,
            delay,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          },
        }

  return (
    <section className="px-4 pb-6 pt-5 sm:px-6 lg:px-8" aria-labelledby="hero-heading">
      {/* Type and photograph sit side by side. Nothing is set over the
          picture, so the headline keeps full contrast on the page ground. */}
      <div className="mx-auto grid max-w-7xl items-center gap-7 lg:grid-cols-[1fr_0.92fr] lg:gap-14">

        <div>
          <motion.div className="flex flex-wrap items-center gap-2 sm:gap-3" {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-forest/12 bg-white/70 px-3 py-2 font-ui text-[0.6rem] uppercase tracking-[0.1em] text-stone backdrop-blur-sm sm:px-4 sm:text-[0.68rem] sm:tracking-[0.18em]">
              <MapPin size={12} strokeWidth={2.5} className="text-brass-dark" />
              {/* province is dropped on a phone so this pill and the open
                  status share one line instead of wrapping to two */}
              {business.city}
              <span className="hidden sm:inline">, {business.province}</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-forest/12 bg-white/70 px-3 py-2 backdrop-blur-sm sm:px-4">
              <OpenStatus />
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="mt-7 font-heading leading-[1.02] text-forest text-balance"
            style={{
              fontSize: 'clamp(2.05rem, 5.4vw, 4.6rem)',
              fontWeight: 400,
              letterSpacing: '-0.032em',
            }}
            {...fadeUp(0.08)}
          >
            Thorough work.
            <br />
            <span className="accent-italic">Every room.</span> Every time.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-lg font-ui leading-[1.7] text-stone"
            style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.08rem)' }}
            {...fadeUp(0.16)}
          >
            Carpet, upholstery and deep cleaning for homes and businesses across North York
            and Toronto. Tell us what needs attention and we&rsquo;ll take it from there.
          </motion.p>

          <motion.div className="mt-7 flex flex-wrap items-center gap-3" {...fadeUp(0.24)}>
            <Link to="/contact" className="btn-primary">
              {business.ctaQuoteLabel}
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
            <a href={`tel:${business.phone}`} className="btn-ghost">
              <Phone size={14} strokeWidth={2.5} />
              {business.phoneDisplay}
            </a>
          </motion.div>

          {/* Google rating, on the page rather than over the photograph */}
          <motion.a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 border-t border-forest/10 pt-6 transition-opacity hover:opacity-70"
            {...fadeUp(0.32)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="font-heading text-base text-forest" style={{ fontWeight: 600 }}>
              {business.googleRating.toFixed(1)}
            </span>
            <span className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="fill-brass text-brass" />
              ))}
            </span>
            <span className="font-ui text-xs text-stone">
              {business.googleReviewCount} review on Google
            </span>
          </motion.a>
        </div>

        <motion.div
          className="plate rounded-5xl shadow-surface-lg"
          initial={shouldReduce ? {} : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={`${BASE}/images/hero-living-room.webp`}
            alt="Bright living room with pale wall-to-wall carpet and daylight through tall windows"
            className="aspect-[4/3] w-full object-cover object-center lg:aspect-[5/6]"
            width={768}
            height={512}
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  )
}
