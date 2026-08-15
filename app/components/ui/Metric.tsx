import type { LucideIcon } from "lucide-react";

export function Metric({ copy, icon: Icon, title }: { copy: string; icon: LucideIcon; title: string }) {
  return <div className="flex items-center justify-center gap-4 border-r border-line px-6 last:border-0 max-md:justify-start max-md:border-r-0 max-md:border-b max-md:px-0 max-md:pb-8 max-md:last:border-0 max-md:last:pb-0"><Icon className="shrink-0 text-tan" size={34} /><span><strong className="block text-2xl font-semibold text-navy">{title}</strong><small className="text-muted">{copy}</small></span></div>;
}
