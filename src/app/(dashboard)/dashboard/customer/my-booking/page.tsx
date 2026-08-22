import MyBookingList from "../../_components/MyBookingList";
import { getCustomerBookings } from "../../_actions/bookingActions";

const MyBooking = async () => {
  const response = await getCustomerBookings();
  const bookingsArray = response?.data || [];

  if (!response?.success || bookingsArray.length === 0) {
    return <div className="p-6 text-slate-500">No bookings found.</div>;
  }
  return (
    <>
      <MyBookingList bookings={bookingsArray} />
    </>
  );
};

export default MyBooking;
