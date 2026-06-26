import type { Metadata } from "next";
import LegalLayout, { Section, P, UL } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Website Terms of Use",
  description:
    "The terms governing the use of the SquareOne Solutions website.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Website Terms of Use" updated="26 June 2026">
      <Section title="1. Acceptance of these Terms">
        <P>
          By accessing or using SquareOne Solutions&rsquo; website
          (&ldquo;Website&rdquo;), you acknowledge that you have read, understood
          and agree to be bound by these Terms of Use. If you do not agree with
          these Terms, you should discontinue use of this Website.
        </P>
        <P>
          These Terms may be updated from time to time without notice. Continued
          use of the Website constitutes acceptance of any changes.
        </P>
      </Section>

      <Section title="2. Purpose of this Website">
        <P>
          This Website has been developed to provide general information about
          SquareOne Solutions, our consultancy services and areas of expertise.
        </P>
        <P>
          Nothing contained on this Website constitutes professional, legal,
          clinical, financial or regulatory advice. Information published on this
          Website is general in nature and should not be relied upon as a
          substitute for obtaining advice specific to your organisation or
          circumstances.
        </P>
      </Section>

      <Section title="3. Professional Services">
        <P>
          Information contained on this Website does not create a consultancy
          relationship between SquareOne Solutions and any person or organisation.
        </P>
        <P>
          Professional services are only provided under a separate written
          agreement setting out the scope of services, fees, responsibilities and
          applicable terms.
        </P>
      </Section>

      <Section title="4. Accuracy of Information">
        <P>
          While every reasonable effort is made to ensure the information
          published on this Website is accurate and current, SquareOne Solutions
          does not warrant that the content is complete, accurate or free from
          errors.
        </P>
        <P>
          Legislation, regulatory requirements and industry guidance may change
          over time. Users are responsible for ensuring they rely on the most
          current information available.
        </P>
      </Section>

      <Section title="5. Intellectual Property">
        <P>
          Content may not be copied, reproduced, distributed, modified or
          published without the prior written consent of SquareOne Solutions,
          except as permitted under applicable copyright legislation.
        </P>
      </Section>

      <Section title="6. Website Use">
        <P>Users agree not to:</P>
        <UL>
          <li>use the Website for any unlawful purpose;</li>
          <li>attempt to interfere with the operation or security of the Website;</li>
          <li>introduce malicious software or code;</li>
          <li>reproduce Website content without permission;</li>
          <li>misrepresent their identity when making enquiries.</li>
        </UL>
      </Section>

      <Section title="7. Third-Party Links">
        <P>
          This Website may contain links to third-party websites for convenience
          only.
        </P>
        <P>
          SquareOne does not endorse, control or accept responsibility for the
          content, security or privacy practices of external websites.
        </P>
      </Section>

      <Section title="8. Limitation of Liability">
        <P>
          To the maximum extent permitted by law, SquareOne Solutions excludes all
          liability for any loss or damage arising from reliance upon information
          contained on this Website.
        </P>
        <P>
          Users are responsible for obtaining professional advice appropriate to
          their individual circumstances before making decisions based on Website
          content.
        </P>
      </Section>

      <Section title="9. Privacy">
        <P>
          Personal information collected through this Website is managed in
          accordance with our{" "}
          <a
            href="/privacy"
            className="font-semibold text-olive hover:text-olive-dark"
          >
            Privacy Policy
          </a>
          .
        </P>
      </Section>

      <Section title="10. Governing Law">
        <P>
          These Terms of Use are governed by the laws of Victoria, Australia.
        </P>
        <P>
          Any disputes arising from the use of this Website will be subject to the
          exclusive jurisdiction of the courts of Victoria.
        </P>
      </Section>

      <Section title="11. Disclaimer">
        <P>
          The information published on the Website is provided for general
          informational purposes only.
        </P>
        <P>
          Although reasonable care has been taken to ensure the accuracy of the
          information at the time of publication, SquareOne Solutions makes no
          representation or warranty regarding the completeness, accuracy,
          reliability or currency of the information.
        </P>
        <P>
          The content of this Website does not constitute professional advice and
          should not be relied upon as legal, clinical, financial, governance,
          regulatory or business advice.
        </P>
        <P>
          Every aged care provider operates within its own unique context.
          Decisions relating to governance, quality systems, clinical practice,
          funding, regulatory compliance, workforce management or organisational
          strategy should only be made after obtaining advice specific to the
          circumstances of the organisation.
        </P>
        <P>
          Any examples, case studies, commentary or guidance provided on this
          Website are intended solely to illustrate general principles and should
          not be interpreted as recommendations applicable to every provider.
        </P>
        <P>
          Where the Website refers to legislation, regulatory standards or
          guidance, users remain responsible for ensuring they refer to the most
          current versions issued by the relevant authority.
        </P>
        <P>
          To the maximum extent permitted by law, SquareOne Solutions accepts no
          responsibility for any loss, damage, cost or liability arising directly
          or indirectly from the use of, or reliance upon, information contained
          on this Website.
        </P>
        <P>
          Nothing on this Website creates a consultancy relationship between
          SquareOne Solutions and any visitor. Professional services are provided
          only under a separate written agreement.
        </P>
        <P>
          Where this Website contains links to external websites, those links are
          provided solely for convenience. SquareOne Solutions does not endorse or
          accept responsibility for the content, accuracy, availability or privacy
          practices of third-party websites.
        </P>
        <P>
          Website content may be updated, amended or removed at any time without
          notice.
        </P>
        <P>
          If you require advice regarding governance, quality assurance,
          regulatory compliance or any other professional matter, please contact
          SquareOne Solutions to discuss your organisation&rsquo;s specific
          circumstances.
        </P>
      </Section>
    </LegalLayout>
  );
}
