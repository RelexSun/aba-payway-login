import { z } from "zod";
import { LoginResponseSchema } from "../login/login-schema";

export const RefreshTokenSchema = z.object({
  refreshToken: z.string(),
});

export type RefreshTokenInput = z.infer<typeof RefreshTokenSchema>;
export type RefreshTokenResponse = z.infer<typeof LoginResponseSchema>;
