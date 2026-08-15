import { Skeleton } from "@/components/ui/skeleton";

export default function ServiceDetailsLoading() {
  return (
    <main className="min-h-screen pb-28 lg:pb-16">
      <div className="mx-auto w-full container px-4 py-5 sm:px-6 lg:px-8 lg:py-10">
        
        {/* ── Breadcrumb Skeleton ── */}
        <div className="mb-4 flex items-center gap-2">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-10">
          
          {/* ── Left Column Skeleton ── */}
          <div className="min-w-0 space-y-6">
            
            {/* Hero Image Skeleton */}
            <Skeleton className="aspect-4/3 w-full rounded-2xl sm:aspect-video" />

            {/* Header Skeleton */}
            <div className="space-y-3">
              <Skeleton className="h-8 w-3/4 sm:h-10 lg:w-2/3" />
              <div className="flex flex-wrap gap-4">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-5 w-32" />
              </div>
            </div>

            {/* Mobile Price Strip Skeleton (Hidden on Desktop) */}
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 lg:hidden dark:border-slate-800 dark:bg-slate-900">
              <div className="space-y-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-8 w-28" />
              </div>
              <Skeleton className="h-11 w-32 rounded-full" />
            </div>

            {/* About Section Skeleton */}
            <div className="space-y-3">
              <Skeleton className="h-6 w-40" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>

            {/* Service Details/Specs Skeleton */}
            <div className="space-y-3">
              <Skeleton className="h-6 w-36" />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-[76px] w-full rounded-xl" />
                ))}
              </div>
            </div>

            {/* How Booking Works Skeleton */}
            <div className="space-y-3">
              <Skeleton className="h-6 w-44" />
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-3">
                    <Skeleton className="size-6 shrink-0 rounded-full" />
                    <Skeleton className="h-5 w-3/4 sm:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column (Desktop Sticky Card Skeleton) ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <div className="space-y-5 p-6">
                
                {/* Pricing Skeleton */}
                <div className="space-y-2">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-10 w-32" />
                  <Skeleton className="h-3 w-48" />
                </div>

                {/* Buttons Skeleton */}
                <div className="space-y-2.5">
                  <Skeleton className="h-11 w-full rounded-full" />
                  <Skeleton className="h-11 w-full rounded-full" />
                </div>

                {/* Trust Badges Skeleton */}
                <div className="space-y-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>

              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}