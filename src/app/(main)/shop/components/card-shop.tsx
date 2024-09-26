"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useActiveShop } from "@/zustand/shop-store";
import { IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import { DeleteModel } from "./delete-model";
import { startTransition } from "react";
import { useActiveUser } from "@/zustand/user-store";
import { deleteShop } from "@/actions/shop/delete";
import { toast } from "sonner";

export const CardShop = () => {
  const { shop } = useActiveShop();
  const [isOpen, setIsOpen] = useState(false);
  const [shop_id, setShop_id] = useState<string | null>(null);
  const { user } = useActiveUser();

  const handleDelete = (item_id: string) => {
    if (!user?.id) {
      return;
    }
    startTransition(async () => {
      const { user_id, error } = await deleteShop(user.id, item_id);
      if (!user_id) {
        toast.error(error?.message, {
          position: "top-right",
          style: {
            fontSize: "11pt",
          },
        });
      } else {
        toast.success(`Delete success!`, {
          position: "top-right",
          style: {
            fontSize: "11pt",
          },
        });
        setIsOpen(false);
        window.location.reload();
      }
    });
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2 px-4">
        {shop?.map((item) => (
          <>
            <Card key={item.id}>
              <AspectRatio ratio={3 / 2}>
                {/* <Image
                  src={item.img_url}
                  alt="Image"
                  className="rounded-md object-cover"
                  fill={true}
                /> */}
              </AspectRatio>
              <CardContent>
                <div className="flex justify-between items-center">
                  {item.name}
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => {
                      setShop_id(item.id);
                      setIsOpen(true);
                    }}
                  >
                    <IconTrash />
                  </Button>
                </div>
              </CardContent>
              <CardFooter>{item.location}</CardFooter>
            </Card>
          </>
        ))}
      </div>
      <DeleteModel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleDelete={() => handleDelete(shop_id as string)}
      />
    </>
  );
};
