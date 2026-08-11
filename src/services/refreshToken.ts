"use server";

import { cookies } from "next/headers";

export const getNewAccessToken = async () => {
  const cookeStore = await cookies();
  const refreshToken = cookeStore.get("refreshToken")?.value;

  if (!refreshToken) {
    return {
      success: false,
      message: "accessToken not found!",
    };
  }

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/auth/refresh-token`,
      {
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
        cache: "no-store",
        method: "POST"
      },
      
    );

    const result = await res.json();

    return result;
  } catch (error: unknown) {
    return {
      success: false,
      message: "Failed to fetch user",
      error: error,
    };
  }
};
