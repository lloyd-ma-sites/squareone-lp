const trust = [
  { label: "Senior-led", detail: "Direct access to senior expertise" },
  { label: "Boutique", detail: "Quality of engagement over volume" },
  { label: "Australia-wide", detail: "Partnering with providers nationally" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-brown-dark text-cream"
    >
      {/* Background photo — drop a licensed image at public/hero.jpg to enable */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />
      {/* Overlay for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brown-dark via-brown-dark/90 to-brown-dark/60" />

      <div className="hero-enter mx-auto max-w-6xl px-6 py-28 md:py-36">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sage">
          Aged Care Advisory
        </p>

        <h1 className="max-w-3xl font-serif text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
          Driving confidence in aged care starts with SquareOne.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-cream/75">
          We&rsquo;re a boutique advisory practice working closely with a select
          number of providers, prioritising quality of engagement over volume.
          More than consultants, we&rsquo;re a trusted partner in all things
          clinical, compliance and operations.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://www.linkedin.com/in/mrjcyap/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-olive px-7 text-sm font-semibold text-cream transition-colors hover:bg-olive-dark"
          >
            View my OnlyFans 😏
          </a>
          <a
            href="#services"
            className="inline-flex h-12 items-center justify-center rounded-full border border-cream/30 px-7 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            Explore our services
          </a>
        </div>

        {/* Trust strip (peg uses a stats row here) */}
        <dl className="mt-16 grid max-w-2xl grid-cols-1 gap-8 border-t border-cream/15 pt-8 sm:grid-cols-3">
          {trust.map((item) => (
            <div key={item.label}>
              <dt className="font-serif text-2xl">{item.label}</dt>
              <dd className="mt-1 text-sm text-cream/60">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
