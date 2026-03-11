import { headers } from "next/headers";

import type { Locale } from "./messages";

export async function detectLocaleFromHeaders(): Promise<Locale> {
  const h = await headers();
  const al = h.get("accept-language")?.toLowerCase() ?? "";
  // Portuguese variants (pt, pt-pt, pt-br, etc.)
  if (al.includes("pt")) return "pt";
  return "en";
}

