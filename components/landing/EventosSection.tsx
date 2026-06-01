"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const WHATSAPP_NUMBER = "521XXXXXXXXXX";

const servicios = [
  {
    id: "invitacion-digital",
    name: "Invitación Digital",
    description:
      "Link animado que se abre en el celular con el diseño de tu evento. Sin imagen borrosa de WhatsApp, sin imprimir nada.",
    note: "Tenemos muestra — pídela por WhatsApp.",
    price: "desde $450",
    featured: true,
    waMessage:
      "Hola 👋 me interesa una invitación digital para mi evento. ¿Me pueden compartir una muestra?",
  },
  {
    id: "mampara",
    name: "Backdrop / Mampara",
    description:
      "El panel que se roba todas las fotos. Texto de tu evento en vinilo de corte, en el estilo y colores que ya elegiste.",
    note: "La mampara se cotiza aparte — trae la tuya o consultamos.",
    price: "vinilo desde $350",
    featured: false,
    waMessage:
      "Hola 👋 me interesa un backdrop o mampara personalizada para mi evento. ¿Me dan más info?",
  },
  {
    id: "invitacion-fisica",
    name: "Invitación Física",
    description:
      "Papel premium con el mismo diseño de todo lo demás. Para quienes todavía merecen algo en las manos.",
    note: "Mínimo 20 piezas. Se coordina con la digital.",
    price: "desde $25 c/u",
    featured: false,
    waMessage:
      "Hola 👋 me interesan invitaciones físicas para mi evento. ¿Cuál es el proceso?",
  },
];

export function EventosSection() {
  return (
    <section className="bg-arena py-24 px-6 md:px-10 border-t border-cafe/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-14"
        >
          <span className="font-dm text-xs tracking-[0.2em] uppercase text-humo block mb-3">
            Para tu evento
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-cormorant text-4xl md:text-5xl text-carbon leading-[1.1]">
              Todo coordinado
              <br />
              para tu evento.
            </h2>
            <p className="font-dm text-sm text-humo max-w-sm leading-relaxed md:text-right">
              Elegimos un diseño y lo llevamos a todo lo que ya hacemos:
              vasos, llaveros, cajitas, etiquetas. Y le sumamos lo que solo
              existe para tu día.
            </p>
          </div>
        </motion.div>

        {/* Antetítulo de las cards */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-dm text-xs tracking-[0.2em] uppercase text-humo mb-5"
        >
          Solo para eventos
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {servicios.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className={`
                flex flex-col justify-between p-7 rounded-lg
                ${s.featured ? "bg-cafe text-crema" : "bg-crema border border-cafe/10"}
              `}
            >
              <div className="space-y-4">
                <h3
                  className={`font-cormorant text-3xl leading-tight ${
                    s.featured ? "text-crema italic" : "text-carbon"
                  }`}
                >
                  {s.name}
                </h3>
                <p
                  className={`font-dm text-sm leading-relaxed ${
                    s.featured ? "text-crema/70" : "text-humo"
                  }`}
                >
                  {s.description}
                </p>
                <p
                  className={`font-dm text-xs ${
                    s.featured ? "text-crema/40" : "text-humo/60"
                  }`}
                >
                  {s.note}
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <p
                  className={`font-cormorant text-xl italic ${
                    s.featured ? "text-crema/80" : "text-cafe-claro"
                  }`}
                >
                  {s.price}
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(s.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex items-center gap-2.5 font-dm text-sm px-5 py-3 transition-all duration-200 w-full justify-center
                    ${
                      s.featured
                        ? "bg-crema text-cafe hover:bg-arena"
                        : "bg-cafe text-crema hover:bg-cafe-dark"
                    }
                  `}
                >
                  <MessageCircle size={14} />
                  Cotizar por WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Línea de cierre */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-dm text-sm text-humo text-center mt-10"
        >
          Y lo demás de tu fiesta — vasos, etiquetas, cajitas, velas — lo coordinamos con el mismo diseño.
        </motion.p>
      </div>
    </section>
  );
}
