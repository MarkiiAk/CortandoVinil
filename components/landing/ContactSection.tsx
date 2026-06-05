"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { services } from "@/lib/services";

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: integrar envío a email o WhatsApp
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-carbon py-20 px-6 md:px-10 border-t border-zinc/20">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="font-space font-bold text-4xl md:text-5xl text-blanco mb-14"
        >
          Contáctanos
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
          >
            {sent ? (
              <div className="bg-negro p-8 space-y-2">
                <p className="font-space font-bold text-2xl text-acento">¡Mensaje recibido!</p>
                <p className="font-inter text-sm text-texto-muted">
                  Te contactamos en las próximas horas en horario hábil.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="font-inter text-xs text-texto-muted hover:text-blanco underline underline-offset-2 pt-1 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-space text-xs tracking-widest uppercase text-texto-muted">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full bg-negro border border-zinc/40 focus:border-acento/60 px-4 py-3 font-inter text-sm text-blanco placeholder-texto-muted/40 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-space text-xs tracking-widest uppercase text-texto-muted">
                      Empresa (opcional)
                    </label>
                    <input
                      type="text"
                      placeholder="Tu empresa"
                      className="w-full bg-negro border border-zinc/40 focus:border-acento/60 px-4 py-3 font-inter text-sm text-blanco placeholder-texto-muted/40 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-space text-xs tracking-widest uppercase text-texto-muted">
                    Servicio de interés
                  </label>
                  <select
                    className="w-full bg-negro border border-zinc/40 focus:border-acento/60 px-4 py-3 font-inter text-sm text-blanco outline-none transition-colors appearance-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.slug}>{s.name}</option>
                    ))}
                    <option value="otro">Otro / No sé aún</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-space text-xs tracking-widest uppercase text-texto-muted">
                    Mensaje *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Cuéntanos qué necesitas: material, cantidad, para cuándo..."
                    className="w-full bg-negro border border-zinc/40 focus:border-acento/60 px-4 py-3 font-inter text-sm text-blanco placeholder-texto-muted/40 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="font-space font-semibold text-sm bg-acento text-negro px-8 py-3.5 hover:bg-acento-hover transition-colors uppercase tracking-wide"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="space-y-8"
          >
            {[
              {
                icon: Phone,
                label: "Teléfono",
                value: "55 7159 6138",
                href: "tel:+525571596138",
              },
              {
                icon: Mail,
                label: "Email",
                value: "publicidad@cortandovinil.com",
                href: "mailto:publicidad@cortandovinil.com",
              },
              {
                icon: MapPin,
                label: "Dirección",
                value: "Marcelino Dávalos 45 Local D, Algrarín, CDMX",
                href: "https://maps.google.com/?q=Marcelino+Dávalos+45+Local+D+Algrarín+CDMX",
              },
              {
                icon: Clock,
                label: "Horario",
                value: "Lunes a viernes, 11:00 – 19:00",
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-acento/10 flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon size={16} className="text-acento" />
                </div>
                <div>
                  <p className="font-space text-xs tracking-widest uppercase text-texto-muted mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-inter text-sm text-texto-light hover:text-blanco transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-inter text-sm text-texto-light">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
