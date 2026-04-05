import type { ReactNode } from "react";
import Button, { type ButtonProps } from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";

type HeroAction = {
  label: string;
  href: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
};

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  align = "left",
  primaryAction,
  secondaryAction,
}: PageHeroProps) {
  const actions = [primaryAction, secondaryAction].filter(Boolean) as HeroAction[];

  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-16 sm:pt-20 animate-fade-in">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-120 bg-linear-to-b from-sky-100 via-white to-white" />
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute right-0 top-8 h-96 w-96 rounded-full bg-indigo-200/60 blur-3xl" />
      </div>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className={align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"}>
          <SectionTitle
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align={align}
          />
          {actions.length ? (
            <div
              className={`mt-8 flex flex-wrap gap-4 ${
                align === "center" ? "justify-center" : "justify-start"
              }`}
            >
              {actions.map((action) => (
                <Button
                  key={action.label}
                  href={action.href}
                  variant={action.variant ?? "primary"}
                  size={action.size ?? "lg"}
                  className="px-9"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
