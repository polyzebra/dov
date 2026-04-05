import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CTASection from "@/components/sections/CTASection";
import ContentSplit from "@/components/sections/ContentSplit";
import PageHero from "@/components/sections/PageHero";
import StatsSection from "@/components/sections/StatsSection";

const stats = [
  {
    label: "Projects",
    value: "300+",
    description: "Commercial shoots completed across Ireland for property, tourism, and infrastructure teams.",
  },
  {
    label: "Turnaround",
    value: "24-48h",
    description: "Fast edits delivered with consistent color and cinematic polish.",
  },
  {
    label: "Coverage",
    value: "Nationwide",
    description: "Dublin, Cork, Galway, and regional sites covered weekly.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="About"
          title="A modern Irish drone studio built for precision"
          subtitle="DOV Drone is a boutique aerial team helping brands, property firms, and operators capture the views that move decisions."
          primaryAction={{ label: "Meet the Team", href: "/contact" }}
          secondaryAction={{ label: "View Services", href: "/services", variant: "secondary" }}
        />
        <ContentSplit
          eyebrow="Who we are"
          title="Certified pilots with a creative mindset"
          subtitle="We blend aviation-grade safety with cinematic storytelling, ensuring every flight is planned, compliant, and built to serve your goals."
          points={[
            "CAA-licensed pilots and insured flights",
            "Dedicated producer for shot planning and timelines",
            "Consistent style guide for brand-forward visuals",
          ]}
          badge="DOV Drone"
          highlightTitle="Built for modern marketing teams"
          highlightSubtitle="We collaborate directly with marketing and project teams for seamless delivery."
        />
        <StatsSection
          eyebrow="Performance"
          title="Trusted by ambitious Irish brands"
          subtitle="We maintain consistent output, clear communication, and rapid delivery across every project."
          stats={stats}
        />
        <CTASection
          eyebrow="Let&apos;s collaborate"
          title="Book a discovery call with DOV Drone"
          subtitle="We&apos;ll outline the right flight plan, creative approach, and delivery timeline for your next project."
          primaryAction={{ label: "Schedule a Call", href: "/contact" }}
          secondaryAction={{ label: "See Portfolio", href: "/portfolio", variant: "secondary" }}
        />
      </main>
      <Footer />
    </div>
  );
}
