"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const ideas = [
  "Cajitas felices para mesa de dulces",
  "Velas personalizadas",
  "Mesa de dulces completa",
  "Merch para tu negocio",
  "Recuerdos de boda",
  "Decoración para XV años",
  "Etiquetas para tus productos",
  "Regalos corporativos",
  "Baby shower temático",
  "Cualquier cosa que imagines",
];

const WHATSAPP_URL =
  "https://wa.me/521XXXXXXXXXX?text=Hola%2C%20tengo%20una%20idea%20que%20me%20gustar%C3%ADa%20personalizar%20%F0%9F%91%8B";

export function CustomOrder() {
  return (
    <section className="bg-crema py-24 px-6 md:px-10 border-t border-cafe/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="space-y-6"
          >
            <span className="font-dm text-xs tracking-[0.2em] uppercase text-humo block">
              Pedidos especiales
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl text-carbon leading-[1.1]">
              ¿No encuentras
              <br />
              lo que buscas?
            </h2>
            <p className="font-dm text-base text-humo leading-relaxed max-w-md">
              El catálogo es solo el punto de partida. Si tienes una idea —
              unas cajitas para tu mesa de dulces, velas para tu evento,
              decoración temática — platicamos y lo hacemos realidad.
              <br />
              <br />
              No hay idea demasiado específica.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-dm text-sm bg-cafe text-crema px-7 py-3.5 hover:bg-cafe-dark transition-all duration-200"
            >
              <MessageCircle size={16} />
              Cuéntanos tu idea
            </a>
            <p className="font-dm text-xs text-humo/60">
              Respondemos en menos de 24 horas.
            </p>
          </motion.div>

          {/* Right — idea pills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2.5"
          >
            {ideas.map((idea, i) => (
              <motion.span
                key={idea}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.05, ease }}
                className={
                  i === ideas.length - 1
                    ? "font-dm text-sm px-4 py-2.5 border border-cafe text-cafe italic"
                    : "font-dm text-sm px-4 py-2.5 border border-cafe/20 text-carbon/60 hover:border-cafe/50 hover:text-carbon transition-colors duration-200 cursor-default"
                }
              >
                {idea}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
