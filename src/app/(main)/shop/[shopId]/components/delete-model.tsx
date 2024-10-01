import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dialog } from "@radix-ui/react-dialog";

type isOpenProp = {
  isOpenDelete: boolean;
  onCloseDelete: () => void;
  handleDelete: () => void;
};

export const DeleteModel = ({
  isOpenDelete,
  onCloseDelete,
  handleDelete,
}: isOpenProp) => {
  return (
    <Dialog open={isOpenDelete} onOpenChange={onCloseDelete}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this table?</DialogTitle>
          <DialogDescription>
            <span className="text-destructive">
              Are you sure you would like to delete this table of your account?
            </span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button size="sm" variant="secondary" onClick={onCloseDelete}>
            Cancel
          </Button>
          <Button size="sm" variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
