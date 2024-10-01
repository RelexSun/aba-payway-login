import { TABLE_STATUS } from "@/common/enum/status-enum";
import { z } from "zod";

export const tableSchema = z.object({
  id: z.string(),
  number: z.number(),
  seatAmount: z.number(),
  status: z.enum([TABLE_STATUS.AVAILABLE, TABLE_STATUS.OCCUPIED]),
});

export const tableInputSchema = z.object({
  number: z.number().gt(0).optional(),
  seatAmount: z.number().gt(0).optional(),
  status: z.enum([TABLE_STATUS.AVAILABLE, TABLE_STATUS.OCCUPIED]).optional(),
});

export const tableInputUpdateSchema = z.object({
  number: z.number().gt(0).optional(),
  seatAmount: z.number().gt(0).optional(),
  status: z.enum([TABLE_STATUS.AVAILABLE, TABLE_STATUS.OCCUPIED]).optional(),
});

export const tableModifySchema = z.object({
  shop_id: z.string(),
  table_id: z.string(),
});

export type TableResponse = z.infer<typeof tableSchema>;
export type TableInput = z.infer<typeof tableInputSchema>;
export type TableEditInput = z.infer<typeof tableInputUpdateSchema>;
export type TableModifyInput = z.infer<typeof tableModifySchema>;
