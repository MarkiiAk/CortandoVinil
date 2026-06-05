import type { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { TiendaClient } from "./TiendaClient";

export const metadata: Metadata = {
  title: "Catálogo de Servicios",
  description:
    "Explora nuestros 9 servicios de producción: vinil textil, sublimación, corte láser, gran formato, bordado, DTF, impresos y letras volumétricas. Cotiza sin compromiso.",
};

export default function TiendaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-negro">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10 border-b border-zinc/20">
          <p className="font-space text-xs tracking-widest uppercase text-acento mb-3">
            Cotiza sin compromiso · Respuesta el mismo día
          </p>
          <h1 className="font-space font-bold text-5xl md:text-6xl text-blanco mb-3">
            Catálogo
          </h1>
          <p className="font-inter text-base text-texto-muted max-w-lg">
            Selecciona el servicio que necesitas y te cotizamos de inmediato. Si no encuentras lo que buscas, escríbenos — lo trabajamos.
          </p>
        </div>

        <TiendaClient />
      </main>
      <Footer />
    </>
  );
}
