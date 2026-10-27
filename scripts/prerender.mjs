// Genera HTML estático por idioma (dist/index.html y dist/es/index.html) para SEO y vistas previas de links.
// Se ejecuta después de `vite build` y `vite build --ssr` (ver "build" en package.json).
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const ssrDir = resolve(root, 'dist-ssr');

const SITE = 'https://javier-nunez.dev';
const PATHS = { en: '/', es: '/es/' };
const OG_IMAGES = { en: '/og-image-en.png', es: '/og-image-es.png' };

const { render, getMeta } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);
const template = readFileSync(resolve(dist, 'index.html'), 'utf8');

const esc = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const headFor = (lang) => {
  const meta = getMeta(lang);
  const url = SITE + PATHS[lang];
  const image = SITE + OG_IMAGES[lang];
  const otherLang = lang === 'en' ? 'es' : 'en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Javier Nuñez',
    url,
    jobTitle: lang === 'en' ? 'Full Stack & Mobile Developer' : 'Desarrollador Full Stack y Móvil',
    address: { '@type': 'PostalAddress', addressCountry: 'HN' },
    knowsLanguage: ['es', 'en'],
    sameAs: ['https://github.com/itsJaan', 'https://www.linkedin.com/in/javier-nunez-709318162/'],
  };

  return `<title>${esc(meta.title)}</title>
    <meta name="description" content="${esc(meta.description)}" />
    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="en" href="${SITE}${PATHS.en}" />
    <link rel="alternate" hreflang="es" href="${SITE}${PATHS.es}" />
    <link rel="alternate" hreflang="x-default" href="${SITE}${PATHS.en}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Javier Nuñez" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${esc(meta.title)}" />
    <meta property="og:description" content="${esc(meta.ogDescription)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="${meta.locale}" />
    <meta property="og:locale:alternate" content="${getMeta(otherLang).locale}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(meta.title)}" />
    <meta name="twitter:description" content="${esc(meta.ogDescription)}" />
    <meta name="twitter:image" content="${image}" />
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
};

for (const lang of ['en', 'es']) {
  const html = template
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace(/<!--meta:start-->[\s\S]*?<!--meta:end-->/, headFor(lang))
    .replace('<!--app-html-->', render(lang));

  const outDir = lang === 'en' ? dist : resolve(dist, 'es');
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, 'index.html'), html);
  console.log(`prerendered ${PATHS[lang]} (${(html.length / 1024).toFixed(1)} kB)`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${['en', 'es']
  .map(
    (lang) => `  <url>
    <loc>${SITE}${PATHS[lang]}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}${PATHS.en}" />
    <xhtml:link rel="alternate" hreflang="es" href="${SITE}${PATHS.es}" />
  </url>`,
  )
  .join('\n')}
</urlset>
`;
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap);
writeFileSync(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

rmSync(ssrDir, { recursive: true, force: true });
