import type { ComponentProps } from "react";

type StatCardProps = ComponentProps<"div"> & {
  label?: string;
  value?: string;
  // 참석 인원 합계처럼 강조할 숫자에만 true
  highlight?: boolean;
};

// Figma StatCard (67:93670)
export default function StatCard({
  label = "참석",
  value = "2명",
  highlight = false,
  className = "",
  ...props
}: StatCardProps) {
  const colors = highlight ? "bg-info-subtle text-info-strong" : "bg-surface-subtle text-text-strong";

  return (
    <div
      className={`flex flex-col items-center gap-inline-sm rounded-card px-control-x py-stack-md ${colors} ${className}`.trim()}
      {...props}
    >
      <span className="text-caption-md text-text-secondary">{label}</span>
      <span className="text-title-lg">{value}</span>
    </div>
  );
}
