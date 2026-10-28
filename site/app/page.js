import HomeHero from "./_components/HomeHero";
import ProblemFraming from "./_components/ProblemFraming";
import EnvironmentGrid from "./_components/EnvironmentGrid";
import EngineeredAdvantages from "./_components/EngineeredAdvantages";
import InteractiveScenes from "./_components/InteractiveScenes";
import ImageCardGrid from "@/components/ImageCardGrid";
import ProcessSteps from "./_components/ProcessSteps";
import FaqSection from "@/components/FaqSection";
import ConversionBand from "@/components/ConversionBand";
import CumulusSpotlight from "@/components/CumulusSpotlight";
import TabbedProductCatalog from "./_components/TabbedProductCatalog";
import ConsolidatedProof from "./_components/ConsolidatedProof";
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
      <ImageCardGrid
        title="Knowledge Hub & Field Updates"
        description="Insights from active airport ramps, high-throughput distribution centers, and fleet charging deployments."
        cards={featuredBlogs}
        viewAllLink="/blogs"
        viewAllText="View All Articles"
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
      />
    </div>
  );
}
