import { motion, useReducedMotion } from 'framer-motion'
import { Clock, Home, Building2, MapPin } from 'lucide-react'

const items = [
  {
    icon: Clock,
    label: 'Weekdays, 8 to 5',
    desc: 'Monday through Friday, with the day planned around your access.',
  },
  {
    icon: Home,
    label: 'Lived-in homes',
    desc: 'Work that fits around pets, kids and furniture that has to stay put.',
  },
  {
    icon: Building2,
    label: 'Offices & suites',
    desc: 'Common areas and workspaces cleaned on a schedule that suits the floor.',
  },
  {
    icon: MapPin,
    label: 'Based on Caledonia Rd',
    desc: 'A local crew working out of North York, not a dispatch centre.',
  },
]

export default function TrustBar() {
  const shouldReduce = useReducedMotion()

  return (
    <section className="section-y px-4 sm:px-6 lg:px-8" aria-label="What to expect">
      <div className="mx-auto max-w-7xl">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {items.map(({ icon: Icon, label, desc }, i) => (
            <motion.li
              key={label}
              className="group surface px-5 py-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-surface-lg"
              initial={shouldReduce ? {} : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '160px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-sage text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-brass">
                <Icon size={18} strokeWidth={1.75} />
              </span>
              <p className="font-heading text-lg leading-snug text-forest" style={{ fontWeight: 600 }}>
                {label}
              </p>
              <p className="mt-2 font-ui text-[0.82rem] leading-relaxed text-stone">{desc}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
