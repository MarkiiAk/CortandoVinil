"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const ideas = [
  "Mesas de dulces",
  "Mamparas para evento",
  "Invitaciones digitales",
  "Invitaciones físicas",
  "Recuerdos para invitados",
  "Merch para tu negocio",
  "Sets que combinan",
  "Lo que se te ocurra",
];

const WHATSAPP_NUMBER = "521XXXXXXXXXX";

export function CustomOrder() {
  const [nombre, setNombre] = useState("");
  const [idea, setIdea] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;

    const msg = [
      `Hola 👋${nombre ? ` Me llamo ${nombre.trim()} y` : ""} tengo una idea en mente:`,
      ``,
      `"${idea.trim()}"`,
      ``,
      `¿Me pueden ayudar?`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section className="bg-crema py-24 px-6 md:px-10 border-t border-cafe/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left — form */}
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
              ¿Tienes algo
              <br />
              en mente?
            </h2>
            <p className="font-dm text-base text-humo leading-relaxed max-w-md">
              Si traes algo en mente que no ves en el catálogo, cuéntanoslo.
              No importa que tan concreta o dispersa este la idea, entre los dos
              la hacemos realidad.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-arena rounded-lg px-6 py-5 space-y-1"
              >
                <p className="font-cormorant text-2xl text-cafe italic">
                  ¡Nos vemos en WhatsApp!
                </p>
                <p className="font-dm text-sm text-humo">
                  Ya se abrió la conversación con tu idea. Te contestamos el mismo día.
                </p>
                <button
                  onClick={() => { setSent(false); setNombre(""); setIdea(""); }}
                  className="font-dm text-xs text-cafe/60 hover:text-cafe transition-colors pt-1 underline underline-offset-2"
                >
                  Enviar otra idea
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="font-dm text-xs tracking-wide text-humo uppercase">
                    Tu nombre (opcional)
                  </label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="¿Cómo te llamas?"
                    className="w-full bg-arena border border-cafe/15 px-4 py-3 font-dm text-sm text-carbon placeholder-humo/60 focus:outline-none focus:border-cafe/40 transition-colors duration-200"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-dm text-xs tracking-wide text-humo uppercase">
                    ¿Qué tienes en mente? *
                  </label>
                  <textarea
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    required
                    rows={4}
                    placeholder="Cuéntanos tu idea, para qué es, cuántas piezas más o menos, para cuándo..."
                    className="w-full bg-arena border border-cafe/15 px-4 py-3 font-dm text-sm text-carbon placeholder-humo/60 focus:outline-none focus:border-cafe/40 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 font-dm text-sm bg-cafe text-crema px-7 py-3.5 hover:bg-cafe-dark transition-all duration-200 disabled:opacity-40"
                  disabled={!idea.trim()}
                >
                  <Send size={14} />
                  Platícanos tu idea
                </button>

                <p className="font-dm text-xs text-humo/50">
                  Se abre WhatsApp con tu mensaje listo. Te contestamos el mismo día.
                </p>
              </form>
            )}
          </motion.div>

          {/* Right — idea pills */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2.5 lg:pt-24"
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
                    : "font-dm text-sm px-4 py-2.5 border border-cafe/20 text-carbon/60 hover:border-cafe/40 hover:text-carbon transition-colors duration-200 cursor-default"
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
