import React from "react";

// Shadcn Components
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function MyBookingsSkeleton() {
  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="space-y-6  p-4 md:p-8 w-full container mx-auto">
      <h2 className="text-xl md:text-2xl font-bold flex gap-2 items-center text-slate-900 dark:text-white">
        My Bookings <Skeleton className="h-6 w-10 rounded-md" />
      </h2>

      {/* ── Shadcn Table Wrapper ── */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0a0a] overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50 dark:bg-[#0a0a0a]">
            <TableRow className="border-b-slate-200 dark:border-b-slate-800 hover:bg-transparent">
              <TableHead className="font-medium">Service</TableHead>
              <TableHead className="font-medium">Price</TableHead>
              <TableHead className="font-medium">Booked At</TableHead>
              <TableHead className="font-medium">Status</TableHead>
              <TableHead className="font-medium">Payment</TableHead>
              <TableHead className="font-medium">Booking</TableHead>
              <TableHead className="font-medium">Action</TableHead>
              <TableHead className="font-medium text-right">Review</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {skeletonRows.map((_, index) => (
              <TableRow
                key={index}
                className="border-b-slate-200 dark:border-b-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors"
              >
                {/* 1. Service Name Skeleton */}
                <TableCell className="p-4 align-middle">
                  <Skeleton className="h-5 w-35 lg:w-45" />
                </TableCell>

                {/* 2. Price Skeleton */}
                <TableCell>
                  <Skeleton className="h-4 w-15" />
                </TableCell>

                {/* 3. Booked At Skeleton */}
                <TableCell>
                  <Skeleton className="h-4 w-21.25" />
                </TableCell>

                {/* 4. Status Badge Skeleton */}
                <TableCell>
                  <Skeleton className="h-5 w-18.75 rounded-full" />
                </TableCell>

                {/* 5. Payment Button Skeleton */}
                <TableCell>
                  <Skeleton className="h-7 w-22.5 rounded-md" />
                </TableCell>

                {/* 6. Booking (Cancel) Button Skeleton */}
                <TableCell>
                  <Skeleton className="h-7 w-16.25 rounded-md" />
                </TableCell>

                {/* 7. Action Status Skeleton */}
                <TableCell>
                  <Skeleton className="h-4 w-10" />
                </TableCell>

                {/* 8. Review Button Skeleton (Right aligned) */}
                <TableCell className="text-right">
                  <div className="flex justify-end">
                    <Skeleton className="h-7 w-21.25 rounded-md" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
