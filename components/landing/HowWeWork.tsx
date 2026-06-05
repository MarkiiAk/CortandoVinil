"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    title: "Nos contactas",
    desc: "Por WhatsApp, teléfono o el formulario de abajo. Cuéntanos qué necesitas — no importa qué tan concreta o vaga esté la idea.",
  },
  {
    number: "02",
    title: "Te cotizamos",
    desc: "Precio justo y tiempo real de entrega. Sin letra chica ni costos escondidos. Respondemos el mismo día en horario hábil.",
  },
  {
    number: "03",
    title: "Producimos",
    desc: "Maquinaria propia, supervisión en cada etapa. Si aplica, te mandamos prueba digital antes de cortar o imprimir.",
  },
  {
    number: "04",
    title: "Lo recibes",
    desc: "Recoges en nuestro taller en Algrarín, CDMX, o lo enviamos con número de rastreo a cualquier estado de la república.",
  },
];

export function HowWeWork() {
  return (
    <section id="proceso" className="bg-negro py-20 px-6 md:px-10 border-t border-zinc/20">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-16"
        >
          <h2 className="font-space font-bold text-4xl md:text-5xl text-blanco">
            ¿Cómo funciona?
          </h2>
          <p className="font-inter text-sm text-texto-muted mt-3 max-w-lg">
            Cuatro pasos y tienes tu proyecto en manos. Sin trámites, sin esperas innecesarias.
          </p>
        </motion.div>

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
