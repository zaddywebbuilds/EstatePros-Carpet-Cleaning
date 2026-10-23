import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, AlertTriangle, Phone } from 'lucide-react'
import { business } from '../config/business'
import QuoteForm from '../components/QuoteForm'

type Content = { headline: string; body: string[]; notes: string[] }

const serviceContent: Record<string, Content> = {
  'carpet-cleaning': {
    headline: 'Carpet cleaning that reaches past the surface',
    body: [
      'Carpet holds far more than it shows. Dust, grit and everyday debris work down into the pile where a vacuum cannot reach, and over a few seasons that is what dulls the colour and flattens the texture. Hot water extraction lifts it back out rather than pushing it further in.',
      'No two carpets behave the same way. Before anything is switched on we check the fibre, the backing and the traffic lanes, so the method matches what you actually have on the floor.',
      'We work around the household and give you a straight answer about what to expect while everything dries.',
    ],
    notes: [
      'Method and equipment depend on the carpet type and condition, confirmed at the walkthrough.',
      'We do not promise a drying time or complete stain removal before seeing the space.',
    ],
  },
  'upholstery-cleaning': {
    headline: 'Fabric work that respects the piece',
    body: [
      'Sofas, sectionals, dining chairs and headboards collect body oils, dust and spills in a way that is easy to miss until the fabric is cleaned beside an untouched cushion.',
      'Upholstery is less forgiving than carpet, so the fibre and the backing decide the method. We test in an unseen spot first and work with the amount of moisture the piece can take.',
      'Delicate or antique pieces get an honest answer first. If something should go to a specialist rather than be cleaned in place, we will tell you.',
    ],
    notes: [
      'Some fabrics and finishes cannot be wet cleaned. We check the manufacturer label where there is one.',
      'Colour change and shrinkage risk are assessed before work begins, not after.',
    ],
  },
  'area-rug-cleaning': {
    headline: 'Rugs cleaned for what they are made of',
    body: [
      'A wool hand-knotted rug and a synthetic machine-made one need completely different handling. Treating them the same is how dyes bleed and fringes get wrecked.',
      'We identify the fibre and the construction first, then clean accordingly, with attention to the edges and fringes where wear shows the soonest.',
      'Rugs that sit over hardwood or a finished floor need managed moisture. We plan for that so nothing underneath is affected.',
    ],
    notes: [
      'Hand-knotted, silk and antique rugs are assessed individually before any method is agreed.',
      'Some older dyes are unstable. Where that is the case we say so before cleaning.',
    ],
  },
  'stain-odour-treatment': {
    headline: 'Targeted work on the marks that stay behind',
    body: [
      'Pet accidents, spilled drinks and tracked-in grease all behave differently, and the thing that shifts one can set another permanently. What caused it matters more than how it looks.',
      'Odour is usually a separate problem from the stain. If something has soaked into the underlay or the subfloor, cleaning the surface alone will not solve it, and we will say so.',
      'You get an honest assessment before any work starts, including the cases where the realistic outcome is improvement rather than removal.',
    ],
    notes: [
      'Complete removal of every stain or odour is not guaranteed. Age, fibre and prior treatments all affect the result.',
      'Home remedies applied beforehand can set a stain. Tell us what has already been tried.',
    ],
  },
  'commercial-cleaning': {
    headline: 'Scheduled cleaning for offices and suites',
    body: [
      'Commercial floors wear in lanes. Entrances, corridors and the paths between desks take the traffic while the rest of the floor stays close to new, and the contrast is what makes a space look tired.',
      'We plan around how the floor is actually used, which usually means working outside the busiest hours and in sections so the place keeps running.',
      'Regular maintenance costs less over the life of a floor than a rescue clean once the damage is set in.',
    ],
    notes: [
      'Scheduling, access and frequency are agreed per site.',
      'Large floor areas are quoted after a walkthrough rather than over the phone.',
    ],
  },
  'tile-grout-cleaning': {
    headline: 'Hard floors and the grout lines between',
    body: [
      'Tile usually looks fine; it is the grout that gives a floor away. Grout is porous, so it holds the soil that mopping just redistributes across the surface.',
      'Pressure and heat lift what is in the lines, then the residue is extracted rather than left to settle back. Kitchens, entryways and bathrooms are the usual candidates.',
      'We will tell you honestly where grout is stained rather than soiled, because those are different problems with different answers.',
    ],
    notes: [
      'Permanently discoloured or damaged grout may need colour sealing or replacement, which is separate work.',
      'Natural stone is assessed separately, as some finishes cannot take acidic products.',
    ],
  },
}

const fallbackContent: Content = {
  headline: 'Cleaning tailored to your space',
  body: [
    'This is work we may take on depending on your particular situation. Send an enquiry describing the space and we will let you know what is possible.',
  ],
  notes: ['Availability is confirmed per enquiry.'],
}

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>()
  const shouldReduce = useReducedMotion()
  const service = business.services.find((s) => s.id === serviceId)

  useEffect(() => {
    if (service) {
      document.title = `${service.name} North York | ${business.name}`
    }
  }, [service])

  if (!service) return <Navigate to="/services" replace />

  const content = serviceContent[service.id] ?? fallbackContent
  const isDraft = !service.confirmed
  const others = business.services.filter((s) => s.confirmed && s.id !== service.id).slice(0, 3)

  return (
    <>
      {isDraft && (
        <div className="border-b border-brass/30 bg-brass/20 px-4 py-3">
          <div className="mx-auto flex max-w-7xl items-center gap-3">
            <AlertTriangle size={15} className="shrink-0 text-brass-dark" />
            <p className="font-ui text-xs text-forest">
              This service page is a draft and not yet confirmed by the owner. Do not publish or
              index until verified.
            </p>
          </div>
        </div>
      )}

      {/* Hero: the service photograph carries it */}
      <section className="px-4 pb-6 pt-4 sm:px-6 lg:px-8">
        <div className="panel-deep mx-auto max-w-7xl">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <img src={service.image} alt="" className="h-full w-full object-cover opacity-25" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(7,25,15,0.95) 0%, rgba(7,25,15,0.78) 45%, rgba(14,42,35,0.55) 100%)',
              }}
            />
          </div>

          <div className="px-6 py-16 sm:px-12 lg:py-20">
            <Link
              to="/services"
              className="mb-8 inline-flex items-center gap-1.5 font-ui text-xs text-linen/60 transition-colors hover:text-linen"
            >
              <ArrowLeft size={13} /> All services
            </Link>
            <motion.h1
              className="font-heading leading-[1.05] text-linen"
              style={{ fontSize: 'clamp(2.2rem, 4.8vw, 3.8rem)', fontWeight: 400, letterSpacing: '-0.03em' }}
              initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {service.name}
            </motion.h1>
            <motion.p
              className="mt-5 max-w-lg font-ui leading-[1.7] text-linen/65"
              style={{ fontSize: 'clamp(0.92rem, 1.5vw, 1.04rem)' }}
              initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {service.shortDesc}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content + form */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="mb-7 font-heading text-[1.5rem] leading-snug text-forest sm:text-[1.8rem]" style={{ fontWeight: 500 }}>
              {content.headline}
            </h2>
            {content.body.map((para) => (
              <p key={para.slice(0, 24)} className="body-copy mb-5">
                {para}
              </p>
            ))}

            {content.notes.length > 0 && (
              <div className="mt-8 rounded-4xl border border-forest/10 bg-sage/40 px-6 py-6">
                <p className="mb-4 font-ui text-[0.65rem] uppercase tracking-[0.2em] text-brass-dark" style={{ fontWeight: 600 }}>
                  Worth knowing
                </p>
                <ul className="space-y-3">
                  {content.notes.map((note) => (
                    <li key={note.slice(0, 24)} className="flex items-start gap-3 font-ui text-[0.82rem] leading-relaxed text-stone">
                      <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-brass" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <figure className="mt-10">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full rounded-4xl border-[6px] border-white object-cover shadow-surface"
                style={{ maxHeight: '380px' }}
                loading="lazy"
              />
              <figcaption className="mt-3 font-ui text-xs italic text-stone">
                Concept photography
              </figcaption>
            </figure>
          </div>

          <div>
            <div className="surface-solid p-8 lg:sticky lg:top-24">
              <h3 className="mb-2 font-heading text-xl text-forest" style={{ fontWeight: 500 }}>
                Request a quote
              </h3>
              <p className="mb-7 font-ui text-sm leading-relaxed text-stone">
                Tell us about the space and we will be in touch. Sending this is an enquiry, not a
                confirmed booking.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      {others.length > 0 && (
        <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="other-services">
          <div className="mx-auto max-w-7xl">
            <h2 id="other-services" className="section-eyebrow mb-7">
              Other services
            </h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {others.map((other) => (
                <Link
                  key={other.id}
                  to={`/services/${other.id}`}
                  className="group relative overflow-hidden rounded-4xl bg-forest-deep shadow-surface transition-shadow duration-500 hover:shadow-surface-lg"
                >
                  <img
                    src={other.image}
                    alt=""
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(7,25,15,0.92) 0%, rgba(7,25,15,0.35) 60%, rgba(7,25,15,0.05) 100%)',
                    }}
                  />
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5">
                    <span className="font-heading text-[1.1rem] text-linen" style={{ fontWeight: 500 }}>
                      {other.name}
                    </span>
                    <ArrowRight
                      size={16}
                      className="shrink-0 text-brass transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2.5}
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing bar */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="surface mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-7 py-8 sm:flex-row sm:px-10">
          <p className="font-heading text-xl text-forest" style={{ fontWeight: 500 }}>
            Ready to take the next step?
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href={`tel:${business.phone}`} className="btn-ghost">
              <Phone size={14} strokeWidth={2.5} />
              {business.phoneDisplay}
            </a>
            <Link to="/contact" className="btn-primary">
              {business.ctaQuoteLabel} <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
