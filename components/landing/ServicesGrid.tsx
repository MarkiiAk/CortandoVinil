"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";

const ease = [0.22, 1, 0.36, 1] as const;

const featured = services.slice(0, 6);

export function ServicesGrid() {
  return (
    <section id="servicios" className="bg-negro-soft py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="flex items-baseline justify-between mb-12"
        >
          <h2 className="font-space font-bold text-4xl md:text-5xl text-blanco">
            Lo que hacemos
          </h2>
          <Link
            href="/tienda"
            className="hidden md:inline font-space text-xs tracking-widest uppercase text-texto-muted hover:text-blanco border-b border-zinc/30 hover:border-blanco pb-0.5 transition-all"
          >
            Ver todos →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
            >
              <Link
                href={`/tienda/${service.slug}`}
                className="group block bg-carbon border border-zinc/40 hover:border-acento transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc/20">
                  <Image
                    src={`/servicios/${service.slug}.jpg`}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <span className="font-space text-[10px] tracking-widest uppercase text-acento/80 block mb-1">
                    {service.techTag}
                  </span>
                  <h3 className="font-space font-semibold text-base text-blanco group-hover:text-acento transition-colors leading-tight mb-1">
                    {service.name}
                  </h3>
                  <p className="font-inter text-sm text-texto-muted line-clamp-1">
                    {service.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-zinc/20"
        >
          <p className="font-inter text-sm text-texto-muted">
            Y {services.length - featured.length} servicios más: bordado, impresos, DTF y letras volumétricas.
          </p>
          <Link
            href="/tienda"
            className="font-space font-semibold text-sm bg-acento text-negro px-7 py-3 hover:bg-acento-hover transition-colors uppercase tracking-wide whitespace-nowrap"
          >
            Ver catálogo completo →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
