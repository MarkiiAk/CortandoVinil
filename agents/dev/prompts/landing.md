# Prompt para Claude Code — Landing + Tienda de Personalización

---

## Contexto del proyecto

Estoy construyendo la landing page y tienda online de un negocio de personalización con Cricut Explore 4. Vendemos productos personalizados con nombre, texto o diseño: vasos con vinilo, playeras con HTV, llaveros, portavasos, stickers, etiquetas para fiestas y cajitas de regalo. Enviamos a toda la república mexicana.

El dueño es dev full stack, por lo que el proyecto debe estar bien estructurado, con código limpio y escalable desde el inicio.

---

## Stack tecnológico

- **Framework**: Next.js 14 con App Router
- **Estilos**: Tailwind CSS v3
- **Tipografía**: Google Fonts — `Cormorant Garamond` (headings, elegante) + `DM Sans` (body, limpio)
- **Animaciones**: Framer Motion para transiciones suaves
- **Iconos**: Lucide React
- **Pagos (fase 2)**: MercadoPago (dejar estructura lista, no implementar aún)
- **Deploy**: Vercel-ready (next.config.js limpio)

---

## Identidad visual

### Paleta de colores

```css
/* Definir en tailwind.config.js bajo theme.extend.colors */

arena:     { DEFAULT: '#F5F0E8', dark: '#EAE3D2' }
crema:     { DEFAULT: '#FAF7F2', dark: '#F0EBE1' }
cafe:      { DEFAULT: '#6B4C35', dark: '#4A3224' }
cafe-claro:{ DEFAULT: '#A07850', dark: '#7D5C38' }
carbon:    { DEFAULT: '#1C1C1A', dark: '#0F0F0E' }
humo:      { DEFAULT: '#9E9A93', dark: '#6E6B65' }
```

### Tipografía

- Headings: `font-cormorant` — italic para énfasis, regular para títulos
- Body: `font-dm` — 400 regular, 500 medium
- No usar nunca font-weight 700 o superior — se siente pesado
- Tamaños: h1=60px, h2=40px, h3=26px, body=16px, small=13px

### Estética general

- Fondo base: `#FAF7F2` (crema)
- Sin gradientes, sin sombras decorativas, sin bordes redondeados extremos (`rounded-lg` máximo)
- Mucho espacio en blanco — padding generoso (py-24 entre secciones mínimo)
- Fotografías: usar placeholders con `bg-arena` + ratio aspect fijo (no usar imágenes random de internet)
- Líneas separadoras sutiles: `border-cafe/10`
- Hover states: transición de opacidad o desplazamiento sutil (no cambios de color bruscos)

---

## Estructura de la landing (single page con scroll)

### 1. Navbar

- Logo (placeholder: texto de marca en Cormorant Garamond, italic)
- Links: Inicio · Productos · Cómo funciona · Contacto
- CTA derecha: botón "Ver tienda" — estilo ghost con borde café
- Sticky, fondo crema con `backdrop-blur-sm` al hacer scroll
- Mobile: hamburger menu

### 2. Hero

- Layout: dos columnas en desktop, stack en mobile
- Columna izquierda:
  - Eyebrow tag: "Hecho a mano · Enviamos a todo México"
  - H1: algo como "Tu nombre, tu estilo, tu historia" (en Cormorant italic)
  - Subtítulo (DM Sans): breve descripción del negocio, máximo 2 líneas
  - Dos CTAs: "Ver productos" (primario, fondo café) + "Cómo funciona" (ghost)
- Columna derecha:
  - Grid de 2x2 con 4 placeholders de productos (aspect-square, bg-arena, con etiqueta del producto centrada en humo)
- Fondo: crema, sin imágenes de fondo ni gradientes

### 3. Propuesta de valor (3 columnas)

- Título de sección centrado: "¿Por qué elegirnos?"
- 3 cards horizontales:
  1. **Personalización real** — cada pieza es única, tú decides el texto y el diseño
  2. **Envío a todo México** — empaque cuidado, seguimiento incluido
  3. **Hecho con tecnología** — proceso digital a físico, sin errores ni retrasos
- Sin iconos genéricos — usar números grandes en Cormorant (01, 02, 03) como elemento visual

### 4. Productos destacados

- Título: "Lo que hacemos"
- Grid de 3 columnas en desktop, 2 en tablet, 1 en mobile
- 6 tarjetas de producto con:
  - Placeholder imagen (aspect-[4/5], bg-arena-dark)
  - Nombre del producto
  - Descripción corta (1 línea)
  - Precio desde: "$XXX MXN"
  - Badge opcional: "Personalizable" en café-claro/10 con texto café
  - Botón: "Personalizar" → enlaza a `/shop` (por ahora)
- Productos a mostrar:
  1. Vaso personalizado con nombre
  2. Playera con texto o frase
  3. Llavero personalizado
  4. Set de etiquetas para fiesta
  5. Cajita de regalo armada
  6. Portavasos grabado

### 5. Cómo funciona

- Título: "Así de fácil"
- 4 pasos horizontales con línea conectora entre ellos:
  1. Elige tu producto
  2. Personaliza — texto, nombre o frase
  3. Paga seguro — MercadoPago
  4. Lo recibís en casa
- Cada paso: número en Cormorant grande, título, descripción corta
- En mobile: stack vertical

### 6. Sección de tienda (anchor #tienda)

- Título: "Tienda"
- Párrafo corto explicando que tienen catálogo completo con más opciones
- Botón grande centrado: "Ir a la tienda →" que enlaza a `/shop`
- Fondo ligeramente diferente: `bg-arena` para distinguirla visualmente

### 7. Footer

- Logo + tagline corto
- Columnas: Productos · Info (envíos, devoluciones, contacto) · Redes sociales
- Copyright
- Fondo: `bg-carbon`, texto `text-crema/70`

---

## Página `/shop` (estructura base)

- Misma navbar
- Header de página: "Tienda" en h1 Cormorant
- Filtros laterales en desktop (por categoría: vasos, playeras, llaveros, fiestas, packaging)
- Grid de productos igual al de landing pero con más items
- Cada card lleva a `/shop/[producto-slug]`
- Por ahora los productos son estáticos en un archivo `lib/products.ts`

### Estructura de un producto en `lib/products.ts`

```typescript
export interface Product {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  basePrice: number          // en MXN
  category: 'vasos' | 'ropa' | 'llaveros' | 'fiestas' | 'packaging'
  customizationFields: CustomizationField[]
  images: string[]           // paths o placeholders por ahora
  available: boolean
}

export interface CustomizationField {
  id: string
  label: string
  type: 'text' | 'select' | 'color'
  required: boolean
  maxLength?: number
  options?: string[]         // para type: 'select'
}
```

---

## Página `/shop/[slug]` — detalle de producto

- Imagen principal + thumbnails (placeholders)
- Nombre, precio, descripción
- **Formulario de personalización dinámico** — renderizar los `customizationFields` del producto
  - Campo de texto: input con contador de caracteres
  - Select: dropdown estilizado
  - Color: swatches visuales
- Preview en vivo (fase 2) — dejar el contenedor reservado con comentario `// TODO: live preview`
- Botón "Agregar al carrito" — por ahora solo un `console.log` del pedido formado, con TODO comment
- Sección de información: envíos, tiempos de producción (3-5 días hábiles), cuidados del producto

---

## Carrito y checkout (estructura base solamente)

- Estado global del carrito con Zustand (`store/cart.ts`)
- `CartItem` incluye: producto, campos de personalización resueltos, cantidad, precio
- Componente `<CartDrawer />` — slide desde la derecha
- Página `/checkout` — formulario de datos de envío + resumen
- Integración MercadoPago: dejar función `createPreference()` en `lib/mercadopago.ts` con TODO

---

## Estructura de carpetas esperada

```
/app
  /shop
    /[slug]
      page.tsx
    page.tsx
  page.tsx          ← landing
  layout.tsx
/components
  /ui               ← componentes base (Button, Badge, Input, etc.)
  /landing          ← secciones de la landing (Hero, HowItWorks, etc.)
  /shop             ← ProductCard, ProductGrid, CartDrawer, etc.)
/lib
  products.ts       ← catálogo estático
  mercadopago.ts    ← TODO
/store
  cart.ts           ← Zustand
/public
  /images           ← vacío por ahora, usar placeholders en código
```

---

## Instrucciones adicionales para Claude Code

1. **No uses componentes de shadcn/ui** — construye los componentes base a mano para mantener control total del diseño
2. **Placeholders de imagen**: usar divs con `bg-arena aspect-[proporción]` y una etiqueta centrada en lugar de `<img>` con URLs externas
3. **Responsive primero**: diseña mobile-first, luego expande con `md:` y `lg:`
4. **Comentarios TODO** donde se integrará funcionalidad futura (live preview, pagos, API)
5. **Animaciones con Framer Motion**: solo en hero (fade-in al cargar) y en las tarjetas de producto (slight scale en hover). Nada exagerado
6. **Sin lorem ipsum** — usar textos reales del negocio aunque sean placeholder: productos reales, categorías reales, precios aproximados en MXN
7. **El código debe ser tuyo** — no copies boilerplates genéricos, construye desde cero con este diseño específico
8. **Accesibilidad básica**: `alt` en imágenes, `aria-label` en botones sin texto, semántica HTML correcta
9. **Dark mode**: NO implementar por ahora, el diseño es light-only

---

## Frase de arranque para Claude Code

> "Construye este proyecto Next.js 14 con App Router desde cero siguiendo exactamente las especificaciones de diseño, estructura y stack descritas. Empieza por: (1) inicializar el proyecto, (2) configurar Tailwind con la paleta y tipografías, (3) construir el layout base y la landing completa sección por sección. Cuando termines la landing, avanza a `/shop`. No me preguntes, avanza."