"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const WHATSAPP_NUMBER = "5212296499981";
const WA_MSG = "Hola 👋 quiero cotizar un proyecto con Cortando Vinil.";

export function ShopCTA() {
  return (
    <section id="tienda" className="bg-tinta py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-10"
        >
          <div className="space-y-4 max-w-xl">
            <h2 className="font-archivo text-4xl md:text-5xl text-lienzo leading-[1.05]">
              ¿Listo para producir?
            </h2>
            <p className="font-figtree text-base text-lienzo/60 leading-relaxed">
              Revisa el catálogo completo de servicios o mándanos un mensaje directo.
              Cotizamos en menos de 24 horas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/shop"
              className="font-archivo text-sm bg-lienzo text-tinta px-8 py-4 hover:bg-lienzo/90 transition-all duration-200 whitespace-nowrap"
            >
              Ver catálogo completo
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-archivo text-sm bg-fuego text-lienzo px-8 py-4 hover:bg-fuego-dark transition-all duration-200 whitespace-nowrap"
            >
              Cotizar por WhatsApp →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
