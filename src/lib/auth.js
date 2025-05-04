import { cookies } from "next/headers";
import { verifyToken } from "./jwt";

export function getUserFromCookie() {
  const cookieStore = cookies();
  const token = cookieStore.get("auth_token")?.value;
  if (!token) return null;
  return verifyToken(token);
}
