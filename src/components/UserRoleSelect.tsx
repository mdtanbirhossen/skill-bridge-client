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
import { Role } from "@/types/user.types";

type UserRoleSelectProps = {
  userId: string;
  role: Role;
};

const UserRoleSelect = ({ userId, role }: UserRoleSelectProps) => {
  const router = useRouter();

  const handleChange = async (value: Role) => {
    try {
      const response = await adminClientService.updateUserById(userId, {
        role: value,
      });

      if (!response.ok) {
        toast.error(response.message || "Failed to update role");
        return;
      }

      toast.success("User role updated");
      router.refresh(); // 🔄 refresh server data
    } catch (error) {
      console.error(error);
      toast.error("Failed to update role");
    }
  };

  return (
    <Select
      defaultValue={role}
      onValueChange={(value) => handleChange(value as Role)}
    >
      <SelectTrigger className="w-[140px]">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="ADMIN">ADMIN</SelectItem>
        <SelectItem value="TUTOR">TUTOR</SelectItem>
        <SelectItem value="STUDENT">STUDENT</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default UserRoleSelect;
