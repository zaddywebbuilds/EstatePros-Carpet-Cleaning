import { useState, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Info } from 'lucide-react'
import { business } from '../config/business'

interface FormData {
  fullName: string
  email: string
  phone: string
  propertyType: string
  service: string
  rooms: string
  preferredDate: string
  neighbourhood: string
  message: string
  consent: boolean
  honeypot: string
}

const initForm: FormData = {
  fullName: '',
  email: '',
  phone: '',
  propertyType: '',
  service: '',
  rooms: '',
  preferredDate: '',
  neighbourhood: '',
  message: '',
  consent: false,
  honeypot: '',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const DEMO_MODE = !business.formEndpoint

const confirmedServices = business.services.filter(s => s.confirmed)

export default function QuoteForm() {
  const [form, setForm] = useState<FormData>(initForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const shouldReduce = useReducedMotion()

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    if (!form.fullName.trim()) newErrors.fullName = 'Your name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'A valid email address is required'
    }
    if (form.phone && !/^[\d\s\-().+]{7,}$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    if (!form.propertyType) newErrors.propertyType = 'Please select a property type'
    if (!form.message.trim()) newErrors.message = 'Please add a brief description'
    if (!form.consent) newErrors.consent = 'Please confirm you have read this'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.honeypot) return // Bot detected

    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      const firstError = formRef.current?.querySelector('[aria-invalid="true"]') as HTMLElement
      firstError?.focus()
      return
    }

    if (DEMO_MODE) {
      setStatus('success')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch(business.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          phone: form.phone || undefined,
          property_type: form.propertyType,
          service: form.service || 'Not specified',
          rooms: form.rooms || 'Not specified',
          preferred_date: form.preferredDate || 'Flexible',
          neighbourhood: form.neighbourhood || 'Not specified',
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border font-ui text-sm text-ink bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal/30 ${
      errors[field]
        ? 'border-red-400 bg-red-50/30'
        : 'border-mist focus:border-teal/50'
    }`

  const labelClass = 'block font-heading font-600 text-teal text-sm mb-1.5'

  if (status === 'success') {
    return (
      <motion.div
        className="text-center py-16 px-8"
        initial={shouldReduce ? {} : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-16 h-16 bg-mist rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={28} className="text-teal" />
        </div>
        <h3 className="font-heading font-600 text-teal text-xl mb-3">Enquiry received</h3>
        {DEMO_MODE ? (
          <p className="font-ui text-stone text-sm leading-relaxed max-w-sm mx-auto">
            <strong>Demo mode:</strong> In production, this would be sent to the business. Configure{' '}
            <code className="text-xs bg-mist px-1 py-0.5 rounded">business.formEndpoint</code> in{' '}
            <code className="text-xs bg-mist px-1 py-0.5 rounded">src/config/business.ts</code>.
          </p>
        ) : (
          <p className="font-ui text-stone text-sm leading-relaxed max-w-sm mx-auto">
            Thank you for reaching out. We&rsquo;ll be in touch shortly to discuss your space.
          </p>
        )}
        <button
          className="mt-8 text-sm font-heading font-600 text-champagne hover:text-champagne-dark transition-colors"
          onClick={() => setStatus('idle')}
        >
          Send another enquiry
        </button>
      </motion.div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Request a quote form"
    >
      {/* Demo mode banner */}
      {DEMO_MODE && (
        <div className="mb-6 flex items-start gap-3 p-4 bg-champagne/10 border border-champagne/30 rounded-xl">
          <Info size={16} className="text-champagne shrink-0 mt-0.5" />
          <p className="font-ui text-xs text-teal leading-relaxed">
            <strong>Demo mode:</strong> Form submissions are not being delivered. Set{' '}
            <code className="bg-white/60 px-1 rounded">formEndpoint</code> in{' '}
            <code className="bg-white/60 px-1 rounded">src/config/business.ts</code> to enable.
          </p>
        </div>
      )}

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute opacity-0 pointer-events-none h-0 overflow-hidden">
        <input tabIndex={-1} name="website" value={form.honeypot} onChange={set('honeypot')} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Full name */}
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full name <span className="text-red-400" aria-label="required">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            value={form.fullName}
            onChange={set('fullName')}
            className={inputClass('fullName')}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'err-fullName' : undefined}
            placeholder="Jane Smith"
          />
          {errors.fullName && (
            <p id="err-fullName" role="alert" className="mt-1.5 text-xs text-red-500 font-ui">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-red-400" aria-label="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={set('email')}
            className={inputClass('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'err-email' : undefined}
            placeholder="jane@example.com"
          />
          {errors.email && (
            <p id="err-email" role="alert" className="mt-1.5 text-xs text-red-500 font-ui">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-stone text-xs font-400">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={set('phone')}
            className={inputClass('phone')}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'err-phone' : undefined}
            placeholder="(403) 555-0100"
          />
          {errors.phone && (
            <p id="err-phone" role="alert" className="mt-1.5 text-xs text-red-500 font-ui">{errors.phone}</p>
          )}
        </div>

        {/* Property type */}
        <div>
          <label htmlFor="propertyType" className={labelClass}>
            Property type <span className="text-red-400" aria-label="required">*</span>
          </label>
          <select
            id="propertyType"
            value={form.propertyType}
            onChange={set('propertyType')}
            className={inputClass('propertyType')}
            aria-invalid={!!errors.propertyType}
            aria-describedby={errors.propertyType ? 'err-propertyType' : undefined}
          >
            <option value="">Select a property type</option>
            <option value="single-family-home">Single family home</option>
            <option value="condo-apartment">Condo / Apartment</option>
            <option value="townhouse">Townhouse</option>
            <option value="commercial">Commercial space</option>
            <option value="other">Other</option>
          </select>
          {errors.propertyType && (
            <p id="err-propertyType" role="alert" className="mt-1.5 text-xs text-red-500 font-ui">{errors.propertyType}</p>
          )}
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className={labelClass}>
            Service requested
          </label>
          <select
            id="service"
            value={form.service}
            onChange={set('service')}
            className={inputClass('service')}
          >
            <option value="">Not sure yet</option>
            {confirmedServices.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
            <option value="other">Other / Not listed</option>
          </select>
        </div>

        {/* Rooms */}
        <div>
          <label htmlFor="rooms" className={labelClass}>
            Approx. rooms / area
          </label>
          <input
            id="rooms"
            type="text"
            value={form.rooms}
            onChange={set('rooms')}
            className={inputClass('rooms')}
            placeholder="e.g. 3 bedrooms + living room"
          />
        </div>

        {/* Preferred date */}
        <div>
          <label htmlFor="preferredDate" className={labelClass}>
            Preferred date
            <span className="text-stone text-xs font-400"> (request only)</span>
          </label>
          <input
            id="preferredDate"
            type="date"
            value={form.preferredDate}
            onChange={set('preferredDate')}
            className={inputClass('preferredDate')}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        {/* Neighbourhood */}
        <div>
          <label htmlFor="neighbourhood" className={labelClass}>
            Calgary neighbourhood
            <span className="text-stone text-xs font-400"> (optional)</span>
          </label>
          <input
            id="neighbourhood"
            type="text"
            value={form.neighbourhood}
            onChange={set('neighbourhood')}
            className={inputClass('neighbourhood')}
            placeholder="e.g. Beltline, Tuscany, Bridgeland"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Tell us about your space <span className="text-red-400" aria-label="required">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={set('message')}
          className={`${inputClass('message')} resize-none`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'err-message' : 'msg-hint'}
          placeholder="Describe what needs attention, any specific concerns, and any context we should know."
        />
        <p id="msg-hint" className="mt-1.5 text-xs text-stone font-ui">Enquiries only &mdash; submitting this form does not confirm a booking or guarantee availability.</p>
        {errors.message && (
          <p id="err-message" role="alert" className="mt-1.5 text-xs text-red-500 font-ui">{errors.message}</p>
        )}
      </div>

      {/* Consent */}
      <div className="mt-5">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={set('consent')}
            className="mt-0.5 w-4 h-4 rounded accent-teal"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'err-consent' : undefined}
          />
          <span className="font-ui text-xs text-stone leading-relaxed group-hover:text-ink transition-colors">
            I understand this is an enquiry, not a confirmed booking. I consent to EstatePros Carpet Cleaning
            using the information I provide to respond to my enquiry. See our{' '}
            <a href="/privacy" className="underline text-teal hover:text-teal-light transition-colors">Privacy Policy</a>.
          </span>
        </label>
        {errors.consent && (
          <p id="err-consent" role="alert" className="mt-1.5 text-xs text-red-500 font-ui">{errors.consent}</p>
        )}
      </div>

      {/* Error state */}
      {status === 'error' && (
        <div className="mt-5 flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl" role="alert">
          <AlertCircle size={16} className="text-red-500 shrink-0" />
          <p className="font-ui text-xs text-red-600">Something went wrong. Please try again or contact us directly.</p>
        </div>
      )}

      {/* Submit */}
      <div className="mt-7">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center gap-2.5 px-8 py-4 bg-teal text-ivory font-heading font-600 text-sm rounded-full hover:bg-teal-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ letterSpacing: '0.03em' }}
        >
          {status === 'submitting' ? (
            <>
              <span className="w-4 h-4 border-2 border-ivory/40 border-t-ivory rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send enquiry
              <Send size={14} strokeWidth={2} />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
