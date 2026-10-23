import { useEffect, useState } from 'react'
import { business } from '../config/business'

type Status = { open: boolean; label: string }

/**
 * The shop keeps Toronto hours, so the status has to be read in Toronto time
 * rather than the visitor's. Intl gives us the weekday and clock there without
 * pulling in a date library.
 */
function readStatus(): Status {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: business.timeZone,
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(new Date())

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  const weekday = get('weekday')
  // en-CA returns "24" rather than "00" at midnight.
  const hour = Number(get('hour')) % 24
  const minutes = hour * 60 + Number(get('minute'))

  const today = business.hours.find((h) => h.day === weekday)
  if (!today?.open || !today.close) return { open: false, label: 'Closed today' }

  const toMinutes = (t: string) => {
    const [h, m] = t.split(':').map(Number)
    return h * 60 + m
  }
  const opens = toMinutes(today.open)
  const closes = toMinutes(today.close)

  if (minutes < opens) return { open: false, label: 'Opens 8:00am' }
  if (minutes >= closes) return { open: false, label: 'Closed · Opens 8:00am' }
  return { open: true, label: 'Open now · Closes 5:00pm' }
}

export default function OpenStatus({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  // Rendered empty on the first paint so the prerendered HTML and the
  // hydrated markup agree, then filled in once we know the visitor's clock.
  const [status, setStatus] = useState<Status | null>(null)

  useEffect(() => {
    setStatus(readStatus())
    const id = window.setInterval(() => setStatus(readStatus()), 60_000)
    return () => window.clearInterval(id)
  }, [])

  if (!status) return null

  const dotColour = status.open ? 'bg-emerald-500' : 'bg-stone-light'
  const textColour = tone === 'dark' ? 'text-linen/70' : 'text-stone'

  return (
    <span className={`inline-flex items-center gap-2 font-ui text-xs ${textColour}`}>
      <span className="relative flex h-2 w-2 shrink-0">
        {status.open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${dotColour}`} />
      </span>
      {status.label}
    </span>
  )
}
