// 화면 확인용 가짜 데이터. Supabase를 연결하면 실제 데이터로 바꾼다.

// 초대장 (PRD: 제목·일시·장소·본문)
export type Invitation = {
  id: string; // 추측하기 어려운 고유 ID (crypto.randomUUID() 형식)
  title: string;
  date: string; // 일시. ISO 형식 문자열 (한국 시간 +09:00)
  location: string; // 장소. 주소를 글자로만 표시
  body: string;
};

// 참석 응답 (PRD: 이름·참석 여부·동반 인원)
export type InvitationResponse = {
  id: string;
  invitationId: string; // 어떤 초대장에 대한 응답인지
  name: string;
  attending: boolean; // true = 참석, false = 불참
  guests: number; // 동반 인원 (본인 제외). 불참이면 0
};

export const mockInvitation: Invitation = {
  id: "3f8b2c1e-7a4d-4e9b-9c61-2d5a8f0e4b17",
  title: "허들링 클럽 2번째\n오프라인 밋업",
  date: "2026-11-14T09:00:00+09:00",
  location: "세종 남극 기지",
  body: "추운 겨울, 함께 모여 온기를 나눠요.\n편하게 오셔서 이야기 나누고 맛있는 것도 먹어요.",
};

// 참석 2 · 불참 1 · 참석 인원 합계 5명 (참석자 2명 + 동반 3명)
export const mockResponses: InvitationResponse[] = [
  {
    id: "a1c4e7f0-2b5d-4c8e-9f13-6a9b2c5d8e01",
    invitationId: mockInvitation.id,
    name: "김허들",
    attending: true,
    guests: 1,
  },
  {
    id: "b2d5f8a1-3c6e-4d9f-8a24-7b0c3d6e9f12",
    invitationId: mockInvitation.id,
    name: "이펭귄",
    attending: false,
    guests: 0,
  },
  {
    id: "c3e6a9b2-4d7f-4e0a-9b35-8c1d4e7f0a23",
    invitationId: mockInvitation.id,
    name: "박빙하",
    attending: true,
    guests: 2,
  },
];
