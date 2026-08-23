import MyBookingList from "../../_components/MyBookingList";
import { getCustomerBookings } from "../../_actions/bookingActions";
import EmptyBookingState from "@/components/dashboard/EmptyBookingState";

const MyBooking = async () => {
  const response = await getCustomerBookings();
  const bookingsArray = response?.data || [];

  if (!response?.success || bookingsArray.length === 0) {
    return <div className="p-10"><EmptyBookingState/></div>
  }

  return (
    <>
      <MyBookingList bookings={bookingsArray} />
    </>
  );
};

export default MyBooking;
