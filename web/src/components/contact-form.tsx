"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/button";
import { cn } from "@/lib/utils";
import { useT } from "@/i18n/provider";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function ContactForm() {
  const t = useT();
  const [form, setForm] = useState<ContactPayload>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string>("");

  const validation = useMemo(() => {
    if (!form.name.trim()) return t("form.validation.name");
    if (!isEmail(form.email)) return t("form.validation.email");
    if (form.message.trim().length < 10) return t("form.validation.message");
    return "";
  }, [form, t]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validation;
    if (v) {
      setError(v);
      setStatus("error");
      return;
    }

    setError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
      setError(t("form.error"));
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label={t("form.name")}
          value={form.name}
          onChange={(v) => setForm((p) => ({ ...p, name: v }))}
          placeholder={t("form.placeholder.name")}
          autoComplete="name"
          required
        />
        <Field
          label={t("form.email")}
          value={form.email}
          onChange={(v) => setForm((p) => ({ ...p, email: v }))}
          placeholder={t("form.placeholder.email")}
          autoComplete="email"
          required
        />
      </div>
      <Field
        label={t("form.companyOptional")}
        value={form.company ?? ""}
        onChange={(v) => setForm((p) => ({ ...p, company: v }))}
        placeholder={t("form.placeholder.company")}
        autoComplete="organization"
      />

      <div className="grid gap-2">
        <label className="text-sm font-semibold">{t("form.message")}</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          placeholder={t("form.placeholder.message")}
          className="min-h-32 rounded-2xl bg-white/6 px-4 py-3 text-sm text-foreground ring-1 ring-white/12 outline-none placeholder:text-foreground/45 focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand)_60%,white)]"
          required
        />
      </div>

      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div
          className={cn(
            "text-sm",
            status === "error" ? "text-red-200/90" : "text-foreground/65",
          )}
          aria-live="polite"
        >
          {status === "success" ? (
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[color-mix(in_srgb,var(--brand-2)_80%,white)]" />
              {t("form.sent")}
            </span>
          ) : status === "error" ? (
            error || "Please check your details and try again."
          ) : (
            t("form.note")
          )}
        </div>

        <Button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> {t("form.sending")}
            </>
          ) : (
            <>
              {t("form.send")} <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  autoComplete,
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-semibold">
        {label} {required ? <span className="text-foreground/50">*</span> : null}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="h-12 rounded-2xl bg-white/6 px-4 text-sm text-foreground ring-1 ring-white/12 outline-none placeholder:text-foreground/45 focus:ring-2 focus:ring-[color-mix(in_srgb,var(--brand)_60%,white)]"
      />
    </div>
  );
}

