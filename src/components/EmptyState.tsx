import type { ComponentProps } from "react";

type EmptyStateProps = ComponentProps<"div"> & {
  title?: string;
  description?: string;
};

// Figma EmptyState (67:93732): 목록이 비었을 때 안내
export default function EmptyState({
  title = "아직 응답이 없어요",
  description = "초대장 링크를 공유하면 응답이 여기에 쌓여요.",
  className = "",
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-inline-md rounded-card bg-surface-subtle px-page-horizontal py-section-lg text-center ${className}`.trim()}
      {...props}
    >
      <p className="text-heading-md text-text-strong">{title}</p>
      <p className="text-body-md text-text-tertiary">{description}</p>
    </div>
  );
}
