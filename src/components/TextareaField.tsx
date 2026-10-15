import type { ComponentProps } from "react";

// Figma TextareaField (67:93744): 여러 줄 입력 박스
// state=default/focus/active → placeholder, :focus, 값 입력 상태를 CSS로 표현
// 높이는 className(h-*)으로 정한다 (기본 45px)
export default function TextareaField({ className = "h-45", ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={`w-full resize-none rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x text-body-lg text-text-primary outline-none placeholder:text-text-disabled focus:border-action-primary ${className}`}
      {...props}
    />
  );
}
