"use client";

import { TableResponse } from "@/actions/table/schema";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { startTransition, useState } from "react";
import PostModel from "./post-model";
import { IconArrowBack } from "@tabler/icons-react";
import { DeleteModel } from "./delete-model";
import DeleteTable from "@/actions/table/delete";
import { toast } from "sonner";
import { UpdateModel } from "./update-model";
import { useRouter } from "next/navigation";
import { TABLE_STATUS } from "@/common/enum/status-enum";

export default function TableList({
  tables,
  shop_id,
}: {
  tables: TableResponse[] | null;
  shop_id: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [tableId, setTableId] = useState<string | null>();
  const [tableEditId, setTableEditId] = useState<string | null>();
  const [tableStatus, setTableStatus] = useState<TABLE_STATUS>();
  const [t, setT] = useState<TableResponse | null>();
  const router = useRouter();

  const handleDelete = (table_id: string) => {
    startTransition(async () => {
      const input = { shop_id, table_id };
      const { data, error } = await DeleteTable(input);
      if (!data) {
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
        window.location.reload();
      }
    });
  };

  return (
    <>
      <div className="flex justify-between items-center border-b p-10">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push("/shop")}
        >
          <IconArrowBack />
        </Button>
        <h1 className="header-title">Tables</h1>
        <Button size="sm" onClick={() => setIsOpen(true)}>
          Add Table
        </Button>
      </div>
      <div className="table-list">
        {tables?.length !== 0 ? (
          <Table>
            <TableCaption>A list of your shop tables.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="">Number</TableHead>
                <TableHead className="">Status</TableHead>
                <TableHead>Seat Amount</TableHead>
                <TableHead className="sm:w-[150px] text-center"></TableHead>
              </TableRow>
            </TableHeader>
            {tables?.map((table) => (
              <>
                <TableBody key={table.id}>
                  <TableRow>
                    <TableCell className="font-medium">
                      {table.number}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          table.status === "occupied"
                            ? "destructive"
                            : "default"
                        }
                      >
                        {table.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{table.seatAmount}</TableCell>
                    <TableCell className="text-right flex item-center justify-evenly gap-2">
                      <Button
                        size="sm"
                        onClick={() => {
                          setTableEditId(table.id);
                          setIsOpenUpdate(true);
                          setTableStatus(table.status);
                          setT(table);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                          setTableId(table.id);
                          setIsOpenDelete(true);
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </>
            ))}
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">{tables?.length}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        ) : (
          <p>Create Table by clicking Add Table button.</p>
        )}
      </div>
      <PostModel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        id={shop_id}
      />
      <DeleteModel
        isOpenDelete={isOpenDelete}
        onCloseDelete={() => setIsOpenDelete(false)}
        handleDelete={() => handleDelete(tableId as string)}
      />
      {t && (
        <UpdateModel
          isOpenUpdate={isOpenUpdate}
          onCloseUpdate={() => {
            setIsOpenUpdate(false);
            setT(null);
          }}
          shop_id={shop_id}
          table_id={tableEditId as string}
          tableStatus={
            tableStatus as TABLE_STATUS.AVAILABLE | TABLE_STATUS.OCCUPIED
          }
          table={t as TableResponse}
        />
      )}
    </>
  );
}
