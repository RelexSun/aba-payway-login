"use client";

import { User } from "@/types/constants/user-schema";
import { useActiveUser } from "../../zustand/user-store";

const AppInitializer = ({
  user,
  children,
}: {
  user: User | null;
  children: React.ReactNode;
}) => {
  useActiveUser.setState({
    user,
  });
  return children;
};

export default AppInitializer;
