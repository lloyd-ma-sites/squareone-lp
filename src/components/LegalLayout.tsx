import Link from "next/link";
import Logo from "@/components/Logo";

/** Section block: a heading with its paragraphs/lists. */
export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-sans text-xl font-medium text-brown">{title}</h2>
      {children}
    </section>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[15px] leading-7 text-brown/80">{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="ml-5 list-disc space-y-1.5 text-[15px] leading-7 text-brown/80">
      {children}
    </ul>
  );
}

/**
 * Standalone page chrome for legal pages. Sits on a translucent cream panel over
 * the site's shared fixed background (from the root layout), keeping the palette
 * and typography consistent with the main page.
 */
export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 bg-cream/85">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="SquareOne home">
            <Logo className="h-9 w-auto" />
          </Link>
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-widest text-olive transition-colors hover:text-olive-dark"
          >
            ← Back to site
          </Link>
        </div>

        <header className="mt-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-olive">
            Legal
          </p>
          <h1 className="mt-3 font-sans text-4xl font-medium tracking-tight text-brown md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-wider text-brown/50">
            Last updated {updated}
          </p>
        </header>

        <div className="mt-12 space-y-10">{children}</div>

        <div className="mt-16 border-t border-brown/15 pt-8 font-mono text-xs uppercase tracking-wider text-brown/50">
          SquareOne Solutions · ABN 29 884 881 248 · Melbourne VIC 3000
        </div>
      </div>
    </main>
  );
}
