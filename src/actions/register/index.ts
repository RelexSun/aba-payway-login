"use server";

import { API } from "@/common/constants/api";
import { RegisterInput, RegisterResponse } from "./schema";
import { ErrorResponse } from "@/common/schema";
import { parseJSON } from "@/lib/format-response-data";
import axios from "axios";

const REGISTER = API.URL_AUTH_ENDPOINT + "/register";

export const register = async (
  input: RegisterInput
): Promise<{ error: ErrorResponse | null; data: RegisterResponse | null }> => {
  try {
    const res = await axios.post(REGISTER, input);
    if (!res) {
      const error = await parseJSON<ErrorResponse>(res);
      return {
        error,
        data: null,
      };
    }
    const resJson = await parseJSON<RegisterResponse>(res.data);
    return {
      data: resJson,
      error: null,
    };
  } catch (error: any) {
    return {
      error,
      data: null,
    };
  }
};
