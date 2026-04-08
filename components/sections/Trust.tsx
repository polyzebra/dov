import { ClockIcon, GlobeAltIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const indicators = [
  {
  label: "Fully Licensed & Insured",
  description: "Certified for commercial drone operations.",
  icon: ShieldCheckIcon,
  },
  {
    label: "24–48h Turnaround",
    description: "Fast delivery without compromising quality.",
  icon: ClockIcon,
  },
  {
    label: "Nationwide Coverage",
  description: "Based in Dundalk - covering all Ireland.",
  icon: GlobeAltIcon,
  },
];

export default function Trust() {
  return (
  <section className="border-y border-slate-100 bg-white animate-fade-in">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {indicators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-sm text-slate-600 shadow-[0_18px_36px_-32px_rgba(15,23,42,0.5)] sm:p-5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 ring-1 ring-sky-200">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
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
