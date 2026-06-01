"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/lib/products";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Hero() {
  const heroProducts = products.slice(0, 4);

  return (
    <section
      id="inicio"
      className="min-h-screen bg-crema pt-28 pb-20 px-6 md:px-10 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        {/* Left column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div variants={item}>
            <span className="font-dm text-xs tracking-[0.2em] uppercase text-humo">
              Hecho a mano · Enviamos a todo México
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-cormorant italic text-[clamp(3rem,7vw,5rem)] text-carbon leading-[1.05]"
          >
            Hecho para ti,
            <br />
            <span className="text-cafe">con tu nombre.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-dm text-base text-humo leading-relaxed max-w-md"
          >
            Vasos, playeras, llaveros y mil cosas más, con tu nombre o tu frase
            favorita. Tú lo imaginas, nosotros lo hacemos y te llega hasta la puerta.
          </motion.p>

          <motion.div
            variants={item}
            className="flex items-center gap-5 flex-wrap"
          >
            <Link
              href="/shop"
              className="font-dm text-sm bg-cafe text-crema px-7 py-3.5 hover:bg-cafe-dark transition-all duration-200"
            >
              Ver lo que hacemos
            </Link>
            <a
              href="#como-funciona"
              className="font-dm text-sm text-cafe border-b border-cafe/30 hover:border-cafe transition-all duration-200 pb-0.5"
            >
              ¿Cómo funciona? →
            </a>
          </motion.div>
        </motion.div>

        {/* Right column — 2×2 product placeholders */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="grid grid-cols-2 gap-3"
        >
          {heroProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 + i * 0.1, ease }}
            >
              <Link
                href={`/shop/${product.slug}`}
                className="group aspect-square bg-arena rounded-lg flex flex-col items-center justify-center p-5 hover:bg-arena-dark transition-colors duration-300"
              >
                <span className="font-cormorant text-base md:text-lg italic text-cafe/45 text-center group-hover:text-cafe/70 transition-colors duration-300 leading-tight">
                  {product.name}
                </span>
                <span className="font-dm text-xs text-humo mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Hazlo tuyo →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
