import { ErrorResponse } from "@/common/schema";
import { TableModifyInput } from "../schema";
import { API } from "@/common/constants/api";
import { parseJSON } from "@/lib/format-response-data";
import axios from "axios";

export default async function DeleteTable(input: TableModifyInput): Promise<{
  data: TableModifyInput | null;
  error: ErrorResponse | null;
}> {
  try {
    const DELETE =
      API.URL_TABLE_ENDPOINT + `/${input.shop_id}/${input.table_id}`;
    const res = await axios.delete(DELETE);
    if (!res) {
      const error = await parseJSON<ErrorResponse>(res);
      return {
        error,
        data: null,
      };
    }
    return {
      data: res.data,
      error: null,
    };
  } catch (error: any) {
    return {
      data: null,
      error,
    };
  }
}
