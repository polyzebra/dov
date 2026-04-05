import type { ReactNode } from "react";
import Button, { type ButtonProps } from "@/components/ui/Button";

type CTAAction = {
  label: string;
  href: string;
  variant?: ButtonProps["variant"];
};

type CTASectionProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
};

export default function CTASection({
  eyebrow,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}: CTASectionProps) {
  return (
    <section className="bg-white py-16 animate-fade-in sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-4xl border border-sky-100 bg-linear-to-br from-sky-50 via-white to-indigo-50 p-8 shadow-[0_45px_90px_-55px_rgba(14,116,144,0.7)] sm:p-10 lg:p-12">
          <div className="absolute -left-24 -top-20 h-48 w-48 rounded-full bg-sky-200/60 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-indigo-200/60 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              {eyebrow ? (
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-500">
                  {eyebrow}
                </p>
              ) : null}
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                {title}
              </h2>
              {subtitle ? (
                <p className="text-base leading-7 text-slate-600 sm:text-lg">{subtitle}</p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href={primaryAction.href} variant={primaryAction.variant ?? "primary"} size="lg">
                {primaryAction.label}
              </Button>
              {secondaryAction ? (
                <Button href={secondaryAction.href} variant={secondaryAction.variant ?? "secondary"} size="lg">
                  {secondaryAction.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
