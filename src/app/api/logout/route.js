import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "Logout berhasil" });
  res.cookies.delete("auth_token", { path: "/" });
  res.headers.set("Location", "/login");
  return res;
}
