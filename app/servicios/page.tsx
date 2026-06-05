import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Vinil textil, sublimación, corte láser, gran formato, bordado, DTF, impresos y más. Conoce todos los servicios de Cortando Vinil.",
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-negro">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-24">
          <div className="mb-16">
            <p className="font-space text-xs tracking-widest uppercase text-acento mb-3">
              Catálogo completo
            </p>
            <h1 className="font-space font-bold text-5xl md:text-6xl text-blanco">
              Servicios
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/servicios/${service.slug}`}
                className="group block bg-carbon border border-zinc/40 hover:border-acento p-6 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="mb-4">
                  <h2 className="font-space font-semibold text-xl text-blanco group-hover:text-acento transition-colors mb-2">
                    {service.name}
                  </h2>
                  <p className="font-inter text-sm text-texto-muted">{service.tagline}</p>
                </div>
                <span className="inline-block font-space text-[11px] tracking-widest uppercase text-texto-muted border border-zinc/40 px-2 py-1">
                  {service.techTag}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
