"use client"

import { Booking } from "@/types/booking.types";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";

interface AdminBookingListProps {
    bookings: Booking[];
}

const AdminBookingList = ({ bookings }: AdminBookingListProps) => {
    console.log(bookings[0].tutor)
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
                        <TableHead>Tutor</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bookings.map((booking) => (
                        <TableRow key={booking.id}>
                            <TableCell>{booking.id.slice(0, 8)}...</TableCell>
                            <TableCell>{booking.status}</TableCell>
                            <TableCell>{new Date(booking.date).toLocaleDateString()}</TableCell>
                            <TableCell>
                                {booking.startTime} - {booking.endTime}
                            </TableCell>
                            <TableCell className="">
                                {booking?.student?.image && (
                                    <Image
                                        src={booking.student.image}
                                        alt={booking.student.name}
                                        width={30}
                                        height={30}
                                        className="rounded-full"
                                    />
                                )}
                                <span>{booking?.student?.name}</span>
                            </TableCell>
                            <TableCell className="">
                                {/* <span>{booking?.tutor?.userId}</span> */}
                                <span className="text-xs text-gray-500">
                                    {booking?.tutor?.user?.image && (
                                        <Image
                                            src={booking.tutor?.user?.image}
                                            alt={booking.tutor?.user?.name}
                                            width={30}
                                            height={30}
                                            className="rounded-full"
                                        />
                                    )}
                                    <span>{booking?.tutor?.user?.name}</span>
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default AdminBookingList;
