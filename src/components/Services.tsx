import SectionLabel from "@/components/SectionLabel";

const services = [
  {
    title: "Quality Assurance & Improvement",
    desc: "Review and strengthening of quality systems, audit programs, and continuous improvement processes.",
  },
  {
    title: "Clinical Governance",
    desc: "Advisory and review of clinical governance systems, frameworks, oversight structures, and clinical risk management.",
  },
  {
    title: "Board Advisory",
    desc: "Independent clinical advisory to boards and committees to support oversight, risk management and informed decisions.",
  },
  {
    title: "Compliance Remediation",
    desc: "Targeted support to address identified gaps, stabilise risk areas, and implement corrective actions.",
  },
  {
    title: "External Audit & Regulatory Readiness",
    desc: "Preparation for regulatory audits, registration and re-registration, including documentation and evidence review.",
  },
  {
    title: "Clinical Funding",
    desc: "AN-ACC advisory and optimisation to support sustainable, accurate clinical funding.",
  },
  {
    title: "Operational & Clinical Leadership",
    desc: "Interim leadership support, service stabilisation, and workforce capability.",
  },
  {
    title: "Workforce Capability Development",
    desc: "Education and coaching aligned to clinical practice and regulatory requirements.",
  },
  {
    title: "Bespoke Advisory",
    desc: "Targeted support for complex or evolving challenges at both site and organisational level.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-sand/75 py-16 lg:flex lg:min-h-screen lg:flex-col lg:justify-center">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel label="Services" code="S1.3" />

        {/* Giant headline */}
        <h2 className="reveal mt-10 mb-14 max-w-4xl font-sans text-4xl font-medium leading-[1.05] tracking-tight text-olive md:text-6xl">
          Our Services
        </h2>

        {/* Service rows */}
        <ul className="reveal border-t border-brown/15">
          {services.map((service) => (
            <li key={service.title}>
              <div className="grid gap-2 border-b border-brown/15 py-6 md:grid-cols-[1fr_2fr] md:items-center md:gap-8">
                <h3 className="font-sans text-xl font-medium uppercase tracking-wide text-brown md:text-2xl">
                  {service.title}
                </h3>
                <p className="font-mono text-sm leading-6 text-brown/70">
                  {service.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Full-width bar button (peg style) */}
        <a
          href="#contact"
          className="reveal mt-10 flex h-16 w-full items-center justify-center bg-olive font-mono text-sm uppercase tracking-[0.2em] text-cream transition-colors hover:bg-olive-dark"
        >
          Let&rsquo;s connect
        </a>
      </div>
    </section>
  );
}
