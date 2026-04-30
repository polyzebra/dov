import type { Metadata } from "next";
import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  ChartBarIcon,
  HomeModernIcon,
  MapPinIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CTASection from "@/components/sections/CTASection";
import ContentSplit from "@/components/sections/ContentSplit";
import FeatureGrid from "@/components/sections/FeatureGrid";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.dronexa.ie/services",
  },
};

const services = [
  {
    title: "Real Estate",
    description: "High-end aerial visuals tailored for property marketing and sales launches.",
    icon: BuildingOffice2Icon,
    tag: "Popular",
    linkLabel: "Explore packages",
  },
  {
    title: "Inspections",
    description: "Roof, infrastructure, and asset inspections with precise documentation.",
    icon: HomeModernIcon,
    tag: "Precision",
    linkLabel: "View capabilities",
  },
  {
    title: "Aerial Video",
    description: "Cinematic captures for brands, hospitality, and tourism campaigns.",
    icon: VideoCameraIcon,
    tag: "Cinematic",
    linkLabel: "See examples",
  },
  {
    title: "Construction Progress",
    description: "Consistent site updates with repeatable flight paths and reporting.",
    icon: ChartBarIcon,
    tag: "Progress",
    linkLabel: "Plan coverage",
  },
  {
    title: "Events & Activations",
    description: "Dynamic aerial coverage for launches, festivals, and live moments.",
    icon: CalendarDaysIcon,
    tag: "Live",
    linkLabel: "Book coverage",
  },
  {
    title: "Tourism Marketing",
    description: "Showcase destinations and venues with expansive aerial storytelling.",
    icon: MapPinIcon,
    tag: "Ireland",
    linkLabel: "Get a concept",
  },
];

const serviceSplits = [
  {
    eyebrow: "Real Estate",
    title: "Real Estate Drone Photography & Video in Ireland",
    subtitle:
      "Real Estate Drone Photography for Faster Property Sales. Cinematic aerial photography and video that elevate property listings, highlight key features, and capture buyer attention across Ireland.",
    points: [
      "Interior-to-exterior transitions and neighbourhood context",
      "Edited highlight reels ready for social and portals",
      "Licensed pilots coordinating with estate agents.",
    ],
    badge: "Signature Service",
    highlightTitle: "48-hour delivery on priority listings",
    highlightSubtitle: "Edited content prepared for immediate publication.",
  },
  {
    eyebrow: "Inspections",
    title: "Drone Inspections for Buildings, Roofs & Infrastructure",
    subtitle:
      "Capture high-resolution aerial imagery without downtime, scaffolding, or risk. Built for faster, safer, and more efficient inspections across buildings, roofs, and infrastructure.",
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
    title: "Create cinematic aerial content that elevates your brand and campaigns",
    subtitle:
      "From hospitality to tourism, we produce cinematic aerial content that helps your brand stand out, attract attention, and convert more customers.",
    points: [
      "Cinematic framing & motion planning",
      "Brand-aligned creative direction",
      "Web & social optimized formats",
    ],
    badge: "Creative",
    highlightTitle: "Launch-ready highlight reels",
    highlightSubtitle: "Clean edits, ready for web and social.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col text-slate-900">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Services"
          title="Professional Drone Services in Ireland for Businesses"
          subtitle="From aerial photography to drone inspections, we deliver high-quality, reliable drone services with fast turnaround for businesses across Ireland."
          primaryAction={{ label: "Request a Quote", href: "/contact" }}
          secondaryAction={{
            label: "View Portfolio",
            href: "/portfolio",
            variant: "secondary",
          }}
        />

        <FeatureGrid
          eyebrow="What we deliver"
          title="Drone Solutions for Property, Construction & Infrastructure"
          subtitle="Aerial photography, video production, and drone inspections to help you showcase, monitor, and manage projects across Ireland."
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
          title="Plan your drone project with confidence"
          subtitle="Tell us your location, goals, and timeline - we’ll send you a clear plan, pricing, and delivery timeframe within one business day."
          primaryAction={{ label: "Start a Project", href: "/contact" }}
          secondaryAction={{
            label: "See Past Work",
            href: "/portfolio",
            variant: "secondary",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}