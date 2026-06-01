# MiMarca — Plataforma de Personalización con Cricut

Tienda online para productos personalizados con Cricut Explore 4: vasos, playeras, llaveros, etiquetas para fiesta, cajitas de regalo y portavasos. Envíos a toda la república mexicana.

---

## Ecosistema de Agentes

Este proyecto usa un sistema de agentes en `/agents/` para organizar el conocimiento del negocio. Claude Code lee el `CLAUDE.md` de la raíz en cada sesión y sabe a qué archivo ir según el tipo de pregunta.

### Mapa de Agentes

| Agente | Archivo | Para qué |
|--------|---------|----------|
| Orquestador | `/agents/orquestador/ORQUESTADOR.md` | Enrutamiento y consolidación |
| Memoria Global | `/agents/memoria-global/GLOBAL.md` | Contexto compartido entre agentes |
| Negocio | `/agents/negocio/negocio.md` | Precios, catálogo, estrategia |
| Clientes | `/agents/clientes/clientes.md` | CRM, segmentos, fidelización |
| Dev | `/agents/dev/dev.md` | Stack, features, bugs, decisiones técnicas |
| Operaciones | `/agents/operaciones/operaciones.md` | Pedidos, materiales, tiempos |
| Marketing | `/agents/marketing/marketing.md` | Redes, contenido, copy, campañas |

### Ejemplos de Prompts Reales

```
# Activar agente de negocio
"¿Cuánto le cobro a una empresa por 50 playeras con logo?"

# Activar agente de marketing
"Necesito publicar algo para el Día de las Madres esta semana"

# Activar agente dev
"Construye la landing completa. Lee /agents/dev/dev.md y /agents/dev/prompts/landing.md"

# Activar múltiples agentes
"¿Qué me falta para hacer el lanzamiento esta semana?"

# Actualizar memoria
"Decidí que el nombre de la marca es [nombre]. Actualiza los agentes correspondientes."
```

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Estilos:** Tailwind CSS con paleta tierra personalizada
- **Animaciones:** Framer Motion
- **Estado:** Zustand (carrito)
- **Backend:** Supabase
- **Pagos:** MercadoPago
- **Tipografía:** Cormorant Garamond + DM Sans

---

## Arrancar el Proyecto

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.local .env.local.example
# Edita .env.local con tus credenciales de Supabase y MercadoPago

# Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

---

## Estructura de Archivos

```
/
├── CLAUDE.md                    ← Instrucciones para Claude Code
├── agents/
│   ├── memoria-global/          ← Contexto compartido
│   ├── orquestador/             ← Enrutador de agentes
│   ├── negocio/                 ← Precios y estrategia
│   ├── clientes/                ← CRM y segmentos
│   ├── dev/                     ← Stack y features
│   │   └── prompts/             ← Prompts listos para usar
│   ├── operaciones/             ← Pedidos y materiales
│   └── marketing/               ← Redes y contenido
├── app/
│   ├── layout.tsx               ← Fuentes y metadata global
│   ├── page.tsx                 ← Landing (placeholder)
│   └── shop/
│       ├── page.tsx             ← Catálogo (placeholder)
│       └── [slug]/page.tsx      ← Producto individual (placeholder)
├── components/
│   ├── ui/                      ← Componentes base propios
│   ├── landing/                 ← Secciones de la landing
│   └── shop/                    ← Tarjetas y filtros
├── lib/
│   ├── products.ts              ← 6 productos base tipados
│   └── mercadopago.ts           ← TODO: configurar
└── store/
    └── cart.ts                  ← Zustand store del carrito
```

---

## Qué Falta Construir

| Feature | Prioridad | Instrucción |
|---------|-----------|-------------|
| Landing page | Alta | Pega tu prompt en `/agents/dev/prompts/landing.md` y pide al agente Dev que la construya |
| Shop con filtros | Alta | Pide al agente Dev |
| Página de producto | Alta | Pide al agente Dev |
| Carrito funcional | Media | Pide al agente Dev |
| Checkout MercadoPago | Media | Configura `.env.local` primero |
| Dashboard interno | Baja | Pide al agente Dev |

### Variables de Entorno Requeridas

Edita `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=      # Proyecto en supabase.com
NEXT_PUBLIC_SUPABASE_ANON_KEY= # Clave pública de Supabase
MERCADOPAGO_ACCESS_TOKEN=      # Token de MercadoPago (modo test primero)
NEXT_PUBLIC_SITE_URL=          # URL de producción cuando esté listo
```

---

## Paleta de Colores

| Token | Hex | Uso |
|-------|-----|-----|
| `crema` | #FAF7F2 | Fondo principal |
| `arena` | #F5F0E8 | Fondo secundario / cards |
| `cafe` | #6B4C35 | Texto principal / headings |
| `cafe-claro` | #A07850 | Acentos / links |
| `carbon` | #1C1C1A | Texto oscuro |
| `humo` | #9E9A93 | Texto secundario |

---

> **Nota de seguridad:** La versión de Next.js 14 instalada tiene una vulnerabilidad conocida.
> Actualiza a `next@15` cuando estés listo para producción: `npm install next@latest`
