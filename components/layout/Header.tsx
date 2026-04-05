"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return undefined;
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
        <div className="hidden bg-linear-to-r from-sky-600 via-sky-500 to-indigo-500 text-white sm:block">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2 text-xs font-medium sm:px-6">
            <span>Modern aerial visuals for Ireland&apos;s leading businesses.</span>
            <span className="text-white/80">Now booking spring projects</span>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 leading-none text-slate-900"
          >
            <span className="relative flex h-12 w-12 items-center justify-center">
              <Image
                src="/logo.svg"
                alt="DOV Drone"
                fill
                className="object-contain"
                priority
              />
            </span>
            <span className="flex flex-col">
              <span className="text-xl font-semibold tracking-tight">DOV</span>
              <span className="mt-px flex flex-col text-[0.65rem] font-medium uppercase tracking-[0.45em] text-slate-500 leading-tight md:hidden">
                <span>Drone</span>
                <span className="mt-0.5">Services</span>
              </span>
              <span className="mt-1 hidden text-[0.65rem] font-medium uppercase tracking-[0.45em] text-slate-500 md:block">
                Drone Services
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-slate-700 transition-colors duration-300 ease-out hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-blue-600/80 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Button href="/contact" size="md" className="px-7">
              Get a Quote
            </Button>
          </div>
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
              <List size={24} weight="bold" />
            </button>
          </div>
        </div>
      </header>

      <div
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-0 z-40 bg-slate-900/25 backdrop-blur-md transition-opacity duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <aside
          className={`fixed right-0 top-0 z-50 h-full w-[85%] max-w-95 transform bg-white/90 backdrop-blur-xl border-l border-slate-200 shadow-2xl shadow-slate-900/20 transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-5">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative flex h-10 w-10 items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="DOV Drone"
                  fill
                  className="object-contain"
                />
              </span>
              <span className="text-lg font-semibold tracking-tight">DOV</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
            >
              <X size={22} weight="bold" />
            </button>
          </div>

          <nav className="mt-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full rounded-xl px-4 py-3 text-[17px] font-medium text-slate-900 transition-all duration-200 hover:bg-slate-100 active:bg-slate-200 ${
                  pathname === link.href ? "text-blue-600" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t border-slate-200 pt-8">
            <Button href="/contact" className="w-full justify-center">
              Get a Quote
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
