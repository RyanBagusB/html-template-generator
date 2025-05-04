import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { signToken } from "@/lib/jwt";
import { comparePassword } from "@/lib/hash";

export async function POST(req) {
  const { username, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { username } });

  if (!user || !(await comparePassword(password, user.password))) {
    return NextResponse.json({ message: "Username atau password salah" }, { status: 401 });
  }

  const token = await signToken({ id: user.id, role: user.role });

  const res = NextResponse.json({ message: "Login berhasil" });
  res.cookies.set("auth_token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  return res;
}
