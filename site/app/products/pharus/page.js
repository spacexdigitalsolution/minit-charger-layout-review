import ProductDetailLayout from "@/components/product/ProductDetailLayout";
import { products } from "@/data/products";
import { pharusContent, pharusSeo } from "./_components/pharusData";

export const metadata = {
  title: pharusSeo.title,
  description: pharusSeo.description,
};

export default function PharusProductPage() {
  const product = products.find(p => p.id === "pharus");
  return <ProductDetailLayout product={product} content={pharusContent} />;
}
