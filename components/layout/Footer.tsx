import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-slate-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative flex h-12 w-12 items-center justify-center">
              <Image
                src="/logo.svg"
                alt="DOV Drone"
                fill
                className="object-contain"
                priority
              />
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-semibold tracking-tight text-slate-900">
                DOV
              </span>
              <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.45em] text-slate-500">
                Drone Services
              </span>
            </div>
          </Link>
          <p className="max-w-sm text-sm leading-6 text-slate-600">
            Premium drone services across Ireland, delivering modern aerial visuals with
            precision and reliability.
          </p>
        </div>
          <div className="flex flex-col gap-8 text-sm text-slate-600 sm:flex-row">
          <div className="space-y-2">
            <p className="font-semibold text-slate-900">Navigation</p>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-slate-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
            <div className="space-y-2">
              <p className="font-semibold text-slate-900">Policies</p>
              <ul className="space-y-1">
                {policyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-slate-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          <div className="space-y-2">
            <p className="font-semibold text-slate-900">Contact</p>
            <ul className="space-y-1">
              <li>dovdrone@gmail.com</li>
              <li>Dublin, Ireland</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/70">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 text-xs text-slate-500">
          <span>© 2026 DOV Drone. All rights reserved.</span>
          <span>Designed for modern aerial brands.</span>
        </div>
      </div>
    </footer>
  );
}
