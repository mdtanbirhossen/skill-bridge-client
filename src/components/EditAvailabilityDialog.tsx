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
import { Edit } from "lucide-react";
import { Availability } from "@/types/availability.types";
import { useState } from "react";
import { availabilityClientService } from "@/services/availability.client.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Props {
    availability: Availability;
}

const EditAvailabilityDialog = ({ availability }: Props) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        day: availability.day,
        startTime: availability.startTime,
        endTime: availability.endTime,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async () => {
        try {
            setLoading(true);

            await availabilityClientService.updateAvailabilityById(
                availability.id,
                formData,
            );

            toast.success("Availability updated");
            setOpen(false);

            // Refresh server component data
            router.refresh();
        } catch (error) {
            toast.error("Update failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Availability</DialogTitle>
                </DialogHeader>

                <div className="space-y-3">
                    <Input
                        name="day"
                        value={formData.day}
                        onChange={handleChange}
                        placeholder="Day"
                    />
                    <Input
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                        placeholder="Start Time"
                    />
                    <Input
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleChange}
                        placeholder="End Time"
                    />
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => setOpen(false)}
                        disabled={loading}
                    >
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

export default EditAvailabilityDialog;
