'use client';

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { Container } from "@/components/container";
import { useT } from "@/i18n/provider";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="mt-20 border-t border-white/10">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-sm font-semibold tracking-wide">
              NAS <span className="text-foreground/70">Global</span>
            </div>
            <p className="mt-3 max-w-md text-sm leading-6 text-foreground/70">
              {t("footer.blurb")}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                {t("footer.company")}
              </div>
              <div className="mt-3 grid gap-2">
                <Link className="text-sm text-foreground/75 hover:text-foreground" href="/about">
                  {t("nav.about")}
                </Link>
                <Link className="text-sm text-foreground/75 hover:text-foreground" href="/services">
                  {t("nav.services")}
                </Link>
                <Link className="text-sm text-foreground/75 hover:text-foreground" href="/contact">
                  {t("nav.contact")}
                </Link>
                <Link className="text-sm text-foreground/75 hover:text-foreground" href="/faq">
                  {t("faq.title")}
                </Link>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                {t("footer.industries")}
              </div>
              <div className="mt-3 grid gap-2 text-sm text-foreground/75">
                <span>Oil &amp; Gas</span>
                <span>Petrochemical</span>
                <span>Mining</span>
                <span>Construction</span>
                <span>Power Generation</span>
                <span>Agricultural</span>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                {t("footer.contact")}
              </div>
              <div className="mt-3 grid gap-3 text-sm text-foreground/75">
                <a className="inline-flex items-center gap-2 hover:text-foreground" href="mailto:sales@nas-global.co.za">
                  <Mail className="h-4 w-4" />
                  sales@nas-global.co.za
                </a>
                <div className="inline-flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{t("footer.southAfrica")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} NAS Global. {t("footer.rights")}
          </div>
          <div className="text-foreground/55">
            {t("footer.builtWith")}
          </div>
        </div>
      </Container>
    </footer>
  );
}

