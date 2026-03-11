import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Role-based dashboard area for NAS Global clients and internal users.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl flex-col gap-6 px-6 pb-10 pt-10">
      {children}
    </div>
  );
}

