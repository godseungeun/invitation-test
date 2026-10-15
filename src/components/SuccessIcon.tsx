import type { ComponentProps } from "react";
import IconCheck from "@/components/IconCheck";

// Figma SuccessIcon (67:93683): 완료 표시 체크
export default function SuccessIcon({ className = "", ...props }: ComponentProps<"span">) {
  return (
    <span
      className={`flex size-64 shrink-0 items-center justify-center rounded-pill bg-info-subtle ${className}`.trim()}
      {...props}
    >
      {/* 32px로 키워도 선 굵기는 Figma처럼 3px (3 × 24/32 = 2.25) */}
      <IconCheck className="size-32 text-info-strong" strokeWidth={2.25} />
    </span>
  );
}
