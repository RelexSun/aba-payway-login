import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "Please provide an email" })
    .email({ message: "Please provide a valid email" }),
  password: z
    .string({ required_error: "Please provide a password" })
    .min(6)
    .max(64),
});

export const LoginResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type LoginInput = z.infer<typeof LoginSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
