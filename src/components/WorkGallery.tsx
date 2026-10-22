import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Expand } from 'lucide-react'
import Lightbox from './Lightbox'

const BASE = '/EstatePros-Carpet-Cleaning'

const images = [
  {
    src: `${BASE}/images/estatepros-upholstery-detail.webp`,
    alt: 'Close-up of upholstery cleaning tool on cream fabric sofa cushion',
    caption: 'Care in the details',
  },
  {
    src: `${BASE}/images/estatepros-carpet-wand-detail.webp`,
    alt: 'Carpet cleaning wand tool making contact with light textured carpet fibers',
    caption: 'Thoughtful attention to every fiber',
  },
]

export default function WorkGallery() {
  const shouldReduce = useReducedMotion()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <section className="py-8 px-4 sm:px-6" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="section-eyebrow mb-3">Our Work, Up Close</p>
            <h2 id="gallery-heading" className="section-heading text-teal">
              A closer look at the craft
            </h2>
          </div>
          <p className="font-ui text-xs text-stone italic sm:text-right">
            Concept photography &mdash; illustrative only
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {images.map(({ src, alt, caption }, i) => (
            <motion.figure
              key={src}
              className="relative overflow-hidden rounded-4xl border-[6px] border-white bg-white shadow-surface group"
              initial={shouldReduce ? {} : { opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '240px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                aria-label={`View larger: ${caption}`}
                className="block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-champagne"
              >
                <img
                  src={src}
                  alt={alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={768}
                  height={512}
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-teal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-5 right-5 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-white/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Expand size={15} className="text-teal" />
                </span>
              </button>
              <figcaption className="absolute bottom-5 left-6 font-ui text-xs text-ivory/90 font-500 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                {caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <Lightbox
        items={images.map(({ src, alt, caption }) => ({
          src,
          alt,
          caption: `${caption} — concept photography`,
        }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  )
}
