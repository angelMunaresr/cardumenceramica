# Diseño de páginas (desktop-first)

## Estilos globales
- Layout base: contenedor centrado `max-width: 1200px`, padding horizontal 24px, grid de 12 columnas para desktop.
- Tipografía (escala sugerida):
  - H1 32/40 semibold, H2 24/32 semibold, Body 16/24 regular, Small 14/20.
- Colores (tokens):
  - `--bg`: #0B0F14 (o #FFFFFF si tema claro)
  - `--surface`: #111827
  - `--text`: #E5E7EB
  - `--muted`: #9CA3AF
  - `--primary`: #2563EB
  - Estados: hover con elevación suave (shadow) + cambio de borde/overlay.
- Componentes comunes:
  - Botón primario: alto 40px, padding 0 16px, radio 10px.
  - Tarjeta: radio 14px, borde 1px (opcional), shadow sutil, hover: `transform: translateY(-2px)`.
  - Skeletons: bloques grises animados para carga.

## Página: Galería de productos

### Layout
- Sistema: CSS Grid híbrido.
- Estructura: header fijo/estático + contenido en secciones apiladas.
- Responsive:
  - Desktop: grid de tarjetas 4 columnas.
  - Tablet: 2–3 columnas.
  - Mobile: 1 columna.

### Meta information
- Title: "Galería de productos"
- Description: "Explora productos disponibles y abre su detalle."
- Open Graph: `og:title`, `og:description` alineados al Title/Description.

### Estructura de página
1. **Top Nav (simple)**
   - Izquierda: nombre del sitio / “Galería”.
   - Derecha (opcional): indicador de estado (p. ej. “Cargando…”).
2. **Encabezado de página**
   - H1: “Productos”.
   - Texto secundario corto (muted): “Selecciona un producto para ver su detalle”.
3. **Área de contenido: Grid de productos**
   - Contenedor con `display: grid; gap: 16px`.
   - Estados:
     - Cargando: grid con 8–12 skeleton cards.
     - Error: mensaje compacto + botón “Reintentar”.
     - Vacío: mensaje “No hay productos disponibles”.
4. **Tarjeta de producto (clickable)**
   - Imagen (ratio 4:3) con fallback si falta `image_url`.
   - Nombre (1–2 líneas con ellipsis).
   - Precio + moneda.
   - Interacción: toda la tarjeta es un enlace a `/producto/:id`.

## Página: Detalle de producto

### Layout
- Sistema: Grid de 2 columnas en desktop.
  - Columna izquierda: imagen.
  - Columna derecha: información.
- Responsive:
  - Tablet/mobile: columnas apiladas (imagen arriba).

### Meta information
- Title: "Detalle de producto"
- Description: "Información del producto seleccionado."
- Open Graph: `og:title` (nombre del producto), `og:image` (imagen principal si existe).

### Estructura de página
1. **Top Nav**
   - Botón/Link: “Volver” → `/`.
   - (Opcional) breadcrumb simple: “Productos / {Nombre}”.
2. **Estado de carga / error**
   - Cargando: skeleton de imagen + 3–4 líneas.
   - Error o no encontrado: mensaje claro + acción “Volver a la galería”.
3. **Detalle (contenido principal)**
   - Imagen grande con zoom visual (no funcional): borde + fondo neutro.
   - Nombre (H1/H2 según jerarquía global).
   - Precio destacado.
   - Descripción en bloque legible (anchura máxima ~60–70 caracteres por línea).
4. **Acciones**
   - Única acción requerida: “Volver a la galería” (botón secundario), redundante con el link superior para usabilidad.