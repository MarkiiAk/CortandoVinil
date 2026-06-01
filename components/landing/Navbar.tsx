"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cart";
import { cn } from "@/lib/utils";

const links = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Productos", href: "/#productos" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Contacto", href: "/#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCartStore();
  const cartCount = count();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-crema/90 backdrop-blur-sm border-b border-cafe/10"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Casa Alessia"
              width={300}
              height={100}
              style={{ width: "130px", height: "auto" }}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-dm text-sm text-carbon/60 hover:text-cafe transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop: CTA + carrito */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={openCart}
              className="relative text-cafe p-1 hover:text-cafe-dark transition-colors"
              aria-label="Abrir carrito"
            >
              <ShoppingBag size={22} strokeWidth={1.5} />
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-cafe text-crema font-dm text-[10px] rounded-full flex items-center justify-center"
                >
                  {cartCount > 9 ? "9+" : cartCount}
                </motion.span>
              )}
            </button>

            <Link
              href="/shop"
              className="font-dm text-sm border border-cafe text-cafe px-5 py-2.5 hover:bg-cafe hover:text-crema transition-all duration-200"
            >
              Quiero el mío
            </Link>
          </div>

          {/* Mobile: carrito + hamburguesa */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={openCart}
              className="relative text-cafe p-1"
              aria-label="Abrir carrito"
            >
              <ShoppingBag size={21} strokeWidth={1.5} />
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-cafe text-crema font-dm text-[10px] rounded-full flex items-center justify-center"
                >
                  {cartCount > 9 ? "9+" : cartCount}
                </motion.span>
              )}
            </button>

            <button
              className="text-cafe p-1"
              onClick={() => setOpen(!open)}
              aria-label="Menú"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-40 bg-crema border-b border-cafe/10 px-6 py-6 flex flex-col gap-5 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-dm text-base text-carbon/60 hover:text-cafe transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className="font-dm text-sm border border-cafe text-cafe px-5 py-3 text-center hover:bg-cafe hover:text-crema transition-all duration-200"
            >
              Quiero el mío
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
