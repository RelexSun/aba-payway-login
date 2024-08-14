"use client";

import { menuItems } from "../../types/constants/menuItems";
import { useActiveMenuStore } from "@/zustand/sidebar-store";

const AdminDashboard: React.FC = () => {
  const { activeIndex } = useActiveMenuStore();
  return (
    <div className="flex">
      <div className="w-4/5">
        <div className="m-7">
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
