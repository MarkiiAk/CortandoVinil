import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { type Service } from "@/lib/services";

interface Props {
  service: Service;
}

const WA_NUMBER = "5255715961638";

export function ServiceShopCard({ service }: Props) {
  const waMsg = `Hola, me interesa cotizar el servicio de *${service.name}*. ¿Me pueden dar información?`;

  return (
    <div className="group bg-carbon border border-zinc/30 hover:border-acento/60 transition-all duration-200 hover:-translate-y-0.5 flex flex-col overflow-hidden">

      {/* Imagen */}
      <Link href={`/tienda/${service.slug}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden bg-zinc/20">
          <Image
            src={`/servicios/${service.slug}.jpg`}
            alt={service.name}
            fill
            className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <span className="inline-block font-space text-[10px] tracking-widest uppercase text-acento/80 mb-2">
            {service.techTag}
          </span>
          <h3 className="font-space font-semibold text-base text-blanco group-hover:text-acento transition-colors leading-tight">
            <Link href={`/tienda/${service.slug}`}>{service.name}</Link>
          </h3>
          <p className="font-inter text-sm text-texto-muted mt-1 line-clamp-2 leading-relaxed">
            {service.tagline}
          </p>
        </div>

        <div className="mt-auto flex items-center gap-3 pt-2">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 font-space font-semibold text-xs bg-acento text-negro px-4 py-2.5 text-center hover:bg-acento-hover transition-colors uppercase tracking-wide"
          >
            Cotizar
          </a>
          <Link
            href={`/tienda/${service.slug}`}
            aria-label={`Ver detalles de ${service.name}`}
            className="w-10 h-10 border border-zinc/40 hover:border-acento flex items-center justify-center text-texto-muted hover:text-acento transition-colors shrink-0"
          >
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
