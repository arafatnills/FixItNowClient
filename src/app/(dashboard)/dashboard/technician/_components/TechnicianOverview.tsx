import { TechnicianOverViewType } from "@/lib/types";
import StatCard from "../../_components/StatCard";
import { CheckCircle2, Briefcase, Wallet } from "lucide-react"; 



const TechnicianOverview = ({ data }: { data: TechnicianOverViewType }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        
        {/* 1. Total Revenue Card */}
        <StatCard
          title="Total Earnings"
          value={data.myTotalRevenue}
          isCurrency={true}
          icon={Wallet}
          description="Lifetime revenue from completed services"
          colorWrapperClass="bg-emerald-100 dark:bg-emerald-500/10"
          iconColorClass="text-emerald-600 dark:text-emerald-500"
        />

        {/* 2. Total Bookings Card */}
        <StatCard
          title="Total Bookings"
          value={data.myOrders}
          isCurrency={false}
          icon={CheckCircle2}
          description="All-time customer service requests"
          colorWrapperClass="bg-blue-100 dark:bg-blue-500/10" 
          iconColorClass="text-blue-600 dark:text-blue-500"
        />

        {/* 3. Total Services Offered Card */}
        <StatCard
          title="Services Offered"
          value={data.myTotalServices}
          isCurrency={false}
          icon={Briefcase}
          description="Active services in your catalog"
          colorWrapperClass="bg-purple-100 dark:bg-purple-500/10" 
          iconColorClass="text-purple-600 dark:text-purple-500"
        />
        
      </div>
    </div>
  );
};

export default TechnicianOverview;