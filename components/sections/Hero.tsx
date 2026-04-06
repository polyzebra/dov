import Button from "@/components/ui/Button";

export default function Hero() {
  return (
  <section className="relative overflow-hidden bg-white pb-24 pt-16 sm:pb-24 sm:pt-24 lg:pt-28 animate-fade-in">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-130 bg-linear-to-b from-sky-100 via-white to-white" />
        <div className="absolute -left-44 top-4 h-80 w-80 rounded-full bg-sky-200/70 blur-3xl" />
  <div className="absolute right-0 top-16 h-105 w-105 rounded-full bg-indigo-200/70 blur-3xl" />
      </div>
  <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:gap-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-10">
          <div className="space-y-6 sm:space-y-5">
            <h1 className="text-[2.5rem] leading-snug font-semibold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight lg:text-6xl xl:text-7xl">
              Professional Drone Services in Ireland
            </h1>
            <p className="max-w-xl text-[1.05rem] leading-7 text-slate-600 sm:text-lg">
              DOV Drone provides professional drone services across Ireland, delivering high-quality aerial photography, video production, inspections and mapping solutions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" size="lg" className="h-12 px-10">
              Request a Quote
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="lg"
              className="h-12 px-10 border-slate-300 sm:border-slate-200"
            >
              View Services
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-12 left-6 h-24 w-24 rounded-3xl bg-linear-to-br from-sky-400/70 to-indigo-400/70 blur-xl animate-float-slow" />
          <div className="absolute -bottom-6 right-8 h-16 w-16 rounded-full bg-linear-to-br from-indigo-300/70 to-sky-300/70 blur-lg animate-float" />
          <div className="absolute -inset-6 -z-10 rounded-[48px] bg-[radial-gradient(circle_at_top,rgba(186,230,253,0.9),rgba(255,255,255,0)_65%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-4xl border border-white/60 bg-white/70 p-6 shadow-[0_45px_90px_-55px_rgba(15,23,42,0.85)] backdrop-blur sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">Live Flight Preview</p>
                <p className="text-xs text-slate-500">Certified pilots • 4K capture</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Altitude</span>
                  <span className="font-semibold text-slate-900">120m</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-100">
                  <div className="h-2 w-3/4 rounded-full bg-linear-to-r from-sky-400 to-indigo-500" />
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Stability</span>
                  <span className="font-semibold text-slate-900">98%</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-2 flex-1 rounded-full bg-slate-100">
                    <div className="h-2 w-5/6 rounded-full bg-linear-to-r from-indigo-400 to-sky-400" />
                  </div>
                  <span className="text-xs text-slate-500">Calm</span>
                </div>
              </div>
              <div className="rounded-2xl bg-linear-to-r from-sky-500 to-indigo-500 p-px">
                <div className="rounded-2xl bg-white/90 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    Delivery
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Next-day highlights</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Polished edits ready for launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
