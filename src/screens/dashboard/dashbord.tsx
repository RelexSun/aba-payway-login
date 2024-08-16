"use client";

import BurgerMenu from "@/components/burger";
import { menuItems } from "../../types/constants/menuItems";
import { useActiveMenuStore } from "@/zustand/sidebar-store";

const AdminDashboard: React.FC = () => {
  const { activeIndex } = useActiveMenuStore();
  return (
    <>
      <div className="absolute bg-white w-full top-0 border z-10 h-16">
        <div className="md:hidden">
          <BurgerMenu />
        </div>
      </div>

      <div className="pt-20 w-full flex flex-col md:pl-64 mb-5">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`${activeIndex === index ? " inline-block" : "hidden"}`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminDashboard;
