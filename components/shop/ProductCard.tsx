import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

const categoryLabels: Record<string, string> = {
  sublimado: "Sublimado",
  laser: "Corte Láser",
  granformato: "Gran Formato",
  impresos: "Impresos",
  viniltextil: "Vinil Textil",
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images[0];

  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      {/* Image */}
      <div className="relative aspect-[4/5] bg-lienzo-dark overflow-hidden mb-4">
        {image ? (
          <Image
            src={image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-end justify-end p-5">
            <span className="font-figtree text-xs tracking-[0.15em] uppercase text-pizarra/50 group-hover:text-tinta/60 transition-colors duration-300">
              {categoryLabels[product.category] ?? product.category}
            </span>
            <span className="font-archivo text-2xl text-oscuro/20 leading-tight group-hover:text-oscuro/35 transition-colors duration-300 text-right mt-1">
              {product.name}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <span className="font-figtree text-[10px] tracking-[0.18em] uppercase text-pizarra/50">
          {categoryLabels[product.category] ?? product.category}
        </span>
        <h3 className="font-archivo text-lg text-oscuro group-hover:text-tinta transition-colors duration-200 leading-tight">
          {product.name}
        </h3>
        <p className="font-figtree text-sm text-pizarra line-clamp-1">
          {product.shortDescription}
        </p>
        <p className="font-figtree text-xs text-tinta/70 font-medium">
          Cotiza sin compromiso →
        </p>
      </div>
    </Link>
  );
}
