import type { ComponentProps } from "react";

// Figma icon/none (67:93649): 아이콘이 없을 때 자리만 차지하는 빈 칸
export default function IconNone({ className = "", ...props }: ComponentProps<"span">) {
  return <span aria-hidden className={`block size-24 shrink-0 ${className}`.trim()} {...props} />;
}
