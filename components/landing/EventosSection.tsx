"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const WHATSAPP_NUMBER = "5212296499981";

const categorias = [
  {
    id: "empresas",
    name: "Para empresas",
    description:
      "Merch corporativo, material de punto de venta, tarjetas, playeras con logo, gorras, termos y todo lo que necesita tu marca para verse profesional.",
    note: "Manejamos pedidos grandes y recurrentes.",
    featured: true,
    waMessage:
      "Hola 👋 me interesa producir merch o material corporativo para mi empresa. ¿Me pueden dar información?",
    href: "/tienda",
  },
  {
    id: "emprendedores",
    name: "Para emprendedores",
    description:
      "Desde 1 pieza. Arranca tu línea de productos sin necesidad de grandes volúmenes. Tazas, fundas, letreros, playeras y más con tu diseño.",
    note: "Pedidos unitarios disponibles.",
    featured: false,
    waMessage:
      "Hola 👋 soy emprendedor y quiero producir mis primeros artículos personalizados. ¿Cómo funciona?",
    href: "/tienda",
  },
  {
    id: "eventos",
    name: "Para eventos",
    description:
      "Lonas, roll ups, vinil de corte, mamparas y señalética. Todo lo que necesita tu evento para verse producido y coordinado.",
    note: "Entregas express disponibles.",
    featured: false,
    waMessage:
      "Hola 👋 necesito material para un evento próximo: lonas, señalética o vinil. ¿Me pueden cotizar?",
    href: "/tienda",
  },
];

export function EventosSection() {
  return (
    <section className="bg-lienzo py-24 px-6 md:px-10 border-t border-oscuro/8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-14"
        >
          <span className="font-figtree text-xs tracking-[0.2em] uppercase text-pizarra block mb-3">
            ¿Para quién producimos?
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-archivo text-4xl md:text-5xl text-oscuro leading-[1.05]">
              Producimos para
              <br />
              todo tipo de cliente.
            </h2>
            <p className="font-figtree text-sm text-pizarra max-w-sm leading-relaxed md:text-right">
              Empresas, emprendedores, diseñadores, agencias y organizadores de eventos.
              Si necesitas impresión o corte, tenemos la solución.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categorias.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className={`
                flex flex-col justify-between p-7
                ${cat.featured ? "bg-tinta text-lienzo" : "bg-lienzo-dark border border-oscuro/8"}
              `}
            >
              <div className="space-y-4">
                <h3
                  className={`font-archivo text-2xl leading-tight ${
                    cat.featured ? "text-lienzo" : "text-oscuro"
                  }`}
                >
                  {cat.name}
                </h3>
                <p
                  className={`font-figtree text-sm leading-relaxed ${
                    cat.featured ? "text-lienzo/65" : "text-pizarra"
                  }`}
                >
                  {cat.description}
                </p>
                <p
                  className={`font-figtree text-xs ${
                    cat.featured ? "text-fuego" : "text-tinta/60"
                  }`}
                >
                  {cat.note}
                </p>
              </div>

              <div className="mt-8">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(cat.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex items-center gap-2.5 font-figtree font-medium text-sm px-5 py-3 transition-all duration-200 w-full justify-center
                    ${
                      cat.featured
                        ? "bg-fuego text-lienzo hover:bg-fuego-dark"
                        : "bg-tinta text-lienzo hover:bg-tinta-dark"
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
      </div>
    </section>
  );
}
