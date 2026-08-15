import type { HTMLAttributes } from "react";

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize = "sm" | "md" | "lg" | "xl" | "2xl";
type HeadingTone = "inherit" | "navy" | "onyx" | "white";
type HeadingWeight = "medium" | "semibold" | "bold" | "extrabold";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingTag;
  size?: HeadingSize;
  tone?: HeadingTone;
  weight?: HeadingWeight;
}

const sizeClasses: Record<HeadingSize, string> = {
  sm: "text-xl leading-[1.15]",
  md: "text-[clamp(26px,3vw,34px)] leading-[1.1]",
  lg: "text-[clamp(36px,4vw,46px)] leading-[1.02]",
  xl: "text-[clamp(42px,5vw,62px)] leading-[.98]",
  "2xl": "text-[clamp(52px,6.5vw,86px)] leading-[.92]",
};

const toneClasses: Record<HeadingTone, string> = { inherit: "", navy: "text-navy", onyx: "text-onyx", white: "text-white" };
const weightClasses: Record<HeadingWeight, string> = { medium: "font-medium", semibold: "font-semibold", bold: "font-bold", extrabold: "font-extrabold" };

export function Heading({ as: Component = "h2", className = "", size = "lg", tone = "navy", weight = "medium", ...props }: HeadingProps) {
  return <Component className={`m-0 tracking-[-.035em] ${sizeClasses[size]} ${toneClasses[tone]} ${weightClasses[weight]} ${className}`.trim()} {...props} />;
}
