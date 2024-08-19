import { create } from "zustand";
import { User } from "@/types/constants/user-schema";

export const useActiveUser = create<{
  user: User | null;
}>(() => ({
  user: null,
}));
