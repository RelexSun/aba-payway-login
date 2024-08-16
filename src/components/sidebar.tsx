"use client";

import Image from "next/image";
import { useActiveMenuStore } from "@/zustand/sidebar-store";
import { menuItems } from "../types/constants/menuItems";

const SideBar = () => {
  const { activeIndex, setActiveIndex } = useActiveMenuStore();

  return (
    <>
      <div className="h-screen z-30 fixed side-bar bg-indigo-950 text-slate-400">
        <Image
          src={"/pw-new-logo.svg"}
          alt="logo"
          width={232}
          height={232}
          className=" ml-1"
        />
        <nav className="w-[250px] mt-3">
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`py-4 px-3 flex items-center gap-3 transition-colors cursor-pointer ${
                  activeIndex === index
                    ? "bg-indigo-950 text-white border-l-4  border-cyan-500"
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
      </div>
    </>
  );
};

export default SideBar;
