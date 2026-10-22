import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, AlertTriangle } from 'lucide-react'
import { business } from '../config/business'
import QuoteForm from '../components/QuoteForm'

const serviceContent: Record<string, { headline: string; body: string[]; notes: string[] }> = {
  'carpet-cleaning': {
    headline: 'Professional carpet cleaning, built around your space',
    body: [
      'Carpet cleaning is more than a surface clean. Over time, carpets trap dust, allergens, and everyday debris that regular vacuuming can\'t fully address. A proper extraction clean reaches deeper into the fiber structure to remove what\'s worked its way in.',
      'Every carpet and every home is different. Before any work begins, we take time to understand the specific fibers, traffic patterns, and conditions of your space so the approach we take is suited to what you have.',
      'We work around your schedule and household, and we\'ll give you honest information about what to expect during and after the process.',
    ],
    notes: [
      'Specific methods and equipment depend on your carpet type and conditions, confirmed during consultation.',
      'We do not guarantee specific drying times or complete stain removal prior to inspecting your space.',
    ],
  },
}

const fallbackContent = {
  headline: 'Professional cleaning, tailored to your space',
  body: [
    'This service is something we may offer depending on your specific situation. Send us an enquiry describing your space and we\'ll let you know what\'s possible.',
  ],
  notes: [
    'Service availability is confirmed on a per-enquiry basis.',
  ],
}

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>()
  const shouldReduce = useReducedMotion()
  const service = business.services.find(s => s.id === serviceId)

  useEffect(() => {
    if (service) {
      document.title = `${service.name} Calgary | EstatePros Carpet Cleaning`
    }
  }, [service])

  if (!service) return <Navigate to="/services" replace />

  const content = serviceContent[service.id] ?? fallbackContent
  const isDraft = !service.confirmed

  return (
    <>
      {/* Draft warning */}
      {isDraft && (
        <div className="bg-champagne/20 border-b border-champagne/30 py-3 px-4">
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <AlertTriangle size={15} className="text-champagne shrink-0" />
            <p className="font-ui text-xs text-teal">
              This service page is a draft and not yet confirmed by the owner. Do not publish or index until verified.
            </p>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative bg-teal py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={service.image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-ui text-ivory/60 hover:text-ivory transition-colors mb-8"
          >
            <ArrowLeft size={13} /> All services
          </Link>
          <motion.h1
            className="font-heading font-800 text-ivory leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em' }}
            initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {service.name}
          </motion.h1>
          <motion.p
            className="mt-4 font-ui text-ivory/65 max-w-lg leading-relaxed"
            style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)' }}
            initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {service.shortDesc}
          </motion.p>
        </div>
      </section>

      {/* Content + Form */}
      <section className="bg-ivory py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Left: content */}
          <div>
            <h2 className="font-heading font-700 text-teal text-xl mb-6 leading-snug">{content.headline}</h2>
            {content.body.map((para, i) => (
              <p key={i} className="body-copy mb-4">{para}</p>
            ))}
            {content.notes.length > 0 && (
              <ul className="mt-6 space-y-2">
                {content.notes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2 font-ui text-xs text-stone">
                    <span className="mt-1 w-1 h-1 rounded-full bg-champagne shrink-0" />
                    {note}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-10">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full rounded-2xl object-cover shadow-card"
                style={{ maxHeight: '360px' }}
                loading="lazy"
              />
              <p className="mt-2 text-xs font-ui text-stone italic">Concept photography</p>
            </div>

            <div className="mt-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-sm font-heading font-700 text-teal hover:text-teal-light transition-colors"
              >
                <ArrowLeft size={14} strokeWidth={2.5} /> View all services
              </Link>
            </div>
          </div>

          {/* Right: quote form */}
          <div>
            <div className="bg-white rounded-3xl shadow-card p-8">
              <h3 className="font-heading font-700 text-teal text-xl mb-2">Request a quote</h3>
              <p className="font-ui text-stone text-sm mb-8 leading-relaxed">
                Tell us about your space and we&rsquo;ll be in touch to discuss the details.
              </p>
              <QuoteForm />
            </div>
          </div>

        </div>
      </section>

      {/* Cross-link */}
      <section className="bg-white py-14 px-4 sm:px-6 border-t border-mist">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-heading font-700 text-teal text-lg">
            Ready to take the next step?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-champagne text-ink font-heading font-700 text-sm rounded-full hover:bg-champagne-dark transition-colors"
            style={{ letterSpacing: '0.03em' }}
          >
            {business.ctaQuoteLabel} <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </>
  )
}
