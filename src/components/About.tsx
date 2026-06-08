import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-brown-dark py-20 text-cream"
    >
      {/* Faded founder video background (temporary) */}
      <video
        src="/founder-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 -z-10 bg-brown-dark/80" />

      <div className="reveal relative mx-auto max-w-6xl px-6">
        <SectionLabel label="About" code="S1.1" dark />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Founder portraits */}
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="relative aspect-[2/3] overflow-hidden rounded-lg bg-brown/40"
              >
                <Image
                  src={`/founder-image-${n}.jpeg`}
                  alt={`JC Yap, Founder of SquareOne`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Founder identity + narrative */}
          <div>
            <div className="mb-8">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-sage">
                Meet the Founder
              </p>
              <h3 className="mt-2 font-sans text-2xl font-medium">JC Yap</h3>
              <p className="text-sm text-cream/70">
                Founder &amp; Principal Consultant
              </p>
              <a
                href="https://www.linkedin.com/in/mrjcyap/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-sage hover:text-cream"
              >
                LinkedIn <span aria-hidden>→</span>
              </a>
            </div>

            <div className="space-y-5 font-mono text-base leading-7 text-cream/80">
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
      </div>
    </section>
  );
}
