import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  isCurrency?: boolean;
  colorWrapperClass: string;
  iconColorClass: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  description,
  isCurrency = false,
  colorWrapperClass,
  iconColorClass,
}: StatCardProps) {
  
 
  const formattedValue = isCurrency
    ? `৳${Number(value).toLocaleString("en-US")}`
    : value;

   
  return (
    <Card className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              {title}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              {formattedValue}
            </h3>
            {description && (
              <p className="text-xs text-slate-400 dark:text-slate-500">
                {description}
              </p>
            )}
          </div>
          
          {/* ── Icon with Glowing Background ── */}
          <div className={`p-3 md:p-4 rounded-2xl flex items-center justify-center ${colorWrapperClass}`}>
            <Icon className={`w-6 h-6 md:w-7 md:h-7 ${iconColorClass}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}