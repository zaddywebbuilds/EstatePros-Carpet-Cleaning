import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { MessageSquare, CheckCircle, CalendarCheck, ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Tell us about the space',
    desc: 'Share a few details about your carpets, property type, and what concerns you. No commitment, just a conversation.',
    note: null,
  },
  {
    num: '02',
    icon: CheckCircle,
    title: 'Get details confirmed',
    desc: "We'll review your enquiry, ask any follow-up questions, and clarify what the service would involve for your specific situation.",
    note: null,
  },
  {
    num: '03',
    icon: CalendarCheck,
    title: 'Schedule your service',
    desc: "Once you're happy to proceed, we'll coordinate a time that works for you and prepare for the job.",
    note: 'Enquiry only, not a confirmed booking slot',
  },
]

export default function BookingJourney() {
  const shouldReduce = useReducedMotion()

  return (
    <section className="bg-teal py-24 px-4 sm:px-6 overflow-hidden" aria-labelledby="journey-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-ui text-xs font-600 tracking-[0.18em] uppercase text-ivory/50 mb-4">
            How It Works
          </p>
          <h2
            id="journey-heading"
            className="font-heading font-800 text-ivory leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
          >
            From enquiry to<br />
            <em className="font-serif" style={{ fontStyle: 'italic', fontWeight: 300, color: '#DCECE9' }}>
              exceptional clean
            </em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-ivory/10"
            aria-hidden="true"
          />

          {steps.map(({ num, icon: Icon, title, desc, note }, i) => (
            <motion.div
              key={num}
              className="relative"
              initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Floating card */}
              <div className="bg-teal-light/60 backdrop-blur-sm border border-ivory/10 rounded-2xl p-7 h-full hover:border-ivory/20 transition-colors duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-ivory/10 rounded-xl flex items-center justify-center">
                    <Icon size={20} className="text-ivory/80" strokeWidth={1.75} />
                  </div>
                  <span
                    className="font-heading font-800 text-ivory/20"
                    style={{ fontSize: '2.5rem', lineHeight: 1, letterSpacing: '-0.04em' }}
                    aria-hidden="true"
                  >
                    {num}
                  </span>
                </div>
                <h3 className="font-heading font-700 text-ivory text-lg mb-3 leading-snug">{title}</h3>
                <p className="font-ui text-ivory/65 text-sm leading-relaxed">{desc}</p>
                {note && (
                  <p className="mt-4 text-xs font-ui text-ivory/40 italic">&mdash; {note}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-champagne text-ink font-heading font-700 text-sm rounded-full hover:bg-champagne-dark transition-colors"
            style={{ letterSpacing: '0.03em' }}
          >
            Start your enquiry
            <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
