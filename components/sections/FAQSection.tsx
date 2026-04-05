import SectionTitle from "@/components/ui/SectionTitle";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: FAQItem[];
};

export default function FAQSection({
  eyebrow,
  title,
  subtitle,
  items,
}: FAQSectionProps) {
  return (
    <section className="bg-white py-20 animate-fade-in">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="mt-12 grid gap-5">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.4)] transition-all open:border-sky-200/70 open:shadow-[0_28px_60px_-35px_rgba(14,116,144,0.55)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-slate-900">
                <span>{item.question}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-open:border-sky-200 group-open:text-sky-600">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-open:rotate-45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
