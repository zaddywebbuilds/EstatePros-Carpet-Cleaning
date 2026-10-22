import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Heart, Eye, Handshake } from 'lucide-react'

const BASE = '/EstatePros-Carpet-Cleaning'

const values = [
  {
    icon: Heart,
    title: 'Care before convenience',
    desc: 'We take the time to understand your space before recommending an approach. That conversation is part of the service.',
  },
  {
    icon: Eye,
    title: 'Honest expectations',
    desc: "We don't overpromise. If a result isn't realistic for your situation, we'll tell you upfront rather than let you be disappointed.",
  },
  {
    icon: Handshake,
    title: 'Respect for your home',
    desc: 'Your space is yours. We work in it carefully, communicate clearly, and leave it the way a professional should.',
  },
]

export default function AboutPage() {
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    document.title = 'Our Approach | EstatePros Carpet Cleaning Calgary'
  }, [])

  const reveal = (delay = 0) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '240px' },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  })

  return (
    <>
      {/* Page hero */}
      <section className="panel-deep relative overflow-hidden mx-4 sm:mx-6 lg:mx-8 mt-4 mb-8 py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p
              className="font-ui text-xs font-600 tracking-[0.2em] uppercase text-ivory/50 mb-5"
              initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About EstatePros
            </motion.p>
            <motion.h1
              className="font-heading font-600 text-ivory leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.01em' }}
              initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              Our approach
              <br />
              <em className="font-serif" style={{ fontStyle: 'italic', fontWeight: 400, color: '#DCECE9' }}>
                starts with listening
              </em>
            </motion.h1>
            <motion.p
              className="mt-6 font-ui text-ivory/65 max-w-lg leading-relaxed"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}
              initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              EstatePros Carpet Cleaning is a Calgary-based cleaning service built around the idea that
              good care requires preparation, communication, and genuine attention to the space at hand.
            </motion.p>
          </div>
          <motion.div
            className="relative hidden lg:block"
            initial={shouldReduce ? {} : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-3xl overflow-hidden shadow-float" style={{ aspectRatio: '4/3' }}>
              <img
                src={`${BASE}/images/luxury-living-room.webp`}
                alt="Open-plan living room with a sectional sofa and stone fireplace over pale carpet"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <motion.p className="section-eyebrow mb-5" {...reveal()}>
              What We Believe
            </motion.p>
            <motion.h2
              className="editorial-heading text-teal mb-6"
              {...reveal(0.08)}
            >
              Good care changes{' '}
              <em className="font-serif" style={{ fontStyle: 'italic', fontWeight: 400, color: '#B5A185' }}>
                the way a room feels
              </em>
            </motion.h2>
            <motion.p className="body-copy" {...reveal(0.16)}>
              Carpet care isn&rsquo;t just about removing visible dirt. A well-maintained carpet affects the
              feel of a room, the air inside it, and the way people move through your home. We approach
              every job with that in mind.
            </motion.p>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="bg-white rounded-2xl p-8 shadow-card"
                {...reveal(i * 0.1)}
              >
                <div className="w-12 h-12 bg-mist rounded-2xl flex items-center justify-center mb-5">
                  <Icon size={20} className="text-teal" strokeWidth={1.75} />
                </div>
                <h3 className="font-heading font-600 text-teal text-base mb-3 leading-snug">{title}</h3>
                <p className="font-ui text-stone text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            className="relative"
            initial={shouldReduce ? {} : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '240px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-3xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src={`${BASE}/images/carpet-spot-treatment.webp`}
                alt="Gloved hand spraying a pre-treatment onto a marked patch of carpet"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-2 text-xs font-ui text-stone italic">Concept photography</p>
          </motion.div>

          <div>
            <motion.p className="section-eyebrow mb-5" {...reveal(0)}>
              How We Work
            </motion.p>
            <motion.h2
              className="section-heading text-teal mb-6"
              {...reveal(0.08)}
            >
              Thoughtful preparation.<br />Careful execution.
            </motion.h2>
            <motion.div {...reveal(0.16)}>
              <p className="body-copy mb-4">
                Before any cleaning begins, we take time to understand your carpets, the household, and
                what matters most to you. That might mean asking about pets, foot traffic, specific areas
                of concern, or how long before you need the space back.
              </p>
              <p className="body-copy mb-4">
                We prepare an approach based on the actual conditions of your space, not a standard
                package that gets applied regardless. From there we work carefully, communicate as we go,
                and leave things as close to how we found them as possible, minus what we came to remove.
              </p>
              <p className="body-copy mb-8">
                We believe the process should feel straightforward and the result should feel like a
                genuine improvement. If you ever have questions before, during, or after, we&rsquo;re available.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-heading font-600 text-champagne hover:text-champagne-dark transition-colors text-sm"
              >
                Get in touch <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
