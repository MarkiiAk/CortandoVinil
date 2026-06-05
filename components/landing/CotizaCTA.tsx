"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const WA_NUMBER = "5255715961638";
const WA_MSG = "Hola, quiero cotizar un proyecto con Cortando Vinil.";

export function CotizaCTA() {
  return (
    <section className="bg-acento py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease }}
            className="space-y-3 max-w-xl"
          >
            <h2 className="font-space font-bold text-4xl md:text-5xl text-negro leading-tight">
              ¿Listo para arrancar?
            </h2>
            <p className="font-inter text-base text-negro/70">
              Mándanos tu arte o cuéntanos la idea. Cotizamos sin costo y respondemos el mismo día.
              Si no tienes diseño, también te ayudamos con eso.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
          >
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-space font-bold text-sm bg-negro text-blanco px-8 py-4 hover:bg-carbon transition-colors duration-150 uppercase tracking-wide whitespace-nowrap"
            >
              Cotizar por WhatsApp
            </a>
            <a
              href="mailto:publicidad@cortandovinil.com"
              className="font-space font-semibold text-sm border-2 border-negro/30 text-negro px-8 py-4 hover:border-negro hover:bg-acento-hover transition-all duration-150 uppercase tracking-wide whitespace-nowrap"
            >
              Escribirnos al correo
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
