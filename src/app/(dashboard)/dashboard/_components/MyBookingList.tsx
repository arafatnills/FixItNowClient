import React from "react";
import { format } from "date-fns";
import { CreditCard, Star } from "lucide-react";

// Shadcn Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookingType } from "@/lib/types";
import PaymentButton from "./PaymentButton";
import Link from "next/link";

export default function MyBookingsTable({
  bookings,
}: {
  bookings: BookingType[];
}) {
  return (
    <div className="space-y-6 p-4 lg:p-8">
      {/* ── Header ── */}
      <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
        My Bookings{" "}
        <span className="text-slate-500 dark:text-slate-400 text-lg font-normal">
          ({bookings.length})
        </span>
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
            {bookings.map((booking) => (
              <TableRow
                key={booking.id}
                className="border-b-slate-200 dark:border-b-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors"
              >
                {/* 1. Service Name */}
                <TableCell className="p-4 align-middle font-medium text-slate-900 dark:text-white max-w-75 truncate">
                  <Button asChild variant={'link'} className="dark:text-white text-black">
                    <Link  href={`/services/${booking.serviceId}`}>{booking.service.serviceName}</Link>
                  </Button>
                </TableCell>

                {/* 2. Price */}
                <TableCell className="text-slate-600 dark:text-slate-300">
                  ৳{booking.service.price}
                </TableCell>

                {/* 3. Booked At */}
                <TableCell className="text-slate-500 dark:text-slate-400">
                  {format(new Date(booking.scheduledAt), "MMM dd, yyyy")}
                </TableCell>

                {/* 4. Status Badge (Shadcn Badge with custom colors) */}
                <TableCell>
                  <Badge
                    variant={
                      booking.status === "CANCELLED" ? "destructive" : "outline"
                    }
                    className={`text-[10px] tracking-wider uppercase ${
                      booking.status === "PENDING"
                        ? "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-500 dark:border-amber-500/20"
                        : booking.status === "ACCEPTED"
                          ? "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-500 dark:border-emerald-500/20"
                          : ""
                    }`}
                  >
                    {booking.status}
                  </Badge>
                </TableCell>

                {/* 5. Payment Status Badge */}
                <TableCell>
                  <PaymentButton booking={booking} />
                </TableCell>

                {/* 6. Booking Action (Cancel Button) */}
                <TableCell>
                  {booking.status !== "CANCELLED" && (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={booking.status === "ACCEPTED"}
                      className="h-7 px-3 text-xs text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:border-red-900/50 dark:hover:bg-red-950/30 bg-transparent"
                    >
                      Cancel
                    </Button>
                  )}
                </TableCell>

                {/* 7. Action Status */}
                <TableCell className="text-slate-500 font-medium">
                  TBD
                </TableCell>

                {/* 8. Review Button */}
                <TableCell className="text-right">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={booking.status !== "COMPLETED"}
                    className={`h-7 px-3 text-xs bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100 hover:text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-800/50 dark:hover:bg-indigo-900/50 transition-colors `}
                  >
                    <Star className="w-3.5 h-3.5 mr-1.5" />
                    Review
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
