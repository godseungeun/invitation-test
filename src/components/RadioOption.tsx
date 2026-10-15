import type { ComponentProps } from "react";
import Label from "@/components/Label";
import Radio from "@/components/Radio";

type RadioOptionProps = Omit<ComponentProps<"input">, "type"> & {
  label?: string;
};

// Figma RadioOption (67:93796): 라디오 + 라벨 한 줄. 줄 전체를 눌러도 선택된다
export default function RadioOption({ label = "Label", className = "", ...props }: RadioOptionProps) {
  return (
    <label className={`flex cursor-pointer items-center ${className}`.trim()}>
      <Radio {...props} />
      <Label as="span" required={false}>
        {label}
      </Label>
    </label>
  );
}
