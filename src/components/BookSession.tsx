"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { bookingClientService } from "@/services/booking.client.service";

type BookSessionProps = {
    tutorId: string;
};

const BookSession = ({ tutorId }: BookSessionProps) => {
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [loading, setLoading] = useState(false);

    const handleBookSession = async () => {
        if (!date || !startTime || !endTime) {
            toast.error("Please fill all fields");
            return;
        }

        const payload = {
            tutorId,
            date,
            startTime,
            endTime,
        };

        try {
            setLoading(true);

            // 🔥 API call (replace with your real service)
            const response = await bookingClientService.createBooking(payload);
            console.log("Booking payload:", payload);
            console.log("Booking response:", response);

            toast.success(response.message ||"Session booked successfully!");
        } catch (error) {
            console.error("Booking failed:", error);
            toast.error("Failed to book session");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Book Session</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Book a Session</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    {/* Date */}
                    <div className="space-y-1">
                        <Label>Date</Label>
                        <Input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    {/* Start Time */}
                    <div className="space-y-1">
                        <Label>Start Time</Label>
                        <Input
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />
                    </div>

                    {/* End Time */}
                    <div className="space-y-1">
                        <Label>End Time</Label>
                        <Input
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                        />
                    </div>

                    <Button
                        className="w-full"
                        onClick={handleBookSession}
                        disabled={loading}
                    >
                        {loading ? "Booking..." : "Confirm Booking"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BookSession;
