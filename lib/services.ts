export interface Service {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  techTag: string;
  specs: { label: string; value: string }[];
  applications: string[];
  relatedServices: string[];
}

export const services: Service[] = [
  {
    id: "1",
    slug: "vinil-textil",
    name: "Vinil Textil",
    tagline: "Tu diseño en la tela. Lava y lava.",
    description:
      "Aplicación de vinil de transferencia térmica sobre prendas y textiles. Alta nitidez en bordes, colores vibrantes y durabilidad comprobada en lavados repetidos. Disponible en PU, PVC, flock, metálico, luminiscente y más.",
    techTag: "Plotter · HTV / PU / PVC",
    specs: [
      { label: "Materiales compatibles", value: "Algodón, poliéster, mezclas, nylon" },
      { label: "Dimensiones", value: "Desde 5 mm hasta 50 cm de ancho" },
      { label: "Colores", value: "Cualquier color; metálico y fluorescente disponibles" },
      { label: "Tiempo de producción", value: "1–3 días hábiles según cantidad" },
    ],
    applications: ["Uniformes corporativos", "Playeras de eventos", "Merch de marca", "Equipos deportivos"],
    relatedServices: ["dtf-dtf-uv", "bordado", "sublimacion"],
  },
  {
    id: "2",
    slug: "vinil-autoadherible",
    name: "Vinil Autoadherible",
    tagline: "De 5 mm hasta 2 metros. Permanente o removible.",
    description:
      "Corte e impresión de vinil autoadherible para señalización, rotulación, escaparates, vehículos y más. Disponible en corte simple (una tinta) o impreso full-color. Material interior y exterior con distintos acabados.",
    techTag: "Plotter de Corte · Vinilo Adhesivo",
    specs: [
      { label: "Ancho máximo", value: "Hasta 2 metros de ancho" },
      { label: "Tipos", value: "Permanente, removible, espejado, glitter, carbón" },
      { label: "Superficies", value: "Vidrio, metal, madera, vehículo, pared" },
      { label: "Tiempo de producción", value: "24–48 horas en pedidos estándar" },
    ],
    applications: ["Rotulación de locales", "Vinil para autos", "Señalización", "Escaparates y vitrinas"],
    relatedServices: ["gran-formato", "letras-volumetricas", "corte-laser-cnc"],
  },
  {
    id: "3",
    slug: "sublimacion",
    name: "Sublimación",
    tagline: "Foto-realismo en cerámica, metal y tela.",
    description:
      "Impresión por sublimación de tinta: el diseño se funde con el material, no hay capa sobre la superficie. Colores permanentes, resistentes al rayado y al agua. Aplica en artículos de poliéster y sustratos recubiertos.",
    techTag: "Sublimadora · Tinta de Sublimación",
    specs: [
      { label: "Materiales", value: "Poliéster, cerámica, metal, vidrio, madera" },
      { label: "Artículos", value: "Tazas, termos, mouse pads, rompecabezas, azulejos" },
      { label: "Resolución", value: "Hasta 1440 dpi" },
      { label: "Tiempo de producción", value: "1–2 días hábiles" },
    ],
    applications: ["Artículos promocionales", "Regalos corporativos", "Uniformes deportivos", "Decoración"],
    relatedServices: ["dtf-dtf-uv", "gran-formato", "impresos"],
  },
  {
    id: "4",
    slug: "gran-formato",
    name: "Gran Formato",
    tagline: "Impacto visual a cualquier escala.",
    description:
      "Impresión de alta resolución sobre lonas, vinil, tela y más materiales de gran formato. Para exteriores e interiores. Desde un roll-up hasta el rotulado completo de un edificio o vehículo.",
    techTag: "Impresora Gran Formato · Eco-Solvente / UV",
    specs: [
      { label: "Ancho máximo", value: "Hasta 3.2 metros" },
      { label: "Materiales", value: "Lona, vinil brillante/mate, tela, banner, mesh" },
      { label: "Acabados", value: "Con ojales, sellado, montado en estructura" },
      { label: "Tiempo de producción", value: "24–72 horas según tamaño y cantidad" },
    ],
    applications: ["Lonas publicitarias", "Roll-ups y displays", "Rotulado vehicular", "Vallas y espectaculares"],
    relatedServices: ["vinil-autoadherible", "letras-volumetricas", "impresos"],
  },
  {
    id: "5",
    slug: "bordado",
    name: "Bordado",
    tagline: "Tu logo en hilo. Duración de por vida.",
    description:
      "Bordado computarizado con ponchado profesional incluido. Resultado limpio, uniforme y de alta durabilidad en cualquier prenda. Ideal para uniformes, gorras, morrales y prendas de alta rotación.",
    techTag: "Bordadora CNC · Ponchado Digital",
    specs: [
      { label: "Prendas compatibles", value: "Playeras, gorras, sacos, mochilas, polos" },
      { label: "Tamaño máximo", value: "Hasta 30×40 cm por zona de bordado" },
      { label: "Colores", value: "Hasta 15 colores por diseño" },
      { label: "Tiempo de producción", value: "3–5 días hábiles (incluye ponchado)" },
    ],
    applications: ["Uniformes corporativos", "Gorras de empresa", "Equipos deportivos", "Regalos premium"],
    relatedServices: ["vinil-textil", "dtf-dtf-uv", "sublimacion"],
  },
  {
    id: "6",
    slug: "corte-laser-cnc",
    name: "Corte Láser y CNC",
    tagline: "Precisión de décimas de milímetro.",
    description:
      "Corte y grabado láser CO₂ sobre madera, acrílico, cuero, tela y más. Router CNC para aluminio y materiales de mayor grosor. Piezas de alta precisión para señalética, packaging y producción en serie.",
    techTag: "Láser CO₂ · Router CNC",
    specs: [
      { label: "Materiales", value: "MDF, acrílico, cuero, tela, aluminio, espuma" },
      { label: "Área de trabajo", value: "Hasta 1.2×0.9 m en láser" },
      { label: "Precisión", value: "±0.1 mm en piezas estándar" },
      { label: "Tiempo de producción", value: "1–4 días según complejidad" },
    ],
    applications: ["Letreros y señalética", "Packaging premium", "Trofeos y reconocimientos", "Piezas arquitectónicas"],
    relatedServices: ["letras-volumetricas", "vinil-autoadherible", "gran-formato"],
  },
  {
    id: "7",
    slug: "impresos",
    name: "Impresos",
    tagline: "Papel que habla por tu marca.",
    description:
      "Impresión digital y offset de alta calidad para material de papelería comercial. Colores precisos, papel premium, acabados profesionales. Desde 100 tarjetas hasta tirajes de miles de piezas.",
    techTag: "Offset + Digital · Alta Resolución",
    specs: [
      { label: "Formatos", value: "Tarjetas, flyers, trípticos, dípticos, pósters, calendarios" },
      { label: "Papel", value: "Couché 150–400 g/m², kraft, texturizado" },
      { label: "Acabados", value: "Barniz UV, laminado mate/brillante, suaje, folio" },
      { label: "Tiempo de producción", value: "2–5 días hábiles según tiraje" },
    ],
    applications: ["Tarjetas de presentación", "Material punto de venta", "Menús", "Catálogos corporativos"],
    relatedServices: ["gran-formato", "sublimacion", "letras-volumetricas"],
  },
  {
    id: "8",
    slug: "dtf-dtf-uv",
    name: "DTF y DTF UV",
    tagline: "Transfer full color en cualquier prenda.",
    description:
      "Direct to Film (DTF): impresión full color sobre film especial que se transfiere con calor. Sin límite de colores, sin mínimos de piezas, sobre algodón y mezclas. DTF UV permite aplicación sobre materiales rígidos.",
    techTag: "Impresión DTF · Transfer Duradero",
    specs: [
      { label: "Compatibilidad", value: "Algodón, poliéster, cuero, madera, acrílico (DTF UV)" },
      { label: "Colores", value: "Full color ilimitado, incluye blanco" },
      { label: "Mínimo por diseño", value: "Desde 1 pieza" },
      { label: "Tiempo de producción", value: "24–48 horas en pedidos estándar" },
    ],
    applications: ["Playeras personalizadas", "Gorras y accesorios", "Prendas oscuras y de color", "Artículos rígidos (DTF UV)"],
    relatedServices: ["vinil-textil", "bordado", "sublimacion"],
  },
  {
    id: "9",
    slug: "letras-volumetricas",
    name: "Letras Volumétricas",
    tagline: "Tu marca en tres dimensiones.",
    description:
      "Fabricación de letras y logotipos tridimensionales para señalética corporativa y branding físico. Disponibles en PVC, acrílico, aluminio y acero inoxidable. Con o sin iluminación LED integrada.",
    techTag: "Corte · Ensamble · Iluminación LED opcional",
    specs: [
      { label: "Materiales", value: "PVC espumado, acrílico, aluminio, acero inox" },
      { label: "Alturas", value: "Desde 5 cm hasta instalaciones de gran escala" },
      { label: "Iluminación", value: "LED frontal, posterior (halo) o sin iluminación" },
      { label: "Tiempo de producción", value: "5–10 días hábiles" },
    ],
    applications: ["Fachadas comerciales", "Interiores corporativos", "Stands y exhibidores", "Hoteles y restaurantes"],
    relatedServices: ["corte-laser-cnc", "vinil-autoadherible", "gran-formato"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as Service[];
}
