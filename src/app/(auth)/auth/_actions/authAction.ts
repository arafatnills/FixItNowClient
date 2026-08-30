"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";
import { RegisterApiResponse } from "@/lib/types";

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

    const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;
    if (decodedToken.role === "CUSTOMER") {
      redirect("/dashboard/customer");
    } else if (decodedToken.role === "TECHNICIAN") {
      redirect("/dashboard/technician");
    } else if (decodedToken.role === "ADMIN") {
      redirect("/dashboard/admin");
    }
  }

  return result;
};

export const registerActon = async (
  prevState: RegisterApiResponse,
  fromData: FormData,
): Promise<RegisterApiResponse> => {
  // name, email, password, profilePhoto

  const name = fromData.get("name");
  const email = fromData.get("email");
  const password = fromData.get("password");
  const profilePhoto = fromData.get("profilePhoto");

  const payload = {
    name,
    email,
    password,
    profilePhoto,
  };

  const response = await fetch(
    `${process.env.BACKEND_API_URL}/api/users/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  const data = await response.json();

  return {
    success: true,
    status: response.status,
    message: "Account created successfully!",
    data: data,
  };
};
