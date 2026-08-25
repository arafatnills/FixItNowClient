import {
  CalendarDays,
  Clock3,
  Eye,
  MoreHorizontal,
  UserRound,
  Wrench,
} from "lucide-react";

import {
  TableCell,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";


import { BookingStatusDropdown } from "./BookingStatusDropdown";
import { Booking, BookingStatus } from "@/lib/types";

interface BookingTableRowProps {
  booking: Booking;
  loading?: boolean;
  onStatusChange: (
    bookingId: string,
    status: BookingStatus,
  ) => void;
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatTime = (date: string) => {
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export function BookingTableRow({
  booking,
  loading = false,
  onStatusChange,
}: BookingTableRowProps) {
  return (
    <TableRow className="group transition-colors">
      {/* Booking */}
      <TableCell className="px-5">
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-xl
              bg-[#006B7A]/10
              text-[#006B7A]
            "
          >
            <CalendarDays className="h-4 w-4" />
          </div>

          <div className="min-w-0">
            <p className="font-medium">
              #{booking.id.slice(0, 8)}
            </p>

            <p className="text-xs text-muted-foreground">
              {formatDate(booking.createdAt)}
            </p>
          </div>
        </div>
      </TableCell>

      {/* Customer */}
      <TableCell>
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-full
              bg-muted
            "
          >
            <UserRound className="h-4 w-4 text-muted-foreground" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-medium">
              {booking.customer?.name ?? "Unknown"}
            </p>

            {booking.customer?.email && (
              <p className="max-w-40 truncate text-xs text-muted-foreground">
                {booking.customer.email}
              </p>
            )}
          </div>
        </div>
      </TableCell>

      {/* Service */}
      <TableCell>
        <div className="flex items-center gap-2">
          <Wrench className="h-4 w-4 text-[#006B7A]" />

          <div>
            <p className="text-sm font-medium">
              {booking.service?.serviceName ?? "Unknown Service"}
            </p>

            {booking.service?.price !== undefined && (
              <p className="text-xs text-muted-foreground">
                ${booking.service.price}
              </p>
            )}
          </div>
        </div>
      </TableCell>

      {/* Schedule */}
      <TableCell>
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-sm font-medium">
            <CalendarDays className="h-3.5 w-3.5 text-muted-foreground" />

            {formatDate(booking.scheduledAt)}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock3 className="h-3.5 w-3.5" />

            {formatTime(booking.scheduledAt)}
          </div>
        </div>
      </TableCell>

      {/* Status */}
      <TableCell>
        <BookingStatusDropdown
          status={booking.status}
          loading={loading}
          onStatusChange={(status) =>
            onStatusChange(booking.id, status)
          }
        />
      </TableCell>

      {/* Actions */}
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              View Details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}