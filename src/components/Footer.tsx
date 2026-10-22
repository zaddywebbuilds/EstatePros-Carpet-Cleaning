import { Link } from 'react-router-dom'
import { MapPin, ExternalLink, Phone, Mail } from 'lucide-react'
import { business } from '../config/business'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Approach', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-ivory/80" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-teal rounded-xl flex items-center justify-center">
                <span className="text-ivory font-heading font-800 text-sm">E</span>
              </div>
              <span className="font-heading font-700 text-ivory text-xl leading-none">
                Estate<span className="text-champagne">Pros</span>
              </span>
            </div>
            <p className="font-ui text-ivory/55 text-sm leading-relaxed max-w-xs mb-6">
              Thoughtful carpet care for the spaces you live and work in. Serving Calgary, Alberta.
            </p>
            <div className="flex items-center gap-2 text-sm mb-2">
              <MapPin size={14} className="text-champagne shrink-0" />
              <span className="font-ui text-ivory/60">Calgary, Alberta, Canada</span>
            </div>
            {business.phone && (
              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-2 text-sm text-ivory/60 hover:text-ivory transition-colors"
              >
                <Phone size={14} className="text-champagne shrink-0" />
                {business.phoneDisplay}
              </a>
            )}
            {business.email && (
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-2 text-sm text-ivory/60 hover:text-ivory transition-colors mt-1"
              >
                <Mail size={14} className="text-champagne shrink-0" />
                {business.email}
              </a>
            )}
            {business.businessHours && (
              <p className="mt-2 font-ui text-xs text-ivory/45">{business.businessHours}</p>
            )}
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-xs font-ui text-champagne/80 hover:text-champagne transition-colors"
            >
              Google Business Profile
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-700 text-ivory text-sm mb-5 tracking-wide uppercase" style={{ letterSpacing: '0.08em' }}>
              Navigation
            </h3>
            <ul className="space-y-2.5" role="list">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-ui text-sm text-ivory/55 hover:text-ivory transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h3 className="font-heading font-700 text-ivory text-sm mb-5 tracking-wide uppercase" style={{ letterSpacing: '0.08em' }}>
              Get in touch
            </h3>
            <p className="font-ui text-sm text-ivory/55 leading-relaxed mb-5">
              Ready to take the next step? We&rsquo;d love to hear about your space.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-champagne text-ink font-heading font-700 text-sm rounded-full hover:bg-champagne-dark transition-colors"
              style={{ letterSpacing: '0.03em' }}
            >
              {business.ctaQuoteLabel}
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-ui text-xs text-ivory/35">
            &copy; {year} {business.name}. All rights reserved. Calgary, Alberta.
          </p>
          <ul className="flex items-center gap-6" role="list">
            {legalLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="font-ui text-xs text-ivory/35 hover:text-ivory/70 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
