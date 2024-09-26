"use server";

import { API } from "@/common/constants/api";
import { LoginInput, LoginResponse } from "./login-schema";
import { parseJSON } from "@/lib/format-response-data";
import { setCookie } from "@/lib/set-cookie";
import { ErrorResponse } from "@/common/schema";

const LOGIN = API.URL_AUTH_ENDPOINT + "/login";

export const login = async (
  input: LoginInput
): Promise<{ error: ErrorResponse | null; data: LoginResponse | null }> => {
  try {
    const response = await fetch(LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: input.email, password: input.password }),
    });

    if (!response.ok) {
      const error = await parseJSON<ErrorResponse>(response);
      return {
        error,
        data: null,
      };
    }

    setCookie(response, "accessToken");
    setCookie(response, "refreshToken");

    const resJson = await parseJSON<LoginResponse>(response);
    return {
      error: null,
      data: resJson,
    };
  } catch (error: any) {
    return {
      error: error,
      data: null,
    };
  }
};
