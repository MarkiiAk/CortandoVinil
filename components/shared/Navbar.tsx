"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Catálogo",  href: "/tienda"       },
  { label: "Servicios", href: "/#servicios"   },
  { label: "Trabajos",  href: "/#trabajos"    },
  { label: "Contacto",  href: "/#contacto"    },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-carbon h-7 flex items-center px-6 md:px-10">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-5 text-texto-muted text-xs font-inter">
            <a href="tel:+525571596138" className="flex items-center gap-1.5 hover:text-blanco transition-colors">
              <Phone size={11} />
              55 7159 6138
            </a>
            <a href="mailto:publicidad@cortandovinil.com" className="hidden md:flex items-center gap-1.5 hover:text-blanco transition-colors">
              <Mail size={11} />
              publicidad@cortandovinil.com
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-texto-muted text-xs font-inter">
            <Clock size={11} />
            Lun–Vie 11:00–19:00
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-negro/90 backdrop-blur-md border-zinc/30"
            : "bg-negro border-zinc/20"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-space font-700 text-lg tracking-widest uppercase text-blanco group-hover:text-blanco/90 transition-colors">
              CORTANDO VINIL
            </span>
            <span className="h-[2px] w-full bg-acento mt-0.5" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-inter text-sm text-texto-light hover:text-blanco transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/cotizar"
              className="font-space font-semibold text-sm bg-acento text-negro px-5 py-2.5 hover:bg-acento-hover transition-colors duration-150 uppercase tracking-wide"
            >
              Cotiza ahora
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-blanco p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-negro flex flex-col px-6 pt-28 gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-space font-semibold text-3xl uppercase tracking-wide text-blanco hover:text-acento transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/cotizar"
              onClick={() => setOpen(false)}
              className="mt-4 font-space font-bold text-sm bg-acento text-negro px-6 py-4 text-center uppercase tracking-wider hover:bg-acento-hover transition-colors"
            >
              Cotiza ahora
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
