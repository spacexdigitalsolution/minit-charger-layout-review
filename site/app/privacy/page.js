import Link from "next/link";
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

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose dark:prose-invert max-w-none space-y-10 text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
          <section>
            <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              1. Overview and Scope
            </h2>
            <p>
              Protecting your private information is our priority. This Statement of Privacy applies to Minit Charger LLC (&quot;Minit Charger&quot;) and governs data collection, telemetry processing, and usage across our web domain (www.minitcharger.com) and the Cumulus Cloud Fleet Management platform.
            </p>
          </section>

          <section>
            <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              2. Collection of Information
            </h2>
            <p className="mb-3">
              In order to better provide you with fleet products, charger diagnostic services, and feasibility assessments, Minit Charger may collect information including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>First and Last Name, Business Email Address, Phone Number, Employer / Organization, and Job Title.</li>
              <li>Facility address, electrical drop parameters, and fleet size specifications submitted via consultation forms.</li>
              <li>Charger hardware serial numbers, firmware versions, kilowatt-hour consumption, and telemetry metrics delivered via Cumulus Cloud and CellTrac devices.</li>
              <li>Billing and invoicing contact information for procurement transactions.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              3. Telemetry and Operational Equipment Data
            </h2>
            <p>
              Data transmitted from Minit Charger equipment (such as Altus II, Magnus, Mobilus, and CellTrac sensors) includes battery voltage, amperage, operating temperatures, State of Charge (SoC), and fault diagnostics. This telemetry is processed to deliver predictive maintenance alerts, power sharing optimization, and automated tenant energy billing. Minit Charger never sells operational fleet telemetry to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              4. Sharing Information with Trusted Partners
            </h2>
            <p>
              Minit Charger does not sell, rent, or lease customer information. We may share encrypted operational records with trusted technical partners for specialized purposes, including hosting provider infrastructure, cellular telemetry transit, and field service technician dispatch. All such partners are strictly bound by confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              5. Security and Data Protection
            </h2>
            <p>
              We implement industry-standard encryption protocols (TLS 1.3 in-transit and AES-256 at-rest) to safeguard communications between our website, our hardware endpoints, and our cloud infrastructure.
            </p>
          </section>

          <section>
            <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              6. Contact Information
            </h2>
            <p>
              Minit Charger welcomes your questions regarding this Privacy Policy. Please direct inquiries to:
            </p>
            <div className="mt-4 p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-sm">
              <p className="font-bold text-zinc-900 dark:text-white">Minit Charger LLC</p>
              <p>7303 W Boston St, Chandler, AZ 85226</p>
              <p>Phone: (908) 789-8700</p>
              <p>Email: privacy@minitcharger.com</p>
            </div>
          </section>
        </div>
      </div>

      <ConversionBand
        headline="Have questions about our data governance or compliance?"
        subheadline="Our legal and compliance team is available to discuss enterprise security agreements and SOC 2 audits."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "Back to Home", href: "/" }}
      />
    </main>
  );
}
