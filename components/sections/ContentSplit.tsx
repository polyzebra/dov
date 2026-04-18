import type { ReactNode } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import SectionTitle from "@/components/ui/SectionTitle";

type ContentSplitProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  points?: string[];
  badge?: string;
  highlightTitle?: string;
  highlightSubtitle?: string;
  reverse?: boolean;
};

export default function ContentSplit({
  eyebrow,
  title,
  subtitle,
  points,
  badge,
  highlightTitle,
  highlightSubtitle,
  reverse = false,
}: ContentSplitProps) {
  return (
    <section className="bg-white py-16 animate-fade-in sm:py-20">
      <div
        className={`mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] ${
          reverse ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-linear-to-br from-sky-50 via-white to-indigo-50 p-6 shadow-[0_35px_70px_-45px_rgba(14,116,144,0.7)] sm:p-8">
          <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-sky-200/70 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-indigo-200/70 blur-3xl" />
          <div className="relative z-10 space-y-5">
            {badge ? (
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500">
                {badge}
              </p>
            ) : null}
            <div className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-[0_20px_40px_-30px_rgba(15,23,42,0.35)] sm:p-5">
              <p className="text-lg font-semibold text-slate-900">
                {highlightTitle ?? "Mission-ready flight plan"}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                {highlightSubtitle ??
                  "We combine licensed pilots with modern capture workflows for consistent results."}
              </p>
            </div>
            {points?.length ? (
              <ul className="space-y-3 text-sm text-slate-600">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-x-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 ring-1 ring-sky-200">
                      <CheckCircleIcon className="h-7 w-7" strokeWidth={1.5} />
                    </span>
                    <span className="flex-1 leading-normal">{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
