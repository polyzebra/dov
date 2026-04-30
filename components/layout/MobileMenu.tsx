"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const mainNavigation = [
  { label: "Services", href: "/services", icon: Squares2X2Icon },
  { label: "Portfolio", href: "/portfolio", icon: BriefcaseIcon },
  { label: "Contact", href: "/contact", icon: EnvelopeIcon },
  { label: "About", href: "/about", icon: InformationCircleIcon },
  { label: "FAQ", href: "/faq", icon: QuestionMarkCircleIcon },
];

export default function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (isOpen) {
      scrollYRef.current = window.scrollY;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
    };
  }, [isOpen]);

  return (
    <>
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 h-[100dvh] min-h-[100dvh] overflow-hidden touch-none bg-slate-900/25 backdrop-blur-sm transition-opacity duration-300 ease-out md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed right-0 top-0 bottom-0 z-50 flex h-[100dvh] min-h-[100dvh] w-[85%] max-w-95 transform flex-col overflow-y-auto overscroll-contain bg-white shadow-2xl shadow-slate-900/20 transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-slate-900" onClick={onClose}>
              <span className="relative flex h-10 w-10 items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="DOV Drone"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </span>
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-700"
            >
              <XMarkIcon className="h-9 w-9" strokeWidth={1.8} />
            </button>
          </div>

          <div className="mt-5 h-px w-full bg-slate-100" />

          <nav className="mt-6 flex flex-col gap-2">
            {mainNavigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex min-h-13 items-center gap-4 rounded-xl px-4 text-[17px] font-medium text-slate-900 transition-colors duration-200 hover:bg-slate-50 ${
                    pathname === item.href
                      ? "bg-slate-50 text-sky-500"
                      : ""
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-sky-200 transition-colors duration-200 ${
                      pathname === item.href
                        ? "bg-sky-100 text-sky-600"
                        : "bg-sky-100 text-sky-600"
                    }`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-6">
            <div className="h-px w-full bg-slate-100" />
            <div className="pt-6">
              <Button
                href="/contact"
                onClick={onClose}
                className="w-full justify-center rounded-2xl"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
