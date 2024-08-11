import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please provide an email" })
    .email({ message: "Please provide a valid email" }),
  password: z.string().min(6).max(64),
});

export const LoginResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export const ErrorResponseSchema = z.object({
  message: z.string(),
  error: z.string(),
  statusCode: z.string(),
});

export type LoginInput = z.infer<typeof LoginSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
export type ErrorResponse = z.infer<typeof ErrorResponseSchema>;
