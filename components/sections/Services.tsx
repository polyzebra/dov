import { Buildings, Calendar, Crosshair, MapTrifold, VideoCamera, Wrench } from "@phosphor-icons/react/ssr";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    title: "Aerial Photography",
    description:
      "High-resolution aerial photography for real estate, commercial and marketing use across Ireland.",
    icon: Buildings,
  },
  {
    title: "Drone Video Production",
    description:
      "Cinematic drone video production for brands, campaigns and property showcases.",
    icon: VideoCamera,
  },
  {
    title: "Roof & Building Inspections",
    description:
      "Accurate drone inspections for roofs, buildings and infrastructure with clear visual reporting.",
    icon: Crosshair,
  },
  {
    title: "Construction Monitoring",
    description:
      "Data-driven construction monitoring with regular aerial updates and progress tracking.",
    icon: Wrench,
  },
  {
    title: "Property & Land Surveys",
    description:
      "Mapping-ready drone surveys for land analysis, planning and development projects.",
    icon: MapTrifold,
  },
  {
    title: "Drone Event Coverage",
    description:
      "Professional drone coverage for events, festivals and live experiences across Ireland.",
    icon: Calendar,
  },
];

export default function Services() {
  return (
  <section id="services" className="bg-slate-50/60 py-16 animate-fade-in sm:py-20">
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Services"
          title="Reliable Drone Services Across Ireland"
          subtitle="Trusted drone services Ireland teams rely on for aerial photography Ireland, drone video Ireland, inspections, and mapping."
        />
  <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_34px_80px_-35px_rgba(14,116,144,0.65)] sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-sky-100 to-indigo-100 text-sky-600 transition-colors group-hover:from-sky-200 group-hover:to-indigo-200">
                  <Icon size={24} className="h-6 w-6" />
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
