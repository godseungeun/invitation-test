import type { ComponentProps } from "react";
import IconMinus from "@/components/IconMinus";
import IconPlus from "@/components/IconPlus";

type StepButtonProps = ComponentProps<"button"> & {
  // Figma 아이콘 스왑(icon/minus, icon/plus)
  icon?: "minus" | "plus";
};

// Figma StepButton (67:93697): state=disabled → disabled 속성
export default function StepButton({
  icon = "minus",
  type = "button",
  className = "",
  ...props
}: StepButtonProps) {
  const Icon = icon === "plus" ? IconPlus : IconMinus;

  return (
    <button
      type={type}
      className={`flex size-44 shrink-0 items-center justify-center rounded-control border border-border-default bg-surface-default text-text-primary disabled:text-text-disabled ${className}`.trim()}
      {...props}
    >
      <Icon className="size-20" />
    </button>
  );
}
