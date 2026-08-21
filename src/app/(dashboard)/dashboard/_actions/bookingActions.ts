"use server";
import { cookies } from "next/headers";

export const getCustomerBookings = async () => {
  const cookeStore = await cookies();
  const accessToken = cookeStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "user not logged in!",
    };
  }

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/bookings/my-bookings`,
      {
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
        cache: "no-store",
      },
    );

    const result = await res.json();

    return result;
  } catch (error: unknown) {
    return {
      success: false,
      message: "Failed to fetch customer bookings",
      error: error,
    };
  }
};

