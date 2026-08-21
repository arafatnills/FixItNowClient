"use server";

import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
export type BookingState = {
  success: boolean;
  message: string;
};

export const confirmBooking = async (
  prevState: BookingState | null,
  formData: FormData,
) => {
  const serviceId = formData.get("serviceId");
  const technicianId = formData.get("technicianId");
  const scheduledAt = formData.get("scheduledAt");

  const cookieStore = await cookies();
  const payload = {
    serviceId,
    technicianId,
    scheduledAt,
  };
  const ROLE = ["CUSTOMER", "ADMIN"];

  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in.",
    };
  }

  const role = jwt.verify(
    accessToken,
    process.env.JWT_ACCESS_SECRET as string,
  ) as JwtPayload;

  if (!ROLE.includes(role.role)) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/bookings`, {
    method: "POST",
    headers: {
      'content-type': 'application/json',
      Cookie: `accessToken=${accessToken}`
    },
    body: JSON.stringify(payload)
  })

  const  result = await res.json()

  return {
    success: true,
    message: "Booking Successfully!",
    data: result
  };
};
