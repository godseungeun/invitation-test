import type { ComponentProps } from "react";

type AttendanceStatus = "yes" | "no";

type AttendanceBadgeProps = ComponentProps<"span"> & {
  status?: AttendanceStatus;
};

// Figma AttendanceBadge (67:93654): status=yes 참석 · no 불참
const statusClasses: Record<AttendanceStatus, string> = {
  yes: "bg-info-subtle text-info-strong",
  no: "bg-background-subtle text-text-secondary",
};

export default function AttendanceBadge({ status = "yes", className = "", ...props }: AttendanceBadgeProps) {
  return (
    <span
      className={`inline-flex shrink-0 whitespace-nowrap rounded-pill px-control-compact py-inline-sm text-label-md ${statusClasses[status]} ${className}`.trim()}
      {...props}
    >
      {status === "yes" ? "참석" : "불참"}
    </span>
  );
}
