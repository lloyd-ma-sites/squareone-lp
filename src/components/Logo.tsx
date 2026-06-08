type LogoProps = {
  className?: string;
};

/**
 * SquareOne wordmark — inline SVG so it scales crisply at any size and
 * inherits color via `currentColor` (set text color with Tailwind, e.g.
 * `text-brown` in the nav or `text-cream` in the footer).
 */
export default function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 940 440"
      role="img"
      aria-label="SquareOne"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bracket frame — two halves with center gaps top & bottom */}
      <g
        stroke="currentColor"
        strokeWidth={9}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.85}
      >
        <path d="M410 10 L300 10 Q230 10 230 80 L230 360 Q230 430 300 430 L410 430" />
        <path d="M530 10 L640 10 Q710 10 710 80 L710 360 Q710 430 640 430 L530 430" />
      </g>

      {/* Wordmark — geometric font, width locked so spacing is even */}
      <text
        x="470"
        y="222"
        textAnchor="middle"
        dominantBaseline="central"
        textLength="820"
        lengthAdjust="spacingAndGlyphs"
        fill="currentColor"
        fontSize="160"
        fontWeight="400"
        style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
      >
        SQUAREONE
      </text>
    </svg>
  );
}
