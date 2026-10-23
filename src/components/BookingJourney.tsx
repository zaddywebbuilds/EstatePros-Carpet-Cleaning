import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { MessageSquare, CheckCircle, CalendarCheck, ArrowRight, Phone } from 'lucide-react'
import { business } from '../config/business'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Tell us about the space',
    desc: 'Share a few details about the rooms, the floors and what concerns you. No commitment, just a conversation.',
    note: null,
  },
  {
    num: '02',
    icon: CheckCircle,
    title: 'Get the details confirmed',
    desc: 'We review the enquiry, ask any follow-up questions, and set out exactly what the work would involve for your place.',
    note: null,
  },
  {
    num: '03',
    icon: CalendarCheck,
    title: 'Book your visit',
    desc: 'Once you are happy to go ahead we agree a weekday that works and plan the job around your access.',
    note: 'An enquiry is not yet a confirmed booking slot',
  },
]

export default function BookingJourney() {
  const shouldReduce = useReducedMotion()

  return (
    <section className="section-y px-4 sm:px-6 lg:px-8" aria-labelledby="journey-heading">
      <div className="panel-deep mx-auto max-w-7xl px-5 py-11 sm:px-10 sm:py-14 lg:py-16">
        <div className="mb-8 text-center sm:mb-11">
          <p className="section-eyebrow section-eyebrow-center mb-5 !text-brass">How It Works</p>
          <h2
            id="journey-heading"
            className="font-heading leading-[1.08] text-linen"
            style={{ fontSize: 'clamp(2rem, 4.2vw, 3.2rem)', fontWeight: 400, letterSpacing: '-0.025em' }}
          >
            From first message to
            <br />
            <span className="accent-italic">a finished room</span>
          </h2>
        </div>

        <ol className="relative grid gap-6 md:grid-cols-3" role="list">
          {/* Hairline joining the three cards on desktop */}
          <div
            className="absolute left-[16%] right-[16%] top-14 hidden h-px bg-gradient-to-r from-transparent via-brass/35 to-transparent md:block"
            aria-hidden="true"
          />

          {steps.map(({ num, icon: Icon, title, desc, note }, i) => (
            <motion.li
              key={num}
              className="relative"
              initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '140px' }}
              transition={{ duration: 0.6, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="h-full rounded-4xl border border-linen/10 bg-forest-light/50 p-6 sm:p-7 backdrop-blur-sm transition-colors duration-300 hover:border-brass/35">
                <div className="mb-7 flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brass/15 text-brass">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span
                    className="font-heading text-linen/15"
                    style={{ fontSize: '2.6rem', lineHeight: 1, fontWeight: 400 }}
                    aria-hidden="true"
                  >
                    {num}
                  </span>
                </div>
                <h3 className="mb-3 font-heading text-[1.22rem] leading-snug text-linen" style={{ fontWeight: 500 }}>
                  {title}
                </h3>
                <p className="font-ui text-[0.86rem] leading-relaxed text-linen/65">{desc}</p>
                {note && (
                  <p className="mt-5 border-t border-linen/10 pt-4 font-ui text-xs italic text-linen/40">
                    {note}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <Link to="/contact" className="btn-brass">
            Start your enquiry
            <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
          <a href={`tel:${business.phone}`} className="btn-outline-light">
            <Phone size={14} strokeWidth={2.5} />
            {business.phoneDisplay}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
