/**
 * Monospace section label with index code, peg-style:
 *   SERVICES                                   [S1.3]
 */
export default function SectionLabel({
  label,
  code,
  dark = false,
}: {
  label: string;
  code?: string;
  dark?: boolean;
}) {
  const color = dark ? "text-cream/60" : "text-olive";
  return (
    <div
      className={`flex items-center justify-between border-b pb-3 font-mono text-sm uppercase tracking-[0.2em] ${color} ${
        dark ? "border-cream/15" : "border-olive/20"
      }`}
    >
      <span>{label}</span>
      {code && <span>[{code}]</span>}
    </div>
  );
}
