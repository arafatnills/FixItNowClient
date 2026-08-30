import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProfileSkeleton() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-10">
        
        {/* =====================================================
            TOP HEADER SKELETON
        ====================================================== */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Skeleton className="h-14 w-14 rounded-2xl" />

            {/* Text details */}
            <div>
              <Skeleton className="mb-2 h-4 w-32" />
              <Skeleton className="mb-2 h-8 w-56 sm:w-72" />
              <Skeleton className="h-4 w-64 sm:w-80" />
            </div>
          </div>

          {/* Account Status Badge */}
          <Skeleton className="h-10 w-36 rounded-full" />
        </div>

        {/* =====================================================
            TABS SKELETON
        ====================================================== */}
        <div className="mb-6">
          <Skeleton className="h-12 w-[260px] rounded-xl" />
        </div>

        {/* =====================================================
            OVERVIEW CONTENT SKELETON
        ====================================================== */}
        <div className="space-y-6">
          
          {/* PROFILE HERO CARD */}
          <Card className="overflow-hidden p-0 rounded-3xl border-slate-200 shadow-sm dark:border-border">
            {/* Cover Area */}
            <Skeleton className="h-40 sm:h-48 w-full rounded-none" />

            <CardContent className="relative px-5 pb-7 sm:px-8">
              {/* Identity Section (Avatar + Info) */}
              <div className="-mt-16 flex flex-col gap-5 md:-mt-16 md:flex-row md:items-end">
                {/* Avatar */}
                <div className="mx-auto md:mx-0">
                  <Skeleton className="h-32 w-32 rounded-full border-[5px] border-white dark:border-card" />
                </div>

                {/* Profile Details */}
                <div className="flex-1 md:pt-12 text-center md:pb-2 md:text-left space-y-3">
                  {/* Name */}
                  <Skeleton className="h-8 w-48 mx-auto md:mx-0" />
                  {/* Email */}
                  <Skeleton className="h-4 w-40 mx-auto md:mx-0" />
                  
                  {/* Badges */}
                  <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                    <Skeleton className="h-7 w-32 rounded-full" />
                    <Skeleton className="h-7 w-24 rounded-full" />
                  </div>
                </div>
              </div>

              <Separator className="my-7" />

              {/* STATS SECTION */}
              <div className="grid gap-4 sm:grid-cols-3">
                <Skeleton className="h-28 rounded-xl" />
                <Skeleton className="h-28 rounded-xl" />
                <Skeleton className="h-28 rounded-xl" />
              </div>
            </CardContent>
          </Card>

          {/* =====================================================
              ABOUT ME SECTION SKELETON
          ====================================================== */}
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="rounded-2xl border-slate-200 shadow-sm lg:col-span-2 dark:border-border">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {/* Header Icon */}
                  <Skeleton className="h-10 w-10 rounded-xl" />
                  
                  {/* Header Text */}
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {/* Bio text lines */}
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[60%]" />
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}