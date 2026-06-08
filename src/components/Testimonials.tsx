"use client";

import { useState } from "react";
import SectionLabel from "@/components/SectionLabel";

const testimonials = [
  {
    quote:
      "JC has a unique ability to quickly identify where the real risks sit. What stood out was not just the depth of the review, but the clarity of the recommendations and how practical they were to implement.",
    role: "Chief Executive Officer",
    org: "Residential Aged Care Provider",
  },
  {
    quote:
      "The engagement brought structure and direction to an otherwise complex and uncertain situation. It gave both the executive team and Board confidence in the path forward.",
    role: "Board Member",
    org: "Aged Care Organisation",
  },
  {
    quote:
      "JC's approach to clinical governance is both strategic and practical. He was able to bridge the gap between policy, systems and what is happening on the floor.",
    role: "Executive Manager",
    org: "Clinical Governance",
  },
  {
    quote:
      "This was not a generic audit. The work was clearly tailored to how our service actually operates, with a strong understanding of what the Commission expects.",
    role: "Director of Nursing",
    org: "Aged Care Provider",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <section id="testimonials" className="bg-cream/75 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel label="Testimonials" code="S1.5" />

        <h2 className="reveal mt-10 max-w-3xl font-sans text-4xl font-medium leading-[1.05] tracking-tight text-olive md:text-6xl">
          Trusted by aged care providers.
        </h2>

        <blockquote className="reveal mt-12 max-w-3xl font-mono text-base leading-7 text-brown">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        <p className="reveal mt-6 font-mono text-sm text-brown/70">
          &mdash; {current.role}, {current.org}
        </p>

        <div className="mt-12 flex items-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center border border-brown/20 text-brown transition-colors hover:bg-brown/5"
          >
            ←
          </button>
          <span className="font-mono text-sm tabular-nums text-brown/60">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center border border-brown/20 text-brown transition-colors hover:bg-brown/5"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
