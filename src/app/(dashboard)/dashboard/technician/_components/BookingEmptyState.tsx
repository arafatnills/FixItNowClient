import { CalendarDays } from "lucide-react";

import {
  TableCell,
  TableRow,
} from "@/components/ui/table";

export function BookingEmptyState() {
  return (
    <TableRow>
      <TableCell
        colSpan={6}
        className="h-40 text-center"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <CalendarDays className="h-5 w-5 text-muted-foreground" />
          </div>

          <p className="text-sm font-semibold">
            No bookings found
          </p>

          <p className="text-xs text-muted-foreground">
            There are no bookings to display.
          </p>
        </div>
      </TableCell>
    </TableRow>
  );
}