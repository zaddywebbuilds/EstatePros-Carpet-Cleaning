import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Star } from 'lucide-react'
import { business } from '../config/business'

export default function TestimonialsSection() {
  const shouldReduce = useReducedMotion()

  return (
    <section className="py-8 px-4 sm:px-6" aria-labelledby="reviews-heading">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '240px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-eyebrow mb-5">Customer Feedback</p>
          <h2
            id="reviews-heading"
            className="font-heading font-600 text-teal leading-tight mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.01em' }}
          >
            What our customers are saying
          </h2>
          <p className="body-copy mb-10 max-w-lg mx-auto">
            We let our customers speak for us. Find genuine reviews from Calgary homeowners and
            businesses on our Google Business Profile.
          </p>

          {/* Google stars row */}
          <div className="flex items-center justify-center gap-2 mb-8" aria-label="Google Reviews">
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex gap-1" role="img" aria-label="Google Reviews">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-ui text-sm text-stone">on Google</span>
          </div>

          <a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-teal text-ivory font-heading font-600 text-sm rounded-full hover:bg-teal-light transition-colors"
            style={{ letterSpacing: '0.03em' }}
          >
            Read customer reviews on Google
            <ExternalLink size={14} strokeWidth={2} />
          </a>

          <p className="mt-6 font-ui text-xs text-stone italic">
            Reviews are sourced from Google. We do not publish testimonials without permission.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
