"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const servicios = [
  {
    num: "01",
    slug: "sublimado",
    nombre: "Sublimado",
    descripcion: "Impresión full color que se fusiona con el material. Duradera, vívida, resistente al uso diario.",
    items: ["Tazas y vasos", "Termos", "Mouse pads", "Fundas para celular", "Azulejos", "Rompecabezas"],
    bg: "bg-lienzo",
    accent: "text-tinta",
  },
  {
    num: "02",
    slug: "laser",
    nombre: "Corte Láser y CNC",
    descripcion: "Precisión milimétrica sobre madera, acrílico, metal y cuero. Corte limpio, grabado profundo.",
    items: ["Letreros de acrílico", "Llaveros grabados", "Portavasos", "Maquetas", "Adornos", "Logotipos 3D"],
    bg: "bg-tinta",
    accent: "text-fuego",
  },
  {
    num: "03",
    slug: "granformato",
    nombre: "Gran Formato",
    descripcion: "Impresión de alto impacto para exteriores e interiores. Sin límite de tamaño.",
    items: ["Lonas publicitarias", "Vinil autoadherible", "Roll ups y displays", "Tela sublimada", "Vehículos", "Escaparates"],
    bg: "bg-lienzo",
    accent: "text-tinta",
  },
  {
    num: "04",
    slug: "impresos",
    nombre: "Impresos",
    descripcion: "Material de papelería comercial en papel premium. Colores exactos, acabados profesionales.",
    items: ["Tarjetas de presentación", "Flyers y trípticos", "Pósters", "Hojas membretadas", "Papel autocopiante", "Menús"],
    bg: "bg-oscuro",
    accent: "text-fuego",
  },
  {
    num: "05",
    slug: "viniltextil",
    nombre: "Vinil Textil",
    descripcion: "Personalización de prendas con vinilo de alta durabilidad. Lava y lava sin perder el diseño.",
    items: ["Playeras", "Gorras bordadas", "Sacos y sudaderas", "Vinil flock (terciopelo)", "Luminiscente", "Full color impreso"],
    bg: "bg-lienzo",
    accent: "text-tinta",
  },
];

export function ServiciosSection() {
  return (
    <section id="servicios">
      {servicios.map((s, i) => {
        const isDark = s.bg === "bg-tinta" || s.bg === "bg-oscuro";
        const textBase = isDark ? "text-lienzo" : "text-oscuro";
        const textMuted = isDark ? "text-lienzo/50" : "text-pizarra";
        const borderColor = isDark ? "border-lienzo/15" : "border-oscuro/10";
        const itemColor = isDark ? "text-lienzo/70" : "text-pizarra";
        const ctaBg = isDark ? "bg-lienzo text-tinta hover:bg-lienzo/90" : "bg-tinta text-lienzo hover:bg-tinta-dark";

        return (
          <motion.div
            key={s.num}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease }}
            className={`${s.bg} px-6 md:px-10 py-16 md:py-20 border-b ${borderColor}`}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-20 items-start">

              {/* Left */}
              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className={`font-archivo text-7xl md:text-8xl leading-none ${s.accent} opacity-25 tabular-nums`}>
                    {s.num}
                  </span>
                  <h2 className={`font-archivo text-4xl md:text-5xl ${textBase} leading-none`}>
                    {s.nombre}
                  </h2>
                </div>

                <p className={`font-figtree text-base ${textMuted} leading-relaxed max-w-lg`}>
                  {s.descripcion}
                </p>

                <Link
                  href={`/shop?cat=${s.slug}`}
                  className={`inline-block font-archivo text-sm px-6 py-3 transition-all duration-200 ${ctaBg}`}
                >
                  Ver servicios →
                </Link>
              </div>

              {/* Right — item list */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 min-w-[220px]">
                {s.items.map((item) => (
                  <span key={item} className={`font-figtree text-sm ${itemColor} flex items-center gap-2`}>
                    <span className={`w-1 h-1 rounded-full flex-shrink-0 ${isDark ? "bg-lienzo/30" : "bg-pizarra/30"}`} />
                    {item}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
