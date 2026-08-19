import type { HTMLAttributes } from "react";

type ContainerElement = "div" | "section";
type ContainerSpacing = "none" | "standard" | "compact";

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ContainerElement;
  spacing?: ContainerSpacing;
}

const spacingClasses: Record<ContainerSpacing, string> = {
  none: "",
  standard: "py-[110px] max-sm:py-[75px]",
  compact: "py-[75px] max-sm:py-[60px]",
};

export function Container({
  as: Component = "section",
  className = "",
  spacing = "standard",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-[calc(100%_-_48px)] max-w-[1440px] max-sm:w-[calc(100%_-_32px)] ${spacingClasses[spacing]} ${className}`.trim()}
      {...props}
    />
  );
}
