"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { menuItems } from "../types/constants/menuItems";
import {
  useActiveBurgerMenuStore,
  useActiveMenuStore,
} from "@/zustand/sidebar-store";

const BurgerMenu = () => {
  const { activeIndex, setActiveIndex } = useActiveMenuStore();
  const { toggle, setToggle } = useActiveBurgerMenuStore();
  return (
    <div className="">
      {!toggle && (
        <button className="p-2 m-2" onClick={setToggle}>
          <Menu className="h-6 w-6" />
        </button>
      )}
      {toggle && (
        <>
          <div
            className="bg-slate-900/60 fixed inset-0 z-10"
            onClick={setToggle}
          ></div>
          <nav className="absolute z-20 bg-white h-screen w-3/4">
            <ul className=" mt-16">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`py-4 px-3 flex items-center gap-3 transition-colors cursor-pointer ${
                    activeIndex === index
                      ? "bg-indigo-950 text-white border-l-4 border-cyan-500"
                      : "hover:bg-indigo-950 hover:text-white"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span
                    className={`pl-6 ${
                      activeIndex === index ? "text-cyan-500" : ""
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
};

export default BurgerMenu;
