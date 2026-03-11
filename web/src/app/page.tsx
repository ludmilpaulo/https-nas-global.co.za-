'use client';

import Script from "next/script";
import { ArrowRight, CheckCircle2, Globe2, Package, ShieldCheck } from "lucide-react";

import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { useT } from "@/i18n/provider";

export default function Home() {
  const t = useT();
  return (
    <>
      <Script id="nas-global-organization" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "NAS Global (Pty)",
          url: "https://nas-global.co.za",
          description:
            "Engineering procurement and services partner serving Oil & Gas, Petrochemical, Mining, Construction, Power Generation, and Agricultural sectors.",
          address: {
            "@type": "PostalAddress",
            addressCountry: "ZA",
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              email: "sales@nas-global.co.za",
              contactType: "sales",
              availableLanguage: ["en", "pt"],
            },
          ],
          sameAs: [],
        })}
      </Script>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-240px] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--brand)_35%,transparent),transparent_55%)] blur-2xl" />
          <div className="absolute right-[-260px] top-[180px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--brand-2)_30%,transparent),transparent_58%)] blur-2xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
        </div>

        <Container className="pb-16 pt-14 sm:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-xs font-semibold text-foreground/80 ring-1 ring-white/12">
              <span className="h-2 w-2 rounded-full bg-[linear-gradient(135deg,var(--brand),var(--brand-2))]" />
              {t("home.kicker")}
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {t("home.title")}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-foreground/72">
              {t("home.lead")}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" variant="primary">
                {t("home.cta.quote")} <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                {t("home.cta.explore")}
              </ButtonLink>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                t("home.benefit.1"),
                t("home.benefit.2"),
                t("home.benefit.3"),
                t("home.benefit.4"),
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-foreground/75">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[color-mix(in_srgb,var(--brand-2)_75%,white)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl bg-white/6 p-6 ring-1 ring-white/12 shadow-[var(--shadow)]">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_10%,rgba(91,140,255,0.35),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(24,210,167,0.28),transparent_55%)]" />
              <div className="grid gap-4">
                {[
                  {
                    icon: <Package className="h-5 w-5" />,
                    title: t("home.card.procurement.title"),
                    desc: t("home.card.procurement.desc"),
                  },
                  {
                    icon: <Globe2 className="h-5 w-5" />,
                    title: t("home.card.logistics.title"),
                    desc: t("home.card.logistics.desc"),
                  },
                  {
                    icon: <ShieldCheck className="h-5 w-5" />,
                    title: t("home.card.assurance.title"),
                    desc: t("home.card.assurance.desc"),
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="flex gap-4 rounded-2xl bg-black/10 p-4 ring-1 ring-white/10"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/8 ring-1 ring-white/10">
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{c.title}</div>
                      <div className="mt-1 text-sm leading-6 text-foreground/70">
                        {c.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-white/6 p-4 ring-1 ring-white/12">
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                  {t("home.card.contact")}
                </div>
                <div className="mt-2 text-sm text-foreground/80">
                  {t("home.card.email")}:{" "}
                  <a className="font-semibold hover:underline" href="mailto:sales@nas-global.co.za">
                    sales@nas-global.co.za
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">{t("home.serve.title")}</h2>
              <p className="mt-2 text-sm leading-6 text-foreground/70">
                {t("home.serve.lead")}
              </p>
            </div>
            <ButtonLink href="/contact" variant="ghost" className="hidden sm:inline-flex">
              {t("home.serve.cta")} <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Oil & Gas",
              "Petrochemical",
              "Mining",
              "Construction",
              "Power Generation",
              "Agricultural",
            ].map((label) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl bg-white/6 p-5 ring-1 ring-white/12 transition hover:bg-white/8"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/5 blur-xl transition group-hover:bg-white/8" />
                <div className="text-sm font-semibold">{label}</div>
                <div className="mt-2 text-sm leading-6 text-foreground/70">
                  {t("home.industry.blurb")}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="rounded-3xl bg-[linear-gradient(135deg,rgba(91,140,255,0.18),rgba(24,210,167,0.14))] p-8 ring-1 ring-white/12 sm:p-10">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {t("home.pricing.title")}
                </h2>
                <p className="mt-3 text-sm leading-6 text-foreground/75">
                  {t("home.pricing.lead")}
                </p>
              </div>
              <div className="md:col-span-4 md:flex md:justify-end">
                <ButtonLink href="/contact" variant="primary">
                  {t("home.pricing.cta")} <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
    </>
  );
}
