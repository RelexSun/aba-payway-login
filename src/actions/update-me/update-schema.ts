import { GENDER } from "./../../common/enum/gender-enum";
import { z } from "zod";

export const UpdateSchema = z.object({
  lastname: z.string().optional(),
  firstname: z.string().optional(),
  username: z.string().optional(),
  age: z.number().gt(0).optional(),
  gender: z.enum([GENDER.MALE, GENDER.FEMALE]).optional(),
  phone_number: z
    .string()
    .regex(/^[0-9]{10,15}$/, "Invalid phone number")
    .optional(),
  dob: z.date().optional(),
});

export type UpdateInput = z.infer<typeof UpdateSchema>;
