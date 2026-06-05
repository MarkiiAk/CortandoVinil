export interface CustomizationField {
  id: string;
  label: string;
  type: "text" | "select";
  required: boolean;
  multiline?: boolean;
  maxLength?: number;
  placeholder?: string;
  options?: string[];
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  techTag: string;
  image?: string;                    // /servicios/[slug].jpg cuando esté disponible
  specs: { label: string; value: string }[];
  applications: string[];
  customizationFields: CustomizationField[];
  relatedServices: string[];
}

export const services: Service[] = [
  {
    id: "1",
    slug: "vinil-textil",
    name: "Vinil Textil",
    tagline: "Tu diseño en la tela. Lava y lava.",
    description: "Aplicación de vinil de transferencia térmica sobre prendas y textiles. Alta nitidez, colores vibrantes y durabilidad comprobada en lavados repetidos. Disponible en PU, PVC, flock, metálico y luminiscente.",
    techTag: "Plotter · HTV / PU / PVC",
    image: "/servicios/vinil-textil.jpg",
    specs: [
      { label: "Materiales compatibles", value: "Algodón, poliéster, mezclas, nylon" },
      { label: "Dimensiones", value: "Desde 5 mm hasta 50 cm de ancho" },
      { label: "Colores", value: "Cualquier color; metálico y fluorescente disponibles" },
      { label: "Tiempo de producción", value: "1–3 días hábiles según cantidad" },
    ],
    applications: ["Uniformes corporativos", "Playeras de eventos", "Merch de marca", "Equipos deportivos"],
    customizationFields: [
      { id: "tipo-prenda", label: "Tipo de prenda", type: "select", required: true, options: ["Playera", "Gorra", "Sudadera / Hoodie", "Saco / Chamarra", "Polo", "Otro"] },
      { id: "color-prenda", label: "Color de la prenda", type: "select", required: true, options: ["Blanco", "Negro", "Gris", "Azul marino", "Rojo", "Otro"] },
      { id: "tipo-vinil", label: "Tipo de vinil", type: "select", required: true, options: ["Detalle (sólido, 1 color)", "Flock / Terciopelo", "Luminiscente", "Impreso full color", "No lo sé — asesórenme"] },
      { id: "diseno", label: "Describe tu diseño", type: "text", required: true, multiline: true, maxLength: 250, placeholder: "Ej: logo de empresa en pecho izquierdo, texto en espalda, colores aproximados..." },
      { id: "tallas", label: "Tallas necesarias", type: "text", required: false, placeholder: "Ej: 3 tallas S, 5 M, 4 L, 2 XL" },
    ],
    relatedServices: ["dtf-dtf-uv", "bordado", "sublimacion"],
  },
  {
    id: "2",
    slug: "vinil-autoadherible",
    name: "Vinil Autoadherible",
    tagline: "De 5 mm hasta 2 metros. Permanente o removible.",
    description: "Corte e impresión de vinil autoadherible para señalización, rotulación, escaparates, vehículos y más. Disponible en corte simple o impreso full-color.",
    techTag: "Plotter de Corte · Vinilo Adhesivo",
    image: "/servicios/vinil-autoadherible.jpg",
    specs: [
      { label: "Ancho máximo", value: "Hasta 2 metros de ancho" },
      { label: "Tipos", value: "Permanente, removible, espejado, glitter, carbón" },
      { label: "Superficies", value: "Vidrio, metal, madera, vehículo, pared" },
      { label: "Tiempo de producción", value: "24–48 horas en pedidos estándar" },
    ],
    applications: ["Rotulación de locales", "Vinil para autos", "Señalización", "Escaparates y vitrinas"],
    customizationFields: [
      { id: "tipo", label: "Tipo de vinil", type: "select", required: true, options: ["Corte simple (1 color sólido)", "Impreso full color", "Transfer / epóxico", "No lo sé — asesórenme"] },
      { id: "aplicacion", label: "¿Dónde se aplica?", type: "select", required: true, options: ["Pared interior", "Vitrina / cristal", "Vehículo", "Señalética exterior", "Piso", "Otro"] },
      { id: "medidas", label: "Medidas aproximadas", type: "text", required: true, placeholder: "Ej: 50×30 cm, 1.5 m de ancho × 80 cm de alto" },
      { id: "diseno", label: "Describe el diseño", type: "text", required: true, multiline: true, maxLength: 200, placeholder: "Texto, logo, imagen... ¿tienes el archivo listo?" },
    ],
    relatedServices: ["gran-formato", "letras-volumetricas", "corte-laser-cnc"],
  },
  {
    id: "3",
    slug: "sublimacion",
    name: "Sublimación",
    tagline: "Foto-realismo en cerámica, metal y tela.",
    description: "Impresión por sublimación de tinta: el diseño se funde con el material, no hay capa sobre la superficie. Colores permanentes, resistentes al rayado y al agua.",
    techTag: "Sublimadora · Tinta de Sublimación",
    image: "/servicios/sublimacion.jpg",
    specs: [
      { label: "Materiales", value: "Poliéster, cerámica, metal, vidrio, madera recubierta" },
      { label: "Artículos", value: "Tazas, termos, mouse pads, rompecabezas, azulejos" },
      { label: "Resolución", value: "Hasta 1440 dpi" },
      { label: "Tiempo de producción", value: "1–2 días hábiles" },
    ],
    applications: ["Artículos promocionales", "Regalos corporativos", "Uniformes deportivos", "Decoración"],
    customizationFields: [
      { id: "tipo-articulo", label: "¿Qué artículo necesitas?", type: "select", required: true, options: ["Taza cerámica 11oz", "Taza mágica (cambia con calor)", "Termo acero inoxidable", "Mouse pad", "Funda para celular", "Azulejo / placa", "Rompecabezas", "Otro"] },
      { id: "modelo-celular", label: "Modelo de celular (si aplica)", type: "text", required: false, placeholder: "Ej: iPhone 15 Pro Max, Samsung S24" },
      { id: "diseno", label: "Describe tu diseño o arte", type: "text", required: true, multiline: true, maxLength: 250, placeholder: "¿Llevas el archivo? ¿Foto, logo o texto? Cuéntanos..." },
    ],
    relatedServices: ["dtf-dtf-uv", "gran-formato", "impresos"],
  },
  {
    id: "4",
    slug: "gran-formato",
    name: "Gran Formato",
    tagline: "Impacto visual a cualquier escala.",
    description: "Impresión de alta resolución sobre lonas, vinil, tela y más. Para exteriores e interiores. Desde un roll-up hasta el rotulado completo de un vehículo o edificio.",
    techTag: "Impresora Gran Formato · Eco-Solvente / UV",
    image: "/servicios/gran-formato.jpg",
    specs: [
      { label: "Ancho máximo", value: "Hasta 3.2 metros" },
      { label: "Materiales", value: "Lona, vinil brillante/mate, tela, banner, mesh" },
      { label: "Acabados", value: "Con ojales, sellado, montado en estructura" },
      { label: "Tiempo de producción", value: "24–72 horas según tamaño" },
    ],
    applications: ["Lonas publicitarias", "Roll-ups y displays", "Rotulado vehicular", "Vallas"],
    customizationFields: [
      { id: "tipo", label: "¿Qué necesitas?", type: "select", required: true, options: ["Lona con ojales", "Roll up / Display", "Vinil impreso autoadherible", "Tela sublimada", "Espectacular / valla", "Otro"] },
      { id: "medidas", label: "Medidas (ancho × alto)", type: "text", required: true, placeholder: "Ej: 3×2 m, 80×200 cm..." },
      { id: "acabado", label: "Acabado / montaje", type: "select", required: false, options: ["Solo impresión", "Con ojales", "Sellado sin ojales", "Con dobladillo", "Incluir estructura roll-up"] },
      { id: "diseno", label: "Arte o descripción del diseño", type: "text", required: true, multiline: true, maxLength: 200, placeholder: "¿Ya tienes el arte en alta resolución? ¿O necesitas diseño?" },
    ],
    relatedServices: ["vinil-autoadherible", "letras-volumetricas", "impresos"],
  },
  {
    id: "5",
    slug: "bordado",
    name: "Bordado",
    tagline: "Tu logo en hilo. Duración de por vida.",
    description: "Bordado computarizado con ponchado profesional incluido. Resultado limpio, uniforme y de alta durabilidad. Ideal para uniformes, gorras y prendas de alta rotación.",
    techTag: "Bordadora CNC · Ponchado Digital",
    image: "/servicios/bordado.jpg",
    specs: [
      { label: "Prendas compatibles", value: "Playeras, gorras, sacos, mochilas, polos" },
      { label: "Tamaño máximo", value: "Hasta 30×40 cm por zona de bordado" },
      { label: "Colores", value: "Hasta 15 colores por diseño" },
      { label: "Tiempo de producción", value: "3–5 días hábiles (incluye ponchado)" },
    ],
    applications: ["Uniformes corporativos", "Gorras de empresa", "Equipos deportivos", "Regalos premium"],
    customizationFields: [
      { id: "tipo-prenda", label: "Tipo de prenda", type: "select", required: true, options: ["Playera", "Gorra estructurada", "Gorra dad hat", "Saco / Chamarra", "Mochila", "Polo", "Otro"] },
      { id: "posicion", label: "Posición del bordado", type: "select", required: true, options: ["Pecho izquierdo", "Pecho derecho", "Espalda completa", "Manga", "Frente de gorra", "Otro"] },
      { id: "diseno", label: "Descripción del logo o diseño", type: "text", required: true, multiline: true, maxLength: 200, placeholder: "¿Tienes el archivo vectorial (AI, PDF, CDR)? Descríbenos colores y detalles..." },
    ],
    relatedServices: ["vinil-textil", "dtf-dtf-uv", "sublimacion"],
  },
  {
    id: "6",
    slug: "corte-laser-cnc",
    name: "Corte Láser y CNC",
    tagline: "Precisión de décimas de milímetro.",
    description: "Corte y grabado láser CO₂ sobre madera, acrílico, cuero, tela y más. Router CNC para aluminio y materiales de mayor grosor.",
    techTag: "Láser CO₂ · Router CNC",
    image: "/servicios/corte-laser-cnc.jpg",
    specs: [
      { label: "Materiales", value: "MDF, acrílico, cuero, tela, aluminio, espuma" },
      { label: "Área de trabajo", value: "Hasta 1.2×0.9 m en láser" },
      { label: "Precisión", value: "±0.1 mm en piezas estándar" },
      { label: "Tiempo de producción", value: "1–4 días según complejidad" },
    ],
    applications: ["Letreros y señalética", "Packaging premium", "Trofeos y reconocimientos", "Piezas arquitectónicas"],
    customizationFields: [
      { id: "material", label: "Material a trabajar", type: "select", required: true, options: ["Acrílico (transparente / color)", "MDF / Madera", "Cuero", "Aluminio", "Espuma / foam", "Otro"] },
      { id: "tipo-trabajo", label: "Tipo de trabajo", type: "select", required: true, options: ["Solo corte", "Solo grabado / marcado", "Corte + grabado", "No lo sé — asesórenme"] },
      { id: "medidas", label: "Medidas o dimensiones", type: "text", required: true, placeholder: "Ej: 30×20 cm, 2 mm de espesor, 50 piezas" },
      { id: "diseno", label: "Descripción del diseño o archivo", type: "text", required: true, multiline: true, maxLength: 200, placeholder: "¿Tienes el vector en AI, DXF o SVG? Describe el diseño..." },
    ],
    relatedServices: ["letras-volumetricas", "vinil-autoadherible", "gran-formato"],
  },
  {
    id: "7",
    slug: "impresos",
    name: "Impresos",
    tagline: "Papel que habla por tu marca.",
    description: "Impresión digital y offset de alta calidad para material de papelería comercial. Colores precisos, papel premium, acabados profesionales.",
    techTag: "Offset + Digital · Alta Resolución",
    image: "/servicios/impresos.jpg",
    specs: [
      { label: "Formatos", value: "Tarjetas, flyers, trípticos, dípticos, pósters, calendarios" },
      { label: "Papel", value: "Couché 150–400 g/m², kraft, texturizado" },
      { label: "Acabados", value: "Barniz UV, laminado mate/brillante, suaje, folio" },
      { label: "Tiempo de producción", value: "2–5 días hábiles según tiraje" },
    ],
    applications: ["Tarjetas de presentación", "Material POP", "Menús", "Catálogos corporativos"],
    customizationFields: [
      { id: "formato", label: "Formato que necesitas", type: "select", required: true, options: ["Tarjetas de presentación", "Flyers media carta", "Flyers carta", "Tríptico carta", "Díptico carta", "Póster", "Calendario", "Hoja membretada", "Otro"] },
      { id: "acabado", label: "Acabado", type: "select", required: false, options: ["Mate estándar", "Barniz UV (brillante)", "Laminado mate suave", "Suaje especial", "No lo sé aún"] },
      { id: "diseno", label: "¿Tienes el arte listo?", type: "text", required: true, multiline: true, maxLength: 200, placeholder: "PDF, AI o InDesign en alta resolución. Si no tienes, cuéntanos qué quieres..." },
    ],
    relatedServices: ["gran-formato", "sublimacion", "letras-volumetricas"],
  },
  {
    id: "8",
    slug: "dtf-dtf-uv",
    name: "DTF y DTF UV",
    tagline: "Transfer full color en cualquier prenda.",
    description: "Direct to Film: impresión full color sobre film que se transfiere con calor. Sin límite de colores, sin mínimos. DTF UV para artículos rígidos.",
    techTag: "Impresión DTF · Transfer Duradero",
    image: "/servicios/dtf-dtf-uv.jpg",
    specs: [
      { label: "Compatibilidad", value: "Algodón, poliéster, cuero, madera, acrílico (DTF UV)" },
      { label: "Colores", value: "Full color ilimitado, incluye blanco" },
      { label: "Mínimo por diseño", value: "Desde 1 pieza" },
      { label: "Tiempo de producción", value: "24–48 horas en pedidos estándar" },
    ],
    applications: ["Playeras personalizadas", "Gorras y accesorios", "Prendas oscuras", "Artículos rígidos (DTF UV)"],
    customizationFields: [
      { id: "tipo-prenda", label: "¿En qué prenda o artículo?", type: "select", required: true, options: ["Playera algodón", "Playera mezcla poly-algodón", "Gorra", "Sudadera / Hoodie", "Artículo rígido (DTF UV)", "Otro textil"] },
      { id: "color-prenda", label: "Color de la prenda", type: "select", required: true, options: ["Blanco / Colores muy claros", "Colores medios", "Negro / Colores oscuros", "Mix de colores distintos"] },
      { id: "diseno", label: "Diseño o archivo a transferir", type: "text", required: true, multiline: true, maxLength: 250, placeholder: "¿Tienes PNG en alta resolución con fondo transparente? Describe el diseño..." },
    ],
    relatedServices: ["vinil-textil", "bordado", "sublimacion"],
  },
  {
    id: "9",
    slug: "letras-volumetricas",
    name: "Letras Volumétricas",
    tagline: "Tu marca en tres dimensiones.",
    description: "Fabricación de letras y logotipos tridimensionales para señalética corporativa y branding físico. Con o sin iluminación LED integrada.",
    techTag: "Corte · Ensamble · Iluminación LED opcional",
    image: "/servicios/letras-volumetricas.jpg",
    specs: [
      { label: "Materiales", value: "PVC espumado, acrílico, aluminio, acero inox" },
      { label: "Alturas", value: "Desde 5 cm hasta instalaciones de gran escala" },
      { label: "Iluminación", value: "LED frontal, posterior (halo) o sin iluminación" },
      { label: "Tiempo de producción", value: "5–10 días hábiles" },
    ],
    applications: ["Fachadas comerciales", "Interiores corporativos", "Stands y exhibidores", "Hoteles y restaurantes"],
    customizationFields: [
      { id: "material", label: "Material preferido", type: "select", required: true, options: ["PVC espumado (más económico)", "Acrílico", "Aluminio", "Acero inoxidable", "No lo sé — recomiéndenme"] },
      { id: "texto", label: "Texto o nombre del diseño", type: "text", required: true, maxLength: 80, placeholder: "Ej: nombre del negocio, slogan, logotipo" },
      { id: "altura", label: "Altura aproximada de las letras", type: "text", required: true, placeholder: "Ej: 30 cm, 50 cm, 1 metro" },
      { id: "iluminacion", label: "Iluminación", type: "select", required: true, options: ["Sin iluminación", "LED frontal (ilumina la letra)", "LED posterior / halo", "Consultar opciones"] },
    ],
    relatedServices: ["corte-laser-cnc", "vinil-autoadherible", "gran-formato"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as Service[];
}
