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
          title="Let&apos;s plan your next aerial project"
          subtitle="Tell us about the location, deliverables, and timeline. We&apos;ll reply with a clear plan and pricing."
          primaryAction={{ label: "Request a Quote", href: "#contact" }}
          secondaryAction={{ label: "View Services", href: "/services", variant: "secondary" }}
        />
        <ContactSection
          title="Tell us about your project"
          subtitle="We&apos;ll follow up within one business day with a tailored flight plan."
        />
        <CTASection
          eyebrow="Need a faster response?"
          title="Call our planning desk"
          subtitle="Email dovdrone@gmail.com or request a callback. We&apos;ll coordinate flight permits and timelines."
          primaryAction={{ label: "Email the Team", href: "mailto:dovdrone@gmail.com" }}
          secondaryAction={{ label: "View Portfolio", href: "/portfolio", variant: "secondary" }}
        />
      </main>
      <Footer />
    </div>
  );
}
