"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { adminClientService } from "@/services/admin.client.service";

type UserBanSelectProps = {
  userId: string;
  isBanned: boolean;
};

const UserBanSelect = ({ userId, isBanned }: UserBanSelectProps) => {
  const router = useRouter();

  const handleChange = async (value: string) => {
    const banned = value === "true";

    try {
      const response = await adminClientService.updateUserById(userId, {
        isBanned: banned,
      });

      if (!response.ok) {
        toast.error(response.message || "Failed to update user");
        return;
      }

      toast.success("User status updated");
      router.refresh(); // 🔥 refresh server data
    } catch (error) {
      console.error(error);
      toast.error("Failed to update user");
    }
  };

  return (
    <Select
      defaultValue={String(isBanned)}
      onValueChange={handleChange}
    >
      <SelectTrigger className="w-30">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="false">No</SelectItem>
        <SelectItem value="true">Yes</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default UserBanSelect;
