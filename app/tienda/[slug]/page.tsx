import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { getServiceBySlug, getRelatedServices, services } from "@/lib/services";
import { ServiceDetailClient } from "./ServiceDetailClient";

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
    description: `${service.tagline} — ${service.description.slice(0, 120)}`,
  };
}

export default function TiendaSlugPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  const related = getRelatedServices(service.relatedServices);

  return (
    <>
      <Navbar />
      <ServiceDetailClient service={service} related={related} />
      <Footer />
    </>
  );
}
