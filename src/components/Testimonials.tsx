"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "JC has a unique ability to quickly identify where the real risks sit. What stood out was not just the depth of the review, but the clarity of the recommendations and how practical they were to implement.",
    role: "Chief Executive Officer, Residential Aged Care Provider",
  },
  {
    quote:
      "The engagement brought structure and direction to an otherwise complex and uncertain situation. It gave both the executive team and Board confidence in the path forward.",
    role: "Board Member, Aged Care Organisation",
  },
  {
    quote:
      "JC's approach to clinical governance is both strategic and practical. He was able to bridge the gap between policy, systems and what is happening on the floor.",
    role: "Executive Manager, Clinical Governance",
  },
  {
    quote:
      "This was not a generic audit. The work was clearly tailored to how our service actually operates, with a strong understanding of what the Commission expects.",
    role: "Director of Nursing",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <section id="testimonials" className="py-24">
      <div className="reveal mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-olive">
          Trusted by aged care providers
        </p>

        <blockquote className="mt-8 font-serif text-2xl font-medium leading-relaxed text-brown md:text-3xl">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        <p className="mt-8 text-sm text-brown/70">&mdash; {current.role}</p>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-brown/20 text-brown transition-colors hover:bg-brown/5"
          >
            ←
          </button>
          <span className="text-sm tabular-nums text-brown/60">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-brown/20 text-brown transition-colors hover:bg-brown/5"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
