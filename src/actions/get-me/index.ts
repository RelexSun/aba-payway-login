"use server";

import { ErrorResponse } from "@/common/schema";
import { User } from "../../types/constants/user-schema";
import { API } from "@/common/constants/api";
import { parseJSON } from "@/lib/format-response-data";
import { cookies } from "next/headers";

const USER = API.URL_AUTH_ENDPOINT + "/user";

export const getMe = async (): Promise<{
  error: ErrorResponse | null;
  data: User | null;
}> => {
  try {
    const cookieHeader = cookies().toString();
    const res = await fetch(USER, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieHeader,
      },
    });

    if (!res.ok) {
      const error = await parseJSON<ErrorResponse>(res);
      return {
        error,
        data: null,
      };
    }
    const data = await res.json();
    return { error: null, data };
  } catch (e: any) {
    return {
      error: e,
      data: null,
    };
  }
};
