import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CTASection from "@/components/sections/CTASection";
import GalleryGrid from "@/components/sections/GalleryGrid";
import PageHero from "@/components/sections/PageHero";

const projects = [
  {
    title: "Docklands Residential Launch",
    location: "Dublin",
    description: "A premium property film highlighting riverside access and amenity design for a luxury development.",
    tag: "Real Estate",
  },
  {
    title: "Renewable Energy Inspection",
    location: "Cork",
    description: "Thermal-ready aerial capture for a solar farm operator to reduce onsite inspection time.",
    tag: "Inspection",
  },
  {
    title: "Wild Atlantic Way Story",
    location: "Galway",
    description: "Tourism board visuals capturing coastline scale and seasonal highlights for digital campaigns.",
    tag: "Tourism",
  },
  {
    title: "Hospitality Brand Film",
    location: "Kerry",
    description: "Cinematic approach shots and reveal sequences for a boutique resort relaunch.",
    tag: "Brand",
  },
  {
    title: "City Campus Progress",
    location: "Limerick",
    description: "Monthly progress flights delivering consistent framing and construction updates.",
    tag: "Construction",
  },
  {
    title: "Retail Flagship Opening",
    location: "Belfast",
    description: "Launch-day aerial coverage capturing crowds, signage, and venue scale.",
    tag: "Events",
  },
];

export default function PortfolioPage() {
  return (
  <div className="flex min-h-screen flex-col text-slate-900">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Portfolio"
          title="Professional Drone Services Portfolio in Ireland"
          subtitle="Explore our recent drone projects across Ireland, including aerial photography, inspections, and commercial video production."
          primaryAction={{ label: "Plan a Shoot", href: "/contact" }}
          secondaryAction={{ label: "View Services", href: "/services", variant: "secondary" }}
        />
        <GalleryGrid
          eyebrow="Featured work"
          title="Drone services that deliver real results"
          subtitle="Our drone services help businesses in Ireland achieve faster sales, better inspections, and stronger visual marketing."
          items={projects}
        />
        <CTASection
          eyebrow="Next project"
          title="Ready to start your drone project in Ireland?"
          subtitle="We provide full service drone solutions in Ireland, including aerial photography, inspections, and video production."
          primaryAction={{ label: "Get a Quote", href: "/contact" }}
          secondaryAction={{ label: "Explore Services", href: "/services", variant: "secondary" }}
        />
      </main>
      <Footer />
    </div>
  );
}
