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

export const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: <FaHome />, pathName: "/" },
  {
    label: "Transactions",
    icon: <FaMoneyBillWave />,
    pathName: "/transaction",
  },
  { label: "Invoices", icon: <FaFileInvoice />, pathName: "/invoice" },
  { label: "Customers", icon: <FaUsers />, pathName: "/customer" },
  { label: "Discount Programs", icon: <FaTags />, pathName: "/discount" },
  { label: "Reports", icon: <FaChartBar />, pathName: "/report" },
  { label: "Settings", icon: <FaCog />, pathName: "/setting" },
  { label: "Developers", icon: <FaCode />, pathName: "/developer" },
];
