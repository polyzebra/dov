import {
  CameraIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  HomeModernIcon,
  MapIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    title: "Aerial Photography",
    description:
      "High-resolution aerial photography for real estate, commercial and marketing use across Ireland.",
  icon: CameraIcon,
  },
  {
    title: "Drone Video Production",
    description:
      "Cinematic drone video production for brands, campaigns and property showcases.",
  icon: VideoCameraIcon,
  },
  {
    title: "Roof & Building Inspections",
    description:
      "Accurate drone inspections for roofs, buildings and infrastructure with clear visual reporting.",
  icon: HomeModernIcon,
  },
  {
    title: "Construction Monitoring",
    description:
      "Data-driven construction monitoring with regular aerial updates and progress tracking.",
  icon: ChartBarIcon,
  },
  {
    title: "Property & Land Surveys",
    description:
      "Mapping-ready drone surveys for land analysis, planning and development projects.",
  icon: MapIcon,
  },
  {
    title: "Drone Event Coverage",
    description:
      "Professional drone coverage for events, festivals and live experiences across Ireland.",
  icon: CalendarDaysIcon,
  },
];

export default function Services() {
  return (
  <section id="services" className="bg-slate-50/60 py-16 animate-fade-in sm:py-20">
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Services"
          title="Reliable Drone Services Across Ireland"
          subtitle="Trusted across Ireland for aerial photography, drone video production, inspections, and mapping services."
        />
  <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_34px_80px_-35px_rgba(14,116,144,0.65)] sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 ring-1 ring-sky-200 transition-colors">
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
                <div className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
                  Learn more
                </div>
                <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-200/40 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
