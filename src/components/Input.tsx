import { useId, type ComponentProps } from "react";
import InputField from "@/components/InputField";
import Label from "@/components/Label";

type InputProps = ComponentProps<"input"> & {
  label?: string;
  // 값이 있으면 입력칸 아래 안내 문구를 보여준다 (Figma showHelper)
  helper?: string;
};

// Figma Input (67:93792): 라벨 + 한 줄 입력 박스 + 안내 문구
export default function Input({
  label = "Label",
  required = true,
  helper,
  className = "",
  id,
  ...props
}: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const helperId = `${inputId}-helper`;

  return (
    <div className={`flex w-full flex-col items-start gap-inline-compact ${className}`.trim()}>
      <Label htmlFor={inputId} required={required}>
        {label}
      </Label>
      <InputField
        id={inputId}
        required={required}
        aria-describedby={helper ? helperId : undefined}
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
