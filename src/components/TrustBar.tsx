import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'
import { MessageSquare, Home, MapPin, Leaf } from 'lucide-react'

const items = [
  { icon: MessageSquare, label: 'Easy quote requests', desc: 'Simple enquiry, quick response' },
  { icon: Home, label: 'Made for lived-in spaces', desc: 'Care that works around your life' },
  { icon: Leaf, label: 'Residential enquiries welcome', desc: 'Homes and suites across Calgary' },
  { icon: MapPin, label: 'Calgary-based service', desc: 'Local, attentive, community-focused' },
]

export default function TrustBar() {
  const shouldReduce = useReducedMotion()

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8" aria-label="Key service highlights">
      <div className="max-w-7xl mx-auto">
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          role="list"
        >
          {items.map(({ icon: Icon, label, desc }, i) => (
            <motion.li
              key={label}
              className="surface flex items-start gap-4 px-6 py-6"
              initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '240px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-11 h-11 bg-mist rounded-2xl flex items-center justify-center shrink-0">
                <Icon size={18} className="text-teal" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-heading text-teal text-lg leading-snug" style={{ fontWeight: 600 }}>
                  {label}
                </p>
                <p className="font-ui text-stone text-xs mt-1 leading-snug">{desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
