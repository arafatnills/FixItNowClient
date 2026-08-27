import MyBookingList from "../../_components/MyBookingList";
import { getCustomerBookings } from "../../_actions/bookingActions";
import { GlobalPagination } from "@/components/shared/Pagination";
import { SearchProp } from "@/lib/types";
import { SelectFilters } from "@/components/shared/FiltersByStatus";

const MyBooking = async ({ searchParams }: SearchProp) => {
  const query = await searchParams;
  const { data, meta } = await getCustomerBookings({ query });


  return (
    <>
      <div className="space-y-6  p-4 md:p-8 w-full container mx-auto">
        {/* ── Header ── */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
            My Bookings{" "}
            <span className="text-slate-500 dark:text-slate-400 text-lg font-normal">
              ({meta.total})
            </span>
          </h2>

          <SelectFilters />
        </div>

        {/* ── Shadcn Table Wrapper ── */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0a0a] overflow-hidden">
          <MyBookingList bookings={data} />
        </div>
      </div>

      {meta && meta.totalPages > 0 && (
        <GlobalPagination
          currentPage={meta.page}
          totalPages={meta.totalPages}
        />
      )}
    </>
  );
};

export default MyBooking;
