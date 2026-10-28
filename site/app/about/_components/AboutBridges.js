// section: about-bridges
import Link from "next/link";

export default function AboutBridges() {
  return (
    <section data-section="about-bridges" className="bg-white py-24 border-t border-zinc-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="font-display text-3xl font-bold text-zinc-950 mb-4">Join Our Team</h3>
          <p className="text-lg text-zinc-600 mb-8 font-light max-w-sm">
            We are always looking for innovators who are ready to power the future of transportation.
          </p>
          <Link href="/contact" className="inline-flex items-center text-green-500 hover:text-green-400 font-bold uppercase text-sm transition-colors group">
            View Careers
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        <div>
          <h3 className="font-display text-3xl font-bold text-zinc-950 mb-4">Sustainability</h3>
          <p className="text-lg text-zinc-600 mb-8 font-light max-w-sm">
            Discover how our charging solutions reduce emissions and support a greener supply chain.
          </p>
          <Link href="/contact" className="inline-flex items-center text-green-500 hover:text-green-400 font-bold uppercase text-sm transition-colors group">
            Learn More
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

