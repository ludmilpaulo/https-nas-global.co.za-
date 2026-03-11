import { headers } from "next/headers";

import type { Locale } from "./messages";

/**
 * Detects locale from the browser Accept-Language header (follows user system/browser language).
 * - If the user's primary preferred language is Portuguese (pt, pt-BR, pt-PT, etc.) → "pt"
 * - Otherwise → "en"
 */
export async function detectLocaleFromHeaders(): Promise<Locale> {
  try {
    const h = await headers();
    const acceptLanguage = h.get("accept-language")?.toLowerCase() ?? "";
    // Use first preferred language (e.g. "pt-BR,pt;q=0.9,en;q=0.8" → "pt")
    const firstRange = acceptLanguage.split(",")[0]?.trim().split(";")[0]?.trim() ?? "";
    const primaryLang = firstRange.split("-")[0] ?? "";
    if (primaryLang === "pt") return "pt";
  } catch {
    // Fallback if headers unavailable (e.g. some edge runtimes)
  }
  return "en";
}

