import Image from "next/image";

export function Logo({
  alt = "Canto Violation Solutions",
  className = "",
}: {
  alt?: string;
  className?: string;
}) {
  return (
    <Image
      src="/media/canto-logo.png"
      alt={alt}
      width={1625}
      height={501}
      sizes="192px"
      className={`h-auto ${className}`}
    />
  );
}
