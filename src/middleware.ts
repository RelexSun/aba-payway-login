import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { ROUTES } from "./common/constants/routes";
import { ACCESS_TOKEN_SECRET_KEY, decrypt } from "./common/jwt";

const protectedRoutes = ["/"];
const publicRoutes = ["/login"];

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const accessToken = cookies().get("accessToken")?.value;
  const payload = await decrypt(ACCESS_TOKEN_SECRET_KEY, accessToken);

  if (isProtectedRoute && !payload?.id) {
    return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
  }

  if (isPublicRoute && payload?.id) {
    return NextResponse.redirect(new URL(ROUTES.HOME, request.url));
  }

  return NextResponse.next();
}
