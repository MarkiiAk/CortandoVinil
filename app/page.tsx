import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Ticker } from "@/components/landing/Ticker";
import { ValueProps } from "@/components/landing/ValueProps";
import { FeaturedProducts } from "@/components/landing/FeaturedProducts";
import { EventosSection } from "@/components/landing/EventosSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CustomOrder } from "@/components/landing/CustomOrder";
import { ShopCTA } from "@/components/landing/ShopCTA";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Impresión y Corte Profesional en México",
  description:
    "Sublimado, corte láser, gran formato, impresos y vinil textil. Más de 15 años produciendo para negocios, emprendedores y eventos. Enviamos a toda la república mexicana.",
  keywords: [
    "impresión personalizada México",
    "sublimado tazas termos",
    "corte láser acrílico madera",
    "lonas publicitarias",
    "vinil textil playeras",
    "merch corporativo",
    "impresión gran formato",
    "roll up display",
    "tarjetas de presentación",
  ],
  openGraph: {
    title: "Impresión y Corte Profesional | Cortando Vinil",
    description:
      "Sublimado, corte láser, gran formato, impresos y vinil textil. Más de 15 años produciendo para negocios y eventos en México.",
    type: "website",
    locale: "es_MX",
    url: "https://cortandovinil.com",
    siteName: "Cortando Vinil",
    images: [
      {
        url: "/logo.png",
        alt: "Cortando Vinil — Impresión y Corte Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impresión y Corte Profesional | Cortando Vinil",
    description: "Sublimado, corte láser, gran formato, impresos y vinil textil. Enviamos a todo México.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://cortandovinil.com",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cortando Vinil",
  url: "https://cortandovinil.com",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cortando Vinil",
  url: "https://cortandovinil.com",
  description:
    "Empresa de impresión y corte profesional con más de 15 años de experiencia. Sublimado, corte láser, gran formato, impresos y vinil textil. Enviamos a toda la república mexicana.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tarda la cotización?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Respondemos cotizaciones en menos de 24 horas hábiles. Para pedidos urgentes, contáctanos directamente por WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen pedidos desde 1 pieza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, la mayoría de nuestros servicios están disponibles desde 1 pieza. Algunos productos tienen mínimos por proceso técnico — te lo indicamos al cotizar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Envían a toda la república mexicana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, enviamos a toda la república mexicana por paquetería. El costo de envío se incluye en la cotización.",
      },
    },
    {
      "@type": "Question",
      name: "¿Necesito mandar el diseño listo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si tienes el archivo listo (AI, PDF, PNG en alta resolución) es ideal. Si no, nuestro equipo puede apoyarte con el diseño — cotiza también ese servicio.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <Hero />
      <Ticker />
      <ValueProps />
      <FeaturedProducts />
      <EventosSection />
      <HowItWorks />
      <CustomOrder />
      <ShopCTA />
      <Footer />
    </>
  );
}
