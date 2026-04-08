import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageHero from "@/components/sections/PageHero";

export default function PrivacyPolicyPage() {
  return (
  <div className="flex min-h-screen flex-col text-slate-900">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Privacy"
          title="Privacy Policy"
          subtitle="Last updated: April 4, 2026"
          align="center"
          primaryAction={{ label: "Contact DOV Drone", href: "/contact" }}
          secondaryAction={{ label: "Terms", href: "/terms", variant: "secondary" }}
        />
        <section className="bg-white py-20 animate-fade-in">
          <div className="mx-auto w-full max-w-3xl space-y-8 px-6 text-sm leading-7 text-slate-600">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
              <p>
                DOV Drone collects only the information required to plan and deliver aerial
                services. We never sell client data and we store records securely in line with
                Irish data protection requirements.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Information we collect</h2>
              <p>
                We collect contact details, project briefs, and location information when you
                submit a request. We also keep flight logs and operational records required for
                compliance.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">How we use information</h2>
              <p>
                Information is used to scope projects, schedule flights, provide deliverables,
                and communicate timelines. We may also send occasional service updates relevant
                to your active projects.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Data retention</h2>
              <p>
                Project files are retained for up to 24 months unless you request removal
                earlier. Flight logs are retained for compliance purposes.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
              <p>
                For privacy requests, email dovdrone@gmail.com. We respond within one business
                day.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
