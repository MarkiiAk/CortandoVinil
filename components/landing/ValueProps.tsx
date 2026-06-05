"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const props = [
  {
    number: "01",
    title: "Cualquier material",
    description:
      "Madera, acrílico, cerámica, tela, metal, papel. Si tiene superficie, lo podemos personalizar. Si no lo tenemos, lo conseguimos.",
  },
  {
    number: "02",
    title: "Entregas a toda la república",
    description:
      "Empacamos cada pedido para que llegue intacto y te mandamos el número de rastreo el mismo día que sale del taller.",
  },
  {
    number: "03",
    title: "Calidad sin sorpresas",
    description:
      "15 años haciendo esto. Supervisamos producción en cada etapa para que lo que recibes sea exactamente lo que pediste.",
  },
];

export function ValueProps() {
  return (
    <section className="bg-lienzo py-24 px-6 md:px-10 border-t border-oscuro/8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="font-archivo text-3xl md:text-4xl text-oscuro mb-16"
        >
          Por qué producir con nosotros
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-oscuro/10">
          {props.map((prop, i) => (
            <motion.div
              key={prop.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="px-8 py-10 md:first:pl-0 md:last:pr-0 space-y-4"
            >
              <span className="font-archivo text-5xl text-tinta/15 block leading-none tabular-nums">
                {prop.number}
              </span>
              <h3 className="font-archivo text-xl text-oscuro">
                {prop.title}
              </h3>
              <p className="font-figtree text-sm text-pizarra leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
