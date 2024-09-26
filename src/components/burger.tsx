"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { menuItems } from "../types/constants/menuItems";
import { useActiveBurgerMenuStore } from "@/zustand/sidebar-store";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MenuItem } from "@/types/interfaces";

const BurgerMenu = () => {
  const { toggle, setToggle } = useActiveBurgerMenuStore();
  const [isMounted, setIsMounted] = useState(toggle);
  const [animationSlide, setAnimationSlide] =
    useState<string>("animate-slide-in");
  const [overlay, setOverlay] = useState<string>("opacity-100");
  const router = useRouter();
  const path = usePathname();
  const handleClick = (item: MenuItem) => {
    router.push(item.pathName);
  };

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
        <button onClick={setToggle}>
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
            className={`fixed top-0 left-0 side-bar h-screen w-2/3 shadow-md z-20  transform ${animationSlide}`}
          >
            <Image
              src={"/pw-new-logo.svg"}
              alt="logo"
              width={232}
              height={232}
              className="m-5"
            />
            <ul className="">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className={`py-4 px-3 flex items-center gap-3 text-slate-400 transition-colors cursor-pointer ${
                    item.pathName === path
                      ? "bg-indigo-950 text-white border-l-4 border-cyan-500"
                      : "hover:bg-indigo-950 hover:text-white"
                  }`}
                  onClick={() => handleClick(item)}
                >
                  <span
                    className={`pl-6 ${
                      item.pathName === path ? "text-cyan-500" : ""
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
