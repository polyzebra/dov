"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

type ContactSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export default function ContactSection({
  id = "contact",
  eyebrow = "Contact",
  title = "Request a quote today",
  subtitle = "Tell us about your project and we&apos;ll respond quickly with a tailored proposal.",
}: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log("submit started");
    event.preventDefault();
    setError(null);
    setSuccess(false);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      company: String(formData.get("company") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.service || !payload.message) {
      setError("Please complete all required fields before submitting.");
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("posting to /api/contact");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      console.log("response status:", response.status);
      console.log("response body:", result);

      if (!response.ok || !result.success) {
        setError(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setSuccess(true);
    } catch (err) {
      console.error("submit failed:", err);
      setError("Unable to send your request right now. Please try again soon.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="animate-fade-in bg-slate-50/70 py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200/70 bg-white p-12 shadow-[0_35px_70px_-45px_rgba(15,23,42,0.7)]"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Name
                <input
                  className="h-12 rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Jane Murphy"
                  type="text"
                  name="name"
                  required
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  className="h-12 rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="dovdrone@gmail.com"
                  type="email"
                  name="email"
                  required
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Phone
                <input
                  className="h-12 rounded-xl border border-slate-200 bg-slate-50/70 px-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="+353 1 234 5678"
                  type="tel"
                  name="phone"
                  required
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Service
                <div className="relative">
                  <select
                    className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/70 px-4 pr-10 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="real-estate">Real Estate</option>
                    <option value="inspections">Inspections</option>
                    <option value="aerial-video">Aerial Video</option>
                    <option value="construction">Construction Progress</option>
                    <option value="events">Events</option>
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </label>
            </div>

            <label className="mt-6 flex flex-col gap-2 text-sm font-medium text-slate-700">
              Message
              <textarea
                className="min-h-35 rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                placeholder="Tell us about your project goals."
                name="message"
                required
              />
            </label>

            <label className="sr-only" aria-hidden="true">
              Company
              <input
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                name="company"
                type="text"
              />
            </label>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                type="submit"
                size="lg"
                className="px-10 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Request"}
              </Button>

              <p className="text-xs text-slate-500">
                We reply within 1 business day with next steps.
              </p>
            </div>

            {error ? (
              <p className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {error}
              </p>
            ) : null}

            {success ? (
              <p className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                Thanks, your request has been sent. We&apos;ll get back to you shortly.
              </p>
            ) : null}
          </form>

          <div className="flex flex-col justify-between rounded-3xl border border-sky-200/70 bg-linear-to-br from-sky-50 via-white to-indigo-50 p-9 shadow-[0_35px_70px_-45px_rgba(14,116,144,0.75)]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
                DOV Drone
              </p>
              <h3 className="text-2xl font-semibold text-slate-900">
                Premium aerial visuals for ambitious brands.
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                From property marketing to infrastructure inspections, our certified pilots
                deliver steady, high-resolution footage with a clean, modern finish.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-white/70 bg-white/85 p-5 text-xs text-slate-500 shadow-[0_18px_30px_-24px_rgba(15,23,42,0.4)]">
              <p className="font-semibold text-slate-900">Availability</p>
              <p className="mt-1">Dublin · Cork · Galway · Nationwide</p>
              <p className="mt-2">devdrone@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}