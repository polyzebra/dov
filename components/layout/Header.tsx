import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
  <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/85 backdrop-blur">
      <div className="hidden bg-linear-to-r from-sky-600 via-sky-500 to-indigo-500 text-white sm:block">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2 text-xs font-medium">
          <span>Modern aerial visuals for Ireland&apos;s leading businesses.</span>
          <span className="text-white/80">Now booking spring projects</span>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-3 leading-none text-slate-900"
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
            <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.45em] text-slate-500">
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
        <div className="flex items-center gap-3">
          <Button href="/contact" size="md" className="px-7">
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
