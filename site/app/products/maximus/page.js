import ProductDetailLayout from "@/components/ProductDetailLayout";
import { products } from "@/data/products";
import { maximusContent, maximusSeo } from "./_components/maximusData";

export const metadata = {
  title: maximusSeo.title,
  description: maximusSeo.description,
};

export default function MaximusProductPage() {
  const product = products.find(p => p.id === "maximus");
  return <ProductDetailLayout product={product} content={maximusContent} />;
}
