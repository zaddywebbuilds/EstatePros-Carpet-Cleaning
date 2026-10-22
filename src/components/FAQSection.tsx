import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How do I request a quote?',
    a: "Use the contact form on this site to send us an enquiry. Describe your space, the service you're interested in, and any specific concerns. We'll follow up to clarify details and provide guidance on next steps. Submitting an enquiry is not a booking.",
  },
  {
    q: 'How should I prepare before a cleaning appointment?',
    a: "We'll discuss specific preparation during the booking process, as it depends on the service and your space. In general, removing small objects and breakables from the area being cleaned is helpful. We can advise on furniture before we arrive.",
  },
  {
    q: 'How long will my carpets take to dry?',
    a: "Drying time varies depending on carpet type, humidity, ventilation, and cleaning method used. We'll give you a realistic estimate after assessing your situation. We do not make guarantees about drying time prior to inspecting your space.",
  },
  {
    q: 'Can you treat stains and odours?',
    a: "Depending on the stain type, fiber, and how long it has been present, targeted treatment may be possible. We do not guarantee complete removal of all stains or odours. We'll give you an honest assessment before any work begins.",
  },
  {
    q: 'Do I need to move furniture?',
    a: "Furniture moving arrangements are discussed during the booking process and depend on the scope of the job. We'll work with you to find a practical approach that suits your space and needs.",
  },
  {
    q: 'Is your service safe for homes with pets?',
    a: "We'll discuss your specific situation during the enquiry process, including any sensitivities related to your pets. Please mention pets when you send your enquiry so we can factor this into our approach.",
  },
  {
    q: 'Do you clean commercial carpets?',
    a: "We welcome enquiries from commercial property owners and managers. Please use the contact form to describe your space, and we'll let you know how we can assist.",
  },
  {
    q: 'Which areas of Calgary do you serve?',
    a: "We serve Calgary and surrounding areas. Specific coverage is confirmed on a per-job basis. Include your neighbourhood or postal code in your enquiry and we'll confirm availability.",
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      className="border-b border-mist last:border-0"
      initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '240px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="font-heading font-600 text-teal text-sm sm:text-base group-hover:text-teal-light transition-colors leading-snug">
          {q}
        </span>
        <span className="mt-0.5 shrink-0 w-7 h-7 rounded-full border border-mist flex items-center justify-center text-stone group-hover:border-teal group-hover:text-teal transition-colors">
          {open ? <Minus size={13} strokeWidth={2.5} /> : <Plus size={13} strokeWidth={2.5} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="font-ui text-stone text-sm leading-relaxed pb-5 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section className="py-8 px-4 sm:px-6" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-eyebrow mb-4">FAQ</p>
          <h2
            id="faq-heading"
            className="section-heading text-teal"
          >
            Common questions
          </h2>
        </div>

        <div role="list">
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
