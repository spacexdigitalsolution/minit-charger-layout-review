import StatModule from "@/components/StatModule";
import LeadershipQuote from "./_components/LeadershipQuote";
import HeroAnimation from "./_components/HeroAnimation";
import PurposeStatement from "./_components/PurposeStatement";
import ValuesSection from "./_components/ValuesSection";
import AboutBridges from "./_components/AboutBridges";

export const metadata = {
  title: 'About Us | Minit Charger',
  description: 'Learn about Minit Charger, our mission, and our 25+ years of expertise in fast-charging technology.',
};

const stats = [
  { targetValue: "25+", unit: "", label: "Years of Expertise" },
  { targetValue: "2018", unit: "", label: "Founding Year" },
  { targetValue: "150+", unit: "", label: "Employees" }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black font-sans selection:bg-green-500/30 selection:text-white">
      <div className="bg-black">
        <HeroAnimation />
      </div>
      <PurposeStatement />
      <StatModule
        theme="light"
        title={"Proven\nAt Scale"}
        description="With over two decades of expertise, our footprint extends across major industrial operations globally."
        stats={stats}
      />
      <ValuesSection />
      <LeadershipQuote
        quote="We are building the infrastructure that will power the next century of clean industry."
        name="Jane Doe"
        title="Chief Executive Officer"
      />
      <AboutBridges />
    </main>
  );
}
