import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
  <footer className="bg-gray-50">
  <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 pb-11 pt-8 text-sm text-slate-600 sm:gap-8 sm:px-6 sm:pt-11 md:grid-cols-2 md:gap-10 md:py-10 lg:grid-cols-4">
    <div className="space-y-1.5 sm:space-y-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="relative flex h-8 w-8 items-center justify-center md:h-9 md:w-9">
              <Image
                src="/logo.svg"
                alt="DRONEXA Drone"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain opacity-85"
                priority
              />
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-slate-900/85">
                DRONEXA
              </span>
              <span className="mt-0.5 text-[0.70rem] font-medium uppercase tracking-[0.25em] text-slate-500">
                Drone Services
              </span>
            </div>
          </Link>
          <p className="max-w-sm text-sm leading-6 text-slate-500/90">
            Professional drone services across Ireland.
            <br />
            Inspections, aerial video & photography.
          </p>
        </div>
        <div className="space-y-1 sm:space-y-2">
          <p className="text-sm font-semibold text-slate-900">Navigation</p>
          <ul className="space-y-1.5 sm:space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative block w-fit py-1.5 text-slate-500 transition-all duration-200 ease-out hover:text-sky-500 hover:translate-x-0.5 active:opacity-80 sm:inline-flex sm:py-0 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-sky-500/80 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-1 sm:space-y-2">
          <p className="text-sm font-semibold text-slate-900">Policies</p>
          <ul className="space-y-1.5 sm:space-y-1">
            {policyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative block w-fit py-1.5 text-slate-500 transition-all duration-200 ease-out hover:text-sky-500 hover:translate-x-0.5 active:opacity-80 sm:inline-flex sm:py-0 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-sky-500/80 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-1 sm:space-y-2">
          <p className="text-sm font-semibold text-slate-900">Contact</p>
          <ul className="space-y-1 text-slate-500">
            <li>Dundalk, Co. Louth, Ireland</li>
            <li>
              <Link
                href="/#contact"
                className="relative block w-fit py-1.5 text-slate-500 transition-all duration-200 ease-out hover:text-sky-500 hover:translate-x-0.5 active:opacity-80 sm:inline-flex sm:py-0 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-sky-500/80 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
  <div>
  <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 pb-3 pt-4 text-xs text-slate-500 sm:px-6 sm:py-4">
          <span>© 2026 DRONEXA Drone. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
