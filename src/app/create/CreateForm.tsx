"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import CopyLinkField from "@/components/CopyLinkField";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import InvitationCover from "@/components/InvitationCover";
import Label from "@/components/Label";
import NavBar from "@/components/NavBar";
import SuccessIcon from "@/components/SuccessIcon";
import Textarea from "@/components/Textarea";
import { formatDate } from "@/lib/format";

// 일시 입력값("2026-11-14T09:00", 한국 시간) → "2026년 11월 14일 (토) 09:00"
// 비었으면 빈칸, 형식이 이상하면 입력값 그대로 보여준다
function previewDate(value: string) {
  if (!value) return "";
  const iso = `${value}+09:00`;
  return Number.isNaN(new Date(iso).getTime()) ? value : formatDate(iso);
}

// 발행 후 보여줄 링크
type Published = { id: string; inviteUrl: string; responsesUrl: string };

export default function CreateForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [body, setBody] = useState("");
  const [published, setPublished] = useState<Published | null>(null);

  // 네 칸 모두 필수 (Figma "필수" 표시)
  const canPublish = [title, date, location, body].every((v) => v.trim() !== "");
  const dateText = previewDate(date);

  function handlePublish() {
    // 지금은 저장소가 없어 demo 화면으로 연결한다
    // TODO: Supabase 저장 후 crypto.randomUUID()로 만든 id 사용
    const id = "demo";
    setPublished({
      id,
      inviteUrl: `${window.location.origin}/i/${id}`,
      responsesUrl: `${window.location.origin}/i/${id}/responses`,
    });
    window.scrollTo(0, 0);
  }

  // 발행 완료 화면 (Figma 67:93607)
  if (published) {
    return (
      <main className="mx-auto flex w-full max-w-375 flex-col gap-page-horizontal">
        <NavBar title="발행 완료" />
        <div className="flex flex-col gap-section-lg px-page-horizontal pb-cover-inset">
          <section className="flex flex-col items-center gap-stack-sm py-stack-lg text-center">
            <SuccessIcon />
            <h2 className="text-title-lg text-text-strong">초대장이 발행됐어요!</h2>
            <p className="text-body-md text-text-secondary">아래 두 링크를 복사해 두세요.</p>
          </section>
          <CopyLinkField
            title="초대장 링크"
            description="게스트에게 공유하는 링크예요."
            url={published.inviteUrl}
          />
          <CopyLinkField
            title="응답 현황 링크"
            description="호스트용이에요. 이 링크를 아는 사람은 응답 목록을 볼 수 있어요."
            url={published.responsesUrl}
          />
          <Button size="lg" className="w-full" onClick={() => router.push(`/i/${published.id}`)}>
            내 초대장 보기
          </Button>
        </div>
      </main>
    );
  }

  // 입력·미리보기 화면 (Figma 67:93583)
  return (
    // pb-112: 하단 고정 버튼(높이 92px)에 내용이 가려지지 않도록 여백
    <main className="mx-auto flex w-full max-w-375 flex-col gap-control-compact pb-112">
      <NavBar title="초대장 만들기" />

      <div className="flex flex-col gap-section-lg px-page-horizontal">
        {/* 입력 폼 */}
        <div className="flex flex-col gap-stack-lg">
          <Textarea
            label="제목"
            rows={2}
            placeholder={"예) 허들링 클럽 2번째\n오프라인 밋업"}
            helper="엔터로 줄을 나눌 수 있어요 · 최대 2줄"
            value={title}
            // 최대 2줄: 세 번째 줄부터는 잘라낸다
            onChange={(e) => setTitle(e.target.value.split("\n").slice(0, 2).join("\n"))}
          />
          <Input
            label="일시"
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            label="장소"
            placeholder="예) 세종 남극 기지"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Textarea
            label="본문"
            rows={4}
            placeholder="게스트에게 전할 초대 글을 적어주세요"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        {/* 실시간 미리보기 */}
        <section className="flex flex-col gap-inline-md">
          <Label as="span" required={false}>
            미리보기
          </Label>
          <div className="h-460 w-full overflow-y-auto rounded-control border border-border-subtle bg-surface-default">
            <InvitationCover subtitle="" title={title} date={dateText} location={location} />
            <div className="flex flex-col items-center gap-stack-md px-page-horizontal py-cover-inset">
              <Image type="flag" alt="" />
              <p className="w-full whitespace-pre-line break-words text-center text-body-compact text-text-primary">
                {body}
              </p>
            </div>
            <div className="px-page-horizontal pb-section-lg pt-stack-lg">
              <div className="flex flex-col gap-control-compact rounded-card bg-surface-subtle p-page-horizontal">
                <InfoRow label="일시" value={dateText} />
                <InfoRow label="장소" value={location} />
              </div>
            </div>
          </div>
          <p className="text-caption-md text-text-tertiary">입력하는 내용이 바로 미리보기에 반영돼요.</p>
        </section>
      </div>

      {/* 하단 고정 발행 버튼 */}
      <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-375 bg-surface-default p-page-horizontal">
        <Button size="lg" className="w-full" disabled={!canPublish} onClick={handlePublish}>
          발행하기
        </Button>
      </div>
    </main>
  );
}
