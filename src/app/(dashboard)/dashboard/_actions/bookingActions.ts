"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// ge all customer bookings
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

// create payment url
export const createPaymentURL = async (bookingId: string) => {
  const cookeStore = await cookies();
  const accessToken = cookeStore.get("accessToken")?.value;
  const payload = {
    bookingId: bookingId,
  };
  if (!accessToken) {
    return {
      success: false,
      message: "user not logged in!",
    };
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/payments/checkout`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify(payload),
    },
  );

  const result = await res.json();
  return result;
};

// customer dashboard static
export const getCustomerDashboardData = async () => {
  const cookeStore = await cookies();
  const accessToken = cookeStore.get("accessToken")?.value;
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/user/statistic`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-store",
  });

  const result = await res.json();
  console.log(result);
  return result;
};

// cancel booking
export const cancelBooking = async (bookingId: string) => {
  const cookeStore = await cookies();
  const accessToken = cookeStore.get("accessToken")?.value;
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/bookings/my-bookings/${bookingId}/cancel`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      // body: JSON.stringify(bookingId),
      cache: "no-store",
    },
  );

  const result = await res.json();

  if (result.success) {
    revalidatePath("/dashboard/customer/my-bookings");
  }
  return result;
};

// get technician bookings
export const getTechnicianBookings = async ({
  query,
}: {
  query?: { [key: string]: string | string[] | undefined };
}) => {
  const params = new URLSearchParams();

    if (query?.page) {
    params.set("page", query.page as string);
  }

  if (query?.limit) {
    params.set("limit", query.limit as string);
  }
  if (query?.status) {
    params.set("status", query.status as string);
  }

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/bookings/technician-bookings?${params}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        cookie: `accessToken=${accessToken}`,
      },
    },
  );

  const data = await res.json();

  return data;
};
