import ProductDetailLayout from "@/components/product/ProductDetailLayout";
import { products } from "@/data/products";
import { celltracContent, celltracSeo } from "./_components/celltracData";

export const metadata = {
  title: celltracSeo.title,
  description: celltracSeo.description,
};

export default function CelltracProductPage() {
  const product = products.find(p => p.id === "celltrac");
  return <ProductDetailLayout product={product} content={celltracContent} />;
}
