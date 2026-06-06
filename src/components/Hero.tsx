import Logo from "@/components/Logo";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden"
    >
      {/* Base warm gradient (shows if no photo is set) */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-brown-dark via-olive-dark to-brown" />

      {/* Background photo — drop a licensed image at public/hero.jpg to enable */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-55"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      {/* Darkening overlay for text legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brown-dark/90 via-brown-dark/55 to-brown-dark/75" />

      <div className="hero-enter mx-auto max-w-4xl px-6 text-center text-cream">
        <Logo className="mx-auto h-16 w-auto sm:h-20 md:h-24" />

        <h1 className="mt-10 font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          Driving confidence in aged care.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-cream/80">
          A boutique advisory partner in all things clinical, compliance and
          operations.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      </div>

      {/* Scroll cue */}
      <a
        href="#intro"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 transition-colors hover:text-cream"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}
