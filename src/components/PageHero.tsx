import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

type Props = {
  eyebrow: string
  title: ReactNode
  intro?: string
  /** Optional plate on the right. Without one the type runs full width. */
  image?: string
  imageAlt?: string
  /** Optional "back to the index" link above the eyebrow. */
  backTo?: { to: string; label: string }
}

/**
 * The banner every inner page opens with, so /services and /privacy are
 * recognisably the same site rather than each inventing a header.
 */
export default function PageHero({ eyebrow, title, intro, image, imageAlt, backTo }: Props) {
  const shouldReduce = useReducedMotion()

  const enter = (delay = 0) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  })

  return (
    <section className="px-4 pb-6 pt-4 sm:px-6 lg:px-8">
      <div className="panel-deep mx-auto max-w-7xl px-5 py-10 sm:px-12 sm:py-12 lg:py-14">
        <div className={`grid items-center gap-12 ${image ? 'lg:grid-cols-2' : ''}`}>
          <div>
            {backTo && (
              <motion.div {...enter(0)}>
                <Link
                  to={backTo.to}
                  className="mb-7 inline-flex items-center gap-1.5 font-ui text-xs text-linen/60 transition-colors hover:text-linen"
                >
                  <ArrowLeft size={13} /> {backTo.label}
                </Link>
              </motion.div>
            )}
            <motion.p className="section-eyebrow mb-6 !text-brass" {...enter(0)}>
              {eyebrow}
            </motion.p>
            <motion.h1
              className="font-heading leading-[1.05] text-linen"
              style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 4.1rem)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
              }}
              {...enter(0.08)}
            >
              {title}
            </motion.h1>
            {intro && (
              <motion.p
                className="mt-7 max-w-lg font-ui leading-[1.7] text-linen/65"
                style={{ fontSize: 'clamp(0.92rem, 1.5vw, 1.04rem)' }}
                {...enter(0.16)}
              >
                {intro}
              </motion.p>
            )}
          </div>

          {image && (
            <motion.div
              className="plate hidden rounded-4xl shadow-lift lg:block"
              style={{ aspectRatio: '4 / 3' }}
              initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={image}
                alt={imageAlt ?? ''}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
