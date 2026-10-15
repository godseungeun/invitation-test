import type { ComponentProps } from "react";

// Figma icon/plus (67:93693). 색은 text-* 클래스, 크기는 size-* 클래스로 정한다 (기본 24px)
export default function IconPlus({ className = "size-24", ...props }: ComponentProps<"svg">) {
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
      <path d="M12 20V12M12 12V4M12 12H20M12 12H4" />
    </svg>
  );
}
