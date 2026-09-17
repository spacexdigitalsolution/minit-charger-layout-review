import UnderDevelopment from "@/app/components/UnderDevelopment";
import { products } from "@/data/products";

export default function ProductPlaceholderPage({ params }) {
  const { slug } = params;
  const product = products.find(p => p.id === slug);
  const title = product ? product.name : "Product";

  return (
    <div className="pt-32 pb-20">
      <UnderDevelopment title={title} returnUrl="/products" />
    </div>
  );
}
