"use client";

import { useEffect, useRef, useState } from "react";

type Rect = { l: number; r: number; t: number; b: number };
type Piece = { d: string; dur: number; delay: number; animate: boolean };

const TOTAL = 1.9; // total seconds across all pieces
const START = 0.3; // initial delay before the first piece
const ARC = 1.571; // quarter-circle length factor (× radius)

// Drawable intervals of [start..end] minus the gap ranges (ascending).
function intervalsOf(start: number, end: number, gaps: [number, number][]) {
  const lo = Math.min(start, end);
  const hi = Math.max(start, end);
  const gs = gaps
    .map((g) => [Math.max(g[0], lo), Math.min(g[1], hi)] as [number, number])
    .filter((g) => g[1] > g[0])
    .sort((a, b) => a[0] - b[0]);
  const out: [number, number][] = [];
  let cur = lo;
  for (const [s, e] of gs) {
    if (s > cur) out.push([cur, s]);
    cur = Math.max(cur, e);
  }
  if (cur < hi) out.push([cur, hi]);
  return out;
}

/**
 * Square-ish frame around the hero. Every drawn piece (each edge segment and
 * corner) is its OWN path with a staggered start, so they animate strictly one
 * after another — including the two halves of an edge split by a cut. Runs
 * straight through the tagline; cut only over the headline's real glyphs and
 * the buttons. Measured from live elements. Draws once on load. Desktop only.
 */
export default function HeroLine() {
  const ref = useRef<SVGSVGElement>(null);
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [box, setBox] = useState({ w: 1000, h: 600 });

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const section = svg.closest("section");
    if (!section) return;

    let drawn = false;
    let lastW = 0;
    let lastH = 0;

    const compute = (animate: boolean) => {
      const base = svg.getBoundingClientRect();
      if (base.width === 0 || base.height === 0) return; // hidden (mobile)

      const tagEl = section.querySelector('[data-hero="tagline"]');
      const ctaEl = section.querySelector('[data-hero="cta"]');
      const wordEl = section.querySelector('[data-hero="wordmark"]');
      const headEl = section.querySelector('[data-hero="headline"]');
      const btns = section.querySelectorAll('[data-hero="cta"] a');
      if (!tagEl || !ctaEl || !wordEl || !headEl || btns.length < 2) return;

      const local = (r: DOMRect): Rect => ({
        l: r.left - base.left,
        r: r.right - base.left,
        t: r.top - base.top,
        b: r.bottom - base.top,
      });
      const lineRects = (el: Element): Rect[] => {
        const range = document.createRange();
        range.selectNodeContents(el);
        return Array.from(range.getClientRects()).map((r) => local(r as DOMRect));
      };
      const boxOf = (el: Element) => local(el.getBoundingClientRect());

      const word = boxOf(wordEl);
      const cta = boxOf(ctaEl);
      const tag = boxOf(tagEl);

      const obstacles: Rect[] = [
        ...lineRects(headEl),
        word,
        boxOf(btns[0]),
        boxOf(btns[1]),
      ];

      const R = 22;
      const pad = 12;
      const leftX = word.l + (word.r - word.l) * 0.245;
      const topY = tag.t - 46;
      const bottomY = cta.t + (cta.b - cta.t) / 2;
      const rightX = leftX + (bottomY - topY) * 1.18;

      const vGaps = (X: number): [number, number][] =>
        obstacles
          .filter((o) => o.l - pad <= X && X <= o.r + pad)
          .map((o) => [o.t - pad, o.b + pad]);
      const hGaps = (Y: number): [number, number][] =>
        obstacles
          .filter((o) => o.t - pad <= Y && Y <= o.b + pad)
          .map((o) => [o.l - pad, o.r + pad]);

      // Collect every drawn piece, in clockwise draw order. Corners are tacked
      // onto the end of the edge that leads into them.
      const raw: { d: string; len: number }[] = [];
      const pushRun = (
        fixed: number,
        start: number,
        end: number,
        gaps: [number, number][],
        horizontal: boolean,
        tail = "",
        tailLen = 0,
      ) => {
        const intervals = intervalsOf(start, end, gaps);
        const up = end < start;
        const ordered = up ? [...intervals].reverse() : intervals;
        ordered.forEach(([a, b], i) => {
          const from = up ? b : a;
          const to = up ? a : b;
          const last = i === ordered.length - 1;
          const d = horizontal
            ? `M ${from} ${fixed} L ${to} ${fixed}`
            : `M ${fixed} ${from} L ${fixed} ${to}`;
          raw.push({ d: d + (last ? tail : ""), len: b - a + (last ? tailLen : 0) });
        });
      };

      // 1. up-bar from the U + top-left corner
      pushRun(leftX, word.t - pad, topY + R, [], false, ` Q ${leftX} ${topY} ${leftX + R} ${topY}`, ARC * R);
      // 2. top edge + top-right corner
      pushRun(topY, leftX + R, rightX - R, [], true, ` Q ${rightX} ${topY} ${rightX} ${topY + R}`, ARC * R);
      // 3. right edge (each half its own piece) + bottom-right corner on the last
      pushRun(rightX, topY + R, bottomY - R, vGaps(rightX), false, ` Q ${rightX} ${bottomY} ${rightX - R} ${bottomY}`, ARC * R);
      // 4. bottom edge (cut around the buttons)
      pushRun(bottomY, rightX - R, leftX, hGaps(bottomY), true);
      // 5. left edge up to the U (cut at headline/button)
      pushRun(leftX, bottomY - R, word.b + pad, vGaps(leftX), false);

      const total = raw.reduce((s, x) => s + x.len, 0) || 1;
      let delay = START;
      const timed: Piece[] = raw.map((p) => {
        const dur = (p.len / total) * TOTAL;
        const piece = { d: p.d, dur, delay, animate };
        delay += dur;
        return piece;
      });

      lastW = base.width;
      lastH = base.height;
      setBox({ w: base.width, h: base.height });
      setPieces(timed);
    };

    compute(true);
    drawn = ref.current!.getBoundingClientRect().width > 0;

    const ro = new ResizeObserver(() => {
      const base = svg.getBoundingClientRect();
      if (base.width === 0 || base.height === 0) return;
      if (!drawn) {
        compute(true);
        drawn = true;
        return;
      }
      if (Math.abs(base.width - lastW) < 1 && Math.abs(base.height - lastH) < 1) {
        return;
      }
      compute(false);
    });
    ro.observe(section);
    ro.observe(svg);
    return () => ro.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      aria-hidden
      viewBox={`0 0 ${box.w} ${box.h}`}
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth={8}
      strokeLinecap="butt"
      strokeLinejoin="round"
      className="hero-line pointer-events-none absolute inset-0 z-0 hidden h-full w-full text-cream opacity-50 lg:block"
    >
      {pieces.map((p, i) => (
        <path
          key={i}
          d={p.d}
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          style={
            p.animate
              ? {
                  strokeDasharray: 1,
                  strokeDashoffset: 1,
                  animation: `hero-line-draw ${p.dur.toFixed(3)}s linear ${p.delay.toFixed(3)}s forwards`,
                }
              : { strokeDasharray: "none", strokeDashoffset: 0, animation: "none" }
          }
        />
      ))}
    </svg>
  );
}
