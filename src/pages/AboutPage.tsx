import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Heart, Eye, Handshake, Phone } from 'lucide-react'
import { business, BASE } from '../config/business'
import PageHero from '../components/PageHero'

const values = [
  {
    icon: Heart,
    title: 'Care before convenience',
    desc: 'We take the time to understand the space before recommending an approach. That conversation is part of the service, not an extra.',
  },
  {
    icon: Eye,
    title: 'Honest expectations',
    desc: 'If a result is not realistic for your floor, we say so at the start rather than let you find out afterwards.',
  },
  {
    icon: Handshake,
    title: 'Respect for your home',
    desc: 'Your space is yours. We work in it carefully, explain what we are doing, and leave it the way a professional should.',
  },
]

export default function AboutPage() {
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    document.title = `Our Approach | ${business.name}`
  }, [])

  const reveal = (delay = 0) => ({
    initial: shouldReduce ? {} : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '140px' },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  })

  return (
    <>
      <PageHero
        eyebrow="About the company"
        title={<>Our approach starts<br /><span className="accent-italic">with listening</span></>}
        intro="Jose Cardoso Cleaning Service works out of Caledonia Road in North York. The idea behind it is simple: good cleaning takes preparation, plain talk and genuine attention to the room in front of you."
        image={`${BASE}/images/luxury-living-room.webp`}
        imageAlt="Open-plan living room with a sectional sofa and stone fireplace over pale carpet"
      />

      {/* Philosophy */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <motion.p className="section-eyebrow section-eyebrow-center mb-5" {...reveal()}>
              What We Believe
            </motion.p>
            <motion.h2 className="display-heading mb-7" {...reveal(0.08)}>
              Good cleaning changes{' '}
              <span className="accent-italic">how a room feels</span>
            </motion.h2>
            <motion.p className="body-copy" {...reveal(0.16)}>
              Cleaning is not only about lifting what you can see. A well-kept floor changes the
              feel of a room, the air in it, and the way people move through the place. Every job
              gets approached with that in mind.
            </motion.p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="group surface px-8 py-9 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-surface-lg"
                {...reveal(i * 0.1)}
              >
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sage text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-brass">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mb-3 font-heading text-[1.15rem] leading-snug text-forest" style={{ fontWeight: 500 }}>
                  {title}
                </h3>
                <p className="font-ui text-[0.86rem] leading-relaxed text-stone">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.figure
            className="relative"
            initial={shouldReduce ? {} : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '140px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden rounded-5xl border-[6px] border-white shadow-surface-lg" style={{ aspectRatio: '4 / 3' }}>
              <img
                src={`${BASE}/images/carpet-spot-treatment.webp`}
                alt="Gloved hand spraying a pre-treatment onto a marked patch of carpet"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 font-ui text-xs italic text-stone">
              Concept photography
            </figcaption>
          </motion.figure>

          <div>
            <motion.p className="section-eyebrow mb-5" {...reveal(0)}>
              How We Work
            </motion.p>
            <motion.h2 className="section-heading mb-7" {...reveal(0.08)}>
              Thoughtful preparation.
              <br />
              <span className="accent-italic">Careful execution.</span>
            </motion.h2>
            <motion.div {...reveal(0.16)}>
              <p className="body-copy mb-5">
                Before anything is switched on, we look at the floor, the fibres and the traffic,
                and we ask about the things that change the plan: pets, children, a sensitivity to
                scent, or how soon you need the room back.
              </p>
              <p className="body-copy mb-5">
                The approach is then built around what is actually in front of us rather than a
                standard package applied regardless. We work through it carefully, tell you what we
                are finding as we go, and leave the place as we found it, minus what we came to
                take out.
              </p>
              <p className="body-copy mb-9">
                The process should feel straightforward, and the result should feel like a real
                improvement. Questions before, during or after are always welcome.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/contact" className="btn-primary">
                  Get in touch <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
                <a href={`tel:${business.phone}`} className="btn-ghost">
                  <Phone size={14} strokeWidth={2.5} />
                  {business.phoneDisplay}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
