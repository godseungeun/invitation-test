import type { ComponentProps } from "react";

type SectionHeaderProps = ComponentProps<"div"> & {
  subtitle?: string;
  title?: string;
  description?: string;
  showSubtitle?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  // 어두운 배경 위(InvitationCover)에서 글자를 흰색으로. Figma variant 아님(인스턴스 색 덮어쓰기)
  inverse?: boolean;
};

// Figma SectionHeader (67:93799)
export default function SectionHeader({
  subtitle = "Subtitle",
  title = "title",
  description = "Description",
  showSubtitle = true,
  showTitle = true,
  showDescription = true,
  inverse = false,
  className = "",
  ...props
}: SectionHeaderProps) {
  const subtitleColor = inverse ? "text-surface-default opacity-60" : "text-action-secondary";
  const textColor = inverse ? "text-surface-default" : "text-text-primary";

  return (
    <div className={`flex w-full flex-col items-center gap-stack-md text-center ${className}`.trim()} {...props}>
      {showSubtitle && <p className={`w-full text-label-md ${subtitleColor}`}>{subtitle}</p>}
      {showTitle && <h2 className={`w-full whitespace-pre-line text-title-lg ${textColor}`}>{title}</h2>}
      {showDescription && <p className={`w-full text-body-md ${textColor}`}>{description}</p>}
    </div>
  );
}
