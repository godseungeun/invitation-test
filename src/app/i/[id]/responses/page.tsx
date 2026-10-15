import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EmptyState from "@/components/EmptyState";
import NavBar from "@/components/NavBar";
import ResponseRowTrue from "@/components/ResponseRowTrue";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import { formatDate } from "@/lib/format";
import { getInvitation } from "@/lib/invitations";
import { getResponses, summarizeResponses } from "@/lib/responses";
import CopyInviteLinkButton from "./CopyInviteLinkButton";

export const metadata: Metadata = {
  title: "응답 현황",
};

// /i/[id]/responses 호스트 화면 (Figma 67:93568)
// id는 요청이 와야 알 수 있어서, 내용은 Suspense 안에서 불러온다 (cacheComponents 규칙)
export default function ResponsesPage({ params }: PageProps<"/i/[id]/responses">) {
  return (
    <main className="mx-auto flex w-full max-w-375 flex-col gap-page-horizontal">
      <NavBar title="응답 현황" />
      <Suspense>
        {params.then(({ id }) => (
          <ResponsesContent id={id} />
        ))}
      </Suspense>
    </main>
  );
}

async function ResponsesContent({ id }: { id: string }) {
  const [invitation, responses] = await Promise.all([getInvitation(id), getResponses(id)]);
  if (!invitation) notFound();

  const summary = summarizeResponses(responses);

  return (
    <div className="flex flex-col gap-section-lg px-page-horizontal pb-cover-inset">
      <SectionHeader
        subtitle="Responses"
        title={invitation.title.replace(/\n/g, " ")}
        description={`${formatDate(invitation.date)} · ${invitation.location}`}
      />

      {/* 요약: 참석 · 불참 · 참석 인원 합계 */}
      <div className="flex gap-inline-md">
        <StatCard className="min-w-0 flex-1" label="참석" value={`${summary.attending}명`} />
        <StatCard className="min-w-0 flex-1" label="불참" value={`${summary.declined}명`} />
        <StatCard className="min-w-0 flex-1" label="참석 인원 합계" value={`${summary.totalGuests}명`} highlight />
      </div>

      <p className="text-caption-md text-text-tertiary">참석 인원 합계 = 참석한 사람 + 동반 인원</p>

      {/* 응답 목록 (불참이면 동반 인원을 적지 않는다) */}
      <section className="flex flex-col gap-inline-md">
        <h2 className="text-heading-md text-text-strong">응답 목록</h2>
        {responses.length === 0 ? (
          <EmptyState />
        ) : (
          responses.map((r) => (
            <ResponseRowTrue
              key={r.id}
              name={r.name}
              meta={r.attending ? `동반 ${r.guests}명` : ""}
              status={r.attending ? "yes" : "no"}
            />
          ))
        )}
      </section>

      <CopyInviteLinkButton id={id} />
    </div>
  );
}
