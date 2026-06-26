import type { Metadata } from "next";
import LegalLayout, { Section, P, UL } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SquareOne Solutions collects, uses, discloses and protects personal information in accordance with the Australian Privacy Act 1988 (Cth).",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="22 June 2026">
      <Section title="1. Introduction">
        <P>
          SquareOne Solutions (ABN 29 884 881 248) (&ldquo;SquareOne&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) is committed to
          protecting your privacy. This policy explains how we collect, use,
          disclose and safeguard personal information in accordance with the
          Privacy Act 1988 (Cth) and the Australian Privacy Principles
          (&ldquo;APPs&rdquo;). It applies to our website and to our dealings with
          clients, prospective clients and other individuals.
        </P>
      </Section>

      <Section title="2. The information we collect">
        <P>
          The personal information we collect may include:
        </P>
        <UL>
          <li>your name, role and the organisation you represent;</li>
          <li>your contact details, such as email address and phone number;</li>
          <li>
            the content of your enquiries and any correspondence with us; and
          </li>
          <li>
            technical information when you visit our website, such as your IP
            address, browser type and the pages you view.
          </li>
        </UL>
      </Section>

      <Section title="3. How we collect it">
        <P>
          We collect personal information directly from you when you contact us
          through our website form, by email or by phone, or in the course of
          providing our services. We may also collect technical information
          automatically through cookies and analytics tools when you use our
          website.
        </P>
      </Section>

      <Section title="4. Why we collect and use it">
        <P>We collect and use personal information to:</P>
        <UL>
          <li>respond to your enquiries and communicate with you;</li>
          <li>provide, manage and improve our advisory services;</li>
          <li>
            send you information we consider relevant to your interests (you may
            opt out at any time); and
          </li>
          <li>meet our legal and regulatory obligations.</li>
        </UL>
      </Section>

      <Section title="5. Disclosure of personal information">
        <P>
          We do not sell your personal information. We may disclose it to trusted
          third parties who help us operate our business — for example IT, email
          and website hosting providers — and to our professional advisers, or
          where we are required or authorised to do so by law.
        </P>
      </Section>

      <Section title="6. Cookies and analytics">
        <P>
          Our website may use cookies and third-party analytics services to
          understand how the site is used and to improve it. You can set your
          browser to refuse cookies, although some parts of the site may not
          function as intended as a result.
        </P>
      </Section>

      <Section title="7. Storage and security">
        <P>
          We take reasonable steps to protect personal information from misuse,
          interference and loss, and from unauthorised access, modification or
          disclosure. Information is held in secure systems, and access is limited
          to those who need it to perform their role.
        </P>
      </Section>

      <Section title="8. Overseas disclosure">
        <P>
          Some of our service providers may store or process information outside
          Australia. Where this occurs, we take reasonable steps to ensure that
          your information is handled consistently with the APPs.
        </P>
      </Section>

      <Section title="9. Accessing and correcting your information">
        <P>
          You may request access to the personal information we hold about you, or
          ask us to correct it, by contacting us using the details below. We will
          respond within a reasonable period and may need to verify your identity
          first.
        </P>
      </Section>

      <Section title="10. Complaints">
        <P>
          If you have a concern about how we have handled your personal
          information, please contact us so we can address it. If you are not
          satisfied with our response, you may contact the Office of the
          Australian Information Commissioner (OAIC) at{" "}
          <a
            href="https://www.oaic.gov.au"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-olive hover:text-olive-dark"
          >
            oaic.gov.au
          </a>
          .
        </P>
      </Section>

      <Section title="11. Changes to this policy">
        <P>
          We may update this policy from time to time. The current version will
          always be available on our website, with the date it was last updated
          shown above.
        </P>
      </Section>

      <Section title="12. Contact us">
        <P>
          For any privacy enquiry, contact us at{" "}
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
