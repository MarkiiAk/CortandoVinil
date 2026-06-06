"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type Service } from "@/lib/services";
import { cn } from "@/lib/utils";

const WA_NUMBER = "5255715961638";
const QUANTITY_OPTIONS = ["1 pieza", "2–5 piezas", "6–10 piezas", "11–50 piezas", "Más de 50"];

interface Props {
  service: Service;
  related: Service[];
}

function buildWAMessage(
  service: Service,
  values: Record<string, string>,
  others: Record<string, string>,
  cantidad: string,
  otherCantidad: string,
  refUrl: string,
  notas: string
): string {
  const lines = [`Hola, quiero cotizar *${service.name}*:`, ""];

  for (const field of service.customizationFields) {
    const val = values[field.id]?.trim();
    if (!val) continue;
    const effective = val === "Otra opción"
      ? `Otra: ${others[field.id]?.trim() || "a definir"}`
      : val.replace(/\n/g, " / ");
    lines.push(`• ${field.label}: ${effective}`);
  }

  if (cantidad) {
    const cantEff = cantidad === "Otra cantidad"
      ? `Otra: ${otherCantidad?.trim() || "a definir"}`
      : cantidad;
    lines.push(`• Cantidad: ${cantEff}`);
  }
  if (refUrl.trim()) lines.push(`• Referencia: ${refUrl.trim()}`);
  if (notas.trim()) lines.push(`• Notas: ${notas.trim()}`);

  return lines.join("\n");
}

export function ServiceDetailClient({ service, related }: Props) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(service.customizationFields.map((f) => [f.id, ""]))
  );
  const [others, setOthers] = useState<Record<string, string>>({});
  const [cantidad, setCantidad] = useState("");
  const [otherCantidad, setOtherCantidad] = useState("");
  const [refUrl, setRefUrl] = useState("");
  const [notas, setNotas] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [cantidadError, setCantidadError] = useState(false);
  const [sent, setSent] = useState(false);

  function set(id: string, val: string) {
    setValues((p) => ({ ...p, [id]: val }));
    setErrors((p) => ({ ...p, [id]: false }));
  }

  function handleQuote() {
    const errs: Record<string, boolean> = {};
    let hasErr = false;
    for (const f of service.customizationFields) {
      if (f.required && !values[f.id]?.trim()) { errs[f.id] = true; hasErr = true; }
    }
    if (!cantidad) { setCantidadError(true); hasErr = true; }
    if (hasErr) { setErrors(errs); return; }

    const msg = buildWAMessage(service, values, others, cantidad, otherCantidad, refUrl, notas);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <main className="min-h-screen bg-negro">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-24">

        {/* Back */}
        <Link
          href="/tienda"
          className="inline-flex items-center gap-2 font-space text-xs tracking-widest uppercase text-texto-muted hover:text-blanco transition-colors mb-10 group"
        >
          <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
          Catálogo
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — imagen o video */}
          <div className="md:sticky md:top-28">
            <div className="relative w-full aspect-square overflow-hidden border border-zinc/20 bg-zinc/20">
              {service.video ? (
                <video
                  src={service.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={`/servicios/${service.slug}.jpg`}
                  alt={service.name}
                  fill
                  className="object-cover"
                  priority
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-negro/80 backdrop-blur-sm px-4 py-2.5 text-center">
                <span className="font-space text-[10px] tracking-widest uppercase text-texto-muted">
                  Imagen de referencia · cuéntanos tu proyecto
                </span>
              </div>
            </div>
          </div>

          {/* Right — info + form */}
          <div className="flex flex-col gap-6">

            {/* Header */}
            <div>
              <span className="inline-block font-space text-[10px] tracking-widest uppercase text-acento border border-acento/30 px-3 py-1.5 mb-4">
                {service.techTag}
              </span>
              <h1 className="font-space font-bold text-4xl md:text-5xl text-blanco leading-tight mb-2">
                {service.name}
              </h1>
              <p className="font-inter text-sm text-texto-muted">
                Cotización sin costo · respondemos el mismo día
              </p>
            </div>

            <p className="font-inter text-sm text-texto-light leading-relaxed">
              {service.description}
            </p>

            <div className="border-t border-zinc/20" />

            {/* Form fields */}
            <div className="space-y-6">
              <p className="font-space font-semibold text-base text-blanco">
                Cuéntanos qué necesitas
              </p>

              {service.customizationFields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <label className="font-space text-[11px] tracking-widest uppercase text-texto-muted">
                    {field.label}
                    {field.required && <span className="text-acento ml-1">*</span>}
                  </label>

                  {/* Text */}
                  {field.type === "text" && !field.multiline && (
                    <div className="relative">
                      <input
                        type="text"
                        value={values[field.id]}
                        onChange={(e) => set(field.id, e.target.value)}
                        maxLength={field.maxLength}
                        placeholder={field.placeholder}
                        className={cn(
                          "w-full bg-negro-soft border px-4 py-3 font-inter text-sm text-blanco placeholder-texto-muted/40 outline-none transition-colors",
                          errors[field.id] ? "border-red-500" : "border-zinc/40 focus:border-acento/60"
                        )}
                      />
                      {field.maxLength && (
                        <span className="absolute right-3 bottom-3 font-space text-[10px] text-texto-muted/40">
                          {values[field.id]?.length ?? 0}/{field.maxLength}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Multiline */}
                  {field.type === "text" && field.multiline && (
                    <div className="relative">
                      <textarea
                        value={values[field.id]}
                        onChange={(e) => set(field.id, e.target.value)}
                        maxLength={field.maxLength}
                        placeholder={field.placeholder}
                        rows={3}
                        className={cn(
                          "w-full bg-negro-soft border px-4 py-3 font-inter text-sm text-blanco placeholder-texto-muted/40 outline-none transition-colors resize-none leading-relaxed",
                          errors[field.id] ? "border-red-500" : "border-zinc/40 focus:border-acento/60"
                        )}
                      />
                      {field.maxLength && (
                        <span className="absolute right-3 bottom-2 font-space text-[10px] text-texto-muted/40">
                          {values[field.id]?.length ?? 0}/{field.maxLength}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Select chips */}
                  {field.type === "select" && field.options && (
                    <div className="flex flex-wrap gap-2">
                      {[...field.options, "Otra opción"].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => set(field.id, opt)}
                          className={cn(
                            "font-space text-xs px-3 py-2 border transition-all duration-150",
                            values[field.id] === opt
                              ? opt === "Otra opción"
                                ? "border-zinc bg-zinc/20 text-blanco"
                                : "border-acento bg-acento text-negro"
                              : errors[field.id]
                              ? "border-red-500/50 text-texto-muted hover:border-acento/40"
                              : opt === "Otra opción"
                              ? "border-dashed border-zinc/40 text-texto-muted hover:border-zinc hover:text-blanco"
                              : "border-zinc/40 text-texto-muted hover:border-zinc hover:text-blanco"
                          )}
                        >
                          {opt}
                        </button>
                      ))}
                      {values[field.id] === "Otra opción" && (
                        <input
                          type="text"
                          value={others[field.id] ?? ""}
                          onChange={(e) => setOthers((p) => ({ ...p, [field.id]: e.target.value }))}
                          placeholder="Descríbenos..."
                          autoFocus
                          className="w-full bg-negro-soft border border-zinc/40 focus:border-acento/60 px-4 py-2 font-inter text-sm text-blanco placeholder-texto-muted/40 outline-none transition-colors"
                        />
                      )}
                    </div>
                  )}

                  {errors[field.id] && (
                    <p className="font-inter text-xs text-red-400">Este campo es requerido</p>
                  )}
                </div>
              ))}

              {/* Cantidad */}
              <div className="space-y-2">
                <label className="font-space text-[11px] tracking-widest uppercase text-texto-muted">
                  Cantidad <span className="text-acento">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {[...QUANTITY_OPTIONS, "Otra cantidad"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => { setCantidad(opt); setCantidadError(false); }}
                      className={cn(
                        "font-space text-xs px-3 py-2 border transition-all duration-150",
                        cantidad === opt
                          ? opt === "Otra cantidad"
                            ? "border-zinc bg-zinc/20 text-blanco"
                            : "border-acento bg-acento text-negro"
                          : cantidadError
                          ? "border-red-500/50 text-texto-muted hover:border-acento/40"
                          : opt === "Otra cantidad"
                          ? "border-dashed border-zinc/40 text-texto-muted hover:border-zinc hover:text-blanco"
                          : "border-zinc/40 text-texto-muted hover:border-zinc hover:text-blanco"
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {cantidad === "Otra cantidad" && (
                  <input
                    type="text"
                    value={otherCantidad}
                    onChange={(e) => setOtherCantidad(e.target.value)}
                    placeholder="Ej: 15 piezas, 3 juegos..."
                    autoFocus
                    className="w-full bg-negro-soft border border-zinc/40 focus:border-acento/60 px-4 py-2 font-inter text-sm text-blanco placeholder-texto-muted/40 outline-none transition-colors"
                  />
                )}
                {cantidadError && (
                  <p className="font-inter text-xs text-red-400">Selecciona una cantidad</p>
                )}
              </div>

              {/* Referencia */}
              <div className="space-y-2">
                <label className="font-space text-[11px] tracking-widest uppercase text-texto-muted">
                  Imagen de referencia{" "}
                  <span className="normal-case font-inter text-texto-muted/50">(opcional)</span>
                </label>
                <input
                  type="url"
                  value={refUrl}
                  onChange={(e) => setRefUrl(e.target.value)}
                  placeholder="Link de referencia (Pinterest, Drive, Instagram...)"
                  className="w-full bg-negro-soft border border-zinc/40 focus:border-acento/60 px-4 py-3 font-inter text-sm text-blanco placeholder-texto-muted/40 outline-none transition-colors"
                />
                <p className="font-inter text-xs text-texto-muted/50">
                  También puedes mandar el archivo directo por WhatsApp al abrir la conversación.
                </p>
              </div>

              {/* Notas */}
              <div className="space-y-2">
                <label className="font-space text-[11px] tracking-widest uppercase text-texto-muted">
                  Notas adicionales{" "}
                  <span className="normal-case font-inter text-texto-muted/50">(opcional)</span>
                </label>
                <textarea
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                  placeholder="Para cuándo lo necesitas, cualquier otro detalle..."
                  rows={2}
                  className="w-full bg-negro-soft border border-zinc/40 focus:border-acento/60 px-4 py-3 font-inter text-sm text-blanco placeholder-texto-muted/40 outline-none transition-colors resize-none"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-2 pt-1">
              <button
                onClick={handleQuote}
                className="relative w-full font-space font-bold text-sm bg-acento text-negro py-4 hover:bg-acento-hover transition-colors overflow-hidden uppercase tracking-wide"
              >
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center justify-center gap-2"
                    >
                      ¡Abriendo WhatsApp!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={16} />
                      Cotizar por WhatsApp
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <p className="font-inter text-xs text-texto-muted text-center">
                Respondemos el mismo día en horario hábil · sin compromiso
              </p>
            </div>

          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-zinc/20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-space font-bold text-2xl text-blanco">
                También te puede interesar
              </h2>
              <Link
                href="/tienda"
                className="hidden md:flex items-center gap-1 font-space text-xs tracking-widest uppercase text-texto-muted hover:text-blanco transition-colors"
              >
                Ver todo <ChevronRight size={12} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/tienda/${r.slug}`}
                  className="group block bg-carbon border border-zinc/40 hover:border-acento p-5 transition-all duration-200"
                >
                  <span className="font-space text-[10px] tracking-widest uppercase text-acento/70 block mb-2">
                    {r.techTag}
                  </span>
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
  );
}
