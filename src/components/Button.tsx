import type { ComponentProps } from "react";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ComponentProps<"button"> & {
  size?: ButtonSize;
};

// Figma Button (node 67:93766) 크기별 스타일
const sizeClasses: Record<ButtonSize, string> = {
  sm: "py-inline-sm text-label-md bg-action-primary",
  md: "h-48 py-control-x text-label-md bg-text-secondary",
  lg: "h-52 py-inline-sm text-label-lg bg-action-primary",
};

export default function Button({
  size = "md",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center whitespace-nowrap rounded-control px-inline-md text-center text-surface-default",
    sizeClasses[size],
    // hover와 disabled는 Figma state를 CSS로 표현
    "enabled:hover:bg-action-hover-overlay disabled:bg-border-subtle",
    className,
  ]
    .join(" ")
    .trim();

  return <button type={type} className={classes} {...props} />;
}
