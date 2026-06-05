import type { Metadata } from "next";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ContactSection } from "@/components/landing/ContactSection";

export const metadata: Metadata = {
  title: "Cotizar",
  description:
    "Solicita una cotización sin costo. Respuesta el mismo día. Sublimado, vinil, gran formato, bordado, DTF, impresos y más.",
};

export default function CotizarPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-negro">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-4">
          <p className="font-space text-xs tracking-widest uppercase text-acento mb-3">
            Sin costo · Respuesta el mismo día
          </p>
          <h1 className="font-space font-bold text-5xl md:text-6xl text-blanco mb-2">
            Cotiza tu proyecto
          </h1>
          <p className="font-inter text-base text-texto-muted max-w-lg">
            Cuéntanos qué necesitas. Si no tienes el arte, lo trabajamos juntos.
          </p>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
