const BASE = "https://smartcontainer.ro";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SmartContainer",
    url: BASE,
    image: `${BASE}/foto-container.webp`,
    telephone: "+40751518502",
    email: "viorelciortan2@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calea Smardan nr. 2",
      addressLocality: "Galați",
      addressCountry: "RO",
    },
  };
}

export function productJsonLd(product, slug) {
  const priceNumber = Number(String(product.price).replace(/[^\d]/g, ""));
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.longDescription,
    image: product.images.landscape.map((img) => `${BASE}${img.src}`),
    offers: {
      "@type": "Offer",
      url: `${BASE}/produse/${slug}`,
      priceCurrency: "EUR",
      price: priceNumber,
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.url}`,
    })),
  };
}
