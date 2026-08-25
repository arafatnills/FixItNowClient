"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  TooltipContentProps,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DashboardData {
  totalPay: number;
  totalCompletedBooking: number;
  totalCancelBooking: number;
  totalBooking: number;
}

const CustomTooltip = ({
  active,
  payload,
}: TooltipContentProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 p-3 rounded-lg shadow-xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: payload[0].payload.color }}
          />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {payload[0].name}
          </span>
        </div>
        <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white ml-5">
          ৳{Number(payload[0].value ?? 0).toLocaleString("en-US")}
        </p>
      </div>
    );
  }
  return null;
};

export default function PaymentStatusChart({ data }: { data: DashboardData }) {
  const chartData = [
    {
      name: "Paid",
      value: Number(data.totalPay),
      color: "#10B981", // Green — Success/Paid
    },
    {
      name: "Completed Bookings",
      value: Number(data.totalCompletedBooking),
      color: "#3B82F6", // Blue — Completed
    },
    {
      name: "Canceled Bookings",
      value: Number(data.totalCancelBooking),
      color: "#EF4444", // Red — Canceled
    },
    {
      name: "Total Bookings",
      value: Number(data.totalBooking),
      color: "#8B5CF6", // Purple — Total/Overall
    },
  ];

  return (
    <Card className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-slate-900 dark:text-white">
          Payment Distribution
        </CardTitle>
        <CardDescription className="text-slate-500 dark:text-slate-400">
          Overview of your transaction statuses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-70 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={95}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>

              <Tooltip
                content={
                  <CustomTooltip
                    active={false}
                    payload={[]}
                    coordinate={undefined}
                    accessibilityLayer={false}
                    activeIndex={undefined}
                  />
                }
              />

              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                formatter={(value) => (
                  <span className="text-slate-700 dark:text-slate-300 font-medium ml-1">
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
