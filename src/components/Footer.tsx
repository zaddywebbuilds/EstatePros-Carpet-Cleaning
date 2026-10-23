import { Link } from 'react-router-dom'
import { MapPin, ExternalLink, Phone, Clock } from 'lucide-react'
import { business } from '../config/business'
import Monogram from './Monogram'
import OpenStatus from './OpenStatus'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Approach', to: '/about' },
  { label: 'Before & After', to: '/gallery' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-4 pb-28 pt-4 text-linen/80 sm:px-6 lg:px-8 lg:pb-8" role="contentinfo">
      <div className="panel-deep mx-auto max-w-7xl px-6 py-14 sm:px-12">
        <div className="mb-12 grid gap-12 md:grid-cols-3 lg:grid-cols-12">

          {/* Brand + contact */}
          <div className="lg:col-span-5">
            <div className="mb-5 flex items-center gap-3">
              <Monogram className="h-11 w-11" variant="light" />
              <span className="leading-tight">
                <span className="block font-heading text-xl text-linen" style={{ fontWeight: 500 }}>
                  Jose Cardoso
                </span>
                <span className="block font-ui text-[0.6rem] uppercase tracking-[0.24em] text-brass">
                  Cleaning Service
                </span>
              </span>
            </div>

            <p className="mb-7 max-w-xs font-ui text-sm leading-relaxed text-linen/55">
              Carpet, upholstery and deep cleaning for homes and businesses across North York
              and Toronto.
            </p>

            <address className="space-y-3 not-italic">
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 font-ui text-sm text-linen/60 transition-colors hover:text-linen"
              >
                <MapPin size={14} className="mt-0.5 shrink-0 text-brass" />
                <span>
                  {business.streetAddress}
                  <br />
                  {business.addressLocality}, {business.provinceCode} {business.postalCode}
                </span>
              </a>
              <a
                href={`tel:${business.phone}`}
                className="flex items-center gap-2.5 font-ui text-sm text-linen/60 transition-colors hover:text-linen"
              >
                <Phone size={14} className="shrink-0 text-brass" />
                {business.phoneDisplay}
              </a>
              <p className="flex items-start gap-2.5 font-ui text-sm text-linen/60">
                <Clock size={14} className="mt-0.5 shrink-0 text-brass" />
                <span>
                  Mon&ndash;Fri 8:00am&ndash;5:00pm
                  <br />
                  <span className="text-linen/40">Closed Saturday &amp; Sunday</span>
                </span>
              </p>
            </address>

            <div className="mt-5">
              <OpenStatus tone="dark" />
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3
              className="mb-5 font-ui text-[0.65rem] uppercase tracking-[0.2em] text-brass"
              style={{ fontWeight: 600 }}
            >
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-ui text-sm text-linen/55 transition-colors duration-200 hover:text-linen"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-4">
            <h3
              className="mb-5 font-ui text-[0.65rem] uppercase tracking-[0.2em] text-brass"
              style={{ fontWeight: 600 }}
            >
              Services
            </h3>
            <ul className="mb-7 space-y-3" role="list">
              {business.services
                .filter((s) => s.confirmed)
                .map((s) => (
                  <li key={s.id}>
                    <Link
                      to={`/services/${s.id}`}
                      className="font-ui text-sm text-linen/55 transition-colors duration-200 hover:text-linen"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
            </ul>
            <Link to="/contact" className="btn-brass !px-6 !py-3 !text-[0.82rem]">
              {business.ctaQuoteLabel}
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-linen/10 pt-8 sm:flex-row">
          <p className="font-ui text-xs text-linen/35">
            &copy; {year} {business.name}. {business.addressLocality}, {business.province}.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-ui text-xs text-linen/35 transition-colors hover:text-linen/70"
            >
              Google Business Profile
              <ExternalLink size={11} />
            </a>
            <Link
              to="/privacy"
              className="font-ui text-xs text-linen/35 transition-colors hover:text-linen/70"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
