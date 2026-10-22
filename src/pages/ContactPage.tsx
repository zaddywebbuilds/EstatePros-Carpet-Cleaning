import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import { business } from '../config/business'
import QuoteForm from '../components/QuoteForm'

export default function ContactPage() {
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    document.title = 'Contact & Quote | EstatePros Carpet Cleaning Calgary'
  }, [])

  return (
    <>
      {/* Header */}
      <section className="bg-teal py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="font-ui text-xs font-600 tracking-[0.2em] uppercase text-ivory/50 mb-4"
            initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.p>
          <motion.h1
            className="font-heading font-800 text-ivory leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.03em' }}
            initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Tell us about
            <br />
            <em className="font-serif" style={{ fontStyle: 'italic', fontWeight: 300, color: '#DCECE9' }}>
              your space
            </em>
          </motion.h1>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="bg-ivory py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">

          {/* Left: contact info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={shouldReduce ? {} : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-heading font-700 text-teal text-xl mb-4 leading-snug">
                Start with an enquiry
              </h2>
              <p className="body-copy mb-8">
                Fill out the form and tell us a bit about your carpets and space. We&rsquo;ll follow up to
                discuss the details, answer your questions, and let you know how we can help.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-mist rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-teal" />
                  </div>
                  <div>
                    <p className="font-heading font-600 text-teal text-sm">Location</p>
                    <p className="font-ui text-stone text-sm mt-0.5">Calgary, Alberta, Canada</p>
                    <a
                      href={business.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-champagne hover:text-champagne-dark transition-colors mt-1"
                    >
                      View on Google Maps <ExternalLink size={10} strokeWidth={2} />
                    </a>
                  </div>
                </div>

                {business.phone && (
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-mist rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={15} className="text-teal" />
                    </div>
                    <div>
                      <p className="font-heading font-600 text-teal text-sm">Phone</p>
                      <a
                        href={`tel:${business.phone}`}
                        className="font-ui text-stone text-sm mt-0.5 hover:text-teal transition-colors"
                      >
                        {business.phoneDisplay}
                      </a>
                    </div>
                  </div>
                )}

                {business.email && (
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-mist rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={15} className="text-teal" />
                    </div>
                    <div>
                      <p className="font-heading font-600 text-teal text-sm">Email</p>
                      <a
                        href={`mailto:${business.email}`}
                        className="font-ui text-stone text-sm mt-0.5 hover:text-teal transition-colors"
                      >
                        {business.email}
                      </a>
                    </div>
                  </div>
                )}

                {business.businessHours && (
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-mist rounded-xl flex items-center justify-center shrink-0 text-teal font-heading font-700 text-xs">
                      hrs
                    </div>
                    <div>
                      <p className="font-heading font-600 text-teal text-sm">Hours</p>
                      <p className="font-ui text-stone text-sm mt-0.5">{business.businessHours}</p>
                    </div>
                  </div>
                )}
              </div>

              {(!business.phone && !business.email && !business.businessHours) && (
                <div className="mt-6 p-4 bg-champagne/10 border border-champagne/20 rounded-xl">
                  <p className="font-ui text-xs text-teal/70 leading-relaxed">
                    Contact details are being verified and will appear here once confirmed. Use the form to get in touch.
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            className="lg:col-span-3"
            initial={shouldReduce ? {} : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white rounded-3xl shadow-card p-8">
              <h3 className="font-heading font-700 text-teal text-xl mb-2">Request a quote</h3>
              <p className="font-ui text-stone text-sm mb-8 leading-relaxed">
                Share a few details and we&rsquo;ll be in touch. Submitting this form is an enquiry,
                not a confirmed booking.
              </p>
              <QuoteForm />
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}
