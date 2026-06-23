import Image from "next/image";
import HeroLine from "@/components/HeroLine";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col overflow-hidden bg-brown-dark/75 text-cream"
    >
      <div className="hero-enter relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6">
        {/* Self-drawing line that frames the hero (behind the text). */}
        <HeroLine />

        {/* Tagline, upper-right */}
        <div className="relative z-10 flex justify-end pt-10 md:pt-32">
          <p
            data-hero="tagline"
            className="max-w-sm text-right font-mono text-sm uppercase leading-relaxed tracking-[0.15em] text-cream/70 md:text-base"
          >
            Your partner in aged care governance, compliance, and operations.
          </p>
        </div>

        {/* Wordmark + giant headline, lower-left. A real top margin keeps it
            clear of the tagline on small/medium screens; on lg the editorial
            mt-auto spreads tagline (top) and content (bottom) apart. */}
        <div className="relative z-10 mt-16 pb-16 md:mt-32 md:pb-24 lg:mt-auto lg:pb-[11vh]">
          <Image
            data-hero="wordmark"
            src="/squareone-wordmark.png"
            alt="SquareOne"
            width={1415}
            height={194}
            priority
            className="mb-14 h-9 w-auto invert md:mb-8 md:h-12"
          />

          <h1
            data-hero="headline"
            className="max-w-5xl font-sans text-6xl font-medium leading-[0.95] tracking-tight md:text-8xl"
          >
            Driving confidence in aged care.
          </h1>

          <div data-hero="cta" className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-olive px-7 font-mono text-xs uppercase tracking-widest text-cream transition-colors hover:bg-olive-dark"
            >
              Let&rsquo;s connect
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-full border border-cream/30 px-7 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-cream/10"
            >
              Explore services
            </a>
          </div>

          <div className="mt-10 max-w-2xl space-y-4 font-mono text-sm leading-relaxed text-cream/70">
            <p>
              We&rsquo;re a boutique advisory practice working closely with a
              select number of providers to ensure every engagement receives the
              depth of attention it requires. Our model prioritises quality of
              engagement over volume, allowing us to provide a level of
              responsiveness, continuity and insight that is often lost in
              larger-scale consulting environments.
            </p>
            <p>
              More than consultants, we&rsquo;re a trusted partner in all things
              clinical, compliance and operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
