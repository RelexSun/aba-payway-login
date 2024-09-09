"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SideBarNavProps {
  items: {
    href: string;
    title: string;
    icon: JSX.Element;
  }[];
}

const SideBarNav = ({ items }: SideBarNavProps) => {
  const pathName = usePathname();

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost", size: "custom" }),
            pathName === item.href
              ? "bg-slate-200 hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          <span className="mr-2">{item.icon}</span>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default SideBarNav;
