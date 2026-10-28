import Link from "next/link";
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

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose dark:prose-invert max-w-none space-y-10 text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
          <section>
            <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              1. Agreement Between User and Minit Charger
            </h2>
            <p>
              Welcome to www.minitcharger.com (the &quot;Site&quot;). The Site is operated by Minit Charger LLC (&quot;Minit Charger&quot;). Access to and use of this Site, related telematics dashboards, and hardware diagnostic services are conditioned on your acceptance without modification of the terms, conditions, and notices contained herein.
            </p>
          </section>

          <section>
            <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              2. Intellectual Property and Proprietary Rights
            </h2>
            <p>
              All hardware schematics, software algorithms, firmware protocols, brand assets, trade dress, and documentation published on this Site or embedded within Minit Charger products are the intellectual property of Minit Charger LLC or its licensed suppliers. You may not modify, reverse engineer, decompile, or create derivative works from our hardware or software systems.
            </p>
          </section>

          <section>
            <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              3. Commercial Equipment Use and Safety Guidelines
            </h2>
            <p>
              Minit Charger systems (including Altus II, Magnus, Mobilus, Momentus, Maximus, and Durus) are engineered for professional commercial and industrial operations. Installation, electrical interconnection, and servicing must be conducted in strict accordance with local electrical codes (NEC, NFPA, UL 2202, CE) and manufacturer specifications by qualified personnel.
            </p>
          </section>

          <section>
            <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              4. Disclaimer of Warranties and Limitation of Liability
            </h2>
            <p>
              While Minit Charger strives for continuous operational excellence and 99.9% cloud availability, website information and telemetry feeds are provided on an &quot;as is&quot; basis. In no event shall Minit Charger LLC be liable for indirect, incidental, punitive, or consequential damages resulting from utility grid disruptions or third-party electrical failures.
            </p>
          </section>

          <section>
            <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              5. Governing Law and Dispute Resolution
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the State of Arizona and the federal laws of the United States. Any disputes arising under these terms shall be resolved through binding commercial arbitration in Maricopa County, Arizona.
            </p>
          </section>

          <section>
            <h2 className="font-oswald text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white mb-4">
              6. Contact Us
            </h2>
            <div className="p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-sm">
              <p className="font-bold text-zinc-900 dark:text-white">Minit Charger LLC</p>
              <p>7303 W Boston St, Chandler, AZ 85226</p>
              <p>Phone: (908) 789-8700</p>
              <p>Email: legal@minitcharger.com</p>
            </div>
          </section>
        </div>
      </div>

      <ConversionBand
        headline="Ready to discuss commercial procurement or enterprise master agreements?"
        subheadline="Our corporate procurement and legal team can provide master service agreements (MSA) and SLA specifications."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "Explore Products", href: "/products" }}
      />
    </main>
  );
}
