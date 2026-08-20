import React from "react";
import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ServicesLoading() {
  return (

    <div className="min-h-screen pt-10 pb-20">
      <div className="container mx-auto px-8">
        
        {/* ── 1. Service Header (Exact structure from your code) ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-6">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
              Our Services
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
              Find professional, reliable home services to keep your space in perfect condition.
            </p>

            {/* Desktop Search Skeleton */}
            <div className="hidden lg:flex relative max-w-md items-center">
              <Search className="absolute left-3 w-5 h-5 text-slate-400 z-10" />
              
              <Skeleton className="w-full h-12 rounded-xl bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
        </div>

        {/* ── 2. Mobile Filters (Exact structure from your code) ── */}
        <div className="block lg:hidden w-full mb-8 space-y-4">
          <div className="flex gap-2 items-center">
            <div className="relative flex-1 items-center">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
           
              <Skeleton className="w-full h-12 rounded-md bg-slate-200 dark:bg-slate-800" />
            </div>
            <div>
              {/* Filter Button Skeleton (w-10 h-10 size icon equivalent) */}
              <Skeleton className="w-10 h-10 rounded-full shrink-0 bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
        </div>

        {/* ── 3. Main Body (Sidebar + Grid) ── */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar Skeleton (Exact wrapper class) */}
          <div className="hidden lg:block">
            <div className="w-64 shrink-0 p-6 lg:p-0 space-y-8 pr-6">
              {/* Categories Skeleton */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                  Categories
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <Skeleton className="w-4 h-4 rounded-sm bg-slate-200 dark:bg-slate-800" />
                      <Skeleton className="h-4 w-32 bg-slate-200 dark:bg-slate-800" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Skeleton */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                  Price Range
                </h3>
                <Skeleton className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800" />
                <div className="flex justify-between mt-3 text-xs text-slate-500 font-medium">
                  <span>৳0</span>
                  <span>৳5000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Grid & Pagination Wrapper */}
          <div className="flex-1 w-full">
            
            {/* Grid Skeleton (Exact grid cols & gap) */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col shadow-sm"
                >
                  {/* Thumbnail */}
                  <Skeleton className="h-55 w-full rounded-none bg-slate-200 dark:bg-slate-800" />

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col space-y-4">
                    <Skeleton className="h-6 w-4/5 bg-slate-200 dark:bg-slate-800" />
                    
                    <div className="space-y-2">
                      <Skeleton className="h-3 w-full bg-slate-200 dark:bg-slate-800" />
                      <Skeleton className="h-3 w-full bg-slate-200 dark:bg-slate-800" />
                      <Skeleton className="h-3 w-3/4 bg-slate-200 dark:bg-slate-800" />
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <Skeleton className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800" />
                      <Skeleton className="h-3 w-28 bg-slate-200 dark:bg-slate-800" />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-5 py-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <div className="space-y-2">
                      <Skeleton className="h-3 w-16 bg-slate-200 dark:bg-slate-800" />
                      <Skeleton className="h-6 w-20 bg-slate-200 dark:bg-slate-800" />
                    </div>
                    <Skeleton className="h-4 w-20 bg-slate-200 dark:bg-slate-800" />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Skeleton */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <Skeleton className="h-10 w-24 rounded-md bg-slate-200 dark:bg-slate-800" />
              <Skeleton className="h-10 w-10 rounded-md hidden sm:block bg-slate-200 dark:bg-slate-800" />
              <Skeleton className="h-10 w-10 rounded-md bg-slate-200 dark:bg-slate-800" />
              <Skeleton className="h-10 w-10 rounded-md hidden sm:block bg-slate-200 dark:bg-slate-800" />
              <Skeleton className="h-10 w-24 rounded-md bg-slate-200 dark:bg-slate-800" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}