# Figma 프레임 매핑

화면(경로)마다 비교할 Figma 프레임 URL을 적는다. `ui-reviewer` 에이전트가 이 표를 보고 Figma와 코드를 비교한다.
URL은 Figma에서 프레임을 선택한 뒤 `우클릭 → Copy link to selection`으로 복사한다. (`node-id=`가 들어 있어야 한다)

| 경로 | 화면 | Figma 프레임 URL |
| --- | --- | --- |
| `/create` | 만들기 (입력·미리보기·발행) | https://www.figma.com/design/KUbyCPh1QOfpJDFcQnELG4/Untitled?node-id=67-93583 |
| `/create` (발행 완료) | 링크 공유 | https://www.figma.com/design/KUbyCPh1QOfpJDFcQnELG4/Untitled?node-id=67-93607 |
| `/i/[id]` | 초대장 보기·응답 폼 | https://www.figma.com/design/KUbyCPh1QOfpJDFcQnELG4/Untitled?node-id=67-93620 |
| `/i/[id]` (제출 완료) | 응답 완료 | |
| `/i/[id]/responses` | 응답 현황 | https://www.figma.com/design/KUbyCPh1QOfpJDFcQnELG4/Untitled?node-id=67-93568 |
| `/i/[id]/responses` (응답 0개) | 응답 현황 빈 상태 | https://www.figma.com/design/KUbyCPh1QOfpJDFcQnELG4/Untitled?node-id=67-93634 |
