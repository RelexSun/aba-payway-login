import { Separator } from "@/components/ui/separator";
import SideBarNav from "./components/sidebar-nav";

import {
  IconBrowserCheck,
  IconNotification,
  IconPalette,
  IconTool,
  IconUser,
} from "@tabler/icons-react";

export const sidebarNavItems = [
  {
    title: "Profile",
    icon: <IconUser size={18} />,
    href: "/settings",
  },
  {
    title: "Account",
    icon: <IconTool size={18} />,
    href: "/settings/account",
  },
  {
    title: "Appearance",
    icon: <IconPalette size={18} />,
    href: "/settings/appearance",
  },
  {
    title: "Notifications",
    icon: <IconNotification size={18} />,
    href: "/settings/notifications",
  },
  {
    title: "Display",
    icon: <IconBrowserCheck size={18} />,
    href: "/settings/display",
  },
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="main-container sm:px-6 lg:px-8 max-w-[1200px] relative ">
        <div className="  border-b">
          <div className="pt-4 p-3 bg-white w-full pb-6">
            <div className="header-title">
              <h1>Settings</h1>
            </div>
            <span className="text-slate-400 text-[16px]">
              Update your account settings.
            </span>
          </div>
        </div>
        <div className="flex flex-1 gap-4 flex-col space-y-8 md:space-y-2 md:overflow-hidden lg:flex-row lg:space-x-12 lg:space-y-0">
          <div className="top-0 lg:sticky lg:w-1/5 pt-5">
            <SideBarNav items={sidebarNavItems} />
          </div>
          <div className="flex w-full p-1 pr-4 md:overflow-y-hidden ">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
