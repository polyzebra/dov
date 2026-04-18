import {
  ClockIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
  <section className="relative overflow-hidden bg-white pb-24 pt-16 sm:pb-24 sm:pt-24 lg:pt-28 animate-fade-in">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-130 bg-linear-to-b from-sky-100 via-white to-white" />
      </div>
  <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:gap-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
  <div className="space-y-10 text-left">
          <div className="space-y-6 sm:space-y-5">
            <h1 className="text-[2.5rem] leading-snug font-semibold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight lg:text-6xl xl:text-7xl">
              Drone Services in Ireland
              <span className="block sm:inline"> Inspections, Aerial Video & Photography</span>
            </h1>
            <p className="max-w-xl text-[1.05rem] leading-7 text-slate-600 sm:text-lg">
              Fast, reliable drone services in Ireland for inspections, aerial video, and photography. We handle planning, compliance, and editing so your project runs smoothly.
            </p>
          </div>
          <div className="flex flex-wrap justify-start gap-4">
            <Button href="/contact" size="lg" className="h-12 w-full px-10 sm:w-auto">
              Request a Quote
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="lg"
              className="h-12 w-full px-10 border-slate-300 sm:w-auto sm:border-slate-200"
            >
              View Services
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="card group relative mx-auto w-full max-w-full overflow-hidden border border-black/5 bg-white p-5 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22),0_10px_18px_-12px_rgba(15,23,42,0.1)] transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_26px_55px_-26px_rgba(15,23,42,0.26),0_16px_22px_-14px_rgba(15,23,42,0.13)] sm:mx-0 sm:max-w-95 sm:p-7">
            <div className="relative">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500">
                    Why choose us
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">
                    Fast & Reliable Drone Service
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Trusted by businesses across Ireland
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-4">
                <div className="card group/item flex items-center gap-3 bg-white px-4 py-3 text-sm font-normal text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 ring-1 ring-sky-200 transition-colors duration-200">
                    <ShieldCheckIcon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <span>Fully Licensed & Insured</span>
                </div>
                <div className="card group/item flex items-center gap-3 bg-white px-4 py-3 text-sm font-normal text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 ring-1 ring-sky-200 transition-colors duration-200">
                    <VideoCameraIcon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <span>4K Professional Footage</span>
                </div>
                <div className="card group/item flex items-center gap-3 bg-white px-4 py-3 text-sm font-normal text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 ring-1 ring-sky-200 transition-colors duration-200">
                    <ClockIcon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <span>24-48h Turnaround</span>
                </div>
                <div className="card group/item flex items-center gap-3 bg-white px-4 py-3 text-sm font-normal text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 ring-1 ring-sky-200 transition-colors duration-200">
                    <GlobeAltIcon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <span>Nationwide Coverage</span>
                </div>
              </div>
              <div className="card mt-5 bg-blue-50/40 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500">
                  Fast delivery
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  Next-day delivery available for urgent projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
