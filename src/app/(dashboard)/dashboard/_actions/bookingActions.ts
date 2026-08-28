"use server";
import { BookingStatus, CreateServiceResponse, QueryTypes } from "@/lib/types";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

// ge all customer bookings
export const getCustomerBookings = async ({ query }: QueryTypes) => {
  const cookeStore = await cookies();
  const accessToken = cookeStore.get("accessToken")?.value;

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

  if (!accessToken) {
    return {
      success: false,
      message: "user not logged in!",
    };
  }

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/bookings/my-bookings?${params}`,
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
export const getTechnicianBookings = async ({ query }: QueryTypes) => {
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

export const updateBookingStatus = async ({
  bookingId,
  status,
}: {
  bookingId: string;
  status: BookingStatus;
}) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/bookings/my-bookings/${bookingId}/accept`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify({ status }),
    },
  );

  const data = await res.json();

  if (data.success) {
    revalidatePath("/dashboard/technician/orders");
  }

  return data;
};

// get only technician created services
export const getTechnicianServices = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/services/technician-services`,
    {
      headers: {
        "Content-Type": "application/json",
        cookie: `accessToken=${accessToken}`,
      },
    },
  );

  const data = await res.json();

  return data;
};

// update technician posts
export const updateTechnicianServices = async (id: string) => {};

// create technician posts
export const createTechnicianServices = async (
  prevState: CreateServiceResponse,
  fromData: FormData,
) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  const serviceName = fromData.get("serviceName");
  const price = fromData.get("price");
  const categoriesId = fromData.get("categoriesId");
  const city = fromData.get("city");
  const area = fromData.get("area");
  const description = fromData.get("description");
  const thumbnail = fromData.get("thumbnail");

  const payload = {
    serviceName,
    price: Number(price),
    city,
    categoriesId,
    area,
    description,
    thumbnail,
  };

  const response = await fetch(`${process.env.BACKEND_API_URL}/api/services`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      cookie: `accessToken=${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (result.success) {
    revalidateTag("services", {
      expire: 0,
    });
  }

  return result;
};

// get all categories
export const getAllCategories = async () => {
  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`, {
      cache: "force-cache",
    });
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
