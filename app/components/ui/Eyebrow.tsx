import type { HTMLAttributes } from "react";

export function Eyebrow({ className = "", ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`mb-3.5 text-xs font-extrabold uppercase tracking-[.18em] text-navy ${className}`.trim()}
      {...props}
    />
  );
}
