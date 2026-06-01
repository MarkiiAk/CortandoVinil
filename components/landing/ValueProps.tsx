"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const props = [
  {
    number: "01",
    title: "Tú mandas en el diseño",
    description:
      "El nombre, la frase, el color, el detalle. Tú decides cómo se ve y nosotros nos encargamos de que quede exacto a lo que tienes en la cabeza.",
  },
  {
    number: "02",
    title: "Llega a donde estés",
    description:
      "De Tijuana a Mérida. Empacamos cada pedido con cuidado y te pasamos el seguimiento para que sepas dónde viene tu paquete en todo momento.",
  },
  {
    number: "03",
    title: "Bonito de verdad, sin sustos",
    description:
      "Cuidamos cada detalle para que lo que recibes se vea igual de bonito que como lo imaginaste. Sin defectos, sin dramas.",
  },
];

export function ValueProps() {
  return (
    <section className="bg-crema py-24 px-6 md:px-10 border-t border-cafe/10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="font-cormorant text-4xl md:text-5xl text-carbon text-center mb-16"
        >
          Por qué te va a encantar pedirnos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-cafe/10">
          {props.map((prop, i) => (
            <motion.div
              key={prop.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="px-8 py-10 md:first:pl-0 md:last:pr-0 space-y-4"
            >
              <span className="font-cormorant text-7xl text-cafe/20 block leading-none">
                {prop.number}
              </span>
              <h3 className="font-cormorant text-2xl text-carbon">
                {prop.title}
              </h3>
              <p className="font-dm text-sm text-humo leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
