"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 15, suffix: "+", label: "años en el mercado" },
  { value: 5,  suffix: "",  label: "procesos productivos" },
  { value: 1,  suffix: "",  label: "pieza mínimo" },
  { value: 32, suffix: "",  label: "estados con envío" },
];

function AnimatedNumber({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const duration = 1400;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(value);
    };
    requestAnimationFrame(step);
  }, [start, value]);

  return <>{count}{suffix}</>;
}

export function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-oscuro py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-lienzo/8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="px-8 py-6 first:pl-0 last:pr-0 text-center md:text-left"
          >
            <p className="font-archivo text-5xl md:text-6xl text-lienzo tabular-nums leading-none">
              <AnimatedNumber value={s.value} suffix={s.suffix} start={inView} />
            </p>
            <p className="font-figtree text-sm text-lienzo/40 mt-2 leading-snug">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
