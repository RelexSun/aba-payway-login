"use client";

import logout from "@/actions/logout";

import { ROUTES } from "@/common/constants/routes";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { useActiveUser } from "@/zustand/user-store";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const Settings = () => {
  const { user } = useActiveUser();
  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  const onSubmit = () => {
    logout();
    router.push(ROUTES.LOGIN);
  };

  return (
    <div>
      {toggle && (
        <div
          className={`bg-slate-500/50 w-screen fixed inset-0 z-30 `}
          onClick={() => setToggle(false)}
        ></div>
      )}
      {toggle && (
        <div className="absolute z-40">
          <Card>
            <CardHeader>Confirm</CardHeader>
            <div>
              <Button variant={"destructive"} onClick={() => onSubmit()}>
                Confirm
              </Button>
              <Button variant={"outline"} onClick={() => setToggle(false)}>
                Cancel
              </Button>
            </div>
          </Card>
        </div>
      )}
      <div>
        <Button
          onClick={() => {
            setToggle(true);
          }}
        >
          Logout
        </Button>
      </div>
      <span>{user?.email}</span>
    </div>
  );
};

export default Settings;
