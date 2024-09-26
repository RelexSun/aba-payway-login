import { GetShopsResponse } from "@/actions/shop/get/schema";
import { create } from "zustand";

export const useActiveShop = create<{
  shop: GetShopsResponse | null;
}>(() => ({
  shop: null,
}));
