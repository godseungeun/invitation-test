import type { ComponentProps } from "react";

// Figma InputField (67:93785): 한 줄 입력 박스
// state=default/focus/active → placeholder, :focus, 값 입력 상태를 CSS로 표현
export default function InputField({ className = "", type = "text", ...props }: ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={`h-45 w-full rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x text-body-lg text-text-primary outline-none placeholder:text-text-disabled focus:border-action-primary ${className}`.trim()}
      {...props}
    />
  );
}
