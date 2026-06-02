export type ProductCategory =
  | "vasos"
  | "ropa"
  | "llaveros"
  | "fiestas"
  | "packaging"
  | "velas"
  | "eventos"
  | "invitaciones";

export interface CustomizationField {
  id: string;
  label: string;
  type: "text" | "select" | "color" | "pattern";
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
  seoDescription: string;
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
    seoDescription:
      "Vaso de acero inoxidable personalizado con tu nombre o frase en vinilo de alta calidad. El regalo personalizado perfecto para el trabajo o el hogar. Enviamos a toda la república mexicana.",
    basePrice: 280,
    category: "vasos",
    customizationFields: [
      {
        id: "tipo-vaso",
        label: "Tipo de vaso",
        type: "select",
        required: true,
        options: ["Vaso de acero (20 oz)", "Vaso de vidrio", "Mug cerámica", "Tumbler con popote"],
      },
      {
        id: "texto",
        label: "¿Qué quieres que diga el vaso?",
        type: "text",
        required: true,
        maxLength: 30,
        placeholder: "Ej: Ana, o 'Café antes que tú'",
      },
      {
        id: "patron",
        label: "Estilo del diseño",
        type: "pattern",
        required: true,
        options: ["Limpio", "Con marco", "Con laurel", "Con flores", "Con doble línea"],
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
    shortDescription: "Tu frase favorita, puesta. Para presumir sin decir nada.",
    description:
      "Playera básica de algodón con tu texto, frase o nombre aplicado con HTV Iron-On de alta durabilidad. Resistente al lavado.",
    seoDescription:
      "Playera personalizada con tu texto o nombre en HTV Iron-On de alta durabilidad. Ideal para despedidas de soltera, eventos grupales o regalos personalizados con nombre. Enviamos a todo México.",
    basePrice: 280,
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
    seoDescription:
      "Llavero personalizado de acrílico con tu nombre o iniciales. El recuerdo perfecto para XV años, bodas y graduaciones. Hecho a mano con Cricut, acabado elegante y duradero.",
    basePrice: 90,
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
    seoDescription:
      "Set de 12 etiquetas personalizadas para baby shower, XV años, boda o cumpleaños. Papel sticker premium con nombre y fecha. Las etiquetas para fiesta perfectas, enviadas a toda la república.",
    basePrice: 130,
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
    seoDescription:
      "Cajita de regalo personalizada con tu dedicatoria. Packaging hecho a mano con cartulina premium. El detalle perfecto para sorprender: envoltorio personalizado para cualquier ocasión.",
    basePrice: 110,
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
    images: ["/products/cajita-regalo.jpg"],
    available: true,
  },
  {
    id: "6",
    slug: "portavasos-set",
    name: "Portavasos (Set x4)",
    shortDescription: "Ese detalle que hace que la mesa se vea pensada.",
    description:
      "Set de 4 portavasos de acrílico con diseño en vinilo. Minimalistas y elegantes, perfectos para el hogar o como regalo.",
    seoDescription:
      "Set de 4 portavasos personalizados de acrílico con vinilo. Coasters elegantes con tu nombre o inicial. Regalo personalizado ideal para el hogar o para eventos corporativos.",
    basePrice: 220,
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
    images: ["/products/portavasos-set.jpg"],
    available: true,
  },
  {
    id: "7",
    slug: "vela-personalizada",
    name: "Vela Personalizada",
    shortDescription: "El regalo que se siente pensado.",
    description:
      "Vela artesanal con etiqueta personalizada. Elige el aroma, el color de la cera y el texto de la etiqueta. Perfecta para regalar o decorar.",
    seoDescription:
      "Vela artesanal personalizada con etiqueta a tu medida. Elige el aroma, color de cera y texto. El regalo personalizado que se siente pensado, listo para entregar. Enviamos a todo México.",
    basePrice: 160,
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
    images: ["/products/vela-personalizada.jpg"],
    available: true,
  },
  {
    id: "8",
    slug: "set-velas",
    name: "Set de Velas (x3)",
    shortDescription: "Listas para regalar sin pensarlo dos veces.",
    description:
      "Set de 3 velas artesanales en diferentes tamaños con etiquetas personalizadas y coordinadas. Presentación en caja kraft.",
    seoDescription:
      "Set de 3 velas artesanales personalizadas en caja kraft, listas para regalar. Etiquetas coordinadas con tu texto. El regalo personalizado perfecto para Día de las Madres, bodas o cualquier ocasión.",
    basePrice: 380,
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
    images: ["/products/set-velas.jpg"],
    available: true,
  },
  {
    id: "9",
    slug: "invitacion-digital",
    name: "Invitación Digital",
    shortDescription: "Tu invitación, en un link que se ve increíble.",
    description:
      "Invitación animada e interactiva que se abre en el celular con un link. Sin descargas, sin imprimir. Diseño a medida con los colores, tipografía y tema del evento. Incluye nombre del festejado, fecha, lugar y RSVP.",
    seoDescription:
      "Invitación digital personalizada y animada para baby shower, XV años, boda o graduación. Se abre en el celular con un link, sin descargas. Diseño a medida con los colores y tema de tu evento.",
    basePrice: 500,
    category: "fiestas",
    customizationFields: [
      {
        id: "evento",
        label: "Tipo de evento",
        type: "select",
        required: true,
        options: ["Baby shower", "Cumpleaños", "XV años", "Boda", "Graduación", "Otro"],
      },
      {
        id: "nombre",
        label: "Nombre del festejado",
        type: "text",
        required: true,
        maxLength: 40,
        placeholder: "Ej: Alessia, o Ana & Carlos",
      },
      {
        id: "fecha",
        label: "Fecha y hora del evento",
        type: "text",
        required: true,
        maxLength: 40,
        placeholder: "Ej: Sábado 14 de junio, 4:00 PM",
      },
      {
        id: "lugar",
        label: "Lugar o dirección",
        type: "text",
        required: false,
        maxLength: 80,
        placeholder: "Ej: Salón Los Arcos, Monterrey NL",
      },
    ],
    images: ["/products/invitacion-digital.jpg"],
    available: true,
  },
  {
    id: "10",
    slug: "invitacion-fisica",
    name: "Invitación Física",
    shortDescription: "Para quienes todavía merecen algo en las manos.",
    description:
      "Invitación impresa en papel premium con diseño personalizado. Incluye sobre. El diseño va coordinado con el tema del evento. Precio por lote mínimo de 20 piezas.",
    seoDescription:
      "Invitaciones físicas personalizadas en papel premium para bodas, XV años, baby shower y más. Diseño a medida con el tema de tu evento. Lote mínimo de 20 piezas, incluye sobre. Enviamos a México.",
    basePrice: 30,
    category: "fiestas",
    customizationFields: [
      {
        id: "evento",
        label: "Tipo de evento",
        type: "select",
        required: true,
        options: ["Baby shower", "Cumpleaños", "XV años", "Boda", "Graduación", "Otro"],
      },
      {
        id: "nombre",
        label: "Nombre del festejado",
        type: "text",
        required: true,
        maxLength: 40,
        placeholder: "Ej: Sofía, o Juan & Mariana",
      },
      {
        id: "cantidad",
        label: "¿Cuántas piezas necesitas?",
        type: "select",
        required: true,
        options: ["20–30", "30–50", "50–80", "80–100", "Más de 100"],
      },
    ],
    images: ["/products/invitacion-fisica.jpg"],
    available: true,
  },
  {
    id: "11",
    slug: "mampara-personalizada",
    name: "Mampara Personalizada",
    shortDescription: "El backdrop que se roba el evento — con tu texto, tu estilo.",
    description:
      "Vinilo de corte aplicado sobre mampara para eventos: baby showers, bodas, XV años, graduaciones. El texto, nombre o frase que quieras en el estilo de tu evento. La mampara se cotiza aparte — puedes traer la tuya, comprarla o consultarnos opciones de renta de mobiliario.",
    seoDescription:
      "Mampara personalizada con vinilo de corte para bodas, baby shower, XV años y graduaciones. El backdrop que se roba el evento con tu texto y estilo. Hecho a mano con Cricut en México.",
    basePrice: 450,
    category: "eventos",
    customizationFields: [
      {
        id: "texto",
        label: "Texto o frase para la mampara",
        type: "text",
        required: true,
        maxLength: 40,
        placeholder: "Ej: hello Baby, Sofía XV, Mr & Mrs García",
      },
      {
        id: "color-vinilo",
        label: "Color del vinilo",
        type: "select",
        required: true,
        options: ["Blanco", "Negro", "Dorado", "Cobre", "Rosa palo", "Crema"],
      },
      {
        id: "mampara",
        label: "¿Necesitas la mampara?",
        type: "select",
        required: true,
        options: [
          "Solo el vinilo (yo pongo la mampara)",
          "Quiero cotizar compra de mampara",
          "Quiero cotizar renta de mampara",
        ],
      },
    ],
    images: ["/products/mampara-personalizada.jpg"],
    available: true,
  },
  {
    id: "12",
    slug: "letrero-acrilico",
    name: "Letrero de Acrílico",
    shortDescription: "El que se roba todas las fotos del evento.",

    description:
      "Lámina de acrílico con texto en vinilo de corte. Perfecto para bodas, XV años, baby showers y cualquier evento que merezca un letrero bonito. Se ve en todas las fotos.",
    seoDescription:
      "Letrero de acrílico personalizado con vinilo de corte para bodas, XV años, baby shower y eventos. El backdrop perfecto para fotos. Hecho a mano con Cricut, enviamos a toda la república mexicana.",
    basePrice: 320,
    category: "eventos",
    customizationFields: [
      {
        id: "texto",
        label: "Texto del letrero",
        type: "text",
        required: true,
        maxLength: 50,
        placeholder: "Ej: Bienvenidos, Mr & Mrs García, Baby Sofia",
      },
      {
        id: "color-vinilo",
        label: "Color del vinilo",
        type: "select",
        required: true,
        options: ["Blanco", "Negro", "Dorado", "Cobre", "Rosa palo", "Crema"],
      },
      {
        id: "tamaño",
        label: "Tamaño",
        type: "select",
        required: true,
        options: ["Chico (20×30 cm)", "Mediano (30×40 cm)", "Grande (40×60 cm)"],
      },
    ],
    images: ["/products/letrero-acrilico.jpg"],
    available: true,
  },
  {
    id: "13",
    slug: "termo-personalizado",
    name: "Termo Personalizado",
    shortDescription: "Tu nombre en el termo que ya quieres de todas formas.",
    description:
      "Termo tipo Stanley o similar con vinilo de corte personalizado. El que se te va a quedar viendo en la oficina, en el gym y en el café.",
    seoDescription:
      "Termo personalizado con vinilo de corte y tu nombre o frase favorita. Estilo Stanley. El regalo personalizado perfecto para quien lo tiene todo. Enviamos a toda la república mexicana.",
    basePrice: 320,
    category: "vasos",
    customizationFields: [
      {
        id: "texto",
        label: "¿Qué quieres que diga?",
        type: "text",
        required: true,
        maxLength: 30,
        placeholder: "Ej: tu nombre, una frase, una inicial",
      },
      {
        id: "color-vinilo",
        label: "Color del vinilo",
        type: "select",
        required: true,
        options: ["Negro", "Blanco", "Dorado", "Rosa palo", "Azul marino", "Cobre"],
      },
    ],
    images: ["/products/termo-personalizado.jpg"],
    available: true,
  },
  {
    id: "14",
    slug: "bolsa-tote",
    name: "Bolsa Tote Personalizada",
    shortDescription: "La bolsa que dices que eres.",
    description:
      "Tote bag de algodón con tu frase, nombre o diseño en HTV. Para el súper, para la playa, para cargar tu vida. Fotografiable desde cualquier ángulo.",
    seoDescription:
      "Bolsa tote personalizada de algodón con tu frase o nombre en HTV. Regalo personalizado aesthetic y funcional. Para el súper, la playa o el gym. Hecha a mano, enviamos a todo México.",
    basePrice: 220,
    category: "ropa",
    customizationFields: [
      {
        id: "texto",
        label: "¿Qué quieres que diga?",
        type: "text",
        required: true,
        maxLength: 40,
        placeholder: "Ej: 'Café antes que tú', tu nombre, una frase",
      },
      {
        id: "color-htv",
        label: "Color del texto",
        type: "select",
        required: true,
        options: ["Negro", "Blanco", "Dorado", "Terracota", "Verde olivo"],
      },
      {
        id: "color-bolsa",
        label: "Color de la bolsa",
        type: "select",
        required: true,
        options: ["Natural (crema)", "Negro", "Azul marino"],
      },
    ],
    images: ["/products/bolsa-tote.jpg"],
    available: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}
