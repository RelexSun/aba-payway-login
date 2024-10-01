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
import Link from "next/link";

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
      <div className="grid sm:grid-cols-2 grid-cols-1  lg:grid-cols-3 gap-2 px-4">
        {shop?.length !== 0 ? (
          shop?.map((item) => (
            <>
              <Card key={item.id} className="relative">
                <Link href={`shop/${item.id}`}>
                  <AspectRatio ratio={3 / 2}>
                    <Image
                      src=""
                      alt="Image"
                      className="rounded-md object-cover"
                      fill={true}
                    />
                  </AspectRatio>
                  <CardContent>
                    <div className="">{item.name}</div>
                  </CardContent>
                  <CardFooter>{item.location}</CardFooter>
                </Link>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => {
                    setShop_id(item.id);
                    setIsOpen(true);
                  }}
                  className="absolute bottom-10 right-10"
                >
                  <IconTrash />
                </Button>
              </Card>
            </>
          ))
        ) : (
          <p>Create Shop by clicking Add Shop button.</p>
        )}
      </div>
      <DeleteModel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleDelete={() => handleDelete(shop_id as string)}
      />
    </>
  );
};
