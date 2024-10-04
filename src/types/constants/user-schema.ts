import { GENDER } from "@/common/enum/gender-enum";
import { z } from "zod";

export const UserSchema = z.object({
  lastname: z.string(),
  firstname: z.string(),
  username: z.string(),
  age: z.number(),
  gender: z.enum([GENDER.MALE, GENDER.FEMALE]),
  phone_number: z.string(),
  dob: z.date(),
});

export type User = z.infer<typeof UserSchema>;
