import SectionTitle from "@/components/ui/SectionTitle";

type GalleryItem = {
  title: string;
  location: string;
  description: string;
  tag?: string;
  image: string;
};

type GalleryGridProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: GalleryItem[];
};

export default function GalleryGrid({
  eyebrow,
  title,
  subtitle,
  items,
}: GalleryGridProps) {
  return (
    <section className="bg-slate-50/60 py-16 animate-fade-in sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_34px_80px_-38px_rgba(14,116,144,0.6)] sm:p-6"
            >
              <div className="relative h-36 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-sky-500">
                  {item.tag ?? "Featured"}
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                  {item.location}
                </p>
                <p className="text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>

              <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-sky-200/40 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}