import type { ComponentType, SVGProps } from "react";
import SectionTitle from "@/components/ui/SectionTitle";

type HeroIcon = ComponentType<SVGProps<SVGSVGElement>>;

type FeatureItem = {
  title: string;
  description: string;
  icon: HeroIcon;
  tag?: string;
  linkLabel?: string;
};

type FeatureGridProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: FeatureItem[];
  columns?: 2 | 3;
};

export default function FeatureGrid({
  eyebrow,
  title,
  subtitle,
  items,
  columns = 3,
}: FeatureGridProps) {
  const gridColumns = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <section className="bg-slate-50/60 py-16 animate-fade-in sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />
  <div className={`mt-10 grid gap-6 sm:mt-14 sm:gap-8 ${gridColumns}`}>
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_34px_80px_-35px_rgba(14,116,144,0.65)] sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 ring-1 ring-sky-200 transition-colors">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                {item.tag ? (
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
                    {item.tag}
                  </p>
                ) : null}
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                {item.linkLabel ? (
                  <div className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
                    {item.linkLabel}
                  </div>
                ) : null}
                <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-200/40 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
