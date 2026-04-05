import {
  Buildings,
  Calendar,
  Hammer,
  MapPin,
  Crosshair,
  VideoCamera,
} from "@phosphor-icons/react/ssr";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CTASection from "@/components/sections/CTASection";
import ContentSplit from "@/components/sections/ContentSplit";
import FeatureGrid from "@/components/sections/FeatureGrid";
import PageHero from "@/components/sections/PageHero";

const services = [
  {
    title: "Real Estate",
    description: "High-end aerial visuals tailored for property marketing and sales launches.",
  icon: Buildings,
    tag: "Popular",
    linkLabel: "Explore packages",
  },
  {
    title: "Inspections",
    description: "Roof, infrastructure, and asset inspections with precise documentation.",
  icon: Crosshair,
    tag: "Precision",
    linkLabel: "View capabilities",
  },
  {
    title: "Aerial Video",
    description: "Cinematic captures for brands, hospitality, and tourism campaigns.",
  icon: VideoCamera,
    tag: "Cinematic",
    linkLabel: "See examples",
  },
  {
    title: "Construction Progress",
    description: "Consistent site updates with repeatable flight paths and reporting.",
  icon: Hammer,
    tag: "Progress",
    linkLabel: "Plan coverage",
  },
  {
    title: "Events & Activations",
    description: "Dynamic aerial coverage for launches, festivals, and live moments.",
  icon: Calendar,
    tag: "Live",
    linkLabel: "Book coverage",
  },
  {
    title: "Tourism Marketing",
    description: "Showcase destinations and venues with expansive aerial storytelling.",
  icon: MapPin,
    tag: "Ireland",
    linkLabel: "Get a concept",
  },
];

const serviceSplits = [
  {
    eyebrow: "Real Estate",
    title: "Sell faster with cinematic property launches",
    subtitle:
      "We create elevated property films and photo sets that highlight scale, setting, and access—perfect for luxury listings and commercial portfolios.",
    points: [
      "Interior-to-exterior transitions and neighbourhood context",
      "Edited highlight reels ready for social and portals",
      "Licensed pilots coordinating with estate agents",
    ],
    badge: "Signature service",
    highlightTitle: "48-hour delivery on priority listings",
    highlightSubtitle: "Edited content prepared for immediate publication.",
  },
  {
    eyebrow: "Inspections",
    title: "Inspect assets safely with detailed aerial surveys",
    subtitle:
      "Our inspection workflows reduce downtime by capturing high-resolution footage and imagery without scaffolding or access disruptions.",
    points: [
      "Roof, solar, and facade assessments",
      "Annotated footage for engineering teams",
      "Repeatable flight paths for compliance checks",
    ],
    badge: "Compliance-ready",
    highlightTitle: "Detailed capture, zero disruption",
    highlightSubtitle: "We schedule flights around operational windows.",
  },
  {
    eyebrow: "Aerial Storytelling",
    title: "Create standout brand visuals for campaigns",
    subtitle:
      "From hospitality to tourism boards, we craft aerial narratives that feel premium, modern, and tailored to your audience.",
    points: [
      "Cinematic framing and motion planning",
      "Creative direction aligned to your brand tone",
      "Multiple aspect ratios for social and web",
    ],
    badge: "Creative",
    highlightTitle: "Launch-ready highlight reels",
    highlightSubtitle: "Delivered with music licensing and clean edits.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Services"
          title="Drone services built for modern Irish businesses"
          subtitle="From property marketing to technical inspections, DOV Drone delivers reliable aerial visuals with a premium finish and fast turnaround."
          primaryAction={{ label: "Request a Quote", href: "/contact" }}
          secondaryAction={{
            label: "View Portfolio",
            href: "/portfolio",
            variant: "secondary",
          }}
        />
        <FeatureGrid
          eyebrow="What we deliver"
          title="Specialist drone services with measurable impact"
          subtitle="Choose a focused service, or combine packages for a full aerial content plan."
          items={services}
        />
        {serviceSplits.map((section, index) => (
          <ContentSplit
            key={section.eyebrow}
            eyebrow={section.eyebrow}
            title={section.title}
            subtitle={section.subtitle}
            points={section.points}
            badge={section.badge}
            highlightTitle={section.highlightTitle}
            highlightSubtitle={section.highlightSubtitle}
            reverse={index % 2 === 1}
          />
        ))}
        <CTASection
          eyebrow="Plan your shoot"
          title="Ready for a tailored aerial brief?"
          subtitle="Share your timeline and objectives, and we&apos;ll respond with a clear plan, pricing, and flight schedule."
          primaryAction={{ label: "Start a Project", href: "/contact" }}
          secondaryAction={{ label: "See Past Work", href: "/portfolio", variant: "secondary" }}
        />
      </main>
      <Footer />
    </div>
  );
}
