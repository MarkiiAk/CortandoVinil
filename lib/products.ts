export type ProductCategory =
  | "vasos"
  | "ropa"
  | "llaveros"
  | "fiestas"
  | "packaging"
  | "velas";

export interface CustomizationField {
  id: string;
  label: string;
  type: "text" | "select" | "color";
  required: boolean;
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
  basePrice: number;
  category: ProductCategory;
  customizationFields: CustomizationField[];
  images: string[];
  available: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "vaso-personalizado",
    name: "Vaso Personalizado",
    shortDescription: "El que nadie en la oficina te va a robar.",
    description:
      "Vaso de acero inoxidable con tu nombre, frase o diseño en vinilo de alta calidad. Apto para bebidas frías y calientes.",
    basePrice: 150,
    category: "vasos",
    customizationFields: [
      {
        id: "texto",
        label: "¿Qué quieres que diga el vaso?",
        type: "text",
        required: true,
        maxLength: 30,
        placeholder: "Ej: Ana, o 'Café antes que tú'",
      },
      {
        id: "color-vinilo",
        label: "Color del vinilo",
        type: "select",
        required: true,
        options: ["Negro", "Blanco", "Dorado", "Rosa", "Azul marino"],
      },
    ],
    images: ["/products/vaso-personalizado.jpg"],
    available: true,
  },
  {
    id: "2",
    slug: "playera-personalizada",
    name: "Playera con Texto",
    shortDescription: "Tu frase, donde todos la vean. Aguanta lavada tras lavada.",
    description:
      "Playera básica de algodón con tu texto, frase o nombre aplicado con HTV Iron-On de alta durabilidad. Resistente al lavado.",
    basePrice: 200,
    category: "ropa",
    customizationFields: [
      {
        id: "texto",
        label: "¿Qué frase o texto quieres?",
        type: "text",
        required: true,
        maxLength: 50,
        placeholder: "Ej: 'Soy la novia' o tu nombre",
      },
      {
        id: "color-playera",
        label: "Color de la playera",
        type: "select",
        required: true,
        options: ["Blanco", "Negro", "Gris claro", "Beige", "Azul marino"],
      },
      {
        id: "talla",
        label: "Talla",
        type: "select",
        required: true,
        options: ["XS", "S", "M", "L", "XL"],
      },
    ],
    images: ["/products/playera-personalizada.jpg"],
    available: true,
  },
  {
    id: "3",
    slug: "llavero-personalizado",
    name: "Llavero Personalizado",
    shortDescription: "Un detalle chiquito que dice mucho.",
    description:
      "Llavero de acrílico cortado con Cricut con tu nombre, iniciales o forma especial. Acabado pulido y elegante.",
    basePrice: 80,
    category: "llaveros",
    customizationFields: [
      {
        id: "texto",
        label: "Nombre, iniciales o texto",
        type: "text",
        required: true,
        maxLength: 20,
        placeholder: "Ej: Ana G. o Mamá",
      },
      {
        id: "color-acrilico",
        label: "Color del acrílico",
        type: "select",
        required: true,
        options: ["Transparente", "Negro", "Blanco", "Rosa", "Dorado espejo"],
      },
    ],
    images: ["/products/llavero-personalizado.jpg"],
    available: true,
  },
  {
    id: "4",
    slug: "etiquetas-fiesta",
    name: "Set Etiquetas para Fiesta",
    shortDescription: "Para que tu evento se vea cuidado hasta el último detalle.",
    description:
      "Set de 12 etiquetas personalizadas para tu evento especial. Papel sticker premium, diseño coordinado con nombre y fecha.",
    basePrice: 120,
    category: "fiestas",
    customizationFields: [
      {
        id: "nombre-evento",
        label: "Nombre del festejado o evento",
        type: "text",
        required: true,
        maxLength: 30,
        placeholder: "Ej: Sofía 15 años",
      },
      {
        id: "fecha",
        label: "Fecha del evento (opcional)",
        type: "text",
        required: false,
        maxLength: 20,
        placeholder: "Ej: 14 de febrero 2026",
      },
    ],
    images: ["/products/etiquetas-fiesta.jpg"],
    available: true,
  },
  {
    id: "5",
    slug: "cajita-regalo",
    name: "Cajita de Regalo",
    shortDescription: "Cuando el envoltorio importa tanto como lo que va adentro.",
    description:
      "Cajita armada de cartulina troquelada con tu dedicatoria personalizada. Perfecta para sorprender a quien más quieres.",
    basePrice: 90,
    category: "packaging",
    customizationFields: [
      {
        id: "dedicatoria",
        label: "¿A quién va dedicada?",
        type: "text",
        required: true,
        maxLength: 40,
        placeholder: "Ej: Para mi mamá con todo mi amor",
      },
    ],
    images: [],
    available: true,
  },
  {
    id: "6",
    slug: "portavasos-set",
    name: "Portavasos (Set x4)",
    shortDescription: "Le dan ese toque a cualquier mesa o reunión.",
    description:
      "Set de 4 portavasos de acrílico con diseño en vinilo. Minimalistas y elegantes, perfectos para el hogar o como regalo.",
    basePrice: 180,
    category: "vasos",
    customizationFields: [
      {
        id: "texto",
        label: "Texto o inicial (opcional)",
        type: "text",
        required: false,
        maxLength: 20,
        placeholder: "Ej: inicial, nombre o dejar vacío",
      },
      {
        id: "color-vinilo",
        label: "Color del vinilo",
        type: "select",
        required: true,
        options: ["Negro", "Blanco", "Dorado", "Cobre"],
      },
    ],
    images: [],
    available: true,
  },
  {
    id: "7",
    slug: "vela-personalizada",
    name: "Vela Personalizada",
    shortDescription: "El regalo que se siente pensado.",
    description:
      "Vela artesanal con etiqueta personalizada. Elige el aroma, el color de la cera y el texto de la etiqueta. Perfecta para regalar o decorar.",
    basePrice: 130,
    category: "velas",
    customizationFields: [
      {
        id: "texto-etiqueta",
        label: "Texto para la etiqueta",
        type: "text",
        required: true,
        maxLength: 30,
        placeholder: "Ej: Con amor, Mamá o un nombre",
      },
      {
        id: "aroma",
        label: "Aroma",
        type: "select",
        required: true,
        options: ["Vainilla", "Lavanda", "Coco", "Rosa", "Sin aroma"],
      },
      {
        id: "color-cera",
        label: "Color de la cera",
        type: "select",
        required: true,
        options: ["Blanco", "Negro", "Crema", "Rosa palo", "Terracota"],
      },
    ],
    images: [],
    available: true,
  },
  {
    id: "8",
    slug: "set-velas",
    name: "Set de Velas (x3)",
    shortDescription: "Listas para regalar sin pensarlo dos veces.",
    description:
      "Set de 3 velas artesanales en diferentes tamaños con etiquetas personalizadas y coordinadas. Presentación en caja kraft.",
    basePrice: 320,
    category: "velas",
    customizationFields: [
      {
        id: "texto-etiqueta",
        label: "Texto para las etiquetas",
        type: "text",
        required: true,
        maxLength: 30,
        placeholder: "Ej: nombre, fecha o frase corta",
      },
      {
        id: "aroma",
        label: "Aroma",
        type: "select",
        required: true,
        options: ["Vainilla", "Lavanda", "Coco", "Rosa", "Sin aroma"],
      },
      {
        id: "color-cera",
        label: "Color de la cera",
        type: "select",
        required: true,
        options: ["Blanco", "Negro", "Crema", "Rosa palo", "Terracota"],
      },
    ],
    images: [],
    available: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
