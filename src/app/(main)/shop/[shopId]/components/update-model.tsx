import { TableEditInput, tableInputUpdateSchema } from "@/actions/table/schema";
import UpdateTable from "@/actions/table/update";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, SubmitHandler } from "react-hook-form";
import { startTransition } from "react";
import { Input } from "@/components/ui/input";
import { TABLE_STATUS } from "@/common/enum/status-enum";
import { toast } from "sonner";

type isOpenProp = {
  isOpenUpdate: boolean;
  onCloseUpdate: () => void;
  shop_id: string;
  table_id: string;
  tableStatus: TABLE_STATUS.AVAILABLE | TABLE_STATUS.OCCUPIED;
};

export const UpdateModel = ({
  isOpenUpdate,
  onCloseUpdate,
  shop_id,
  table_id,
  tableStatus,
}: isOpenProp) => {
  const form = useForm<TableEditInput>({
    resolver: zodResolver(tableInputUpdateSchema),
  });
  const handleUpdate: SubmitHandler<TableEditInput> = (input) => {
    startTransition(async () => {
      const route = { shop_id, table_id };
      const { data, error } = await UpdateTable(route, input);
      if (!data) {
        toast.error(error?.message, {
          position: "top-right",
          style: {
            fontSize: "11pt",
          },
        });
      } else {
        toast.success(`Create success!`, {
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
    <Dialog open={isOpenUpdate} onOpenChange={onCloseUpdate}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this shop?</DialogTitle>
          <DialogDescription>
            <span className="text-destructive">
              Are you sure you would like to delete this shop of your account?
            </span>
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleUpdate)}
            className="space-y-3"
          >
            <div>
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-400 text-[12px]">
                      Table number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="seatAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-400 text-[12px]">
                      Seat Amount
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=""
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[14px]">Status</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        defaultValue={tableStatus}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value={TABLE_STATUS.AVAILABLE}>
                              {TABLE_STATUS.AVAILABLE}
                            </SelectItem>
                            <SelectItem value={TABLE_STATUS.OCCUPIED}>
                              {TABLE_STATUS.OCCUPIED}
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button size="sm" variant="default">
                Confirm
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
