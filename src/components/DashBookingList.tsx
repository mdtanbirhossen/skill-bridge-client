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
import { Button } from "./ui/button";
import {  Eye, Star } from "lucide-react";
import Link from "next/link";
import AddReviewDialog from "./AddReviewDialog";
import { useAuth } from "@/context/AuthContext";
import { Role } from "@/types/user.types";

interface DashBookingListProps {
    bookings: Booking[];
}

const DashBookingList = ({ bookings }: DashBookingListProps) => {
    const { user } = useAuth()
    return (

        <div className="p-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Booking ID</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Tutor</TableHead>
                        <TableHead>Subjects</TableHead>
                        <TableHead>Review</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bookings.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={8} className="text-center py-10 text-muted-foreground">
                                No booking data found
                            </TableCell>
                        </TableRow>
                    ) : (
                        bookings.map((booking) => (
                            <TableRow key={booking.id}>
                                <TableCell>{booking.id.slice(0, 8)}...</TableCell>

                                <TableCell>{booking.status}</TableCell>

                                <TableCell>
                                    {new Date(booking.date).toLocaleDateString()}
                                </TableCell>

                                <TableCell>
                                    {booking.startTime} - {booking.endTime}
                                </TableCell>

                                <TableCell className="flex items-center gap-2">
                                    {booking?.tutor?.user?.image && (
                                        <Image
                                            src={booking.tutor.user.image}
                                            alt={booking.tutor.user.name}
                                            width={30}
                                            height={30}
                                            className="rounded-full"
                                        />
                                    )}
                                    <span>{booking?.tutor?.user?.name}</span>
                                </TableCell>

                                <TableCell>
                                    {booking?.tutor?.subjects.join(", ")}
                                </TableCell>

                                <TableCell>
                                    {booking.status === "COMPLETED" ? (
                                        booking.review ? (
                                            <span className="flex items-center">
                                                Reviewed: {booking.review.rating}
                                                <Star className="ml-1 fill-yellow-400 text-yellow-400" />
                                            </span>
                                        ) : (
                                            <AddReviewDialog
                                                tutorId={booking?.tutor?.id as string}
                                                bookingId={booking.id}
                                            />
                                        )
                                    ) : (
                                        <span>N/A</span>
                                    )}
                                </TableCell>

                                <TableCell>
                                    {user?.role === Role.STUDENT ? (
                                        <Link href={`/dashboard/bookings/${booking.id}`}>
                                            <Button size="sm">
                                                <Eye />
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Link href={`/tutor/bookings/${booking.id}`}>
                                            <Button size="sm">
                                                <Eye />
                                            </Button>
                                        </Link>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default DashBookingList;
