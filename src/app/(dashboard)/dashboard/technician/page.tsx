import { getTechnicianStats } from "../_actions/bookingActions";
import TechnicianOverview from "./_components/TechnicianOverview";
import TechnicianOverviewChart from "./_components/TechnicianOverviewChart";

export default async function DashboardPage() {
  const response = await getTechnicianStats();
  console.log(response);

  return (
    <div className="p-4 md:p-8 w-full container mx-auto ">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        Dashboard Overview
      </h2>

      {/* ── Stats Section ── */}
      <div className="space-y-5">
        <TechnicianOverview data={response.data} />
        <TechnicianOverviewChart data={response.data} />
      </div>
    </div>
  );
}
