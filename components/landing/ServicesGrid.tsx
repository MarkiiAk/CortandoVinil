"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services";

const ease = [0.22, 1, 0.36, 1] as const;

// Short tech initials for the placeholder icon
function TechBadge({ text }: { text: string }) {
  const initials = text.split(" ")[0].slice(0, 3).toUpperCase();
  return (
    <div className="w-12 h-12 bg-acento/10 flex items-center justify-center shrink-0">
      <span className="font-space font-bold text-xs text-acento tracking-wider">{initials}</span>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section id="servicios" className="bg-negro-soft py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="flex items-baseline gap-4 mb-12"
        >
          <h2 className="font-space font-bold text-4xl md:text-5xl text-blanco">
            Lo que hacemos
          </h2>
          <span className="font-space font-bold text-4xl md:text-5xl text-acento">
            {String(services.length).padStart(2, "0")}
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
            >
              <Link
                href={`/servicios/${service.slug}`}
                className="group block bg-carbon border border-zinc/40 hover:border-acento p-6 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4 mb-4">
                  <TechBadge text={service.name} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-space font-semibold text-base text-blanco group-hover:text-acento transition-colors leading-tight">
                      {service.name}
                    </h3>
                  </div>
                </div>

                <p className="font-inter text-sm text-texto-muted leading-relaxed mb-4 line-clamp-2">
                  {service.tagline}
                </p>

                <span className="inline-block font-space text-[11px] tracking-widest uppercase text-texto-muted border border-zinc/40 px-2 py-1">
                  {service.techTag}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/tienda"
            className="font-space font-semibold text-sm text-texto-light hover:text-blanco border-b border-zinc/40 hover:border-blanco pb-0.5 transition-all duration-200 uppercase tracking-wide"
          >
            Ver todos los servicios →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
