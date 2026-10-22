import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const BASE = '/EstatePros-Carpet-Cleaning'

export default function EditorialAbout() {
  const shouldReduce = useReducedMotion()

  const reveal = (delay = 0) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  })

  return (
    <section className="bg-ivory py-24 px-4 sm:px-6 overflow-hidden" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: editorial text */}
          <div>
            <motion.p className="section-eyebrow mb-5" {...reveal(0)}>
              Our Approach
            </motion.p>

            <motion.h2
              id="about-heading"
              className="font-heading font-800 text-teal leading-none mb-8"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', letterSpacing: '-0.03em' }}
              {...reveal(0.08)}
            >
              Good care changes
              <br />
              <em
                className="font-serif"
                style={{ fontStyle: 'italic', fontWeight: 300, color: '#B5A185' }}
              >
                the way a room
              </em>
              <br />
              feels.
            </motion.h2>

            <motion.p className="body-copy mb-6 max-w-lg" {...reveal(0.16)}>
              We start by listening. Every space is different, and every enquiry is treated as a conversation,
              not a transaction. Before any work begins, we take time to understand your carpets, your
              household, and what matters most to you.
            </motion.p>
            <motion.p className="body-copy mb-10 max-w-lg" {...reveal(0.22)}>
              From there, we prepare an approach that suits the specific fibers, traffic patterns, and
              conditions of your space, because thoughtful preparation is what separates genuine care
              from a rushed clean.
            </motion.p>

            <motion.div {...reveal(0.28)}>
              <Link to="/about" className="inline-flex items-center gap-2 font-heading font-700 text-teal text-sm hover:gap-3 transition-all duration-300">
                Learn about our approach
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </div>

          {/* Right: image + floating card */}
          <div className="relative">
            <motion.div
              className="relative rounded-3xl overflow-hidden"
              style={{ aspectRatio: '4/5' }}
              initial={shouldReduce ? {} : { opacity: 0, scale: 0.97, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={`${BASE}/images/estatepros-technician-extraction.webp`}
                alt="Carpet cleaning technician using extraction equipment on light carpet in bright Calgary interior"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              {/* Vertical label */}
              <div
                className="absolute left-4 bottom-16 flex items-center gap-2"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                aria-hidden="true"
              >
                <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-ivory/70 font-600">
                  Carpet care &bull; Calgary
                </span>
              </div>
            </motion.div>

            {/* Floating appointment card */}
            <motion.div
              className="float-card absolute -bottom-6 -left-6 px-5 py-4 w-52"
              initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center">
                  <Calendar size={14} className="text-teal" />
                </div>
                <p className="font-heading font-700 text-teal text-sm">Book a chat</p>
              </div>
              <p className="font-ui text-stone text-xs leading-snug">
                Tell us about your space and we&rsquo;ll plan together.
              </p>
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center gap-1 text-xs font-heading font-700 text-champagne hover:text-champagne-dark transition-colors"
              >
                Get started <ArrowRight size={11} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
