import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "navy" | "outline-light" | "text-navy" | "text-light";
type ButtonSize = "default" | "large";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-tan bg-tan text-onyx hover:border-white hover:bg-white",
  navy: "border-navy bg-navy text-white hover:border-navy-deep hover:bg-navy-deep",
  "outline-light": "border-white/45 bg-transparent text-white hover:border-white hover:bg-white hover:text-navy",
  "text-navy": "border-x-0 border-t-0 border-b-navy bg-transparent px-0 text-navy hover:border-tan hover:text-navy-deep",
  "text-light": "border-x-0 border-t-0 border-b-tan bg-transparent px-0 text-tan hover:border-white hover:text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "min-h-12 px-[19px] py-3",
  large: "min-h-14 px-6 py-4",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  href?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export function Button({ children, className = "", href, size = "default", variant = "primary", type = "button", ...props }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2.5 border text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tan ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  if (href) return <Link className={classes} href={href}>{children}</Link>;

  return <button className={classes} type={type} {...props}>{children}</button>;
}
