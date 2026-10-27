# javier-nunez.dev

Portafolio personal de Javier Nuñez, en inglés (`/`) y español (`/es/`).

## Scripts

- `npm run dev`: servidor de desarrollo. La versión en español se ve en `/es/`.
- `npm run build`: build del cliente, luego build SSR, luego `scripts/prerender.mjs`. El resultado es `dist/index.html`, `dist/es/index.html`, `sitemap.xml` y `robots.txt`, todo con HTML pre-renderizado y meta tags por idioma.
- `npm run preview`: sirve `dist/`.

## Dónde editar

- **Textos:** `src/i18n/en.ts` y `src/i18n/es.ts`. Comparten el tipo `Content`, así que TypeScript avisa si falta alguna traducción.
- **Datos fijos** (correo, WhatsApp, redes, CVs): `src/data/profile.ts`.
- **Testimonios:** el arreglo `testimonials.items` en ambos archivos de idioma. La sección se oculta mientras esté vacío.
- **Imágenes de vista previa:** `public/og-image-en.png` y `public/og-image-es.png` (1200×630).
