import TermsContent from "./_components/TermsContent";
import ConversionBand from "@/components/ConversionBand";

export const metadata = {
  title: "Terms & Conditions | Minit Charger",
  description: "Terms of service, warranty provisions, intellectual property rights, and commercial operational agreements governing Minit Charger products.",
};

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="pt-32 pb-16 bg-zinc-950 border-b border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-3">
            Legal & Governance
          </span>
          <h1 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-zinc-400 text-sm">
            Last Updated: October 2026 | Effective Date: October 28, 2026
          </p>
        </div>
      </div>

      <TermsContent />

      <ConversionBand
        headline="Ready to discuss commercial procurement or enterprise master agreements?"
        subheadline="Our corporate procurement and legal team can provide master service agreements (MSA) and SLA specifications."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "Explore Products", href: "/products" }}
      />
    </main>
  );
}
