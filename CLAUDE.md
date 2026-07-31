# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

SmartContainer is a Next.js marketing/e-commerce site (Romanian language, `lang="ro"`) for a company selling modular shipping containers (housing, offices, sanitary units, construction sites). It's a content-heavy site: product pages, an SEO article section, a photo gallery, and a contact form that emails leads via Gmail SMTP. There is no database — all product/content data lives in static JS files under `src/app/data/`.

## Commands

```bash
npm run dev      # start dev server (Next.js, localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint (eslint-config-next core-web-vitals)
```

There is no test suite configured.

## Architecture

- **Next.js App Router**, JavaScript only (no TypeScript), all under `src/app/`. Path alias `@/*` maps to `src/*` (see `jsconfig.json`).
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`), configured through CSS in `src/app/globals.css` rather than a `tailwind.config.js`. Custom theme colors are CSS variables (`--color-primary`, `--color-accent`, `--color-light`) referenced in JSX with Tailwind's `bg-(--color-primary)` arbitrary-value syntax. Fonts (Inter, Poppins) are loaded via `next/font/google` in `src/app/layout.js` and exposed as CSS variables.
- **Global layout**: `src/app/layout.js` wraps every route with `Navbar` and `Footer` (`src/app/components/`). Page metadata (title/description/OG tags) is exported per-page via the `metadata` object or `generateMetadata`, following Next.js App Router SEO conventions — every route defines rich Romanian-language SEO metadata; keep that pattern when adding pages.

### Products

- Product data (name, slug, price, size, descriptions, image lists) is centralized in `src/app/data/productData.js` as a single array. There is no CMS/DB — adding a product means adding an entry here plus corresponding images.
- Dynamic route `src/app/produse/[slug]/page.js` looks up the product by slug and renders it through the shared `src/app/template/ProductPageTemplate.js` client component, which handles the landscape/portrait image switcher (landscape images used on desktop, portrait on mobile — every product needs both sets under `public/products/landscape/` and `public/products/portrait/`).

### Articles

- SEO articles live as individual static pages under `src/app/articole/<slug>/page.js`, each with its own hardcoded `metadata` export and JSX content (no shared article template/CMS). The article list is duplicated manually in `Navbar` (both desktop and mobile dropdown menus) — adding a new article requires adding both the page and the two nav entries in `src/app/components/navbar.js`.

### Gallery

- `src/app/lib/getGalleryImages.js` reads the `public/gallery/` directory server-side (`fs.readdirSync`) to build the image list at request time — dropping a file into `public/gallery/` is enough to add it to the gallery, no code change needed. Rendered by the client component `src/app/components/gallery.js`, which disables the lightbox/hover-zoom on mobile (viewport-width based, not CSS-only).

### Contact form

- `src/app/components/contactForm.js` (client) posts to `src/app/api/contact/route.js`, a Next.js Route Handler that sends mail via `nodemailer` using Gmail SMTP. Required env vars: `CONTACT_EMAIL`, `CONTACT_PASS`, `RECEIVING_EMAIL` (set in `.env.local`, not committed).
- The form has a simple human-verification field ("What is 3 + 2?") checked server-side against a hardcoded expected string in `route.js` — if you change the question in `contactForm.js`, update the check in `route.js` to match.

## SEO

`public/sitemap.xml` and `public/robots.txt` are hand-maintained static files — new routes (products, articles) must be added to `sitemap.xml` manually.
