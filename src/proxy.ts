import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { getNewAccessToken } from "./services/refreshToken";

const AUTH_ROUTES = ["/auth/login", "/auth/register"];
const PUBLIC_ROUTES = [
  "/",
  "/services",
  "/about",
  "/contact",
  "/auth/login",
  "/auth/register",
];

// const DASHBOARD_BY_ROLE: Record<string, string> = {
//   CUSTOMER: "/dashboard/customer",
//   TECHNICIAN: "/dashboard/technician",
//   ADMIN: "/dashboard/admin",
// };

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  let accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  let decodedAccessToken: JwtPayload | null = null;
  let decodedRefreshToken: JwtPayload | null = null;

  try {
    decodedRefreshToken = refreshToken
      ? (jwt.verify(
          refreshToken as string,
          process.env.JWT_REFRESH_SECRET!,
        ) as JwtPayload)
      : null;
  } catch {
    decodedRefreshToken = null;
  }

  if (!decodedAccessToken && decodedRefreshToken) {
    const response = await getNewAccessToken();

    if (response.success) {
      const newAccessToken = response.data.accessToken;
      response.cookies.set("accessToken", newAccessToken, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24,
      });

      accessToken = newAccessToken;
    }
  }

  try {
    decodedAccessToken = accessToken
      ? (jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET!) as JwtPayload)
      : null;
  } catch {
    decodedAccessToken = null;
  }

  if (!decodedAccessToken && decodedRefreshToken) {
    cookieStore.delete("accessToken");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  let role = null;
  if (decodedAccessToken) {
    role = decodedAccessToken.role;
  }

  if (role && AUTH_ROUTES.includes(pathName)) {
    if (role === "CUSTOMER") {
      return NextResponse.redirect(new URL("/dashboard/customer", request.url));
    } else if (role === "TECHNICIAN") {
      return NextResponse.redirect(
        new URL("/dashboard/technician", request.url),
      );
    } else if (role === "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard/admin", request.url));
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // for (const [r, path] of Object.entries(DASHBOARD_BY_ROLE)) {
  //   if (pathName.startsWith(path) && role !== r) {
  //     return NextResponse.redirect(
  //       new URL(DASHBOARD_BY_ROLE[role] ?? "/", request.url),
  //     );
  //   }
  // }

  const isPublic = PUBLIC_ROUTES.some(
    (r) => pathName === r || pathName.startsWith(r + "/"),
  );

  //! Authorized page protection
  if (!role && !isPublic) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  //! authorization: role base access control (RBAC)
  if (pathName.startsWith("/dashboard/customer") && role !== "CUSTOMER") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }
  if (pathName.startsWith("/dashboard/technician") && role !== "TECHNICIAN") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }
  if (pathName.startsWith("/dashboard/admin") && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: "/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)",
};
