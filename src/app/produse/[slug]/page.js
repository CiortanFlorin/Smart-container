import { productData } from "@/app/data/productData";
import ProductPageTemplate from "@/app/template/ProductPageTemplate";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productData.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Produs negăsit | SmartContainer",
      description: "Produsul căutat nu există în oferta SmartContainer."
    };
  }

  return {
    title: `${product.name} – Container modular ${product.size} | SmartContainer`,
    description: `${product.name} (${product.size}) – container modular complet echipat. Transport în toată țara. Află detalii tehnice, prețuri și vezi galeria foto.`,
    openGraph: {
      title: `${product.name} – Container modular ${product.size} | SmartContainer`,
      description: `${product.longDescription} – container modular complet echipat.`,
      images: product.images ? [product.images[0]] : [],
    }
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = productData.find((p) => p.slug === slug);

  if (!product) {
    return <div className="pt-32 text-center">Produsul nu a fost găsit.</div>;
  }

  return <ProductPageTemplate product={product} />;
}
