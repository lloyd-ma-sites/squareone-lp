export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-olive">
          Aged Care Advisory
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-medium leading-[1.1] tracking-tight text-brown md:text-6xl">
          Driving confidence in aged care starts with SquareOne.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-brown/75">
          We&rsquo;re a boutique advisory practice working closely with a select
          number of providers to ensure every engagement receives the depth of
          attention it requires. Our model prioritises quality of engagement over
          volume, allowing us to provide a level of responsiveness, continuity and
          insight that is often lost in larger-scale consulting environments.
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-brown/75">
          More than consultants, we&rsquo;re a trusted partner in all things
          clinical, compliance and operations.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-olive px-7 text-sm font-semibold text-cream transition-colors hover:bg-olive-dark"
          >
            Let&rsquo;s connect
          </a>
          <a
            href="#services"
            className="inline-flex h-12 items-center justify-center rounded-full border border-brown/20 px-7 text-sm font-semibold text-brown transition-colors hover:bg-brown/5"
          >
            Explore our services
          </a>
        </div>
      </div>
    </section>
  );
}
