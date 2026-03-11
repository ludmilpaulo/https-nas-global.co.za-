import { headers } from "next/headers";

import type { Locale } from "./messages";

export function detectLocaleFromHeaders(): Locale {
  const al = headers().get("accept-language")?.toLowerCase() ?? "";
  // Portuguese variants (pt, pt-pt, pt-br, etc.)
  if (al.includes("pt")) return "pt";
  return "en";
}

