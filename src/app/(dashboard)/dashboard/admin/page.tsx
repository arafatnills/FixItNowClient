import { getCustomerDashboardData } from "../_actions/bookingActions";
import CustomerOverview from "../_components/CustomerOverview";
import PaymentStatusChart from "../_components/PaymentStatusChart";

export default async function DashboardPage() {
  const response = await getCustomerDashboardData();
  const statsData = response.data;

  return (
    <div className="p-4 md:p-8 w-full container mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        Dashboard Overview
      </h2>

      {/* ── Stats Section ── */}
      <div className="space-y-5">
        <CustomerOverview data={statsData} />
        <PaymentStatusChart data={statsData} />
      </div>
    </div>
  );
}
