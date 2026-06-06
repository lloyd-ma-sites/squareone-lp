const pillars = [
  {
    title: "Strategy",
    desc: "Experts in the aged care regulatory requirements, guiding you with confidence.",
  },
  {
    title: "Communication",
    desc: "Trustworthy, accountable, and responsive to your unique needs.",
  },
  {
    title: "Navigation",
    desc: "Turning insurmountable hurdles into on-time project milestones.",
  },
  {
    title: "Results",
    desc: "Reliable, compliant, and dedicated to delivering positive outcomes.",
  },
];

const benefits = [
  "Direct access to senior expertise, with the ability to scale when required",
  "Advice shaped around your organisation – not a template",
  "Time taken to understand your systems, people and risks",
  "Practical recommendations",
];

export default function EveryStep() {
  return (
    <section id="every-step" className="bg-brown-dark py-24 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sage">
            Here at every step
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium md:text-4xl">
            Navigating stakeholder expectations can feel like a balancing act.
          </h2>
          <p className="mt-5 text-lg leading-8 text-cream/70">
            For boards, executives, management, and clinicians. We work with
            single-site and multi-facility providers. Every provider operates
            within its own context &mdash; with different structures, teams, risks
            and pressures.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="border-t border-cream/15 pt-5">
              <h3 className="font-serif text-xl">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-cream/70">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* What this means for you */}
        <div className="mt-20 rounded-2xl bg-cream/5 p-8 md:p-12">
          <h3 className="font-serif text-2xl">What this means for you</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-cream/85">
                <span aria-hidden className="mt-1 text-sage">
                  &#10003;
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
