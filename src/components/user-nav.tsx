"use client";

import { useActiveUser } from "@/zustand/user-store";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { navItem } from "@/types/constants/menuItems";
import { usePathname, useRouter } from "next/navigation";
import { MenuItem } from "@/types/interfaces";
import LogoutModel from "./logout-model";
import { useState } from "react";

const UserNav = () => {
  // const path = usePathname();
  const router = useRouter();
  const handleClick = (item: MenuItem) => {
    router.push(item.pathName);
  };
  const { user } = useActiveUser();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <LogoutModel onClose={() => setIsOpen(false)} isOpen={isOpen} />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className=" h-10 w-10 ">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>{user?.username[0]}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mr-7">
          <DropdownMenuLabel>
            <div className="flex flex-col">
              <div className="mb-1 text-sm leading-none">{user?.username}</div>
              <div className="text-xs text-muted-foreground">{user?.email}</div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {navItem.map((item) => (
            <DropdownMenuItem
              key={item.label}
              onClick={() => handleClick(item)}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{item.label}</span>
              </div>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsOpen(true)}>
            <div>
              <span>Logout</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserNav;
