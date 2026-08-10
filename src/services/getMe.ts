"use server";

import { cookies } from "next/headers";

export const getMe = async () => {
  const cookeStore = await cookies();
  const accessToken = cookeStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "user not logged in!",
    };
  }

  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 24,
        tags: ['my-profile']
      },
    });

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
