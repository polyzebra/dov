import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
  <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-sky-500">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
