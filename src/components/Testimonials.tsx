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
    <section id="testimonials" className="bg-cream/90 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel label="Testimonials" code="S1.5" />

        {/* Big attribution (peg style) */}
        <h2 className="reveal mt-10 font-sans text-5xl font-medium leading-none tracking-tight text-olive md:text-7xl">
          {current.role}
        </h2>
        <p className="reveal mt-3 font-mono text-xs uppercase tracking-[0.2em] text-brown/60">
          {current.org}
        </p>

        <blockquote className="reveal mt-10 max-w-4xl font-mono text-xl font-medium leading-relaxed text-brown md:text-2xl">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

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
