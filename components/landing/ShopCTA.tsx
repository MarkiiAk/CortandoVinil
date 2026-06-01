"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function ShopCTA() {
  return (
    <section id="tienda" className="bg-arena py-24 px-6 md:px-10 border-t border-cafe/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="text-center max-w-xl mx-auto space-y-7"
        >
          <span className="font-dm text-xs tracking-[0.2em] uppercase text-humo block">
            Tienda
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl text-carbon">
            ¿Listo para personalizar?
          </h2>
          <p className="font-dm text-base text-humo leading-relaxed">
            Explora el catálogo completo con todas las opciones, filtros por
            categoría y más formas de hacer algo único.
          </p>
          <Link
            href="/shop"
            className="inline-block font-dm text-sm bg-cafe text-crema px-10 py-4 hover:bg-cafe-dark transition-all duration-200"
          >
            Ir a la tienda →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
