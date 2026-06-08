import Link from "next/link";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#testimonials" },
  { label: "Insights", href: "#insights" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brown/10 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#top" aria-label="SquareOne — back to top" className="shrink-0">
          <Logo className="h-9 w-auto sm:h-10" />
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-brown/70 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-olive">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full bg-olive px-5 py-2 text-sm font-semibold text-cream transition-colors hover:bg-olive-dark"
        >
          Let&rsquo;s connect
        </a>
      </nav>
    </header>
  );
}
