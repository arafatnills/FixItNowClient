import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getNewAccessToken } from "./services/refreshToken";
import { verifyToken } from "./utils/jwt";

const AUTH_ROUTES = ["/auth/login", "/auth/register"];
const PUBLIC_ROUTES = [
  "/",
  "/services",
  "/about",
  "/contact",
  "/auth/login",
  "/auth/register",
];

const DASHBOARD_BY_ROLE: Record<string, string> = {
  CUSTOMER: "/dashboard/customer",
  TECHNICIAN: "/dashboard/technician",
  ADMIN: "/dashboard/admin",
};

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  let accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  //! decoded access & refresh token
  let decodedAccessToken = verifyToken(
    accessToken,
    process.env.JWT_ACCESS_SECRET!,
  );
  const decodedRefreshToken = verifyToken(
    refreshToken,
    process.env.JWT_REFRESH_SECRET!,
  );

  let newAccessToken: string | null = null;
  let role: string | null = decodedAccessToken?.role ?? null;

  //! if accessToken expire then generate new accessToken using refreshToken and set to cookie
  if (!decodedAccessToken && decodedRefreshToken && refreshToken) {
    const response = await getNewAccessToken();

    if (response.success && response.data.accessToken) {
      newAccessToken = response.data.accessToken as string;
      decodedAccessToken = verifyToken(
        newAccessToken,
        process.env.JWT_ACCESS_SECRET!,
      );
      role = decodedAccessToken?.role ?? null;
      request.cookies.set("accessToken", newAccessToken);
    }
  }

  //! check is protected routes or not
  const isPublic = PUBLIC_ROUTES.some(
    (r) => pathName === r || (r !== "/" && pathName.startsWith(`${r}/`)),
  );
  if (!decodedAccessToken && !isPublic) {
    const redirect = NextResponse.redirect(new URL("/auth/login", request.url));
    redirect.cookies.delete("accessToken");
    return redirect;
  }

  if (!role && !isPublic) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  //! set token in cookie
  const response = NextResponse.next({ request });
  if (newAccessToken) {
    response.cookies.set("accessToken", newAccessToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24,
    });
    accessToken = newAccessToken;
  }

  if (role) {
    for (const [r, path] of Object.entries(DASHBOARD_BY_ROLE)) {
      if (pathName.startsWith(path) && role !== r) {
        return NextResponse.redirect(
          new URL(DASHBOARD_BY_ROLE[role] ?? "/", request.url),
        );
      }
    }
  }

  if (decodedAccessToken && AUTH_ROUTES.includes(pathName)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)",
};
