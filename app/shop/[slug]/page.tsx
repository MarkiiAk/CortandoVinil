import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Producto no encontrado" };
  }

  return {
    title: `${product.name} Personalizado`,
    description: product.seoDescription,
    openGraph: {
      title: `${product.name} Personalizado | Casa Alessia`,
      description: product.seoDescription,
      type: "website",
      locale: "es_MX",
      url: `https://mimarca.mx/shop/${product.slug}`,
      siteName: "Casa Alessia",
      images: [
        {
          url: "/logo.png",
          alt: `${product.name} Personalizado | Casa Alessia`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} Personalizado | Casa Alessia`,
      description: product.seoDescription,
      images: ["/logo.png"],
    },
    alternates: {
      canonical: `https://mimarca.mx/shop/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} Personalizado`,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Casa Alessia",
    },
    offers: {
      "@type": "Offer",
      price: product.basePrice,
      priceCurrency: "MXN",
      availability: product.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `https://mimarca.mx/shop/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: "Casa Alessia",
      },
    },
  };

  return (
    <main className="min-h-screen bg-crema flex items-center justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="text-center space-y-4">
        <h1 className="font-cormorant text-5xl text-cafe font-light">
          {product.name}
        </h1>
        <p className="font-dm text-humo text-sm tracking-widest uppercase">
          Página de producto — pendiente de construir
        </p>
      </div>
    </main>
  );
}
