import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      drawerRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  return (
    <>
      {/* Utility strip: address, hours and phone, above the nav proper.
          Folds away on scroll so the floating bar stands alone. */}
      <div
        className={`hidden overflow-hidden transition-all duration-500 lg:block ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-14 opacity-100'
        }`}
        aria-hidden={scrolled}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-3 font-ui text-xs text-stone">
          <span className="inline-flex items-center gap-2">
            <MapPin size={13} className="text-brass-dark" strokeWidth={2} />
            {business.addressFull}
          </span>
          <span className="inline-flex items-center gap-6">
            <OpenStatus />
            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-forest"
            >
              <Phone size={13} className="text-brass-dark" strokeWidth={2} />
              {business.phoneDisplay}
            </a>
          </span>
        </div>
      </div>

      <nav
        className="sticky top-0 z-40 px-4 pb-2 pt-3 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled
              ? 'border border-white/80 bg-white/85 shadow-surface backdrop-blur-xl'
              : 'border border-white/60 bg-white/55 shadow-surface backdrop-blur-lg'
          }`}
        >
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3"
            aria-label={`${business.name} — Home`}
          >
            <Monogram className="h-10 w-10" />
            <span className="hidden leading-tight sm:block">
              <span className="block font-heading text-[1.06rem] text-forest" style={{ fontWeight: 600 }}>
                Jose Cardoso
              </span>
              <span className="block font-ui text-[0.6rem] uppercase tracking-[0.24em] text-brass-dark">
                Cleaning Service
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex" role="list">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `relative whitespace-nowrap rounded-full px-3.5 py-2 font-ui text-sm transition-all duration-200 ${
                      isActive
                        ? 'bg-forest text-linen'
                        : 'text-stone hover:bg-white/70 hover:text-forest'
                    }`
                  }
                  style={{ fontWeight: 500 }}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Link to="/contact" className="btn-primary !px-6 !py-2.5">
              {business.ctaQuoteLabel}
            </Link>
          </div>

          {/* Mobile: call button sits beside the hamburger, so the phone
              number is always one tap away without opening the drawer. */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href={`tel:${business.phone}`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-linen transition-colors hover:bg-forest-light"
              aria-label={`Call ${business.name}`}
            >
              <Phone size={17} strokeWidth={2} />
            </a>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full text-forest transition-colors hover:bg-white/70"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-forest-deep/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-nav"
              ref={drawerRef}
              role="dialog"
              aria-label="Mobile navigation menu"
              tabIndex={-1}
              className="fixed bottom-3 right-3 top-3 z-50 flex w-80 max-w-[90vw] flex-col overflow-hidden rounded-4xl border border-white/80 bg-linen shadow-surface-lg lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between border-b border-bone-deep px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <Monogram className="h-9 w-9" />
                  <span className="font-heading text-lg text-forest" style={{ fontWeight: 600 }}>
                    Jose Cardoso
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full p-2 text-forest transition-colors hover:bg-white"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="flex flex-1 flex-col gap-1 px-4 py-4" role="list">
                {navLinks.map(({ label, to }, i) => (
                  <motion.li
                    key={to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.08 }}
                  >
                    <NavLink
                      to={to}
                      end={to === '/'}
                      className={({ isActive }) =>
                        `block rounded-2xl px-4 py-3 font-heading text-lg transition-colors duration-200 ${
                          isActive
                            ? 'bg-forest text-linen'
                            : 'text-ink hover:bg-white hover:text-forest'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="border-t border-bone-deep px-5 py-5">
                <Link to="/contact" className="btn-primary w-full justify-center">
                  {business.ctaQuoteLabel}
                </Link>
                <a
                  href={`tel:${business.phone}`}
                  className="mt-3 block text-center font-ui text-sm text-forest transition-colors hover:text-brass-dark"
                >
                  {business.phoneDisplay}
                </a>
                <div className="mt-3 flex justify-center">
                  <OpenStatus />
                </div>
                <p className="mt-3 text-center font-ui text-xs leading-relaxed text-stone">
                  {business.streetAddress}
                  <br />
                  {business.addressLocality}, {business.provinceCode} {business.postalCode}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
