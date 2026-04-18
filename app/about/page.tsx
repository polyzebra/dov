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
  description: "300+ drone projects completed across Ireland including aerial photography, drone inspections, and commercial video production.",
  },
  {
    label: "Turnaround",
    value: "24-48h",
  description: "Fast turnaround drone services with delivery in 24-48 hours, including editing, color grading, and final production.",
  },
  {
    label: "Coverage",
    value: "Nationwide",
  description: "Serving Dublin, Cork, Galway, and locations across Ireland with professional drone services for commercial and industrial projects.",
  },
];

export default function AboutPage() {
  return (
  <div className="flex min-h-screen flex-col text-slate-900">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="About"
          title="Drone Services Company in Ireland - DRONEXA"
          subtitle="DRONEXA is a professional drone services company in Ireland providing inspections, aerial photography, and video production for businesses and property owners. We work with construction, real estate, and commercial clients across Dublin, Cork, Galway and nationwide. Based in Dundalk, serving clients across Ireland."
          primaryAction={{ label: "Meet the Team", href: "/contact" }}
          secondaryAction={{ label: "View Services", href: "/services", variant: "secondary" }}
        />
        <ContentSplit
          eyebrow="Who we are"
          title="Certified Drone Pilots in Ireland with a Creative Mindset"
          subtitle="We provide certified drone services in Ireland, combining aviation-grade safety with cinematic storytelling. Every flight is carefully planned, fully compliant, and tailored to your project goals."
          points={[
            "IAA-licensed pilots and insured flights",
            "Dedicated producer for shot planning and timelines",
            "Consistent style guide for brand-forward visuals",
          ]}
          badge="DRONEXA DRONE"
          highlightTitle="Built for modern marketing teams"
          highlightSubtitle="We collaborate directly with marketing and project teams for seamless delivery."
        />
        <StatsSection
          eyebrow="Performance"
          title="Trusted Drone Services in Ireland - Aerial Photography & Video Experts"
          subtitle="We deliver professional drone services in Ireland with consistent quality, clear communication, and fast turnaround for every project."
          stats={stats}
        />
        <CTASection
          eyebrow="Let&apos;s collaborate"
          title="Professional Drone Services in Ireland - DRONEXA"
          subtitle="We provide professional drone services in Ireland including inspections, aerial photography, and video production. Get a custom plan and fast turnaround for your project."
          primaryAction={{ label: "Schedule a Call", href: "/contact" }}
          secondaryAction={{ label: "See Portfolio", href: "/portfolio", variant: "secondary" }}
        />
      </main>
      <Footer />
    </div>
  );
}
