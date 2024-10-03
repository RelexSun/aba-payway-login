import { MenuItem } from "../interfaces";
import {
  FaChartBar,
  FaCog,
  FaFileInvoice,
  FaHome,
  FaMoneyBillWave,
  FaTags,
  FaUsers,
  FaCode,
} from "react-icons/fa";
import {
  IconBrowserCheck,
  IconNotification,
  IconPalette,
  IconTool,
  IconUser,
} from "@tabler/icons-react";

export const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: <FaHome />, pathName: "/" },
  {
    label: "Shop",
    icon: <FaMoneyBillWave />,
    pathName: "/shop",
  },
  { label: "Invoices", icon: <FaFileInvoice />, pathName: "/invoice" },
  { label: "Customers", icon: <FaUsers />, pathName: "/customer" },
  { label: "Discount Programs", icon: <FaTags />, pathName: "/discount" },
  { label: "Reports", icon: <FaChartBar />, pathName: "/report" },
  { label: "Settings", icon: <FaCog />, pathName: "/settings" },
  { label: "Developers", icon: <FaCode />, pathName: "/developer" },
];

export const navItem: MenuItem[] = [
  { label: "Settings", icon: <FaCog />, pathName: "/settings" },
  { label: "My Account", icon: <FaUsers />, pathName: "/account" },
];

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
