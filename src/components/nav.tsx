"use client";

import { useActiveUser } from "@/zustand/user-store";
import BurgerMenu from "./burger";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const NavBar = () => {
  const { user } = useActiveUser();
  return (
    <div className="absolute bg-white w-full top-0 border z-10 h-16 flex items-center justify-between px-7">
      <div className="z-30 md:hidden">
        <BurgerMenu />
      </div>

      <div className="flex border md:absolute md:right-7 items-center justify-center">
        <button>
          <Avatar className=" h-9 w-9 sm:flex md:absolute md:right-7">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
        </button>
        <span className="text-black ">{user?.username}</span>
      </div>
    </div>
  );
};

export default NavBar;
