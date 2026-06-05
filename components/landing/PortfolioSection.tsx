"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/lib/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

const aspectMap = {
  video:   "aspect-video",
  square:  "aspect-square",
  portrait: "aspect-[3/4]",
};

const bgCycle = [
  "bg-carbon", "bg-zinc", "bg-carbon-light",
  "bg-zinc",   "bg-carbon", "bg-carbon-light",
];

function PortfolioCard({ item, index }: { item: typeof portfolio[0]; index: number }) {
  const [imgError, setImgError] = useState(false);
  const src = `/portfolio/trabajo-${item.id}.jpg`;
  const showImage = !imgError;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease }}
      className={`group relative ${aspectMap[item.aspect]} overflow-hidden`}
    >
      {showImage ? (
        <Image
          src={src}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className={`absolute inset-0 ${bgCycle[index]} flex items-center justify-center`}>
          <span className="font-space text-xs tracking-widest uppercase text-texto-muted px-4 text-center">
            {item.title}
          </span>
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-negro/75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <p className="font-space font-semibold text-sm text-blanco">{item.title}</p>
        <span className="font-space text-[10px] tracking-widest uppercase text-acento border border-acento/40 px-2 py-1">
          {item.technique}
        </span>
      </div>
    </motion.div>
  );
}

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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {portfolio.map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} />
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
