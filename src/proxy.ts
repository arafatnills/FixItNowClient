import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

const AUTH_ROUTES = ["/auth/login", "/auth/register"];
const PUBLIC_ROUTES = [
  "/",
  "/services",
  "/about",
  "/contact",
  "/auth/login",
  "/auth/register",
];

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  console.log(pathName, "this is path name");
  const accessToken = request.cookies.get("accessToken")?.value;

  const decodedToken = accessToken
    ? (jwt.decode(accessToken) as JwtPayload)
    : null;

  let userRole = null;

  if (decodedToken) {
    userRole = decodedToken.role;
  }

  if (accessToken && AUTH_ROUTES.includes(pathName)) {
    if (userRole === "CUSTOMER") {
      return NextResponse.redirect(new URL("/dashboard/customer", request.url));
    } else if (userRole === "TECHNICIAN") {
      return NextResponse.redirect(
        new URL("/dashboard/technician", request.url),
      );
    } else if (userRole === "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard/admin", request.url));
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  
  const isPublic = PUBLIC_ROUTES.some(
    (r) => pathName === r || pathName.startsWith(r + "/"),
  );

  //! Authorized page protection
  if (!accessToken && !isPublic) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  let role = null;
  if (decodedToken) {
    role = decodedToken.role;
  }

  //! authorization: role base access control (RBAC)
  if (pathName.startsWith("/dashboard/customer") && role !== "CUSTOMER") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathName.startsWith("/dashboard/technician") && role !== "TECHNICIAN") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathName.startsWith("/dashboard/admin") && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: "/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)",
};
