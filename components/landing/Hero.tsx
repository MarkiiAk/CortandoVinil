"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const WHATSAPP_NUMBER = "5212296499981";
const WA_MSG = "Hola 👋 quiero cotizar un proyecto con Cortando Vinil.";

const materiales = [
  "real.",
  "en vinilo.",
  "en acrílico.",
  "en tela.",
  "en cerámica.",
  "en madera.",
];

const servicios = [
  { num: "01", name: "Sublimado" },
  { num: "02", name: "Corte Láser" },
  { num: "03", name: "Gran Formato" },
  { num: "04", name: "Impresos" },
  { num: "05", name: "Vinil Textil" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

export function Hero() {
  const [index, setIndex] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [countStarted, setCountStarted] = useState(false);
  const years = useCountUp(15, 1.5, countStarted);

  useEffect(() => {
    const t = setTimeout(() => setCountStarted(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % materiales.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((i) => (i + 1) % servicios.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen bg-tinta pt-20 pb-16 px-6 md:px-10 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-20 items-center">

        {/* Left — brand statement */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div variants={item}>
            <span className="font-figtree text-xs tracking-[0.25em] uppercase text-lienzo/40">
              <motion.span
                key={countStarted ? "counting" : "zero"}
                className="tabular-nums"
              >
                {years}
              </motion.span>
              {" "}años de experiencia · Enviamos a todo México
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-archivo text-[clamp(3rem,8vw,6rem)] leading-[0.92] text-lienzo"
          >
            Lo que
            <br />
            diseñas,
            <br />
            <span className="text-lienzo/80">lo hacemos </span>
            <span className="relative inline-block min-w-[2ch]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={materiales[index]}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease }}
                  className="inline-block text-fuego"
                >
                  {materiales[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-figtree text-base text-lienzo/60 leading-relaxed max-w-md"
          >
            Sublimado, corte láser, gran formato, impresos y vinil textil.
            Producimos para negocios, emprendedores y eventos en toda la república.
          </motion.p>

          <motion.div
            variants={item}
            className="flex items-center gap-4 flex-wrap"
          >
            <Link
              href="/shop"
              className="font-archivo text-sm bg-lienzo text-tinta px-7 py-3.5 hover:bg-lienzo/90 transition-all duration-200"
            >
              Ver servicios →
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-archivo text-sm bg-fuego text-lienzo px-7 py-3.5 hover:bg-fuego-dark transition-all duration-200"
            >
              Cotizar por WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Right — service list with active highlight cycling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="hidden lg:block"
        >
          <div className="border-t border-lienzo/15">
            {servicios.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08, ease }}
                className="flex items-center justify-between py-5 border-b border-lienzo/15 cursor-default"
              >
                <motion.span
                  animate={{
                    color: activeService === i ? "#ffffff" : "rgba(255,255,255,0.35)",
                    x: activeService === i ? 6 : 0,
                  }}
                  transition={{ duration: 0.4, ease }}
                  className="font-archivo text-[clamp(1.4rem,2.5vw,2rem)]"
                >
                  {s.name}
                </motion.span>
                <motion.span
                  animate={{
                    color: activeService === i ? "#CC1B1B" : "rgba(255,255,255,0.2)",
                  }}
                  transition={{ duration: 0.4 }}
                  className="font-figtree text-sm tabular-nums"
                >
                  {s.num}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
