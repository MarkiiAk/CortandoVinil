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
const QUANTITY_OPTIONS = ["1 pieza", "2–5 piezas", "6–10 piezas", "Más de 10"];

const VASO_PHOTOS: Record<string, string> = {
  "Vaso tipo lata":  "/products/vaso-tipo-lata-blank.jpg",
  "Vaso de vidrio":  "/products/vaso-personalizado.jpg",
  "Vaso cold cup":   "/products/vaso-cold-cup.jpg",
  "Vaso Mason":      "/products/vaso-mason.jpg",
  "Mug cerámica":    "/products/mug-ceramica.jpg",
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

  function getEffectiveValue(id: string): string {
    if (values[id] === "Otra opción") {
      const txt = otherValues[id]?.trim();
      return txt ? `Otra opción: ${txt}` : "Otra opción";
    }
    return values[id] ?? "";
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

      <main className="min-h-screen bg-crema overflow-x-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-10 pt-28 pb-20">

          {/* Back */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 font-dm text-xs text-humo hover:text-cafe transition-colors duration-200 mb-10 group"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform" />
            Regresar al catálogo
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Foto del producto — cambia según el tipo seleccionado */}
            <div className="md:sticky md:top-28">
              {(() => {
                const tipoSeleccionado = values["tipo-vaso"];
                const firstVasoPhoto = Object.values(VASO_PHOTOS)[0];
                const photoSrc = VASO_PHOTOS[tipoSeleccionado] ?? product.images[0] ?? firstVasoPhoto ?? null;
                const isVasoProduct = Object.keys(VASO_PHOTOS).some(
                  (k) => product.customizationFields.some((f) => f.id === "tipo-vaso")
                );

                return (
                  <div className="relative w-full aspect-square overflow-hidden">
                    {photoSrc ? (
                      <>
                        <Image
                          key={photoSrc}
                          src={photoSrc}
                          alt={tipoSeleccionado || product.name}
                          fill
                          className="object-cover transition-opacity duration-300"
                          priority
                        />
                        {/* Badge inferior */}
                        <div className="absolute bottom-0 left-0 right-0 bg-crema/85 backdrop-blur-sm px-4 py-2.5 flex items-center justify-center">
                          <span className="font-dm text-[11px] tracking-wide text-carbon/65 text-center leading-relaxed">
                            Imagen de referencia · cuéntanos tu idea y la hacemos realidad
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-cafe/25 bg-arena">
                        <Package size={48} strokeWidth={1} />
                        <span className="font-cormorant text-2xl font-light italic">
                          {product.name}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>

            {/* Form */}
            <div className="flex flex-col gap-7 min-w-0">

              {/* Header */}
              <div>
                <p className="font-dm text-xs text-humo tracking-widest uppercase mb-2">
                  {product.category}
                </p>
                <h1 className="font-cormorant text-4xl md:text-5xl text-cafe font-light leading-tight">
                  {product.name}
                </h1>
                <p className="font-dm text-sm text-humo mt-2">
                  Precio por cotización · te respondemos en minutos
                </p>
              </div>

              <p className="font-dm text-sm text-carbon/70 leading-relaxed">
                {product.description}
              </p>

              <div className="w-12 border-t border-cafe/20" />

              {/* Fields */}
              <div className="flex flex-col gap-6">
                <p className="font-cormorant text-xl text-cafe font-light">
                  Cuéntanos qué necesitas
                </p>

                {product.customizationFields
                  .filter((f) => f.type !== "pattern")
                  .map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label className="font-dm text-xs tracking-wide text-carbon/80 uppercase">
                      {field.label}
                      {field.required && <span className="text-cafe ml-1">*</span>}
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
                            "w-full font-dm text-sm bg-white border px-4 py-3 outline-none transition-colors placeholder:text-humo/50",
                            errors[field.id] ? "border-red-400" : "border-cafe/20 focus:border-cafe"
                          )}
                        />
                        {field.maxLength && (
                          <span className="absolute right-3 bottom-3 font-dm text-xs text-humo/60">
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
                            "w-full font-dm text-sm bg-white border px-4 py-3 outline-none transition-colors placeholder:text-humo/50 resize-none leading-relaxed",
                            errors[field.id] ? "border-red-400" : "border-cafe/20 focus:border-cafe"
                          )}
                        />
                        {field.maxLength && (
                          <span className="absolute right-3 bottom-2 font-dm text-xs text-humo/60">
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
                                "font-dm text-xs px-4 py-2 border transition-all duration-150",
                                values[field.id] === option
                                  ? option === "Otra opción"
                                    ? "border-humo bg-humo/15 text-carbon"
                                    : "border-cafe bg-cafe text-crema"
                                  : errors[field.id]
                                  ? "border-red-300 text-carbon/60 hover:border-cafe/50"
                                  : option === "Otra opción"
                                  ? "border-dashed border-cafe/30 text-humo hover:border-cafe/60 hover:text-carbon"
                                  : "border-cafe/25 text-carbon/60 hover:border-cafe/60 hover:text-carbon"
                              )}
                            >
                              {option}
                            </button>
                          ))}
                        </div>

                        {/* Campo libre cuando eligen "Otra opción" */}
                        {values[field.id] === "Otra opción" && (
                          <input
                            type="text"
                            value={otherValues[field.id] ?? ""}
                            onChange={(e) => handleOtherValue(field.id, e.target.value)}
                            placeholder="Descríbenos lo que tienes en mente..."
                            autoFocus
                            className="w-full font-dm text-sm bg-white border border-humo/40 focus:border-cafe px-4 py-3 outline-none transition-colors placeholder:text-humo/50"
                          />
                        )}
                      </div>
                    )}

                    {errors[field.id] && (
                      <p className="font-dm text-xs text-red-500">Este campo es requerido</p>
                    )}
                  </div>
                ))}

                {/* Cantidad */}
                <div className="flex flex-col gap-2">
                  <label className="font-dm text-xs tracking-wide text-carbon/80 uppercase">
                    Cantidad <span className="text-cafe">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[...QUANTITY_OPTIONS, "Otra cantidad"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => { setCantidad(opt); setCantidadError(false); }}
                        className={cn(
                          "font-dm text-xs px-4 py-2 border transition-all duration-150",
                          cantidad === opt
                            ? opt === "Otra cantidad"
                              ? "border-humo bg-humo/15 text-carbon"
                              : "border-cafe bg-cafe text-crema"
                            : cantidadError
                            ? "border-red-300 text-carbon/60 hover:border-cafe/50"
                            : opt === "Otra cantidad"
                            ? "border-dashed border-cafe/30 text-humo hover:border-cafe/60 hover:text-carbon"
                            : "border-cafe/25 text-carbon/60 hover:border-cafe/60 hover:text-carbon"
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
                      className="w-full font-dm text-sm bg-white border border-humo/40 focus:border-cafe px-4 py-3 outline-none transition-colors placeholder:text-humo/50"
                    />
                  )}
                  {cantidadError && (
                    <p className="font-dm text-xs text-red-500">Selecciona una cantidad</p>
                  )}
                </div>

                {/* Imagen de referencia */}
                <div className="flex flex-col gap-2">
                  <label className="font-dm text-xs tracking-wide text-carbon/80 uppercase">
                    Imagen de referencia
                    <span className="text-humo normal-case font-normal ml-1">(opcional)</span>
                  </label>
                  <input
                    type="url"
                    value={refUrl}
                    onChange={(e) => setRefUrl(e.target.value)}
                    placeholder="Pega aquí el link de Pinterest, Instagram, TikTok..."
                    className="w-full font-dm text-sm bg-white border border-cafe/20 px-4 py-3 outline-none focus:border-cafe transition-colors placeholder:text-humo/50"
                  />
                  <p className="font-dm text-xs text-humo/70">
                    ¿Tienes la foto guardada en tu cel? La puedes mandar directo en el chat de WhatsApp una vez que abramos la conversación.
                  </p>
                </div>

                {/* Notas */}
                <div className="flex flex-col gap-2">
                  <label className="font-dm text-xs tracking-wide text-carbon/80 uppercase">
                    Notas adicionales
                    <span className="text-humo normal-case font-normal ml-1">(opcional)</span>
                  </label>
                  <textarea
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                    placeholder="Fecha que la necesitas, si es regalo, cualquier otro detalle..."
                    rows={2}
                    className="w-full font-dm text-sm bg-white border border-cafe/20 px-4 py-3 outline-none focus:border-cafe transition-colors placeholder:text-humo/50 resize-none leading-relaxed"
                  />
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleQuote}
                  className="relative w-full font-dm text-sm tracking-widest uppercase bg-cafe text-crema py-4 hover:bg-cafe-dark transition-colors duration-200 overflow-hidden"
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

                <p className="font-dm text-xs text-humo text-center">
                  Te respondemos en minutos · sin compromiso
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-t border-cafe/10 bg-arena/50">
            <div className="max-w-6xl mx-auto px-4 md:px-10 py-16">
              <div className="flex items-center justify-between mb-10">
                <h2 className="font-cormorant text-3xl text-cafe font-light">
                  También te puede gustar
                </h2>
                <Link
                  href="/shop"
                  className="hidden md:flex items-center gap-1 font-dm text-xs text-humo hover:text-cafe transition-colors"
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
