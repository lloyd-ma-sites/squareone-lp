import type { Metadata } from "next";
import LegalLayout, { Section, P, UL } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions — SquareOne Solutions",
  description:
    "The terms and conditions governing the use of the SquareOne Solutions website.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" updated="22 June 2026">
      <Section title="1. Acceptance of these terms">
        <P>
          These terms and conditions govern your use of the SquareOne Solutions
          website. By accessing or using this website you agree to be bound by
          these terms. If you do not agree, please do not use the website.
        </P>
      </Section>

      <Section title="2. About us">
        <P>
          This website is operated by SquareOne Solutions (ABN 29 884 881 248), a
          boutique aged care advisory practice based in Melbourne, Victoria,
          Australia.
        </P>
      </Section>

      <Section title="3. Use of the website">
        <P>
          You may use this website for lawful, informational purposes. You must
          not:
        </P>
        <UL>
          <li>use the website in any way that is unlawful or fraudulent;</li>
          <li>
            attempt to gain unauthorised access to the website or any system or
            network connected to it; or
          </li>
          <li>
            interfere with, damage or disrupt the website or its underlying
            technology.
          </li>
        </UL>
      </Section>

      <Section title="4. Information is general only">
        <P>
          The content on this website is general in nature and is provided for
          information purposes only. It does not constitute professional, legal,
          clinical or financial advice and should not be relied upon as such. For
          advice tailored to your circumstances, please engage us directly.
        </P>
      </Section>

      <Section title="5. Intellectual property">
        <P>
          All content on this website — including text, graphics, logos, branding
          and layout — is owned by or licensed to SquareOne and is protected by
          law. You may not reproduce, distribute or otherwise use this content
          without our prior written permission.
        </P>
      </Section>

      <Section title="6. No warranties">
        <P>
          The website is provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis. While we take care to ensure the information is
          accurate and current, we do not warrant that it is complete, error-free
          or that the website will be available without interruption.
        </P>
      </Section>

      <Section title="7. Limitation of liability">
        <P>
          To the maximum extent permitted by law, SquareOne is not liable for any
          loss or damage arising from your use of, or reliance on, this website.
          Nothing in these terms excludes, restricts or modifies any rights or
          remedies you may have under the Australian Consumer Law that cannot be
          lawfully excluded.
        </P>
      </Section>

      <Section title="8. Third-party links">
        <P>
          This website may contain links to third-party websites. We provide these
          links for convenience only and are not responsible for the content,
          products or practices of those sites.
        </P>
      </Section>

      <Section title="9. Privacy">
        <P>
          Your use of this website is also governed by our{" "}
          <a
            href="/privacy"
            className="font-semibold text-olive hover:text-olive-dark"
          >
            Privacy Policy
          </a>
          , which explains how we handle personal information.
        </P>
      </Section>

      <Section title="10. Governing law">
        <P>
          These terms are governed by the laws of the State of Victoria,
          Australia. You submit to the non-exclusive jurisdiction of the courts of
          Victoria.
        </P>
      </Section>

      <Section title="11. Changes to these terms">
        <P>
          We may update these terms from time to time. The current version will
          always be available on our website, and your continued use of the
          website constitutes acceptance of the updated terms.
        </P>
      </Section>

      <Section title="12. Contact us">
        <P>
          For any question about these terms, contact us at{" "}
          <a
            href="mailto:jc@squareoneau.com"
            className="font-semibold text-olive hover:text-olive-dark"
          >
            jc@squareoneau.com
          </a>
          .
        </P>
      </Section>
    </LegalLayout>
  );
}
