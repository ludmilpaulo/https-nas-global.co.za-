"use client";

import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { useT } from "@/i18n/provider";

export default function AboutPage() {
  const t = useT();
  return (
    <Container className="py-14 sm:py-20">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-xs font-semibold text-foreground/80 ring-1 ring-white/12">
          {t("about.badge")}
        </div>
        <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("about.title")}
        </h1>
        <p className="mt-4 text-pretty text-base leading-7 text-foreground/72">
          {t("about.lead")}
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        {[
          {
            title: t("about.card.1.title"),
            body: t("about.card.1.body"),
          },
          {
            title: t("about.card.2.title"),
            body: t("about.card.2.body"),
          },
          {
            title: t("about.card.3.title"),
            body: t("about.card.3.body"),
          },
        ].map((c) => (
          <div
            key={c.title}
            className="md:col-span-4 rounded-2xl bg-white/6 p-6 ring-1 ring-white/12"
          >
            <div className="text-sm font-semibold">{c.title}</div>
            <p className="mt-2 text-sm leading-6 text-foreground/70">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-white/6 p-8 ring-1 ring-white/12 sm:p-10">
        <div className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
          {t("about.focus")}
        </div>
        <div className="mt-4 grid gap-3 text-sm text-foreground/75 sm:grid-cols-2">
          <div>{t("about.focus.1")}</div>
          <div>{t("about.focus.2")}</div>
          <div>{t("about.focus.3")}</div>
          <div>{t("about.focus.4")}</div>
        </div>
        <div className="mt-7">
          <ButtonLink href="/contact" variant="primary">
            {t("home.cta.quote")} <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}

