import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'
import { BASE } from '../config/business'

export default function EditorialAbout() {
  const shouldReduce = useReducedMotion()

  const reveal = (delay = 0) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '160px' },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  })

  return (
    <section className="section-y px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Two plates, offset, so the column has depth rather than one flat
            photo. The margin keeps the overhanging square clear of the next
            section now that the gap between sections is tighter. */}
        <div className="relative order-2 mb-12 sm:mb-14 lg:order-1 lg:mb-10">
          <motion.div
            className="plate relative rounded-5xl shadow-surface-lg"
            style={{ aspectRatio: '4 / 5' }}
            initial={shouldReduce ? {} : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '160px' }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={`${BASE}/images/technician-extraction.webp`}
              alt="Cleaning technician using extraction equipment on light carpet in a bright interior"
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
            <span
              className="absolute bottom-6 left-5 font-ui text-[0.6rem] uppercase tracking-[0.24em] text-linen/70"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              aria-hidden="true"
            >
              Caledonia Rd &bull; North York
            </span>
          </motion.div>

          <motion.div
            className="plate absolute -bottom-10 -right-4 hidden w-44 rounded-4xl shadow-lift sm:block lg:-right-10 lg:w-56"
            style={{ aspectRatio: '1 / 1' }}
            initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={`${BASE}/images/carpet-wand-detail.webp`}
              alt="Cleaning wand making contact with light textured carpet fibres"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* The one Google review, lifted out as a pull quote */}
          <motion.figure
            className="float-card absolute -left-3 bottom-20 w-56 px-5 py-4 lg:-left-10 lg:w-64"
            initial={shouldReduce ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Quote size={16} className="mb-2 text-brass" />
            <blockquote className="font-heading text-[0.95rem] leading-snug text-forest" style={{ fontWeight: 500 }}>
              &ldquo;Very thorough cleaning services.&rdquo;
            </blockquote>
            <figcaption className="mt-2 font-ui text-[0.68rem] text-stone">
              Jake Den Adel &middot; Google review
            </figcaption>
          </motion.figure>
        </div>

        {/* Editorial column */}
        <div className="order-1 lg:order-2">
          <motion.p className="section-eyebrow mb-6" {...reveal(0)}>
            Our Approach
          </motion.p>

          <motion.h2
            id="about-heading"
            className="mb-8 font-heading leading-[1.06] text-forest"
            style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4rem)', fontWeight: 400, letterSpacing: '-0.028em' }}
            {...reveal(0.07)}
          >
            Good cleaning changes
            <br />
            <span className="accent-italic">how a room</span>
            <br />
            feels.
          </motion.h2>

          <motion.p className="body-copy mb-5 max-w-lg" {...reveal(0.14)}>
            Jose Cardoso Cleaning Service works out of Caledonia Road in North York. Every job
            starts the same way: a walk through the space, a look at what we&rsquo;re actually
            dealing with, and a straight answer about what can and can&rsquo;t be fixed.
          </motion.p>
          <motion.p className="body-copy mb-10 max-w-lg" {...reveal(0.2)}>
            From there we match the method to the fibre, the traffic and the condition of the
            floor. Careful preparation is what separates real care from a rushed pass with a
            machine.
          </motion.p>

          {/* Three facts, all verifiable from the Google profile */}
          <motion.dl className="mb-10 grid max-w-lg grid-cols-3 gap-6 border-y border-forest/10 py-7" {...reveal(0.26)}>
            {/* column-reverse so the value sits above its label while the
                dt/dd order stays correct for assistive tech */}
            {[
              { value: '5.0', label: 'Google rating' },
              { value: 'Mon–Fri', label: '8am to 5pm' },
              { value: 'M6B', label: 'North York base' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col-reverse">
                <dt className="mt-2 font-ui text-[0.68rem] uppercase tracking-[0.16em] text-stone">
                  {label}
                </dt>
                <dd
                  className="font-heading leading-none text-forest"
                  style={{ fontSize: 'clamp(1.35rem, 2.6vw, 1.9rem)', fontWeight: 500 }}
                >
                  {value}
                </dd>
              </div>
            ))}
          </motion.dl>

          <motion.div {...reveal(0.32)}>
            <Link to="/about" className="link-arrow">
              Learn about our approach
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
