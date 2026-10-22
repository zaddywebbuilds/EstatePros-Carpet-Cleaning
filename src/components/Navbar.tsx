import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { business } from '../config/business'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Approach', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

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
      {/* Floating nav - a surface, never a full-bleed band */}
      <nav
        className="sticky top-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 pb-2"
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between gap-4 rounded-full px-4 sm:px-5 py-2.5 transition-all duration-500 ${
            scrolled
              ? 'bg-white/80 backdrop-blur-xl shadow-surface border border-white/70'
              : 'bg-white/55 backdrop-blur-lg shadow-surface border border-white/60'
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 shrink-0"
            aria-label="EstatePros Carpet Cleaning - Home"
          >
            <div className="w-9 h-9 bg-teal rounded-full flex items-center justify-center shrink-0">
              <span className="text-ivory font-heading text-base" style={{ fontWeight: 600 }}>E</span>
            </div>
            <span className="font-heading text-teal text-xl leading-none" style={{ fontWeight: 600 }}>
              Estate<span className="text-champagne-dark">Pros</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5" role="list">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-ui font-500 rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-teal bg-white/90 shadow-sm'
                        : 'text-stone hover:text-teal hover:bg-white/60'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {business.phone && (
              <a
                href={`tel:${business.phone}`}
                className="text-sm font-ui font-500 text-stone hover:text-teal transition-colors"
              >
                {business.phoneDisplay}
              </a>
            )}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-2.5 font-sans text-sm text-ivory transition-all duration-300 hover:shadow-surface"
              style={{ fontWeight: 600, letterSpacing: '0.02em' }}
            >
              {business.ctaQuoteLabel}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-full text-teal hover:bg-white/70 transition-colors"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm lg:hidden"
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
              className="fixed top-3 right-3 bottom-3 z-50 w-80 max-w-[90vw] bg-sand-warm rounded-4xl shadow-surface-lg border border-white/80 flex flex-col overflow-hidden lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-sand-deep">
                <span className="font-heading text-teal text-xl" style={{ fontWeight: 600 }}>
                  Estate<span className="text-champagne-dark">Pros</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-full text-teal hover:bg-white/70 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <ul className="flex flex-col px-4 py-4 gap-1 flex-1" role="list">
                {navLinks.map(({ label, to }, i) => (
                  <motion.li
                    key={to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <NavLink
                      to={to}
                      end={to === '/'}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-lg font-heading rounded-2xl transition-colors duration-200 ${
                          isActive
                            ? 'text-teal bg-white shadow-sm'
                            : 'text-ink hover:text-teal hover:bg-white/70'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="px-6 py-6 border-t border-sand-deep">
                <Link
                  to="/contact"
                  className="btn-primary w-full justify-center"
                >
                  {business.ctaQuoteLabel}
                </Link>
                {business.phone && (
                  <a
                    href={`tel:${business.phone}`}
                    className="mt-3 block text-center text-sm font-ui text-teal/70 hover:text-teal transition-colors"
                  >
                    {business.phoneDisplay}
                  </a>
                )}
                <p className="mt-4 text-xs text-stone text-center">Serving Calgary, Alberta</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
