import ProductDetailLayout from "@/components/ProductDetailLayout";
import { products } from "@/data/products";
import { mobilusContent, mobilusSeo } from "./_components/mobilusData";

export const metadata = {
  title: mobilusSeo.title,
  description: mobilusSeo.description,
};

export default function MobilusProductPage() {
  const product = products.find(p => p.id === "mobilus");
  return <ProductDetailLayout product={product} content={mobilusContent} />;
}
