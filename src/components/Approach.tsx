const steps = [
  {
    n: "01",
    title: "Built on Understanding",
    desc: "We work closely with you, taking the time to understand your organisation, your people and your challenges as if they were our own.",
  },
  {
    n: "02",
    title: "Context-driven advice",
    desc: "Recommendations are tailored to your organisation, your needs, and to your context.",
  },
  {
    n: "03",
    title: "Practical, defensible outcomes",
    desc: "Our focus is on actions that can be implemented and sustained, and that align with regulatory expectations.",
  },
];

import SectionLabel from "@/components/SectionLabel";

export default function Approach() {
  return (
    <section id="approach" className="bg-sand/75 py-20">
      <div className="reveal mx-auto max-w-6xl px-6">
        <SectionLabel label="Approach" code="S1.2" />

        <h2 className="mt-10 mb-12 max-w-4xl font-sans text-4xl font-medium leading-[1.05] tracking-tight text-olive md:text-6xl">
          Before confidence. Before decisions. There must be understanding.
        </h2>

        <ol className="grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n}>
              <span className="font-serif text-5xl text-khaki">{step.n}</span>
              <h3 className="mt-4 font-serif text-xl text-brown">{step.title}</h3>
              <p className="mt-3 leading-7 text-brown/75">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
