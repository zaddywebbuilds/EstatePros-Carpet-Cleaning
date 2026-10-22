import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export type LightboxItem = {
  src: string
  alt: string
  caption?: string
}

type Props = {
  items: LightboxItem[]
  index: number | null
  onClose: () => void
  onNavigate: (next: number) => void
}

export default function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const open = index !== null
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const restoreTo = useRef<HTMLElement | null>(null)
  const shouldReduce = useReducedMotion()

  // Remember what had focus so it can be handed back on close.
  useEffect(() => {
    if (open) restoreTo.current = document.activeElement as HTMLElement
  }, [open])

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        onNavigate((index! + 1) % items.length)
        return
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        onNavigate((index! - 1 + items.length) % items.length)
        return
      }
      if (e.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled])'
        )
        if (!focusables || focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, index, items.length, onClose, onNavigate])

  // Hand focus back to the thumbnail that opened it.
  useEffect(() => {
    if (!open && restoreTo.current) {
      restoreTo.current.focus()
      restoreTo.current = null
    }
  }, [open])

  if (typeof document === 'undefined') return null

  const item = open ? items[index!] : null

  return createPortal(
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
          initial={shouldReduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Image ${index! + 1} of ${items.length}: ${item.alt}`}
            className="relative z-10 flex max-h-full w-full max-w-5xl flex-col"
          >
            <div className="flex items-center justify-between gap-4 pb-3">
              <p className="font-ui text-xs tracking-[0.18em] uppercase text-ivory/60">
                {index! + 1} / {items.length}
              </p>
              <button
                ref={closeRef}
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-ivory transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne"
                aria-label="Close image viewer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative overflow-hidden rounded-4xl bg-ink">
              <img
                src={item.src}
                alt={item.alt}
                className="max-h-[70svh] w-full object-contain"
                decoding="async"
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-3">
              <button
                onClick={() => onNavigate((index! - 1 + items.length) % items.length)}
                className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2.5 font-ui text-sm text-ivory transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne"
                aria-label="Previous image"
              >
                <ChevronLeft size={16} /> Previous
              </button>

              {item.caption && (
                <p className="hidden sm:block font-ui text-xs text-ivory/70">{item.caption}</p>
              )}

              <button
                onClick={() => onNavigate((index! + 1) % items.length)}
                className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2.5 font-ui text-sm text-ivory transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne"
                aria-label="Next image"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>

            {/* The caption carries the concept-photography disclosure, so it
                has to stay visible at narrow widths too. */}
            {item.caption && (
              <p className="sm:hidden pt-3 text-center font-ui text-xs text-ivory/70">
                {item.caption}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
