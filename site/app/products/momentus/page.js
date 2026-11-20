import ProductDetailLayout from "@/components/ProductDetailLayout";
import { products } from "@/data/products";
import { momentusContent, momentusSeo } from "./_components/momentusData";

export const metadata = {
  title: momentusSeo.title,
  description: momentusSeo.description,
};

export default function MomentusProductPage() {
  const product = products.find(p => p.id === "momentus");
  return <ProductDetailLayout product={product} content={momentusContent} />;
}
