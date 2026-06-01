"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "1",
    title: "Escoge tu favorito",
    description: "Date una vuelta por el catálogo y quédate con el que más te lata.",
  },
  {
    number: "2",
    title: "Ponle tu toque",
    description: "Dinos qué nombre, frase o diseño quieres. Aquí es donde se vuelve tuyo.",
  },
  {
    number: "3",
    title: "Paga seguro",
    description: "Checkout con MercadoPago, rápido y sin enredos.",
  },
  {
    number: "4",
    title: "Recíbelo en casa",
    description: "Lo empacamos con cariño y te lo mandamos a donde estés en México.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-crema py-24 px-6 md:px-10 border-t border-cafe/10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <span className="font-dm text-xs tracking-[0.2em] uppercase text-humo block mb-3">
            Proceso
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl text-carbon">
            Pedirlo es facilísimo
          </h2>
        </motion.div>

        {/* Desktop: horizontal */}
        <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-cafe/15" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              className="flex flex-col items-center text-center px-6"
            >
              <div className="w-20 h-20 rounded-full bg-arena border border-cafe/15 flex items-center justify-center mb-6 relative z-10">
                <span className="font-cormorant text-3xl italic text-cafe">
                  {step.number}
                </span>
              </div>
              <h3 className="font-cormorant text-xl text-carbon mb-2">
                {step.title}
              </h3>
              <p className="font-dm text-sm text-humo leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden relative">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-cafe/15" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="flex items-start gap-6 pb-10 last:pb-0"
            >
              <div className="w-16 h-16 rounded-full bg-arena border border-cafe/15 flex items-center justify-center flex-shrink-0 relative z-10">
                <span className="font-cormorant text-2xl italic text-cafe">
                  {step.number}
                </span>
              </div>
              <div className="pt-3">
                <h3 className="font-cormorant text-xl text-carbon mb-1">
                  {step.title}
                </h3>
                <p className="font-dm text-sm text-humo leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
