"use server";

import { API } from "@/common/constants/api";
import {
  RefreshTokenInput,
  RefreshTokenResponse,
} from "./refresh-token-schema";
import { ErrorResponse } from "@/common/schema";
import { parseJSON } from "@/lib";

const REFRESH_TOKEN = API.URL_ENDPOINT + "/auth/refresh";

export const refreshNewTokens = async (
  input: RefreshTokenInput
): Promise<{
  error: ErrorResponse | null;
  data: RefreshTokenResponse | null;
}> => {
  try {
    const response = await fetch(REFRESH_TOKEN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken: input.refreshToken }),
    });

    if (!response.ok) {
      const error = await parseJSON<ErrorResponse>(response);
      return {
        error,
        data: null,
      };
    }

    const resJson = await parseJSON<RefreshTokenResponse>(response);

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
