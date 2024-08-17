"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { menuItems } from "../types/constants/menuItems";
import {
  useActiveBurgerMenuStore,
  useActiveMenuStore,
} from "@/zustand/sidebar-store";

const BurgerMenu = () => {
  const { activeIndex, setActiveIndex } = useActiveMenuStore();
  const { toggle, setToggle } = useActiveBurgerMenuStore();
  const [isMounted, setIsMounted] = useState(toggle);
  const [animationSlide, setAnimationSlide] =
    useState<string>("animate-slide-in");
  const [overlay, setOverlay] = useState<string>("opacity-100");

  useEffect(() => {
    if (toggle) {
      setIsMounted(true);
      setAnimationSlide("animate-slide-in");
      setOverlay("opacity-100");
    } else {
      setAnimationSlide("animate-slide-out");
      setOverlay("opacity-0");
      setTimeout(() => setIsMounted(false), 300);
    }
  }, [toggle]);

  return (
    <div className="">
      {!toggle && (
        <button className="p-2 m-2" onClick={setToggle}>
          <Menu className="h-6 w-6" />
        </button>
      )}
      {isMounted && (
        <>
          <div
            className={`bg-slate-500/50 fixed inset-0 z-10 transition-opacity duration-300 ease-in-out ${overlay}`}
            onClick={setToggle}
          ></div>
          <nav
            className={`fixed top-0 left-0 h-screen w-2/3 bg-white shadow-md z-20  transform ${animationSlide}`}
          >
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
