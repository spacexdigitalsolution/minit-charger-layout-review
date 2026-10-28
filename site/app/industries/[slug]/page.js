import IndustryDetailLayout from "@/components/IndustryDetailLayout";
import UnderDevelopment from "@/components/UnderDevelopment";
import { industries } from "@/data/industries";

export function generateStaticParams() {
  return industries.map(i => ({ slug: i.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = industries.find(i => i.id === slug || i.slug === slug);
  if (!industry) return { title: "Industry | Minit Charger" };
  return {
    title: `${industry.title} | Minit Charger`,
    description: industry.shortDescription || industry.headline,
  };
}

export default async function DynamicIndustryPage({ params }) {
  const { slug } = await params;
  const industry = industries.find(i => i.id === slug || i.slug === slug);

  if (!industry) {
    return (
      <div className="pt-32 pb-20">
        <UnderDevelopment title="Industry Solution Not Found" returnUrl="/industries" />
      </div>
    );
  }

  return <IndustryDetailLayout industry={industry} />;
}
