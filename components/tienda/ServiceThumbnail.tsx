// SVG thumbnails únicos por servicio — dark industrial aesthetic

interface Props {
  slug: string;
  className?: string;
}

export function ServiceThumbnail({ slug, className = "" }: Props) {
  return (
    <div className={`relative w-full bg-carbon overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 320 200"
        className="w-full h-full"
        aria-hidden
      >
        {thumbnails[slug] ?? thumbnails["default"]}
      </svg>
    </div>
  );
}

const thumbnails: Record<string, React.ReactNode> = {
  "vinil-textil": (
    <>
      <rect width="320" height="200" fill="#1E1E1E" />
      {/* T-shirt silhouette */}
      <path
        d="M110 60 L80 80 L95 90 L95 150 L225 150 L225 90 L240 80 L210 60 L190 75 Q160 85 130 75 Z"
        fill="none" stroke="#3D3D3D" strokeWidth="2"
      />
      {/* Cut lines (plotter paths) */}
      <path d="M120 70 L120 145" stroke="#FF3B00" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
      <path d="M200 70 L200 145" stroke="#FF3B00" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
      <path d="M95 110 L225 110" stroke="#FF3B00" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
      {/* Label */}
      <text x="160" y="105" textAnchor="middle" fill="#FF3B00" fontSize="11" fontFamily="monospace" letterSpacing="3" opacity="0.9">VNL TEXTIL</text>
      {/* Corner marks */}
      <line x1="20" y1="20" x2="36" y2="20" stroke="#525252" strokeWidth="1" />
      <line x1="20" y1="20" x2="20" y2="36" stroke="#525252" strokeWidth="1" />
      <line x1="300" y1="20" x2="284" y2="20" stroke="#525252" strokeWidth="1" />
      <line x1="300" y1="20" x2="300" y2="36" stroke="#525252" strokeWidth="1" />
    </>
  ),

  "vinil-autoadherible": (
    <>
      <rect width="320" height="200" fill="#1E1E1E" />
      {/* Adhesive sheet */}
      <rect x="60" y="40" width="180" height="120" fill="none" stroke="#3D3D3D" strokeWidth="1.5" />
      {/* Peel corner */}
      <path d="M200 160 L240 130 L240 160 Z" fill="#FF3B00" opacity="0.15" />
      <path d="M200 160 L240 130" stroke="#FF3B00" strokeWidth="1.5" />
      <path d="M240 130 L240 160 L200 160" stroke="#FF3B00" strokeWidth="1" opacity="0.5" />
      {/* Grid pattern on sheet */}
      {[80, 110, 140, 170].map((x) => (
        <line key={x} x1={x} y1="40" x2={x} y2="160" stroke="#2A2A2A" strokeWidth="1" />
      ))}
      {[65, 90, 115, 140].map((y) => (
        <line key={y} x1="60" y1={y} x2="200" y2={y} stroke="#2A2A2A" strokeWidth="1" />
      ))}
      <text x="130" y="108" textAnchor="middle" fill="#9A9A9A" fontSize="10" fontFamily="monospace" letterSpacing="2">ADHESIVO</text>
      <line x1="20" y1="20" x2="36" y2="20" stroke="#525252" strokeWidth="1" />
      <line x1="20" y1="20" x2="20" y2="36" stroke="#525252" strokeWidth="1" />
    </>
  ),

  "sublimacion": (
    <>
      <rect width="320" height="200" fill="#1E1E1E" />
      {/* Mug circle */}
      <circle cx="160" cy="110" r="55" fill="none" stroke="#3D3D3D" strokeWidth="2" />
      <circle cx="160" cy="110" r="42" fill="none" stroke="#525252" strokeWidth="1" strokeDasharray="3 3" />
      {/* Handle */}
      <path d="M215 95 Q240 95 240 110 Q240 125 215 125" fill="none" stroke="#3D3D3D" strokeWidth="2" />
      {/* Heat waves */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${120 + i * 20} 42 Q${125 + i * 20} 30 ${130 + i * 20} 42 Q${135 + i * 20} 54 ${140 + i * 20} 42`}
          fill="none" stroke="#FF3B00" strokeWidth="1.5" opacity={0.8 - i * 0.15}
        />
      ))}
      <text x="160" y="115" textAnchor="middle" fill="#FF3B00" fontSize="10" fontFamily="monospace" letterSpacing="2">SUBLIMACIÓN</text>
      <line x1="20" y1="20" x2="36" y2="20" stroke="#525252" strokeWidth="1" />
      <line x1="20" y1="20" x2="20" y2="36" stroke="#525252" strokeWidth="1" />
    </>
  ),

  "gran-formato": (
    <>
      <rect width="320" height="200" fill="#1E1E1E" />
      {/* Banner/lona */}
      <rect x="30" y="55" width="260" height="90" fill="none" stroke="#3D3D3D" strokeWidth="1.5" />
      {/* Corner eyelets */}
      {[[30,55],[290,55],[30,145],[290,145]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="#2A2A2A" stroke="#FF3B00" strokeWidth="1.5" />
      ))}
      {/* Scale arrows */}
      <line x1="30" y1="170" x2="290" y2="170" stroke="#525252" strokeWidth="1" />
      <polygon points="22,170 32,166 32,174" fill="#525252" />
      <polygon points="298,170 288,166 288,174" fill="#525252" />
      {/* Inner content indicator */}
      <rect x="55" y="72" width="80" height="56" fill="#2A2A2A" />
      <rect x="155" y="72" width="110" height="20" fill="#2A2A2A" />
      <rect x="155" y="98" width="80" height="14" fill="#1E1E1E" stroke="#525252" strokeWidth="1" />
      <text x="160" y="185" textAnchor="middle" fill="#525252" fontSize="9" fontFamily="monospace" letterSpacing="2">3200mm</text>
      <line x1="20" y1="20" x2="36" y2="20" stroke="#525252" strokeWidth="1" />
      <line x1="20" y1="20" x2="20" y2="36" stroke="#525252" strokeWidth="1" />
    </>
  ),

  "bordado": (
    <>
      <rect width="320" height="200" fill="#1E1E1E" />
      {/* Embroidery hoop */}
      <circle cx="160" cy="100" r="68" fill="none" stroke="#3D3D3D" strokeWidth="3" />
      <circle cx="160" cy="100" r="60" fill="none" stroke="#525252" strokeWidth="1" />
      {/* Tension screw */}
      <rect x="155" y="25" width="10" height="12" rx="2" fill="#3D3D3D" stroke="#525252" strokeWidth="1" />
      {/* Stitch pattern inside hoop */}
      {[[-20,0],[0,-20],[20,0],[0,20]].map(([dx, dy], i) => (
        <path
          key={i}
          d={`M${160 + dx} ${100 + dy} Q${160 + dx * 1.5} ${100 + dy * 0.5} ${160} ${100}`}
          fill="none" stroke="#FF3B00" strokeWidth="1.5" opacity="0.7"
        />
      ))}
      <circle cx="160" cy="100" r="4" fill="#FF3B00" opacity="0.9" />
      {/* Needle */}
      <line x1="205" y1="55" x2="175" y2="85" stroke="#C8C8C8" strokeWidth="2" />
      <ellipse cx="207" cy="53" rx="3" ry="6" fill="none" stroke="#C8C8C8" strokeWidth="1.5" transform="rotate(-45 207 53)" />
      <line x1="20" y1="20" x2="36" y2="20" stroke="#525252" strokeWidth="1" />
      <line x1="20" y1="20" x2="20" y2="36" stroke="#525252" strokeWidth="1" />
    </>
  ),

  "corte-laser-cnc": (
    <>
      <rect width="320" height="200" fill="#1E1E1E" />
      {/* Cross-hair */}
      <line x1="160" y1="20" x2="160" y2="180" stroke="#3D3D3D" strokeWidth="1" />
      <line x1="20" y1="100" x2="300" y2="100" stroke="#3D3D3D" strokeWidth="1" />
      {/* Target circles */}
      <circle cx="160" cy="100" r="60" fill="none" stroke="#3D3D3D" strokeWidth="1" />
      <circle cx="160" cy="100" r="38" fill="none" stroke="#525252" strokeWidth="1" />
      <circle cx="160" cy="100" r="14" fill="none" stroke="#FF3B00" strokeWidth="1.5" />
      {/* Laser beam */}
      <line x1="40" y1="20" x2="148" y2="88" stroke="#FF3B00" strokeWidth="1.5" opacity="0.8" strokeDasharray="6 3" />
      <circle cx="160" cy="100" r="3" fill="#FF3B00" />
      {/* Tick marks */}
      {[-60,-40,-20,20,40,60].map((offset) => (
        <line key={offset} x1={160 + offset} y1="96" x2={160 + offset} y2="104" stroke="#525252" strokeWidth="1" />
      ))}
      <line x1="20" y1="180" x2="36" y2="180" stroke="#525252" strokeWidth="1" />
      <line x1="20" y1="180" x2="20" y2="164" stroke="#525252" strokeWidth="1" />
    </>
  ),

  "impresos": (
    <>
      <rect width="320" height="200" fill="#1E1E1E" />
      {/* Stacked papers (offset) */}
      <rect x="95" y="62" width="130" height="86" fill="#1E1E1E" stroke="#3D3D3D" strokeWidth="1.5" transform="rotate(-4 160 105)" />
      <rect x="95" y="62" width="130" height="86" fill="#2A2A2A" stroke="#3D3D3D" strokeWidth="1.5" transform="rotate(-1.5 160 105)" />
      <rect x="95" y="62" width="130" height="86" fill="#2A2A2A" stroke="#525252" strokeWidth="1.5" />
      {/* Text lines on top card */}
      <rect x="110" y="80" width="80" height="6" rx="1" fill="#3D3D3D" />
      <rect x="110" y="93" width="100" height="4" rx="1" fill="#3D3D3D" opacity="0.6" />
      <rect x="110" y="103" width="90" height="4" rx="1" fill="#3D3D3D" opacity="0.5" />
      <rect x="110" y="113" width="70" height="4" rx="1" fill="#3D3D3D" opacity="0.4" />
      {/* Accent bar */}
      <rect x="110" y="128" width="30" height="6" rx="1" fill="#FF3B00" opacity="0.8" />
      <line x1="20" y1="20" x2="36" y2="20" stroke="#525252" strokeWidth="1" />
      <line x1="20" y1="20" x2="20" y2="36" stroke="#525252" strokeWidth="1" />
    </>
  ),

  "dtf-dtf-uv": (
    <>
      <rect width="320" height="200" fill="#1E1E1E" />
      {/* Transfer film */}
      <rect x="70" y="45" width="160" height="100" fill="#2A2A2A" stroke="#525252" strokeWidth="1" />
      {/* Peel top-right */}
      <path d="M190 45 L230 45 L230 85 Z" fill="#3D3D3D" stroke="#525252" strokeWidth="1" />
      <path d="M190 45 L230 85" stroke="#FF3B00" strokeWidth="1.5" />
      {/* Dots (adhesive) */}
      {[0,1,2,3,4].flatMap((row) =>
        [0,1,2,3,4].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={90 + col * 28}
            cy={68 + row * 18}
            r="2.5"
            fill="#FF3B00"
            opacity={0.15 + (row + col) * 0.04}
          />
        ))
      )}
      {/* Heat arrow */}
      <path d="M258 90 L258 60 M248 70 L258 60 L268 70" fill="none" stroke="#FF3B00" strokeWidth="2" />
      <text x="160" y="168" textAnchor="middle" fill="#9A9A9A" fontSize="10" fontFamily="monospace" letterSpacing="3">DTF · UV</text>
      <line x1="20" y1="20" x2="36" y2="20" stroke="#525252" strokeWidth="1" />
      <line x1="20" y1="20" x2="20" y2="36" stroke="#525252" strokeWidth="1" />
    </>
  ),

  "letras-volumetricas": (
    <>
      <rect width="320" height="200" fill="#1E1E1E" />
      {/* 3D letter "A" front face */}
      <path d="M115 150 L155 60 L195 150 Z" fill="none" stroke="#525252" strokeWidth="2" />
      <path d="M130 115 L180 115" stroke="#525252" strokeWidth="2" />
      {/* 3D depth right */}
      <path d="M195 150 L210 135 L170 45 L155 60" fill="#2A2A2A" stroke="#3D3D3D" strokeWidth="1" />
      {/* 3D depth base */}
      <path d="M115 150 L130 165 L225 165 L210 150" fill="#2A2A2A" stroke="#3D3D3D" strokeWidth="1" />
      {/* LED glow hint on top */}
      <path d="M155 60 L170 45" stroke="#FF3B00" strokeWidth="2" opacity="0.9" />
      {/* Glow effect */}
      <ellipse cx="162" cy="52" rx="18" ry="6" fill="#FF3B00" opacity="0.06" />
      <ellipse cx="162" cy="52" rx="10" ry="3" fill="#FF3B00" opacity="0.1" />
      <line x1="20" y1="20" x2="36" y2="20" stroke="#525252" strokeWidth="1" />
      <line x1="20" y1="20" x2="20" y2="36" stroke="#525252" strokeWidth="1" />
    </>
  ),

  "default": (
    <>
      <rect width="320" height="200" fill="#1E1E1E" />
      <line x1="60" y1="100" x2="260" y2="100" stroke="#3D3D3D" strokeWidth="1" />
      <line x1="160" y1="40" x2="160" y2="160" stroke="#3D3D3D" strokeWidth="1" />
      <circle cx="160" cy="100" r="40" fill="none" stroke="#525252" strokeWidth="1" />
      <circle cx="160" cy="100" r="6" fill="#FF3B00" opacity="0.8" />
    </>
  ),
};
