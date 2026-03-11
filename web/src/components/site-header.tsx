"use client";

import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n/provider";

export function SiteHeader() {
  const t = useT();
  const nav = [
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--brand-2))]" />
          </span>
          <span className="text-sm font-semibold tracking-wide">
            NAS <span className="text-foreground/70">Global</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-foreground/75 transition hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href="/contact"
            variant="secondary"
            className="hidden md:inline-flex"
          >
            {t("nav.getQuote")} <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 ring-1 ring-white/15 md:hidden"
            aria-label={t("nav.openMenu")}
            onClick={() => {
              const el = document.getElementById("mobile-nav");
              if (el) el.toggleAttribute("hidden");
            }}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>

      <div id="mobile-nav" hidden className="border-t border-white/10 md:hidden">
        <Container className="py-4">
          <div className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-white/8 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/contact" variant="primary" className="mt-2">
              {t("nav.getQuote")} <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}

