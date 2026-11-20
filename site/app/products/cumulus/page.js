import ProductDetailLayout from "@/components/product/ProductDetailLayout";
import { products } from "@/data/products";
import { cumulusContent, cumulusSeo } from "./_components/cumulusData";

export const metadata = {
  title: cumulusSeo.title,
  description: cumulusSeo.description,
};

export default function CumulusProductPage() {
  const product = products.find(p => p.id === "cumulus");
  return <ProductDetailLayout product={product} content={cumulusContent} />;
}
