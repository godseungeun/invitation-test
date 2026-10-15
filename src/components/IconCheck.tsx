import type { ComponentProps } from "react";

// Figma icon/check (67:93751). 색은 text-* 클래스, 크기는 size-* 클래스로 정한다 (기본 24px)
export default function IconCheck({ className = "size-24", ...props }: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={`shrink-0 ${className}`}
      {...props}
    >
      <path d="M4.5 12L9.5 16L18.5 7" />
    </svg>
  );
}
