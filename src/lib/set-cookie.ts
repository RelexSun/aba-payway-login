"use server";

import { cookies } from "next/headers";

export const setCookie = (response: Response, key: string) => {
  const setCookieHeader = response.headers.get("Set-Cookie");

  if (!setCookieHeader) {
    return;
  }
  const token = setCookieHeader
    .split(";")
    .find((cookieHeader) => cookieHeader.includes(key))
    ?.split("=")[1];

  if (token) {
    cookies().set({
      name: key,
      value: token,
      secure: true,
    });
  }

  return token;
};
