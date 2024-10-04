"use server";

import axios from "axios";
import { PostResponse, PostShopInput } from "./schema";
import { API } from "@/common/constants/api";
import { ErrorResponse } from "@/common/schema";

const POST = API.URL_SHOP_ENDPOINT + "/create";

export const postShop = async (
  input: PostShopInput
): Promise<{ error: ErrorResponse | null; data: PostResponse | null }> => {
  try {
    const res = await axios.post<PostResponse>(POST, input);

    return {
      error: null,
      data: res.data,
    };
  } catch (error: any) {
    return {
      error,
      data: null,
    };
  }
};
