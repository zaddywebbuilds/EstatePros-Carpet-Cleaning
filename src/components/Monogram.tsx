type Props = {
  className?: string
  /** 'solid' is the forest disc for light backgrounds; 'light' inverts it. */
  variant?: 'solid' | 'light'
}

/**
 * JC monogram inside a ring. Drawn rather than set in a webfont so the mark
 * is identical before the fonts load and at any size.
 */
export default function Monogram({ className = 'h-10 w-10', variant = 'solid' }: Props) {
  const disc = variant === 'solid' ? '#0E2A23' : '#FAF7F1'
  const glyph = variant === 'solid' ? '#FAF7F1' : '#0E2A23'

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Jose Cardoso Cleaning Service monogram"
    >
      <circle cx="24" cy="24" r="24" fill={disc} />
      <circle cx="24" cy="24" r="20.5" fill="none" stroke="#BE9B5E" strokeWidth="1" opacity="0.65" />
      <text
        x="24"
        y="31.5"
        textAnchor="middle"
        fill={glyph}
        fontFamily="Fraunces, Georgia, serif"
        fontSize="19"
        fontWeight="500"
        letterSpacing="0.5"
      >
        JC
      </text>
    </svg>
  )
}
