"use client";

import { useEffect, useRef, useState } from "react";

type Ripple = { id: number; x: number; y: number };

/**
 * Soft ripples that follow the mouse as it moves. Throttled, respects
 * reduced-motion, and skipped on touch devices. Purely decorative.
 */
export default function CursorEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);
  const lastRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      if (e.timeStamp - lastRef.current < 90) return;
      lastRef.current = e.timeStamp;
      const id = idRef.current++;
      setRipples((prev) => [
        ...prev.slice(-12),
        { id, x: e.clientX, y: e.clientY },
      ]);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const remove = (id: number) =>
    setRipples((prev) => prev.filter((r) => r.id !== id));

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {ripples.map((r) => (
        <span
          key={r.id}
          onAnimationEnd={() => remove(r.id)}
          className="cursor-ripple"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </div>
  );
}
