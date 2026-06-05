"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-negro hero-pattern flex items-center overflow-hidden"
    >
      {/* Background "15" */}
      <span
        aria-hidden
        className="absolute right-0 bottom-[-0.1em] font-space font-bold text-[28vw] leading-none text-carbon select-none pointer-events-none"
      >
        15
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-28 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 font-space text-xs font-semibold tracking-widest uppercase text-acento border border-acento/30 px-3 py-1.5">
              CDMX · +15 AÑOS · PRODUCCIÓN REAL
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-space font-bold text-[clamp(2.8rem,6vw,4.5rem)] leading-[1.0] text-blanco"
          >
            Tu marca impresa,<br />
            cortada, bordada.
          </motion.h1>

          <motion.p
            variants={item}
            className="font-inter text-base text-texto-muted leading-relaxed max-w-md"
          >
            Vinil, sublimación, bordado, corte láser, gran formato y más. Producción propia en CDMX — sin intermediarios, sin sorpresas.
          </motion.p>

          {/* "No encuentras lo que buscas" hint */}
          <motion.p
            variants={item}
            className="font-inter text-sm text-texto-muted/60 leading-relaxed max-w-md border-l-2 border-acento/40 pl-3"
          >
            ¿Tienes algo en mente que no ves en el catálogo? Mándanos un mensaje — casi siempre podemos hacerlo.
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-4 flex-wrap">
            <Link
              href="/#servicios"
              className="font-space font-semibold text-sm bg-acento text-negro px-7 py-3.5 hover:bg-acento-hover transition-colors duration-150 uppercase tracking-wide"
            >
              Ver servicios
            </Link>
            <Link
              href="/#contacto"
              className="font-space font-semibold text-sm border border-blanco/30 text-blanco px-7 py-3.5 hover:border-blanco/60 hover:bg-blanco/5 transition-all duration-150 uppercase tracking-wide"
            >
              Cotizar
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — asymmetric work grid */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="hidden lg:grid grid-cols-2 gap-3"
        >
          <div className="relative aspect-[3/4] bg-carbon overflow-hidden">
            <video
              src="/hero-dtf.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-negro/70 to-transparent p-4">
              <span className="font-space text-xs tracking-widest uppercase text-blanco/80 border border-blanco/30 px-2 py-1">
                DTF
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative aspect-square bg-carbon-light flex items-end p-4">
              <span className="font-space text-xs tracking-widest uppercase text-texto-muted border border-zinc/50 px-2 py-1">
                Gran Formato
              </span>
            </div>
            <div className="relative aspect-video bg-zinc flex items-end p-4">
              <span className="font-space text-xs tracking-widest uppercase text-texto-muted border border-zinc-light/50 px-2 py-1">
                Láser CNC
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
