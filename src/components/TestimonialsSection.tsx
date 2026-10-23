import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Star, Quote } from 'lucide-react'
import { business } from '../config/business'

function GoogleMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

export default function TestimonialsSection() {
  const shouldReduce = useReducedMotion()
  const reviewWord = business.googleReviewCount === 1 ? 'review' : 'reviews'

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-12 text-center"
          initial={shouldReduce ? {} : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '140px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-eyebrow section-eyebrow-center mb-5">Customer Feedback</p>
          <h2 id="reviews-heading" className="section-heading">
            In our customers&rsquo; words
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-5">
          {/* Rating summary, stated exactly as Google has it */}
          <motion.div
            className="surface flex flex-col items-center justify-center px-7 py-10 text-center md:col-span-2"
            initial={shouldReduce ? {} : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '140px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <GoogleMark size={30} />
            <p
              className="mt-5 font-heading leading-none text-forest"
              style={{ fontSize: '3.4rem', fontWeight: 400 }}
            >
              {business.googleRating.toFixed(1)}
            </p>
            <div className="mt-3 flex gap-1" role="img" aria-label={`${business.googleRating} out of 5 on Google`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-brass text-brass" />
              ))}
            </div>
            <p className="mt-4 font-ui text-xs uppercase tracking-[0.16em] text-stone">
              {business.googleReviewCount} Google {reviewWord}
            </p>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-6"
            >
              See the profile
              <ExternalLink size={13} strokeWidth={2.5} />
            </a>
          </motion.div>

          {/* The review itself */}
          {business.reviews.map((review, i) => (
            <motion.figure
              key={review.author}
              className="surface flex flex-col justify-between px-8 py-10 md:col-span-3"
              initial={shouldReduce ? {} : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '140px' }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <Quote size={26} className="mb-5 text-brass" />
                <blockquote
                  className="font-heading leading-[1.35] text-forest"
                  style={{ fontSize: 'clamp(1.3rem, 2.6vw, 1.85rem)', fontWeight: 400 }}
                >
                  &ldquo;{review.body}&rdquo;
                </blockquote>
              </div>

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

        <p className="mt-8 text-center font-ui text-xs italic text-stone">
          Reviews are taken from the company&rsquo;s Google Business Profile and quoted as written.
          Nothing here is edited, commissioned or invented.
        </p>
      </div>
    </section>
  )
}
