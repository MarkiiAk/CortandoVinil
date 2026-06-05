export interface PortfolioItem {
  id: string;
  title: string;
  technique: string;
  aspect: "video" | "square" | "portrait";
}

export const portfolio: PortfolioItem[] = [
  { id: "1", title: "Uniformes corporativos", technique: "Vinil Textil + DTF",  aspect: "portrait" },
  { id: "2", title: "Rotulado vehicular",       technique: "Gran Formato",        aspect: "video"   },
  { id: "3", title: "Señalética de local",       technique: "Letras Volumétricas", aspect: "square"  },
  { id: "4", title: "Merch de evento",           technique: "Sublimación",         aspect: "portrait" },
  { id: "5", title: "Lona exterior 3×2 m",       technique: "Gran Formato",        aspect: "video"   },
  { id: "6", title: "Corte en acrílico",         technique: "Corte Láser CNC",     aspect: "square"  },
];
