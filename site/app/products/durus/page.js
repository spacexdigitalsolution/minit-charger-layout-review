import ProductDetailLayout from "@/components/product/ProductDetailLayout";
import { products } from "@/data/products";
import { durusContent, durusSeo } from "./_components/durusData";

export const metadata = {
  title: durusSeo.title,
  description: durusSeo.description,
};

export default function DurusProductPage() {
  const product = products.find(p => p.id === "durus");
  return <ProductDetailLayout product={product} content={durusContent} />;
}
