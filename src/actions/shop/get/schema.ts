import { z } from "zod";

export const getSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string(),
  location: z.string(),
  img_url: z.string(),
});

export const getShopsSchema = z.array(getSchema);

export type GetResponse = z.infer<typeof getSchema>;
export type GetShopsResponse = z.infer<typeof getShopsSchema>;
