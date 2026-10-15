import type { ComponentProps, ReactNode } from "react";
import IconNone from "@/components/IconNone";

type NavBarProps = Omit<ComponentProps<"header">, "title"> & {
  title?: string;
  // 양옆 아이콘 자리. 없으면 빈 칸(icon/none)
  left?: ReactNode;
  right?: ReactNode;
};

// Figma NavBar (67:93650): 화면 상단 바
export default function NavBar({ title = "Label", left, right, className = "", ...props }: NavBarProps) {
  return (
    <header
      className={`flex h-65 w-full items-center gap-section p-page-horizontal ${className}`.trim()}
      {...props}
    >
      {left ?? <IconNone />}
      <h1 className="min-w-0 flex-1 text-center text-heading-md text-text-primary">{title}</h1>
      {right ?? <IconNone />}
    </header>
  );
}
