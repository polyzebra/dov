"use client";

import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
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
  subtitle = "Tell us about your project and get a free quote. We deliver reliable, high-quality drone services across Ireland.",
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

    if (!payload.name || !payload.email || !payload.service || !payload.message) {
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
  <section id={id} className="animate-fade-in bg-slate-50/70 pt-20 pb-12 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            onSubmit={handleSubmit}
            className="card border border-slate-200/70 bg-white p-6 shadow-[0_35px_70px_-45px_rgba(15,23,42,0.7)] sm:p-8 lg:p-12"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Name
                <input
                  className="input h-12 border border-slate-200 bg-slate-50/70 px-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Jane Murphy"
                  type="text"
                  name="name"
                  required
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  className="input h-12 border border-slate-200 bg-slate-50/70 px-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="your@email.com"
                  type="email"
                  name="email"
                  required
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Phone
                <input
                  className="input h-12 border border-slate-200 bg-slate-50/70 px-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Phone number (optional)"
                  type="tel"
                  name="phone"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Service
                <div className="relative">
                  <select
                    className="input h-12 w-full min-w-56 max-w-full appearance-none border border-slate-200 bg-slate-50/70 px-4 pr-10 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
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
                      className="h-5 w-5"
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
                className="input min-h-35 border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                placeholder="Tell us what you need filmed, where it is, and when."
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
              <p className="card mt-6 border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {error}
              </p>
            ) : null}

            {success ? (
              <p className="card mt-6 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                Thanks, your request has been sent. We&apos;ll get back to you shortly.
              </p>
            ) : null}
          </form>

          <div className="card flex flex-col justify-between border border-sky-200/70 bg-linear-to-br from-sky-50 via-white to-indigo-50 p-6 shadow-[0_35px_70px_-45px_rgba(14,116,144,0.75)] sm:p-8 lg:p-9">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
                DRONEXA DRONE
              </p>
              <h3 className="text-2xl font-semibold text-slate-900">
                Professional drone services for businesses across Ireland
              </h3>
              <p className="text-sm leading-6 text-slate-600">
                From property marketing to infrastructure inspections, our certified pilots
                deliver stable, high-resolution results focused on precision and reliability.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {["Fully licensed & insured", "Nationwide coverage", "Fast turnaround times"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-x-4">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 ring-1 ring-sky-200">
                        <CheckCircleIcon className="h-7 w-7" strokeWidth={1.5} />
                      </span>
                      <span className="flex-1 leading-normal">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="card mt-10 border border-white/70 bg-white/85 p-4 text-xs text-slate-500 shadow-[0_18px_30px_-24px_rgba(15,23,42,0.4)] sm:p-5">
              <p className="font-semibold text-slate-900">Availability</p>
              <p className="mt-1">Nationwide coverage across Ireland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}