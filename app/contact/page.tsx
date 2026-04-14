import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import PageHero from "@/components/sections/PageHero";

export default function ContactPage() {
  return (
  <div className="flex min-h-screen flex-col text-slate-900">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Contact"
          title="Get a quote for drone services in Ireland"
          subtitle="Tell us about your project, location, and timeline - we’ll reply within 24 hours with pricing, availability, and a clear plan."
          primaryAction={{ label: "Request a Quote", href: "#contact" }}
          secondaryAction={{ label: "View Services", href: "/services", variant: "secondary" }}
        />
        <ContactSection
          title="Tell us about your drone project"
          subtitle="We’ll get back to you within 24 hours with a tailored quote and flight plan."
        />
        <CTASection
          eyebrow="Need a faster response?"
          title="Talk to our drone team"
          subtitle="Talk directly with our team about your project. We’ll confirm availability, location feasibility, and delivery timeline within one business day."
          primaryAction={{ label: "Email the Team", href: "mailto:dovdrone@gmail.com" }}
          secondaryAction={{ label: "View Portfolio", href: "/portfolio", variant: "secondary" }}
        />
      </main>
      <Footer />
    </div>
  );
}
