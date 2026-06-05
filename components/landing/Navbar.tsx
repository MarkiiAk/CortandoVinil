"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Contacto", href: "/#contacto" },
];

const WHATSAPP_NUMBER = "5212296499981";
const WA_MSG = "Hola 👋 quiero cotizar un proyecto con Cortando Vinil.";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
            ? "bg-lienzo/95 backdrop-blur-sm border-b border-oscuro/8"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Cortando Vinil"
              width={300}
              height={100}
              style={{ width: "130px", height: "auto" }}
              className={cn(
                "object-contain transition-all duration-300",
                scrolled ? "" : "brightness-0 invert"
              )}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-figtree text-sm font-medium transition-colors duration-200",
                  scrolled
                    ? "text-oscuro/60 hover:text-tinta"
                    : "text-lienzo/70 hover:text-lienzo"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "font-archivo text-sm px-5 py-2.5 transition-all duration-200",
                scrolled
                  ? "bg-fuego text-lienzo hover:bg-fuego-dark"
                  : "bg-lienzo text-tinta hover:bg-lienzo/90"
              )}
            >
              Cotizar ahora
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              "md:hidden p-1 transition-colors duration-200",
              scrolled ? "text-oscuro" : "text-lienzo"
            )}
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
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
            className="fixed top-20 left-0 right-0 z-40 bg-lienzo border-b border-oscuro/8 px-6 py-6 flex flex-col gap-5 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-figtree text-base text-oscuro/60 hover:text-tinta transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="font-archivo text-sm bg-fuego text-lienzo px-5 py-3 text-center hover:bg-fuego-dark transition-all duration-200"
            >
              Cotizar ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
