import { deleteShop } from "@/actions/shop/delete";
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
  isOpen: boolean;
  onClose: () => void;
  handleDelete: () => void;
};

export const DeleteModel = ({ isOpen, onClose, handleDelete }: isOpenProp) => {
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
        <DialogFooter>
          <Button size="sm" variant="secondary" onClick={onClose}>
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
