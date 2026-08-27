import {
  getTechnicianBookings,
  updateBookingStatus,
} from "../../_actions/bookingActions";
import { BookingTable } from "../_components/BookingTable";
import { SelectFilters } from "../../../../../components/shared/FiltersByStatus";
import { GlobalPagination } from "../../../../../components/shared/Pagination";

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function BookingsPage({ searchParams }: PageProps) {
  const query = await searchParams;
  const { data, meta } = await getTechnicianBookings({ query });

  return (
    <div className="space-y-6 p-6 container mx-auto">
      <div className="flex items-center justify-between">
        <div className="">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Bookings </h1>
            <span className="text-xl">({meta?.total})</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Manage and update customer bookings.
          </p>
        </div>

        <div className="">
          <SelectFilters />
        </div>
      </div>

      <BookingTable
        bookings={data}
        onStatusChange={async (bookingId, status) => {
          "use server";
          try {
            await updateBookingStatus({ bookingId, status });
          } catch (error) {
            console.error(error);
          }
        }}
      />
      {meta && meta.totalPages > 0 && (
        <GlobalPagination
          currentPage={meta.page}
          totalPages={meta.totalPages}
        />
      )}
    </div>
  );
}
