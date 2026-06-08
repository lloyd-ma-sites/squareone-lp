import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Invert to white for dark backgrounds (e.g. the footer). */
  light?: boolean;
};

/**
 * SquareOne logo — the real wordmark asset (white background stripped to
 * transparent). On dark backgrounds pass `light` to render it white.
 */
export default function Logo({ className, light }: LogoProps) {
  return (
    <Image
      src="/squareone-logo.png"
      alt="SquareOne"
      width={294}
      height={157}
      className={[className, light ? "invert" : ""].filter(Boolean).join(" ")}
    />
  );
}
