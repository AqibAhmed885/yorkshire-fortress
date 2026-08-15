import type { ReactNode } from "react";
import { Heading } from "./Heading";
import { Eyebrow } from "./Eyebrow";

export function SectionHeader({ action, children, className = "", eyebrow, title }: { action?: ReactNode; children?: ReactNode; className?: string; eyebrow?: string; title: ReactNode }) {
  return (
    <div className={`mb-12 flex items-end justify-between gap-10 max-md:items-start max-sm:flex-col ${className}`.trim()}>
      <div className="max-w-[820px]">{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<Heading>{title}</Heading>{children}</div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
