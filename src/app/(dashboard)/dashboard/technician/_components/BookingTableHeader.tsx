import {
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function BookingTableHeader() {
  return (
    <TableHeader>
      <TableRow className="bg-muted/40 hover:bg-muted/40">
        <TableHead className="h-12 px-5">
          Booking
        </TableHead>

        <TableHead className="h-12">
          Customer
        </TableHead>

        <TableHead className="h-12">
          Service
        </TableHead>

        <TableHead className="h-12">
          Schedule
        </TableHead>

        <TableHead className="h-12">
          Status
        </TableHead>

        <TableHead className="h-12 w-12" />
      </TableRow>
    </TableHeader>
  );
}