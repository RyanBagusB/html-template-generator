import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

const adminPaths = ["/admin"];
const guestOnlyPaths = ["/login", "/register"];

export async function middleware(request) {
  const token = request.cookies.get("auth_token")?.value;
  const user = token ? await verifyToken(token) : null;
  const { pathname } = request.nextUrl;

  if (!user && !guestOnlyPaths.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (user && guestOnlyPaths.includes(pathname)) {
    const redirectPath = user.role === "ADMIN" ? "/admin" : "/";
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  if (user && adminPaths.some((path) => pathname.startsWith(path)) && user.role !== "ADMIN") {
    return NextResponse.rewrite(new URL("/404", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api).*)",
  ],
};
