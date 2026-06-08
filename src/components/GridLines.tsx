/**
 * Decorative vertical grid lines (peg-style brutalist grid).
 * Place inside a `relative` section.
 */
export default function GridLines({ dark = false }: { dark?: boolean }) {
  const border = dark ? "border-cream/10" : "border-olive/15";
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 grid grid-cols-2 md:grid-cols-4"
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className={`border-l ${border} last:border-r`} />
      ))}
    </div>
  );
}
