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
import { Availability, WeekDay } from "@/types/availability.types";
import { useState } from "react";
import { availabilityClientService } from "@/services/availability.client.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

interface Props {
    availability: Availability;
}

const weekdays: WeekDay[] = [
    WeekDay.MONDAY,
    WeekDay.TUESDAY,
    WeekDay.WEDNESDAY,
    WeekDay.THURSDAY,
    WeekDay.FRIDAY,
    WeekDay.SATURDAY,
    WeekDay.SUNDAY,
];

const EditAvailabilityDialog = ({ availability }: Props) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        day: availability.day,
        startTime: availability.startTime,
        endTime: availability.endTime,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDayChange = (value: string) => {
        setFormData({
            ...formData,
            day: value as WeekDay,
        });
    };

    const handleUpdate = async () => {
        if (!formData.day || !formData.startTime || !formData.endTime) {
            toast.error("All fields are required");
            return;
        }

        try {
            setLoading(true);

            await availabilityClientService.updateAvailabilityById(
                availability.id,
                formData
            );

            toast.success("Availability updated");
            setOpen(false);

            router.refresh(); // Refresh server component
        } catch (error) {
            console.error(error);
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
                    {/* Weekday select */}
                    <Select value={formData.day} onValueChange={handleDayChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Day" />
                        </SelectTrigger>
                        <SelectContent>
                            {weekdays.map((day) => (
                                <SelectItem key={day} value={day}>
                                    {day.charAt(0) + day.slice(1).toLowerCase()} {/* nicer display */}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Start Time */}
                    <Input
                        type="time"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleInputChange}
                        placeholder="Start Time"
                    />

                    {/* End Time */}
                    <Input
                        type="time"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleInputChange}
                        placeholder="End Time"
                    />
                </div>

                <DialogFooter className="flex gap-2">
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
