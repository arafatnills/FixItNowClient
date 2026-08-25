import {
  TableBody,
} from "@/components/ui/table";

import { BookingTableRow } from "./BookingTableRow";
import { BookingEmptyState } from "./BookingEmptyState";
import { Booking, BookingStatus } from "@/lib/types";

interface BookingTableBodyProps {
  bookings: Booking[];
  updatingId?: string | null;
  onStatusChange: (
    bookingId: string,
    status: BookingStatus,
  ) => void;
}

export function BookingTableBody({
  bookings,
  updatingId,
  onStatusChange,
}: BookingTableBodyProps) {
  return (
    <TableBody>
      {bookings.length === 0 ? (
        <BookingEmptyState />
      ) : (
        bookings.map((booking) => (
          <BookingTableRow
            key={booking.id}
            booking={booking}
            loading={updatingId === booking.id}
            onStatusChange={onStatusChange}
          />
        ))
      )}
    </TableBody>
  );
}