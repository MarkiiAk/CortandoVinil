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
  { label: "Vasos", value: "vasos" },
  { label: "Ropa", value: "ropa" },
  { label: "Llaveros", value: "llaveros" },
  { label: "Fiestas", value: "fiestas" },
  { label: "Velas", value: "velas" },
  { label: "Packaging", value: "packaging" },
];

export function ShopClient() {
  const [active, setActive] = useState<FilterValue>("all");

  const catalogProducts = products.filter(
    (p) => p.category !== "eventos"
  );

  const filtered =
    active === "all"
      ? catalogProducts
      : catalogProducts.filter((p) => p.category === active);

  return (
    <main className="min-h-screen bg-crema">
      {/* Page header */}
      <div className="pt-28 pb-12 px-6 md:px-10 border-b border-cafe/10">
        <div className="max-w-7xl mx-auto">
          <span className="font-dm text-xs tracking-[0.2em] uppercase text-humo block mb-3">
            Catálogo
          </span>
          <h1 className="font-cormorant text-5xl md:text-6xl text-carbon">
            Tienda
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-44 flex-shrink-0 pt-1">
            <p className="font-dm text-xs tracking-[0.2em] uppercase text-humo mb-5">
              Categoría
            </p>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat.value}>
                  <button
                    onClick={() => setActive(cat.value)}
                    className={cn(
                      "font-dm text-sm w-full text-left py-2 transition-colors duration-200",
                      active === cat.value
                        ? "text-cafe"
                        : "text-humo hover:text-carbon"
                    )}
                  >
                    {cat.label}
                    {active === cat.value && (
                      <span className="ml-2 text-cafe/40">—</span>
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
                    "font-dm text-xs px-4 py-2 border transition-all duration-200",
                    active === cat.value
                      ? "bg-cafe text-crema border-cafe"
                      : "text-cafe border-cafe/30 hover:border-cafe"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Count */}
            <p className="font-dm text-xs text-humo mb-8">
              {filtered.length}{" "}
              {filtered.length === 1 ? "producto" : "productos"}
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
                <p className="font-cormorant text-2xl text-humo italic">
                  No hay productos en esta categoría aún.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
