import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import PageHero from "@/components/sections/PageHero";

const faqs = [
  {
    question: "How quickly can you schedule a flight?",
    answer:
  "Most drone services in Ireland can be scheduled within 5-7 days. Rush scheduling is available for urgent aerial photography, inspections, and video production projects.",
  },
  {
  question: "Are DRONEXA Drone pilots licensed and insured?",
    answer:
  "Yes, all DRONEXA drone pilots are fully licensed and insured in Ireland. We operate in compliance with aviation regulations to ensure safe and professional drone services.",
  },
  {
  question: "What is included in the final delivery?",
    answer:
  "Our drone services include 4K aerial video, professional photography, editing, and color grading. Final deliverables are optimized for marketing, social media, and commercial use.",
  },
  {
    question: "Can you handle multi-location shoots?",
    answer:
  "Yes, we provide nationwide drone services across Ireland, including Dublin, Cork, and Galway. We efficiently plan and execute multi-location shoots for larger projects.",
  },
  {
    question: "Do you work with marketing agencies?",
    answer:
  "Yes, we work with marketing agencies and production teams across Ireland, delivering professional drone photography and video content tailored to campaigns.",
  },
];

export default function FAQPage() {
  return (
  <div className="flex min-h-screen flex-col text-slate-900">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="FAQ"
          title="Drone Services FAQ - Everything You Need to Know"
          subtitle="Find answers about drone services in Ireland, including pricing, scheduling, deliverables, and legal requirements."
          primaryAction={{ label: "Request a Quote", href: "/contact" }}
          secondaryAction={{ label: "See Services", href: "/services", variant: "secondary" }}
        />
        <FAQSection
          eyebrow="Questions"
          title="Frequently Asked Questions"
          subtitle="If you need specific details about drone services, pricing, or regulations in Ireland, we’re happy to help."
          items={faqs}
        />
        <CTASection
          eyebrow="Still have questions?"
          title="Still have questions?"
          subtitle="Get a fast quote for drone services in Ireland. Tell us about your project - we’ll reply within 24 hours with pricing, timeline, and recommendations."
          primaryAction={{ label: "Contact the Team", href: "/contact" }}
          secondaryAction={{ label: "View Portfolio", href: "/portfolio", variant: "secondary" }}
        />
      </main>
      <Footer />
    </div>
  );
}
