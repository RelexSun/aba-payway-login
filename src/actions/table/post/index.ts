import { ErrorResponse } from "@/common/schema";
import { TableInput } from "../schema";
import { API } from "@/common/constants/api";
import { parseJSON } from "@/lib/format-response-data";
import axios from "axios";

const POST = API.URL_TABLE_ENDPOINT + "/create";

export default async function PostTable(input: TableInput): Promise<{
  data: TableInput | null;
  error: ErrorResponse | null;
}> {
  try {
    const res = await axios.post(POST, input);
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
