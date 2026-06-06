"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-olive text-cream shadow-lg transition-all hover:bg-olive-dark ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      ↑
    </button>
  );
}
