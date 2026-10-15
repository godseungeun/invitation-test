import type { ComponentProps } from "react";

type InfoRowProps = ComponentProps<"div"> & {
  label?: string;
  value?: string;
  // inline: 붙여서 · spread: 양끝 정렬
  type?: "inline" | "spread";
};

// Figma InfoRow (67:93685)
export default function InfoRow({
  label = "일시",
  value = "2026년 11월 14일 (토) 09:00",
  type = "inline",
  className = "",
  ...props
}: InfoRowProps) {
  if (type === "spread") {
    return (
      <div className={`flex w-full items-center gap-control-compact ${className}`.trim()} {...props}>
        <span className="shrink-0 whitespace-nowrap text-body-md text-text-secondary">{label}</span>
        <span className="min-w-0 flex-1 text-right text-label-md text-text-strong">{value}</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-control-compact ${className}`.trim()} {...props}>
      <span className="shrink-0 whitespace-nowrap text-label-lg text-text-secondary">{label}</span>
      <span aria-hidden className="h-14 w-1 shrink-0 bg-border-default" />
      <span className="min-w-0 text-label-lg text-text-strong">{value}</span>
    </div>
  );
}
