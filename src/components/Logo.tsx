import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Invert to white for dark backgrounds (e.g. the footer). */
  light?: boolean;
};

/**
 * SquareOne wordmark (no frame) — extracted from the real logo asset.
 * On dark backgrounds pass `light` to render it white.
 */
export default function Logo({ className, light }: LogoProps) {
  return (
    <Image
      src="/squareone-wordmark.png"
      alt="SquareOne"
      width={1415}
      height={194}
      className={[className, light ? "invert" : ""].filter(Boolean).join(" ")}
    />
  );
}
