import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function DashboardSkeleton() {
  return (
    <div className="p-4 md:p-8 w-full max-w-7xl mx-auto">
      {/* ── Page Header Skeleton ── */}
      <Skeleton className="h-8 w-56 mb-6" />

      <div className="space-y-5">
        
        {/* ── 1. Customer Overview (4 Cards) Skeleton ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <Card 
              key={index} 
              className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800"
            >
              <CardContent className="p-6 flex items-center justify-between">
                <div className="space-y-3 w-full">
                  {/* Title */}
                  <Skeleton className="h-4 w-24" />
                  {/* Value */}
                  <Skeleton className="h-8 w-32 md:w-36" />
                  {/* Description */}
                  <Skeleton className="h-3 w-28" />
                </div>
                
                {/* Icon Circle */}
                <Skeleton className="h-12 w-12 md:h-14 md:w-14 rounded-2xl shrink-0 ml-4" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ── 2. Payment Status Chart Skeleton ── */}
        <Card className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-slate-800">
          <CardHeader className="pb-2 space-y-3">
            {/* Chart Title */}
            <Skeleton className="h-6 w-48" />
            {/* Chart Description */}
            <Skeleton className="h-4 w-64" />
          </CardHeader>
          
          <CardContent>
            <div className="h-70 w-full flex flex-col items-center justify-center space-y-6 mt-4">
              {/* Donut Chart Circle Skeleton */}
              <Skeleton className="h-45 w-45 sm:h-55 sm:w-55 rounded-full" />
              
              {/* Legend Skeleton (Paid, Pending, Failed) */}
              <div className="flex gap-4">
                 <Skeleton className="h-4 w-16" />
                 <Skeleton className="h-4 w-16" />
                 <Skeleton className="h-4 w-16" />
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}