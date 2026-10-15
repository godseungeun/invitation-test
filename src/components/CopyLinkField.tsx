"use client";

import { useId, type ComponentProps } from "react";
import Button from "@/components/Button";
import InputField from "@/components/InputField";

type CopyLinkFieldProps = ComponentProps<"div"> & {
  title?: string;
  description?: string;
  // 복사할 전체 주소
  url?: string;
  copyLabel?: string;
};

// Figma CopyLinkField (67:93677): 공유 링크 + 복사 버튼
export default function CopyLinkField({
  title = "초대장 링크",
  description = "게스트에게 공유하는 링크예요.",
  url = "…/i/k3f9x2a7",
  copyLabel = "복사",
  className = "",
  ...props
}: CopyLinkFieldProps) {
  const inputId = useId();

  return (
    <div
      className={`flex w-full flex-col items-start gap-inline-md rounded-card bg-surface-subtle p-stack-md ${className}`.trim()}
      {...props}
    >
      <label htmlFor={inputId} className="text-label-lg text-text-strong">
        {title}
      </label>
      <div className="flex w-full items-center gap-inline-md">
        <InputField id={inputId} value={url} readOnly className="min-w-0 flex-1" />
        <Button size="sm" onClick={() => navigator.clipboard.writeText(url)}>
          {copyLabel}
        </Button>
      </div>
      <p className="text-caption-md text-text-tertiary">{description}</p>
    </div>
  );
}
