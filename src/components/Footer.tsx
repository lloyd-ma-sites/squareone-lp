import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-brown-dark text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <div>
            <Logo className="h-10 w-auto text-cream" />
            <p className="mt-4 max-w-md text-sm leading-7 text-cream/70">
              A boutique aged care advisory practice partnering with providers
              across Australia on clinical governance, compliance and operations.
            </p>
            <a
              href="mailto:jc@squareoneau.com"
              className="mt-4 inline-block text-sm font-semibold text-sage hover:text-cream"
            >
              jc@squareoneau.com
            </a>
          </div>

          <div className="text-sm leading-7 text-cream/70">
            <p className="font-semibold text-cream">SquareOne Solutions</p>
            <p>Trading as SquareOne Solutions</p>
            <p>ABN 29 884 881 248</p>
            <p>Melbourne VIC 3000</p>
          </div>
        </div>

        {/* Acknowledgement of Country */}
        <div className="mt-14 border-t border-cream/10 pt-8">
          <p className="max-w-4xl text-sm leading-7 text-cream/60">
            We acknowledge and pay our respects to the Traditional Custodians of
            the lands on which we live, work and learn throughout Australia. We
            honour their enduring connection to Country, culture and community, and
            extend our respect to Elders past and present. We recognise and
            celebrate the contributions of Aboriginal and Torres Strait Islander
            peoples to the communities we serve.
          </p>
        </div>

        <p className="mt-10 text-xs text-cream/40">
          © {new Date().getFullYear()} SquareOne Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
