import { MenuItem } from "../interfaces";
import {
  FaChartBar,
  FaCog,
  FaFileInvoice,
  FaHome,
  FaMoneyBillWave,
  FaTags,
  FaUsers,
} from "react-icons/fa";
import DashboardContent from "@/screens/dashboard/dashboard-content";
import Transactions from "@/screens/dashboard/transaction-content";
import Invoice from "@/screens/dashboard/invoice-content";
import Customers from "@/screens/dashboard/customer-content";
import Discount from "@/screens/dashboard/discount-programs";
import Reports from "@/screens/dashboard/report-content";
import Settings from "@/screens/dashboard/setting";

export const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: <FaHome />, content: <DashboardContent /> },
  {
    label: "Transactions",
    icon: <FaMoneyBillWave />,
    content: <Transactions />,
  },
  { label: "Invoices", icon: <FaFileInvoice />, content: <Invoice /> },
  { label: "Customers", icon: <FaUsers />, content: <Customers /> },
  { label: "Discount Programs", icon: <FaTags />, content: <Discount /> },
  { label: "Reports", icon: <FaChartBar />, content: <Reports /> },
  { label: "Settings", icon: <FaCog />, content: <Settings /> },
];
