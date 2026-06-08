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
    desc: "Independent clinical advisory to Boards and Committees to support oversight, risk management and informed decisions.",
  },
  {
    title: "Compliance Remediation",
    desc: "Targeted support to address identified gaps, stabilise risk areas, and implement corrective actions.",
  },
  {
    title: "External Audit & Regulatory Readiness",
    desc: "Preparation for Commission audits, registration and re-registration, including documentation and evidence review.",
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
    <section id="services" className="bg-sand py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel label="Services" code="S1.3" />

        {/* Giant headline */}
        <h2 className="reveal mt-10 mb-14 font-sans text-6xl font-medium leading-none tracking-tight text-olive md:text-8xl">
          Services
        </h2>

        {/* Service rows */}
        <ul className="reveal border-t border-brown/15">
          {services.map((service) => (
            <li key={service.title}>
              <a
                href="#contact"
                className="group grid gap-2 border-b border-brown/15 py-6 transition-colors hover:bg-cream/60 md:grid-cols-[1fr_2fr_auto] md:items-center md:gap-8"
              >
                <h3 className="font-sans text-xl font-medium text-brown md:text-2xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-6 text-brown/70">{service.desc}</p>
                <span
                  aria-hidden
                  className="font-mono text-lg text-olive transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Full-width bar button (peg style) */}
        <a
          href="#contact"
          className="reveal mt-10 flex h-16 w-full items-center justify-center bg-olive font-mono text-sm uppercase tracking-[0.2em] text-cream transition-colors hover:bg-olive-dark"
        >
          View all services
        </a>
      </div>
    </section>
  );
}
