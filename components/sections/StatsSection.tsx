import SectionTitle from "@/components/ui/SectionTitle";

type StatItem = {
  label: string;
  value: string;
  description: string;
};

type StatsSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  stats: StatItem[];
};

export default function StatsSection({
  eyebrow,
  title,
  subtitle,
  stats,
}: StatsSectionProps) {
  return (
    <section className="border-y border-slate-100 bg-white py-16 animate-fade-in sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />
  <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 shadow-[0_18px_36px_-32px_rgba(15,23,42,0.5)] sm:p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
                {stat.label}
              </p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">{stat.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
