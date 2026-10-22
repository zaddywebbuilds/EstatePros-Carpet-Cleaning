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
    <section className="bg-mist py-10 px-4" aria-label="Key service highlights">
      <div className="max-w-7xl mx-auto">
        <ul
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          role="list"
        >
          {items.map(({ icon: Icon, label, desc }, i) => (
            <motion.li
              key={label}
              className="flex items-start gap-4 py-2"
              initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={17} className="text-teal" strokeWidth={1.75} />
              </div>
              <div>
                <p className="font-heading font-700 text-teal text-sm leading-snug">{label}</p>
                <p className="font-ui text-stone text-xs mt-0.5 leading-snug">{desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
