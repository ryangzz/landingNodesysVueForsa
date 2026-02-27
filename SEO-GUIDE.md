# Guía Completa de Optimización SEO para Landing Pages (Vue.js + Netlify)

> **Autor:** Kernesys  
> **Fecha de creación:** 26 de febrero de 2026  
> **Aplicado en:** [kernesys.com](https://www.kernesys.com)  
> **Stack:** Vue.js 3 + Vue CLI + Netlify

---

## Índice

1. [Paso 1: Corregir el idioma del HTML](#paso-1-corregir-el-idioma-del-html)
2. [Paso 2: Meta Tags Básicos de SEO](#paso-2-meta-tags-básicos-de-seo)
3. [Paso 3: Meta Tags de Geolocalización](#paso-3-meta-tags-de-geolocalización)
4. [Paso 4: Open Graph (Facebook, LinkedIn, WhatsApp)](#paso-4-open-graph-facebook-linkedin-whatsapp)
5. [Paso 5: Twitter Card](#paso-5-twitter-card)
6. [Paso 6: Datos Estructurados JSON-LD](#paso-6-datos-estructurados-json-ld)
7. [Paso 7: Contenido Noscript para Crawlers](#paso-7-contenido-noscript-para-crawlers)
8. [Paso 8: Crear robots.txt](#paso-8-crear-robotstxt)
9. [Paso 9: Crear sitemap.xml](#paso-9-crear-sitemapxml)
10. [Paso 10: Configurar netlify.toml](#paso-10-configurar-netlifytoml)
11. [Paso 11: Optimizar Imágenes (alt tags)](#paso-11-optimizar-imágenes-alt-tags)
12. [Paso 12: Configurar vue.config.js](#paso-12-configurar-vueconfigjs)
13. [Paso 13: Verificación y Testing](#paso-13-verificación-y-testing)
14. [Paso 14: Google Search Console](#paso-14-google-search-console)
15. [Errores Comunes y Soluciones](#errores-comunes-y-soluciones)
16. [Checklist Final](#checklist-final)

---

## Paso 1: Corregir el idioma del HTML

**Archivo:** `public/index.html`

El atributo `lang` del `<html>` debe coincidir con el idioma principal de la página. **Nunca** usar `"zxx"` (sin contenido lingüístico).

```html
<!-- ❌ ANTES (incorrecto) -->
<html lang="zxx">

<!-- ✅ DESPUÉS (correcto) -->
<html lang="es" prefix="og: https://ogp.me/ns#">
```

> **Nota:** El atributo `prefix` es necesario para que las etiquetas Open Graph sean semánticamente válidas.

---

## Paso 2: Meta Tags Básicos de SEO

**Archivo:** `public/index.html` → dentro de `<head>`

### Title

El título debe tener entre 50-60 caracteres idealmente. Incluir: marca + servicio principal + ubicación.

```html
<title>[MARCA] | [SERVICIO PRINCIPAL] en [UBICACIÓN] | [KEYWORDS SECUNDARIAS]</title>

<!-- Ejemplo real -->
<title>Kernesys | Desarrollo de Software a la Medida en Monterrey, México | ERP, CRM, Apps Móviles</title>
```

### Meta Description

Entre 150-160 caracteres. Debe incluir keywords principales y un call-to-action implícito.

```html
<meta name="description" content="[MARCA] es una [TIPO DE EMPRESA] en [UBICACIÓN]. Ofrecemos [SERVICIOS]. [DIFERENCIADOR] desde [AÑO]." />
```

### Meta Keywords

Incluir todas las variaciones de búsqueda posibles (español, inglés, abreviaciones).

```html
<meta name="keywords" content="desarrollo de software, desarrollo web, diseño web, aplicaciones móviles, ERP, CRM, CMS, e-commerce, ecommerce, comercio electrónico, integraciones de sistemas, automatización de procesos, software a la medida, consultora de software, [MARCA], [TECNOLOGÍAS], [UBICACIÓN]" />
```

### Metas de Control y Rastreo

```html
<meta name="author" content="[MARCA] - [TIPO]" />
<meta name="copyright" content="[MARCA] © [AÑO_INICIO]-[AÑO_ACTUAL]" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="bingbot" content="index, follow" />
<meta name="rating" content="general" />
<meta name="distribution" content="global" />
<meta name="revisit-after" content="7 days" />
<meta name="language" content="es" />
<meta name="coverage" content="Worldwide" />
<meta name="target" content="all" />
```

### Metas de Dispositivos Móviles

```html
<meta name="HandheldFriendly" content="True" />
<meta name="MobileOptimized" content="320" />
<meta name="theme-color" content="#074d7e" />  <!-- Color principal de tu marca -->
<meta name="msapplication-TileColor" content="#074d7e" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="[MARCA]" />
<meta name="application-name" content="[MARCA]" />
<meta name="format-detection" content="telephone=yes" />
```

### Metas de Clasificación

```html
<meta name="subject" content="[ÁREA PRINCIPAL DE NEGOCIO]" />
<meta name="abstract" content="[RESUMEN CORTO DE LA EMPRESA Y SERVICIOS]" />
<meta name="classification" content="Business, Technology, Software Development" />
<meta name="category" content="Technology" />
```

### URL Canónica

```html
<link rel="canonical" href="https://www.[DOMINIO].com/" />
```

### Hreflang (idiomas y regiones)

```html
<link rel="alternate" hreflang="es" href="https://www.[DOMINIO].com/" />
<link rel="alternate" hreflang="es-MX" href="https://www.[DOMINIO].com/" />
<link rel="alternate" hreflang="x-default" href="https://www.[DOMINIO].com/" />
```

---

## Paso 3: Meta Tags de Geolocalización

Obtener las coordenadas exactas de la ubicación desde [Google Maps](https://maps.google.com).

```html
<meta name="geo.region" content="MX-NLE" />  <!-- Código ISO del estado/región -->
<meta name="geo.placename" content="Monterrey, Nuevo León, México" />
<meta name="geo.position" content="25.6866;-100.3161" />  <!-- latitud;longitud -->
<meta name="ICBM" content="25.6866, -100.3161" />  <!-- latitud, longitud -->
```

> **Referencia de códigos de región:** [ISO 3166-2](https://es.wikipedia.org/wiki/ISO_3166-2:MX)

---

## Paso 4: Open Graph (Facebook, LinkedIn, WhatsApp)

Estas metas controlan cómo se ve tu enlace cuando alguien lo comparte.

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="[MARCA]" />
<meta property="og:title" content="[TÍTULO SIMILAR AL <title>]" />
<meta property="og:description" content="[DESCRIPCIÓN CORTA]" />
<meta property="og:url" content="https://www.[DOMINIO].com/" />
<meta property="og:image" content="https://www.[DOMINIO].com/img/[IMAGEN-OG].png" />
<meta property="og:image:alt" content="[DESCRIPCIÓN DE LA IMAGEN]" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="es_MX" />
<meta property="og:locale:alternate" content="es_ES" />
<meta property="og:locale:alternate" content="en_US" />
```

> **Importante:** La imagen OG ideal es de **1200x630 px**. Si no tienes una imagen específica, usa el logo sobre un fondo del color de tu marca.

> **Actualización aplicada:** Si tu logo principal es blanco y se pierde en previews, usa una versión oscura (por ejemplo `logoblack.png`) para `og:image`, `twitter:image`, `logo/image` en JSON-LD y también en `sitemap.xml`.

---

## Paso 5: Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[TÍTULO]" />
<meta name="twitter:description" content="[DESCRIPCIÓN]" />
<meta name="twitter:image" content="https://www.[DOMINIO].com/img/[IMAGEN].png" />
<meta name="twitter:image:alt" content="[DESCRIPCIÓN DE LA IMAGEN]" />
<meta name="twitter:site" content="@[USUARIO_TWITTER]" />
<meta name="twitter:creator" content="@[USUARIO_TWITTER]" />
```

---

## Paso 6: Datos Estructurados JSON-LD

Los datos estructurados permiten a Google mostrar **rich snippets** (resultados enriquecidos). Se colocan dentro de `<head>` en scripts `type="application/ld+json"`.

### Schema 1: Organization

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[MARCA]",
  "alternateName": ["[VARIANTE 1]", "[VARIANTE 2]"],
  "url": "https://www.[DOMINIO].com",
  "logo": "https://www.[DOMINIO].com/img/logo.png",
  "image": "https://www.[DOMINIO].com/img/logo.png",
  "description": "[DESCRIPCIÓN COMPLETA]",
  "foundingDate": "[AÑO]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[CIUDAD]",
    "addressRegion": "[ESTADO]",
    "addressCountry": "[CÓDIGO PAÍS ISO]"
  },
  "location": {
    "@type": "Place",
    "name": "[CIUDAD], [ESTADO], [PAÍS]",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "[LATITUD]",
      "longitude": "[LONGITUD]"
    }
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+[CÓDIGO]-[TELÉFONO]",
      "contactType": "sales",
      "email": "[EMAIL]",
      "availableLanguage": ["Spanish", "English"],
      "areaServed": "Worldwide"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/[PÁGINA]/",
    "https://www.instagram.com/[USUARIO]/",
    "https://www.linkedin.com/company/[EMPRESA]/"
  ],
  "knowsAbout": [
    "[TEMA 1]", "[TEMA 2]", "[TEMA 3]"
  ]
}
</script>
```

> **Importante:** En `Organization`, evita usar `"geo"` directamente. Para pasar validadores (Schema.org / Rich Results), usa `"location"` con un objeto `Place` que contenga `"geo"`.

### Schema 2: ProfessionalService (Negocio Local)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "[MARCA]",
  "image": "https://www.[DOMINIO].com/img/logo.png",
  "url": "https://www.[DOMINIO].com",
  "telephone": "+[TELÉFONO]",
  "email": "[EMAIL]",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "[CIUDAD]",
    "addressRegion": "[ESTADO]",
    "addressCountry": "[CÓDIGO PAÍS]"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[LAT]",
    "longitude": "[LON]"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "[NOMBRE DEL CATÁLOGO]",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "[SERVICIO 1]",
          "description": "[DESCRIPCIÓN DEL SERVICIO]"
        }
      }
      // Repetir por cada servicio...
    ]
  }
}
</script>
```

### Schema 3: WebSite

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "[MARCA]",
  "url": "https://www.[DOMINIO].com",
  "description": "[DESCRIPCIÓN]",
  "publisher": {
    "@type": "Organization",
    "name": "[MARCA]"
  },
  "inLanguage": ["es", "en"]
}
</script>
```

### Schema 4: WebPage

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "[NOMBRE DE LA PÁGINA]",
  "description": "[DESCRIPCIÓN]",
  "url": "https://www.[DOMINIO].com",
  "isPartOf": {
    "@type": "WebSite",
    "name": "[MARCA]",
    "url": "https://www.[DOMINIO].com"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.[DOMINIO].com"
      }
    ]
  }
}
</script>
```

### Schema 5: FAQPage (genera rich snippets de preguntas)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿[PREGUNTA FRECUENTE]?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[RESPUESTA COMPLETA]"
      }
    }
    // Repetir por cada FAQ (5-10 preguntas ideales)
  ]
}
</script>
```

---

## Paso 7: Contenido Noscript para Crawlers

**Archivo:** `public/index.html` → dentro del `<div id="app">`

Las SPAs (Single Page Applications) como Vue.js renderizan con JavaScript. Algunos crawlers no ejecutan JS. El `<noscript>` proporciona contenido HTML estático para estos casos.

```html
<div id="app">
  <noscript>
    <div style="padding: 40px; max-width: 900px; margin: 0 auto;">
      <h1>[MARCA] - [SERVICIO PRINCIPAL] en [UBICACIÓN]</h1>
      <p>[DESCRIPCIÓN COMPLETA DE LA EMPRESA]</p>
      <h2>Nuestros Servicios</h2>
      <ul>
        <li><strong>[SERVICIO 1]:</strong> [DESCRIPCIÓN]</li>
        <li><strong>[SERVICIO 2]:</strong> [DESCRIPCIÓN]</li>
        <!-- Todos los servicios -->
      </ul>
      <h2>Tecnologías</h2>
      <p>[LISTA DE TECNOLOGÍAS]</p>
      <h2>Contacto</h2>
      <p>Email: <a href="mailto:[EMAIL]">[EMAIL]</a></p>
      <p>Teléfono: <a href="tel:[TELÉFONO]">[TELÉFONO]</a></p>
      <p>Ubicación: [DIRECCIÓN]</p>
      <p>Web: <a href="https://www.[DOMINIO].com">www.[DOMINIO].com</a></p>
    </div>
  </noscript>
</div>
```

---

## Paso 8: Crear robots.txt

**Archivo:** `public/robots.txt`

```txt
# Robots.txt para [MARCA] - www.[DOMINIO].com

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$

# Sitemap
Sitemap: https://www.[DOMINIO].com/sitemap.xml

# Google
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 2

# Google Images
User-agent: Googlebot-Image
Allow: /img/
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.webp$
Allow: /*.svg$
```

---

## Paso 9: Crear sitemap.xml

**Archivo:** `public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Página Principal -->
  <url>
    <loc>https://www.[DOMINIO].com/</loc>
    <lastmod>[FECHA-YYYY-MM-DD]</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="es" href="https://www.[DOMINIO].com/" />
    <xhtml:link rel="alternate" hreflang="es-MX" href="https://www.[DOMINIO].com/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.[DOMINIO].com/" />
    <image:image>
      <image:loc>https://www.[DOMINIO].com/img/logo.png</image:loc>
      <image:caption>[DESCRIPCIÓN DEL LOGO]</image:caption>
      <image:title>[TÍTULO]</image:title>
    </image:image>
  </url>

  <!-- Secciones adicionales (anclas) -->
  <url>
    <loc>https://www.[DOMINIO].com/#services</loc>
    <lastmod>[FECHA]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Repetir para cada sección importante -->

</urlset>
```

> **Importante:** Actualizar `<lastmod>` cada vez que se haga un cambio significativo en la página.

---

## Paso 10: Configurar netlify.toml

**Archivo:** `netlify.toml`

```toml
# ===== Headers de seguridad y SEO =====
[[headers]]
  for = "/*"
  [headers.values]
    Access-Control-Allow-Origin = "*"
    Access-Control-Allow-Methods = "GET, POST, OPTIONS"
    Access-Control-Allow-Headers = "Content-Type, Authorization"
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=(self)"
    X-XSS-Protection = "1; mode=block"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"

# ===== Cache para assets estáticos =====
[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/img/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/fonts/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# ===== Sitemap y robots accesibles =====
[[headers]]
  for = "/sitemap.xml"
  [headers.values]
    Content-Type = "application/xml; charset=utf-8"
    Cache-Control = "public, max-age=3600"

[[headers]]
  for = "/robots.txt"
  [headers.values]
    Content-Type = "text/plain; charset=utf-8"
    Cache-Control = "public, max-age=3600"

# ===== SPA fallback para Vue Router =====
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

> **Actualización aplicada:** Para evitar URLs con `/#/`, usar `createWebHistory(process.env.BASE_URL)` en el router (no `createWebHashHistory()`).

### ⚠️ CUIDADO: No agregar redirección www en netlify.toml

**NO** agregar redirección de `dominio.com` → `www.dominio.com` en `netlify.toml` si ya está configurada en Netlify Dashboard. Esto causa **ERR_TOO_MANY_REDIRECTS** (loop de redirecciones).

La redirección www/non-www se configura SOLO desde:
**Netlify Dashboard → Domain management → Production domains → Seleccionar dominio primario**

---

## Paso 11: Optimizar Imágenes (alt tags)

Cada imagen debe tener un atributo `alt` descriptivo que incluya keywords relevantes.

### Formato recomendado:

```html
<!-- ❌ MAL -->
<img src="img/logo.png" alt="" />
<img src="img/photo.png" alt="image" />
<img src="img/slide.jpg" alt="slider-bg 1" />

<!-- ✅ BIEN -->
<img src="img/logo.png" alt="[MARCA] - [TIPO DE EMPRESA] en [UBICACIÓN]" width="180" height="50" />
<img src="img/about.png" alt="[MARCA] - [DESCRIPCIÓN RELEVANTE DE LO QUE MUESTRA LA IMAGEN]" />
<img src="img/slide.jpg" alt="[MARCA] - [KEYWORD DEL SERVICIO PRINCIPAL]" />
```

### Reglas:
- **Nunca** dejar `alt=""` vacío (excepto imágenes decorativas puras)
- **Nunca** usar `alt="image"` o `alt="photo"` genéricos
- Incluir **marca + keyword** en el alt
- Agregar `width` y `height` para evitar layout shift (CLS)
- Máximo ~125 caracteres por alt

### Archivos modificados en nuestro caso:
- `headerComponent.vue` → logo
- `sliderComponent.vue` → 3 imágenes de slides
- `aboutComponent.vue` → 4 imágenes (about + iconos)
- `servicesComponent.vue` → 6 imágenes de servicios
- `tech-stack.component.vue` → imagen del stack

---

## Paso 12: Configurar vue.config.js

**Archivo:** `vue.config.js`

```javascript
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '[TÍTULO SEO COMPLETO]'
      args[0].meta = {
        description: '[META DESCRIPTION]'
      }
      return args
    })
  },

  // No generar source maps en producción (reduce tamaño del deploy)
  productionSourceMap: false,
  
  devServer: {
    historyApiFallback: true
  }
})
```

---

## Paso 13: Verificación y Testing

### 13.1 Herramientas Online

| Qué verifica | URL |
|---|---|
| **Rich Results (Google)** - Valida JSON-LD | https://search.google.com/test/rich-results |
| **Schema Validator** - Valida datos estructurados | https://validator.schema.org/ |
| **Facebook Open Graph Debugger** | https://developers.facebook.com/tools/debug/ |
| **Twitter Card Validator** | https://cards-dev.twitter.com/validator |
| **PageSpeed Insights / Core Web Vitals** | https://pagespeed.web.google.com/ |
| **Mobile Friendly Test** | https://search.google.com/test/mobile-friendly |
| **Security Headers** | https://securityheaders.com/ |
| **SEO General Audit** | https://www.seobility.net/en/seocheck/ |

### 13.2 Verificar desde view-source

Escribir en el navegador:
```
view-source:https://www.[DOMINIO].com/
```
Verificar que todos los `<meta>`, `<link>`, `<script type="application/ld+json">` y `<title>` aparezcan correctamente.

### 13.3 Verificar robots.txt y sitemap.xml

Navegar directamente a:
```
https://www.[DOMINIO].com/robots.txt
https://www.[DOMINIO].com/sitemap.xml
```

### 13.4 Script de consola para verificar todo de un vistazo

Abrir DevTools (F12) → Console → Pegar:

```javascript
// ========== VERIFICADOR SEO COMPLETO ==========

console.log('═══════════════════════════════════');
console.log('    🔍 VERIFICACIÓN SEO COMPLETA');
console.log('═══════════════════════════════════');

// Title
const title = document.title;
console.log(`\n📌 TITLE (${title.length} chars, ideal: 50-60):`);
console.log(`   ${title}`);
console.log(`   ${title.length <= 60 ? '✅ Longitud OK' : '⚠️ Demasiado largo'}`);

// Meta Description
const desc = document.querySelector('meta[name="description"]')?.content;
console.log(`\n📝 DESCRIPTION (${desc?.length || 0} chars, ideal: 150-160):`);
console.log(`   ${desc || '❌ NO ENCONTRADA'}`);

// Canonical
const canonical = document.querySelector('link[rel="canonical"]')?.href;
console.log(`\n🔗 CANONICAL: ${canonical || '❌ NO ENCONTRADA'}`);

// Robots
const robots = document.querySelector('meta[name="robots"]')?.content;
console.log(`\n🤖 ROBOTS: ${robots || '❌ NO ENCONTRADA'}`);

// Keywords
const keywords = document.querySelector('meta[name="keywords"]')?.content;
console.log(`\n🔑 KEYWORDS: ${keywords ? `${keywords.split(',').length} keywords encontradas` : '❌ NO ENCONTRADAS'}`);

// Hreflang
console.log('\n🌐 HREFLANG:');
const hreflangs = document.querySelectorAll('link[hreflang]');
hreflangs.length > 0 
  ? hreflangs.forEach(l => console.log(`   ✅ ${l.hreflang} → ${l.href}`))
  : console.log('   ❌ No encontrados');

// Geo
console.log('\n📍 GEOLOCALIZACIÓN:');
const geoRegion = document.querySelector('meta[name="geo.region"]')?.content;
const geoPlace = document.querySelector('meta[name="geo.placename"]')?.content;
const geoPos = document.querySelector('meta[name="geo.position"]')?.content;
console.log(`   Region: ${geoRegion || '❌'}`);
console.log(`   Place: ${geoPlace || '❌'}`);
console.log(`   Position: ${geoPos || '❌'}`);

// Open Graph
console.log('\n🟦 OPEN GRAPH:');
const ogTags = document.querySelectorAll('meta[property^="og:"]');
ogTags.length > 0
  ? ogTags.forEach(m => console.log(`   ✅ ${m.getAttribute('property')}: ${m.content.substring(0, 80)}`))
  : console.log('   ❌ No encontrados');

// Twitter Card
console.log('\n🐦 TWITTER CARD:');
const twTags = document.querySelectorAll('meta[name^="twitter:"]');
twTags.length > 0
  ? twTags.forEach(m => console.log(`   ✅ ${m.getAttribute('name')}: ${m.content.substring(0, 80)}`))
  : console.log('   ❌ No encontrados');

// JSON-LD Schemas
console.log('\n📊 DATOS ESTRUCTURADOS (JSON-LD):');
const schemas = document.querySelectorAll('script[type="application/ld+json"]');
if (schemas.length > 0) {
  schemas.forEach((s, i) => {
    try {
      const data = JSON.parse(s.textContent);
      console.log(`   ✅ Schema ${i + 1}: ${data['@type']}`);
      if (data['@type'] === 'FAQPage') {
        console.log(`      → ${data.mainEntity?.length || 0} preguntas FAQ`);
      }
      if (data['@type'] === 'ProfessionalService' && data.hasOfferCatalog) {
        console.log(`      → ${data.hasOfferCatalog.itemListElement?.length || 0} servicios`);
      }
    } catch (e) {
      console.log(`   ❌ Schema ${i + 1}: Error de parseo JSON`);
    }
  });
} else {
  console.log('   ❌ No encontrados');
}

// Imágenes sin alt
console.log('\n🖼️ IMÁGENES:');
const imgs = document.querySelectorAll('img');
const noAlt = [...imgs].filter(i => !i.alt || i.alt === '' || i.alt === 'image');
console.log(`   Total: ${imgs.length}`);
console.log(`   Sin alt válido: ${noAlt.length}`);
noAlt.forEach(i => console.log(`   ❌ ${i.src.split('/').pop()}: alt="${i.alt}"`));

// Theme color
const theme = document.querySelector('meta[name="theme-color"]')?.content;
console.log(`\n🎨 THEME COLOR: ${theme || '❌ NO ENCONTRADO'}`);

// Noscript
const noscript = document.querySelector('noscript');
console.log(`\n📄 NOSCRIPT FALLBACK: ${noscript ? '✅ Presente' : '❌ No encontrado'}`);

// Favicons
const favicon = document.querySelector('link[rel="icon"]');
const appleTI = document.querySelector('link[rel="apple-touch-icon"]');
console.log(`\n🔖 FAVICONS:`);
console.log(`   Icon: ${favicon ? '✅' : '❌'}`);
console.log(`   Apple Touch: ${appleTI ? '✅' : '❌'}`);

// Resumen
console.log('\n═══════════════════════════════════');
console.log('    📋 RESUMEN');
console.log('═══════════════════════════════════');
let score = 0;
const checks = [
  [!!title && title.length > 10, 'Title'],
  [!!desc && desc.length > 50, 'Description'],
  [!!canonical, 'Canonical URL'],
  [!!robots, 'Meta Robots'],
  [!!keywords, 'Keywords'],
  [hreflangs.length >= 2, 'Hreflang'],
  [!!geoRegion, 'Geolocalización'],
  [ogTags.length >= 5, 'Open Graph'],
  [twTags.length >= 4, 'Twitter Card'],
  [schemas.length >= 3, 'JSON-LD Schemas'],
  [noAlt.length === 0, 'Alt tags completos'],
  [!!theme, 'Theme Color'],
  [!!noscript, 'Noscript Fallback'],
  [!!favicon, 'Favicon']
];
checks.forEach(([pass, name]) => {
  console.log(`   ${pass ? '✅' : '❌'} ${name}`);
  if (pass) score++;
});
console.log(`\n   🏆 SCORE: ${score}/${checks.length} (${Math.round(score/checks.length*100)}%)`);
console.log('═══════════════════════════════════');
```

---

## Paso 14: Google Search Console

1. Ir a [Google Search Console](https://search.google.com/search-console)
2. **Agregar propiedad** → Tipo "Prefijo de URL" → `https://www.[DOMINIO].com/`
3. **Verificar propiedad** (DNS, HTML tag, o archivo HTML)
4. **Sitemaps** → Enviar: `https://www.[DOMINIO].com/sitemap.xml`
5. **Inspección de URLs** → Pegar URL principal → Clic en **"Solicitar indexación"**
6. Esperar 2-7 días para que Google indexe

### Activar Prerendering en Netlify (opcional pero recomendado para SPAs)

En Netlify Dashboard:
**Site settings → Build & deploy → Post processing → Prerendering → Enable**

Esto hace que Netlify sirva HTML renderizado a los bots de Google en lugar del shell vacío de la SPA.

---

## Errores Comunes y Soluciones

### ERR_TOO_MANY_REDIRECTS
- **Causa:** Redirección www/non-www configurada tanto en `netlify.toml` como en Netlify Dashboard
- **Solución:** Eliminar la redirección de `netlify.toml` y configurarla SOLO desde Netlify Dashboard

### JSON-LD no aparece en Rich Results Test
- **Causa:** Error de sintaxis JSON (coma extra, comilla faltante)
- **Solución:** Validar el JSON en https://jsonlint.com/ antes de pegarlo

### Advertencia: `geo` no reconocido en Organization
- **Causa:** Se definió `"geo"` directamente dentro de `Organization`
- **Solución:** Cambiar a `"location"` (`@type: "Place"`) y anidar ahí `"geo"`

### Error `cssSelector` no encontrado en WebPage
- **Causa:** Uso de `speakable.cssSelector` en una SPA donde esos selectores no están en el HTML inicial
- **Solución:** Eliminar `speakable` del schema `WebPage` o usar rutas SSR/prerender con marcado estático real

### Open Graph no muestra preview correcta
- **Causa:** Facebook cachea las previews. Necesitas purgarlo
- **Solución:** Usar el [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) y hacer "Scrape Again"

### Imágenes no aparecen en resultados de Google
- **Causa:** `alt` vacíos o genéricos, imágenes sin sitemap de imágenes
- **Solución:** Agregar alt descriptivos con keywords + incluir imágenes en `sitemap.xml`

---

## Checklist Final

```
□ HTML lang correcto (no "zxx")
□ Title optimizado (50-60 chars, marca + servicio + ubicación)
□ Meta description (150-160 chars)
□ Meta keywords (30+ términos relevantes)
□ Meta robots (index, follow)
□ URL canónica
□ Hreflang (es, es-MX, x-default)
□ Geolocalización (geo.region, geo.position, ICBM)
□ Open Graph completo (8+ metas)
□ Twitter Card completo (7 metas)
□ JSON-LD Organization
□ JSON-LD ProfessionalService con catálogo de servicios
□ JSON-LD WebSite
□ JSON-LD WebPage con breadcrumb
□ JSON-LD FAQPage (5+ preguntas)
□ Noscript fallback con contenido HTML completo
□ robots.txt con referencia a sitemap
□ sitemap.xml con imágenes y hreflang
□ netlify.toml con headers de seguridad
□ netlify.toml con cache para assets estáticos
□ Todas las imágenes con alt descriptivos
□ vue.config.js con productionSourceMap: false
□ Favicon + Apple Touch Icon
□ Theme color configurado
□ Google Search Console configurado
□ Sitemap enviado a Google
□ Indexación solicitada
□ Prerendering activado en Netlify (opcional)
□ Build exitoso sin errores
□ Verificación con script de consola: 100%
```

---

> **Última actualización:** 27 de febrero de 2026  
> **Próxima revisión recomendada:** Cada 3 meses o ante cambios significativos en la página
