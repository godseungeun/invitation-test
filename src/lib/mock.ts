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
  title: "쮸니의\n생일 파티에 초대해요",
  date: "2026-11-14T09:00:00+09:00",
  location: "세종 남극 기지",
  body: "시니, 신아빠, 이엄마, 피고양즈, 함모니, 하부지, 삼츈, 숙모, 막내공쥬에게.\n\n오래된 동화책을 한 장 넘기듯,\n쮸니의 생일날 사랑하는 가족을 초대해요.\n\n포근한 불빛 아래 옹기종기 둘러앉아\n달콤한 케이크와 오래 간직할 추억을 나눠요.\n\n꼭 와 주실 거죠?",
};

// 응답이 하나도 없는 초대장 (응답 0건 화면 확인용: /i/empty/responses)
export const mockEmptyInvitation: Invitation = {
  id: "empty",
  title: "아직 응답이 없는\n테스트 초대장",
  date: "2026-12-05T18:30:00+09:00",
  location: "세종 남극 기지 2층",
  body: "응답이 0건일 때 화면을 확인하기 위한 초대장이에요.",
};

// 아래 응답은 모두 mockInvitation 것. mockEmptyInvitation의 응답은 없다
// 참석 2 · 불참 1 · 참석 인원 합계 5명 (참석자 2명 + 동반 3명)
export const mockResponses: InvitationResponse[] = [
  {
    id: "a1c4e7f0-2b5d-4c8e-9f13-6a9b2c5d8e01",
    invitationId: mockInvitation.id,
    name: "이엄마",
    attending: true,
    guests: 1,
  },
  {
    id: "b2d5f8a1-3c6e-4d9f-8a24-7b0c3d6e9f12",
    invitationId: mockInvitation.id,
    name: "삼츈",
    attending: false,
    guests: 0,
  },
  {
    id: "c3e6a9b2-4d7f-4e0a-9b35-8c1d4e7f0a23",
    invitationId: mockInvitation.id,
    name: "함모니",
    attending: true,
    guests: 2,
  },
];
