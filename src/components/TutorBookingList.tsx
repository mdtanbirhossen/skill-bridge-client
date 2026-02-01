"use client";

import { Booking, BOOKING_STATUSES } from "@/types/booking.types";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "./ui/button";
import { Edit, Eye } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { bookingClientService } from "@/services/booking.client.service";
import { toast } from "sonner";
import Link from "next/link";

interface TutorBookingListProps {
    bookings: Booking[];
}

const TutorBookingList = ({ bookings }: TutorBookingListProps) => {
    const handleStatusChange = async (
        bookingId: string,
        status: string
    ) => {
        try {
            //   await updateBookingStatus(bookingId, status);
            const response = await bookingClientService.updateBookingStatus(bookingId, status);
            console.log(response);
            if (!response.ok) {
                toast.error(response.message || "Failed to update status");
                return;
            }

            toast.success(response.message || "Status updated successfully");
        } catch (error) {
            console.error(error);
            optional: toast.error("Failed to update status")
        }
    };

    return (
        <div className="p-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Booking ID</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Student</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {bookings.map((booking) => (
                        <TableRow key={booking.id}>
                            <TableCell>{booking.id.slice(0, 8)}...</TableCell>

                            {/* ✅ STATUS DROPDOWN */}
                            <TableCell>
                                <Select
                                    defaultValue={booking.status}
                                    onValueChange={(value) =>
                                        handleStatusChange(booking.id, value)
                                    }
                                >
                                    <SelectTrigger className="w-35">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {BOOKING_STATUSES.map((status) => (
                                            <SelectItem key={status} value={status}>
                                                {status}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </TableCell>

                            <TableCell>
                                {new Date(booking.date).toLocaleDateString()}
                            </TableCell>

                            <TableCell>
                                {booking.startTime} - {booking.endTime}
                            </TableCell>

                            {/* Student */}
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    {booking.student?.image && (
                                        <Image
                                            src={booking.student.image}
                                            alt={booking.student.name}
                                            width={30}
                                            height={30}
                                            className="rounded-full"
                                        />
                                    )}
                                    <span>{booking.student?.name}</span>
                                </div>
                            </TableCell>

                            <TableCell className="space-x-2">
                                <Link href={`/tutor/teaching-sessions/${booking.id}`}>
                                    <Button size="sm">
                                        <Eye />
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TutorBookingList;
