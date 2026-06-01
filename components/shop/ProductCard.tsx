import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      {/* Image placeholder */}
      <div className="relative aspect-[4/5] bg-arena-dark rounded-lg overflow-hidden mb-4 flex items-end p-5">
        <span className="font-cormorant text-xl italic text-cafe/40 leading-tight group-hover:text-cafe/60 transition-colors duration-300">
          {product.name}
        </span>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-cormorant text-xl text-carbon group-hover:text-cafe transition-colors duration-200 leading-tight">
            {product.name}
          </h3>
          <Badge className="flex-shrink-0 mt-0.5">Personalizable</Badge>
        </div>
        <p className="font-dm text-sm text-humo line-clamp-1">
          {product.shortDescription}
        </p>
        <p className="font-dm text-sm text-cafe-claro">
          desde ${product.basePrice} MXN
        </p>
      </div>
    </Link>
  );
}
