export default function Logo({
  size = 44,
  wordmark = true,
  variant = 'dark',
  subtitle = 'CORE FINANCIERO',
}) {
  const textColor = variant === 'light' ? '#ffffff' : '#007a3d'
  const subColor = variant === 'light' ? 'rgba(255,255,255,.86)' : '#4b5563'
  const nameSize = Math.round(size * 0.48)
  const subSize = Math.max(9, Math.round(size * 0.22))

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Banco Falabella"
        role="img"
      >
        <ellipse cx="22" cy="30" rx="18" ry="10" fill="#007a3d" transform="rotate(-10 22 30)" />
        <ellipse cx="25" cy="18" rx="14" ry="8" fill="#c7d900" transform="rotate(28 25 18)" />
        <ellipse cx="29" cy="25" rx="7" ry="4" fill="#005b2e" opacity=".55" transform="rotate(25 29 25)" />
      </svg>

      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.04 }}>
          <span style={{ fontWeight: 900, fontSize: nameSize, color: textColor }}>
            Banco Falabella
          </span>
          {subtitle && (
            <span style={{ fontSize: subSize, fontWeight: 800, color: subColor, letterSpacing: '1.2px' }}>
              {subtitle}
            </span>
          )}
        </span>
      )}
    </span>
  )
}
