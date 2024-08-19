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

      <button className="sm:flex md:absolute md:right-7">
        <Avatar className=" h-10 w-10 ">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>{user?.username[0]}</AvatarFallback>
        </Avatar>
      </button>
    </div>
  );
};

export default NavBar;
