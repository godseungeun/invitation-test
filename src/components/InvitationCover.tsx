import type { ComponentProps } from "react";
import Image from "@/components/Image";
import SectionHeader from "@/components/SectionHeader";

type InvitationCoverProps = ComponentProps<"section"> & {
  subtitle?: string;
  // 줄바꿈(\n)은 그대로 보여준다
  title?: string;
  date?: string;
  location?: string;
};

// 일시·장소 한 묶음 (작은 라벨 + 값)
function CoverDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-inline-md">
      <span className="rounded-control bg-info-subtle px-inline-compact py-inline-xs text-caption-md font-semibold text-info-strong">
        {label}
      </span>
      <p className="w-full text-center text-label-md text-surface-default">{value}</p>
    </div>
  );
}

// Figma InvitationCover (67:93659): 초대장 상단 커버
export default function InvitationCover({
  subtitle = "Huddling Club 2nd Meetup",
  title = "허들링 클럽 2번째\n오프라인 밋업",
  date = "2026년 11월 14일 (토) 09:00",
  location = "세종 남극 기지",
  className = "",
  ...props
}: InvitationCoverProps) {
  return (
    <section
      // 배경: Figma는 어두운 그라데이션이지만 맞는 토큰이 없어 surface-inverse로 임시 대체
      className={`flex w-full flex-col items-center justify-center gap-page-horizontal overflow-hidden bg-surface-inverse px-page-horizontal py-cover-inset ${className}`.trim()}
      {...props}
    >
      <SectionHeader inverse subtitle={subtitle} title={title} showDescription={false} />
      <Image type="character" alt="" />
      <CoverDetail label="일시" value={date} />
      <CoverDetail label="장소" value={location} />
    </section>
  );
}
