import { Globe2, Timer, Zap } from "lucide-react";

const indicators = [
  {
    label: "300+ Projects",
    description: "Trusted by property and business clients.",
    icon: Zap,
  },
  {
    label: "24–48h Turnaround",
    description: "Fast delivery without compromising quality.",
    icon: Timer,
  },
  {
    label: "Nationwide Coverage",
    description: "Ireland-wide service from Dublin to Galway.",
    icon: Globe2,
  },
];

export default function Trust() {
  return (
  <section className="border-y border-slate-100 bg-white animate-fade-in">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="grid gap-5 md:grid-cols-3">
          {indicators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-5 text-sm text-slate-600 shadow-[0_18px_36px_-32px_rgba(15,23,42,0.5)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-base font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
