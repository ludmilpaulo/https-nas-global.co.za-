"use client";

import { createContext, useContext, useMemo } from "react";

import type { Locale } from "./messages";
import { MESSAGES } from "./messages";

type I18nContextValue = {
  locale: Locale;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const value = useMemo<I18nContextValue>(() => {
    const dict = MESSAGES[locale] ?? MESSAGES.en;
    return {
      locale,
      t: (key) => dict[key] ?? MESSAGES.en[key] ?? key,
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useT must be used within I18nProvider");
  return ctx.t;
}

export function useLocale() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLocale must be used within I18nProvider");
  return ctx.locale;
}

