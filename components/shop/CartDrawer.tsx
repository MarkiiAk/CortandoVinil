"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/cart";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, count } =
    useCartStore();

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
            className="fixed inset-0 z-50 bg-oscuro/40 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-lienzo flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-oscuro/8">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} className="text-tinta" strokeWidth={1.5} />
                <h2 className="font-archivo text-xl text-tinta">
                  Solicitud
                </h2>
                {count() > 0 && (
                  <span className="font-figtree text-xs text-pizarra ml-1">
                    ({count()} {count() === 1 ? "servicio" : "servicios"})
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="text-pizarra hover:text-oscuro transition-colors p-1"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={48} className="text-tinta/15" strokeWidth={1} />
                  <p className="font-archivo text-2xl text-pizarra/40">
                    Solicitud vacía
                  </p>
                  <p className="font-figtree text-xs text-pizarra">
                    Agrega servicios desde el catálogo
                  </p>
                  <Link
                    href="/tienda"
                    onClick={closeCart}
                    className="font-archivo text-xs tracking-widest uppercase border border-tinta text-tinta px-6 py-3 hover:bg-tinta hover:text-lienzo transition-all duration-200 mt-2"
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
                        className="bg-lienzo-dark border border-oscuro/8 p-4 flex flex-col gap-3"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <p className="font-figtree text-sm text-oscuro font-medium truncate">
                              {item.name}
                            </p>
                            {item.customization && (
                              <p className="font-figtree text-xs text-pizarra mt-1 leading-relaxed">
                                {item.customization}
                              </p>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-pizarra hover:text-red-400 transition-colors shrink-0 p-0.5"
                            aria-label="Eliminar"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-oscuro/15">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 flex items-center justify-center text-tinta hover:bg-lienzo-dark transition-colors"
                              aria-label="Restar"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-8 h-8 flex items-center justify-center font-figtree text-xs text-oscuro">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 flex items-center justify-center text-tinta hover:bg-lienzo-dark transition-colors"
                              aria-label="Sumar"
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          <p className="font-figtree text-sm text-pizarra">
                            Cotizar cantidad
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-oscuro/8 px-6 py-5 flex flex-col gap-4 bg-lienzo">
                <p className="font-figtree text-xs text-pizarra">
                  Enviaremos la lista de servicios por WhatsApp para cotizar.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full font-archivo text-sm bg-fuego text-lienzo py-4 text-center hover:bg-fuego-dark transition-colors duration-200"
                >
                  Cotizar por WhatsApp
                </a>

                <button
                  onClick={closeCart}
                  className="w-full font-figtree text-xs text-pizarra hover:text-oscuro transition-colors py-1"
                >
                  Seguir navegando
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
  const lines = ["Hola! Quisiera cotizar los siguientes servicios:", ""];
  for (const item of items) {
    lines.push(`• ${item.quantity}x ${item.name}`);
    if (item.customization) {
      lines.push(`  Detalles: ${item.customization}`);
    }
  }
  lines.push("");
  lines.push("¿Me pueden dar más información?");
  return lines.join("\n");
}
