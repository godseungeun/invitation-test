import { useId, type ComponentProps } from "react";
import Label from "@/components/Label";
import TextareaField from "@/components/TextareaField";

type TextareaProps = Omit<ComponentProps<"textarea">, "rows"> & {
  label?: string;
  // 값이 있으면 입력칸 아래 안내 문구를 보여준다 (Figma showHelper)
  helper?: string;
  // 2: 제목(최대 2줄) · 4: 본문
  rows?: 2 | 4;
};

// Figma Textarea (67:93735)
const heightClasses = { 2: "h-72", 4: "h-120" };

export default function Textarea({
  label = "Label",
  required = true,
  helper,
  rows = 4,
  className = "",
  id,
  ...props
}: TextareaProps) {
  const autoId = useId();
  const textareaId = id ?? autoId;
  const helperId = `${textareaId}-helper`;

  return (
    <div className={`flex w-full flex-col items-start gap-inline-compact ${className}`.trim()}>
      <Label htmlFor={textareaId} required={required}>
        {label}
      </Label>
      <TextareaField
        id={textareaId}
        rows={rows}
        required={required}
        aria-describedby={helper ? helperId : undefined}
        className={heightClasses[rows]}
        {...props}
      />
      {helper && (
        <p id={helperId} className="text-caption-md text-text-tertiary">
          {helper}
        </p>
      )}
    </div>
  );
}
