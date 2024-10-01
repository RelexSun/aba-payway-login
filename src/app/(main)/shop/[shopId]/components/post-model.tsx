import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { startTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TableInput, tableInputSchema } from "@/actions/table/schema";
import { Input } from "@/components/ui/input";
import PostTable from "@/actions/table/post";
import { toast } from "sonner";
import { TABLE_STATUS } from "@/common/enum/status-enum";

type isOpenProp = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
};

export default function PostModel({ isOpen, onClose, id }: isOpenProp) {
  const form = useForm<TableInput>({
    resolver: zodResolver(tableInputSchema),
    defaultValues: {
      status: TABLE_STATUS.AVAILABLE,
    },
  });
  const onSubmit: SubmitHandler<TableInput> = (input) => {
    startTransition(async () => {
      const value = { ...input, shop_id: id };
      const { data, error } = await PostTable(value);
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
    <Dialog open={isOpen} onOpenChange={onClose}>
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
}
