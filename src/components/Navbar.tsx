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
      {/* Microbar */}
      <div className="bg-teal text-ivory/80 text-xs font-ui font-500 tracking-wide py-2 px-4 flex items-center justify-between">
        <span>Serving Calgary, Alberta</span>
        <Link
          to="/contact"
          className="text-champagne hover:text-champagne-dark transition-colors duration-200"
          style={{ letterSpacing: '0.06em' }}
        >
          {business.ctaQuoteLabel} &rarr;
        </Link>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(16,44,51,0.08)]'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="EstatePros Carpet Cleaning - Home"
          >
            <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center shrink-0">
              <span className="text-ivory font-heading font-800 text-sm">E</span>
            </div>
            <span className="font-heading font-700 text-teal text-lg leading-none">
              Estate<span className="text-champagne">Pros</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-sm font-ui font-500 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-teal bg-mist/60'
                        : 'text-ink/70 hover:text-teal hover:bg-mist/40'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {business.phone && (
              <a
                href={`tel:${business.phone}`}
                className="text-sm font-ui font-500 text-teal/80 hover:text-teal transition-colors"
              >
                {business.phoneDisplay}
              </a>
            )}
            <Link
              to="/contact"
              className="btn-primary text-white bg-teal hover:bg-teal-light"
              style={{ fontSize: '0.875rem' }}
            >
              {business.ctaQuoteLabel}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-teal hover:bg-mist/60 transition-colors"
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
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] bg-ivory shadow-2xl flex flex-col lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-mist">
                <span className="font-heading font-700 text-teal text-lg">
                  Estate<span className="text-champagne">Pros</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg text-teal hover:bg-mist/60 transition-colors"
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
                        `block px-4 py-3 text-base font-heading font-600 rounded-xl transition-colors duration-200 ${
                          isActive
                            ? 'text-teal bg-mist'
                            : 'text-ink hover:text-teal hover:bg-mist/60'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="px-6 py-6 border-t border-mist">
                <Link
                  to="/contact"
                  className="btn-primary w-full text-white bg-teal justify-center"
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
