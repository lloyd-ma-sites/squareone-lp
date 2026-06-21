"use client";

import { useState } from "react";

const CONTACT_EMAIL = "jc@squareoneau.com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${name || "—"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-lg border border-brown/20 bg-cream px-4 py-3 text-brown placeholder-brown/40 focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive";

  return (
    <section id="contact" className="bg-cream/75 py-16 lg:flex lg:min-h-screen lg:flex-col lg:justify-center">
      <div className="reveal mx-auto w-full max-w-3xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-olive">
          Let&rsquo;s Connect
        </p>
        <h2 className="mt-4 font-sans text-4xl font-medium tracking-tight text-brown md:text-5xl">
          Drop us a line and let&rsquo;s connect.
        </h2>
        <p className="mt-4 text-lg leading-8 text-brown/75">
          Whether you&rsquo;re just curious or ready to dive straight in,
          we&rsquo;re always happy to hear from you. Fill out the form below or pop
          into our inbox:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-olive hover:text-olive-dark"
          >
            {CONTACT_EMAIL}
          </a>
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={field}
            />
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={field}
            />
          </div>
          <textarea
            required
            rows={4}
            placeholder="How can we help?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={field}
          />
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center rounded-full bg-olive px-8 text-sm font-semibold text-cream transition-colors hover:bg-olive-dark"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
