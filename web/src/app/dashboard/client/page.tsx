import Link from "next/link";
import { redirect } from "next/navigation";

import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";

type MeResponse = {
  id: number;
  username: string;
  email: string;
  is_staff: boolean;
  is_superuser: boolean;
  profile: {
    role: "client" | "admin";
  };
};

async function getCurrentUser(): Promise<MeResponse | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_ORIGIN ?? ""}/api/me/`, {
      // Use relative URL via Next.js rewrite when running in browser
      // but for server components, fall back to absolute origin env var.
      // If APP_ORIGIN is not set, this will likely fail – which we treat as "not logged in".
      cache: "no-store",
      credentials: "include",
    } as RequestInit);
    if (!res.ok) return null;
    return (await res.json()) as MeResponse;
  } catch {
    return null;
  }
}

export default async function ClientDashboardPage() {
  const me = await getCurrentUser();

  if (!me) {
    redirect("/contact");
  }

  if (me.profile.role !== "client") {
    redirect("/dashboard/admin");
  }

  return (
    <Container className="py-6">
      <div className="rounded-3xl bg-white/6 p-6 ring-1 ring-white/12 sm:p-8">
        <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          Welcome, {me.username}.
        </h1>
        <p className="mt-2 text-sm leading-6 text-foreground/75">
          This is your client dashboard. Here you could see recent quotation
          requests, order statuses, and key contacts at NAS Global.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/12">
            <div className="text-sm font-semibold">Recent requests</div>
            <p className="mt-2 text-sm text-foreground/70">
              In a future iteration, this block can show your latest quotation
              and order requests.
            </p>
          </div>
          <div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/12">
            <div className="text-sm font-semibold">Need support?</div>
            <p className="mt-2 text-sm text-foreground/70">
              Reach out to{" "}
              <a
                href="mailto:sales@nas-global.co.za"
                className="font-semibold hover:underline"
              >
                sales@nas-global.co.za
              </a>{" "}
              or use the contact page to send a new request.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="primary">
            New quotation request
          </ButtonLink>
          <Link
            href="/services"
            className="text-sm font-semibold text-foreground/80 underline-offset-4 hover:underline"
          >
            View services
          </Link>
        </div>
      </div>
    </Container>
  );
}

