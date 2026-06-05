"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const WHATSAPP_NUMBER = "5532266644";

const segmentos = [
  {
    tipo: "Empresas",
    tagline: "Tu marca en cada superficie.",
    descripcion: "Merch corporativo, material de punto de venta, uniformes, tarjetas y todo lo que necesita tu empresa para verse profesional y consistente.",
    ejemplos: ["Playeras y gorras con logo", "Tarjetas de presentación", "Lonas y roll ups", "Mouse pads y tazas de oficina", "Señalética de local"],
    cta: "Quiero cotizar merch corporativo",
    bg: "bg-tinta",
    textMain: "text-lienzo",
    textMuted: "text-lienzo/55",
    ctaClass: "bg-fuego text-lienzo hover:bg-fuego-dark",
  },
  {
    tipo: "Emprendedores",
    tagline: "Desde una pieza. Sin pretextos.",
    descripcion: "Arranca tu línea de productos sin necesidad de grandes volúmenes. Prueba diseños, valida con tus clientes y escala cuando sea el momento.",
    ejemplos: ["Pedidos desde 1 pieza", "Variedad de productos", "Precios accesibles por volumen", "Tiempos de entrega rápidos", "Sin pedidos mínimos obligatorios"],
    cta: "Quiero empezar mi primer pedido",
    bg: "bg-lienzo-dark",
    textMain: "text-oscuro",
    textMuted: "text-pizarra",
    ctaClass: "bg-tinta text-lienzo hover:bg-tinta-dark",
  },
  {
    tipo: "Eventos",
    tagline: "Que se vea que hubo producción.",
    descripcion: "Lonas, roll ups, señalética, vinil de corte y todo lo que necesita tu evento para verse producido y coordinado. Entregas express disponibles.",
    ejemplos: ["Lonas y mantas publicitarias", "Roll ups y displays", "Vinil de corte para mamparas", "Señalética de evento", "Material temático coordinado"],
    cta: "Quiero cotizar material para evento",
    bg: "bg-oscuro",
    textMain: "text-lienzo",
    textMuted: "text-lienzo/55",
    ctaClass: "bg-fuego text-lienzo hover:bg-fuego-dark",
  },
];

export function ParaQuienSection() {
  return (
    <section className="border-t border-oscuro/10">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {segmentos.map((seg, i) => (
          <motion.div
            key={seg.tipo}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease }}
            className={`${seg.bg} px-8 py-14 flex flex-col justify-between gap-10 min-h-[480px]`}
          >
            <div className="space-y-5">
              <h3 className={`font-archivo text-3xl ${seg.textMain}`}>
                {seg.tipo}
              </h3>
              <p className={`font-archivo text-lg ${seg.textMuted} leading-snug`}>
                {seg.tagline}
              </p>
              <p className={`font-figtree text-sm ${seg.textMuted} leading-relaxed`}>
                {seg.descripcion}
              </p>
              <ul className="space-y-1.5 pt-2">
                {seg.ejemplos.map((ej) => (
                  <li key={ej} className={`font-figtree text-sm ${seg.textMuted} flex items-center gap-2`}>
                    <span className="text-xs opacity-50">—</span>
                    {ej}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(seg.cta)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-archivo text-sm px-6 py-3 text-center transition-all duration-200 ${seg.ctaClass}`}
            >
              Cotizar por WhatsApp →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
