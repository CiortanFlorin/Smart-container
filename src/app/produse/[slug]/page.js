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

  const firstImage = product.images?.[0];

   return {
    title: `${product.name} – Container modular de vanzare | SmartContainer`,
    description: `${product.name} (${product.size}) – container modular complet echipat de vanzare.`,
    keywords: [
    "containere",
    "containere modulare",
    "containere de vanzare",
    "case din containere",
    "container birou",
    "container locuinta",
    "container sanitar",
    "container modular",
    "containere România",
  ],
    openGraph: firstImage
      ? {
          title: `${product.name} – Container modular de vanzare | SmartContainer`,
          description: `${product.longDescription}`,
          images: [{ url: firstImage }],
        }
      : undefined,
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
