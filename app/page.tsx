import type { Metadata } from "next";
import { Navbar }          from "@/components/shared/Navbar";
import { Footer }          from "@/components/shared/Footer";
import { Hero }            from "@/components/landing/Hero";
import { ServicesGrid }    from "@/components/landing/ServicesGrid";
import { WhyUs }           from "@/components/landing/WhyUs";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { HowWeWork }       from "@/components/landing/HowWeWork";
import { CotizaCTA }       from "@/components/landing/CotizaCTA";
import { ContactSection }  from "@/components/landing/ContactSection";

export const metadata: Metadata = {
  title: "Producción Gráfica e Industrial en CDMX",
  description:
    "Sublimado, vinil textil, corte láser, gran formato, bordado, DTF, impresos y letras volumétricas. +15 años produciendo para empresas y emprendedores. CDMX, envíos nacionales.",
  openGraph: {
    title: "Cortando Vinil — Producción Gráfica e Industrial",
    description:
      "Artículos promocionales y publicidad con tecnología industrial. CDMX, +15 años, 9 líneas de producción.",
    type: "website",
    locale: "es_MX",
    url: "https://cortandovinil.com",
    siteName: "Cortando Vinil",
    images: [{ url: "/logo.png", alt: "Cortando Vinil" }],
  },
  alternates: { canonical: "https://cortandovinil.com" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cortando Vinil",
  url: "https://cortandovinil.com",
  telephone: "+525571596138",
  email: "publicidad@cortandovinil.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Marcelino Dávalos 45 Local D",
    addressLocality: "Algrarín",
    addressRegion: "CDMX",
    addressCountry: "MX",
  },
  openingHours: "Mo-Fr 11:00-19:00",
  description:
    "Empresa de producción gráfica e industrial con más de 15 años de experiencia. Sublimado, vinil textil, corte láser, gran formato, bordado, DTF, impresos y letras volumétricas.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Navbar />
      <Hero />
      <ServicesGrid />
      <WhyUs />
      <PortfolioSection />
      <HowWeWork />
      <CotizaCTA />
      <ContactSection />
      <Footer />
    </>
  );
}
