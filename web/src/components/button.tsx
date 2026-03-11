import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color-mix(in_srgb,var(--brand)_70%,white)] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[linear-gradient(135deg,var(--brand),var(--brand-2))] text-black shadow-[0_16px_44px_rgba(24,210,167,0.16)] hover:opacity-95",
  secondary:
    "bg-white/10 text-foreground ring-1 ring-white/15 hover:bg-white/14 hover:ring-white/20",
  ghost: "text-foreground/85 hover:text-foreground hover:bg-white/8",
};

export function Button({
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
}) {
  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  href,
  ...props
}: React.ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link className={cn(base, variants[variant], className)} href={href} {...props} />
  );
}

