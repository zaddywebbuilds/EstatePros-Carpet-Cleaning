import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Star, ExternalLink, ArrowRight, Quote } from 'lucide-react'
import { business } from '../config/business'
import PageHero from '../components/PageHero'

function GoogleMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

export default function ReviewsPage() {
  const shouldReduce = useReducedMotion()
  const reviewWord = business.googleReviewCount === 1 ? 'review' : 'reviews'

  useEffect(() => {
    document.title = `Reviews | ${business.name}`
  }, [])

  const reveal = (delay = 0) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '140px' },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  })

  return (
    <>
      <PageHero
        eyebrow="Customer feedback"
        title={<>What our customers<br /><span className="accent-italic">actually said</span></>}
        intro="Everything below comes straight from the company's Google Business Profile, quoted as written. Nothing here is commissioned, edited or invented."
      />

      <section className="section-y px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Rating summary */}
          <motion.div
            className="surface mb-6 flex flex-col items-center gap-6 px-8 py-10 text-center sm:flex-row sm:justify-center sm:gap-12 sm:text-left"
            {...reveal(0)}
          >
            <div className="flex flex-col items-center">
              <GoogleMark size={34} />
              <p
                className="mt-4 font-heading leading-none text-forest"
                style={{ fontSize: '3.6rem', fontWeight: 400 }}
              >
                {business.googleRating.toFixed(1)}
              </p>
              <div
                className="mt-3 flex gap-1"
                role="img"
                aria-label={`${business.googleRating} out of 5 on Google`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-brass text-brass" />
                ))}
              </div>
            </div>

            <div className="max-w-sm">
              <p className="font-heading text-xl text-forest" style={{ fontWeight: 500 }}>
                {business.googleReviewCount} Google {reviewWord}
              </p>
              <p className="mt-3 font-ui text-sm leading-relaxed text-stone">
                A young profile with a perfect score. We would rather show you the one honest
                review than pad the page out with testimonials nobody wrote.
              </p>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-5"
              >
                See it on Google <ExternalLink size={13} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>

          {/* The reviews themselves */}
          <div className="grid gap-5">
            {business.reviews.map((review, i) => (
              <motion.figure key={review.author} className="surface px-8 py-10 sm:px-10" {...reveal(0.08 + i * 0.08)}>
                <Quote size={28} className="mb-5 text-brass" />
                <blockquote
                  className="font-heading leading-[1.35] text-forest"
                  style={{ fontSize: 'clamp(1.35rem, 3vw, 2.1rem)', fontWeight: 400 }}
                >
                  &ldquo;{review.body}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-forest/10 pt-6">
                  <div>
                    <p className="font-ui text-sm text-forest" style={{ fontWeight: 600 }}>
                      {review.author}
                    </p>
                    <p className="mt-0.5 font-ui text-xs text-stone">
                      {review.meta} &middot; {review.when}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5" role="img" aria-label={`${review.rating} out of 5 stars`}>
                      {Array.from({ length: review.rating }).map((_, s) => (
                        <Star key={s} size={13} className="fill-brass text-brass" />
                      ))}
                    </div>
                    <GoogleMark size={15} />
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          {/* Leave one */}
          <motion.div
            className="mt-6 rounded-4xl border border-forest/10 bg-sage/45 px-8 py-9 text-center"
            {...reveal(0.2)}
          >
            <p className="font-heading text-xl text-forest" style={{ fontWeight: 500 }}>
              Had a good experience?
            </p>
            <p className="mx-auto mt-3 max-w-md font-ui text-sm leading-relaxed text-stone">
              A Google review helps the next person in North York decide. It takes a minute and we
              read every one.
            </p>
            <a
              href={business.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7"
            >
              Leave a Google review <ExternalLink size={13} strokeWidth={2.5} />
            </a>
          </motion.div>

          <p className="mt-8 text-center font-ui text-xs italic leading-relaxed text-stone">
            We do not publish testimonials without permission, and we never write or commission
            reviews for marketing.
          </p>

          <div className="mt-10 text-center">
            <Link to="/contact" className="btn-brass">
              {business.ctaQuoteLabel} <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
