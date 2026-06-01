import { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = products.map((p) => ({
    url: `https://mimarca.mx/shop/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    { url: "https://mimarca.mx", lastModified: new Date(), priority: 1.0 },
    { url: "https://mimarca.mx/shop", lastModified: new Date(), priority: 0.9 },
    ...productUrls,
  ];
}
