import ProductCard from "./ProductCard";

export default function IndustryCard(props) {
  // For now, IndustryCard shares the same visual architecture as ProductCard,
  // but exists as a separate component for future domain-specific divergence.
  return <ProductCard {...props} />;
}
