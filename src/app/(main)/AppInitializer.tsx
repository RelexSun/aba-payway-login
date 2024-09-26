"use client";

import { User } from "@/types/constants/user-schema";
import { useActiveUser } from "../../zustand/user-store";
import { useActiveShop } from "@/zustand/shop-store";
import { GetShopsResponse } from "@/actions/shop/get/schema";

const AppInitializer = ({
  user,
  shop,
  children,
}: {
  user: User | null;
  shop: GetShopsResponse | null;
  children: React.ReactNode;
}) => {
  useActiveUser.setState({
    user,
  });
  useActiveShop.setState({
    shop,
  });
  return children;
};

export default AppInitializer;
