export type ProductCategory =
  | "sublimado"
  | "laser"
  | "granformato"
  | "impresos"
  | "viniltextil";

export interface CustomizationField {
  id: string;
  label: string;
  type: "text" | "select" | "color" | "pattern";
  required: boolean;
  multiline?: boolean;
  maxLength?: number;
  placeholder?: string;
  options?: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  seoDescription: string;
  basePrice: number;
  category: ProductCategory;
  customizationFields: CustomizationField[];
  images: string[];
  available: boolean;
}

export const products: Product[] = [
  // ── SUBLIMADO ──────────────────────────────────────────────────────────────
  {
    id: "1",
    slug: "taza-sublimada",
    name: "Taza Sublimada",
    shortDescription: "Tu diseño o logo en full color, sin que se borre jamás.",
    description:
      "Taza de cerámica 11oz con sublimación full color. Resistente al lavavajillas. Ideal para merch, regalos corporativos y promocionales. Pedidos desde 1 pieza.",
    seoDescription:
      "Tazas sublimadas con tu diseño o logo en full color. Resistentes al lavavajillas. Pedidos desde 1 pieza. Enviamos a toda la república mexicana.",
    basePrice: 0,
    category: "sublimado",
    customizationFields: [
      {
        id: "diseno",
        label: "Diseño o archivo",
        type: "text",
        required: true,
        multiline: true,
        placeholder: "Describe tu diseño o indica si adjuntarás un archivo por WhatsApp.",
      },
      {
        id: "cantidad",
        label: "Cantidad aproximada",
        type: "select",
        required: true,
        options: ["1–5", "6–20", "21–50", "51–100", "Más de 100"],
      },
    ],
    images: ["/products/taza-sublimada.jpg"],
    available: true,
  },
  {
    id: "2",
    slug: "termo-sublimado",
    name: "Termo Sublimado",
    shortDescription: "Termo de acero inoxidable con tu imagen en full color.",
    description:
      "Termo de acero inoxidable 20oz con sublimación de alta definición. Mantiene temperatura hasta 12 horas. Perfecto para merch de marca y regalos premium.",
    seoDescription:
      "Termos sublimados personalizados con tu diseño o logo. Acero inoxidable, alta definición. Enviamos a todo México.",
    basePrice: 0,
    category: "sublimado",
    customizationFields: [
      {
        id: "diseno",
        label: "Diseño o archivo",
        type: "text",
        required: true,
        multiline: true,
        placeholder: "Describe tu diseño o mándalo por WhatsApp.",
      },
      {
        id: "cantidad",
        label: "Cantidad aproximada",
        type: "select",
        required: true,
        options: ["1–5", "6–20", "21–50", "51–100", "Más de 100"],
      },
    ],
    images: ["/products/termo-sublimado.jpg"],
    available: true,
  },
  {
    id: "3",
    slug: "mousepad-sublimado",
    name: "Mouse Pad Sublimado",
    shortDescription: "Tu diseño en el escritorio. Merch que se usa todos los días.",
    description:
      "Mouse pad de 20×24 cm con sublimación full color. Base antideslizante. Ideal para merch corporativo, gaming y regalos de empresa.",
    seoDescription:
      "Mouse pads sublimados con tu diseño en full color. Base antideslizante. Pedidos corporativos y unitarios. Enviamos a toda la república.",
    basePrice: 0,
    category: "sublimado",
    customizationFields: [
      {
        id: "diseno",
        label: "Diseño o archivo",
        type: "text",
        required: true,
        multiline: true,
        placeholder: "Describe tu diseño o envíalo por WhatsApp.",
      },
      {
        id: "cantidad",
        label: "Cantidad aproximada",
        type: "select",
        required: true,
        options: ["1–5", "6–20", "21–50", "51–100", "Más de 100"],
      },
    ],
    images: ["/products/mousepad-sublimado.jpg"],
    available: true,
  },
  {
    id: "4",
    slug: "funda-celular-sublimada",
    name: "Funda para Celular Sublimada",
    shortDescription: "Diseño en full color. El accesorio que más se ve.",
    description:
      "Funda para celular con sublimación full color. Disponible para la mayoría de modelos iPhone y Android. Bordes cubiertos, acabado mate.",
    seoDescription:
      "Fundas para celular sublimadas con tu diseño en full color. Disponible para iPhone y Android. Pedidos desde 1 pieza. Enviamos a México.",
    basePrice: 0,
    category: "sublimado",
    customizationFields: [
      {
        id: "modelo",
        label: "Modelo de celular",
        type: "text",
        required: true,
        placeholder: "Ej: iPhone 15 Pro, Samsung Galaxy S24",
      },
      {
        id: "diseno",
        label: "Diseño o archivo",
        type: "text",
        required: true,
        multiline: true,
        placeholder: "Describe tu diseño o mándalo por WhatsApp.",
      },
    ],
    images: ["/products/funda-celular.jpg"],
    available: true,
  },

  // ── CORTE LÁSER ────────────────────────────────────────────────────────────
  {
    id: "5",
    slug: "letrero-acrilico-laser",
    name: "Letrero de Acrílico (Láser)",
    shortDescription: "Tu texto o logo cortado en acrílico con precisión milimétrica.",
    description:
      "Letrero de acrílico cortado o grabado con láser CNC. Disponible en varios colores y espesores. Ideal para oficinas, locales, eventos y señalética.",
    seoDescription:
      "Letreros de acrílico cortados con láser. Texto, logos y formas a medida. Enviamos a toda la república mexicana.",
    basePrice: 0,
    category: "laser",
    customizationFields: [
      {
        id: "texto",
        label: "Texto o diseño del letrero",
        type: "text",
        required: true,
        maxLength: 80,
        placeholder: "Ej: nombre del negocio, slogan, logo",
      },
      {
        id: "color-acrilico",
        label: "Color del acrílico",
        type: "select",
        required: true,
        options: ["Transparente", "Negro", "Blanco", "Dorado espejo", "Plateado espejo", "Rojo", "Otro"],
      },
      {
        id: "tamaño",
        label: "Tamaño aproximado",
        type: "select",
        required: true,
        options: ["Chico (hasta 20×20 cm)", "Mediano (hasta 40×40 cm)", "Grande (hasta 60×60 cm)", "Extra grande — cotizar"],
      },
    ],
    images: ["/products/letrero-acrilico-laser.jpg"],
    available: true,
  },
  {
    id: "6",
    slug: "llavero-grabado-laser",
    name: "Llavero Grabado con Láser",
    shortDescription: "Madera, acrílico o cuero. El detalle que hace la diferencia.",
    description:
      "Llavero grabado con láser en madera, acrílico o cuero. Texto, logo o diseño personalizado con acabado profesional. Pedidos unitarios o por volumen para eventos.",
    seoDescription:
      "Llaveros grabados con láser en madera, acrílico o cuero. Personalizados con texto o logo. Pedidos desde 1 pieza. Enviamos a todo México.",
    basePrice: 0,
    category: "laser",
    customizationFields: [
      {
        id: "material",
        label: "Material",
        type: "select",
        required: true,
        options: ["Madera natural", "Acrílico transparente", "Acrílico negro", "Cuero"],
      },
      {
        id: "texto",
        label: "Texto o diseño a grabar",
        type: "text",
        required: true,
        maxLength: 40,
        placeholder: "Ej: logo, nombre, iniciales",
      },
      {
        id: "cantidad",
        label: "Cantidad",
        type: "select",
        required: true,
        options: ["1–10", "11–50", "51–100", "Más de 100"],
      },
    ],
    images: ["/products/llavero-laser.jpg"],
    available: true,
  },
  {
    id: "7",
    slug: "portavasos-laser",
    name: "Portavasos Grabados (Set x4)",
    shortDescription: "Acrílico o madera con tu logo o diseño. El detalle que queda.",
    description:
      "Set de 4 portavasos de acrílico o madera grabados con láser. Perfectos para regalos corporativos, eventos y puntos de venta. Acabado limpio y duradero.",
    seoDescription:
      "Portavasos grabados con láser en acrílico o madera. Set de 4 piezas con tu logo o diseño. Ideal para regalos corporativos. Enviamos a México.",
    basePrice: 0,
    category: "laser",
    customizationFields: [
      {
        id: "material",
        label: "Material",
        type: "select",
        required: true,
        options: ["Madera natural", "Acrílico transparente", "Acrílico negro"],
      },
      {
        id: "diseno",
        label: "Diseño o texto a grabar",
        type: "text",
        required: true,
        maxLength: 40,
        placeholder: "Ej: logo de empresa, nombre, inicial",
      },
    ],
    images: ["/products/portavasos-laser.jpg"],
    available: true,
  },

  // ── GRAN FORMATO ───────────────────────────────────────────────────────────
  {
    id: "8",
    slug: "lona-impresa",
    name: "Lona Impresa",
    shortDescription: "Full color, alta resolución, para exterior o interior.",
    description:
      "Lona publicitaria impresa en full color con alta resolución. Disponible con ojales o soldar. Para exteriores, eventos, stands y locales comerciales. Sin límite de tamaño.",
    seoDescription:
      "Lonas publicitarias impresas en full color. Alta resolución, con ojales. Para exterior e interior. Enviamos a toda la república mexicana.",
    basePrice: 0,
    category: "granformato",
    customizationFields: [
      {
        id: "medidas",
        label: "Medidas (ancho × alto en metros)",
        type: "text",
        required: true,
        placeholder: "Ej: 3×2 m, 5×1 m, etc.",
      },
      {
        id: "acabado",
        label: "Acabado",
        type: "select",
        required: true,
        options: ["Con ojales", "Sellada (sin ojales)", "Con dobladillo para travesaño"],
      },
      {
        id: "cantidad",
        label: "Cantidad",
        type: "select",
        required: true,
        options: ["1", "2–5", "6–10", "Más de 10"],
      },
    ],
    images: ["/products/lona-impresa.jpg"],
    available: true,
  },
  {
    id: "9",
    slug: "roll-up-display",
    name: "Roll Up / Display",
    shortDescription: "Llegas, lo armas en 30 segundos, y ya tienes presencia.",
    description:
      "Roll up o display de exposición con impresión full color de alta resolución. Incluye estructura enrollable de aluminio. Listo para ferias, eventos y puntos de venta.",
    seoDescription:
      "Roll ups y displays para eventos con impresión full color. Estructura de aluminio incluida. Enviamos a todo México.",
    basePrice: 0,
    category: "granformato",
    customizationFields: [
      {
        id: "tamaño",
        label: "Tamaño estándar",
        type: "select",
        required: true,
        options: ["60×160 cm", "80×200 cm", "100×200 cm", "Medida especial — cotizar"],
      },
      {
        id: "cantidad",
        label: "Cantidad",
        type: "select",
        required: true,
        options: ["1", "2–5", "Más de 5"],
      },
    ],
    images: ["/products/roll-up.jpg"],
    available: true,
  },
  {
    id: "10",
    slug: "vinil-autoadherible",
    name: "Vinil Autoadherible",
    shortDescription: "Para paredes, ventanas, vehículos, pisos y donde más quieras.",
    description:
      "Vinil autoadherible impreso o de corte. Para rotulación de locales, vehículos, escaparates, pisos y superficies planas. Material de larga duración, resistente a intemperie.",
    seoDescription:
      "Vinil autoadherible impreso y de corte para rotulación de locales, autos y escaparates. Alta durabilidad. Enviamos a toda la república.",
    basePrice: 0,
    category: "granformato",
    customizationFields: [
      {
        id: "tipo",
        label: "Tipo de vinil",
        type: "select",
        required: true,
        options: ["Impreso full color", "Corte de un solo color", "Transfer / epóxico"],
      },
      {
        id: "aplicacion",
        label: "¿Dónde se aplica?",
        type: "select",
        required: true,
        options: ["Pared interior", "Vitrina / cristal", "Vehículo", "Piso", "Otro"],
      },
      {
        id: "medidas",
        label: "Medidas aproximadas",
        type: "text",
        required: true,
        placeholder: "Ej: 50×30 cm, 2 m de ancho, etc.",
      },
    ],
    images: ["/products/vinil-autoadherible.jpg"],
    available: true,
  },

  // ── IMPRESOS ───────────────────────────────────────────────────────────────
  {
    id: "11",
    slug: "tarjetas-presentacion",
    name: "Tarjetas de Presentación",
    shortDescription: "El primer contacto que habla bien de ti antes de que abras la boca.",
    description:
      "Tarjetas de presentación en papel premium de alta gramaje. Full color doble cara, con acabado mate, barniz UV o laminado. Pedidos desde 100 piezas.",
    seoDescription:
      "Tarjetas de presentación impresas en papel premium. Full color doble cara, acabados profesionales. Pedidos desde 100 piezas. Enviamos a México.",
    basePrice: 0,
    category: "impresos",
    customizationFields: [
      {
        id: "acabado",
        label: "Acabado",
        type: "select",
        required: true,
        options: ["Mate estándar", "Barniz UV (brillante)", "Laminado mate suave", "Suaje especial — cotizar"],
      },
      {
        id: "cantidad",
        label: "Cantidad",
        type: "select",
        required: true,
        options: ["100", "250", "500", "1,000", "Más de 1,000"],
      },
    ],
    images: ["/products/tarjetas-presentacion.jpg"],
    available: true,
  },
  {
    id: "12",
    slug: "flyers-tripticos",
    name: "Flyers y Trípticos",
    shortDescription: "Impresión rápida, colores exactos, entrega puntual.",
    description:
      "Flyers, dípticos y trípticos en papel couché de 150 a 300 g/m². Full color doble cara. Ideales para campañas, menús, catálogos y material de punto de venta.",
    seoDescription:
      "Flyers y trípticos impresos en papel couché de alta calidad. Full color, entrega rápida. Enviamos a toda la república mexicana.",
    basePrice: 0,
    category: "impresos",
    customizationFields: [
      {
        id: "formato",
        label: "Formato",
        type: "select",
        required: true,
        options: ["Flyer carta", "Flyer media carta", "Díptico carta", "Tríptico carta", "Otro — cotizar"],
      },
      {
        id: "cantidad",
        label: "Cantidad",
        type: "select",
        required: true,
        options: ["100", "250", "500", "1,000", "Más de 1,000"],
      },
    ],
    images: ["/products/flyers.jpg"],
    available: true,
  },

  // ── VINIL TEXTIL ──────────────────────────────────────────────────────────
  {
    id: "13",
    slug: "playera-vinil-textil",
    name: "Playera con Vinil Textil",
    shortDescription: "Tu diseño en tela. Resistente al lavado, vivos los colores.",
    description:
      "Playera personalizada con vinil textil de alta calidad: detalle, flock (terciopelo), luminiscente o impreso full color. Resistente al lavado. Pedidos unitarios y por volumen.",
    seoDescription:
      "Playeras personalizadas con vinil textil. Detalle, flock, luminiscente o impreso. Pedidos desde 1 pieza. Enviamos a todo México.",
    basePrice: 0,
    category: "viniltextil",
    customizationFields: [
      {
        id: "tipo-vinil",
        label: "Tipo de vinil",
        type: "select",
        required: true,
        options: ["Detalle (corte de color sólido)", "Flock / Terciopelo", "Luminiscente (brilla en la oscuridad)", "Impreso full color"],
      },
      {
        id: "color-prenda",
        label: "Color de la playera",
        type: "select",
        required: true,
        options: ["Blanco", "Negro", "Gris", "Azul marino", "Rojo", "Otro — especificar"],
      },
      {
        id: "talla",
        label: "Talla",
        type: "select",
        required: true,
        options: ["XS", "S", "M", "L", "XL", "XXL", "Mixto — especificar en WhatsApp"],
      },
      {
        id: "cantidad",
        label: "Cantidad",
        type: "select",
        required: true,
        options: ["1–5", "6–20", "21–50", "Más de 50"],
      },
    ],
    images: ["/products/playera-vinil-textil.jpg"],
    available: true,
  },
  {
    id: "14",
    slug: "gorra-bordada",
    name: "Gorra con Bordado",
    shortDescription: "Tu logo bordado en gorra. El merch que se porta con orgullo.",
    description:
      "Gorra personalizada con bordado de tu logo, texto o diseño. Disponible en snapback, dad hat y trucker. Pedidos desde 1 pieza, volumen para uniformes y merch.",
    seoDescription:
      "Gorras bordadas con tu logo o diseño. Snapback, dad hat y trucker. Pedidos desde 1 pieza. Enviamos a toda la república mexicana.",
    basePrice: 0,
    category: "viniltextil",
    customizationFields: [
      {
        id: "estilo-gorra",
        label: "Estilo de gorra",
        type: "select",
        required: true,
        options: ["Snapback (visera plana)", "Dad hat (visera curva)", "Trucker (malla trasera)"],
      },
      {
        id: "color-gorra",
        label: "Color de la gorra",
        type: "select",
        required: true,
        options: ["Negro", "Blanco", "Gris", "Azul marino", "Otro — especificar"],
      },
      {
        id: "cantidad",
        label: "Cantidad",
        type: "select",
        required: true,
        options: ["1–5", "6–20", "21–50", "Más de 50"],
      },
    ],
    images: ["/products/gorra-bordada.jpg"],
    available: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
