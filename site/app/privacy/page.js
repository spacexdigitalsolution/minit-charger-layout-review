import PrivacyContent from "./_components/PrivacyContent";
import ConversionBand from "@/components/ConversionBand";

export const metadata = {
  title: "Privacy Policy | Minit Charger",
  description: "Learn how Minit Charger collects, uses, and safeguards customer data, telemetry records, and personally identifiable information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <div className="pt-32 pb-16 bg-zinc-950 border-b border-zinc-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-3">
            Legal & Governance
          </span>
          <h1 className="font-oswald text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-sm">
            Last Updated: October 2026 | Effective Date: October 28, 2026
          </p>
        </div>
      </div>

      <PrivacyContent />

      <ConversionBand
        headline="Have questions about our data governance or compliance?"
        subheadline="Our legal and compliance team is available to discuss enterprise security agreements and SOC 2 audits."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "Back to Home", href: "/" }}
      />
    </main>
  );
}
