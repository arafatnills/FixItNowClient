"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export type TechnicianOverViewType = {
  myTotalServices: number;
  myOrders: number;
  myTotalRevenue: number;
};


type CustomTooltipProps = {
  active?: boolean;
  payload?: Array<{
    payload: {
      name: string;
      value: number;
      color: string;
      isCurrency: boolean;
    };
  }>;
};

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const chartItem = payload[0].payload;

    return (
      <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 p-3 rounded-lg shadow-xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: chartItem.color }}
          />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {chartItem.name}
          </span>
        </div>
        <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white ml-5">
         
          {chartItem.isCurrency ? "৳" : ""}
          {Number(chartItem.value ?? 0).toLocaleString("en-US")}
        </p>
      </div>
    );
  }
  return null;
};

export default function TechnicianOverviewChart({ data }: { data: TechnicianOverViewType }) {

  const chartData = [
    {
      name: "Total Earnings",
      value: Number(data.myTotalRevenue),
      color: "#10B981", // Green
      isCurrency: true, 
    },
    {
      name: "Total Bookings",
      value: Number(data.myOrders),
      color: "#3B82F6", // Blue
      isCurrency: false,
    },
    {
      name: "Services Offered",
      value: Number(data.myTotalServices),
      color: "#8B5CF6", // Purple
      isCurrency: false,
    },
  ];

  return (
    <Card className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 shadow-sm h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-slate-900 dark:text-white">
          Activity Overview
        </CardTitle>
        <CardDescription className="text-slate-500 dark:text-slate-400">
          Distribution of your earnings, bookings, and services
        </CardDescription>
      </CardHeader>
      <CardContent>
     
        <div className="h-75 w-full mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={110}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>

              <Tooltip content={<CustomTooltip />} />

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