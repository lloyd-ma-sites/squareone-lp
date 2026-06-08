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
    <header className="sticky top-0 z-50 border-b border-olive/15 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo in a bordered box (peg style) */}
        <Link
          href="#top"
          aria-label="SquareOne — back to top"
          className="flex items-center border border-olive/30 px-3 py-1.5"
        >
          <Logo className="h-7 w-auto" />
        </Link>

        <ul className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.15em] text-brown/70 md:flex">
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
          className="bg-olive px-5 py-2 font-mono text-xs uppercase tracking-widest text-cream transition-colors hover:bg-olive-dark"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
