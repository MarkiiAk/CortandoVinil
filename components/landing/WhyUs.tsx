"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import { Wrench, Palette, Clock } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: 15, suffix: "+", label: "años en el mercado" },
  { value: 9,  suffix: "",  label: "líneas de producción" },
  { value: 32, suffix: "",  label: "estados con envío" },
  { value: 1,  suffix: "",  label: "pieza mínimo" },
];

const differentiators = [
  {
    icon: Wrench,
    title: "Producción 100% propia",
    desc: "Taller propio en CDMX. Sin intermediarios ni terceros — controlamos cada paso del proceso y te damos fechas reales.",
  },
  {
    icon: Palette,
    title: "Si no tienes arte, no hay bronca",
    desc: "Te asesoramos en el diseño sin costo extra. Mandamos prueba digital antes de producir para que apruebes antes de que cortemos.",
  },
  {
    icon: Clock,
    title: "Respuesta el mismo día",
    desc: "Cotizamos rápido y producimos puntual. Desde el primer mensaje ya tienes precio y fecha estimada de entrega.",
  },
];

function CountUp({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let t0: number | null = null;
    const dur = 1200;
    const step = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / dur, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [start, value]);

  return <>{count}{suffix}</>;
}

export function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-negro py-20 px-6 md:px-10 border-t border-zinc/20">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-zinc/20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="px-8 py-6 first:pl-0 last:pr-0"
            >
              <p className="font-space font-bold text-5xl md:text-6xl text-blanco tabular-nums leading-none">
                <CountUp value={s.value} suffix={s.suffix} start={inView} />
              </p>
              <p className="font-inter text-sm text-texto-muted mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="flex items-start gap-4"
            >
              <div className="shrink-0 w-10 h-10 bg-acento/10 flex items-center justify-center mt-0.5">
                <d.icon size={18} className="text-acento" />
              </div>
              <div>
                <h3 className="font-space font-semibold text-base text-blanco mb-1">{d.title}</h3>
                <p className="font-inter text-sm text-texto-muted leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* "Si no lo ves, pregunta" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-zinc/30 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <p className="font-inter text-sm text-texto-muted leading-relaxed max-w-xl">
            <span className="text-blanco font-medium">¿Tienes una idea que no está en el catálogo?</span>{" "}
            Tenemos más capacidades de las que se ven aquí — sublimación en formatos especiales, cortes complejos, piezas únicas, proyectos grandes. Si lo puedes imaginar, mándanos un mensaje y vemos cómo hacerlo.
          </p>
          <a
            href="/#contacto"
            className="font-space font-semibold text-xs tracking-widest uppercase text-acento border border-acento/40 px-5 py-3 hover:bg-acento hover:text-negro transition-all duration-150 whitespace-nowrap shrink-0"
          >
            Pregúntanos →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
