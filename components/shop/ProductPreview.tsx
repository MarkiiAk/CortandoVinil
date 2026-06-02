"use client";

import type { Product } from "@/lib/products";

const VINYL_COLORS: Record<string, string> = {
  "Negro": "#1C1C1A",
  "Blanco": "#F5F5F0",
  "Dorado": "#C9A84C",
  "Rosa": "#E89AB0",
  "Azul marino": "#1B3A5C",
  "Cobre": "#B87333",
  "Rosa palo": "#D4A0A0",
  "Crema": "#D4B896",
  "Terracota": "#C4622D",
  "Verde olivo": "#6B7B3A",
};

interface Config {
  topY: number;
  bottomY: number;
  topHW: number;
  botHW: number;
  variant: "steel" | "glass" | "ceramic";
  handle?: boolean;
  lid?: boolean;
}

const CONFIGS: Record<string, Config> = {
  default:                  { topY: 40, bottomY: 290, topHW: 88, botHW: 66, variant: "steel" },
  "Vaso de acero (20 oz)":  { topY: 40, bottomY: 290, topHW: 88, botHW: 66, variant: "steel" },
  "Vaso de vidrio":         { topY: 45, bottomY: 290, topHW: 80, botHW: 72, variant: "glass" },
  "Mug cerámica":           { topY: 65, bottomY: 268, topHW: 90, botHW: 84, variant: "ceramic", handle: true },
  "Tumbler con popote":     { topY: 45, bottomY: 290, topHW: 88, botHW: 66, variant: "steel", lid: true },
};

function estimateTextWidth(text: string, fontSize: number): number {
  return Math.min(text.length * fontSize * 0.52, 140);
}

function getFontSize(text: string): number {
  if (!text || text.length <= 8) return 22;
  if (text.length <= 14)         return 17;
  if (text.length <= 20)         return 13;
  return 10;
}

// ── Decorations ──────────────────────────────────────────────────

function Marco({ cx, cy, hw, fz, color }: { cx: number; cy: number; hw: number; fz: number; color: string }) {
  const pad = 12;
  return (
    <rect
      x={cx - hw - pad} y={cy - fz * 0.72 - 8}
      width={(hw + pad) * 2} height={fz + 20}
      fill="none" stroke={color} strokeWidth="1.3"
    />
  );
}

function DobleLinea({ cx, cy, hw, fz, color }: { cx: number; cy: number; hw: number; fz: number; color: string }) {
  const ext = hw + 16;
  const y1 = cy - fz * 0.72 - 7;
  const y2 = cy + fz * 0.38 + 7;
  return (
    <>
      <line x1={cx - ext} y1={y1} x2={cx + ext} y2={y1} stroke={color} strokeWidth="1" />
      <line x1={cx - ext} y1={y2} x2={cx + ext} y2={y2} stroke={color} strokeWidth="1" />
    </>
  );
}

function Laurel({ cx, cy, hw, color }: { cx: number; cy: number; hw: number; color: string }) {
  const startX = hw + 6;
  const leaves = [
    { dx: 12, dy: 4, rx: 8, ry: 2.8, angle: -35 },
    { dx: 22, dy: 4, rx: 7.5, ry: 2.5, angle: -42 },
    { dx: 31, dy: 3, rx: 6.5, ry: 2.2, angle: -30 },
  ];
  return (
    <>
      <line x1={cx - startX} y1={cy} x2={cx - startX - 34} y2={cy} stroke={color} strokeWidth="0.7" />
      <line x1={cx + startX} y1={cy} x2={cx + startX + 34} y2={cy} stroke={color} strokeWidth="0.7" />
      {leaves.map((l, i) => (
        <ellipse key={`ll-${i}`} cx={cx - startX - l.dx} cy={cy - l.dy}
          rx={l.rx} ry={l.ry} fill={color}
          transform={`rotate(${l.angle}, ${cx - startX - l.dx}, ${cy - l.dy})`} />
      ))}
      {leaves.map((l, i) => (
        <ellipse key={`lb-${i}`} cx={cx - startX - l.dx} cy={cy + l.dy}
          rx={l.rx} ry={l.ry} fill={color}
          transform={`rotate(${-l.angle}, ${cx - startX - l.dx}, ${cy + l.dy})`} />
      ))}
      {leaves.map((l, i) => (
        <ellipse key={`rl-${i}`} cx={cx + startX + l.dx} cy={cy - l.dy}
          rx={l.rx} ry={l.ry} fill={color}
          transform={`rotate(${-l.angle}, ${cx + startX + l.dx}, ${cy - l.dy})`} />
      ))}
      {leaves.map((l, i) => (
        <ellipse key={`rb-${i}`} cx={cx + startX + l.dx} cy={cy + l.dy}
          rx={l.rx} ry={l.ry} fill={color}
          transform={`rotate(${l.angle}, ${cx + startX + l.dx}, ${cy + l.dy})`} />
      ))}
    </>
  );
}

function Flores({ cx, cy, hw, fz, color }: { cx: number; cy: number; hw: number; fz: number; color: string }) {
  const ext = hw + 14;
  const topY = cy - fz * 0.72 - 8;
  const botY = cy + fz * 0.38 + 8;
  const diamond = (x: number, y: number, r: number) => (
    <polygon points={`${x},${y - r} ${x + r * 0.65},${y} ${x},${y + r} ${x - r * 0.65},${y}`} fill={color} />
  );
  return (
    <>
      {diamond(cx - ext, topY, 5)}
      {diamond(cx + ext, topY, 5)}
      {diamond(cx - ext, botY, 5)}
      {diamond(cx + ext, botY, 5)}
      <line x1={cx - ext + 6} y1={topY} x2={cx + ext - 6} y2={topY} stroke={color} strokeWidth="0.6" strokeDasharray="2,3" />
      <line x1={cx - ext + 6} y1={botY} x2={cx + ext - 6} y2={botY} stroke={color} strokeWidth="0.6" strokeDasharray="2,3" />
    </>
  );
}

// ── Mini pattern icons (for field selector) ───────────────────────
export function PatternIcon({ pattern, color = "#6B4C35" }: { pattern: string; color?: string }) {
  const vw = 70; const vh = 36;
  const cx = vw / 2;
  const cy = vh / 2 + 1;
  return (
    <svg viewBox={`0 0 ${vw} ${vh}`} width="70" height="36" className="block">
      {pattern === "Con marco" && (
        <rect x="8" y="6" width="54" height="24" fill="none" stroke={color} strokeWidth="1.2" />
      )}
      {pattern === "Con doble línea" && (
        <>
          <line x1="6" y1="8" x2="64" y2="8" stroke={color} strokeWidth="1" />
          <line x1="6" y1="28" x2="64" y2="28" stroke={color} strokeWidth="1" />
        </>
      )}
      {pattern === "Con laurel" && (
        <>
          <ellipse cx="14" cy="16" rx="5.5" ry="2" fill={color} transform="rotate(-35, 14, 16)" />
          <ellipse cx="22" cy="15" rx="5" ry="1.8" fill={color} transform="rotate(-42, 22, 15)" />
          <ellipse cx="56" cy="16" rx="5.5" ry="2" fill={color} transform="rotate(35, 56, 16)" />
          <ellipse cx="48" cy="15" rx="5" ry="1.8" fill={color} transform="rotate(42, 48, 15)" />
          <line x1="27" y1={cy} x2="14" y2={cy} stroke={color} strokeWidth="0.7" />
          <line x1="43" y1={cy} x2="56" y2={cy} stroke={color} strokeWidth="0.7" />
        </>
      )}
      {pattern === "Con flores" && (
        <>
          <polygon points={`${cx},5 ${cx + 3.5},${cy - 6} ${cx},${cy - 3} ${cx - 3.5},${cy - 6}`} fill={color} />
          <polygon points={`${cx},${vh - 5} ${cx + 3.5},${cy + 6} ${cx},${cy + 3} ${cx - 3.5},${cy + 6}`} fill={color} />
        </>
      )}
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="9"
        fontFamily="Georgia, serif" fontStyle="italic" fill={color}>
        Texto
      </text>
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────────
interface Props {
  product: Product;
  values: Record<string, string>;
}

export function ProductPreview({ product, values }: Props) {
  const text      = (values["texto"] ?? "").trim();
  const colorName = values["color-vinilo"] ?? "Negro";
  const patron    = values["patron"] ?? "Limpio";
  const tipoVaso  = values["tipo-vaso"] ?? "default";
  const isVaso    = product.category === "vasos";

  if (!isVaso) {
    return (
      <div className="w-full aspect-square bg-arena flex flex-col items-center justify-center gap-3 text-cafe/30">
        <span className="font-cormorant text-6xl font-light italic">{text || product.name[0]}</span>
        <span className="font-dm text-xs tracking-widest uppercase">Vista previa no disponible</span>
      </div>
    );
  }

  const cfg = CONFIGS[tipoVaso] ?? CONFIGS.default;
  const vinylColor = VINYL_COLORS[colorName] ?? "#1C1C1A";
  const cx = 130;
  const { topY, bottomY, topHW, botHW, variant, handle, lid } = cfg;
  const midY = Math.round((topY + bottomY) / 2);

  const displayText = text || "Tu texto";
  const isPlaceholder = !text;
  const fz = getFontSize(displayText);
  const textColor = isPlaceholder ? `${vinylColor}66` : vinylColor;
  const textHW = estimateTextWidth(displayText, fz) / 2;

  const isGlass   = variant === "glass";
  const isCeramic = variant === "ceramic";
  const isSteel   = variant === "steel";

  // Body path — trapezoid for steel/ceramic, more cylindrical for glass
  const bodyPath = isGlass
    ? [
        // Glass: wider top, curves inward slightly, flat-ish bottom with thick base
        `M ${cx - topHW + 4} ${topY + 8}`,
        `Q ${cx - topHW} ${topY + 8} ${cx - topHW} ${topY + 16}`,
        `L ${cx - botHW} ${bottomY - 20}`,
        `Q ${cx - botHW} ${bottomY + 4} ${cx} ${bottomY + 4}`,
        `Q ${cx + botHW} ${bottomY + 4} ${cx + botHW} ${bottomY - 20}`,
        `L ${cx + topHW} ${topY + 16}`,
        `Q ${cx + topHW} ${topY + 8} ${cx + topHW - 4} ${topY + 8}`,
        "Z",
      ].join(" ")
    : [
        `M ${cx - topHW + 6} ${topY + 10}`,
        `Q ${cx - topHW} ${topY + 10} ${cx - topHW} ${topY + 18}`,
        `L ${cx - botHW} ${bottomY - 8}`,
        `Q ${cx - botHW} ${bottomY} ${cx - botHW + 7} ${bottomY}`,
        `L ${cx + botHW - 7} ${bottomY}`,
        `Q ${cx + botHW} ${bottomY} ${cx + botHW} ${bottomY - 8}`,
        `L ${cx + topHW} ${topY + 18}`,
        `Q ${cx + topHW} ${topY + 10} ${cx + topHW - 6} ${topY + 10}`,
        "Z",
      ].join(" ");

  // Glossy highlight strip (left edge)
  const highlightPath = [
    `M ${cx - topHW + 10} ${topY + 15}`,
    `L ${cx - topHW + 25} ${topY + 15}`,
    `L ${cx - botHW + 22} ${bottomY - 12}`,
    `L ${cx - botHW + 8} ${bottomY - 12}`,
    "Z",
  ].join(" ");

  const rimColor   = isCeramic ? "#E8E4DE" : isGlass ? "rgba(200,220,240,0.6)" : "#AAAAAA";
  const innerRim   = isCeramic ? "#F5F2EC" : isGlass ? "rgba(180,210,235,0.4)" : "#CACACA";
  const baseColor  = isCeramic ? "#E8E4DE" : isGlass ? "rgba(160,200,230,0.5)" : "#999999";

  return (
    <div className="w-full aspect-square bg-arena flex items-center justify-center overflow-hidden rounded-sm relative">
      <svg viewBox="0 0 260 340" width="100%" height="100%" className="max-w-[280px]">
        <defs>
          {/* Steel gradient */}
          <linearGradient id="steelGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#8A8A8A" />
            <stop offset="22%"  stopColor="#C8C8C8" />
            <stop offset="45%"  stopColor="#EBEBEB" />
            <stop offset="55%"  stopColor="#E2E2E2" />
            <stop offset="78%"  stopColor="#B8B8B8" />
            <stop offset="100%" stopColor="#767676" />
          </linearGradient>
          {/* Glass gradient — blue-tinted transparent */}
          <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="rgba(160,200,230,0.55)" />
            <stop offset="25%"  stopColor="rgba(210,235,250,0.30)" />
            <stop offset="50%"  stopColor="rgba(240,248,255,0.20)" />
            <stop offset="75%"  stopColor="rgba(210,235,250,0.30)" />
            <stop offset="100%" stopColor="rgba(140,185,220,0.55)" />
          </linearGradient>
          <clipPath id="bodyClip">
            <path d={bodyPath} />
          </clipPath>
        </defs>

        {/* Mug handle */}
        {handle && (
          <>
            <path
              d={`M ${cx + topHW - 4} ${topY + 55} Q ${cx + topHW + 52} ${topY + 55} ${cx + topHW + 52} ${midY} Q ${cx + topHW + 52} ${bottomY - 55} ${cx + botHW - 2} ${bottomY - 55}`}
              fill="none" stroke={isCeramic ? "#F5F2EC" : "#D8D8D8"} strokeWidth="18" strokeLinecap="round"
            />
            <path
              d={`M ${cx + topHW - 4} ${topY + 55} Q ${cx + topHW + 52} ${topY + 55} ${cx + topHW + 52} ${midY} Q ${cx + topHW + 52} ${bottomY - 55} ${cx + botHW - 2} ${bottomY - 55}`}
              fill="none" stroke={isCeramic ? "#FAF8F5" : "#EEEEEE"} strokeWidth="9" strokeLinecap="round"
            />
          </>
        )}

        {/* Vaso body */}
        <path
          d={bodyPath}
          fill={isGlass ? "url(#glassGrad)" : isSteel ? "url(#steelGrad)" : "#F5F2EC"}
          stroke={isGlass ? "rgba(160,205,235,0.7)" : "none"}
          strokeWidth={isGlass ? 1.5 : 0}
        />

        {/* Glass thick base */}
        {isGlass && (
          <ellipse
            cx={cx} cy={bottomY + 2}
            rx={botHW - 4} ry={10}
            fill="rgba(140,190,225,0.6)"
          />
        )}

        {/* Glossy highlight */}
        {!isCeramic && (
          <path d={highlightPath} fill={isGlass ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.18)"} clipPath="url(#bodyClip)" />
        )}

        {/* Second glossy strip for glass */}
        {isGlass && (
          <path
            d={[
              `M ${cx + topHW - 20} ${topY + 15}`,
              `L ${cx + topHW - 10} ${topY + 15}`,
              `L ${cx + botHW - 8} ${bottomY - 20}`,
              `L ${cx + botHW - 18} ${bottomY - 20}`,
              "Z",
            ].join(" ")}
            fill="rgba(255,255,255,0.22)"
            clipPath="url(#bodyClip)"
          />
        )}

        {/* Label band (subtle vinyl area) */}
        <rect
          x={cx - botHW + 4} y={midY - 55}
          width={(botHW - 4) * 2} height={110}
          fill={isGlass ? "rgba(255,255,255,0.06)" : isCeramic ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.10)"}
          clipPath="url(#bodyClip)"
        />

        {/* Top rim ellipse */}
        <ellipse cx={cx} cy={topY + 10} rx={topHW - 2} ry={12} fill={rimColor} />
        {/* Inner rim */}
        <ellipse cx={cx} cy={topY + 10} rx={topHW - 10} ry={8} fill={innerRim} />

        {/* Tumbler lid + straw */}
        {lid && (
          <>
            <rect x={cx - topHW + 4} y={topY - 10} width={(topHW - 4) * 2} height={18} rx={4} fill="#919191" />
            <rect x={cx - 5} y={topY - 28} width={10} height={22} rx={3} fill="#7A7A7A" />
          </>
        )}

        {/* Bottom base ellipse */}
        {!isGlass && (
          <ellipse cx={cx} cy={bottomY} rx={botHW - 2} ry={8} fill={baseColor} />
        )}

        {/* ── Pattern decoration ── */}
        <g clipPath="url(#bodyClip)">
          {patron === "Con marco" && <Marco cx={cx} cy={midY} hw={textHW} fz={fz} color={textColor} />}
          {patron === "Con doble línea" && <DobleLinea cx={cx} cy={midY} hw={textHW} fz={fz} color={textColor} />}
          {patron === "Con laurel" && <Laurel cx={cx} cy={midY} hw={textHW} color={textColor} />}
          {patron === "Con flores" && <Flores cx={cx} cy={midY} hw={textHW} fz={fz} color={textColor} />}

          {/* Main vinyl text */}
          <text
            x={cx} y={midY + fz * 0.38}
            textAnchor="middle"
            fontSize={fz}
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontStyle="italic"
            fill={textColor}
            letterSpacing="0.04em"
          >
            {displayText}
          </text>
        </g>
      </svg>

      <p className="absolute bottom-3 left-0 right-0 text-center font-dm text-[10px] text-humo/60 tracking-wide">
        Vista de referencia · el diseño final puede variar
      </p>
    </div>
  );
}
