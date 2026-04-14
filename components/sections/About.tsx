import { CheckCircleIcon } from "@heroicons/react/24/outline";
import SectionTitle from "@/components/ui/SectionTitle";

const highlights = [
  "Professional footage with cinematic polish",
  "Fast turnaround timelines for launches",
  "Reliable service across Ireland",
  "Modern drone equipment with 4K capture",
];

export default function About() {
  return (
  <section id="about" className="bg-white py-16 animate-fade-in sm:py-20">
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <SectionTitle
          eyebrow="Why DOV Drone"
          title="Professional Drone Services in Ireland Built on Quality and Reliability"
          subtitle="DORONEXA Drone delivers high-quality aerial services across Ireland, focused on reliability, precision, and clean visual results for businesses and property clients."
        />
  <div className="rounded-3xl border border-slate-200/70 bg-slate-50/70 p-6 shadow-[0_30px_60px_-45px_rgba(15,23,42,0.7)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
            Trusted Process
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-4 text-sm text-slate-600">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 ring-1 ring-sky-200">
                  <CheckCircleIcon className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <span className="leading-normal">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
