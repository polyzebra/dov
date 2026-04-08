import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import PageHero from "@/components/sections/PageHero";

const faqs = [
  {
    question: "How quickly can you schedule a flight?",
    answer:
      "Most projects are booked within 5-7 days. Rush scheduling is available for time-sensitive launches and inspections.",
  },
  {
    question: "Are DOV Drone pilots licensed and insured?",
    answer:
      "Yes. Our pilots are certified for commercial operations in Ireland and every flight is fully insured.",
  },
  {
    question: "What&apos;s included in the deliverables?",
    answer:
      "You receive edited 4K footage, curated highlights, and still imagery formatted for web, social, and listings.",
  },
  {
    question: "Can you handle multi-location shoots?",
    answer:
      "Absolutely. We plan multi-day routes for property portfolios, tourism campaigns, and inspection programs.",
  },
  {
    question: "Do you work with marketing agencies?",
    answer:
      "Yes. We provide white-labeled capture services and collaborate on creative direction and shot lists.",
  },
];

export default function FAQPage() {
  return (
  <div className="flex min-h-screen flex-col text-slate-900">
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="FAQ"
          title="Answers for planning your drone project"
          subtitle="Everything you need to know about scheduling, deliverables, and compliance."
          primaryAction={{ label: "Request a Quote", href: "/contact" }}
          secondaryAction={{ label: "See Services", href: "/services", variant: "secondary" }}
        />
        <FAQSection
          eyebrow="Questions"
          title="Common questions from our clients"
          subtitle="If you need a specific deliverable or compliance detail, we&apos;re happy to walk you through it."
          items={faqs}
        />
        <CTASection
          eyebrow="Still have questions?"
          title="We&apos;re here to help"
          subtitle="Share your requirements and we&apos;ll send a tailored response within one business day."
          primaryAction={{ label: "Contact the Team", href: "/contact" }}
          secondaryAction={{ label: "View Portfolio", href: "/portfolio", variant: "secondary" }}
        />
      </main>
      <Footer />
    </div>
  );
}
