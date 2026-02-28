# Guía Universal de Optimización SEO para Landing Pages

> **Versión:** 1.0  
> **Basada en:** Guía SEO aplicada en [kernesys.com](https://www.kernesys.com)  
> **Compatible con:** Cualquier stack (Vue.js, React, Angular, Next.js, Nuxt, HTML estático, etc.)  
> **Hosting soportado:** Netlify, Vercel, Cloudflare Pages, servidor propio (Apache/Nginx)

---

## 🔧 Variables de Configuración

Antes de comenzar, define estas variables. Se usan como `{{VARIABLE}}` a lo largo de toda la guía. Reemplázalas con los valores reales de tu proyecto.

```yaml
# ============================
# DATOS DEL NEGOCIO
# ============================
MARCA: "MiEmpresa"                          # Nombre comercial
MARCA_VARIANTES:                             # Nombres alternativos
  - "Mi Empresa"
  - "MiEmpresa S.A."
TIPO_EMPRESA: "agencia de marketing digital" # Descripción en una línea
SLOGAN: "Transformamos ideas en resultados"  # Tagline (opcional)
AÑO_FUNDACION: "2020"
AÑO_ACTUAL: "2026"

# ============================
# DOMINIO Y URLs
# ============================
DOMINIO: "miempresa.com"                     # Sin www ni https
URL_COMPLETA: "https://www.miempresa.com"
COLOR_MARCA: "#1a73e8"                       # Color principal HEX

# ============================
# UBICACIÓN FÍSICA
# ============================
CALLE: "Av. Principal 123, Col. Centro"
CIUDAD: "Ciudad de México"
ESTADO: "Ciudad de México"
CODIGO_POSTAL: "06600"
PAIS: "México"
CODIGO_PAIS_ISO: "MX"
CODIGO_REGION_ISO: "MX-CMX"                  # ISO 3166-2
LATITUD: "19.4326"
LONGITUD: "-99.1332"

# ============================
# CONTACTO
# ============================
TELEFONO: "+52-55-1234-5678"
EMAIL: "contacto@miempresa.com"
EMAIL_PRIVACIDAD: "privacidad@miempresa.com" # Para derechos ARCO

# ============================
# REDES SOCIALES
# ============================
FACEBOOK_URL: "https://www.facebook.com/MiEmpresa/"
FACEBOOK_APP_ID: "1234567890123456"          # Ver Paso 15
INSTAGRAM_URL: "https://www.instagram.com/miempresa/"
LINKEDIN_URL: "https://www.linkedin.com/company/miempresa/"
TWITTER_USUARIO: "@miempresa"
YOUTUBE_VIDEO: "https://www.youtube.com/watch?v=XXXXXXXXXXX"

# ============================
# SERVICIOS PRINCIPALES
# ============================
SERVICIO_PRINCIPAL: "Marketing Digital"
SERVICIOS:
  - nombre: "SEO y Posicionamiento Web"
    descripcion: "Mejoramos tu visibilidad en buscadores"
  - nombre: "Publicidad en Redes Sociales"
    descripcion: "Campañas optimizadas en Facebook, Instagram y más"
  - nombre: "Diseño Web"
    descripcion: "Sitios web modernos y responsivos"
  # Agregar más según aplique...

# ============================
# KEYWORDS
# ============================
KEYWORDS_PRINCIPALES:
  - "marketing digital"
  - "agencia de marketing"
  - "posicionamiento web"
  - "diseño web"
KEYWORDS_UBICACION:
  - "marketing digital en Ciudad de México"
  - "agencia de marketing CDMX"
TECNOLOGIAS:                                 # Solo para empresas tech
  - "Google Ads"
  - "Meta Ads"
  - "WordPress"

# ============================
# IMÁGENES
# ============================
LOGO_ARCHIVO: "logo.png"                     # Ruta relativa desde img/
LOGO_OSCURO: "logo-dark.png"                 # Para fondos claros (OG/Twitter)
OG_IMAGE: "og-image.png"                     # 1200x630 px ideal
HERO_IMAGE: "hero.jpg"                       # Imagen principal del slider/hero

# ============================
# STACK TÉCNICO
# ============================
FRAMEWORK: "vue"                             # vue | react | angular | next | nuxt | static
HOSTING: "netlify"                           # netlify | vercel | cloudflare | apache | nginx
TIENE_ROUTER_SPA: true                       # true si es SPA con client-side routing
```

> **Tip:** Puedes copiar este bloque a un archivo `seo-config.yaml` para tenerlo como referencia rápida.

---

## Índice

1. [Paso 1: Idioma del HTML](#paso-1-idioma-del-html)
2. [Paso 2: Meta Tags Básicos de SEO](#paso-2-meta-tags-básicos-de-seo)
3. [Paso 3: Meta Tags de Geolocalización](#paso-3-meta-tags-de-geolocalización)
4. [Paso 4: Open Graph (Facebook, LinkedIn, WhatsApp)](#paso-4-open-graph-facebook-linkedin-whatsapp)
5. [Paso 5: Twitter Card](#paso-5-twitter-card)
6. [Paso 6: Datos Estructurados JSON-LD](#paso-6-datos-estructurados-json-ld)
7. [Paso 7: Contenido Noscript para SPAs](#paso-7-contenido-noscript-para-spas)
8. [Paso 8: robots.txt](#paso-8-robotstxt)
9. [Paso 9: sitemap.xml](#paso-9-sitemapxml)
10. [Paso 10: Configuración del Hosting](#paso-10-configuración-del-hosting)
11. [Paso 11: Optimización de Imágenes (Alt Tags)](#paso-11-optimización-de-imágenes-alt-tags)
12. [Paso 12: Imágenes WebP + Responsive](#paso-12-imágenes-webp--responsive)
13. [Paso 13: Optimización de Fuentes (font-display)](#paso-13-optimización-de-fuentes-font-display)
14. [Paso 14: Accesibilidad (a11y)](#paso-14-accesibilidad-a11y)
15. [Paso 15: Facebook App ID](#paso-15-facebook-app-id)
16. [Paso 16: Security Headers (CSP + Cross-Origin)](#paso-16-security-headers-csp--cross-origin)
17. [Paso 17: Rendimiento (PageSpeed / Core Web Vitals)](#paso-17-rendimiento-pagespeed--core-web-vitals)
18. [Paso 18: Minificación de JavaScript](#paso-18-minificación-de-javascript)
19. [Paso 19: Modales Legales (Términos y Privacidad)](#paso-19-modales-legales-términos-y-privacidad)
20. [Paso 20: Google Search Console](#paso-20-google-search-console)
21. [Paso 21: Verificación y Testing](#paso-21-verificación-y-testing)
22. [Errores Comunes y Soluciones](#errores-comunes-y-soluciones)
23. [Checklist Final](#checklist-final)
24. [Plantilla de Prompt para IA](#plantilla-de-prompt-para-ia)

---

## Paso 1: Idioma del HTML

**Archivo:** `index.html` (o el archivo HTML raíz de tu proyecto)

El atributo `lang` del `<html>` debe coincidir con el idioma principal del contenido. **Nunca** usar `"zxx"` (sin contenido lingüístico).

```html
<!-- ❌ INCORRECTO -->
<html lang="zxx">
<html lang="en">  <!-- si tu contenido es en español -->

<!-- ✅ CORRECTO -->
<html lang="es" prefix="og: https://ogp.me/ns#">
```

| Idioma | Código |
|--------|--------|
| Español | `es` |
| Inglés | `en` |
| Portugués | `pt` |
| Francés | `fr` |

> **Nota:** El atributo `prefix` es necesario para que las etiquetas Open Graph sean semánticamente válidas según el protocolo OGP.

---

## Paso 2: Meta Tags Básicos de SEO

**Archivo:** `index.html` → dentro de `<head>`

### Title (50-60 caracteres)

```html
<title>{{MARCA}} | {{SERVICIO_PRINCIPAL}} en {{CIUDAD}}, {{PAIS}} | {{KEYWORDS_SECUNDARIAS}}</title>
```

**Ejemplos por industria:**

```html
<!-- Empresa de software -->
<title>TechCorp | Desarrollo de Software a la Medida en Monterrey | ERP, CRM, Apps</title>

<!-- Restaurante -->
<title>La Casa del Chef | Restaurante de Comida Italiana en Guadalajara | Pastas, Pizzas</title>

<!-- Despacho contable -->
<title>Grupo Fiscal MX | Contabilidad y Auditoría en CDMX | Declaraciones, SAT</title>

<!-- E-commerce -->
<title>ModaStyle | Tienda de Ropa Online en México | Envío Gratis, Moda 2026</title>
```

### Meta Description (150-160 caracteres)

```html
<meta name="description" content="{{MARCA}} es una {{TIPO_EMPRESA}} en {{CIUDAD}}. Ofrecemos {{SERVICIOS}}. {{DIFERENCIADOR}} desde {{AÑO_FUNDACION}}." />
```

### Meta Keywords

```html
<meta name="keywords" content="{{KEYWORDS_PRINCIPALES}}, {{KEYWORDS_UBICACION}}, {{MARCA}}, {{TECNOLOGIAS}}" />
```

> Incluir variaciones en español/inglés, singular/plural, abreviaciones y sinónimos.

### Metas de Control y Rastreo

```html
<meta name="author" content="{{MARCA}}" />
<meta name="copyright" content="{{MARCA}} © {{AÑO_FUNDACION}}-{{AÑO_ACTUAL}}" />
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
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="HandheldFriendly" content="True" />
<meta name="MobileOptimized" content="320" />
<meta name="theme-color" content="{{COLOR_MARCA}}" />
<meta name="msapplication-TileColor" content="{{COLOR_MARCA}}" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="{{MARCA}}" />
<meta name="application-name" content="{{MARCA}}" />
<meta name="format-detection" content="telephone=yes" />
```

### Metas de Clasificación

```html
<meta name="subject" content="{{TIPO_EMPRESA}}" />
<meta name="abstract" content="{{MARCA}} - {{TIPO_EMPRESA}} en {{CIUDAD}}. {{SERVICIOS_RESUMEN}}." />
<meta name="classification" content="Business, {{CATEGORIA}}" />
<meta name="category" content="{{CATEGORIA}}" />
```

**Categorías comunes:** `Technology`, `Business`, `Health`, `Education`, `Food`, `Finance`, `Real Estate`, `Legal`, `Marketing`

### URL Canónica

```html
<link rel="canonical" href="{{URL_COMPLETA}}/" />
```

### Hreflang (idiomas y regiones)

```html
<!-- Sitio en un solo idioma (español, México) -->
<link rel="alternate" hreflang="es" href="{{URL_COMPLETA}}/" />
<link rel="alternate" hreflang="es-MX" href="{{URL_COMPLETA}}/" />
<link rel="alternate" hreflang="x-default" href="{{URL_COMPLETA}}/" />

<!-- Sitio multiidioma -->
<link rel="alternate" hreflang="es" href="{{URL_COMPLETA}}/es/" />
<link rel="alternate" hreflang="en" href="{{URL_COMPLETA}}/en/" />
<link rel="alternate" hreflang="x-default" href="{{URL_COMPLETA}}/en/" />
```

---

## Paso 3: Meta Tags de Geolocalización

Obtener coordenadas exactas desde [Google Maps](https://maps.google.com) → clic derecho → "¿Qué hay aquí?" → copiar coordenadas.

```html
<meta name="geo.region" content="{{CODIGO_REGION_ISO}}" />
<meta name="geo.placename" content="{{CIUDAD}}, {{ESTADO}}, {{PAIS}}" />
<meta name="geo.position" content="{{LATITUD}};{{LONGITUD}}" />
<meta name="ICBM" content="{{LATITUD}}, {{LONGITUD}}" />
```

**Referencia de códigos ISO 3166-2:**

| País | Formato | Ejemplo |
|------|---------|---------|
| México | `MX-XXX` | `MX-NLE` (Nuevo León), `MX-CMX` (CDMX) |
| Colombia | `CO-XX` | `CO-DC` (Bogotá), `CO-ANT` (Antioquia) |
| Argentina | `AR-X` | `AR-C` (Buenos Aires), `AR-B` (Córdoba) |
| España | `ES-XX` | `ES-M` (Madrid), `ES-B` (Barcelona) |
| EE.UU. | `US-XX` | `US-CA` (California), `US-TX` (Texas) |

> Buscar los códigos completos en [ISO 3166-2](https://es.wikipedia.org/wiki/ISO_3166-2)

---

## Paso 4: Open Graph (Facebook, LinkedIn, WhatsApp)

Controlan la preview cuando alguien comparte tu enlace en redes sociales.

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="{{MARCA}}" />
<meta property="og:title" content="{{MARCA}} | {{SERVICIO_PRINCIPAL}} en {{CIUDAD}}" />
<meta property="og:description" content="{{DESCRIPCION_CORTA_150_CHARS}}" />
<meta property="og:url" content="{{URL_COMPLETA}}/" />
<meta property="og:image" content="{{URL_COMPLETA}}/img/{{OG_IMAGE}}" />
<meta property="og:image:alt" content="{{MARCA}} - {{TIPO_EMPRESA}}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="es_MX" />
<meta property="og:locale:alternate" content="es_ES" />
<meta property="og:locale:alternate" content="en_US" />
<meta property="fb:app_id" content="{{FACEBOOK_APP_ID}}" />
```

### Recomendaciones para la imagen OG:

- **Tamaño ideal:** 1200×630 px
- **Formato:** PNG o JPG
- **Si tu logo es blanco/transparente:** crear una versión con fondo del color de tu marca
- **Herramienta rápida para crearla:** [Canva](https://www.canva.com) → Template "Facebook Post" → logo centrado + color de fondo

---

## Paso 5: Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{{MARCA}} | {{SERVICIO_PRINCIPAL}} en {{CIUDAD}}" />
<meta name="twitter:description" content="{{DESCRIPCION_CORTA}}" />
<meta name="twitter:image" content="{{URL_COMPLETA}}/img/{{OG_IMAGE}}" />
<meta name="twitter:image:alt" content="{{MARCA}} - {{TIPO_EMPRESA}}" />
<meta name="twitter:site" content="{{TWITTER_USUARIO}}" />
<meta name="twitter:creator" content="{{TWITTER_USUARIO}}" />
```

> Si no tienes Twitter/X, puedes omitir `twitter:site` y `twitter:creator`, pero deja las demás metas porque Google y otros crawlers también las leen.

---

## Paso 6: Datos Estructurados JSON-LD

Los datos estructurados permiten a Google mostrar **rich snippets** (resultados enriquecidos). Se colocan dentro de `<head>` en scripts `type="application/ld+json"`.

### Schema 1: Organization

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "{{MARCA}}",
  "alternateName": [{{MARCA_VARIANTES}}],
  "url": "{{URL_COMPLETA}}",
  "logo": "{{URL_COMPLETA}}/img/{{LOGO_ARCHIVO}}",
  "image": "{{URL_COMPLETA}}/img/{{LOGO_OSCURO}}",
  "description": "{{DESCRIPCION_COMPLETA}}",
  "foundingDate": "{{AÑO_FUNDACION}}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{{CALLE}}",
    "addressLocality": "{{CIUDAD}}",
    "addressRegion": "{{ESTADO}}",
    "postalCode": "{{CODIGO_POSTAL}}",
    "addressCountry": "{{CODIGO_PAIS_ISO}}"
  },
  "location": {
    "@type": "Place",
    "name": "{{CIUDAD}}, {{ESTADO}}, {{PAIS}}",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "{{LATITUD}}",
      "longitude": "{{LONGITUD}}"
    }
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "{{TELEFONO}}",
      "contactType": "sales",
      "email": "{{EMAIL}}",
      "availableLanguage": ["Spanish", "English"],
      "areaServed": "Worldwide"
    }
  ],
  "sameAs": [
    "{{FACEBOOK_URL}}",
    "{{INSTAGRAM_URL}}",
    "{{LINKEDIN_URL}}"
  ],
  "knowsAbout": [
    "{{KEYWORD_1}}", "{{KEYWORD_2}}", "{{KEYWORD_3}}"
  ]
}
</script>
```

> **Importante:** En `Organization`, NO uses `"geo"` directamente. Usa `"location"` → `Place` → `"geo"` para pasar validadores.

### Schema 2: ProfessionalService (Negocio Local)

> Usa `ProfessionalService` para servicios profesionales, `Restaurant` para restaurantes, `Store` para tiendas, `LocalBusiness` como genérico.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "{{MARCA}}",
  "image": "{{URL_COMPLETA}}/img/{{LOGO_OSCURO}}",
  "url": "{{URL_COMPLETA}}",
  "telephone": "{{TELEFONO}}",
  "email": "{{EMAIL}}",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{{CALLE}}",
    "addressLocality": "{{CIUDAD}}",
    "addressRegion": "{{ESTADO}}",
    "postalCode": "{{CODIGO_POSTAL}}",
    "addressCountry": "{{CODIGO_PAIS_ISO}}"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "{{LATITUD}}",
    "longitude": "{{LONGITUD}}"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de {{MARCA}}",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "{{SERVICIO_1_NOMBRE}}",
          "description": "{{SERVICIO_1_DESCRIPCION}}"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "{{SERVICIO_2_NOMBRE}}",
          "description": "{{SERVICIO_2_DESCRIPCION}}"
        }
      }
    ]
  }
}
</script>
```

**Tipos de negocio (@type) comunes:**

| Tipo de negocio | @type de Schema.org |
|-----------------|---------------------|
| Servicios profesionales | `ProfessionalService` |
| Restaurante | `Restaurant` |
| Tienda online | `Store` |
| Medicina / Salud | `MedicalBusiness` |
| Despacho legal | `LegalService` |
| Agencia de seguros | `InsuranceAgency` |
| Agencia de viajes | `TravelAgency` |
| Inmobiliaria | `RealEstateAgent` |
| Genérico | `LocalBusiness` |

### Schema 3: WebSite

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "{{MARCA}}",
  "url": "{{URL_COMPLETA}}",
  "description": "{{DESCRIPCION_CORTA}}",
  "publisher": {
    "@type": "Organization",
    "name": "{{MARCA}}"
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
  "name": "{{MARCA}} - {{SERVICIO_PRINCIPAL}}",
  "description": "{{DESCRIPCION_CORTA}}",
  "url": "{{URL_COMPLETA}}",
  "isPartOf": {
    "@type": "WebSite",
    "name": "{{MARCA}}",
    "url": "{{URL_COMPLETA}}"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "{{URL_COMPLETA}}"
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
      "name": "¿Qué servicios ofrece {{MARCA}}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{MARCA}} ofrece {{LISTA_DE_SERVICIOS}}."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde se ubica {{MARCA}}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Estamos ubicados en {{CIUDAD}}, {{ESTADO}}, {{PAIS}}."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo puedo contactar a {{MARCA}}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes contactarnos por email a {{EMAIL}} o por teléfono al {{TELEFONO}}."
      }
    }
  ]
}
</script>
```

> **Recomendación:** Incluir 5-10 preguntas reales que tus clientes hacen frecuentemente. Google las puede mostrar como preguntas expandibles en los resultados de búsqueda.

---

## Paso 7: Contenido Noscript para SPAs

**Aplica a:** Vue.js, React, Angular y cualquier SPA que renderiza con JavaScript.  
**NO aplica a:** Sitios estáticos puros, SSR (Next.js/Nuxt con SSR habilitado), o sitios con prerender.

```html
<div id="app">
  <noscript>
    <div style="padding: 40px; max-width: 900px; margin: 0 auto; font-family: sans-serif;">
      <h1>{{MARCA}} - {{SERVICIO_PRINCIPAL}} en {{CIUDAD}}</h1>
      <p>{{DESCRIPCION_COMPLETA_DE_LA_EMPRESA}}</p>
      
      <h2>Nuestros Servicios</h2>
      <ul>
        <li><strong>{{SERVICIO_1}}:</strong> {{DESCRIPCION_1}}</li>
        <li><strong>{{SERVICIO_2}}:</strong> {{DESCRIPCION_2}}</li>
        <li><strong>{{SERVICIO_3}}:</strong> {{DESCRIPCION_3}}</li>
        <!-- Repetir para cada servicio -->
      </ul>
      
      <h2>Contacto</h2>
      <p>Email: <a href="mailto:{{EMAIL}}">{{EMAIL}}</a></p>
      <p>Teléfono: <a href="tel:{{TELEFONO}}">{{TELEFONO}}</a></p>
      <p>Ubicación: {{CALLE}}, {{CIUDAD}}, {{ESTADO}}, {{PAIS}}</p>
      <p>Web: <a href="{{URL_COMPLETA}}">www.{{DOMINIO}}</a></p>
    </div>
  </noscript>
</div>
```

> El `<noscript>` proporciona contenido indexable para crawlers que no ejecutan JavaScript.

---

## Paso 8: robots.txt

**Archivo:** `public/robots.txt` (Vue/React) o raíz del sitio

```txt
# Robots.txt para {{MARCA}} - www.{{DOMINIO}}

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$
Disallow: /private/

# Sitemap
Sitemap: {{URL_COMPLETA}}/sitemap.xml

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

### Rutas adicionales a bloquear según el tipo de sitio:

```txt
# E-commerce
Disallow: /cart/
Disallow: /checkout/
Disallow: /account/

# SaaS / App
Disallow: /dashboard/
Disallow: /settings/
Disallow: /app/

# WordPress
Disallow: /wp-admin/
Disallow: /wp-includes/
Allow: /wp-content/uploads/
```

---

## Paso 9: sitemap.xml

**Archivo:** `public/sitemap.xml` o raíz

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Página Principal -->
  <url>
    <loc>{{URL_COMPLETA}}/</loc>
    <lastmod>{{FECHA_YYYY-MM-DD}}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="es" href="{{URL_COMPLETA}}/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="{{URL_COMPLETA}}/" />
    <image:image>
      <image:loc>{{URL_COMPLETA}}/img/{{LOGO_OSCURO}}</image:loc>
      <image:caption>{{MARCA}} - {{TIPO_EMPRESA}}</image:caption>
      <image:title>Logo de {{MARCA}}</image:title>
    </image:image>
  </url>

  <!-- Secciones con ancla (landing page de una sola página) -->
  <url>
    <loc>{{URL_COMPLETA}}/#services</loc>
    <lastmod>{{FECHA_YYYY-MM-DD}}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>{{URL_COMPLETA}}/#about</loc>
    <lastmod>{{FECHA_YYYY-MM-DD}}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>{{URL_COMPLETA}}/#contact</loc>
    <lastmod>{{FECHA_YYYY-MM-DD}}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Páginas adicionales (si existen) -->
  <!--
  <url>
    <loc>{{URL_COMPLETA}}/blog/</loc>
    <lastmod>{{FECHA}}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  -->

</urlset>
```

> **Importante:** Actualizar `<lastmod>` cada vez que se haga un cambio significativo.

---

## Paso 10: Configuración del Hosting

### Opción A: Netlify (`netlify.toml`)

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

# ===== Cache para assets estáticos (1 año) =====
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

# ===== Sitemap y robots =====
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

# ===== SPA fallback (solo si es SPA) =====
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Opción B: Vercel (`vercel.json`)

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=(self)" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Strict-Transport-Security", "value": "max-age=31536000; includeSubDomains; preload" }
      ]
    },
    {
      "source": "/img/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Opción C: Apache (`.htaccess`)

```apache
# Security Headers
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"

# Cache (1 año para assets estáticos)
<FilesMatch "\.(jpg|jpeg|png|webp|gif|svg|css|js|woff|woff2)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>

# SPA fallback
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>
```

### Opción D: Nginx

```nginx
server {
    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

    # Cache
    location ~* \.(jpg|jpeg|png|webp|gif|svg|css|js|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### ⚠️ CUIDADO: Redirección www

**NO** configurar redirección www/non-www en DOS lugares al mismo tiempo (ej: tanto en netlify.toml como en el dashboard). Esto causa **ERR_TOO_MANY_REDIRECTS**.

- **Netlify:** Configurar SOLO desde Dashboard → Domain management
- **Vercel:** Se maneja automáticamente
- **Apache/Nginx:** Configurar en UN solo lugar (htaccess o vhost, no ambos)

---

## Paso 11: Optimización de Imágenes (Alt Tags)

### Reglas de alt text:

| Tipo de imagen | Formato de alt | Ejemplo |
|----------------|----------------|---------|
| Logo | `{{MARCA}} - {{TIPO_EMPRESA}}` | `"TechCorp - Desarrollo de Software"` |
| Slides/Hero | `{{MARCA}} - {{KEYWORD_SERVICIO}}` | `"TechCorp - Soluciones ERP Empresariales"` |
| Fotos About | `{{MARCA}} - {{LO_QUE_MUESTRA_LA_FOTO}}` | `"Equipo de TechCorp trabajando"` |
| Iconos de servicios | `Icono de {{NOMBRE_SERVICIO}}` | `"Icono de Desarrollo Web"` |
| Logos de clientes | `Logo de {{NOMBRE_CLIENTE}}` | `"Logo de Coca-Cola"` |
| Decorativas puras | `""` (vacío) | `alt=""` (solo si es puramente decorativa) |

### Atributos obligatorios en TODAS las imágenes:

```html
<img src="img/foto.jpg" 
     alt="{{DESCRIPCION_125_CHARS_MAX}}" 
     width="{{ANCHO_REAL}}" 
     height="{{ALTO_REAL}}" 
     loading="lazy" 
     decoding="async" />
```

**Excepciones:**
- La primera imagen visible (hero/LCP): `loading="eager"` + `fetchpriority="high"`
- Imágenes decorativas CSS: no necesitan alt (son background-image)

### Cómo obtener dimensiones reales:

```bash
# Linux
file imagen.png
identify imagen.png  # ImageMagick

# Mac
sips -g pixelWidth -g pixelHeight imagen.png

# Cualquier OS con Node
node -e "const s=require('image-size')('imagen.png');console.log(s.width+'x'+s.height)"
```

---

## Paso 12: Imágenes WebP + Responsive

### 12.1 Instalar herramientas

```bash
# Linux (Debian/Ubuntu)
sudo apt-get install -y webp imagemagick

# Mac
brew install webp imagemagick

# Alternativa con Node.js (cualquier OS)
npm install -g sharp-cli
```

### 12.2 Convertir a WebP

```bash
cd public/img  # o donde estén tus imágenes

# === SLIDES / HERO (imágenes grandes) ===
# Desktop (1920px de ancho, calidad 70-80)
cwebp -q 75 -resize 1920 0 hero.jpg -o hero.webp

# Mobile (960px de ancho, calidad 60-70)
cwebp -q 65 -resize 960 0 hero.jpg -o hero-mobile.webp

# === LOGOS (resize al tamaño real de display) ===
# Primero verificar tamaño original:
identify logo.png  # ej: 3000x800

# Redimensionar a ~400px de ancho + WebP
convert logo.png -resize 400x -strip logo-opt.png
cwebp -q 80 logo-opt.png -o logo.webp

# === ICONOS (resize a 128px) ===
convert icono.png -resize 128x128 -strip icono-128.png
cwebp -q 80 icono-128.png -o icono.webp

# === FOTOS (sin redimensionar, solo convertir) ===
cwebp -q 80 foto.png -o foto.webp
```

### 12.3 Usar `<picture>` en HTML

```html
<!-- Hero / Slide principal (LCP) -->
<picture>
  <source type="image/webp" media="(max-width: 768px)" srcset="img/hero-mobile.webp" />
  <source type="image/webp" srcset="img/hero.webp" />
  <img src="img/hero.jpg" alt="{{MARCA}} - {{SERVICIO_PRINCIPAL}}" 
       width="1920" height="1080" loading="eager" fetchpriority="high" decoding="async" />
</picture>

<!-- Imágenes secundarias (lazy) -->
<picture>
  <source type="image/webp" srcset="img/foto.webp" />
  <img src="img/foto.png" alt="{{DESCRIPCION}}" 
       width="500" height="300" loading="lazy" decoding="async" />
</picture>

<!-- Logo -->
<picture>
  <source type="image/webp" srcset="img/logo.webp" />
  <img src="img/logo.png" alt="{{MARCA}} - {{TIPO_EMPRESA}}" 
       width="400" height="104" />
</picture>
```

### 12.4 Preload del hero (LCP)

Agregar en `<head>` de `index.html`, **antes** de los CSS:

```html
<link rel="preload" as="image" type="image/webp" href="img/hero.webp" media="(min-width: 769px)" />
<link rel="preload" as="image" type="image/webp" href="img/hero-mobile.webp" media="(max-width: 768px)" />
```

### Tabla de referencia de calidades WebP:

| Tipo de imagen | Resize | Calidad (cwebp -q) | Resultado típico |
|----------------|--------|---------------------|------------------|
| Slides/Hero desktop | 1920px ancho | 70-75 | 80-150 KiB |
| Slides/Hero mobile | 960px ancho | 60-65 | 25-50 KiB |
| Logo principal | 400px ancho | 80 | 3-10 KiB |
| Logos clientes | 500px ancho | 80 | 5-15 KiB |
| Iconos | 128×128 | 80 | 2-5 KiB |
| Fotos (about, team) | original | 80 | 30-60 KiB |

---

## Paso 13: Optimización de Fuentes (font-display)

### Problema

Si tus fuentes usan `font-display: auto` o no definen `font-display`, el navegador muestra texto invisible (FOIT) mientras se carga la fuente, causando CLS y aumentando el tiempo de carga percibido.

### Solución

Cambiar `font-display: auto` → `font-display: swap` en TODOS los `@font-face`.

#### Google Fonts (fonts-*.css o similar)

```bash
# Buscar y reemplazar en archivos de fuentes locales
sed -i 's/font-display: auto/font-display: swap/g' public/css/fonts-*.css

# Si no tienen font-display, agregarlo después de font-weight:
sed -i '/font-weight: [0-9]*;/a\  font-display: swap;' public/css/fonts-*.css
```

#### Font Awesome / Material Icons / Otros icon fonts

```bash
# Buscar font-display:auto en archivos minificados
grep -n "font-display" public/css/all.min.css
# Reemplazar
sed -i 's/font-display:auto/font-display:swap/g' public/css/all.min.css
```

#### Si usas Google Fonts vía CDN

```html
<!-- Agregar &display=swap al URL -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
```

#### Preconnect para fuentes externas

```html
<!-- Solo si usas Google Fonts desde CDN -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

---

## Paso 14: Accesibilidad (a11y)

### 14.1 Enlaces con solo íconos

Todo `<a>` que contenga solo un ícono (sin texto visible) necesita `aria-label`:

```html
<!-- ❌ INCORRECTO -->
<a href="{{FACEBOOK_URL}}">
  <i class="fab fa-facebook-f"></i>
</a>

<!-- ✅ CORRECTO -->
<a href="{{FACEBOOK_URL}}" aria-label="Facebook de {{MARCA}}">
  <i class="fab fa-facebook-f"></i>
</a>
```

**Aplicar a:** redes sociales, WhatsApp flotante, botones de cerrar, flechas de slider, etc.

### 14.2 Orden de encabezados

Los encabezados deben ir en orden descendente sin saltar niveles:

```
✅ h1 → h2 → h3 → h3 → h2 → h3
❌ h1 → h3 (salta h2)
❌ h1 → h2 → h4 (salta h3)
```

> La página debe tener **exactamente un `<h1>`** (normalmente el título del hero o de la marca).

### 14.3 Formularios accesibles

```html
<label for="nombre">Nombre</label>
<input type="text" id="nombre" name="nombre" required aria-required="true" />

<!-- Si el label no es visible, usar aria-label -->
<input type="email" placeholder="Tu email" aria-label="Correo electrónico" required />
```

### 14.4 Contraste de colores

Verificar que el texto tenga suficiente contraste con el fondo:
- **Texto normal:** ratio mínimo 4.5:1
- **Texto grande (>18px bold o >24px):** ratio mínimo 3:1
- **Herramienta:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## Paso 15: Facebook App ID

Facebook requiere `fb:app_id` para validar la propiedad del sitio y habilitar funcionalidades avanzadas (insights, moderación).

### Obtener el App ID

1. Ir a [Facebook Developers](https://developers.facebook.com/)
2. **Mis aplicaciones** → Crear nueva aplicación (tipo "Negocio")
3. Copiar el **App ID** (número de ~16 dígitos)

### Implementar

```html
<meta property="fb:app_id" content="{{FACEBOOK_APP_ID}}" />
```

### Verificar

1. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) → Pegar URL
2. Verificar que aparezca `fb:app_id`
3. Si no se actualiza, clic en **"Scrape Again"**

---

## Paso 16: Security Headers (CSP + Cross-Origin)

### Content-Security-Policy

Define qué orígenes pueden cargar recursos. **Adaptar la whitelist según los servicios que uses:**

```
Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' {{SCRIPT_WHITELIST}}; style-src 'self' 'unsafe-inline' {{STYLE_WHITELIST}}; img-src 'self' data: https: blob:; font-src 'self' {{FONT_WHITELIST}}; connect-src 'self' {{API_WHITELIST}}; frame-src {{FRAME_WHITELIST}}; object-src 'none'; upgrade-insecure-requests"
```

### Whitelist por servicio común:

| Servicio | Directiva | Orígenes |
|----------|-----------|----------|
| Google Analytics | `script-src` | `https://www.google-analytics.com https://www.googletagmanager.com` |
| Google Analytics | `connect-src` | `https://www.google-analytics.com` |
| Google Fonts | `style-src` | `https://fonts.googleapis.com` |
| Google Fonts | `font-src` | `https://fonts.gstatic.com` |
| Facebook SDK | `script-src` | `https://connect.facebook.net` |
| Facebook Embeds | `frame-src` | `https://www.facebook.com` |
| YouTube Embeds | `frame-src` | `https://www.youtube.com https://www.youtube-nocookie.com` |
| CDN jsDelivr | `script-src` | `https://cdn.jsdelivr.net` |
| CDN Cloudflare | `script-src` | `https://cdnjs.cloudflare.com` |
| Stripe | `script-src` | `https://js.stripe.com` |
| Stripe | `frame-src` | `https://js.stripe.com` |
| WhatsApp links | `connect-src` | `https://wa.me https://api.whatsapp.com` |
| EmailJS | `connect-src` | `https://api.emailjs.com` |
| Web3Forms | `connect-src` | `https://api.web3forms.com` |
| Hotjar | `script-src` | `https://static.hotjar.com https://script.hotjar.com` |
| Intercom | `script-src` | `https://widget.intercom.io` |
| Mailchimp | `connect-src` | `https://*.list-manage.com` |

> **Nota:** `'unsafe-inline'` y `'unsafe-eval'` son necesarios para la mayoría de frameworks SPA (Vue, React, Angular). Si usas SSR/SSG, puedes reemplazarlos por nonces o hashes.

### Cross-Origin Headers

```
Cross-Origin-Opener-Policy = "same-origin-allow-popups"
Cross-Origin-Embedder-Policy = "unsafe-none"
Cross-Origin-Resource-Policy = "same-site"
```

| Header | Valor | Razón |
|--------|-------|-------|
| COOP | `same-origin-allow-popups` | Permite popups (OAuth, redes sociales) |
| COEP | `unsafe-none` | Permite recursos cross-origin sin CORS (embeds, fonts) |
| CORP | `same-site` | Restringe carga de recursos al mismo sitio |

### Validación

- Escanear en [securityheaders.com](https://securityheaders.com/) → Objetivo: **A+**
- Si la CSP bloquea algo, se verá en la consola como `Refused to load...` → agregar el origen a la whitelist

---

## Paso 17: Rendimiento (PageSpeed / Core Web Vitals)

### 17.1 CLS (Cumulative Layout Shift) — Objetivo: < 0.1

**Causas comunes y soluciones:**

| Causa | Solución |
|-------|----------|
| Imágenes sin dimensiones | Agregar `width` y `height` a todas las `<img>` |
| Fuentes que cambian layout | `font-display: swap` (ver Paso 13) |
| Contenido cargado dinámicamente | `min-height` + `contain: layout` en el contenedor |
| Ads o embeds sin espacio reservado | Estilos CSS con espacio fijo |
| CSS no crítico que reposiciona | Inline CSS crítico o preload |

```html
<!-- Reservar espacio para secciones que cargan tarde -->
<section id="contact" style="min-height: 600px; contain: layout;">
  <!-- contenido dinámico -->
</section>
```

### 17.2 LCP (Largest Contentful Paint) — Objetivo: < 2.5s

| Causa | Solución |
|-------|----------|
| Hero image pesada | WebP + resize + preload (ver Paso 12) |
| CSS/JS bloqueante | Defer JS, preload CSS crítico |
| Fuentes pesadas | `font-display: swap` + preload fuentes |
| Servidor lento (TTFB) | CDN + caching (ver Paso 10) |

### 17.3 FID/INP (Interacción) — Objetivo: < 200ms

| Causa | Solución |
|-------|----------|
| JS pesado en main thread | Code splitting, lazy imports |
| Event listeners excesivos | Delegación de eventos |
| Third-party scripts | Defer o async los scripts |

### Preconnect vs dns-prefetch

```html
<!-- Usar preconnect SOLO para recursos que se cargan en la primera request -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Usar dns-prefetch para recursos que podrían cargarse después -->
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
```

> **Regla:** Si un `preconnect` no se usa en los primeros 10 segundos, Lighthouse lo marca como "preconnect no utilizado". Cámbialo a `dns-prefetch`.

---

## Paso 18: Minificación de JavaScript

### Para scripts en `public/js/` (fuera del build de Webpack/Vite)

Estos archivos no pasan por el pipeline de build, así que hay que minificarlos manualmente.

```bash
# Instalar Terser (si no está disponible vía npx)
npm install -g terser

# Minificar un archivo
npx terser archivo.js --compress --mangle -o archivo.js

# ⚠️ HACER BACKUP ANTES:
cp archivo.js archivo.js.bak
npx terser archivo.js.bak --compress --mangle -o archivo.js
```

### Qué minificar y qué NO:

| Criterio | Acción |
|----------|--------|
| `*.min.js` | ❌ Ya está minificado, NO tocar |
| Archivos propios (custom JS) | ✅ Minificar con Terser |
| jQuery/Bootstrap | ❌ Usar las versiones `.min.js` del CDN o descarga |
| Archivos `*.js` > 3 KiB | ✅ Vale la pena minificar |
| Archivos `*.js` < 1 KiB | ❌ El ahorro es insignificante |

### Verificar antes/después:

```bash
# Ver tamaños de todos los JS
ls -lhS public/js/*.js
# o
du -sh public/js/*.js | sort -rh
```

---

## Paso 19: Modales Legales (Términos y Privacidad)

### ¿Por qué son necesarios?

- Cumplimiento legal (LFPDPPP en México, RGPD en Europa, CCPA en California)
- Requerido por Google Ads, Facebook Ads y otras plataformas publicitarias
- Incrementa la confianza del usuario

### Opción A: SweetAlert2 (modales ligeros, sin páginas extra)

```bash
npm install sweetalert2
```

```javascript
import Swal from 'sweetalert2';

const showTerminos = () => {
  Swal.fire({
    title: '<strong>Términos de Uso</strong>',
    imageUrl: 'img/{{LOGO_ARCHIVO}}',
    imageWidth: 200,
    imageAlt: '{{MARCA}} Logo',
    html: `
      <div style="text-align:left; max-height:400px; overflow-y:auto; font-size:14px; line-height:1.6;">
        <h3>1. Uso del Sitio</h3>
        <p>El acceso y uso de {{URL_COMPLETA}} está sujeto a los presentes términos. 
        Al navegar en este sitio web, usted acepta cumplirlos.</p>
        
        <h3>2. Propiedad Intelectual</h3>
        <p>Todo el contenido (textos, imágenes, logotipos, código fuente, diseño) es propiedad 
        de {{MARCA}} y está protegido por las leyes de propiedad intelectual de {{PAIS}}.</p>
        
        <h3>3. Servicios</h3>
        <p>{{MARCA}} se reserva el derecho de modificar o discontinuar sus servicios en cualquier 
        momento sin previo aviso.</p>
        
        <h3>4. Limitación de Responsabilidad</h3>
        <p>{{MARCA}} no será responsable de daños directos o indirectos derivados del uso de este sitio web.</p>
        
        <h3>5. Enlaces a Terceros</h3>
        <p>Este sitio puede contener enlaces a sitios web de terceros. {{MARCA}} no es responsable del 
        contenido ni de las prácticas de privacidad de dichos sitios.</p>
        
        <h3>6. Modificaciones</h3>
        <p>Nos reservamos el derecho de actualizar los presentes términos en cualquier momento. 
        Las modificaciones serán efectivas al publicarse en el sitio.</p>
        
        <h3>7. Legislación Aplicable</h3>
        <p>Los presentes términos se rigen por las leyes de {{PAIS}}, sometiendo cualquier 
        controversia a los tribunales competentes de {{CIUDAD}}, {{ESTADO}}.</p>
        
        <h3>8. Contacto</h3>
        <p>Para consultas: <a href="mailto:{{EMAIL}}">{{EMAIL}}</a></p>
      </div>
    `,
    width: 700,
    confirmButtonText: 'Entendido',
    confirmButtonColor: '{{COLOR_MARCA}}',
    showCloseButton: true,
  });
};

const showPrivacidad = () => {
  Swal.fire({
    title: '<strong>Política de Privacidad</strong>',
    imageUrl: 'img/{{LOGO_ARCHIVO}}',
    imageWidth: 200,
    imageAlt: '{{MARCA}} Logo',
    html: `
      <div style="text-align:left; max-height:400px; overflow-y:auto; font-size:14px; line-height:1.6;">
        <h3>1. Información que Recopilamos</h3>
        <p>A través de nuestro formulario de contacto, recopilamos: nombre, correo electrónico, 
        asunto y mensaje. Esta información se proporciona de forma voluntaria.</p>
        
        <h3>2. Uso de la Información</h3>
        <p>La información se utiliza exclusivamente para: responder consultas, proporcionar 
        información sobre nuestros servicios y mejorar la experiencia del usuario.</p>
        
        <h3>3. Protección de Datos</h3>
        <p>Implementamos medidas de seguridad técnicas (HTTPS/TLS) para proteger su información 
        personal contra acceso no autorizado.</p>
        
        <h3>4. Cookies y Tecnologías de Rastreo</h3>
        <p>Este sitio utiliza cookies de análisis (Google Analytics) para comprender el comportamiento 
        de los usuarios. Puede desactivar las cookies en la configuración de su navegador.</p>
        
        <h3>5. Compartición de Datos</h3>
        <p>{{MARCA}} no vende, alquila ni comparte información personal con terceros, excepto 
        cuando sea requerido por ley.</p>
        
        <h3>6. Derechos del Titular</h3>
        <p>Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus 
        datos personales (Derechos ARCO/equivalentes en su jurisdicción). Para ejercerlos, contacte a: 
        <a href="mailto:{{EMAIL_PRIVACIDAD}}">{{EMAIL_PRIVACIDAD}}</a></p>
        
        <h3>7. Retención de Datos</h3>
        <p>Los datos se conservan únicamente el tiempo necesario para cumplir con los fines para los 
        que fueron recopilados.</p>
        
        <h3>8. Cambios a esta Política</h3>
        <p>Nos reservamos el derecho de modificar esta política. Las actualizaciones se publicarán 
        en esta misma sección.</p>
        
        <h3>9. Contacto</h3>
        <p>Para consultas sobre privacidad: <a href="mailto:{{EMAIL_PRIVACIDAD}}">{{EMAIL_PRIVACIDAD}}</a></p>
        <p>Última actualización: {{FECHA}}</p>
      </div>
    `,
    width: 700,
    confirmButtonText: 'Entendido',
    confirmButtonColor: '{{COLOR_MARCA}}',
    showCloseButton: true,
  });
};
```

### Enlaces en el footer:

```html
<div class="terms-links">
  <a href="#0" @click.prevent="showTerminos">Términos de Uso</a> |
  <a href="#0" @click.prevent="showPrivacidad">Política de Privacidad</a>
</div>
```

### Opción B: Páginas separadas (mejor para SEO)

Si prefieres páginas independientes indexables:

```
/terminos-de-uso
/politica-de-privacidad
```

Agregar al `sitemap.xml` y al `robots.txt` (Allow).

### Legislación por país:

| País | Ley principal | Derechos del usuario |
|------|---------------|----------------------|
| México | LFPDPPP | Derechos ARCO |
| España/UE | RGPD (GDPR) | Acceso, rectificación, supresión, portabilidad, oposición |
| EE.UU. (California) | CCPA/CPRA | Saber, eliminar, opt-out de venta |
| Colombia | Ley 1581 de 2012 | Conocer, actualizar, rectificar, suprimir |
| Argentina | Ley 25.326 | Acceso, rectificación, supresión |
| Brasil | LGPD | Similar a GDPR |
| Chile | Ley 19.628 + Ley 21.096 | Acceso, rectificación, cancelación, oposición |

---

## Paso 20: Google Search Console

1. Ir a [Google Search Console](https://search.google.com/search-console)
2. **Agregar propiedad** → Tipo "Prefijo de URL" → `{{URL_COMPLETA}}/`
3. **Verificar propiedad** (opciones):
   - **DNS:** Agregar registro TXT en tu proveedor de DNS
   - **HTML tag:** Agregar `<meta name="google-site-verification" content="..." />` en `<head>`
   - **Archivo HTML:** Subir archivo de verificación a la raíz
4. **Sitemaps** → Enviar: `{{URL_COMPLETA}}/sitemap.xml`
5. **Inspección de URLs** → Pegar URL principal → **"Solicitar indexación"**
6. Esperar 2-7 días para indexación

### Prerendering para SPAs (recomendado)

| Hosting | Cómo activar |
|---------|--------------|
| **Netlify** | Dashboard → Site settings → Build & deploy → Post processing → Enable Prerendering |
| **Vercel** | Automático si usas Next.js/Nuxt; para SPAs puras, usar `@vercel/og` |
| **Cloudflare** | Workers + HTMLRewriter, o prerender.io |
| **Servidor propio** | [Prerender.io](https://prerender.io/) como middleware |

---

## Paso 21: Verificación y Testing

### Herramientas Online

| Qué verifica | URL |
|---|---|
| **Rich Results (Google)** | https://search.google.com/test/rich-results |
| **Schema Validator** | https://validator.schema.org/ |
| **Facebook OG Debugger** | https://developers.facebook.com/tools/debug/ |
| **Twitter Card Validator** | https://cards-dev.twitter.com/validator |
| **PageSpeed Insights** | https://pagespeed.web.google.com/ |
| **Mobile Friendly Test** | https://search.google.com/test/mobile-friendly |
| **Security Headers** | https://securityheaders.com/ |
| **SEO Audit** | https://www.seobility.net/en/seocheck/ |
| **Accesibilidad (WAVE)** | https://wave.webaim.org/ |
| **Contraste de colores** | https://webaim.org/resources/contrastchecker/ |

### Verificar desde view-source

```
view-source:https://www.{{DOMINIO}}/
```

Verificar que aparezcan: `<meta>`, `<link>`, `<script type="application/ld+json">`, `<title>`, `<noscript>`

### Script de consola para verificación rápida

Abrir DevTools (F12) → Console → Pegar:

```javascript
// ========== VERIFICADOR SEO UNIVERSAL ==========
console.log('═══════════════════════════════════');
console.log('    🔍 VERIFICACIÓN SEO COMPLETA');
console.log('═══════════════════════════════════');

const checks = [];
const addCheck = (pass, name, detail = '') => {
  checks.push({ pass, name, detail });
  console.log(`${pass ? '✅' : '❌'} ${name}${detail ? ': ' + detail : ''}`);
};

// Title
const title = document.title;
console.log(`\n📌 TITLE (${title.length} chars):`);
addCheck(title.length >= 30 && title.length <= 65, 'Title longitud', `${title.length} chars`);
console.log(`   "${title}"`);

// Description
const desc = document.querySelector('meta[name="description"]')?.content;
console.log(`\n📝 DESCRIPTION (${desc?.length || 0} chars):`);
addCheck(!!desc && desc.length >= 100 && desc.length <= 165, 'Description', `${desc?.length || 0} chars`);
if (desc) console.log(`   "${desc.substring(0, 100)}..."`);

// Canonical
const canonical = document.querySelector('link[rel="canonical"]')?.href;
addCheck(!!canonical, 'Canonical URL', canonical || 'NO ENCONTRADA');

// Robots
const robots = document.querySelector('meta[name="robots"]')?.content;
addCheck(!!robots && robots.includes('index'), 'Meta Robots', robots || 'NO ENCONTRADA');

// Keywords
const keywords = document.querySelector('meta[name="keywords"]')?.content;
addCheck(!!keywords && keywords.split(',').length >= 10, 'Keywords', `${keywords?.split(',').length || 0} encontradas`);

// Hreflang
const hreflangs = document.querySelectorAll('link[hreflang]');
addCheck(hreflangs.length >= 2, 'Hreflang', `${hreflangs.length} encontrados`);

// Geo
const geoRegion = document.querySelector('meta[name="geo.region"]')?.content;
addCheck(!!geoRegion, 'Geolocalización', geoRegion || 'NO ENCONTRADA');

// Open Graph
const ogTags = document.querySelectorAll('meta[property^="og:"]');
addCheck(ogTags.length >= 8, 'Open Graph', `${ogTags.length} metas`);

// Twitter
const twTags = document.querySelectorAll('meta[name^="twitter:"]');
addCheck(twTags.length >= 4, 'Twitter Card', `${twTags.length} metas`);

// fb:app_id
const fbAppId = document.querySelector('meta[property="fb:app_id"]')?.content;
addCheck(!!fbAppId, 'fb:app_id', fbAppId || 'NO ENCONTRADA');

// JSON-LD
const schemas = document.querySelectorAll('script[type="application/ld+json"]');
const schemaTypes = [];
schemas.forEach(s => {
  try { schemaTypes.push(JSON.parse(s.textContent)['@type']); } catch(e) {}
});
addCheck(schemas.length >= 3, 'JSON-LD Schemas', schemaTypes.join(', ') || 'NO ENCONTRADOS');

// Imágenes
const imgs = document.querySelectorAll('img');
const noAlt = [...imgs].filter(i => !i.alt || i.alt.trim() === '' || i.alt === 'image');
const noDims = [...imgs].filter(i => !i.width || !i.height);
addCheck(noAlt.length === 0, 'Alt tags completos', `${noAlt.length} sin alt de ${imgs.length} total`);
addCheck(noDims.length === 0, 'Dimensiones img', `${noDims.length} sin width/height`);

// WebP
const pictures = document.querySelectorAll('picture');
const webpSources = document.querySelectorAll('source[type="image/webp"]');
addCheck(pictures.length > 0, 'Imágenes WebP', `${pictures.length} <picture>, ${webpSources.length} <source> WebP`);

// Theme color
const theme = document.querySelector('meta[name="theme-color"]')?.content;
addCheck(!!theme, 'Theme Color', theme || 'NO ENCONTRADO');

// Noscript
const noscript = document.querySelector('noscript');
addCheck(!!noscript, 'Noscript Fallback');

// Favicon
addCheck(!!document.querySelector('link[rel="icon"]'), 'Favicon');
addCheck(!!document.querySelector('link[rel="apple-touch-icon"]'), 'Apple Touch Icon');

// Preload
const preloads = document.querySelectorAll('link[rel="preload"]');
addCheck(preloads.length > 0, 'Preload hints', `${preloads.length} encontrados`);

// Viewport
const viewport = document.querySelector('meta[name="viewport"]')?.content;
addCheck(!!viewport, 'Viewport meta', viewport || 'NO ENCONTRADA');

// HSTS (solo detectable si se inspecciona response headers)
console.log('\n⚠️ Headers de seguridad: verificar en securityheaders.com');

// Resumen
console.log('\n═══════════════════════════════════');
console.log('    📋 RESUMEN');
console.log('═══════════════════════════════════');
const passed = checks.filter(c => c.pass).length;
const total = checks.length;
console.log(`\n   🏆 SCORE: ${passed}/${total} (${Math.round(passed/total*100)}%)`);

if (passed < total) {
  console.log('\n   ⚠️ PENDIENTES:');
  checks.filter(c => !c.pass).forEach(c => console.log(`      → ${c.name}`));
}
console.log('═══════════════════════════════════');
```

---

## Errores Comunes y Soluciones

### ERR_TOO_MANY_REDIRECTS
- **Causa:** Redirección www configurada en DOS lugares (config + dashboard)
- **Solución:** Configurarla en UN solo lugar

### JSON-LD no aparece en Rich Results Test
- **Causa:** Error de sintaxis JSON (coma extra, comilla faltante)
- **Solución:** Validar en https://jsonlint.com/

### Advertencia: `geo` no reconocido en Organization
- **Causa:** `"geo"` directo dentro de `Organization` 
- **Solución:** Usar `"location"` → `Place` → `"geo"`

### Error `speakable.cssSelector` en WebPage
- **Causa:** `speakable` con CSS selectors en SPA donde no existen en HTML inicial
- **Solución:** Eliminar `speakable` o usar SSR

### Open Graph no muestra preview correcta
- **Causa:** Caché de Facebook
- **Solución:** [Facebook Debugger](https://developers.facebook.com/tools/debug/) → "Scrape Again"

### CSP bloquea recursos
- **Causa:** Origen no incluido en la whitelist del CSP
- **Solución:** Revisar consola del navegador → agregar el dominio bloqueado a la directiva correspondiente

### CLS alto (>0.25)
- **Causa:** Imágenes sin dimensiones, contenido dinámico sin espacio reservado
- **Solución:** `width` + `height` en imgs, `min-height` + `contain: layout` en contenedores

### `font-display` no tiene efecto
- **Causa:** Se editó el CSS pero el CDN/cache sirve la versión vieja
- **Solución:** Purgar caché del CDN, agregar query string a la URL del CSS (`?v=2`)

---

## Checklist Final

### 🔤 HTML y Meta Tags
```
□ HTML lang correcto (no "zxx")
□ Title optimizado (50-60 chars, marca + servicio + ubicación)
□ Meta description (150-160 chars)
□ Meta keywords (30+ términos)
□ Meta robots (index, follow)
□ Viewport meta configurada
□ URL canónica
□ Hreflang (idioma + región + x-default)
□ Geolocalización (geo.region, geo.position, ICBM)
□ Theme color
□ Favicon + Apple Touch Icon
```

### 📱 Redes Sociales
```
□ Open Graph completo (8+ metas)
□ fb:app_id configurado
□ Twitter Card completo (7 metas)
□ Imagen OG de 1200×630 px
```

### 📊 Datos Estructurados
```
□ JSON-LD Organization (con location/geo, streetAddress, postalCode)
□ JSON-LD ProfessionalService/LocalBusiness con catálogo
□ JSON-LD WebSite
□ JSON-LD WebPage con breadcrumb
□ JSON-LD FAQPage (5+ preguntas)
□ Validado en Rich Results Test sin errores
```

### 🖼️ Imágenes
```
□ Todas las imágenes con alt descriptivos
□ Todas las imágenes con width y height explícitos
□ Imágenes convertidas a WebP con <picture> fallback
□ Hero/slides: versiones mobile y desktop
□ Logos redimensionados al tamaño de display
□ Iconos redimensionados (128px o menos)
□ Preload de imagen hero (LCP)
□ loading="lazy" en imágenes no críticas
□ fetchpriority="high" en imagen hero
```

### ⚡ Rendimiento
```
□ font-display: swap en todas las @font-face
□ Preconnect solo para recursos de primera carga
□ dns-prefetch para recursos secundarios
□ Scripts no-minificados minificados con Terser
□ min-height + contain: layout en secciones dinámicas
□ object-fit: contain en imágenes con aspect ratio forzado
□ productionSourceMap: false en config de build
□ Cache headers configurados (1 año para assets)
```

### ♿ Accesibilidad
```
□ aria-label en enlaces con solo íconos
□ Orden de encabezados h1→h2→h3 sin saltos
□ Formularios con labels o aria-label
□ Contraste de colores suficiente (4.5:1)
```

### 🔒 Seguridad
```
□ Content-Security-Policy configurado
□ Cross-Origin headers (COOP, COEP, CORP)
□ X-Frame-Options: SAMEORIGIN
□ X-Content-Type-Options: nosniff
□ Strict-Transport-Security (HSTS)
□ securityheaders.com reporta A o A+
```

### 📄 Archivos
```
□ robots.txt con referencia a sitemap
□ sitemap.xml actualizado con imágenes y hreflang
□ Noscript fallback con contenido HTML (SPAs)
□ Config de hosting con headers y cache
```

### ⚖️ Legal
```
□ Términos de Uso (modal o página)
□ Política de Privacidad (modal o página)
□ Cumplimiento con ley de datos de tu país
□ Email de contacto para derechos de usuario
```

### 🔍 Indexación
```
□ Google Search Console configurado
□ Sitemap enviado a Google
□ Indexación solicitada
□ Prerendering activado (SPAs)
□ Verificación con script de consola: ≥90%
```

---

## Plantilla de Prompt para IA

Si deseas que una IA (como GitHub Copilot, ChatGPT, Claude, etc.) aplique esta guía automáticamente a tu proyecto, usa este prompt:

### Prompt completo:

```
Necesito que optimices el SEO de mi landing page siguiendo esta configuración:

== DATOS DEL NEGOCIO ==
- Nombre: [tu marca]
- Tipo: [tipo de empresa, ej: "agencia de marketing digital"]
- Año de fundación: [año]
- Dominio: [dominio.com]
- Color principal: [#hexcolor]

== UBICACIÓN ==
- Dirección: [calle y número]
- Ciudad: [ciudad]
- Estado/Provincia: [estado]
- País: [país]
- Código postal: [CP]
- Coordenadas: [lat], [lon] (buscar en Google Maps)

== CONTACTO ==
- Teléfono: [+XX-XXX-XXXX]
- Email general: [email]
- Email privacidad: [email para derechos ARCO/GDPR]

== REDES SOCIALES ==
- Facebook: [URL + App ID si tienes]
- Instagram: [URL]
- LinkedIn: [URL]
- Twitter/X: [@usuario]

== SERVICIOS (listar todos) ==
1. [Servicio 1]: [descripción breve]
2. [Servicio 2]: [descripción breve]
3. [Servicio 3]: [descripción breve]

== KEYWORDS (listar 20-30) ==
[keyword1], [keyword2], [keyword3], ...

== STACK TÉCNICO ==
- Framework: [Vue.js / React / Angular / Next.js / Nuxt / HTML estático]
- Hosting: [Netlify / Vercel / Cloudflare / Apache / Nginx]
- Es SPA: [sí/no]

== TAREAS A REALIZAR ==
1. Configurar todas las meta tags de SEO en index.html
2. Agregar datos estructurados JSON-LD (Organization, ProfessionalService, WebSite, WebPage, FAQPage)
3. Crear/actualizar robots.txt y sitemap.xml
4. Configurar headers de seguridad en [netlify.toml / vercel.json / .htaccess / nginx.conf]
5. Convertir imágenes a WebP con <picture> fallback
6. Agregar preload para imagen hero (LCP)
7. Configurar font-display: swap en todas las @font-face
8. Agregar aria-labels para accesibilidad
9. Agregar modales de Términos de Uso y Política de Privacidad
10. Minificar scripts JS no minificados
11. Agregar noscript fallback (si es SPA)
12. Configurar cache headers para assets estáticos

Aplica cada cambio directamente en los archivos correspondientes. 
Usa placeholders solo donde no te proporcioné la información.
```

### Prompt rápido (para proyectos donde ya tienes el HTML base):

```
Revisa mi index.html y aplica las siguientes optimizaciones SEO:

1. Verifica y completa meta tags (title, description, keywords, robots, canonical, hreflang, geo)
2. Verifica y completa Open Graph + Twitter Card
3. Agrega/corrige datos estructurados JSON-LD (5 schemas: Organization, ProfessionalService, WebSite, WebPage, FAQPage)
4. Verifica que todas las <img> tengan alt, width, height, loading y decoding
5. Verifica orden de encabezados (h1→h2→h3)
6. Agrega aria-label a enlaces con solo íconos

Datos del negocio:
- Nombre: [marca]
- Dominio: https://www.[dominio].com
- Ciudad: [ciudad], [país]
- Teléfono: [tel]
- Email: [email]
```

---

> **Última actualización:** 28 de febrero de 2026  
> **Autor original:** Kernesys  
> **Licencia:** Uso libre. Atribución apreciada pero no requerida.  
> **Próxima revisión recomendada:** Cada 3 meses o ante cambios de algoritmo de Google
