"use client";

import { useState } from "react";

import {
  Table,
} from "@/components/ui/table";


import { BookingTableHeader } from "./BookingTableHeader";
import { BookingTableBody } from "./BookingTableBody";
import { Booking, BookingStatus } from "@/lib/types";

interface BookingTableProps {
  bookings: Booking[];
  onStatusChange?: (
    bookingId: string,
    status: BookingStatus,
  ) => void;
}

export function BookingTable({
  bookings,
  onStatusChange,
}: BookingTableProps) {
  const [updatingId, setUpdatingId] = useState<string | null>(
    null,
  );

  const handleStatusChange = async (
    bookingId: string,
    status: BookingStatus,
  ) => {
    try {
      setUpdatingId(bookingId);

      await onStatusChange?.(bookingId, status);
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
      <Table>
        <BookingTableHeader />

        <BookingTableBody
          bookings={bookings}
          updatingId={updatingId}
          onStatusChange={handleStatusChange}
        />
      </Table>
    </div>
  );
}