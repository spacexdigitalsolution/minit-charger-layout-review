import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatModule from "../components/StatModule";
import Link from "next/link";
import ValuesBlock from "./_components/ValuesBlock";
import LeadershipQuote from "./_components/LeadershipQuote";
import HeroAnimation from "./_components/HeroAnimation";

export const metadata = {
  title: 'About Us | Minit Charger',
  description: 'Learn about Minit Charger, our mission, and our 25+ years of expertise in fast-charging technology.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black font-sans selection:bg-green-500/30 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-black">
        <HeroAnimation />
      </div>

      {/* Purpose Statement */}
      <section className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-3xl md:text-5xl font-medium text-zinc-950   mb-8">
            We engineer scale-proof charging solutions that keep the world's most demanding fleets moving.
          </p>
          <p className="text-xl text-zinc-600 font-light max-w-2xl mx-auto ">
            For over 25 years, Minit Charger has been at the forefront of fast-charging technology, pioneering solutions that prioritize reliability, safety, and efficiency.
          </p>
        </div>
      </section>

      {/* Scale-proof device (Stat Strip) */}
      <StatModule
        theme="light"
        title={"Proven\nAt Scale"}
        description="With over two decades of expertise, our footprint extends across major industrial operations globally."
        stats={[
          { targetValue: "25+", unit: "", label: "Years of Expertise" },
          // TODO: placeholder, confirm real figure
          { targetValue: "2018", unit: "", label: "Founding Year" },
          // TODO: placeholder, confirm real figure
          { targetValue: "150+", unit: "", label: "Employees" }
        ]}
      />

      {/* Values Section */}
      <section className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-5xl font-black text-zinc-950  uppercase">Our Values</h2>
          </div>

          <div className="flex flex-col">
            <ValuesBlock
              title="Innovation"
              description="We push the boundaries of charging technology to solve problems others won't."
              align="left"
              theme="light"
            />
            <ValuesBlock
              title="Reliability"
              description="Our systems are built to withstand the most demanding environments without failure."
              align="right"
              theme="light"
            />
            <ValuesBlock
              title="Safety"
              description="We design with an uncompromising commitment to the protection of people and assets."
              align="left"
              theme="light"
            />
          </div>
        </div>
      </section>

      {/* Leadership Moment */}
      {/* TODO: replace with real leadership quote + photo before launch */}
      <LeadershipQuote
        quote="We are building the infrastructure that will power the next century of clean industry."
        name="Jane Doe"
        title="Chief Executive Officer"
      />

      {/* Bridges */}
      <section className="bg-white py-24 border-t border-zinc-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-display text-3xl font-bold text-zinc-950 mb-4 ">Join Our Team</h3>
            <p className="text-lg text-zinc-600 mb-8 font-light max-w-sm">
              We are always looking for innovators who are ready to power the future of transportation.
            </p>
            <Link href="/contact" className="inline-flex items-center text-green-500 hover:text-green-400 font-bold uppercase  text-sm transition-colors group">
              View Careers
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          <div>
            <h3 className="font-display text-3xl font-bold text-zinc-950 mb-4 ">Sustainability</h3>
            <p className="text-lg text-zinc-600 mb-8 font-light max-w-sm">
              Discover how our charging solutions reduce emissions and support a greener supply chain.
            </p>
            <Link href="/contact" className="inline-flex items-center text-green-500 hover:text-green-400 font-bold uppercase  text-sm transition-colors group">
              Learn More
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
