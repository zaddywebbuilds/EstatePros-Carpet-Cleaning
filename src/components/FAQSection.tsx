import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'How do I request a quote?',
    a: 'Use the contact form on this site, or call (438) 922-6861 during business hours. Describe the space, the service you have in mind and anything specific you are worried about. We follow up to clarify the details and explain the next step. Sending an enquiry is not a booking.',
  },
  {
    q: 'What are your hours?',
    a: 'Monday to Friday, 8:00am to 5:00pm. We are closed Saturday and Sunday. Enquiries sent through the form over the weekend are picked up on the next working day.',
  },
  {
    q: 'Which areas do you cover?',
    a: 'We work out of 991 Caledonia Road in North York and cover North York and much of Toronto. Coverage is confirmed per job, so include your neighbourhood or postal code in the enquiry and we will tell you right away.',
  },
  {
    q: 'How should I prepare before you arrive?',
    a: 'We go over preparation when the visit is arranged, because it depends on the service and the space. In general it helps to clear small objects and breakables from the area being cleaned. We will tell you what to do about furniture before the day.',
  },
  {
    q: 'How long will the carpet take to dry?',
    a: 'Drying time depends on the carpet, the humidity, the ventilation and the method used. We give you a realistic estimate once we have seen the space. We do not promise a drying time before inspecting it.',
  },
  {
    q: 'Can you get rid of stains and odours?',
    a: 'Often, but not always. It depends on what caused the stain, the fibre, and how long it has been there. We will give you an honest assessment before any work starts rather than guarantee a result we cannot promise.',
  },
  {
    q: 'Do I need to move the furniture?',
    a: 'We agree that when the job is arranged, and it depends on the scope. There is usually a practical middle ground, and we will work it out with you rather than leave it as a surprise on the day.',
  },
  {
    q: 'Is it safe for homes with pets?',
    a: 'Mention your pets in the enquiry and we will factor them into the approach, including any sensitivities and where they will be while we work.',
  },
  {
    q: 'Do you clean commercial spaces?',
    a: 'Yes, enquiries from offices, suites and property managers are welcome. Describe the floor area and how it is used and we will tell you how we can help.',
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      className="border-b border-forest/10 last:border-0"
      initial={shouldReduce ? {} : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '140px' }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        className="group flex w-full items-start justify-between gap-5 py-6 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="flex items-start gap-4">
          <span
            className="mt-1 shrink-0 font-ui text-[0.68rem] tabular-nums text-brass-dark"
            style={{ fontWeight: 600 }}
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className="font-heading text-[1.02rem] leading-snug text-forest transition-colors group-hover:text-brass-dark sm:text-[1.15rem]"
            style={{ fontWeight: 500 }}
          >
            {q}
          </span>
        </span>
        <span
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest/15 text-stone transition-all duration-300 group-hover:border-brass group-hover:text-brass-dark ${
            open ? 'rotate-45 border-brass bg-brass text-forest-deep' : ''
          }`}
        >
          <Plus size={14} strokeWidth={2.5} />
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
            transition={{ duration: shouldReduce ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="max-w-2xl pb-7 pl-9 font-ui text-[0.9rem] leading-[1.75] text-stone">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section className="section-y px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <div className="mb-7 text-center sm:mb-9">
          <p className="section-eyebrow section-eyebrow-center mb-5">FAQ</p>
          <h2 id="faq-heading" className="section-heading">
            Common questions
          </h2>
        </div>

        <div className="surface px-6 py-2 sm:px-10">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
