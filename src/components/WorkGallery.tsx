import { motion, useReducedMotion } from 'framer-motion'

const BASE = '/EstatePros-Carpet-Cleaning'

const images = [
  {
    src: `${BASE}/images/estatepros-hero-living-room.webp`,
    alt: 'Bright, airy living room with neutral carpet and large windows overlooking Calgary skyline',
    caption: 'Premium residential space',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: `${BASE}/images/estatepros-technician-extraction.webp`,
    alt: 'Technician using professional extraction equipment on light neutral carpet',
    caption: 'Extraction in progress',
    span: '',
  },
  {
    src: `${BASE}/images/estatepros-upholstery-detail.webp`,
    alt: 'Close-up of upholstery cleaning tool on cream fabric sofa cushion',
    caption: 'Care in the details',
    span: '',
  },
  {
    src: `${BASE}/images/estatepros-carpet-wand-detail.webp`,
    alt: 'Carpet cleaning wand tool making contact with light textured carpet fibers',
    caption: 'Thoughtful attention to every fiber',
    span: 'sm:col-span-2 lg:col-span-1',
  },
]

export default function WorkGallery() {
  const shouldReduce = useReducedMotion()

  return (
    <section className="bg-ivory py-24 px-4 sm:px-6" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px]">
          {images.map(({ src, alt, caption, span }, i) => (
            <motion.figure
              key={src}
              className={`relative rounded-2xl overflow-hidden group ${span}`}
              initial={shouldReduce ? {} : { opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-4 left-4 right-4 font-ui text-xs text-ivory/90 font-500 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                {caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
