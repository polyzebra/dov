import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageHero from "@/components/sections/PageHero";

export default function TermsPage() {
  return (
  <div className="flex min-h-screen flex-col text-slate-900">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Terms"
          title="Terms of Service"
          subtitle="Last updated: April 4, 2026"
          align="center"
          primaryAction={{ label: "Contact DOV Drone", href: "/contact" }}
          secondaryAction={{ label: "Privacy Policy", href: "/privacy-policy", variant: "secondary" }}
        />
        <section className="bg-white py-20 animate-fade-in">
          <div className="mx-auto w-full max-w-3xl space-y-8 px-6 text-sm leading-7 text-slate-600">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Engagement</h2>
              <p>
                All projects are confirmed with a written brief, schedule, and quote. Flights
                are subject to weather, aviation rules, and site access approvals.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Payments</h2>
              <p>
                A booking deposit is required to secure flight dates. Remaining balances are
                due upon delivery unless otherwise agreed in writing.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Usage rights</h2>
              <p>
                Clients receive usage rights for approved deliverables. Raw footage remains the
                property of DOV Drone unless contracted separately.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Cancellations</h2>
              <p>
                Weather delays are rescheduled at no extra cost. Cancellations within 48 hours
                may incur a rescheduling fee.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Questions</h2>
              <p>
                For contract or usage questions, contact dovdrone@gmail.com for clarification.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
