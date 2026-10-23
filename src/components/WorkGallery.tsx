import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Expand } from 'lucide-react'
import Lightbox from './Lightbox'
import { BASE } from '../config/business'

const images = [
  {
    src: `${BASE}/images/upholstery-detail.webp`,
    alt: 'Close-up of an upholstery cleaning tool on a cream fabric sofa cushion',
    caption: 'Care in the details',
  },
  {
    src: `${BASE}/images/carpet-wand-detail.webp`,
    alt: 'Carpet cleaning wand making contact with light textured carpet fibres',
    caption: 'Attention to every fibre',
  },
  {
    src: `${BASE}/images/technician-equipment-setup.webp`,
    alt: 'Cleaning equipment set up and hoses run out ready for work to begin',
    caption: 'Set up before a single pass',
  },
]

export default function WorkGallery() {
  const shouldReduce = useReducedMotion()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <section className="section-y px-4 sm:px-6 lg:px-8" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-eyebrow mb-5">Up Close</p>
            <h2 id="gallery-heading" className="section-heading">
              A closer look at the craft
            </h2>
          </div>
          <p className="font-ui text-xs italic text-stone sm:text-right">
            Concept photography &mdash; illustrative only
          </p>
        </div>

        {/* Equal heights, unequal widths: a filmstrip rather than three
            identical boxes, and no ragged second row to fill. */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {images.map(({ src, alt, caption }, i) => (
            <motion.figure
              key={src}
              className={`group relative rounded-4xl border border-bone-deep/60 bg-white p-3 shadow-surface ${
                ['sm:col-span-2 lg:col-span-5', 'lg:col-span-4', 'lg:col-span-3'][i] ?? 'lg:col-span-4'
              }`}
              initial={shouldReduce ? {} : { opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '140px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="relative block w-full overflow-hidden rounded-3xl bg-bone-deep"
                aria-label={`Open larger view: ${caption}`}
              >
                <img
                  src={src}
                  alt={alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-smooth group-hover:scale-105 lg:aspect-auto lg:h-[21rem]"
                  width={768}
                  height={512}
                  loading="lazy"
                />
                <span className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-surface transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Expand size={15} className="text-forest" />
                </span>
              </button>
              {/* Caption sits under the picture, not across it */}
              <figcaption className="px-1 pb-1 pt-4 font-ui text-[0.78rem] text-stone">
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
