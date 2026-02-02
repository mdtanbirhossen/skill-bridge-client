"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
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
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { availabilityClientService } from "@/services/availability.client.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CreateAvailabilityPayload, WeekDay } from "@/types/availability.types";

// array of WeekDay values for the select
const weekdays: WeekDay[] = [
    WeekDay.MONDAY,
    WeekDay.TUESDAY,
    WeekDay.WEDNESDAY,
    WeekDay.THURSDAY,
    WeekDay.FRIDAY,
    WeekDay.SATURDAY,
    WeekDay.SUNDAY,
];

const CreateAvailability = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState<CreateAvailabilityPayload>({
        day: WeekDay.MONDAY,
        startTime: "",
        endTime: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDayChange = (value: string) => {
        // cast string to WeekDay enum
        setFormData({
            ...formData,
            day: value as WeekDay,
        });
    };

    const handleCreate = async () => {
        if (!formData.day || !formData.startTime || !formData.endTime) {
            toast.error("All fields are required");
            return;
        }

        try {
            setLoading(true);

            const res = await availabilityClientService.createAvailability(formData);
            console.log(res)

            if (!res.ok) {
                toast.error(res.message || "Failed to create availability");
                return
            }
            toast.success("Availability created");
            setOpen(false);

            // reset form
            setFormData({
                day: WeekDay.MONDAY,
                startTime: "",
                endTime: "",
            });

            router.refresh(); // refresh server component
        } catch (error) {
            console.error(error);
            toast.error("Failed to create availability");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-between items-center px-4 mb-4">
            <div className="text-2xl font-bold">Availability List</div>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button className="cursor-pointer flex items-center justify-center gap-2 p-1 sm:pl-3 font-bold bg-purple-500 rounded-full text-white">
                        <span className="hidden sm:flex">Add Time Slot</span>
                        <span className="bg-purple-700 p-1 rounded-full">
                            <Plus />
                        </span>
                    </button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create Availability</DialogTitle>
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
                                        {day.charAt(0) + day.slice(1).toLowerCase()} {/* nice display */}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {/* Start Time */}
                        <Input
                            type="time"
                            name="startTime"
                            placeholder="Start Time"
                            value={formData.startTime}
                            onChange={handleInputChange}
                        />

                        {/* End Time */}
                        <Input
                            type="time"
                            name="endTime"
                            placeholder="End Time"
                            value={formData.endTime}
                            onChange={handleInputChange}
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
                        <Button onClick={handleCreate} disabled={loading}>
                            {loading ? "Creating..." : "Create"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CreateAvailability;
