import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      className="bg-brown-dark/75 py-16 text-cream lg:flex lg:min-h-screen lg:flex-col lg:justify-center"
    >
      <div className="reveal relative mx-auto max-w-6xl px-6">
        <SectionLabel label="About" code="S1.1" dark />

        {/* Single founder portrait floated so the narrative wraps cleanly around it */}
        <div className="mt-12">
          <div className="mb-6 w-3/4 overflow-hidden rounded-lg bg-brown/40 sm:float-left sm:mb-4 sm:mr-8 sm:w-[30%] lg:w-[28%]">
            <Image
              src="/about-top.jpg"
              alt="JC Yap, Founder of SquareOne"
              width={1280}
              height={1600}
              sizes="(max-width: 640px) 100vw, 40vw"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mb-6">
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
              their most challenging periods, external audits, remediation programs,
              governance reform, commissioning projects, and organisational change.
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
              Australia, providing the confidence and support needed to navigate an
              increasingly complex sector.
            </p>
          </div>

          <div className="clear-both" />
        </div>
      </div>
    </section>
  );
}
