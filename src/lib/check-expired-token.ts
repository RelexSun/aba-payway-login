import { JwtPayload } from "@/common/jwt";
import { JWTPayload } from "jose";

export function checkExpiredToken(
  payload: (JwtPayload & JWTPayload) | null
): boolean {
  if (!payload?.exp) return true;
  const currentTime = Math.floor(Date.now() / 1000);
  return payload.exp < currentTime;
}
