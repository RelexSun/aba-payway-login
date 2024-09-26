"use server";

import { GetResponse } from "./schema";

import axios from "axios";

import { API } from "@/common/constants/api";
import { ErrorResponse } from "@/common/schema";

export const getShop = async (
  user_id: string
): Promise<{
  error: ErrorResponse | null;
  shop: GetResponse[] | null;
}> => {
  try {
    const GET = API.URL_SHOP_ENDPOINT + `/${user_id}`;
    const res = await axios.get(GET);

    return {
      error: null,
      shop: res.data,
    };
  } catch (error: any) {
    return {
      error,
      shop: null,
    };
  }
};
