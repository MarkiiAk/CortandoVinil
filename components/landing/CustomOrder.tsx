"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const tipos = [
  "Sublimado en cerámica",
  "Sublimado en metal",
  "Corte láser en acrílico",
  "Corte láser en madera",
  "Lona publicitaria",
  "Roll up o display",
  "Vinil para local",
  "Vinil para vehículo",
  "Playeras con vinil textil",
  "Gorras bordadas",
  "Tarjetas de presentación",
  "Merch corporativo",
  "Material para evento",
  "Algo diferente",
];

const WHATSAPP_NUMBER = "5532266644";

export function CustomOrder() {
  const [nombre, setNombre] = useState("");
  const [idea, setIdea] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;

    const msg = [
      `Hola${nombre ? `, soy ${nombre.trim()}.` : "."} Necesito cotizar lo siguiente:`,
      ``,
      `"${idea.trim()}"`,
      ``,
      `¿Me pueden ayudar?`,
    ].join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section className="bg-lienzo-dark py-20 px-6 md:px-10 border-t border-oscuro/8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="space-y-6"
          >
            <h2 className="font-archivo text-4xl md:text-5xl text-oscuro leading-[1.05]">
              ¿Qué necesitas<br />producir?
            </h2>
            <p className="font-figtree text-base text-pizarra leading-relaxed max-w-md">
              Mándanos los detalles: qué quieres, en qué material, cuántas piezas y para cuándo. Te respondemos con cotización en menos de 24 horas.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-tinta px-6 py-5 space-y-2"
              >
                <p className="font-archivo text-2xl text-lienzo">¡Te contactamos pronto!</p>
                <p className="font-figtree text-sm text-lienzo/60">
                  Se abrió WhatsApp con tu solicitud. Respondemos el mismo día en horario hábil.
                </p>
                <button
                  onClick={() => { setSent(false); setNombre(""); setIdea(""); }}
                  className="font-figtree text-xs text-lienzo/50 hover:text-lienzo transition-colors pt-1 underline underline-offset-2"
                >
                  Mandar otra solicitud
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="font-figtree text-xs text-pizarra uppercase tracking-wide">
                    Tu nombre (opcional)
                  </label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="¿Cómo te llamas?"
                    className="w-full bg-lienzo border border-oscuro/12 px-4 py-3 font-figtree text-sm text-oscuro placeholder-pizarra/40 focus:outline-none focus:border-tinta/40 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-figtree text-xs text-pizarra uppercase tracking-wide">
                    ¿Qué necesitas? *
                  </label>
                  <textarea
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    required
                    rows={4}
                    placeholder="Ej: 50 tazas sublimadas con el logo de mi empresa para un evento el próximo mes..."
                    className="w-full bg-lienzo border border-oscuro/12 px-4 py-3 font-figtree text-sm text-oscuro placeholder-pizarra/40 focus:outline-none focus:border-tinta/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!idea.trim()}
                  className="inline-flex items-center gap-2.5 font-archivo text-sm bg-fuego text-lienzo px-7 py-3.5 hover:bg-fuego-dark transition-all duration-200 disabled:opacity-40"
                >
                  <Send size={14} />
                  Enviar por WhatsApp
                </button>

                <p className="font-figtree text-xs text-pizarra/50">
                  Se abre WhatsApp con tu mensaje listo. Respondemos en menos de 24 horas.
                </p>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2.5 lg:pt-20"
          >
            {tipos.map((tipo, i) => (
              <motion.span
                key={tipo}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.04, ease }}
                className={
                  i === tipos.length - 1
                    ? "font-figtree text-sm px-4 py-2.5 border border-tinta text-tinta font-medium"
                    : "font-figtree text-sm px-4 py-2.5 border border-oscuro/15 text-pizarra hover:border-tinta/40 hover:text-tinta transition-colors duration-200 cursor-default"
                }
              >
                {tipo}
              </motion.span>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
