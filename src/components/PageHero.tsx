import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  eyebrow: string
  title: ReactNode
  intro?: string
  /** Optional plate on the right. Without one the type runs full width. */
  image?: string
  imageAlt?: string
}

/**
 * The banner every inner page opens with, so /services and /privacy are
 * recognisably the same site rather than each inventing a header.
 */
export default function PageHero({ eyebrow, title, intro, image, imageAlt }: Props) {
  const shouldReduce = useReducedMotion()

  const enter = (delay = 0) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  })

  return (
    <section className="px-4 pb-6 pt-4 sm:px-6 lg:px-8">
      <div className="panel-deep mx-auto max-w-7xl px-6 py-16 sm:px-12 lg:py-20">
        <div className={`grid items-center gap-12 ${image ? 'lg:grid-cols-2' : ''}`}>
          <div>
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
              className="hidden overflow-hidden rounded-4xl border-[5px] border-linen/10 shadow-lift lg:block"
              style={{ aspectRatio: '4 / 3' }}
              initial={shouldReduce ? {} : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
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
