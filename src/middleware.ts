import { NextRequest, NextResponse } from "next/server";
import { ROUTES } from "./common/constants/routes";
import { ACCESS_TOKEN_SECRET_KEY, decrypt } from "./common/jwt";
import { checkExpiredToken } from "./lib";
import { refreshNewTokens } from "./actions/refresh-token";

const protectedRoutes = ["/"];
const publicRoutes = ["/login", "/register"];

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;
  const payload = await decrypt(ACCESS_TOKEN_SECRET_KEY, accessToken);

  const isTokenExpired = checkExpiredToken(payload);

  if (isTokenExpired && refreshToken) {
    const { data } = await refreshNewTokens({ refreshToken });

    if (data?.accessToken && data.refreshToken) {
      const response = NextResponse.next();
      response.cookies.set("accessToken", data.accessToken, {
        httpOnly: true,
        secure: process.env.NEXT_PUBLIC_NODE_ENV === "production",
        path: "/",
      });

      response.cookies.set("refreshToken", data.refreshToken, {
        httpOnly: true,
        secure: process.env.NEXT_PUBLIC_NODE_ENV === "production",
        path: "/",
      });

      return response;
    }
  }

  if (isProtectedRoute && !payload?.sub) {
    const response = NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
    response.cookies.delete("accessToken");
    response.cookies.delete("refreshToken");

    return response;
  }

  if (isPublicRoute && payload?.sub) {
    const response = NextResponse.redirect(new URL(ROUTES.HOME, request.url));

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
