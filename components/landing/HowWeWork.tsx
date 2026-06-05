"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    title: "Nos contactas",
    desc: "Por WhatsApp, teléfono o formulario. Sin papeleo ni requisitos previos.",
  },
  {
    number: "02",
    title: "Cotizamos",
    desc: "Precio justo, tiempo real de entrega, sin letra chica. Respuesta el mismo día.",
  },
  {
    number: "03",
    title: "Producimos",
    desc: "Maquinaria propia, control de calidad en cada pieza. Te enviamos prueba antes si aplica.",
  },
  {
    number: "04",
    title: "Entregamos",
    desc: "Recoges en taller o enviamos a cualquier punto de la república con número de rastreo.",
  },
];

export function HowWeWork() {
  return (
    <section id="proceso" className="bg-negro py-20 px-6 md:px-10 border-t border-zinc/20">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="font-space font-bold text-4xl md:text-5xl text-blanco mb-16"
        >
          El proceso
        </motion.h2>

        {/* Desktop horizontal */}
        <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
          <div className="absolute top-7 left-[12.5%] right-[12.5%] h-px bg-zinc/40" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease }}
              className="flex flex-col items-center text-center px-6"
            >
              <div className="w-14 h-14 border border-acento bg-negro flex items-center justify-center mb-6 relative z-10">
                <span className="font-space font-bold text-acento text-lg">{step.number}</span>
              </div>
              <h3 className="font-space font-semibold text-base text-blanco mb-2">{step.title}</h3>
              <p className="font-inter text-sm text-texto-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden relative">
          <div className="absolute left-7 top-6 bottom-6 w-px bg-zinc/40" />
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="flex items-start gap-6 pb-10 last:pb-0"
            >
              <div className="w-14 h-14 border border-acento bg-negro flex items-center justify-center shrink-0 relative z-10">
                <span className="font-space font-bold text-acento">{step.number}</span>
              </div>
              <div className="pt-3">
                <h3 className="font-space font-semibold text-base text-blanco mb-1">{step.title}</h3>
                <p className="font-inter text-sm text-texto-muted leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
