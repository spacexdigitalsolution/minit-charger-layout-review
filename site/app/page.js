import HomeHero from "./_components/hero/HomeHero";
import ProblemFraming from "./_components/features/ProblemFraming";
import EnvironmentGrid from "./_components/features/EnvironmentGrid";
import EngineeredAdvantages from "./_components/features/EngineeredAdvantages";
import InteractiveScenes from "./_components/features/InteractiveScenes";
import HomeBlogGrid from "./_components/features/HomeBlogGrid";
import ProcessSteps from "./_components/features/ProcessSteps";
import FaqSection from "@/components/ui/FaqSection";
import ConversionBand from "@/components/ui/ConversionBand";
import CumulusSpotlight from "@/components/ui/CumulusSpotlight";
import TabbedProductCatalog from "./_components/features/TabbedProductCatalog";
import ConsolidatedProof from "./_components/proof/ConsolidatedProof";
import { featuredBlogs, homeFaqs } from "@/data/homeContent";

export default function Home() {
  return (
    <div className="relative z-10 bg-white dark:bg-black font-sans">
      <HomeHero />
      <ProblemFraming />
      <EnvironmentGrid />
      <EngineeredAdvantages />
      <InteractiveScenes />
      <TabbedProductCatalog />
      <CumulusSpotlight />
      <ConsolidatedProof />
      <ProcessSteps />
      <HomeBlogGrid
        title="Knowledge Hub & Field Updates"
        description="Insights from active airport ramps, high-throughput distribution centers, and fleet charging deployments."
        blogs={featuredBlogs}
        linkHref="/blogs"
        linkText="View All Articles"
      />
      <FaqSection
        title="Frequently Answered Questions"
        description="Straight answers on deployment, fleet compatibility, site requirements, and day-to-day operation."
        faqs={homeFaqs}
      />
      <ConversionBand
        title="Plan your charging transition before equipment hits the ground."
        description="Review fleet duty cycles, charger placement, and power requirements with our engineering team."
        buttonText="Request Consultation"
        buttonLink="/contact"
        bgImage="/assets/home/cta/golden-hour-airport-overlook.png"
      />
    </div>
  );
}
