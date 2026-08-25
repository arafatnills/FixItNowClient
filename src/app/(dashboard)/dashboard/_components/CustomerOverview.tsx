import React from "react";
import { CheckCircle2, XCircle, BriefcaseBusiness } from "lucide-react";
import StatCard from "./StatCard";

interface DashboardData {
  totalPay: number;
  totalCompletedBooking: number;
  totalCancelBooking: number;
  totalBooking: number;
}

export default function CustomerOverview({ data }: { data: DashboardData }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {/* 1. Total Paid Card (Emerald/Green) */}
        <StatCard
          title="Total Paid"
          value={data.totalPay}
          isCurrency={true}
          icon={CheckCircle2}
          description="Successfully paid bookings"
          colorWrapperClass="bg-emerald-100 dark:bg-emerald-500/10"
          iconColorClass="text-emerald-600 dark:text-emerald-500"
        />

        {/* 2. Total Pending Card (Amber/Yellow) */}
        <StatCard
          title="Total Completed"
          value={data.totalCompletedBooking}
          isCurrency={false}
          icon={CheckCircle2}
          description="Successfully completed bookings"
          colorWrapperClass="bg-emerald-100 dark:bg-emerald-500/10"
          iconColorClass="text-emerald-600 dark:text-emerald-500"
        />

        {/* 3. Total Failed Card (Red/Rose) */}
        <StatCard
          title="Cancel Bookings"
          value={data.totalCancelBooking}
          isCurrency={false}
          icon={XCircle}
          description="Total Cancel Bookings"
          colorWrapperClass="bg-red-100 dark:bg-red-500/10"
          iconColorClass="text-red-600 dark:text-red-500"
        />

        {/* 4. Total Bookings Card (Teal/Indigo) */}
        <StatCard
          title="Total Bookings"
          value={data.totalBooking}
          isCurrency={false}
          icon={BriefcaseBusiness}
          description="All time bookings"
          colorWrapperClass="bg-teal-100 dark:bg-teal-500/10"
          iconColorClass="text-teal-600 dark:text-teal-500"
        />
      </div>
    </div>
  );
}
