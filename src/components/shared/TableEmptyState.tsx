import { CalendarDays } from "lucide-react";

import { TableCell, TableRow } from "@/components/ui/table";

export function BookingEmptyState({msg1, msg2 , clm}: {msg1: string, msg2: string, clm: number}) {
  return (
    <TableRow>
      <TableCell colSpan={clm} className="h-40 text-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <CalendarDays className="h-5 w-5 text-muted-foreground" />
          </div>

          <p className="text-sm font-semibold">{msg1}</p>

          <p className="text-xs text-muted-foreground">{msg2}</p>
        </div>
      </TableCell>
    </TableRow>
  );
}
