"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";

const ease = [0.22, 1, 0.36, 1] as const;

export function FeaturedProducts() {
  return (
    <section id="productos" className="bg-arena py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-14 flex items-end justify-between"
        >
          <div>
            <span className="font-dm text-xs tracking-[0.2em] uppercase text-humo block mb-3">
              Catálogo
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl text-carbon">
              Lo que hacemos
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:inline-block font-dm text-sm text-cafe border-b border-cafe/30 hover:border-cafe pb-0.5 transition-all duration-200"
          >
            Ver todo →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center md:hidden"
        >
          <Link
            href="/shop"
            className="font-dm text-sm text-cafe border-b border-cafe/30 hover:border-cafe pb-0.5 transition-all duration-200"
          >
            Ver todo el catálogo →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
