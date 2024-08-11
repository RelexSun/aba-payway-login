const access_key = process.env.NEXT_PUBLIC_JWT_ACCESS_TOKEN_SECRET;
const refresh_key = process.env.NEXT_PUBLIC_JWT_ACCESS_TOKEN_SECRET;

export const ACCESS_TOKEN_SECRET_KEY = new TextEncoder().encode(access_key);
export const REFRESH_TOKEN_SECRET_KEY = new TextEncoder().encode(refresh_key);
