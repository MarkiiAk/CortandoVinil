"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { portfolio } from "@/lib/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

const aspectMap = {
  video:   "aspect-video",
  square:  "aspect-square",
  portrait: "aspect-[3/4]",
};

const bgCycle = ["bg-carbon", "bg-zinc", "bg-carbon-light", "bg-zinc", "bg-carbon", "bg-carbon-light"];

export function PortfolioSection() {
  return (
    <section id="trabajos" className="bg-negro-soft py-20 px-6 md:px-10 border-t border-zinc/20">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-12"
        >
          <h2 className="font-space font-bold text-4xl md:text-5xl text-blanco">
            Trabajos recientes
          </h2>
        </motion.div>

        {/* Irregular grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {portfolio.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              className={`group relative ${aspectMap[item.aspect]} ${bgCycle[i]} overflow-hidden`}
            >
              {/* Placeholder label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-space text-xs tracking-widest uppercase text-texto-muted">
                  {item.title}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-negro/75 opacity-0 group-hover:opacity-100 transition-opacity duration-250 flex flex-col items-center justify-center gap-2 p-4 text-center">
                <p className="font-space font-semibold text-sm text-blanco">{item.title}</p>
                <span className="font-space text-xs tracking-widest uppercase text-acento border border-acento/40 px-2 py-1">
                  {item.technique}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 font-inter text-sm text-texto-muted text-center"
        >
          ¿Tienes un proyecto en mente?{" "}
          <Link href="/cotizar" className="text-acento hover:text-blanco transition-colors underline underline-offset-2">
            Cotiza sin compromiso →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
