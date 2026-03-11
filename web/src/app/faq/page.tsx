"use client";

import { Container } from "@/components/container";
import { useT } from "@/i18n/provider";

const FAQ_KEYS = [
  "faq.q1",
  "faq.q2",
  "faq.q3",
  "faq.q4",
  "faq.q5",
] as const;

export default function FaqPage() {
  const t = useT();

  return (
    <Container className="pb-16 pt-10 sm:pt-14">
      <div className="max-w-3xl space-y-8 text-sm leading-6 text-foreground/80">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
            {t("faq.badge")}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            {t("faq.title")}
          </h1>
          <p className="text-xs text-foreground/60">{t("faq.lead")}</p>
        </header>

        <div className="space-y-4">
          {FAQ_KEYS.map((key) => (
            <details
              key={key}
              className="group rounded-2xl bg-white/4 p-4 ring-1 ring-white/10 transition hover:bg-white/6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-foreground">
                <span>{t(`${key}.question`)}</span>
                <span className="text-xs text-foreground/55 group-open:hidden">+</span>
                <span className="text-xs text-foreground/55 hidden group-open:inline">
                  &minus;
                </span>
              </summary>
              <p className="mt-2 text-sm leading-6 text-foreground/80">
                {t(`${key}.answer`)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Container>
  );
}

