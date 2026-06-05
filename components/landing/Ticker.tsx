"use client";

const items = [
  "SUBLIMADO",
  "CORTE LÁSER",
  "GRAN FORMATO",
  "VINIL TEXTIL",
  "IMPRESOS",
  "15 AÑOS DE EXPERIENCIA",
  "ENVIAMOS A TODO MÉXICO",
  "MADERA · ACRÍLICO · CERÁMICA · TELA · METAL",
  "SUBLIMADO",
  "CORTE LÁSER",
  "GRAN FORMATO",
  "VINIL TEXTIL",
  "IMPRESOS",
  "15 AÑOS DE EXPERIENCIA",
  "ENVIAMOS A TODO MÉXICO",
  "MADERA · ACRÍLICO · CERÁMICA · TELA · METAL",
];

const separator = "·";

export function Ticker() {
  return (
    <div className="bg-fuego overflow-hidden py-3 border-y border-fuego-dark">
      <div className="flex whitespace-nowrap animate-ticker">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 font-archivo text-sm text-lienzo px-4">
            {item}
            <span className="text-lienzo/40">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
