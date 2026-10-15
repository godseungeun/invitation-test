import type { ComponentProps } from "react";

// Figma Radio (67:93756)
// state=default/selected/disabled → <input>의 checked / disabled 로 표현
export default function Radio({ className = "", ...props }: Omit<ComponentProps<"input">, "type">) {
  return (
    <span className={`flex size-48 shrink-0 items-center justify-center ${className}`.trim()}>
      <input
        type="radio"
        className="size-20 cursor-pointer appearance-none rounded-pill border-2 border-text-tertiary bg-surface-default checked:border-6 checked:border-action-primary disabled:cursor-not-allowed disabled:border-text-disabled focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
        {...props}
      />
    </span>
  );
}
