"use server";

import { ErrorResponse } from "@/common/schema";
import { UpdateInput } from "./update-schema";
import { API } from "@/common/constants/api";
import axios from "axios";
import { cookies } from "next/headers";

const UPDATE = API.URL_ENDPOINT + "/auth/update";

export const updateMe = async (
  data: UpdateInput
): Promise<{
  error: ErrorResponse | null;
  ok: boolean;
}> => {
  try {
    const cookieHeader = cookies().toString();
    await axios.patch(UPDATE, data, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieHeader,
      },
    });

    return {
      error: null,
      ok: true,
    };
  } catch (error: any) {
    return {
      error,
      ok: false,
    };
  }
};
