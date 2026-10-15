import type { ComponentProps } from "react";

type LabelProps = ComponentProps<"label"> & {
  // true면 "필수" 표시
  required?: boolean;
  // 라디오처럼 바깥이 이미 <label>이면 "span"으로 바꾼다
  as?: "label" | "span";
};

// Figma Label (67:93753)
export default function Label({
  required = true,
  as: Tag = "label",
  className = "",
  children,
  ...props
}: LabelProps) {
  return (
    <Tag
      className={`inline-flex items-center gap-inline-sm whitespace-nowrap ${className}`.trim()}
      {...props}
    >
      <span className="text-label-lg text-text-strong">{children}</span>
      {required && <span className="text-caption-md text-feedback-error">필수</span>}
    </Tag>
  );
}
