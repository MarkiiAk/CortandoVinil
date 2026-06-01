"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/cart";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, count } =
    useCartStore();

  // Bloquear scroll cuando el drawer está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const whatsappUrl = `https://wa.me/5212296499981?text=${encodeURIComponent(
    buildWhatsAppMessage(items)
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-carbon/40 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-crema flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-cafe/10">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} className="text-cafe" strokeWidth={1.5} />
                <h2 className="font-cormorant text-xl text-cafe font-light">
                  Mi carrito
                </h2>
                {count() > 0 && (
                  <span className="font-dm text-xs text-humo ml-1">
                    ({count()} {count() === 1 ? "pieza" : "piezas"})
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="text-humo hover:text-carbon transition-colors p-1"
                aria-label="Cerrar carrito"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={48} className="text-cafe/20" strokeWidth={1} />
                  <p className="font-cormorant text-2xl text-cafe/40 font-light">
                    Tu carrito está vacío
                  </p>
                  <p className="font-dm text-xs text-humo">
                    Agrega algo bonito desde el catálogo
                  </p>
                  <Link
                    href="/shop"
                    onClick={closeCart}
                    className="font-dm text-xs tracking-widest uppercase border border-cafe text-cafe px-6 py-3 hover:bg-cafe hover:text-crema transition-all duration-200 mt-2"
                  >
                    Ver catálogo
                  </Link>
                </div>
              ) : (
                <ul className="flex flex-col gap-4">
                  <AnimatePresence initial={false}>
                    {items.map((item) => (
                      <motion.li
                        key={item.id}
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white border border-cafe/10 p-4 flex flex-col gap-3"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <p className="font-dm text-sm text-carbon font-medium truncate">
                              {item.name}
                            </p>
                            {item.customization && (
                              <p className="font-dm text-xs text-humo mt-1 leading-relaxed">
                                {item.customization}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-humo hover:text-red-400 transition-colors shrink-0 p-0.5"
                            aria-label="Eliminar"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Controles de cantidad */}
                          <div className="flex items-center border border-cafe/20">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 flex items-center justify-center text-cafe hover:bg-arena transition-colors"
                              aria-label="Restar"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-8 h-8 flex items-center justify-center font-dm text-xs text-carbon">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 flex items-center justify-center text-cafe hover:bg-arena transition-colors"
                              aria-label="Sumar"
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          <p className="font-dm text-sm text-carbon">
                            ${(item.price * item.quantity).toLocaleString("es-MX")}{" "}
                            <span className="text-xs text-humo">MXN</span>
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {/* Footer con total + checkout */}
            {items.length > 0 && (
              <div className="border-t border-cafe/10 px-6 py-5 flex flex-col gap-4 bg-crema">
                <div className="flex items-center justify-between">
                  <span className="font-dm text-sm text-carbon/70 uppercase tracking-wide">
                    Total
                  </span>
                  <span className="font-cormorant text-2xl text-cafe">
                    ${total().toLocaleString("es-MX")}{" "}
                    <span className="font-dm text-sm text-humo">MXN</span>
                  </span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full font-dm text-sm tracking-widest uppercase bg-cafe text-crema py-4 text-center hover:bg-cafe-dark transition-colors duration-200"
                >
                  Finalizar por WhatsApp
                </a>

                <button
                  onClick={closeCart}
                  className="w-full font-dm text-xs text-humo hover:text-carbon transition-colors py-1"
                >
                  Seguir comprando
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function buildWhatsAppMessage(
  items: Array<{
    name: string;
    quantity: number;
    price: number;
    customization?: string;
  }>
): string {
  const lines = ["Hola! Quisiera ordenar lo siguiente:", ""];
  for (const item of items) {
    lines.push(`• ${item.quantity}x ${item.name} — $${(item.price * item.quantity).toLocaleString("es-MX")} MXN`);
    if (item.customization) {
      lines.push(`  Personalización: ${item.customization}`);
    }
  }
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  lines.push("");
  lines.push(`Total: $${total.toLocaleString("es-MX")} MXN`);
  return lines.join("\n");
}
