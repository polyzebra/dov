"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/85 backdrop-blur">
  <div className="hidden bg-sky-500 text-white sm:block">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2 text-xs font-medium sm:px-6">
            <span>Now booking spring drone projects across Ireland</span>
          </div>
        </div>

  <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
          {/* LOGO */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 leading-none text-slate-900"
          >
            <span className="relative flex h-12 w-12 items-center justify-center">
              <Image
                src="/logo.svg"
                alt="DRONEXA Drone"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
                priority
              />
            </span>

            {/* TEXT BLOCK (FIXED ALIGNMENT) */}
            <span className="flex flex-col items-start leading-none">
              <span className="text-xl font-semibold tracking-tight">DRONEXA</span>

              {/* MOBILE */}
              <span className="mt-0.6 flex flex-col text-[0.70rem] font-medium uppercase tracking-[0.30em] text-slate-500 md:hidden">
                <span>Drone</span>
                <span>Services</span>
              </span>

              {/* DESKTOP */}
              <span className="mt-1 hidden text-[0.70rem] font-medium uppercase tracking-[0.25em] text-slate-500 md:block">
                Drone Services
              </span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {navLinks.map((link) => {
              const isContact = link.label === "Contact";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-slate-700 transition-all duration-200 ease-out hover:text-sky-500 hover:translate-x-0.5 active:opacity-80 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-sky-500/80 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 ${
                    pathname === link.href
                      ? "text-sky-500 after:scale-x-100"
                      : ""
                  } ${isContact ? "font-semibold text-sky-600" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Button href="/contact" size="md" className="px-7">
              Get a Quote
            </Button>
          </div>

          {/* MOBILE */}
          <div className="flex shrink-0 items-center gap-3 md:hidden">
            <Button href="/contact" size="md" className="h-11 px-5 text-[15px]">
              Get a Quote
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
            >
              <Bars3Icon className="h-9 w-9" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}