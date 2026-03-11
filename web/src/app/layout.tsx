import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { detectLocaleFromHeaders } from "@/i18n/server";
import { I18nProvider } from "@/i18n/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NAS Global",
    template: "%s · NAS Global",
  },
  description:
    "Engineering procurement and services partner serving Oil & Gas, Petrochemical, Mining, Construction, Power Generation, and Agricultural sectors.",
  metadataBase: new URL("https://nas-global.co.za"),
  keywords: [
    "NAS Global",
    "engineering procurement",
    "industrial procurement South Africa",
    "oil and gas supplies",
    "petrochemical equipment sourcing",
    "mining equipment procurement",
    "construction materials sourcing",
    "power generation equipment",
    "agricultural equipment sourcing",
    "Incoterms logistics partner",
  ],
  alternates: {
    canonical: "https://nas-global.co.za",
  },
  openGraph: {
    title: "NAS Global",
    description:
      "Engineering procurement and services partner serving Oil & Gas, Petrochemical, Mining, Construction, Power Generation, and Agricultural sectors.",
    url: "https://nas-global.co.za",
    siteName: "NAS Global",
    type: "website",
    locale: "en_ZA",
    alternateLocale: ["pt_PT", "pt_BR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAS Global · Engineering procurement and services partner",
    description:
      "Professional sourcing, logistics, and support for Oil & Gas, Petrochemical, Mining, Construction, Power Generation, and Agricultural sectors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = detectLocaleFromHeaders();
  return (
    <html lang={locale} className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-background text-foreground antialiased`}
      >
        <I18nProvider locale={locale}>
          <div className="min-h-dvh">
            <SiteHeader />
            <main className="pt-16">{children}</main>
            <SiteFooter />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
