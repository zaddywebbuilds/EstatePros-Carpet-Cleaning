import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Phone, ExternalLink, Clock } from 'lucide-react'
import { business } from '../config/business'
import QuoteForm from '../components/QuoteForm'
import PageHero from '../components/PageHero'
import OpenStatus from '../components/OpenStatus'

const mapEmbed = `https://maps.google.com/maps?q=${business.coordinates.lat},${business.coordinates.lng}&z=15&output=embed`

export default function ContactPage() {
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    document.title = `Contact & Quote | ${business.name}`
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={<>Tell us about<br /><span className="accent-italic">your space</span></>}
        intro="Send an enquiry through the form, or call during business hours. Either way you get a real answer about what the work would involve before anything is booked."
      />

      <section className="section-y px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">

          {/* Details */}
          <motion.div
            className="lg:col-span-2"
            initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mb-4 font-heading text-xl text-forest" style={{ fontWeight: 500 }}>
              Start with an enquiry
            </h2>
            <p className="body-copy mb-9">
              Share a few details about the rooms and the floors and we will follow up to discuss
              it, answer your questions, and tell you how we can help.
            </p>

            <dl className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sage text-forest">
                  <Phone size={16} strokeWidth={1.9} />
                </span>
                <div>
                  <dt className="font-ui text-[0.68rem] uppercase tracking-[0.18em] text-brass-dark" style={{ fontWeight: 600 }}>
                    Phone
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${business.phone}`}
                      className="font-heading text-lg text-forest transition-colors hover:text-brass-dark"
                      style={{ fontWeight: 500 }}
                    >
                      {business.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sage text-forest">
                  <MapPin size={16} strokeWidth={1.9} />
                </span>
                <div>
                  <dt className="font-ui text-[0.68rem] uppercase tracking-[0.18em] text-brass-dark" style={{ fontWeight: 600 }}>
                    Address
                  </dt>
                  <dd className="mt-1.5 font-ui text-sm leading-relaxed text-stone">
                    {business.streetAddress}
                    <br />
                    {business.addressLocality}, {business.provinceCode} {business.postalCode}
                    <br />
                    <a
                      href={business.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow mt-2 !text-xs"
                    >
                      Open in Google Maps <ExternalLink size={11} strokeWidth={2.5} />
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sage text-forest">
                  <Clock size={16} strokeWidth={1.9} />
                </span>
                <div className="min-w-0 flex-1">
                  <dt className="font-ui text-[0.68rem] uppercase tracking-[0.18em] text-brass-dark" style={{ fontWeight: 600 }}>
                    Hours
                  </dt>
                  <dd className="mt-2">
                    <table className="w-full max-w-[16rem] font-ui text-[0.82rem]">
                      <tbody>
                        {business.hours.map((h) => (
                          <tr key={h.day}>
                            <th scope="row" className="py-1 pr-4 text-left font-normal text-stone">
                              {h.day}
                            </th>
                            <td className={`py-1 text-right ${h.open ? 'text-forest' : 'text-stone-light'}`}>
                              {h.open ? '8:00am – 5:00pm' : 'Closed'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="mt-3">
                      <OpenStatus />
                    </div>
                  </dd>
                </div>
              </div>
            </dl>

            {!business.email && (
              <p className="mt-9 rounded-2xl border border-brass/25 bg-brass/10 px-5 py-4 font-ui text-xs leading-relaxed text-forest/75">
                No email address is published on the company&rsquo;s Google listing yet. Use the form
                or the phone number above and we will reply from there.
              </p>
            )}

            <div className="plate mt-8 rounded-4xl">
              <iframe
                src={mapEmbed}
                title={`Map showing ${business.name} at ${business.addressFull}`}
                className="h-60 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="surface-solid p-6 sm:p-9">
              <h2 className="mb-2 font-heading text-2xl text-forest" style={{ fontWeight: 500 }}>
                Request a quote
              </h2>
              <p className="mb-8 font-ui text-sm leading-relaxed text-stone">
                Share a few details and we will be in touch. Submitting this form is an enquiry,
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
