import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { getServiceBySlug, getRelatedServices, services } from "@/lib/services";
import { ServiceThumbnail } from "@/components/tienda/ServiceThumbnail";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = getRelatedServices(service.relatedServices);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-negro">
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-24">

          {/* Back */}
          <Link
            href="/tienda"
            className="inline-flex items-center gap-2 font-space text-xs tracking-widest uppercase text-texto-muted hover:text-blanco transition-colors mb-12 group"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
            Todos los servicios
          </Link>

          {/* Header */}
          <div className="mb-14">
            <span className="inline-block font-space text-xs tracking-widest uppercase text-acento border border-acento/30 px-3 py-1.5 mb-6">
              {service.techTag}
            </span>
            <h1 className="font-space font-bold text-5xl md:text-6xl text-blanco leading-tight mb-4">
              {service.name}
            </h1>
            <p className="font-inter text-lg text-texto-muted max-w-2xl leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Service thumbnail */}
              <ServiceThumbnail slug={service.slug} className="aspect-video border border-zinc/30" />

              {/* Applications */}
              <div>
                <h2 className="font-space font-semibold text-xl text-blanco mb-5">
                  Aplicaciones frecuentes
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {service.applications.map((app) => (
                    <div
                      key={app}
                      className="bg-carbon border border-zinc/30 px-4 py-3 font-inter text-sm text-texto-light"
                    >
                      {app}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA inline */}
              <div className="bg-acento p-8">
                <h3 className="font-space font-bold text-2xl text-negro mb-2">
                  ¿Te interesa este servicio?
                </h3>
                <p className="font-inter text-sm text-negro/70 mb-5">
                  Cotización sin costo. Respuesta el mismo día en horario hábil.
                </p>
                <Link
                  href={`/cotizar?servicio=${service.slug}`}
                  className="inline-block font-space font-bold text-sm bg-negro text-blanco px-8 py-3.5 hover:bg-carbon transition-colors uppercase tracking-wide"
                >
                  Cotizar {service.name}
                </Link>
              </div>

            </div>

            {/* Specs sidebar */}
            <div className="space-y-6">
              <div className="bg-carbon border border-zinc/30 p-6">
                <h3 className="font-space font-semibold text-sm tracking-widest uppercase text-texto-muted mb-5">
                  Especificaciones técnicas
                </h3>
                <dl className="space-y-4">
                  {service.specs.map((spec) => (
                    <div key={spec.label} className="border-b border-zinc/20 pb-4 last:border-0 last:pb-0">
                      <dt className="font-space text-xs tracking-widest uppercase text-texto-muted mb-1">
                        {spec.label}
                      </dt>
                      <dd className="font-inter text-sm text-texto-light">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Contact quick */}
              <div className="border border-zinc/30 p-6 space-y-3">
                <p className="font-space text-xs tracking-widest uppercase text-texto-muted">
                  ¿Dudas rápidas?
                </p>
                <a
                  href="https://wa.me/5255715961638?text=Hola,%20tengo%20una%20pregunta%20sobre%20su%20servicio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-space font-semibold text-sm text-acento hover:text-blanco transition-colors"
                >
                  WhatsApp →
                </a>
                <a
                  href="tel:+525571596138"
                  className="block font-inter text-sm text-texto-muted hover:text-blanco transition-colors"
                >
                  55 7159 6138
                </a>
              </div>
            </div>

          </div>

          {/* Related services */}
          {related.length > 0 && (
            <div className="mt-20 pt-12 border-t border-zinc/20">
              <h2 className="font-space font-bold text-2xl text-blanco mb-8">
                Servicios relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/servicios/${r.slug}`}
                    className="group block bg-carbon border border-zinc/40 hover:border-acento p-5 transition-all duration-200"
                  >
                    <h3 className="font-space font-semibold text-base text-blanco group-hover:text-acento transition-colors mb-1">
                      {r.name}
                    </h3>
                    <p className="font-inter text-xs text-texto-muted">{r.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
