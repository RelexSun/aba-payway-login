"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaHome,
  FaMoneyBillWave,
  FaFileInvoice,
  FaUsers,
  FaTags,
  FaChartBar,
  FaCog,
} from "react-icons/fa";
import DashboardContent from "./dashboard-content";
import Transactions from "./transaction-content";
import Invoice from "./invoice-content";
import Customers from "./customer-content";
import Discount from "./discount-programs";
import Reports from "./report-content";
import Settings from "./setting";
import { Input } from "@/components/ui/input";

interface MenuItem {
  label: string;
  icon: JSX.Element;
  content: JSX.Element;
}

const AdminDashboard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const menuItems: MenuItem[] = [
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

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex">
      <div className="w-[250px] h-screen side-bar bg-indigo-950 text-slate-400">
        <Image
          src={"/pw-new-logo.svg"}
          alt="logo"
          width={232}
          height={232}
          className=" ml-1"
        />
        <nav className="w-full mt-3">
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`py-4 px-3 flex items-center gap-3 transition-colors cursor-pointer ${
                  activeIndex === index
                    ? "bg-indigo-950 text-white border-l-4  border-cyan-500"
                    : "hover:bg-indigo-950 hover:text-white"
                }`}
                onClick={() => handleClick(index)}
              >
                <span
                  className={`pl-6 ${
                    activeIndex === index ? "text-cyan-500" : ""
                  }`}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="w-4/5">
        <Input className="w-full" />
        <div className="m-10">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`${
                activeIndex === index ? " inline-block" : "hidden"
              }`}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
