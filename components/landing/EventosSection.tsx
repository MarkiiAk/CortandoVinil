"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const WHATSAPP_NUMBER = "521XXXXXXXXXX";

const servicios = [
  {
    id: "invitacion-digital",
    eyebrow: "Más pedida",
    name: "Invitación Digital",
    description:
      "Un link. Lo abren en el celular y ya están dentro de tu evento. Animada, interactiva, con tus colores y tu nombre. Sin imagen borrosa de WhatsApp.",
    note: "Tenemos una muestra en vivo que puedes abrir ahorita.",
    demoUrl:
      "https://alessia-adventures.vercel.app/invites/turns3/turns3.html",
    price: "desde $450",
    featured: true,
    waMessage:
      "Hola 👋 me interesa una invitación digital para mi evento. ¿Me cuentan más?",
  },
  {
    id: "mampara",
    eyebrow: "El backdrop perfecto",
    name: "Mampara Personalizada",
    description:
      "Vinilo de corte con el texto de tu evento sobre mampara de madera o foam. Se roba todas las fotos.",
    note: "La mampara se cotiza aparte — trae la tuya o consultamos opciones.",
    demoUrl: null,
    price: "vinilo desde $350",
    featured: false,
    waMessage:
      "Hola 👋 me interesa una mampara personalizada para mi evento. ¿Me pueden cotizar?",
  },
  {
    id: "invitacion-fisica",
    eyebrow: "El detalle que se toca",
    name: "Invitación Física",
    description:
      "Para quienes todavía merecen algo en las manos. Papel premium, diseño coordinado al evento, sobre incluido.",
    note: "Mínimo 20 piezas. Se puede combinar con la digital.",
    demoUrl: null,
    price: "desde $25 c/u",
    featured: false,
    waMessage:
      "Hola 👋 me interesan invitaciones físicas. ¿Cuál es el proceso?",
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
          <div className="flex items-end justify-between gap-10">
            <h2 className="font-cormorant text-4xl md:text-5xl text-carbon leading-[1.1]">
              ¿Tienes un evento?
              <br />
              También lo armamos.
            </h2>
            <p className="hidden md:block font-dm text-sm text-humo max-w-xs text-right leading-relaxed flex-shrink-0">
              Junta lo que ya viste — vasos, etiquetas, cajitas — y súmale
              invitación y decoración. Todo en un solo pedido.
            </p>
          </div>
        </motion.div>

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
                <span
                  className={`font-dm text-xs tracking-[0.18em] uppercase block ${
                    s.featured ? "text-crema/50" : "text-humo"
                  }`}
                >
                  {s.eyebrow}
                </span>
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

                <div className="flex flex-col gap-2">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
