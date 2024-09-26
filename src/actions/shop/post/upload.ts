import { API } from "@/common/constants/api";
import axios from "axios";
import { UploadResponse } from "./schema";

export const uploadFile = async (
  file: File
): Promise<UploadResponse | null> => {
  const formData = new FormData();
  formData.append("image", file);
  ("use server");
  try {
    const UPLOAD = API.URL_SHOP_ENDPOINT + "/upload";
    const res = await axios.post(UPLOAD, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    const { secure_url } = res.data;
    return { secure_url };
  } catch (error: any) {
    console.error("File upload error:", error);
    return null;
  }
};
