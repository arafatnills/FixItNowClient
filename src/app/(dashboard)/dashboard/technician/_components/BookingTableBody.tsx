import { TableBody } from "@/components/ui/table";

import { BookingTableRow } from "./BookingTableRow";
import { BookingEmptyState } from "../../../../../components/shared/TableEmptyState";
import { Booking, BookingStatus } from "@/lib/types";

interface BookingTableBodyProps {
  bookings: Booking[];
  updatingId?: string | null;
  onStatusChange: (bookingId: string, status: BookingStatus) => void;
}

export function BookingTableBody({
  bookings,
  updatingId,
  onStatusChange,
}: BookingTableBodyProps) {
  return (
    <TableBody>
      {bookings.length === 0 ? (
        <BookingEmptyState
          msg1="No bookings found"
          msg2="There are no bookings to display."
          clm={6}
        />
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
