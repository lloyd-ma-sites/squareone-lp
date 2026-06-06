const services = [
  {
    title: "Quality Assurance & Improvement",
    desc: "Review and strengthening of quality systems, audit programs, and continuous improvement processes aligned to regulatory expectations.",
  },
  {
    title: "Clinical Governance",
    desc: "Advisory and review of clinical governance systems, frameworks, oversight structures, and clinical risk management.",
  },
  {
    title: "Board Advisory",
    desc: "Governance-certified independent clinical advisory to Boards and Committees to support oversight, risk management and informed decision-making.",
  },
  {
    title: "Compliance Remediation",
    desc: "Targeted support to address identified gaps, stabilise risk areas, and implement corrective actions aligned to regulatory expectations.",
  },
  {
    title: "External Audit & Regulatory Readiness",
    desc: "Preparation for Commission audits, registration and re-registration, including documentation and evidence review.",
  },
  {
    title: "Clinical Funding",
    desc: "AN-ACC advisory and AN-ACC optimisation to support sustainable, accurate clinical funding.",
  },
  {
    title: "Operational & Clinical Leadership",
    desc: "Interim leadership support, service stabilisation, and workforce capability.",
  },
  {
    title: "Workforce Capability Development",
    desc: "Education and coaching aligned to clinical practice and regulatory requirements, focused on building capability and supporting sustainable practice.",
  },
  {
    title: "Bespoke Advisory",
    desc: "Targeted support for complex or evolving challenges at both site and organisational level.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-sand py-24">
      <div className="reveal mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-olive">
            Our Services
          </p>
          <h2 className="mt-3 font-serif text-3xl font-medium text-brown md:text-4xl">
            What we have supported providers with.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-brown/10 bg-cream p-7 transition-shadow hover:shadow-md"
            >
              <h3 className="font-serif text-lg text-brown">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brown/75">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
