import React from "react";
import BookingButton from "./BookingButton";
import { getMe } from "@/services/getMe";

const MobileBookingBtn = async ({
  formattedPrice,
  serviceId,
  technicianId,
}: {
  formattedPrice: string;
  serviceId: string;
  technicianId: string;
}) => {
  const user = await getMe();
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-xl font-bold">Booking a Service</h1>
          <h3 className="font-extrabold">{formattedPrice}</h3>
        </div>
        <BookingButton
          serviceId={serviceId}
          technicianId={technicianId}
          user={user}
        />
      </div>
    </>
  );
};

export default MobileBookingBtn;
