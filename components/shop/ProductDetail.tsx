"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, ShoppingBag, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cart";
import { type Product } from "@/lib/products";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
}

export function ProductDetail({ product }: Props) {
  const { addItem, openCart } = useCartStore();

  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(product.customizationFields.map((f) => [f.id, ""]))
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  function handleChange(id: string, value: string) {
    setValues((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: false }));
  }

  function buildCustomizationSummary(): string {
    return product.customizationFields
      .filter((f) => values[f.id]?.trim())
      .map((f) => `${f.label}: ${values[f.id].trim()}`)
      .join(" · ");
  }

  function handleAddToCart() {
    const newErrors: Record<string, boolean> = {};
    let hasError = false;

    for (const field of product.customizationFields) {
      if (field.required && !values[field.id]?.trim()) {
        newErrors[field.id] = true;
        hasError = true;
      }
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.basePrice,
      quantity,
      customization: buildCustomizationSummary(),
    });

    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 2500);
  }

  return (
    <div className="min-h-screen bg-crema">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Imagen */}
          <div className="relative aspect-square bg-arena rounded-sm overflow-hidden">
            {product.images[0] ? (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-cafe/30">
                <ShoppingBag size={48} strokeWidth={1} />
                <span className="font-dm text-xs tracking-widest uppercase">Foto próximamente</span>
              </div>
            )}
          </div>

          {/* Detalle */}
          <div className="flex flex-col gap-6">
            {/* Nombre y precio */}
            <div>
              <p className="font-dm text-xs text-humo tracking-widest uppercase mb-2">
                {product.category}
              </p>
              <h1 className="font-cormorant text-4xl md:text-5xl text-cafe font-light leading-tight">
                {product.name}
              </h1>
              <p className="font-dm text-2xl text-carbon mt-3">
                ${product.basePrice.toLocaleString("es-MX")}{" "}
                <span className="text-sm text-humo font-normal">MXN</span>
              </p>
            </div>

            <p className="font-dm text-sm text-carbon/70 leading-relaxed">
              {product.description}
            </p>

            <div className="w-12 border-t border-cafe/20" />

            {/* Campos de personalización */}
            <div className="flex flex-col gap-5">
              <p className="font-cormorant text-xl text-cafe font-light">
                Personaliza tu pedido
              </p>

              {product.customizationFields.map((field) => (
                <div key={field.id} className="flex flex-col gap-1.5">
                  <label className="font-dm text-xs tracking-wide text-carbon/80 uppercase">
                    {field.label}
                    {field.required && (
                      <span className="text-cafe ml-1">*</span>
                    )}
                  </label>

                  {field.type === "text" && (
                    <div className="relative">
                      <input
                        type="text"
                        value={values[field.id]}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        maxLength={field.maxLength}
                        placeholder={field.placeholder}
                        className={cn(
                          "w-full font-dm text-sm bg-white border px-4 py-3 outline-none transition-colors placeholder:text-humo/60",
                          errors[field.id]
                            ? "border-red-400 focus:border-red-500"
                            : "border-cafe/20 focus:border-cafe"
                        )}
                      />
                      {field.maxLength && (
                        <span className="absolute right-3 bottom-3 font-dm text-xs text-humo">
                          {values[field.id]?.length ?? 0}/{field.maxLength}
                        </span>
                      )}
                    </div>
                  )}

                  {field.type === "select" && field.options && (
                    <div className="flex flex-wrap gap-2">
                      {field.options.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => handleChange(field.id, option)}
                          className={cn(
                            "font-dm text-xs px-4 py-2 border transition-all duration-150",
                            values[field.id] === option
                              ? "border-cafe bg-cafe text-crema"
                              : errors[field.id]
                              ? "border-red-300 text-carbon/60 hover:border-cafe/60"
                              : "border-cafe/25 text-carbon/60 hover:border-cafe/60 hover:text-carbon"
                          )}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}

                  {errors[field.id] && (
                    <p className="font-dm text-xs text-red-500">
                      Este campo es requerido
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Cantidad */}
            <div className="flex flex-col gap-1.5">
              <p className="font-dm text-xs tracking-wide text-carbon/80 uppercase">
                Cantidad
              </p>
              <div className="flex items-center gap-0 border border-cafe/25 w-fit">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-cafe hover:bg-arena transition-colors"
                  aria-label="Restar"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-dm text-sm text-carbon">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-cafe hover:bg-arena transition-colors"
                  aria-label="Sumar"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Botón */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="relative w-full font-dm text-sm tracking-widest uppercase bg-cafe text-crema py-4 hover:bg-cafe-dark transition-colors duration-200 overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {added ? (
                    <motion.span
                      key="added"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <CheckCircle size={16} />
                      Agregado al carrito
                    </motion.span>
                  ) : (
                    <motion.span
                      key="add"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <ShoppingBag size={16} />
                      Agregar al carrito
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <p className="font-dm text-xs text-humo text-center">
                Hecho a mano con Cricut · Envío a toda la república
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
