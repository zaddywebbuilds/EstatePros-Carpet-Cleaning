import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { business } from '../config/business'

// Held back until the hero's own CTA has scrolled away, so the two
// never compete for the same tap.
const REVEAL_AFTER = 420

export default function StickyQuoteBar() {
  const [shown, setShown] = useState(false)
  const { pathname } = useLocation()
  const shouldReduce = useReducedMotion()

  // The contact page is the destination, so the bar has nothing to offer there.
  const suppressed = pathname === '/contact'

  useEffect(() => {
    if (suppressed) {
      setShown(false)
      return
    }
    const onScroll = () => setShown(window.scrollY > REVEAL_AFTER)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [suppressed, pathname])

  return (
    <AnimatePresence>
      {shown && !suppressed && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-30 px-3 pb-3 lg:hidden"
          style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
          initial={shouldReduce ? false : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={shouldReduce ? undefined : { y: 80, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/85 p-1.5 shadow-surface-lg backdrop-blur-xl">
            {business.phone && (
              <a
                href={`tel:${business.phone}`}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage text-forest transition-colors hover:bg-sage/70"
                aria-label={`Call ${business.name}`}
              >
                <Phone size={18} strokeWidth={2} />
              </a>
            )}

            <Link
              to="/contact"
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-forest font-sans text-sm text-linen transition-colors hover:bg-forest-light"
              style={{ fontWeight: 600, letterSpacing: '0.02em' }}
            >
              {business.ctaQuoteLabel}
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
