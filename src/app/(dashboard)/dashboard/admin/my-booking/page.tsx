import MyBookingList from "../../_components/MyBookingList";
import { getCustomerBookings } from "../../_actions/bookingActions";
import EmptyBookingState from "@/components/dashboard/EmptyBookingState";
import { SearchProp } from "@/lib/types";

const MyBooking = async ({ searchParams }: SearchProp) => {
  const query = await searchParams;
  const response = await getCustomerBookings({ query });
  const bookingsArray = response?.data || [];

  if (!response?.success || bookingsArray.length === 0) {
    return (
      <div className="p-10">
        <EmptyBookingState />
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6  p-4 md:p-8 w-full container mx-auto">
        {/* ── Header ── */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
            My Bookings{" "}
            <span className="text-slate-500 dark:text-slate-400 text-lg font-normal">
              {bookingsArray?.length}
            </span>
          </h2>
        </div>

        {/* ── Shadcn Table Wrapper ── */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a0a0a] overflow-hidden">
          <MyBookingList bookings={bookingsArray} />
        </div>
      </div>
    </>
  );
};

export default MyBooking;
