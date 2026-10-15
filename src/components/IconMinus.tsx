import type { ComponentProps } from "react";

// Figma icon/minus (67:93695). 색은 text-* 클래스, 크기는 size-* 클래스로 정한다 (기본 24px)
export default function IconMinus({ className = "size-24", ...props }: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden
      className={`shrink-0 ${className}`}
      {...props}
    >
      <path d="M20 12H4" />
    </svg>
  );
}
