"use client";

import { useEffect, useRef } from "react";

const LIGHT = "247, 243, 234"; // cream — used over dark backgrounds
const DARK = "58, 49, 39"; // deep brown — used over light backgrounds
const ALPHA = 0.2;

// Relative luminance of an sRGB colour (0 = black, 1 = white).
function luminance(r: number, g: number, b: number) {
  const f = (v: number) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

/**
 * A single soft glow that slowly trails the cursor. It samples the background
 * under the pointer and uses the contrasting colour (cream over dark sections,
 * deep brown over light ones) so it stays visible everywhere. Skipped on touch
 * devices and for reduced-motion. Purely decorative.
 */
export default function CursorEffect() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const el = glowRef.current;
    if (!el) return;

    // 1×1 canvas to parse ANY CSS colour string (rgb, hex, lab, oklab…) into
    // straight RGBA pixels.
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 1;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    const parse = (str: string): [number, number, number, number] | null => {
      if (!ctx) return null;
      ctx.clearRect(0, 0, 1, 1);
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.fillStyle = str;
      ctx.fillRect(0, 0, 1, 1);
      const d = ctx.getImageData(0, 0, 1, 1).data;
      return [d[0], d[1], d[2], d[3] / 255];
    };

    const bgUnder = (x: number, y: number): [number, number, number] | null => {
      let node = document.elementFromPoint(x, y) as Element | null;
      while (node) {
        const c = parse(getComputedStyle(node).backgroundColor);
        if (c && c[3] > 0.15) return [c[0], c[1], c[2]];
        node = node.parentElement;
      }
      return null;
    };

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    let shown = false;
    let raf = 0;
    let lastDetect = 0;
    let rgb = LIGHT;

    const paint = (color: string) => {
      el.style.background = `radial-gradient(circle, rgba(${color}, ${ALPHA}) 0%, rgba(${color}, 0) 70%)`;
    };
    paint(rgb);

    const detect = () => {
      const c = bgUnder(tx, ty);
      if (!c) return;
      const next = luminance(c[0], c[1], c[2]) < 0.45 ? LIGHT : DARK;
      if (next !== rgb) {
        rgb = next;
        paint(rgb);
      }
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!shown) {
        shown = true;
        el.style.opacity = "1";
      }
    };
    const onLeave = () => {
      shown = false;
      el.style.opacity = "0";
    };

    const tick = (ts: number) => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      if (ts - lastDetect > 150) {
        lastDetect = ts;
        detect();
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <div ref={glowRef} className="cursor-glow" style={{ opacity: 0 }} />
    </div>
  );
}
