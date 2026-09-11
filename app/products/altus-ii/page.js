import HeroSection from "./_components/HeroSection";
import BenefitsGrid from "./_components/BenefitsGrid";
import HardwareDetail from "./_components/HardwareDetail";
import StatModule from "./_components/StatModule";
import SpecsTable from "./_components/SpecsTable";
import UseCases from "./_components/UseCases";
import RelatedProducts from "./_components/RelatedProducts";
import FaqSection from "./_components/FaqSection";
import VideoModule from "./_components/VideoModule";
import CloudEcosystem from "./_components/CloudEcosystem";
import ConversionBand from "./_components/ConversionBand";
import SmoothScroll from "./_components/SmoothScroll";

export default function AltusIIProductPage() {
  return (
    <>
      <HeroSection />
      <SmoothScroll>
        <div className="relative z-10 bg-white dark:bg-zinc-950">
          <BenefitsGrid />
          <HardwareDetail />
          <StatModule />
          <SpecsTable />
          <VideoModule />
          <CloudEcosystem />
          <UseCases />
          <RelatedProducts />
          <FaqSection />
          <ConversionBand />
        </div>
      </SmoothScroll>
    </>
  );
}
