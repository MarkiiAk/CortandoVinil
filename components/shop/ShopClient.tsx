"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products, type ProductCategory } from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

type FilterValue = ProductCategory | "all";

const categories: { label: string; value: FilterValue }[] = [
  { label: "Todo", value: "all" },
  { label: "Sublimado", value: "sublimado" },
  { label: "Corte Láser", value: "laser" },
  { label: "Gran Formato", value: "granformato" },
  { label: "Impresos", value: "impresos" },
  { label: "Vinil Textil", value: "viniltextil" },
];

export function ShopClient() {
  const [active, setActive] = useState<FilterValue>("all");

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <main className="min-h-screen bg-lienzo">
      {/* Page header */}
      <div className="pt-28 pb-12 px-6 md:px-10 border-b border-oscuro/8">
        <div className="max-w-7xl mx-auto">
          <span className="font-figtree text-xs tracking-[0.2em] uppercase text-pizarra block mb-3">
            Catálogo
          </span>
          <h1 className="font-archivo text-5xl md:text-6xl text-oscuro">
            Servicios
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-44 flex-shrink-0 pt-1">
            <p className="font-figtree text-xs tracking-[0.2em] uppercase text-pizarra mb-5">
              Categoría
            </p>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat.value}>
                  <button
                    onClick={() => setActive(cat.value)}
                    className={cn(
                      "font-figtree text-sm w-full text-left py-2 transition-colors duration-200",
                      active === cat.value
                        ? "text-tinta font-medium"
                        : "text-pizarra hover:text-oscuro"
                    )}
                  >
                    {cat.label}
                    {active === cat.value && (
                      <span className="ml-2 text-tinta/30">—</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className="flex-1 min-w-0">
            {/* Mobile filter chips */}
            <div className="flex gap-2 flex-wrap mb-8 md:hidden">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActive(cat.value)}
                  className={cn(
                    "font-figtree text-xs px-4 py-2 border transition-all duration-200",
                    active === cat.value
                      ? "bg-tinta text-lienzo border-tinta"
                      : "text-pizarra border-oscuro/20 hover:border-tinta/50"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Count */}
            <p className="font-figtree text-xs text-pizarra mb-8">
              {filtered.length}{" "}
              {filtered.length === 1 ? "servicio" : "servicios"}
            </p>

            {/* Grid */}
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

            {filtered.length === 0 && (
              <div className="py-24 text-center">
                <p className="font-archivo text-2xl text-pizarra/50">
                  No hay servicios en esta categoría aún.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
