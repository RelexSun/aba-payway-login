import { ErrorResponse } from "@/common/schema";
import { TableEditInput, TableModifyInput } from "../schema";
import { API } from "@/common/constants/api";
import { parseJSON } from "@/lib/format-response-data";
import axios from "axios";

export default async function UpdateTable(
  route: TableModifyInput,
  input: TableEditInput
): Promise<{
  data: TableEditInput | null;
  error: ErrorResponse | null;
}> {
  try {
    const PATCH =
      API.URL_TABLE_ENDPOINT + `/${route.shop_id}/${route.table_id}`;
    const res = await axios.patch(PATCH, { ...input });
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
