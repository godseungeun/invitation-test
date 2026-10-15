import { mockEmptyInvitation, mockInvitation, type Invitation } from "@/lib/mock";

// 초대장 하나를 id로 찾는다. 없으면 null
// 아직 저장소가 없어서, 가짜 초대장 중에서 찾고 없으면 mockInvitation(demo)을 돌려준다
export async function getInvitation(id: string): Promise<Invitation | null> {
  // TODO: Supabase 조회로 교체
  if (id === mockEmptyInvitation.id) return mockEmptyInvitation;
  return { ...mockInvitation, id };
}
