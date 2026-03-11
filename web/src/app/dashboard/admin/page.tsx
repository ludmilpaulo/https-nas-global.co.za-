import Link from "next/link";
import { redirect } from "next/navigation";

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
      cache: "no-store",
      credentials: "include",
    } as RequestInit);
    if (!res.ok) return null;
    return (await res.json()) as MeResponse;
  } catch {
    return null;
  }
}

export default async function AdminDashboardPage() {
  const me = await getCurrentUser();

  if (!me) {
    redirect("/contact");
  }

  if (me.profile.role !== "admin") {
    redirect("/dashboard/client");
  }

  return (
    <Container className="py-6">
      <div className="rounded-3xl bg-white/6 p-6 ring-1 ring-white/12 sm:p-8">
        <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          Admin dashboard
        </h1>
        <p className="mt-2 text-sm leading-6 text-foreground/75">
          Signed in as <span className="font-semibold">{me.username}</span>. Use
          this area to manage client requests and internal configuration.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/12">
            <div className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
              Clients
            </div>
            <p className="mt-2 text-sm text-foreground/70">
              In a future step, this card can link to a client list and role
              management interface.
            </p>
          </div>
          <div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/12">
            <div className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
              Requests
            </div>
            <p className="mt-2 text-sm text-foreground/70">
              Later you can surface recent contact/quotation requests from the
              Django database here.
            </p>
          </div>
          <div className="rounded-2xl bg-black/20 p-4 ring-1 ring-white/12">
            <div className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
              Admin
            </div>
            <p className="mt-2 text-sm text-foreground/70">
              For full control, use the{" "}
              <Link
                href="http://localhost:8000/admin/"
                className="font-semibold underline-offset-4 hover:underline"
              >
                Django admin
              </Link>{" "}
              to manage users, roles, and contact requests.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

