import { z } from "zod";

export const UserSchema = z.object({
  username: z.string(),
  id: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export type User = z.infer<typeof UserSchema>;
