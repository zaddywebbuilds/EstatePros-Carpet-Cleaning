import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Expand } from 'lucide-react'
import Lightbox from '../components/Lightbox'

const BASE = '/EstatePros-Carpet-Cleaning'

// Each entry appears once; no image is repeated within the page.
const galleryImages = [
  {
    src: `${BASE}/images/estatepros-hero-living-room.webp`,
    alt: 'Bright Calgary living room with large windows, neutral carpet and modern furnishings',
    caption: 'Premium residential interior',
    cols: 'sm:col-span-2',
  },
  {
    src: `${BASE}/images/carpet-extraction.webp`,
    alt: 'Extraction wand drawing a clean path across light wall-to-wall carpet',
    caption: 'Hot water extraction in progress',
    cols: '',
  },
  {
    src: `${BASE}/images/estatepros-upholstery-detail.webp`,
    alt: 'Close-up of an upholstery cleaning attachment working on cream fabric',
    caption: 'Upholstery care, up close',
    cols: '',
  },
  {
    src: `${BASE}/images/area-rug-care.webp`,
    alt: 'Patterned area rug on hardwood being cleaned with an extraction wand',
    caption: 'Area rugs, cleaned in place',
    cols: '',
  },
  {
    src: `${BASE}/images/commercial-carpet-cleaning.webp`,
    alt: 'Open-plan office with desks and glass partitions, carpet being cleaned along a walkway',
    caption: 'Commercial floors after hours',
    cols: '',
  },
  {
    src: `${BASE}/images/estatepros-carpet-wand-detail.webp`,
    alt: 'Cleaning wand making contact with light textured carpet fibres',
    caption: 'Detail work on carpet fibres',
    cols: 'sm:col-span-2',
  },
]

export default function GalleryPage() {
  const shouldReduce = useReducedMotion()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    document.title = 'Gallery | EstatePros Carpet Cleaning Calgary'
  }, [])

  return (
    <>
      {/* Header */}
      <section className="panel-deep relative overflow-hidden mx-4 sm:mx-6 lg:mx-8 mt-4 mb-8 py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.p
            className="font-ui text-xs font-600 tracking-[0.2em] uppercase text-ivory/50 mb-4"
            initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Visual Reference
          </motion.p>
          <motion.h1
            className="font-heading font-600 text-ivory leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.01em' }}
            initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            A closer look
          </motion.h1>
          <motion.p
            className="mt-4 font-ui text-ivory/55 max-w-lg leading-relaxed text-sm"
            initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            The images below are editorial concept photography illustrating the type of spaces and
            work we approach. They are not documentation of specific past jobs.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map(({ src, alt, caption, cols }, i) => (
              <motion.figure
                key={`${src}-${i}`}
                className={`group rounded-2xl overflow-hidden bg-white shadow-card ${cols}`}
                initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View larger: ${caption}`}
                  className="relative block w-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-champagne"
                  style={{ aspectRatio: cols.includes('col-span-2') ? '16/7' : '4/3' }}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-teal/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-white/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Expand size={15} className="text-teal" />
                  </span>
                </button>
                <figcaption className="px-5 py-3 border-t border-mist">
                  <p className="font-ui text-sm text-stone font-500">{caption}</p>
                  <p className="font-ui text-xs text-stone/60 mt-0.5 italic">Concept photography</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-ui text-sm text-stone mb-6">
              Interested in what we can do for your space?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal text-ivory font-heading font-600 text-sm rounded-full hover:bg-teal-light transition-colors"
              style={{ letterSpacing: '0.03em' }}
            >
              Get in touch <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </section>

      <Lightbox
        items={galleryImages.map(({ src, alt, caption }) => ({
          src,
          alt,
          caption: `${caption} — concept photography`,
        }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  )
}
