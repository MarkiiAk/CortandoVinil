"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight, MessageCircle, Package } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type Product } from "@/lib/products";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ProductCard } from "@/components/shop/ProductCard";
import { cn } from "@/lib/utils";

const WA_NUMBER = "5212296499981";
const QUANTITY_OPTIONS = ["1 pieza", "2–5 piezas", "6–10 piezas", "11–50 piezas", "Más de 50"];

const categoryLabels: Record<string, string> = {
  sublimado: "Sublimado",
  laser: "Corte Láser y CNC",
  granformato: "Gran Formato",
  impresos: "Impresos",
  viniltextil: "Vinil Textil",
};

interface Props {
  product: Product;
  related: Product[];
}

function buildWhatsAppMessage(
  product: Product,
  values: Record<string, string>,
  otherValues: Record<string, string>,
  cantidad: string,
  notas: string,
  refUrl: string
): string {
  const lines = [`Hola! Quisiera cotizar *${product.name}*:`, ""];

  for (const field of product.customizationFields) {
    if (field.type === "pattern") continue;
    const value = values[field.id]?.trim();
    if (!value) continue;
    const effective = value === "Otra opción"
      ? `Otra opción: ${(otherValues[field.id] ?? "").trim() || "a definir en el chat"}`
      : value.replace(/\n/g, " / ");
    lines.push(`• ${field.label}: ${effective}`);
  }

  if (cantidad) {
    const cantidadEffective = cantidad === "Otra cantidad"
      ? `Otra cantidad: ${(otherValues["__cantidad__"] ?? "").trim() || "a definir en el chat"}`
      : cantidad;
    lines.push(`• Cantidad: ${cantidadEffective}`);
  }
  if (refUrl.trim()) lines.push(`• Referencia: ${refUrl.trim()}`);
  if (notas.trim()) lines.push(`• Notas: ${notas.trim()}`);

  return lines.join("\n");
}

export function ProductDetail({ product, related }: Props) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(product.customizationFields.map((f) => [f.id, ""]))
  );
  const [cantidad, setCantidad] = useState("");
  const [notas, setNotas] = useState("");
  const [refUrl, setRefUrl] = useState("");
  const [otherValues, setOtherValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [cantidadError, setCantidadError] = useState(false);
  const [sent, setSent] = useState(false);

  function handleOtherValue(id: string, val: string) {
    setOtherValues((prev) => ({ ...prev, [id]: val }));
  }

  function handleChange(id: string, value: string) {
    setValues((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: false }));
  }

  function handleQuote() {
    const newErrors: Record<string, boolean> = {};
    let hasError = false;

    for (const field of product.customizationFields) {
      if (field.type === "pattern") continue;
      if (field.required && !values[field.id]?.trim()) {
        newErrors[field.id] = true;
        hasError = true;
      }
    }

    if (!cantidad) {
      setCantidadError(true);
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    const msg = buildWhatsAppMessage(product, values, otherValues, cantidad, notas, refUrl);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-lienzo overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-10 pt-28 pb-20">

          {/* Back */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 font-figtree text-xs text-pizarra hover:text-tinta transition-colors duration-200 mb-10 group"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
            Regresar al catálogo
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Service image / placeholder */}
            <div className="md:sticky md:top-28">
              <div className="relative w-full aspect-square overflow-hidden">
                {product.images[0] ? (
                  <>
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-lienzo/85 backdrop-blur-sm px-4 py-2.5 flex items-center justify-center">
                      <span className="font-figtree text-[11px] tracking-wide text-oscuro/50 text-center leading-relaxed">
                        Imagen de referencia · cuéntanos tus detalles y te cotizamos
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-tinta/20 bg-lienzo-dark">
                    <Package size={48} strokeWidth={1} />
                    <span className="font-archivo text-2xl text-oscuro/30">
                      {product.name}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-7 min-w-0">

              {/* Header */}
              <div>
                <p className="font-figtree text-xs text-pizarra tracking-widest uppercase mb-2">
                  {categoryLabels[product.category] ?? product.category}
                </p>
                <h1 className="font-archivo text-4xl md:text-5xl text-oscuro leading-tight">
                  {product.name}
                </h1>
                <p className="font-figtree text-sm text-pizarra mt-2">
                  Precio por cotización · respondemos en menos de 24 horas
                </p>
              </div>

              <p className="font-figtree text-sm text-oscuro/70 leading-relaxed">
                {product.description}
              </p>

              <div className="w-12 border-t border-oscuro/15" />

              {/* Fields */}
              <div className="flex flex-col gap-6">
                <p className="font-archivo text-xl text-oscuro">
                  Cuéntanos qué necesitas
                </p>

                {product.customizationFields
                  .filter((f) => f.type !== "pattern")
                  .map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label className="font-figtree text-xs tracking-wide text-oscuro/70 uppercase">
                      {field.label}
                      {field.required && <span className="text-fuego ml-1">*</span>}
                    </label>

                    {/* Single-line text */}
                    {field.type === "text" && !field.multiline && (
                      <div className="relative">
                        <input
                          type="text"
                          value={values[field.id]}
                          onChange={(e) => handleChange(field.id, e.target.value)}
                          maxLength={field.maxLength}
                          placeholder={field.placeholder}
                          className={cn(
                            "w-full font-figtree text-sm bg-lienzo-dark border px-4 py-3 outline-none transition-colors placeholder:text-pizarra/40",
                            errors[field.id] ? "border-red-400" : "border-oscuro/15 focus:border-tinta/40"
                          )}
                        />
                        {field.maxLength && (
                          <span className="absolute right-3 bottom-3 font-figtree text-xs text-pizarra/40">
                            {values[field.id]?.length ?? 0}/{field.maxLength}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Multiline text */}
                    {field.type === "text" && field.multiline && (
                      <div className="relative">
                        <textarea
                          value={values[field.id]}
                          onChange={(e) => handleChange(field.id, e.target.value)}
                          maxLength={field.maxLength}
                          placeholder={field.placeholder}
                          rows={3}
                          className={cn(
                            "w-full font-figtree text-sm bg-lienzo-dark border px-4 py-3 outline-none transition-colors placeholder:text-pizarra/40 resize-none leading-relaxed",
                            errors[field.id] ? "border-red-400" : "border-oscuro/15 focus:border-tinta/40"
                          )}
                        />
                        {field.maxLength && (
                          <span className="absolute right-3 bottom-2 font-figtree text-xs text-pizarra/40">
                            {values[field.id]?.length ?? 0}/{field.maxLength}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Select chips */}
                    {field.type === "select" && field.options && (
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap gap-2">
                          {[...field.options, "Otra opción"].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => handleChange(field.id, option)}
                              className={cn(
                                "font-figtree text-xs px-4 py-2 border transition-all duration-150",
                                values[field.id] === option
                                  ? option === "Otra opción"
                                    ? "border-pizarra bg-pizarra/10 text-oscuro"
                                    : "border-tinta bg-tinta text-lienzo"
                                  : errors[field.id]
                                  ? "border-red-300 text-oscuro/50 hover:border-tinta/50"
                                  : option === "Otra opción"
                                  ? "border-dashed border-oscuro/20 text-pizarra hover:border-tinta/50 hover:text-oscuro"
                                  : "border-oscuro/15 text-oscuro/60 hover:border-tinta/40 hover:text-oscuro"
                              )}
                            >
                              {option}
                            </button>
                          ))}
                        </div>

                        {values[field.id] === "Otra opción" && (
                          <input
                            type="text"
                            value={otherValues[field.id] ?? ""}
                            onChange={(e) => handleOtherValue(field.id, e.target.value)}
                            placeholder="Descríbenos lo que tienes en mente..."
                            autoFocus
                            className="w-full font-figtree text-sm bg-lienzo-dark border border-pizarra/30 focus:border-tinta px-4 py-3 outline-none transition-colors placeholder:text-pizarra/40"
                          />
                        )}
                      </div>
                    )}

                    {errors[field.id] && (
                      <p className="font-figtree text-xs text-red-500">Este campo es requerido</p>
                    )}
                  </div>
                ))}

                {/* Cantidad */}
                <div className="flex flex-col gap-2">
                  <label className="font-figtree text-xs tracking-wide text-oscuro/70 uppercase">
                    Cantidad <span className="text-fuego">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[...QUANTITY_OPTIONS, "Otra cantidad"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => { setCantidad(opt); setCantidadError(false); }}
                        className={cn(
                          "font-figtree text-xs px-4 py-2 border transition-all duration-150",
                          cantidad === opt
                            ? opt === "Otra cantidad"
                              ? "border-pizarra bg-pizarra/10 text-oscuro"
                              : "border-tinta bg-tinta text-lienzo"
                            : cantidadError
                            ? "border-red-300 text-oscuro/50 hover:border-tinta/50"
                            : opt === "Otra cantidad"
                            ? "border-dashed border-oscuro/20 text-pizarra hover:border-tinta/50 hover:text-oscuro"
                            : "border-oscuro/15 text-oscuro/60 hover:border-tinta/40 hover:text-oscuro"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {cantidad === "Otra cantidad" && (
                    <input
                      type="text"
                      value={otherValues["__cantidad__"] ?? ""}
                      onChange={(e) => handleOtherValue("__cantidad__", e.target.value)}
                      placeholder="Ej: 15 piezas, 3 juegos de 4..."
                      autoFocus
                      className="w-full font-figtree text-sm bg-lienzo-dark border border-pizarra/30 focus:border-tinta px-4 py-3 outline-none transition-colors placeholder:text-pizarra/40"
                    />
                  )}
                  {cantidadError && (
                    <p className="font-figtree text-xs text-red-500">Selecciona una cantidad</p>
                  )}
                </div>

                {/* Referencia */}
                <div className="flex flex-col gap-2">
                  <label className="font-figtree text-xs tracking-wide text-oscuro/70 uppercase">
                    Imagen de referencia
                    <span className="text-pizarra normal-case font-normal ml-1">(opcional)</span>
                  </label>
                  <input
                    type="url"
                    value={refUrl}
                    onChange={(e) => setRefUrl(e.target.value)}
                    placeholder="Link de referencia (Pinterest, Instagram, Drive...)"
                    className="w-full font-figtree text-sm bg-lienzo-dark border border-oscuro/15 px-4 py-3 outline-none focus:border-tinta/40 transition-colors placeholder:text-pizarra/40"
                  />
                  <p className="font-figtree text-xs text-pizarra/60">
                    También puedes mandar el archivo directamente en el chat de WhatsApp.
                  </p>
                </div>

                {/* Notas */}
                <div className="flex flex-col gap-2">
                  <label className="font-figtree text-xs tracking-wide text-oscuro/70 uppercase">
                    Notas adicionales
                    <span className="text-pizarra normal-case font-normal ml-1">(opcional)</span>
                  </label>
                  <textarea
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                    placeholder="Fecha que lo necesitas, cualquier otro detalle..."
                    rows={2}
                    className="w-full font-figtree text-sm bg-lienzo-dark border border-oscuro/15 px-4 py-3 outline-none focus:border-tinta/40 transition-colors placeholder:text-pizarra/40 resize-none leading-relaxed"
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleQuote}
                  className="relative w-full font-archivo text-sm bg-fuego text-lienzo py-4 hover:bg-fuego-dark transition-colors duration-200 overflow-hidden"
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
                        key="send"
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

                <p className="font-figtree text-xs text-pizarra text-center">
                  Respondemos en menos de 24 horas · sin compromiso
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-t border-oscuro/8 bg-lienzo-dark">
            <div className="max-w-6xl mx-auto px-4 md:px-10 py-16">
              <div className="flex items-center justify-between mb-10">
                <h2 className="font-archivo text-3xl text-oscuro">
                  También te puede interesar
                </h2>
                <Link
                  href="/shop"
                  className="hidden md:flex items-center gap-1 font-figtree text-xs text-pizarra hover:text-tinta transition-colors"
                >
                  Ver todo <ChevronRight size={13} />
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
