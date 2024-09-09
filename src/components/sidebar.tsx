"use client";

import Image from "next/image";
import { menuItems } from "../types/constants/menuItems";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideBar = () => {
  const path = usePathname();

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
            {menuItems.map((item) => (
              <Link
                href={item.pathName}
                key={item.label}
                className={`py-4 px-3 flex items-center gap-3 transition-colors cursor-pointer ${
                  item.pathName === path ||
                  (path.startsWith(item.pathName) && item.pathName !== "/")
                    ? "bg-indigo-950 text-white border-l-4  border-cyan-500"
                    : "hover:bg-indigo-950 hover:text-white"
                }`}
              >
                <span
                  className={`pl-6 ${
                    item.pathName === path ||
                    (path.startsWith(item.pathName) && item.pathName !== "/")
                      ? "text-cyan-500"
                      : ""
                  }`}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
