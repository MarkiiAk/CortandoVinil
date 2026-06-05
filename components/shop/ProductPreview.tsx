"use client";

import Image from "next/image";
import type { Product } from "@/lib/products";

// ── Color map ─────────────────────────────────────────────────────
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

// ── Helpers ───────────────────────────────────────────────────────
function getFontSize(text: string): number {
  if (!text || text.length <= 8) return 21;
  if (text.length <= 14)         return 16;
  if (text.length <= 20)         return 12;
  return 10;
}
function estimateHalfWidth(text: string, fz: number): number {
  return Math.min(text.length * fz * 0.5, 70);
}
function splitLines(text: string): string[] {
  return text.split("\n").map((l) => l.trim()).filter((_, i) => i < 4); // max 4 lines
}

// ── Flower elements ────────────────────────────────────────────────
function Daisy({ x, y, s, rot, fill, center }: {
  x: number; y: number; s: number; rot: number; fill: string; center: string;
}) {
  const d = s * 1.15;
  return (
    <g transform={`translate(${x},${y}) rotate(${rot})`}>
      {[0, 60, 120, 180, 240, 300].map((a) => {
        const rad = (a * Math.PI) / 180;
        const px = Math.cos(rad) * d;
        const py = Math.sin(rad) * d;
        return (
          <ellipse key={a} cx={px} cy={py} rx={s * 0.6} ry={s * 0.38}
            fill={fill} opacity="0.88"
            transform={`rotate(${a},${px},${py})`} />
        );
      })}
      <circle cx={0} cy={0} r={s * 0.42} fill={center} />
    </g>
  );
}

function Heart({ x, y, s, fill }: { x: number; y: number; s: number; fill: string }) {
  const h = s;
  return (
    <path
      transform={`translate(${x},${y})`}
      d={`M 0,${h*0.38} C ${h*0.5},${h*0.38} ${h*0.72},-${h*0.06} 0,-${h*0.4} C -${h*0.72},-${h*0.06} -${h*0.5},${h*0.38} 0,${h*0.38} Z`}
      fill={fill} opacity="0.82"
    />
  );
}

// Positions covering the whole vaso area (x: 55–210, y: 60–290)
const DAISIES = [
  { x: 76,  y: 75,  s: 13, rot: 15  },
  { x: 148, y: 64,  s: 15, rot: 50  },
  { x: 206, y: 82,  s: 11, rot: 82  },
  { x: 58,  y: 122, s: 13, rot: 30  },
  { x: 214, y: 120, s: 12, rot: 65  },
  { x: 63,  y: 174, s: 12, rot: 22  },
  { x: 210, y: 168, s: 13, rot: 72  },
  { x: 74,  y: 226, s: 14, rot: 12  },
  { x: 198, y: 220, s: 12, rot: 55  },
  { x: 92,  y: 270, s: 13, rot: 42  },
  { x: 164, y: 272, s: 15, rot: 28  },
  // Small buds
  { x: 122, y: 84,  s: 7,  rot: 90  },
  { x: 172, y: 96,  s: 8,  rot: 18  },
  { x: 92,  y: 148, s: 7,  rot: 52  },
  { x: 190, y: 144, s: 8,  rot: 38  },
  { x: 72,  y: 248, s: 7,  rot: 66  },
  { x: 183, y: 250, s: 8,  rot: 80  },
  { x: 138, y: 280, s: 7,  rot: 24  },
  { x: 115, y: 270, s: 6,  rot: 58  },
  { x: 185, y: 98,  s: 6,  rot: 40  },
];

const HEARTS = [
  { x: 122, y: 66,  s: 7 }, { x: 178, y: 75,  s: 6 },
  { x: 88,  y: 98,  s: 8 }, { x: 210, y: 150, s: 6 },
  { x: 66,  y: 200, s: 7 }, { x: 220, y: 196, s: 5 },
  { x: 104, y: 256, s: 7 }, { x: 176, y: 252, s: 6 },
  { x: 148, y: 60,  s: 5 }, { x: 58,  y: 150, s: 5 },
];

// ── Cat elements ──────────────────────────────────────────────────
function Cat({ x, y, s, fill }: { x: number; y: number; s: number; fill: string }) {
  return (
    <g transform={`translate(${x},${y})`} opacity="0.85">
      <ellipse cx={0} cy={s*0.95} rx={s*0.68} ry={s*0.52} fill={fill} />
      <circle cx={0} cy={0} r={s} fill={fill} />
      <polygon points={`-${s*0.48},-${s*0.58} -${s*0.88},-${s*1.28} -${s*0.1},-${s*0.68}`} fill={fill} />
      <polygon points={`${s*0.48},-${s*0.58} ${s*0.88},-${s*1.28} ${s*0.1},-${s*0.68}`} fill={fill} />
      <ellipse cx={-s*0.3} cy={-s*0.05} rx={s*0.18} ry={s*0.22} fill="rgba(255,255,255,0.9)" />
      <ellipse cx={s*0.3} cy={-s*0.05} rx={s*0.18} ry={s*0.22} fill="rgba(255,255,255,0.9)" />
      <ellipse cx={-s*0.3} cy={-s*0.05} rx={s*0.09} ry={s*0.17} fill="rgba(15,15,25,0.8)" />
      <ellipse cx={s*0.3} cy={-s*0.05} rx={s*0.09} ry={s*0.17} fill="rgba(15,15,25,0.8)" />
      <polygon points={`0,-${s*0.08} ${s*0.1},${s*0.1} -${s*0.1},${s*0.1}`} fill="rgba(255,140,140,0.8)" />
      <line x1={s*0.12} y1={s*0.06} x2={s*0.5} y2={s*0.01} stroke="rgba(220,220,220,0.7)" strokeWidth={s*0.055} />
      <line x1={s*0.12} y1={s*0.14} x2={s*0.5} y2={s*0.18} stroke="rgba(220,220,220,0.7)" strokeWidth={s*0.055} />
      <line x1={-s*0.12} y1={s*0.06} x2={-s*0.5} y2={s*0.01} stroke="rgba(220,220,220,0.7)" strokeWidth={s*0.055} />
      <line x1={-s*0.12} y1={s*0.14} x2={-s*0.5} y2={s*0.18} stroke="rgba(220,220,220,0.7)" strokeWidth={s*0.055} />
      <path d={`M ${s*0.52},${s*1.18} C ${s*1.05},${s*1.15} ${s*1.15},${s*0.42} ${s*0.78},${s*0.2}`}
        fill="none" stroke={fill} strokeWidth={s*0.18} strokeLinecap="round" />
    </g>
  );
}

const CATS = [
  { x: 82,  y: 82,  s: 11 }, { x: 190, y: 88,  s: 10 },
  { x: 66,  y: 160, s: 11 }, { x: 198, y: 164, s: 10 },
  { x: 82,  y: 240, s: 11 }, { x: 190, y: 236, s: 10 },
  { x: 138, y: 78,  s: 8  }, { x: 98,  y: 268, s: 10 },
  { x: 162, y: 268, s: 11 },
];

// ── Galaxy stars ──────────────────────────────────────────────────
const STARS = [
  { x: 72,  y: 60,  r: 1.5 }, { x: 140, y: 53,  r: 0.9 }, { x: 200, y: 70,  r: 1.8 },
  { x: 88,  y: 90,  r: 0.7 }, { x: 162, y: 84,  r: 1.2 }, { x: 218, y: 105, r: 0.9 },
  { x: 65,  y: 130, r: 1.1 }, { x: 115, y: 120, r: 0.6 }, { x: 188, y: 135, r: 1.5 },
  { x: 218, y: 158, r: 0.7 }, { x: 68,  y: 180, r: 1.0 }, { x: 198, y: 178, r: 1.2 },
  { x: 82,  y: 222, r: 0.8 }, { x: 115, y: 238, r: 0.6 }, { x: 192, y: 225, r: 1.3 },
  { x: 90,  y: 270, r: 0.9 }, { x: 165, y: 265, r: 0.7 }, { x: 142, y: 68,  r: 0.6 },
  { x: 106, y: 75,  r: 2.2 }, { x: 178, y: 100, r: 2.0 }, { x: 78,  y: 155, r: 1.8 },
  { x: 208, y: 170, r: 1.6 }, { x: 98,  y: 203, r: 1.9 }, { x: 180, y: 245, r: 1.7 },
  { x: 130, y: 90,  r: 1.5 }, { x: 65,  y: 260, r: 1.4 }, { x: 155, y: 108, r: 0.8 },
];

// ── PatternIcon (selector thumbnail) ─────────────────────────────
export function PatternIcon({ pattern, color = "#6B4C35" }: { pattern: string; color?: string }) {
  const W = 70; const H = 36; const cx = W / 2; const cy = H / 2 + 1;

  if (pattern === "Flores") {
    const mini = (x: number, y: number, s: number) => (
      <g key={`${x}-${y}`} transform={`translate(${x},${y})`}>
        {[0, 60, 120, 180, 240, 300].map((a) => {
          const rad = (a * Math.PI) / 180;
          const px = Math.cos(rad) * s * 1.1;
          const py = Math.sin(rad) * s * 1.1;
          return <ellipse key={a} cx={px} cy={py} rx={s*0.58} ry={s*0.38}
            fill={color} opacity="0.85" transform={`rotate(${a},${px},${py})`} />;
        })}
        <circle cx={0} cy={0} r={s*0.42} fill="rgba(255,220,160,0.95)" />
      </g>
    );
    return (
      <svg viewBox={`0 0 ${W} ${H}`} width="70" height="36" className="block">
        {mini(10, 11, 5)} {mini(32, 7, 4)} {mini(55, 12, 5)}
        {mini(20, 27, 4)} {mini(46, 27, 5)}
        <path d={`M 0,4.5 C 6,4.5 8.5,0 0,-5 C -8.5,0 -6,4.5 0,4.5 Z`}
          fill={color} opacity="0.75" transform="translate(42,19)" />
        <text x={cx} y={cy+5} textAnchor="middle" fontSize="7"
          fontFamily="Georgia,serif" fontStyle="italic" fill={color} opacity="0.55">
          tu texto
        </text>
      </svg>
    );
  }

  if (pattern === "Galaxia") {
    const stars = [[12,7,1.1],[35,4,1.3],[58,9,0.9],[7,18,1],[48,16,1.2],[63,23,0.8],[19,29,1],[42,30,1.1],[26,13,0.7]];
    return (
      <svg viewBox={`0 0 ${W} ${H}`} width="70" height="36" className="block">
        <defs>
          <radialGradient id="niG" cx="65%" cy="38%" r="50%">
            <stop offset="0%" stopColor="rgba(180,60,155,0.5)" />
            <stop offset="100%" stopColor="rgba(180,60,155,0)" />
          </radialGradient>
        </defs>
        <rect width={W} height={H} rx="2" fill="#0C0E3A" />
        <rect width={W} height={H} rx="2" fill="url(#niG)" />
        {stars.map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r as number}
            fill="white" opacity={0.65 + (r as number) * 0.1} />
        ))}
        <text x={cx} y={cy+4} textAnchor="middle" fontSize="7"
          fontFamily="Georgia,serif" fontStyle="italic" fill="white" opacity="0.85">
          tu texto
        </text>
      </svg>
    );
  }

  if (pattern === "Gatitos") {
    const miniCat = (tx: number, ty: number, s: number) => (
      <g key={`${tx}-${ty}`} transform={`translate(${tx},${ty})`} opacity="0.88">
        <circle cx={0} cy={0} r={s} fill={color} />
        <polygon points={`-${s*0.5},-${s*0.6} -${s*0.9},-${s*1.28} -${s*0.1},-${s*0.68}`} fill={color} />
        <polygon points={`${s*0.5},-${s*0.6} ${s*0.9},-${s*1.28} ${s*0.1},-${s*0.68}`} fill={color} />
        <ellipse cx={-s*0.3} cy={0} rx={s*0.2} ry={s*0.24} fill="rgba(255,255,255,0.9)" />
        <ellipse cx={s*0.3} cy={0} rx={s*0.2} ry={s*0.24} fill="rgba(255,255,255,0.9)" />
      </g>
    );
    return (
      <svg viewBox={`0 0 ${W} ${H}`} width="70" height="36" className="block">
        {miniCat(13, 15, 6)} {miniCat(36, 11, 5)} {miniCat(57, 15, 6)}
        <text x={cx} y={cy+5} textAnchor="middle" fontSize="7"
          fontFamily="Georgia,serif" fontStyle="italic" fill={color} opacity="0.5">
          tu texto
        </text>
      </svg>
    );
  }

  // Limpio
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="70" height="36" className="block">
      <text x={cx} y={cy+4} textAnchor="middle" fontSize="11"
        fontFamily="Georgia,serif" fontStyle="italic" fill={color}>
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
  const isVaso    = false; // vasos category removed in Cortando Vinil rebrand

  if (!isVaso) {
    return (
      <div className="w-full aspect-square bg-lienzo-dark flex flex-col items-center justify-center gap-3 text-tinta/20">
        <span className="font-archivo text-6xl text-oscuro/20">{text || product.name[0]}</span>
        <span className="font-figtree text-xs tracking-widest uppercase text-pizarra/40">Vista previa no disponible</span>
      </div>
    );
  }

  const vinylColor    = VINYL_COLORS[colorName] ?? "#1C1C1A";
  const isFloral      = patron === "Flores";
  const isGalaxy      = patron === "Galaxia";
  const isGatitos     = patron === "Gatitos";
  const isCanCup      = tipoVaso === "Vaso tipo lata" || tipoVaso === "Vaso de vidrio" || tipoVaso === "default";
  const isGlassClear  = tipoVaso === "Vaso de vidrio";
  const isMason       = tipoVaso === "Vaso Mason";
  const isMug         = tipoVaso === "Mug cerámica";
  const isTumbler     = tipoVaso === "Tumbler frío" || tipoVaso === "Tumbler con popote";
  const cx            = 130;

  const isPlaceholder = !text;
  const rawLines      = splitLines(text || "Tu texto");
  const longestLine   = rawLines.reduce((a, b) => (a.length >= b.length ? a : b), "");
  const baseFz        = getFontSize(longestLine);
  const fz            = rawLines.length === 2 ? Math.round(baseFz * 0.88)
                      : rawLines.length >= 3  ? Math.round(baseFz * 0.78)
                      : baseFz;
  const lineH         = Math.round(fz * 1.35);
  const halfTW        = estimateHalfWidth(longestLine, fz);

  // For galaxy, always white text looks best
  const rawColor  = isGalaxy ? "#FFFFFF" : vinylColor;
  const textColor = isPlaceholder ? `${rawColor}60` : rawColor;

  // Daisy center contrasts with petal color
  const daisyCenter = colorName === "Rosa" || colorName === "Rosa palo" ? "#E8356A"
    : colorName === "Dorado"    ? "#F0C820"
    : colorName === "Blanco"    ? "#F5D090"
    : "rgba(255,220,150,0.95)";

  // ── Shape params ──────────────────────────────────────────────
  let topY = 40, topHW = 88, midHW = 88, midY = 165, botHW = 66, botY = 290;
  let bodyPath = "";

  if (isCanCup) {
    // Vaso tipo lata: nearly cylindrical, slight rounding at bottom
    topY = 55; topHW = 72; midHW = 72; midY = 168; botHW = 68; botY = 282;
    bodyPath = [
      `M ${cx - topHW} ${topY}`,
      `L ${cx - botHW} ${botY - 20}`,
      `Q ${cx - botHW} ${botY} ${cx - botHW + 14} ${botY}`,
      `L ${cx + botHW - 14} ${botY}`,
      `Q ${cx + botHW} ${botY} ${cx + botHW} ${botY - 20}`,
      `L ${cx + topHW} ${topY}`,
      "Z",
    ].join(" ");
  } else if (isMason) {
    // Mason jar: narrow neck → wide body
    topY = 50; topHW = 50; botHW = 84; botY = 288; midY = 170;
    const neckBotY = 95;
    bodyPath = [
      `M ${cx - topHW} ${topY + 8}`,
      `L ${cx - topHW} ${neckBotY}`,
      `Q ${cx - botHW} ${neckBotY + 22} ${cx - botHW} ${neckBotY + 35}`,
      `L ${cx - botHW} ${botY - 8}`,
      `Q ${cx - botHW} ${botY} ${cx - botHW + 7} ${botY}`,
      `L ${cx + botHW - 7} ${botY}`,
      `Q ${cx + botHW} ${botY} ${cx + botHW} ${botY - 8}`,
      `L ${cx + botHW} ${neckBotY + 35}`,
      `Q ${cx + botHW} ${neckBotY + 22} ${cx + topHW} ${neckBotY}`,
      `L ${cx + topHW} ${topY + 8}`,
      "Z",
    ].join(" ");
  } else if (isMug) {
    // Mug cerámica: cylindrical with handle
    topY = 65; topHW = 86; botHW = 80; botY = 268; midY = Math.round((topY + botY) / 2);
    bodyPath = [
      `M ${cx - topHW + 6} ${topY + 10}`,
      `Q ${cx - topHW} ${topY + 10} ${cx - topHW} ${topY + 18}`,
      `L ${cx - botHW} ${botY - 8}`,
      `Q ${cx - botHW} ${botY} ${cx - botHW + 7} ${botY}`,
      `L ${cx + botHW - 7} ${botY}`,
      `Q ${cx + botHW} ${botY} ${cx + botHW} ${botY - 8}`,
      `L ${cx + topHW} ${topY + 18}`,
      `Q ${cx + topHW} ${topY + 10} ${cx + topHW - 6} ${topY + 10}`,
      "Z",
    ].join(" ");
  } else {
    // Tumbler frío: tapered metal tumbler
    topY = 40; topHW = 88; botHW = 66; botY = 290; midY = Math.round((topY + botY) / 2);
    bodyPath = [
      `M ${cx - topHW + 6} ${topY + 10}`,
      `Q ${cx - topHW} ${topY + 10} ${cx - topHW} ${topY + 18}`,
      `L ${cx - botHW} ${botY - 8}`,
      `Q ${cx - botHW} ${botY} ${cx - botHW + 7} ${botY}`,
      `L ${cx + botHW - 7} ${botY}`,
      `Q ${cx + botHW} ${botY} ${cx + botHW} ${botY - 8}`,
      `L ${cx + topHW} ${topY + 18}`,
      `Q ${cx + topHW} ${topY + 10} ${cx + topHW - 6} ${topY + 10}`,
      "Z",
    ].join(" ");
  }

  const textCY = midY;

  // ── Vaso tipo lata: use real photo + overlay ───────────────────
  if (isCanCup) {
    // The photo is 800×800. Cup vinyl area (below lid) maps to roughly:
    // x: 25%–75%, y: 22%–89% of the displayed image.
    // We use a full-container SVG overlay clipped to that zone.
    const vinylClip = "M 65,75 Q 65,72 68,72 L 192,72 Q 195,72 195,75 L 195,302 Q 195,306 191,306 L 69,306 Q 65,306 65,302 Z";
    const textOnPhoto = isPlaceholder ? `${textColor}` : vinylColor;

    return (
      <div className="w-full aspect-square bg-white relative overflow-hidden rounded-sm">
        <Image
          src={isGlassClear
            ? "/products/vaso-vidrio-blank.avif"
            : "/products/vaso-tipo-lata-blank.webp"}
          fill className="object-contain" alt={product.name} priority
        />

        {/* Vinyl overlay — full-container SVG, clipped to cup body */}
        <svg
          viewBox="0 0 260 340"
          className="absolute inset-0 w-full h-full"
          style={{ mixBlendMode: "multiply" }}
        >
          <defs>
            <clipPath id="photoBodyClip">
              <path d={vinylClip} />
            </clipPath>
            <radialGradient id="nebulaPinkP" cx="72%" cy="35%" r="45%">
              <stop offset="0%"   stopColor="rgba(180,60,160,0.45)" />
              <stop offset="100%" stopColor="rgba(100,30,120,0)" />
            </radialGradient>
            <radialGradient id="nebulaBlueP" cx="28%" cy="65%" r="40%">
              <stop offset="0%"   stopColor="rgba(60,120,200,0.35)" />
              <stop offset="100%" stopColor="rgba(60,120,200,0)" />
            </radialGradient>
            <radialGradient id="galaxyBaseP" cx="45%" cy="42%" r="60%">
              <stop offset="0%"   stopColor="#2D1B69" />
              <stop offset="35%"  stopColor="#1A0A4A" />
              <stop offset="65%"  stopColor="#0D1B4A" />
              <stop offset="100%" stopColor="#080318" />
            </radialGradient>
          </defs>

          {isGalaxy && (
            <>
              <rect x={65} y={72} width={130} height={234} rx={4} fill="url(#galaxyBaseP)" clipPath="url(#photoBodyClip)" />
              <rect x={65} y={72} width={130} height={234} fill="url(#nebulaPinkP)" clipPath="url(#photoBodyClip)" />
              <rect x={65} y={72} width={130} height={234} fill="url(#nebulaBlueP)" clipPath="url(#photoBodyClip)" />
              <g clipPath="url(#photoBodyClip)">
                {STARS.map((s, i) => (
                  <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="white" opacity={s.r > 1.5 ? 0.95 : 0.72} />
                ))}
              </g>
            </>
          )}

          {isFloral && (
            <g clipPath="url(#photoBodyClip)">
              {DAISIES.map((d, i) => (
                <Daisy key={i} x={d.x} y={d.y} s={d.s} rot={d.rot} fill={vinylColor} center={daisyCenter} />
              ))}
              {HEARTS.map((h, i) => (
                <Heart key={i} x={h.x} y={h.y} s={h.s} fill={vinylColor} />
              ))}
            </g>
          )}

          {isGatitos && (
            <g clipPath="url(#photoBodyClip)">
              {CATS.map((c, i) => (
                <Cat key={i} x={c.x} y={c.y} s={c.s} fill={vinylColor} />
              ))}
            </g>
          )}

          {/* Text */}
          <g clipPath="url(#photoBodyClip)">
            {(isFloral || isGatitos) && (
              <ellipse cx={130} cy={189} rx={halfTW + 22} ry={fz * 0.9 + 12}
                fill="rgba(255,255,255,0.30)" />
            )}
            <text
              x={130} y={189}
              textAnchor="middle"
              fontSize={fz}
              fontFamily="'Cormorant Garamond', Georgia, serif"
              fontStyle="italic"
              fill={isGalaxy ? "#FFFFFF" : textOnPhoto}
              letterSpacing="0.04em"
            >
              {rawLines.map((line, i) => {
                const blockOffset = -((rawLines.length - 1) * lineH) / 2;
                return (
                  <tspan key={i} x={130} dy={i === 0 ? blockOffset + fz * 0.38 : lineH}>
                    {line || " "}
                  </tspan>
                );
              })}
            </text>
          </g>
        </svg>

        <p className="absolute bottom-3 left-0 right-0 text-center font-figtree text-[10px] text-pizarra/60 tracking-wide">
          Siempre te contactamos antes de producir para validar tu diseño
        </p>
      </div>
    );
  }

  return (
    <div className="w-full aspect-square bg-lienzo-dark flex items-center justify-center overflow-hidden rounded-sm relative">
      <svg viewBox="0 0 260 340" width="100%" height="100%" className="max-w-[280px]">
        <defs>
          <linearGradient id="steelGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#8A8A8A" />
            <stop offset="22%"  stopColor="#C8C8C8" />
            <stop offset="45%"  stopColor="#EBEBEB" />
            <stop offset="55%"  stopColor="#E2E2E2" />
            <stop offset="78%"  stopColor="#B8B8B8" />
            <stop offset="100%" stopColor="#767676" />
          </linearGradient>
          <linearGradient id="glassBodyGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="rgba(150,195,228,0.55)" />
            <stop offset="22%"  stopColor="rgba(215,238,255,0.22)" />
            <stop offset="50%"  stopColor="rgba(245,252,255,0.12)" />
            <stop offset="78%"  stopColor="rgba(215,238,255,0.22)" />
            <stop offset="100%" stopColor="rgba(130,180,220,0.55)" />
          </linearGradient>
          <radialGradient id="galaxyBase" cx="45%" cy="42%" r="60%">
            <stop offset="0%"   stopColor="#2D1B69" />
            <stop offset="35%"  stopColor="#1A0A4A" />
            <stop offset="65%"  stopColor="#0D1B4A" />
            <stop offset="100%" stopColor="#080318" />
          </radialGradient>
          <radialGradient id="nebulaPink" cx="72%" cy="35%" r="45%">
            <stop offset="0%"   stopColor="rgba(180,60,160,0.45)" />
            <stop offset="100%" stopColor="rgba(100,30,120,0)" />
          </radialGradient>
          <radialGradient id="nebulaBlue" cx="28%" cy="65%" r="40%">
            <stop offset="0%"   stopColor="rgba(60,120,200,0.35)" />
            <stop offset="100%" stopColor="rgba(60,120,200,0)" />
          </radialGradient>
          <linearGradient id="woodGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#CBA97A" />
            <stop offset="50%"  stopColor="#B8925E" />
            <stop offset="100%" stopColor="#9A7235" />
          </linearGradient>
          <clipPath id="bodyClip">
            <path d={bodyPath} />
          </clipPath>
        </defs>

        {/* (no handle — mug removed from tipos) */}

        {/* Mug handle */}
        {isMug && (
          <>
            <path
              d={`M ${cx + topHW - 4} ${topY + 52} Q ${cx + topHW + 52} ${topY + 52} ${cx + topHW + 52} ${midY} Q ${cx + topHW + 52} ${botY - 52} ${cx + botHW - 2} ${botY - 52}`}
              fill="none" stroke="#F5F2EC" strokeWidth="18" strokeLinecap="round"
            />
            <path
              d={`M ${cx + topHW - 4} ${topY + 52} Q ${cx + topHW + 52} ${topY + 52} ${cx + topHW + 52} ${midY} Q ${cx + topHW + 52} ${botY - 52} ${cx + botHW - 2} ${botY - 52}`}
              fill="none" stroke="#FAF8F5" strokeWidth="9" strokeLinecap="round"
            />
          </>
        )}

        {/* Body fill */}
        <path
          d={bodyPath}
          fill={
            isGalaxy  ? "url(#galaxyBase)"    :
            isCanCup  ? "url(#glassBodyGrad)" :
            isMason   ? "#F0EBE3"             :
            isMug     ? "#F5F2EC"             :
            "url(#steelGrad)"
          }
          stroke={isCanCup && !isGalaxy ? "rgba(150,200,235,0.55)" : "none"}
          strokeWidth={isCanCup ? 1.5 : 0}
        />

        {/* Galaxy nebula clouds */}
        {isGalaxy && (
          <>
            <rect x={0} y={0} width={260} height={340} fill="url(#nebulaPink)" clipPath="url(#bodyClip)" />
            <rect x={0} y={0} width={260} height={340} fill="url(#nebulaBlue)" clipPath="url(#bodyClip)" />
          </>
        )}

        {/* Steel/mason highlight strip */}
        {!isCanCup && !isGalaxy && !isMug && (
          <path
            d={[`M ${cx-topHW+10} ${topY+15}`, `L ${cx-topHW+25} ${topY+15}`,
                `L ${cx-botHW+22} ${botY-12}`,  `L ${cx-botHW+8} ${botY-12}`, "Z"].join(" ")}
            fill="rgba(255,255,255,0.18)" clipPath="url(#bodyClip)"
          />
        )}

        {/* Glass highlights (two vertical strips) */}
        {isCanCup && !isGalaxy && (
          <>
            <path
              d={[
                `M ${cx-topHW+4} ${topY+5}`, `L ${cx-topHW+16} ${topY+5}`,
                `C ${cx-midHW+12} ${midY-50} ${cx-midHW+12} ${midY+50} ${cx-botHW+8} ${botY-8}`,
                `L ${cx-botHW-2} ${botY-8}`,
                `C ${cx-midHW+0} ${midY+50} ${cx-midHW+0} ${midY-50} ${cx-topHW-6} ${topY+5}`, "Z",
              ].join(" ")}
              fill="rgba(255,255,255,0.28)" clipPath="url(#bodyClip)"
            />
          </>
        )}

        {/* ── Flores wrap ── */}
        {isFloral && (
          <g clipPath="url(#bodyClip)">
            {DAISIES.map((d, i) => (
              <Daisy key={i} x={d.x} y={d.y} s={d.s} rot={d.rot}
                fill={vinylColor} center={daisyCenter} />
            ))}
            {HEARTS.map((h, i) => (
              <Heart key={i} x={h.x} y={h.y} s={h.s} fill={vinylColor} />
            ))}
          </g>
        )}

        {/* ── Gatitos wrap ── */}
        {isGatitos && (
          <g clipPath="url(#bodyClip)">
            {CATS.map((c, i) => (
              <Cat key={i} x={c.x} y={c.y} s={c.s} fill={vinylColor} />
            ))}
          </g>
        )}

        {/* ── Galaxy stars ── */}
        {isGalaxy && (
          <g clipPath="url(#bodyClip)">
            {STARS.map((s, i) => (
              <circle key={i} cx={s.x} cy={s.y} r={s.r}
                fill="white" opacity={s.r > 1.5 ? 0.95 : 0.72} />
            ))}
          </g>
        )}

        {/* ── Mason jar lid ── */}
        {isMason && (
          <>
            {/* Band (threaded ring) */}
            <rect x={cx - 58} y={topY - 4} width={116} height={16} rx={3} fill="#C0C0C0" />
            <rect x={cx - 54} y={topY + 2} width={108} height={6} rx={2} fill="#D8D8D8" />
            {/* Flat top lid */}
            <rect x={cx - 56} y={topY - 12} width={112} height={12} rx={3} fill="#B8B8B8" />
            <ellipse cx={cx} cy={topY - 8} rx={50} ry={5} fill="#CCCCCC" opacity="0.5" />
          </>
        )}


        {/* ── Top: bamboo lid (can cup) or rim ellipses ── */}
        {isCanCup ? (
          <>
            <rect x={cx-topHW-10} y={topY-22} width={(topHW+10)*2} height={24} rx={5}
              fill="url(#woodGrad)" />
            <line x1={cx-topHW+2} y1={topY-16} x2={cx+topHW+8} y2={topY-16}
              stroke="rgba(80,45,10,0.18)" strokeWidth="1.2" />
            <line x1={cx-topHW+4} y1={topY-9} x2={cx+topHW+6} y2={topY-9}
              stroke="rgba(80,45,10,0.12)" strokeWidth="1" />
            <ellipse cx={cx+22} cy={topY-10} rx={7} ry={4.5}
              fill="#6B3F18" opacity="0.65" />
            {/* Glass top opening visible under lid */}
            <ellipse cx={cx} cy={topY} rx={topHW-2} ry={9}
              fill="rgba(185,225,250,0.35)" />
          </>
        ) : (!isMason) ? (
          <>
            <ellipse cx={cx} cy={topY+10} rx={topHW-2} ry={12}
              fill={isMug ? "#E8E4DE" : isGalaxy ? "#1A0848" : "#AAAAAA"} />
            <ellipse cx={cx} cy={topY+10} rx={topHW-10} ry={8}
              fill={isMug ? "#F5F2EC" : isGalaxy ? "#100530" : "#CACACA"} />
          </>
        ) : null}

        {/* Tumbler frío: metal lid + straw */}
        {isTumbler && (
          <>
            <rect x={cx-topHW+4} y={topY-10} width={(topHW-4)*2} height={18} rx={4} fill="#919191" />
            <rect x={cx-5} y={topY-28} width={10} height={22} rx={3} fill="#7A7A7A" />
          </>
        )}

        {/* Bottom base */}
        <ellipse cx={cx} cy={botY} rx={botHW-2} ry={isCanCup ? 9 : 8}
          fill={
            isCanCup ? "rgba(135,188,225,0.5)" :
            isMason  ? "#D8D2C8"               :
            isMug    ? "#E8E4DE"               :
            isGalaxy ? "#1A0848"               :
            "#999999"
          }
        />

        {/* ── Text overlay ── */}
        <g clipPath="url(#bodyClip)">
          {/* Subtle legibility backing on busy patterns */}
          {(isFloral || isGalaxy || isGatitos) && (
            <ellipse cx={cx} cy={textCY}
              rx={halfTW + 24} ry={fz * 0.92 + 14}
              fill={isGalaxy ? "rgba(5,2,28,0.48)" : "rgba(255,255,255,0.25)"}
            />
          )}
          <text
            x={cx} y={textCY}
            textAnchor="middle"
            fontSize={fz}
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontStyle="italic"
            fill={textColor}
            letterSpacing="0.04em"
          >
            {rawLines.map((line, i) => {
              // Center the block: first line offset up by half total height
              const blockOffset = -((rawLines.length - 1) * lineH) / 2;
              const dy = i === 0 ? blockOffset + fz * 0.38 : lineH;
              return (
                <tspan key={i} x={cx} dy={dy}>
                  {line || " "}
                </tspan>
              );
            })}
          </text>
        </g>
      </svg>

      <p className="absolute bottom-3 left-0 right-0 text-center font-figtree text-[10px] text-pizarra/60 tracking-wide">
        Siempre te contactamos antes de producir para validar tu diseño
      </p>
    </div>
  );
}
