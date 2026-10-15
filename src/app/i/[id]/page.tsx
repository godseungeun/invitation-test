import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import InvitationCover from "@/components/InvitationCover";
import { formatDate } from "@/lib/format";
import { getInvitation } from "@/lib/invitations";
import RSVPSection from "./RSVPSection";

// 탭 제목 = 초대장 제목 (제목의 줄바꿈은 띄어쓰기로)
export async function generateMetadata({ params }: PageProps<"/i/[id]">): Promise<Metadata> {
  const { id } = await params;
  const invitation = await getInvitation(id);
  return { title: invitation ? invitation.title.replace(/\n/g, " ") : "초대장" };
}

// /i/[id] 게스트 화면 (Figma 67:93620)
// id는 요청이 와야 알 수 있어서, 내용은 Suspense 안에서 불러온다 (cacheComponents 규칙)
export default function InvitationPage({ params }: PageProps<"/i/[id]">) {
  return (
    <main className="mx-auto flex w-full max-w-375 flex-col">
      <Suspense>
        {params.then(({ id }) => (
          <InvitationContent id={id} />
        ))}
      </Suspense>
    </main>
  );
}

async function InvitationContent({ id }: { id: string }) {
  const invitation = await getInvitation(id);
  if (!invitation) notFound();

  const dateText = formatDate(invitation.date);

  return (
    <>
      <InvitationCover
        subtitle=""
        title={invitation.title}
        date={dateText}
        location={invitation.location}
      />

      {/* 본문 */}
      <section className="flex flex-col items-center gap-stack-md bg-surface-default px-page-horizontal py-cover-inset">
        <Image type="flag" alt="" />
        <p className="w-full whitespace-pre-line break-words text-center text-body-compact text-text-primary">
          {invitation.body}
        </p>
      </section>

      {/* 일시·장소 (장소는 글자로만) */}
      <section className="bg-surface-default px-page-horizontal pb-section-lg pt-stack-lg">
        <div className="flex flex-col gap-control-compact rounded-card bg-surface-subtle p-page-horizontal">
          <InfoRow label="일시" value={dateText} />
          <InfoRow label="장소" value={invitation.location} />
        </div>
      </section>

      {/* 참석 응답 */}
      <section className="bg-background-subtle px-page-horizontal pb-section-xl pt-section-lg">
        <RSVPSection invitationId={invitation.id} />
      </section>
    </>
  );
}
