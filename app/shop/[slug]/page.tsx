import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import { ProductDetail } from "@/components/shop/ProductDetail";

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
      images: [{ url: "/logo.png", alt: `${product.name} Personalizado | Casa Alessia` }],
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

  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id && p.available)
    .slice(0, 4);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} Personalizado`,
    description: product.description,
    brand: { "@type": "Brand", name: "Casa Alessia" },
    offers: {
      "@type": "Offer",
      price: product.basePrice,
      priceCurrency: "MXN",
      availability: product.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `https://mimarca.mx/shop/${product.slug}`,
      seller: { "@type": "Organization", name: "Casa Alessia" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetail product={product} related={related} />
    </>
  );
}
