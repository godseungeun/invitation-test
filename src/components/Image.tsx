import NextImage from "next/image";

type ImageType = "character" | "flag";

type ImageProps = {
  type?: ImageType;
  alt?: string;
  className?: string;
};

// Figma Image (67:93803). 파일은 public/images/ 에 있다
const images: Record<ImageType, { src: string; size: number; className: string }> = {
  // 원본 928×804 → 201×201 칸에 꽉 채움(object-cover)
  character: { src: "/images/penguin-character.png", size: 201, className: "size-201" },
  // 원본 192×192 → 48×48
  flag: { src: "/images/flag.png", size: 48, className: "size-48" },
};

export default function Image({ type = "character", alt = "", className = "" }: ImageProps) {
  const image = images[type];

  return (
    <NextImage
      src={image.src}
      alt={alt}
      width={image.size}
      height={image.size}
      className={`shrink-0 object-cover ${image.className} ${className}`.trim()}
    />
  );
}
