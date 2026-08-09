"use server";

import { cookies } from "next/headers";

type LoginState = {
  success: boolean;
  status: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};
export const loginAction = async (
  prevState: LoginState,
  fromData: FormData,
) => {
  const email = fromData.get("email");
  const password = fromData.get("password");

  const payload = {
    email,
    password,
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  if (result.success) {
    const cookeStore = await cookies();
    cookeStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });
    cookeStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });
  }

  return result;
};