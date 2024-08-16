import { ActiveBurgerMenuState, ActiveMenuState } from "@/types/interfaces";
import { create } from "zustand";

export const useActiveMenuStore = create<ActiveMenuState>((set) => ({
  activeIndex: 0,
  setActiveIndex: (index) => set({ activeIndex: index }),
}));

export const useActiveBurgerMenuStore = create<ActiveBurgerMenuState>(
  (set) => ({
    toggle: false,
    setToggle: () =>
      set((state) => ({
        toggle: !state.toggle,
      })),
  })
);
