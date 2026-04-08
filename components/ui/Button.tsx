import Link from "next/link";
import type { ReactNode } from "react";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const variants = {
  primary:
    "bg-linear-to-r from-sky-500 via-sky-400 to-indigo-500 text-white shadow-[0_24px_50px_-22px_rgba(14,116,144,0.95)] hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_32px_60px_-22px_rgba(14,116,144,0.95)]",
  secondary:
    "border border-slate-200 bg-white/80 text-slate-900 shadow-[0_12px_26px_-22px_rgba(15,23,42,0.55)] hover:border-slate-300 hover:bg-white",
  ghost:
    "bg-transparent text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

type ButtonBaseProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const getClasses = (variant: keyof typeof variants, size: keyof typeof sizes, className?: string) =>
  [baseStyles, variants[variant], sizes[size], className].filter(Boolean).join(" ");

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = getClasses(variant, size, className);

  if ("href" in props && props.href) {
    const { href, rel, target, onClick } = props;
    return (
      <Link href={href} className={classes} rel={rel} target={target} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const { type, ...buttonProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type={type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
