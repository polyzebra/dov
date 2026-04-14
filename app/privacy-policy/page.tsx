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
          primaryAction={{ label: "Contact DRONEXA", href: "/contact" }}
          secondaryAction={{ label: "Terms", href: "/terms", variant: "secondary" }}
        />
        <section className="bg-white py-20 animate-fade-in">
          <div className="mx-auto w-full max-w-3xl space-y-8 px-6 text-sm leading-7 text-slate-600">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
              <p>
                DRONEXA Drone Services respects your privacy and is committed to protecting your
                personal data.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Information we collect</h2>
              <p>
                We collect contact details (name, email), project information, and location
                details when you submit an inquiry. We may also store flight logs and
                operational data required for legal compliance.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">How we use your information</h2>
              <p>
                We use your information to respond to inquiries, plan and deliver drone
                services, and communicate project updates.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Data retention</h2>
              <p>
                We retain project-related information for up to 24 months unless you request
                deletion earlier. Certain records may be kept longer where required by law.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Data sharing</h2>
              <p>
                We do not sell or share your personal data with third parties, except where
                required for legal or regulatory purposes.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Your rights</h2>
              <p>
                You have the right to request access, correction, or deletion of your personal
                data at any time.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
              <p>
                For privacy-related requests, contact us at: dovdrone@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
