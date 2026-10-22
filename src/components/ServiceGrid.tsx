import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { business } from '../config/business'

export default function ServiceGrid() {
  const shouldReduce = useReducedMotion()
  const confirmedServices = business.services.filter(s => s.confirmed)

  return (
    <section className="bg-white py-24 px-4 sm:px-6" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="section-eyebrow mb-3">What We Do</p>
            <h2 id="services-heading" className="section-heading text-teal text-balance">
              Services built around<br />your space
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-heading font-700 text-champagne hover:text-champagne-dark transition-colors shrink-0"
          >
            View all services <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Confirmed service cards */}
          {confirmedServices.map((service, i) => (
            <motion.div
              key={service.id}
              className="service-card group"
              initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-700 text-teal text-lg mb-2">{service.name}</h3>
                <p className="body-copy text-stone mb-5 text-sm">{service.shortDesc}</p>
                <div className="flex items-center gap-4">
                  <Link
                    to={`/services/${service.id}`}
                    className="text-sm font-heading font-700 text-teal hover:text-teal-light transition-colors flex items-center gap-1"
                  >
                    Learn more <ArrowRight size={13} strokeWidth={2.5} />
                  </Link>
                  <Link
                    to="/contact"
                    className="ml-auto text-xs font-heading font-600 text-champagne hover:text-champagne-dark transition-colors"
                  >
                    Get a quote
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Ask about your space card */}
          <motion.div
            className="rounded-2xl border-2 border-dashed border-mist bg-mist/30 flex flex-col items-center justify-center text-center px-8 py-10 min-h-[320px]"
            initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: confirmedServices.length * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center mb-5">
              <MessageCircle size={22} className="text-teal" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-700 text-teal text-lg mb-3">Ask about your space</h3>
            <p className="font-ui text-stone text-sm leading-relaxed mb-6">
              Upholstery, area rugs, commercial spaces, and more. Tell us what you&rsquo;re working with
              and we&rsquo;ll let you know how we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-ivory font-heading font-700 text-sm rounded-full hover:bg-teal-light transition-colors"
            >
              Send an enquiry <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
