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
          primaryAction={{ label: "Contact DRONEXA", href: "/contact" }}
          secondaryAction={{ label: "Privacy Policy", href: "/privacy-policy", variant: "secondary" }}
        />
        <section className="bg-white py-20 animate-fade-in">
          <div className="mx-auto w-full max-w-3xl space-y-8 px-6 text-sm leading-7 text-slate-600">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Engagement</h2>
              <p>
                All projects are confirmed with a written quote, scope, and schedule. Flights
                are subject to weather conditions, aviation regulations, and site access
                permissions.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Payments</h2>
              <p>
                A booking deposit may be required to secure dates. The remaining balance is
                due upon delivery unless otherwise agreed in writing.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Usage rights</h2>
              <p>
                Clients receive usage rights for final approved deliverables. Raw footage
                remains the property of DRONEXA unless otherwise agreed.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Cancellations</h2>
              <p>
                Flights affected by weather will be rescheduled at no additional cost.
                Cancellations within 48 hours may incur a fee.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Liability</h2>
              <p>
                DRONEXA is not liable for delays caused by weather, restricted airspace, or
                factors outside our control.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Compliance</h2>
              <p>
                All operations are conducted in accordance with Irish Aviation Authority (IAA)
                regulations.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
              <p>
                For questions, contact: dovdrone@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
