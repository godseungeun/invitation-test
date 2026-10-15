import type { Metadata } from "next";
import CreateForm from "./CreateForm";

export const metadata: Metadata = {
  title: "초대장 만들기",
};

// /create 화면. 입력·미리보기·발행은 상태가 필요해서 CreateForm(클라이언트 컴포넌트)에서 처리한다
export default function CreatePage() {
  return <CreateForm />;
}
