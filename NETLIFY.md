# Despliegue en Netlify

Este repositorio contiene 6 proyectos Vite independientes. Para subirlos a Netlify, debes crear un sitio por cada carpeta `plantillaN`.

## Configuracion aplicada en el codigo

Se dejo cada plantilla lista para Netlify con estos cambios:

- `BrowserRouter` usa `VITE_BASE_PATH` en lugar de un `basename` fijo.
- `vite.config.ts` usa `VITE_BASE_PATH` para construir los assets correctamente.
- Cada plantilla incluye su propio `netlify.toml` con build, publish y redirect SPA.

Valor por defecto:

- `VITE_BASE_PATH=/`

Con eso cada plantilla funciona publicada en la raiz de su sitio de Netlify.

## Como crear cada sitio en Netlify

Debes crear 6 sitios distintos, todos apuntando al mismo repositorio, pero cambiando el `Base directory`.

### Sitio 1

- Nombre sugerido: `plantilla1-logosperu`
- Base directory: `plantilla1`
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`

### Sitio 2

- Nombre sugerido: `plantilla2-logosperu`
- Base directory: `plantilla2`
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`

### Sitio 3

- Nombre sugerido: `plantilla3-logosperu`
- Base directory: `plantilla3`
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`

### Sitio 4

- Nombre sugerido: `plantilla4-logosperu`
- Base directory: `plantilla4`
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`

### Sitio 5

- Nombre sugerido: `plantilla5-logosperu`
- Base directory: `plantilla5`
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`

### Sitio 6

- Nombre sugerido: `plantilla6-logosperu`
- Base directory: `plantilla6`
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`

## Variables de entorno en Netlify

En cada sitio, revisa en:

- `Site configuration > Environment variables`

Configura como minimo:

- `VITE_BASE_PATH=/`

Opcionalmente, puedes agregar:

- `NODE_VERSION=20`

## Redirects para SPA

Cada plantilla ya incluye este redirect en su `netlify.toml`:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Eso permite que React Router funcione correctamente al refrescar rutas.

## Si quieres publicar en una subruta

Si una plantilla no va en la raiz del dominio sino en una subruta, cambia `VITE_BASE_PATH` en Netlify.

Ejemplos:

- `VITE_BASE_PATH=/plantilla1/`
- `VITE_BASE_PATH=/landing/transport/`

Despues de cambiar esa variable, vuelve a desplegar el sitio.

## Flujo recomendado en Netlify

1. Importa el repositorio en Netlify.
2. Crea un sitio por cada plantilla.
3. Define el `Base directory` correcto.
4. Verifica que `Build command` sea `npm run build`.
5. Verifica que `Publish directory` sea `dist`.
6. Agrega `VITE_BASE_PATH=/` en variables de entorno.
7. Ejecuta el deploy.

## Nota importante

No conviene desplegar todo el repositorio como un solo sitio de Netlify porque cada plantilla es una app independiente con su propio build.