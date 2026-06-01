# CLAUDE.md — MiMarca

> Este archivo es leído automáticamente por Claude Code en cada sesión.
> Es la fuente de verdad sobre el negocio, el stack y cómo operar.

---

## Quiénes Somos

**MiMarca** (nombre placeholder) es un negocio de personalización con Cricut Explore 4.
Vendemos productos personalizados hechos a mano:

- Vasos personalizados con vinilo
- Playeras con HTV / Iron-On
- Llaveros de acrílico
- Sets de etiquetas para fiestas
- Cajitas de regalo armadas
- Portavasos de acrílico

Enviamos a toda la república mexicana.
El dueño es dev full stack — construye y mantiene la plataforma.
La marca es minimalista, tonos tierra, elegante pero accesible.

---

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 14 (App Router) |
| Estilos | Tailwind CSS (paleta tierra personalizada) |
| Animaciones | Framer Motion |
| Estado | Zustand (solo carrito) |
| Backend / DB | Supabase |
| Pagos | MercadoPago |
| Tipografía | Cormorant Garamond + DM Sans |
| Icons | Lucide React |
| Lenguaje | TypeScript |

---

## Instrucción de Comportamiento

**Antes de responder cualquier pregunta:**

1. Identifica qué agente o agentes son relevantes para esa pregunta
2. Lee el archivo `.md` correspondiente en `/agents/`
3. Lee siempre `/agents/memoria-global/GLOBAL.md` como contexto base
4. Responde con ese contexto cargado

Si la pregunta toca múltiples agentes, actívalos todos y consolida la respuesta.

**Después de cada decisión importante:**
- Actualiza el `.md` del agente correspondiente
- Actualiza `/agents/memoria-global/GLOBAL.md`

---

## Mapa de Agentes

| Agente | Archivo | Cuándo activarlo |
|--------|---------|-----------------|
| Orquestador | `/agents/orquestador/ORQUESTADOR.md` | Siempre — punto de entrada |
| Memoria Global | `/agents/memoria-global/GLOBAL.md` | Siempre — contexto base |
| Negocio | `/agents/negocio/negocio.md` | Precios, catálogo, estrategia, márgenes |
| Clientes | `/agents/clientes/clientes.md` | CRM, seguimiento, segmentos, fidelización |
| Dev | `/agents/dev/dev.md` | Código, arquitectura, bugs, features, stack |
| Operaciones | `/agents/operaciones/operaciones.md` | Pedidos, materiales, stock, tiempos, envíos |
| Marketing | `/agents/marketing/marketing.md` | Redes, contenido, copy, campañas, temporadas |

---

## Regla de Memoria

Después de cada decisión importante:
1. Actualiza el `.md` del agente correspondiente (sección "Decisiones tomadas" o tabla relevante)
2. Actualiza la tabla de "Decisiones Importantes" en `/agents/memoria-global/GLOBAL.md`

No pierdas el contexto entre sesiones — la memoria está en los archivos.

---

## Paleta de Colores (Tailwind)

```ts
arena:        { DEFAULT: '#F5F0E8', dark: '#EAE3D2' }
crema:        { DEFAULT: '#FAF7F2', dark: '#F0EBE1' }
cafe:         { DEFAULT: '#6B4C35', dark: '#4A3224' }
cafe-claro:   { DEFAULT: '#A07850', dark: '#7D5C38' }
carbon:       { DEFAULT: '#1C1C1A', dark: '#0F0F0E' }
humo:         { DEFAULT: '#9E9A93', dark: '#6E6B65' }
```
