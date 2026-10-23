import { business } from '../config/business'

const words = [
  ...business.services.map((s) => s.name),
  'Homes & Offices',
  'North York & Toronto',
]

/**
 * The strip is rendered twice and slid exactly half its width, so the loop
 * closes without a visible seam. aria-hidden because the same services are
 * already listed, as real links, in the grid below.
 */
export default function ServiceMarquee() {
  return (
    <div className="mask-fade-x overflow-hidden border-y border-forest/8 py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-10">
            {words.map((word) => (
              <span key={word} className="flex shrink-0 items-center gap-10">
                <span
                  className="whitespace-nowrap font-heading text-stone"
                  style={{ fontSize: 'clamp(1.05rem, 2vw, 1.5rem)', fontWeight: 400 }}
                >
                  {word}
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
