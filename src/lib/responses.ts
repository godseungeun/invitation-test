import { mockEmptyInvitation, mockInvitation, mockResponses, type InvitationResponse } from "@/lib/mock";

// 초대장 하나에 달린 참석 응답 목록
// 아직 저장소가 없어서 가짜 응답에서 찾는다. 모르는 id(demo 등)는 mockInvitation 응답을 보여준다
export async function getResponses(invitationId: string): Promise<InvitationResponse[]> {
  // TODO: Supabase 조회로 교체 (invitationId로 걸러서 가져오기)
  const id = invitationId === mockEmptyInvitation.id ? invitationId : mockInvitation.id;
  return mockResponses.filter((r) => r.invitationId === id);
}

export type ResponseSummary = {
  attending: number; // 참석한 사람 수
  declined: number; // 불참한 사람 수
  totalGuests: number; // 참석 인원 합계 = 참석한 사람 + 참석자의 동반 인원
};

// 응답 목록 → 참석·불참 수, 참석 인원 합계 (불참자의 동반 인원은 더하지 않는다)
export function summarizeResponses(responses: InvitationResponse[]): ResponseSummary {
  const attendingList = responses.filter((r) => r.attending);
  return {
    attending: attendingList.length,
    declined: responses.length - attendingList.length,
    totalGuests: attendingList.reduce((sum, r) => sum + 1 + r.guests, 0),
  };
}
