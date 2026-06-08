import Logo from "@/components/Logo";

const columns = [
  { heading: "Navigate", links: ["About", "Approach", "Services", "Clients"] },
  { heading: "Company", links: ["Contact", "Privacy Policy", "Terms"] },
];

export default function Footer() {
  return (
    <footer className="bg-brown-dark text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo light className="h-10 w-auto" />
            <p className="mt-5 max-w-xs font-mono text-xs uppercase leading-relaxed tracking-wide text-cream/60">
              A boutique aged care advisory practice partnering with providers
              across Australia.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cream/50">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2 font-mono text-xs uppercase tracking-wider text-cream/80">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stay in touch */}
        <div className="mt-14 grid gap-8 border-t border-cream/15 pt-10 md:grid-cols-2">
          <div className="font-mono text-xs uppercase tracking-[0.15em] text-cream/70">
            Stay in touch&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="mailto:jc@squareoneau.com" className="hover:text-white">
              jc@squareoneau.com
            </a>
          </div>
          <div className="flex gap-6 font-mono text-xs uppercase tracking-wider text-cream/70 md:justify-end">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a
              href="https://www.linkedin.com/in/mrjcyap/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a href="#" className="hover:text-white">X</a>
          </div>
        </div>

        {/* Acknowledgement of Country */}
        <div className="mt-12 border-t border-cream/10 pt-8">
          <p className="max-w-4xl text-sm leading-7 text-cream/60">
            We acknowledge and pay our respects to the Traditional Custodians of
            the lands on which we live, work and learn throughout Australia. We
            honour their enduring connection to Country, culture and community, and
            extend our respect to Elders past and present. We recognise and
            celebrate the contributions of Aboriginal and Torres Strait Islander
            peoples to the communities we serve.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-2 font-mono text-xs uppercase tracking-wider text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} SquareOne Solutions · ABN 29 884 881 248 ·
            Melbourne VIC 3000
          </span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
