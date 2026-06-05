"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "1",
    title: "Mándanos tu idea",
    description: "Por WhatsApp o el formulario. Material, cantidad, tamaño, diseño y para cuándo. Entre más detalle, más rápido te cotizamos.",
  },
  {
    number: "2",
    title: "Te enviamos la cotización",
    description: "En menos de 24 horas tienes precio, tiempo de entrega y respuesta a cualquier pregunta.",
  },
  {
    number: "3",
    title: "Producción supervisada",
    description: "Confirmas y arrancamos. Revisamos en cada etapa del proceso para que salga exactamente como lo pediste.",
  },
  {
    number: "4",
    title: "Llega a tu puerta",
    description: "Empacado seguro con número de rastreo incluido. Enviamos a los 32 estados de la república.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-lienzo py-20 px-6 md:px-10 border-t border-oscuro/8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <h2 className="font-archivo text-4xl md:text-5xl text-oscuro">
            De la idea al producto<br className="hidden md:block" /> en cuatro pasos.
          </h2>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
          <div className="absolute top-9 left-[12.5%] right-[12.5%] h-px bg-tinta/15" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              className="flex flex-col items-center text-center px-6"
            >
              <div className="w-[72px] h-[72px] bg-tinta flex items-center justify-center mb-6 relative z-10">
                <span className="font-archivo text-2xl text-lienzo">{step.number}</span>
              </div>
              <h3 className="font-archivo text-lg text-oscuro mb-2">{step.title}</h3>
              <p className="font-figtree text-sm text-pizarra leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden relative">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-tinta/20" />
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="flex items-start gap-6 pb-10 last:pb-0"
            >
              <div className="w-16 h-16 bg-tinta flex items-center justify-center flex-shrink-0 relative z-10">
                <span className="font-archivo text-xl text-lienzo">{step.number}</span>
              </div>
              <div className="pt-3">
                <h3 className="font-archivo text-lg text-oscuro mb-1">{step.title}</h3>
                <p className="font-figtree text-sm text-pizarra leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
