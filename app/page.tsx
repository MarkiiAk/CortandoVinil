import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ValueProps } from "@/components/landing/ValueProps";
import { FeaturedProducts } from "@/components/landing/FeaturedProducts";
import { EventosSection } from "@/components/landing/EventosSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CustomOrder } from "@/components/landing/CustomOrder";
import { ShopCTA } from "@/components/landing/ShopCTA";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Productos Personalizados con tu Nombre",
  description:
    "Vasos, playeras, llaveros y más con tu nombre o frase favorita. Hecho a mano con Cricut. Enviamos a toda la república mexicana.",
  keywords: [
    "productos personalizados",
    "vasos personalizados",
    "playeras personalizadas",
    "regalos personalizados México",
    "llaveros personalizados",
    "etiquetas personalizadas para fiesta",
    "cajitas de regalo personalizadas",
  ],
  openGraph: {
    title: "Productos Personalizados con tu Nombre | Casa Alessia",
    description:
      "Tu nombre, tu estilo. Vasos, playeras, llaveros y más. Enviamos a todo México.",
    type: "website",
    locale: "es_MX",
    url: "https://mimarca.mx",
    siteName: "Casa Alessia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Productos Personalizados | Casa Alessia",
    description: "Tu nombre, tu estilo. Enviamos a todo México.",
  },
  alternates: {
    canonical: "https://mimarca.mx",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Casa Alessia",
  url: "https://mimarca.mx",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://mimarca.mx/shop?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Casa Alessia",
  url: "https://mimarca.mx",
  description:
    "Productos personalizados hechos a mano con Cricut: vasos, playeras, llaveros, etiquetas para fiesta y más. Enviamos a toda la república mexicana.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda en llegar mi pedido?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los pedidos se procesan en 3 a 5 días hábiles. El envío tarda entre 3 y 7 días adicionales dependiendo de tu ubicación en la república mexicana.",
      },
    },
    {
      "@type": "Question",
      name: "¿Envían a toda la república mexicana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, hacemos envíos a toda la república mexicana a través de paquetería.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo poner cualquier texto o nombre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, cada producto es personalizado con el texto, nombre o frase que tú elijas, dentro del límite de caracteres de cada artículo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si mi pedido llega dañado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si tu pedido llega con algún daño, contáctanos dentro de las 48 horas siguientes a la entrega con fotos y lo resolvemos de inmediato.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen pedidos al mayoreo para eventos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, atendemos pedidos al mayoreo para bodas, baby shower, XV años, graduaciones y eventos corporativos. Contáctanos para recibir una cotización especial.",
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
