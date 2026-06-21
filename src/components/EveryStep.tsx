import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";

const steps = [
  {
    n: "01",
    title: "Strategy",
    desc: "Experts in the aged care regulatory requirements, guiding you with confidence.",
  },
  {
    n: "02",
    title: "Communication",
    desc: "Trustworthy, accountable, and responsive to your unique needs.",
  },
  {
    n: "03",
    title: "Navigation",
    desc: "Turning insurmountable hurdles into on-time project milestones.",
  },
  {
    n: "04",
    title: "Results",
    desc: "Reliable, compliant, and dedicated to delivering positive outcomes.",
  },
];

const benefits = [
  "Direct access to senior expertise, with the ability to scale when required",
  "Advice shaped around your organisation – not a template",
  "Time taken to understand your systems, people and risks",
  "Practical, defensible recommendations",
];

export default function EveryStep() {
  return (
    <section id="every-step" className="bg-brown-dark/75 py-16 text-cream lg:flex lg:min-h-screen lg:flex-col lg:justify-center">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel label="Process" code="S1.4" dark />

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            {/* Giant headline (peg style) */}
            <h2 className="reveal max-w-4xl font-sans text-6xl font-medium leading-[0.95] tracking-tight md:text-8xl">
              Here at every step.
            </h2>

            <p className="reveal mt-8 max-w-2xl font-mono text-base leading-7 text-cream/70">
              Navigating stakeholder expectations can feel like a balancing act for
              boards, executives, management, and clinicians. We work with
              single-site and multi-facility providers &mdash; every provider
              operates within its own context.
            </p>
          </div>

          <div className="reveal relative aspect-[4/5] overflow-hidden rounded-lg bg-brown/40">
            <Image
              src="/every-step.jpg"
              alt="SquareOne working alongside aged care providers"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Tilted numbered cards (peg style) */}
        <div className="reveal mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.n}
              className="rounded-sm bg-cream p-6 text-brown shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-sans text-xl font-medium">{step.title}</h3>
                <span className="font-mono text-lg text-olive">{step.n}</span>
              </div>
              <div className="my-4 border-t border-brown/15" />
              <p className="text-sm leading-relaxed text-brown/70">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* What this means for you */}
        <div className="reveal mt-20 border-t border-cream/15 pt-10">
          <h3 className="font-sans text-2xl font-medium">What this means for you</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-cream/85">
                <span aria-hidden className="mt-1 font-mono text-sage">
                  +
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
