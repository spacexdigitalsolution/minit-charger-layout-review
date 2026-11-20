import ProductDetailLayout from "@/components/ProductDetailLayout";
import { products } from "@/data/products";
import { magnusContent, magnusSeo } from "./_components/magnusData";

export const metadata = {
  title: magnusSeo.title,
  description: magnusSeo.description,
};

export default function MagnusProductPage() {
  const product = products.find(p => p.id === "magnus");
  return <ProductDetailLayout product={product} content={magnusContent} />;
}
