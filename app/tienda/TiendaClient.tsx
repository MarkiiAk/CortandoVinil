"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services, type Service } from "@/lib/services";
import { ServiceShopCard } from "@/components/tienda/ServiceShopCard";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

type Filter = "todos" | Service["slug"] | string;

const filters: { label: string; value: Filter; category?: string }[] = [
  { label: "Todos", value: "todos" },
  { label: "Vinil",        category: "vinil-textil,vinil-autoadherible",  value: "vinil"        },
  { label: "Sublimación",  category: "sublimacion",                       value: "sublimacion"  },
  { label: "Gran Formato", category: "gran-formato",                      value: "gran-formato" },
  { label: "Bordado",      category: "bordado",                           value: "bordado"      },
  { label: "Láser / CNC",  category: "corte-laser-cnc",                   value: "laser"        },
  { label: "Impresos",     category: "impresos",                          value: "impresos"     },
  { label: "DTF",          category: "dtf-dtf-uv",                        value: "dtf"          },
  { label: "Volum.",       category: "letras-volumetricas",               value: "volumetrico"  },
];

const categoryMap: Record<string, string[]> = {
  todos:         [],
  vinil:         ["vinil-textil", "vinil-autoadherible"],
  sublimacion:   ["sublimacion"],
  "gran-formato": ["gran-formato"],
  bordado:       ["bordado"],
  laser:         ["corte-laser-cnc"],
  impresos:      ["impresos"],
  dtf:           ["dtf-dtf-uv"],
  volumetrico:   ["letras-volumetricas"],
};

export function TiendaClient() {
  const [active, setActive] = useState<Filter>("todos");

  const filtered = active === "todos"
    ? services
    : services.filter((s) => categoryMap[active]?.includes(s.slug));

  return (
    <div>
      {/* Filter bar */}
      <div className="sticky top-[108px] z-30 bg-negro border-b border-zinc/20 px-6 md:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-hide pb-0.5">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={cn(
                "font-space text-xs font-semibold tracking-widest uppercase px-4 py-2 whitespace-nowrap transition-all duration-150 shrink-0",
                active === f.value
                  ? "bg-acento text-negro"
                  : "text-texto-muted border border-zinc/30 hover:border-zinc hover:text-blanco"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <p className="font-space text-xs tracking-widest uppercase text-texto-muted mb-8">
          {filtered.length} {filtered.length === 1 ? "servicio" : "servicios"}
        </p>

        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease }}
            >
              <ServiceShopCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
