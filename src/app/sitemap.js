import fs from "fs";
import path from "path";
import { productData } from "./data/productData";

const BASE = "https://smartcontainer.ro";

function getArticleSlugs() {
  const dir = path.join(process.cwd(), "src/app/articole");
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { url: `${BASE}/`, lastModified: now, priority: 1.0 },
    { url: `${BASE}/contact`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/galerie`, lastModified: now, priority: 0.5 },
  ];

  const productRoutes = productData.map((product) => ({
    url: `${BASE}/produse/${product.slug}`,
    lastModified: now,
    priority: 0.9,
  }));

  const articleRoutes = getArticleSlugs().map((slug) => ({
    url: `${BASE}/articole/${slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...articleRoutes];
}
