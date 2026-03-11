"use client";

import { Container } from "@/components/container";
import { useT } from "@/i18n/provider";

export default function PrivacyPage() {
  const t = useT();

  return (
    <Container className="pb-16 pt-10 sm:pt-14">
      <div className="max-w-3xl space-y-8 text-sm leading-6 text-foreground/80">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
            {t("privacy.badge")}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            {t("privacy.title")}
          </h1>
          <p className="text-xs text-foreground/60">{t("privacy.updated")}</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">
            {t("privacy.section.1.title")}
          </h2>
          <p>{t("privacy.section.1.body")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">
            {t("privacy.section.2.title")}
          </h2>
          <p>{t("privacy.section.2.body")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">
            {t("privacy.section.3.title")}
          </h2>
          <p>{t("privacy.section.3.body")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">
            {t("privacy.section.4.title")}
          </h2>
          <p>{t("privacy.section.4.body")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">
            {t("privacy.section.5.title")}
          </h2>
          <p>{t("privacy.section.5.body")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">
            {t("privacy.section.6.title")}
          </h2>
          <p>{t("privacy.section.6.body")}</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">
            {t("privacy.section.7.title")}
          </h2>
          <p>{t("privacy.section.7.body")}</p>
        </section>
      </div>
    </Container>
  );
}

