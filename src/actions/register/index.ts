"use server";

import { API } from "@/common/constants/api";
import { RegisterInput, RegisterResponse } from "./schema";
import { ErrorResponse } from "@/common/schema";
import axios from "axios";

const REGISTER = API.URL_AUTH_ENDPOINT + "/register";

export const register = async (
  input: RegisterInput
): Promise<{ error: ErrorResponse | null; data: RegisterResponse | null }> => {
  try {
    const res = await axios.post(REGISTER, input);

    return {
      data: res.data,
      error: null,
    };
  } catch (error: any) {
    return {
      error: error,
      data: null,
    };
  }
};
