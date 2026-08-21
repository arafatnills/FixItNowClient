import { Suspense } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/dashboard/Header";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { getMe } from "@/services/getMe";

async function AsyncHeader() {
  const user = await getMe();
  return <Header user={user} />;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="min-w-0">
        <Suspense fallback={null}>
          <AsyncHeader />
        </Suspense>

        <main className="w-full min-w-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
