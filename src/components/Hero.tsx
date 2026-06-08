export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[90vh] flex-col overflow-hidden bg-brown-dark text-cream"
    >
      {/* Full wordmark watermark background (no frame) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-center bg-no-repeat opacity-[0.07] invert"
        style={{
          backgroundImage: "url('/squareone-wordmark.png')",
          backgroundSize: "130% auto",
        }}
      />

      <div className="hero-enter relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6">
        {/* Tagline, upper-right (peg style) */}
        <div className="flex justify-end pt-28 md:pt-32">
          <p className="max-w-xs text-right font-mono text-xs uppercase leading-relaxed tracking-[0.15em] text-cream/70">
            A boutique advisory partner in all things clinical, compliance &amp;
            operations.
          </p>
        </div>

        {/* Giant headline, lower-left (peg style) */}
        <div className="mt-auto pb-16 md:pb-24">
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
        </div>
      </div>
    </section>
  );
}
