import { ErrorResponse } from "@/common/schema";
import { API } from "@/common/constants/api";
import axios from "axios";

export const deleteShop = async (
  user_id: string,
  shop_id: string
): Promise<{
  user_id: string | null;
  shop_id: string | null;
  error: ErrorResponse | null;
}> => {
  try {
    const DELETE = API.URL_SHOP_ENDPOINT + `/${user_id}/${shop_id}`;
    await axios.delete(DELETE);
    return {
      error: null,
      user_id,
      shop_id,
    };
  } catch (error: any) {
    return {
      error,
      user_id: null,
      shop_id: null,
    };
  }
};
