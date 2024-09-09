import { ReactNode } from "react";
import SideBarNav from "./components/sidebar-nav";

import {
  IconBrowserCheck,
  IconNotification,
  IconPalette,
  IconTool,
  IconUser,
} from "@tabler/icons-react";

const sidebarNavItems = [
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
      <main className="main-container sm:px-6 lg:px-8">
        <div className="header-title">
          <h1>Settings</h1>
        </div>
        <span className="text-slate-400 text-[16px]">
          Update your account settings.
        </span>

        <hr className="mt-3 mb-7" />
        <div className="flex flex-1 flex-col space-y-8 md:space-y-2 md:overflow-hidden lg:flex-row lg:space-x-12 lg:space-y-0">
          <div className="top-0 lg:sticky lg:w-1/5">
            <SideBarNav items={sidebarNavItems} />
          </div>
          <div className="flex w-full p-1 pr-4 md:overflow-y-hidden">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
