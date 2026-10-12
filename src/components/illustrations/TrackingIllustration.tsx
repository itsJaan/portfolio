// Ilustración genérica de rastreo GPS: no representa datos ni pantallas reales de ninguna app
export const TrackingIllustration = () => (
  <svg viewBox="0 0 480 270" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-label="Illustration of a GPS fleet-tracking map">
    <defs>
      <pattern id="tracking-grid" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M24 0H0V24" fill="none" stroke="rgba(148,163,184,0.08)" strokeWidth="1" />
      </pattern>
      <linearGradient id="tracking-route" x1="0" x2="1">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
      <radialGradient id="tracking-glow">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
      </radialGradient>
    </defs>

    <rect width="480" height="270" fill="#0b1220" />
    <rect width="480" height="270" fill="url(#tracking-grid)" />

    <path d="M-10 190 C 80 170, 120 120, 210 130 S 330 60, 490 80" fill="none" stroke="rgba(148,163,184,0.18)" strokeWidth="10" />
    <path d="M60 -10 C 90 80, 70 160, 130 280" fill="none" stroke="rgba(148,163,184,0.12)" strokeWidth="8" />
    <path d="M300 -10 C 320 90, 380 150, 360 280" fill="none" stroke="rgba(148,163,184,0.12)" strokeWidth="8" />
    <path d="M-10 60 C 120 70, 220 30, 490 40" fill="none" stroke="rgba(148,163,184,0.08)" strokeWidth="6" />

    <circle cx="150" cy="215" r="30" fill="rgba(56,189,248,0.06)" stroke="rgba(56,189,248,0.25)" strokeDasharray="4 4" />

    <path
      d="M150 215 C 175 180, 190 150, 230 140 S 300 120, 330 95 S 380 70, 400 62"
      fill="none"
      stroke="url(#tracking-route)"
      strokeWidth="4"
      strokeLinecap="round"
    />
    {[
      [230, 140],
      [330, 95],
    ].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="#0b1220" stroke="#38bdf8" strokeWidth="2" />
    ))}

    <circle cx="150" cy="215" r="6" fill="#22c55e" />
    <circle cx="400" cy="62" r="34" fill="url(#tracking-glow)" />
    <circle cx="400" cy="62" r="9" fill="#38bdf8" stroke="#e0f2fe" strokeWidth="3" />

    {[
      [90, 110, '#f59e0b'],
      [280, 200, '#a78bfa'],
      [420, 170, '#22c55e'],
    ].map(([cx, cy, color]) => (
      <g key={`${cx}-${cy}`}>
        <circle cx={cx} cy={cy} r="12" fill={color as string} fillOpacity="0.15" />
        <circle cx={cx} cy={cy} r="5" fill={color as string} />
      </g>
    ))}

    <g transform="translate(24 22)">
      <rect width="132" height="46" rx="10" fill="rgba(15,23,42,0.85)" stroke="rgba(255,255,255,0.08)" />
      <circle cx="18" cy="23" r="4" fill="#22c55e" />
      <rect x="32" y="14" width="78" height="7" rx="3.5" fill="rgba(226,232,240,0.7)" />
      <rect x="32" y="27" width="52" height="6" rx="3" fill="rgba(148,163,184,0.45)" />
    </g>
  </svg>
);
