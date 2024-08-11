"use server";

import { jwtVerify } from "jose";
import { JwtPayload } from "./jwt-payload";

export const decrypt = async (
  secret: Uint8Array,
  token: string | undefined = ""
) => {
  try {
    const { payload } = await jwtVerify<JwtPayload>(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
};
