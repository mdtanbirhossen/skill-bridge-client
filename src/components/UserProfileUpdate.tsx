"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "@/types/user.types";
import { useState } from "react";
import { authClientService } from "@/services/auth.client.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const UserProfileUpdate = ({ user }: { user: User }) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: user.name,
        phone: user.phone || "",
        image: user.image || "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            setLoading(true);
            const res = await authClientService.updateUser(user.id, formData);
            if (!res.ok) {
                toast.error(res.message || "Update failed");
            }
            toast.success("User updated successfully");
            setOpen(false);
            router.refresh();
        } catch {
            toast.error("Update failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm" variant="outline">Edit User</Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit User Profile</DialogTitle>
                </DialogHeader>

                <div className="space-y-3">
                    <Input name="name" value={formData.name} onChange={handleChange} />
                    <Input name="phone" value={formData.phone} onChange={handleChange} />
                    <Input name="image" value={formData.image} onChange={handleChange} />
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpdate} disabled={loading}>
                        {loading ? "Updating..." : "Update"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UserProfileUpdate;
