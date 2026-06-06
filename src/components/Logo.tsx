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
        strokeWidth={10}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.8}
      >
        <path d="M410 10 L290 10 Q230 10 230 70 L230 370 Q230 430 290 430 L410 430" />
        <path d="M530 10 L650 10 Q710 10 710 70 L710 370 Q710 430 650 430 L530 430" />
      </g>

      {/* Wordmark */}
      <text
        x="470"
        y="220"
        textAnchor="middle"
        dominantBaseline="central"
        className="font-sans"
        fill="currentColor"
        fontSize="140"
        fontWeight="300"
        letterSpacing="2"
      >
        SQUAREONE
      </text>
    </svg>
  );
}
