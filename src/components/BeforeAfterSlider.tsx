import { useId, useState } from 'react'

type Props = {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  title: string
  caption: string
}

/**
 * Both layers are object-cover inside one fixed-ratio box, so the pair still
 * lines up even if the two source files differ in size.
 */
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  title,
  caption,
}: Props) {
  const [pos, setPos] = useState(50)
  const labelId = useId()

  return (
    <figure className="surface-solid overflow-hidden">
      <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full select-none overflow-hidden bg-sand-deep">
        {/* After sits underneath */}
        <img
          src={afterSrc}
          alt={afterAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          draggable={false}
        />

        {/* Before is clipped back to reveal the after */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={beforeSrc}
            alt={beforeAlt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>

        {/* Seam and grip */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/90"
          style={{ left: `${pos}%` }}
          aria-hidden="true"
        >
          <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-surface">
            <span className="font-ui text-xs font-600 tracking-widest text-teal">&#8596;</span>
          </span>
        </div>

        {/* The real control: keyboard, touch and pointer all come free */}
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="ba-range absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          aria-labelledby={labelId}
          aria-valuetext={`${pos}% revealed`}
        />
      </div>

      <figcaption className="px-6 py-5">
        <p id={labelId} className="font-heading text-teal text-xl" style={{ fontWeight: 600 }}>
          {title}
        </p>
        <p className="mt-1.5 font-ui text-sm leading-relaxed text-stone">{caption}</p>
        <p className="mt-3 font-ui text-xs italic text-stone/80">
          Illustrative visualization &mdash; not a photograph of a completed EstatePros job.
        </p>
      </figcaption>
    </figure>
  )
}
