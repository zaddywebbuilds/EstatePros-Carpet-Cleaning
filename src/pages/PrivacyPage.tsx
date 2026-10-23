import { useEffect } from 'react'
import { business } from '../config/business'

export default function PrivacyPage() {
  useEffect(() => {
    document.title = `Privacy Policy | ${business.name}`
  }, [])

  const year = new Date().getFullYear()

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="section-eyebrow mb-5">Legal</p>
        <h1 className="mb-4 font-heading text-4xl leading-tight text-forest" style={{ fontWeight: 400, letterSpacing: '-0.03em' }}>
          Privacy Policy
        </h1>
        <p className="mb-10 font-ui text-xs italic text-stone">Last updated: {year}</p>

        <div className="surface space-y-8 px-7 py-9 sm:px-10">

          <div>
            <h2 className="mb-3 font-heading text-lg text-forest" style={{ fontWeight: 500 }}>1. Who we are</h2>
            <p className="font-ui text-stone text-sm leading-relaxed">
              {business.name} operates in North York, Ontario, Canada. This privacy policy explains how we
              collect, use, and protect the personal information you share with us when you use this website
              or contact us.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-heading text-lg text-forest" style={{ fontWeight: 500 }}>2. Information we collect</h2>
            <p className="font-ui text-stone text-sm leading-relaxed mb-3">
              We collect the following information only when you voluntarily provide it through our contact or
              quote request form:
            </p>
            <ul className="space-y-1 pl-4">
              {['Full name', 'Email address', 'Phone number (optional)', 'Property type and address or neighbourhood', 'Service details and message you provide'].map(item => (
                <li key={item} className="font-ui text-stone text-sm flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-brass shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-ui text-stone text-sm leading-relaxed mt-3">
              We do not use cookies for tracking or analytics beyond standard web hosting logs.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-heading text-lg text-forest" style={{ fontWeight: 500 }}>3. How we use your information</h2>
            <p className="font-ui text-stone text-sm leading-relaxed">
              Information you submit is used solely to respond to your enquiry, provide the requested quote,
              and communicate with you regarding your service request. We do not use your information for
              marketing purposes without your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-heading text-lg text-forest" style={{ fontWeight: 500 }}>4. Sharing your information</h2>
            <p className="font-ui text-stone text-sm leading-relaxed">
              We do not sell, rent, or share your personal information with third parties for their marketing
              purposes. Your information may be transmitted to our form processing provider (e.g. Formspree)
              solely for the purpose of delivering your enquiry to us. We do not use your data for any other
              purpose.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-heading text-lg text-forest" style={{ fontWeight: 500 }}>5. Data retention</h2>
            <p className="font-ui text-stone text-sm leading-relaxed">
              We retain enquiry information only as long as is necessary to respond to and complete your
              service request, or as required by applicable law.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-heading text-lg text-forest" style={{ fontWeight: 500 }}>6. Your rights (PIPEDA)</h2>
            <p className="font-ui text-stone text-sm leading-relaxed">
              Under Canada&rsquo;s Personal Information Protection and Electronic Documents Act (PIPEDA), you have
              the right to access the personal information we hold about you and to request corrections.
              To exercise these rights, contact us using the details below.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-heading text-lg text-forest" style={{ fontWeight: 500 }}>7. Security</h2>
            <p className="font-ui text-stone text-sm leading-relaxed">
              We take reasonable measures to protect your personal information. This website uses HTTPS
              encryption. No method of transmission over the internet is completely secure, but we take
              appropriate precautions.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-heading text-lg text-forest" style={{ fontWeight: 500 }}>8. Contact</h2>
            <p className="font-ui text-stone text-sm leading-relaxed">
              If you have questions or concerns about this Privacy Policy or how your information is handled,
              please contact us at:
            </p>
            <div className="mt-3 p-4 bg-sage/50 rounded-xl">
              <p className="font-ui text-sm text-forest">
                <strong>{business.name}</strong><br />
                {business.streetAddress}<br />
                {business.addressLocality}, {business.provinceCode} {business.postalCode}, {business.country}
                {business.email && <><br />{business.email}</>}
                {business.phone && <><br />{business.phoneDisplay}</>}
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-3 font-heading text-lg text-forest" style={{ fontWeight: 500 }}>9. Changes to this policy</h2>
            <p className="font-ui text-stone text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. The most current version will always be
              available on this page with the date it was last updated.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
