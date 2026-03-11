import type { Metadata } from "next";
import { ArrowRight, ClipboardList, Headset, Truck } from "lucide-react";

import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { useT } from "@/i18n/provider";

export const metadata: Metadata = {
  title: "Engineering Procurement & Services",
  description:
    "Explore NAS Global services: engineering procurement, logistics and delivery models, and responsive after-sales support for industrial projects.",
  alternates: {
    canonical: "https://nas-global.co.za/services",
  },
};

export default function ServicesPage() {
  const t = useT();
  return (
    <Container className="py-14 sm:py-20">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-xs font-semibold text-foreground/80 ring-1 ring-white/12">
          {t("services.badge")}
        </div>
        <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("services.title")}
        </h1>
        <p className="mt-4 text-pretty text-base leading-7 text-foreground/72">
          {t("services.lead")}
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        {[
          {
            icon: <ClipboardList className="h-5 w-5" />,
            title: t("services.card.1.title"),
            body: t("services.card.1.body"),
          },
          {
            icon: <Truck className="h-5 w-5" />,
            title: t("services.card.2.title"),
            body: t("services.card.2.body"),
          },
          {
            icon: <Headset className="h-5 w-5" />,
            title: t("services.card.3.title"),
            body: t("services.card.3.body"),
          },
        ].map((c) => (
          <div
            key={c.title}
            className="md:col-span-4 rounded-2xl bg-white/6 p-6 ring-1 ring-white/12"
          >
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/8 ring-1 ring-white/12">
              {c.icon}
            </div>
            <div className="mt-4 text-sm font-semibold">{c.title}</div>
            <p className="mt-2 text-sm leading-6 text-foreground/70">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-[linear-gradient(135deg,rgba(91,140,255,0.16),rgba(24,210,167,0.12))] p-8 ring-1 ring-white/12 sm:p-10">
        <div className="grid gap-6 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <h2 className="text-xl font-semibold tracking-tight">
              {t("services.cta.title")}
            </h2>
            <p className="mt-2 text-sm leading-6 text-foreground/75">
              {t("services.cta.lead")}
            </p>
          </div>
          <div className="md:col-span-4 md:flex md:justify-end">
            <ButtonLink href="/contact" variant="primary">
              {t("services.cta.button")} <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </Container>
  );
}

