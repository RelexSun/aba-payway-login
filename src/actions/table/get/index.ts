import { ErrorResponse } from "@/common/schema";
import { TableResponse } from "../schema";
import axios from "axios";
import { API } from "@/common/constants/api";

export async function getTable(shop_id: string): Promise<{
  tables: TableResponse[] | null;
  error: ErrorResponse | null;
}> {
  try {
    const GET = API.URL_TABLE_ENDPOINT + `/${shop_id}`;
    const res = await axios.get(GET);
    return {
      tables: res.data,
      error: null,
    };
  } catch (error: any) {
    return {
      error,
      tables: null,
    };
  }
}
