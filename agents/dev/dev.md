# Agente Dev

## Stack Tecnológico

| Capa | Tecnología | Versión | Notas |
|------|-----------|---------|-------|
| Framework | Next.js | 14 (App Router) | No Pages Router |
| Estilos | Tailwind CSS | 3.x | Config personalizada con paleta tierra |
| Animaciones | Framer Motion | latest | Para landing y transiciones |
| Estado | Zustand | latest | Solo para carrito |
| Base de datos | Supabase | latest | Auth + DB + Storage |
| Pagos | MercadoPago | latest | Checkout Pro o Bricks |
| Tipografía | Cormorant Garamond + DM Sans | — | Via Google Fonts |
| Icons | Lucide React | latest | |
| Lenguaje | TypeScript | strict | |

---

## Estructura del Proyecto

```
/
├── CLAUDE.md
├── agents/
│   ├── memoria-global/GLOBAL.md
│   ├── orquestador/ORQUESTADOR.md
│   ├── negocio/negocio.md
│   ├── clientes/clientes.md
│   ├── dev/dev.md
│   ├── dev/prompts/landing.md
│   ├── operaciones/operaciones.md
│   └── marketing/marketing.md
├── app/
│   ├── layout.tsx           ← fuentes Cormorant + DM Sans
│   ├── page.tsx             ← Landing (placeholder)
│   └── shop/
│       ├── page.tsx         ← Catálogo (placeholder)
│       └── [slug]/
│           └── page.tsx     ← Producto individual (placeholder)
├── components/
│   ├── ui/                  ← Botones, inputs, modales propios
│   ├── landing/             ← Secciones de la landing
│   └── shop/                ← Tarjetas, filtros, galería
├── lib/
│   ├── products.ts          ← Datos estáticos de productos
│   └── mercadopago.ts       ← Función createPreference()
├── store/
│   └── cart.ts              ← Zustand store del carrito
└── public/
```

---

## Decisiones Técnicas Tomadas

| Decisión | Razón | Fecha |
|----------|-------|-------|
| No usar shadcn/ui — componentes propios | Control total del diseño, estética muy específica de la marca | 2026-06-01 |
| Placeholders en lugar de imágenes externas | Sin fotos reales aún; evitar dependencias de terceros | 2026-06-01 |
| Zustand solo para carrito | Estado mínimo — no sobrediseñar | 2026-06-01 |
| Productos como datos estáticos en lib/products.ts | Simplicidad para lanzamiento; migrar a Supabase en v2 | 2026-06-01 |
| App Router (no Pages Router) | Estándar moderno de Next.js 14 | 2026-06-01 |
| MercadoPago (no Stripe) | Optimizado para México, sin complicaciones de fx | 2026-06-01 |

---

## Features Pendientes

| Feature | Prioridad | Estado | Notas |
|---------|-----------|--------|-------|
| Landing page completa | Alta | ✅ Completo | Navbar, Hero, ValueProps, FeaturedProducts, HowItWorks, ShopCTA, Footer |
| Shop con filtros por categoría | Alta | ✅ Completo | ShopClient con filtros sidebar (desktop) + chips (mobile), AnimatePresence |
| Página de producto con personalización | Alta | Pendiente | Campo de texto libre para nombre/frase |
| Carrito con Zustand | Media | Pendiente | |
| Checkout con MercadoPago | Media | Pendiente | |
| Dashboard interno (pedidos) | Baja | Pendiente | |
| Bot de notificaciones Telegram | Baja | Pendiente | Alertas de nuevo pedido |
| Integración Supabase (productos desde DB) | Baja | Pendiente | Actualmente datos estáticos |
| Reseñas de clientes | Baja | Pendiente | |

---

## Deuda Técnica

*(Llenar conforme avance el desarrollo)*

---

## Bugs Conocidos

*(Llenar conforme aparezcan)*

---

## Variables de Entorno Necesarias

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
MERCADOPAGO_ACCESS_TOKEN=
NEXT_PUBLIC_SITE_URL=
```
