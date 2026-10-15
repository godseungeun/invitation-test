"use client";

import { useId, useState, type ComponentProps, type FormEvent } from "react";
import Button from "@/components/Button";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import Label from "@/components/Label";
import RadioOption from "@/components/RadioOption";
import Stepper from "@/components/Stepper";
import SuccessIcon from "@/components/SuccessIcon";

export type RSVPResponse = {
  name: string;
  attending: boolean;
  guests: number;
};

type RSVPCardProps = Omit<ComponentProps<"div">, "onSubmit"> & {
  // form: 제출 전 · done: 제출 후 (제출하면 자동으로 done이 된다)
  state?: "form" | "done";
  // done 화면에 보여줄 응답 (state="done"으로 바로 띄울 때)
  response?: RSVPResponse;
  // 제출 시 호출. 저장(Supabase) 로직은 바깥에서 넘긴다
  onSubmit?: (response: RSVPResponse) => void | Promise<void>;
  title?: string;
  description?: string;
  submitLabel?: string;
  doneTitle?: string;
  doneDescription?: string;
};

// Figma RSVPCard (67:93706): 게스트 참석 응답 카드
export default function RSVPCard({
  state = "form",
  response,
  onSubmit,
  title = "참석 여부 알려주기",
  description = "이름과 참석 여부를 남겨주세요.",
  submitLabel = "참석 여부 보내기",
  doneTitle = "참석 여부를 보냈어요",
  doneDescription = "호스트에게 응답이 전달됐어요.",
  className = "",
  ...props
}: RSVPCardProps) {
  const [submitted, setSubmitted] = useState<RSVPResponse | null>(state === "done" ? response ?? null : null);
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guests, setGuests] = useState(0);
  const [sending, setSending] = useState(false);

  const guestsLabelId = useId();

  const canSubmit = name.trim() !== "" && attending !== null && !sending;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit || attending === null) return;
    // 불참이면 동반 인원은 0명으로 보낸다
    const result = { name: name.trim(), attending, guests: attending ? guests : 0 };
    setSending(true);
    try {
      await onSubmit?.(result);
      setSubmitted(result);
    } finally {
      setSending(false);
    }
  }

  const cardClasses = `flex w-full flex-col items-start gap-stack-lg rounded-card bg-surface-default px-page-horizontal py-stack-lg ${className}`.trim();

  if (state === "done" || submitted) {
    return (
      <div className={cardClasses} {...props}>
        <div className="flex w-full flex-col items-center gap-stack-sm py-section-lg text-center">
          <SuccessIcon />
          <p className="text-title-lg text-text-strong">{doneTitle}</p>
          <p className="text-body-md text-text-secondary">{doneDescription}</p>
        </div>
        {submitted && (
          <div className="flex w-full flex-col gap-inline-md rounded-card bg-surface-subtle p-stack-md">
            <InfoRow type="spread" label="이름" value={submitted.name} />
            <InfoRow type="spread" label="참석 여부" value={submitted.attending ? "참석" : "불참"} />
            <InfoRow type="spread" label="동반 인원" value={`${submitted.guests}명`} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={cardClasses} {...props}>
      <div className="flex w-full flex-col items-center gap-inline-compact text-center">
        <h2 className="text-heading-lg text-text-strong">{title}</h2>
        <p className="text-body-md text-text-secondary">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-stack-lg">
        <Input
          label="이름"
          name="name"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <fieldset className="flex w-full flex-col gap-inline-md">
          <legend className="mb-inline-md">
            <Label as="span">참석 여부</Label>
          </legend>
          <div className="flex w-full">
            <RadioOption
              className="flex-1"
              name="attending"
              label="참석"
              checked={attending === true}
              onChange={() => setAttending(true)}
            />
            <RadioOption
              className="flex-1"
              name="attending"
              label="불참"
              checked={attending === false}
              onChange={() => setAttending(false)}
            />
          </div>
        </fieldset>

        <div role="group" aria-labelledby={guestsLabelId} className="flex w-full flex-col items-start gap-inline-md">
          <Label as="span" id={guestsLabelId}>
            동반 인원
          </Label>
          <Stepper name="guests" value={guests} onChange={setGuests} min={0} />
          <p className="text-caption-md text-text-tertiary">본인을 제외하고 함께 오는 인원이에요.</p>
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={!canSubmit}>
          {submitLabel}
        </Button>
      </form>
    </div>
  );
}
