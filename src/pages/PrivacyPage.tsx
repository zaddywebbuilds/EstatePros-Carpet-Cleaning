import { useEffect } from 'react'
import { business } from '../config/business'

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | EstatePros Carpet Cleaning'
  }, [])

  const year = new Date().getFullYear()

  return (
    <section className="py-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <p className="section-eyebrow mb-4">Legal</p>
        <h1 className="font-heading font-600 text-teal text-3xl mb-8 leading-tight">Privacy Policy</h1>
        <p className="font-ui text-stone text-xs mb-12 italic">Last updated: {year}</p>

        <div className="prose prose-sm max-w-none space-y-8">

          <div>
            <h2 className="font-heading font-600 text-teal text-lg mb-3">1. Who we are</h2>
            <p className="font-ui text-stone text-sm leading-relaxed">
              {business.name} operates in Calgary, Alberta, Canada. This privacy policy explains how we
              collect, use, and protect the personal information you share with us when you use this website
              or contact us.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-600 text-teal text-lg mb-3">2. Information we collect</h2>
            <p className="font-ui text-stone text-sm leading-relaxed mb-3">
              We collect the following information only when you voluntarily provide it through our contact or
              quote request form:
            </p>
            <ul className="space-y-1 pl-4">
              {['Full name', 'Email address', 'Phone number (optional)', 'Property type and address or neighbourhood', 'Service details and message you provide'].map(item => (
                <li key={item} className="font-ui text-stone text-sm flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-champagne shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-ui text-stone text-sm leading-relaxed mt-3">
              We do not use cookies for tracking or analytics beyond standard web hosting logs.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-600 text-teal text-lg mb-3">3. How we use your information</h2>
            <p className="font-ui text-stone text-sm leading-relaxed">
              Information you submit is used solely to respond to your enquiry, provide the requested quote,
              and communicate with you regarding your service request. We do not use your information for
              marketing purposes without your explicit consent.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-600 text-teal text-lg mb-3">4. Sharing your information</h2>
            <p className="font-ui text-stone text-sm leading-relaxed">
              We do not sell, rent, or share your personal information with third parties for their marketing
              purposes. Your information may be transmitted to our form processing provider (e.g. Formspree)
              solely for the purpose of delivering your enquiry to us. We do not use your data for any other
              purpose.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-600 text-teal text-lg mb-3">5. Data retention</h2>
            <p className="font-ui text-stone text-sm leading-relaxed">
              We retain enquiry information only as long as is necessary to respond to and complete your
              service request, or as required by applicable law.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-600 text-teal text-lg mb-3">6. Your rights (PIPEDA)</h2>
            <p className="font-ui text-stone text-sm leading-relaxed">
              Under Canada&rsquo;s Personal Information Protection and Electronic Documents Act (PIPEDA), you have
              the right to access the personal information we hold about you and to request corrections.
              To exercise these rights, contact us using the details below.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-600 text-teal text-lg mb-3">7. Security</h2>
            <p className="font-ui text-stone text-sm leading-relaxed">
              We take reasonable measures to protect your personal information. This website uses HTTPS
              encryption. No method of transmission over the internet is completely secure, but we take
              appropriate precautions.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-600 text-teal text-lg mb-3">8. Contact</h2>
            <p className="font-ui text-stone text-sm leading-relaxed">
              If you have questions or concerns about this Privacy Policy or how your information is handled,
              please contact us at:
            </p>
            <div className="mt-3 p-4 bg-mist/50 rounded-xl">
              <p className="font-ui text-sm text-teal">
                <strong>{business.name}</strong><br />
                Calgary, Alberta, Canada
                {business.email && <><br />{business.email}</>}
                {business.phone && <><br />{business.phoneDisplay}</>}
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading font-600 text-teal text-lg mb-3">9. Changes to this policy</h2>
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
