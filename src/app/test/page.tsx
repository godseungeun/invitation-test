import type { ReactNode } from "react";
import AttendanceBadge from "@/components/AttendanceBadge";
import Button from "@/components/Button";
import CopyLinkField from "@/components/CopyLinkField";
import EmptyState from "@/components/EmptyState";
import IconCheck from "@/components/IconCheck";
import IconMinus from "@/components/IconMinus";
import IconNone from "@/components/IconNone";
import IconPlus from "@/components/IconPlus";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import InputField from "@/components/InputField";
import InvitationCover from "@/components/InvitationCover";
import Label from "@/components/Label";
import NavBar from "@/components/NavBar";
import Radio from "@/components/Radio";
import RadioOption from "@/components/RadioOption";
import ResponseRowTrue from "@/components/ResponseRowTrue";
import RSVPCard from "@/components/RSVPCard";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import StepButton from "@/components/StepButton";
import Stepper from "@/components/Stepper";
import SuccessIcon from "@/components/SuccessIcon";
import Textarea from "@/components/Textarea";
import TextareaField from "@/components/TextareaField";
import { formatDate } from "@/lib/format";
import { mockInvitation } from "@/lib/mock";

// 실습용 테스트 화면. 컴포넌트를 종류·상태별로 모두 보여준다.
const sizes = ["sm", "md", "lg"] as const;

// 컴포넌트 하나를 보여주는 묶음
function Demo({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-stack-sm">
      <h2 className="text-heading-md text-text-primary">{title}</h2>
      {children}
    </section>
  );
}

// 상태 이름 표시
function Caption({ children }: { children: ReactNode }) {
  return <p className="text-label-md text-text-secondary">{children}</p>;
}

export default function TestPage() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-col gap-section px-page-horizontal py-section">
      <h1 className="text-heading-lg text-text-primary">컴포넌트 모음</h1>

      <Demo title="가짜 초대장 (src/lib/mock.ts)">
        <InvitationCover
          title={mockInvitation.title}
          date={formatDate(mockInvitation.date)}
          location={mockInvitation.location}
        />
        <p className="whitespace-pre-line text-body-lg text-text-primary">{mockInvitation.body}</p>
        <div className="bg-surface-subtle p-stack-md">
          <RSVPCard />
        </div>
      </Demo>

      <Demo title="Button">
        {sizes.map((size) => (
          <div key={size} className="flex flex-col gap-stack-sm">
            <Caption>size=&quot;{size}&quot;</Caption>
            <Button size={size}>기본 (마우스를 올리면 hover)</Button>
            <Button size={size} disabled>
              disabled
            </Button>
          </div>
        ))}
      </Demo>

      <Demo title="Icons (none · check · plus · minus)">
        <div className="flex items-center gap-stack-md text-text-primary">
          <IconNone className="border border-dashed border-border-default" />
          <IconCheck className="size-24 text-text-tertiary" />
          <IconPlus />
          <IconMinus />
        </div>
      </Demo>

      <Demo title="Label">
        <Label>Label</Label>
        <Label required={false}>required=false</Label>
      </Demo>

      <Demo title="AttendanceBadge">
        <div className="flex gap-stack-md">
          <AttendanceBadge status="yes" />
          <AttendanceBadge status="no" />
        </div>
      </Demo>

      <Demo title="Radio (default · selected · disabled)">
        <div className="flex">
          <Radio name="radio-demo" aria-label="default" />
          <Radio name="radio-demo" aria-label="selected" defaultChecked />
          <Radio aria-label="disabled" disabled />
        </div>
      </Demo>

      <Demo title="RadioOption">
        <div className="flex">
          <RadioOption className="flex-1" name="option-demo" label="참석" defaultChecked />
          <RadioOption className="flex-1" name="option-demo" label="불참" />
        </div>
      </Demo>

      <Demo title="InputField (default · focus는 클릭 · active)">
        <InputField aria-label="빈 칸" placeholder="placeholder" />
        <InputField aria-label="값 있음" defaultValue="값이 채워진 상태" />
      </Demo>

      <Demo title="Input">
        <Input placeholder="placeholder" />
        <Input label="장소" placeholder="장소를 입력해주세요" helper="안내 문구" />
      </Demo>

      <Demo title="TextareaField (default · focus는 클릭 · active)">
        <TextareaField aria-label="빈 칸" placeholder="게스트에게 전할 초대 글을 적어주세요" />
        <TextareaField aria-label="값 있음" defaultValue="게스트에게 전할 초대 글을 적어주세요" />
      </Demo>

      <Demo title="Textarea (rows 4 · 2)">
        <Textarea
          label="본문"
          rows={4}
          placeholder="게스트에게 전할 초대 글을 적어주세요"
          helper="엔터로 줄을 나눌 수 있어요"
        />
        <Textarea label="제목" rows={2} placeholder="게스트에게 전할 초대 글을 적어주세요" />
      </Demo>

      <Demo title="StepButton (default · disabled)">
        <div className="flex gap-stack-md">
          <StepButton icon="minus" aria-label="줄이기" />
          <StepButton icon="minus" aria-label="줄이기" disabled />
          <StepButton icon="plus" aria-label="늘리기" />
        </div>
      </Demo>

      <Demo title="Stepper">
        <Caption>기본 1명</Caption>
        <Stepper />
        <Caption>0명 (− 버튼 disabled)</Caption>
        <Stepper defaultValue={0} />
      </Demo>

      <Demo title="SuccessIcon">
        <SuccessIcon />
      </Demo>

      <Demo title="InfoRow (inline · spread)">
        <InfoRow type="inline" />
        <InfoRow type="spread" />
      </Demo>

      <Demo title="StatCard (highlight false · true)">
        <div className="flex gap-stack-sm">
          <StatCard className="flex-1" label="참석" value="2명" />
          <StatCard className="flex-1" label="불참" value="1명" />
          <StatCard className="flex-1" label="참석 인원 합계" value="5명" highlight />
        </div>
      </Demo>

      <Demo title="ResponseRow/true">
        <ResponseRowTrue name="이엄마" meta="동반 1명" status="yes" />
        <ResponseRowTrue name="삼츈" meta="" status="no" />
      </Demo>

      <Demo title="EmptyState">
        <EmptyState />
      </Demo>

      <Demo title="CopyLinkField">
        <CopyLinkField url="https://example.com/i/k3f9x2a7" />
        <CopyLinkField
          title="응답 현황 링크"
          description="호스트만 보는 응답 현황 링크예요."
          url="https://example.com/i/k3f9x2a7/responses"
        />
      </Demo>

      <Demo title="SectionHeader">
        <SectionHeader />
        <SectionHeader subtitle="Subtitle" title="description 끔" showDescription={false} />
      </Demo>

      <Demo title="NavBar">
        <NavBar title="Label" />
      </Demo>

      <Demo title="Image (character · flag)">
        <div className="flex items-start gap-stack-md">
          <Image type="character" alt="풍선을 든 펭귄 두 마리" />
          <Image type="flag" alt="깃발" />
        </div>
      </Demo>

      <Demo title="InvitationCover">
        <InvitationCover />
      </Demo>

      <Demo title="RSVPCard (form · done)">
        <Caption>state=&quot;form&quot; (입력 후 보내면 done으로 바뀜)</Caption>
        <div className="bg-surface-subtle p-stack-md">
          <RSVPCard />
        </div>
        <Caption>state=&quot;done&quot;</Caption>
        <div className="bg-surface-subtle p-stack-md">
          <RSVPCard state="done" response={{ name: "이엄마", attending: true, guests: 1 }} />
        </div>
      </Demo>
    </main>
  );
}
