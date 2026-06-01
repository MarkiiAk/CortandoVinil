import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { ShopClient } from "@/components/shop/ShopClient";
import { Footer } from "@/components/landing/Footer";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Tienda — Productos Personalizados",
  description:
    "Explora nuestro catálogo: vasos, playeras, llaveros, etiquetas para fiesta y más. Todo personalizado con tu nombre o frase. Enviamos a todo México.",
  openGraph: {
    title: "Tienda — Productos Personalizados | Casa Alessia",
    description:
      "Explora nuestro catálogo completo de productos personalizados. Todo hecho a mano.",
    type: "website",
    locale: "es_MX",
    url: "https://mimarca.mx/shop",
    siteName: "Casa Alessia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tienda | Casa Alessia",
    description: "Catálogo de productos personalizados. Enviamos a todo México.",
  },
  alternates: {
    canonical: "https://mimarca.mx/shop",
  },
};

export default function ShopPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catálogo de Productos Personalizados — Casa Alessia",
    description:
      "Colección completa de productos personalizados hechos a mano con Cricut.",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://mimarca.mx/shop/${p.slug}`,
      name: `${p.name} Personalizado`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Navbar />
      <ShopClient />
      <Footer />
    </>
  );
}
