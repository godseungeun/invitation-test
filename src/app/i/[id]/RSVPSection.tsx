"use client";

import RSVPCard, { type RSVPResponse } from "@/components/RSVPCard";

// 참석 응답 카드. 제출하면 RSVPCard가 같은 자리에서 완료 화면으로 바뀐다
// 함수(onSubmit)는 서버 컴포넌트에서 넘길 수 없어서 이 클라이언트 파일에 둔다
export default function RSVPSection({ invitationId }: { invitationId: string }) {
  async function handleSubmit(response: RSVPResponse) {
    // TODO: Supabase 저장 (invitationId와 response를 함께 저장)
    void invitationId;
    void response;
  }

  return <RSVPCard onSubmit={handleSubmit} />;
}
