"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-olive/15 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#top"
          aria-label="SquareOne — back to top"
          onClick={() => setOpen(false)}
          className="flex items-center"
        >
          <Logo className="h-9 w-auto sm:h-10" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.15em] text-brown/70 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-olive">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Contact button — desktop only (it lives in the burger on mobile) */}
          <a
            href="#contact"
            className="hidden bg-olive px-5 py-2 font-mono text-xs uppercase tracking-widest text-cream transition-colors hover:bg-olive-dark md:inline-block"
          >
            Contact
          </a>

          {/* Burger (mobile only) */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-1.5 inline-flex h-10 w-10 items-center justify-center text-brown md:hidden"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-olive/15 bg-cream/95 backdrop-blur md:hidden">
          <ul className="mx-auto max-w-6xl px-6 py-2 font-mono text-sm uppercase tracking-[0.15em] text-brown/80">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-olive/10 last:border-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 transition-colors hover:text-olive"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mx-auto max-w-6xl px-6 pb-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block bg-olive px-5 py-3 text-center font-mono text-xs uppercase tracking-widest text-cream transition-colors hover:bg-olive-dark"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
