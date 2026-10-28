// section: values-section
import ValuesBlock from "./ValuesBlock";

export default function ValuesSection() {
  return (
    <section data-section="values-section" className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-5xl font-black text-zinc-950 uppercase">Our Values</h2>
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
  );
}

