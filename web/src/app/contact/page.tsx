import type { Metadata } from "next";
import { Mail, Phone, ShieldCheck } from "lucide-react";

import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { useT } from "@/i18n/provider";

export const metadata: Metadata = {
  title: "Contact NAS Global",
  description:
    "Contact NAS Global to request quotations and discuss sourcing, logistics, and support for your engineering and industrial projects.",
  alternates: {
    canonical: "https://nas-global.co.za/contact",
  },
};

export default function ContactPage() {
  const t = useT();
  return (
    <Container className="py-14 sm:py-20">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-xs font-semibold text-foreground/80 ring-1 ring-white/12">
            {t("contact.badge")}
          </div>
          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("contact.title")}
          </h1>
          <p className="mt-4 text-pretty text-base leading-7 text-foreground/72">
            {t("contact.lead")}
          </p>

          <div className="mt-8 grid gap-3 rounded-3xl bg-white/6 p-6 ring-1 ring-white/12">
            <a
              className="inline-flex items-center gap-3 text-sm font-semibold text-foreground/85 hover:text-foreground"
              href="mailto:sales@nas-global.co.za"
            >
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/8 ring-1 ring-white/12">
                <Mail className="h-5 w-5" />
              </span>
              sales@nas-global.co.za
            </a>
            <div className="inline-flex items-center gap-3 text-sm text-foreground/70">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/8 ring-1 ring-white/12">
                <Phone className="h-5 w-5" />
              </span>
              {t("contact.phoneOptional")}
            </div>
            <div className="inline-flex items-center gap-3 text-sm text-foreground/70">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/8 ring-1 ring-white/12">
                <ShieldCheck className="h-5 w-5" />
              </span>
              {t("contact.privacy")}
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="rounded-3xl bg-white/6 p-6 ring-1 ring-white/12 sm:p-8">
            <div className="text-sm font-semibold">{t("contact.form.title")}</div>
            <p className="mt-2 text-sm leading-6 text-foreground/70">
              {t("contact.form.lead.prefix")}{" "}
              <a className="font-semibold hover:underline" href="mailto:sales@nas-global.co.za">
                sales@nas-global.co.za
              </a>
              .
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

