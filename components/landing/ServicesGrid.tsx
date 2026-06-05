"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { ServiceThumbnail } from "@/components/tienda/ServiceThumbnail";

const ease = [0.22, 1, 0.36, 1] as const;

// Solo 6 en el landing — el resto vive en /tienda
const featured = services.slice(0, 6);

function ServiceImage({ service }: { service: (typeof services)[0] }) {
  if (service.image) {
    return (
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    );
  }
  return <ServiceThumbnail slug={service.slug} className="aspect-[16/9]" />;
}

export function ServicesGrid() {
  return (
    <section id="servicios" className="bg-negro-soft py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease }}
          className="flex items-baseline justify-between mb-12"
        >
          <div className="flex items-baseline gap-4">
            <h2 className="font-space font-bold text-4xl md:text-5xl text-blanco">
              Lo que hacemos
            </h2>
            <span className="font-space font-bold text-4xl md:text-5xl text-acento">
              {String(services.length).padStart(2, "0")}
            </span>
          </div>
          <Link
            href="/tienda"
            className="hidden md:inline font-space text-xs tracking-widest uppercase text-texto-muted hover:text-blanco border-b border-zinc/30 hover:border-blanco pb-0.5 transition-all"
          >
            Ver todos →
          </Link>
        </motion.div>

        {/* Grid — 6 servicios con imagen */}
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
                {/* Imagen */}
                <ServiceImage service={service} />

                {/* Info */}
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

        {/* CTA ver todos */}
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
