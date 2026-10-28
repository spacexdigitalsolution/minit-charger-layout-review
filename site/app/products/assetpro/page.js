import ProductDetailLayout from "@/components/ProductDetailLayout";
import { products } from "@/data/products";

export const metadata = {
  title: "AssetPro 360 (Cumulus Cloud) | Minit Charger",
  description: "Enterprise fleet visibility and telematics. Rebranded as Cumulus Cloud platform.",
};

export default function AssetproProductPage() {
  const product = products.find(p => p.id === "cumulus");
  return <ProductDetailLayout product={product} />;
}
