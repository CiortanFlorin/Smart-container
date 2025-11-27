import { productData } from "@/app/data/productData";
import ProductPageTemplate from "@/app/template/ProductPageTemplate";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = productData.find((p) => p.slug === slug);

  if (!product) {
    return <div className="pt-32 text-center">Produsul nu a fost găsit.</div>;
  }

  return <ProductPageTemplate product={product} />;
}
