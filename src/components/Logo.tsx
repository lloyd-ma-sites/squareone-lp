import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Invert to white for dark backgrounds (e.g. the footer). */
  light?: boolean;
};

/**
 * SquareOne logo (full wordmark + frame) — the real asset with its white
 * background made transparent. On dark backgrounds pass `light` for white.
 */
export default function Logo({ className, light }: LogoProps) {
  return (
    <Image
      src="/squareone-logo.png"
      alt="SquareOne"
      width={1470}
      height={784}
      className={[className, light ? "invert" : ""].filter(Boolean).join(" ")}
    />
  );
}
