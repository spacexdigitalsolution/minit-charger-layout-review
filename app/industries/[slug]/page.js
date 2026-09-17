import UnderDevelopment from "@/app/components/UnderDevelopment";
import { industryCategories } from "@/data/categories";

export default function IndustryPlaceholderPage({ params }) {
  const { slug } = params;
  const industry = industryCategories.find(i => i.id === slug);
  const title = industry ? industry.name : "Industry";

  return (
    <div className="pt-32 pb-20">
      <UnderDevelopment title={title} returnUrl="/industries" />
    </div>
  );
}
