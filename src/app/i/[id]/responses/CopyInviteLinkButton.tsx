"use client";

import { useState } from "react";
import Button from "@/components/Button";

// 게스트에게 보낼 초대장 링크(/i/[id])를 복사하는 버튼
export default function CopyInviteLinkButton({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(`${location.origin}/i/${id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button size="lg" className="w-full" onClick={copy}>
      {copied ? "복사됐어요" : "초대장 링크 복사하기"}
    </Button>
  );
}
