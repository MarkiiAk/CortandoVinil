"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const WHATSAPP_NUMBER = "5212296499981";
const WA_MSG = "Hola 👋 quiero cotizar un proyecto con Cortando Vinil.";

const servicios = [
  { num: "01", name: "Sublimado" },
  { num: "02", name: "Corte Láser" },
  { num: "03", name: "Gran Formato" },
  { num: "04", name: "Impresos" },
  { num: "05", name: "Vinil Textil" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-tinta pt-20 pb-16 px-6 md:px-10 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-20 items-center">

        {/* Left — brand statement */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div variants={item}>
            <span className="font-figtree text-xs tracking-[0.25em] uppercase text-lienzo/40">
              Más de 15 años de experiencia · Enviamos a todo México
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-archivo text-[clamp(3rem,8vw,6rem)] leading-[0.92] text-lienzo"
          >
            Lo que
            <br />
            diseñas,
            <br />
            <span className="text-fuego">lo hacemos</span>
            <br />
            real.
          </motion.h1>

          <motion.p
            variants={item}
            className="font-figtree text-base text-lienzo/60 leading-relaxed max-w-md"
          >
            Sublimado, corte láser, gran formato, impresos y vinil textil.
            Producimos para negocios, emprendedores y eventos en toda la república.
          </motion.p>

          <motion.div
            variants={item}
            className="flex items-center gap-4 flex-wrap"
          >
            <Link
              href="/shop"
              className="font-archivo text-sm bg-lienzo text-tinta px-7 py-3.5 hover:bg-lienzo/90 transition-all duration-200"
            >
              Ver servicios →
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-archivo text-sm bg-fuego text-lienzo px-7 py-3.5 hover:bg-fuego-dark transition-all duration-200"
            >
              Cotizar por WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Right — service category list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="hidden lg:block"
        >
          <div className="border-t border-lienzo/15">
            {servicios.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease }}
                className="group flex items-center justify-between py-6 border-b border-lienzo/15 cursor-default"
              >
                <span className="font-archivo text-[clamp(1.5rem,2.8vw,2.2rem)] text-lienzo/90 group-hover:text-lienzo transition-colors duration-200">
                  {s.name}
                </span>
                <span className="font-figtree text-sm text-lienzo/30 group-hover:text-fuego transition-colors duration-200 tabular-nums">
                  {s.num}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
