"use client";

import { useState, type ComponentProps } from "react";
import StepButton from "@/components/StepButton";

type StepperProps = Omit<ComponentProps<"div">, "onChange" | "defaultValue"> & {
  // value를 넘기면 바깥에서 값을 관리, 안 넘기면 defaultValue부터 스스로 관리
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  unit?: string;
  // 폼 제출용 이름(숨은 input)
  name?: string;
};

// Figma Stepper (67:93702): 최솟값이면 − 버튼이 disabled
export default function Stepper({
  value,
  defaultValue = 1,
  onChange,
  min = 0,
  max,
  unit = "명",
  name,
  className = "",
  ...props
}: StepperProps) {
  const [innerValue, setInnerValue] = useState(defaultValue);
  const current = value ?? innerValue;

  function change(next: number) {
    setInnerValue(next);
    onChange?.(next);
  }

  return (
    <div className={`flex items-center gap-stack-sm ${className}`.trim()} {...props}>
      <StepButton
        icon="minus"
        aria-label="줄이기"
        disabled={current <= min}
        onClick={() => change(current - 1)}
      />
      <span aria-live="polite" className="whitespace-nowrap text-heading-md text-text-strong">
        {current}
        {unit}
      </span>
      <StepButton
        icon="plus"
        aria-label="늘리기"
        disabled={max !== undefined && current >= max}
        onClick={() => change(current + 1)}
      />
      {name && <input type="hidden" name={name} value={current} />}
    </div>
  );
}
