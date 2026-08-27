"use client";

import { useState, useTransition } from "react";

import { Table } from "@/components/ui/table";

import { BookingTableHeader } from "./BookingTableHeader";
import { BookingTableBody } from "./BookingTableBody";
import { Booking, BookingStatus } from "@/lib/types";

interface BookingTableProps {
  bookings: Booking[];
  onStatusChange?: (bookingId: string, status: BookingStatus) => Promise<void>;
}

export function BookingTable({ bookings, onStatusChange }: BookingTableProps) {
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const [isPending, startTransition] = useTransition();

  const handleStatusChange = async (
    bookingId: string,
    status: BookingStatus,
  ) => {
    setUpdatingId(bookingId);

    startTransition(async () => {
      try {
        await onStatusChange?.(bookingId, status);
      } finally {
        setUpdatingId(null);
      }
    });
  };

  return (
    <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
      <Table>
        <BookingTableHeader />

        <BookingTableBody
          bookings={bookings}
          updatingId={isPending ? updatingId : null}
          onStatusChange={handleStatusChange}
        />
      </Table>
    </div>
  );
}
