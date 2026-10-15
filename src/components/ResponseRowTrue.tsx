import type { ComponentProps } from "react";
import AttendanceBadge from "@/components/AttendanceBadge";

type ResponseRowTrueProps = ComponentProps<"div"> & {
  name?: string;
  // 동반 인원 등 보조 정보. 불참이면 동반 인원을 넣지 않는다
  meta?: string;
  status?: "yes" | "no";
};

// Figma ResponseRow/true (67:93806): 응답 현황 목록 한 줄
export default function ResponseRowTrue({
  name = "이엄마",
  meta = "010-****-1234 · 굿즈 M",
  status = "yes",
  className = "",
  ...props
}: ResponseRowTrueProps) {
  return (
    <div
      className={`flex h-78 w-full items-center gap-stack-sm rounded-card border border-border-subtle bg-surface-default p-stack-md ${className}`.trim()}
      {...props}
    >
      <div className="flex min-w-0 flex-1 flex-col items-start gap-inline-sm">
        <p className="w-full truncate text-label-lg text-text-primary">{name}</p>
        {meta && <p className="w-full truncate text-caption-md text-text-tertiary">{meta}</p>}
      </div>
      <AttendanceBadge status={status} />
    </div>
  );
}
