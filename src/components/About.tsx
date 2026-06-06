export default function About() {
  return (
    <section id="about" className="bg-sand py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-3xl font-serif text-3xl font-medium leading-snug text-brown md:text-4xl">
          Before confidence. Before decisions. There must be understanding.
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-[280px_1fr]">
          {/* Founder card */}
          <div>
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl bg-khaki/40 text-sm font-medium text-brown/50">
              Founder photo
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-olive">
              Meet the Founder
            </p>
            <h3 className="mt-2 font-serif text-2xl text-brown">JC Yap</h3>
            <p className="text-sm text-brown/70">Founder &amp; Principal Consultant</p>
            <a
              href="#"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-olive hover:text-olive-dark"
            >
              LinkedIn <span aria-hidden>→</span>
            </a>
          </div>

          {/* Founder narrative */}
          <div className="space-y-5 text-lg leading-8 text-brown/80">
            <p>
              Aged care is complex. Regulatory expectations continue to evolve,
              workforce challenges persist, and providers are expected to deliver
              safe, high-quality care while navigating increasing scrutiny and
              accountability.
            </p>
            <p>
              I&rsquo;ve spent my career working alongside aged care providers,
              supporting Boards, executives and operational leaders through some of
              their most challenging periods &mdash; audits, remediation programs,
              governance reform, commissioning projects and organisational change.
            </p>
            <p>
              What I&rsquo;ve learnt is that most providers don&rsquo;t need more
              advice. They need the right advice. Advice that understands their
              context, their people and the realities of service delivery. That
              belief is what led me to establish SquareOne.
            </p>
            <p>
              As a Registered Nurse and aged care consultant, I&rsquo;ve worked
              across the aged care sector in frontline clinical, management,
              executive and board-level roles. These experiences have shaped my
              approach and belief that the best outcomes come from understanding
              context before offering solutions.
            </p>
            <p>
              Today, SquareOne partners with aged care organisations across
              Australia, providing the clarity, confidence and support needed to
              navigate an increasingly complex sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
