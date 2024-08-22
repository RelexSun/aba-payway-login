import logout from "@/actions/logout";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { useRouter } from "next/navigation";

type isOpenProp = {
  isOpen: boolean;
  onClose: () => void;
};

const LogoutModel = ({ isOpen, onClose }: isOpenProp) => {
  const router = useRouter();
  const onLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to logout?</DialogTitle>
          <DialogDescription>
            <span className="text-destructive">
              Are you sure you would like to logout of your account?
            </span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button size="sm" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button size="sm" variant="destructive" onClick={onLogout}>
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutModel;
