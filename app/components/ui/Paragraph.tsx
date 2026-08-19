import type { HTMLAttributes } from "react";

type ParagraphSize = "small" | "body" | "lead";
type ParagraphTone = "inherit" | "muted" | "light" | "white";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: ParagraphSize;
  tone?: ParagraphTone;
}

const sizeClasses: Record<ParagraphSize, string> = {
  small: "text-sm leading-[1.55]",
  body: "text-[17px] leading-[1.55]",
  lead: "text-[clamp(19px,2vw,21px)] leading-[1.5] ",
};
const toneClasses: Record<ParagraphTone, string> = {
  inherit: "",
  muted: "text-muted",
  light: "text-[#d4dce6]",
  white: "text-white",
};

export function Paragraph({
  className = "",
  size = "body",
  tone = "inherit",
  ...props
}: ParagraphProps) {
  return (
    <p className={`${sizeClasses[size]} ${toneClasses[tone]} ${className}`.trim()} {...props} />
  );
}
