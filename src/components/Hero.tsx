import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[90vh] flex-col overflow-hidden bg-brown-dark text-cream"
    >
      {/* Hero background image */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-background.png')" }}
      />
      {/* Overlay for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brown-dark via-brown-dark/75 to-brown-dark/45" />

      <div className="hero-enter relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6">
        {/* Tagline, upper-right */}
        <div className="flex justify-end pt-28 md:pt-32">
          <p className="max-w-sm text-right font-mono text-sm uppercase leading-relaxed tracking-[0.15em] text-cream/70 md:text-base">
            Your boutique advisory partner in all things clinical, compliance &amp;
            operations.
          </p>
        </div>

        {/* Wordmark + giant headline, lower-left */}
        <div className="mt-auto pb-16 md:pb-24">
          <Image
            src="/squareone-wordmark.png"
            alt="SquareOne"
            width={1415}
            height={194}
            priority
            className="mb-8 h-9 w-auto invert md:h-12"
          />

          <h1 className="max-w-5xl font-sans text-6xl font-medium leading-[0.95] tracking-tight md:text-8xl">
            Driving confidence in aged care.
          </h1>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
