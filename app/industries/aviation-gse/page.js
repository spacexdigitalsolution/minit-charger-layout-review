import HeroSection from "./_components/HeroSection";
import SignatureSolution from "./_components/SignatureSolution";
import PersonaSplit from "./_components/PersonaSplit";
import BenefitModules from "./_components/BenefitModules";
import RelatedProducts from "./_components/RelatedProducts";
import FaqSection from "./_components/FaqSection";
import ConversionBand from "./_components/ConversionBand";
import SmoothScroll from "@/app/products/altus-ii/_components/SmoothScroll";

export const metadata = {
  title: "Aviation GSE Fast Charging | Minit Charger",
  description: "Keep the ramp moving with intelligent, high-power fast charging for ground support equipment. Maximize uptime and consolidate mixed fleets on one platform.",
};

export default function AviationGSEPage() {
  return (
    <>
      <HeroSection />
      <SmoothScroll>
        <div className="relative z-10 bg-white dark:bg-zinc-950">
          <SignatureSolution />
          <PersonaSplit />
          <BenefitModules />
          <RelatedProducts />
          <FaqSection />
          <ConversionBand />
        </div>
      </SmoothScroll>
    </>
  );
}
