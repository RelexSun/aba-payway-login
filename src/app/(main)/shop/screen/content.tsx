"use client";

import { Button } from "@/components/ui/button";
import { IconArrowBack } from "@tabler/icons-react";
import { useState } from "react";
import ShopForm from "../components/form";
import { CardShop } from "../components/card-shop";

export default function Shops() {
  const [active, setActive] = useState(true);
  return (
    <>
      <div className="flex justify-between items-center border-b p-10">
        <h1 className="header-title">Shops</h1>
        <Button size="sm" onClick={() => setActive(false)}>
          Add Shop
        </Button>
      </div>
      {active ? (
        <CardShop />
      ) : (
        <div>
          <Button onClick={() => setActive(true)} variant="outline" size="sm">
            <IconArrowBack />
          </Button>
          <ShopForm />
        </div>
      )}
    </>
  );
}
