import { z } from "zod";

export const PostShopSchema = z.object({
  name: z.string({ required_error: "Please provide name of your shop" }),
  location: z.string({
    required_error: "Please provide name of location of your shop",
  }),
  img_url: z.string().nullable().optional(),
});

export const PostShopSchemaResponse = z.object({
  name: z.string(),
  location: z.string(),
  user_id: z.string(),
  img_url: z.string().optional(),
});

export const UploadSchema = z.object({
  secure_url: z.string(),
});

export type PostShopInput = z.infer<typeof PostShopSchema>;
export type PostResponse = z.infer<typeof PostShopSchemaResponse>;
export type UploadResponse = z.infer<typeof UploadSchema>;
