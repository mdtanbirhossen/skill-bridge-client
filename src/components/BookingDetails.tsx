"use client";

import { Booking } from "@/types/booking.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const BookingDetails = ({ booking }: { booking: Booking }) => {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            {/* Booking Info */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>Booking Details</span>
                        <Badge variant="outline">{booking.status}</Badge>
                    </CardTitle>
                </CardHeader>

                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-muted-foreground">Booking ID</p>
                        <p className="font-medium">{booking.id}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">Date</p>
                        <p className="font-medium">
                            {new Date(booking.date).toLocaleDateString()}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">Time</p>
                        <p className="font-medium">
                            {booking.startTime} – {booking.endTime}
                        </p>
                    </div>

                    <div>
                        <p className="text-muted-foreground">Created At</p>
                        <p className="font-medium">
                            {new Date(booking.createdAt).toLocaleString()}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Student Info */}
            <Card>
                <CardHeader>
                    <CardTitle>Student Information</CardTitle>
                </CardHeader>

                <CardContent className="flex items-center gap-4">
                    {booking.student?.image && (
                        <Image
                            src={booking.student.image}
                            alt={booking.student.name}
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                    )}

                    <div>
                        <p className="font-medium">{booking.student?.name}</p>
                        <p className="text-sm text-muted-foreground">
                            {booking.student?.email}
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Tutor Info */}
            <Card>
                <CardHeader>
                    <CardTitle>Tutor Information</CardTitle>
                </CardHeader>

                <CardContent className="space-y-3 text-sm">
                    <div className="flex items-center gap-4">
                        {booking.tutor?.user?.image && (
                            <Image
                                src={booking.tutor?.user.image}
                                alt={booking.tutor?.user.name}
                                width={60}
                                height={60}
                                className="rounded-full"
                            />
                        )}

                        <div>
                            <p className="font-medium">{booking.tutor?.user?.name}</p>
                            <p className="text-sm text-muted-foreground">
                                {booking.tutor?.user?.email}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-muted-foreground">Bio</p>
                        <p>{booking.tutor?.bio}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-muted-foreground">Hourly Rate</p>
                            <p className="font-medium">${booking.tutor?.hourlyRate}/hr</p>
                        </div>

                        <div>
                            <p className="text-muted-foreground">Experience</p>
                            <p className="font-medium">
                                {booking.tutor?.experience} years
                            </p>
                        </div>

                        <div>
                            <p className="text-muted-foreground">Rating</p>
                            <p className="font-medium">{booking.tutor?.rating} ⭐</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-muted-foreground">Subjects</p>
                        <div className="flex gap-2 flex-wrap mt-1">
                            {booking.tutor?.subjects?.map((subject) => (
                                <Badge key={subject} variant="secondary">
                                    {subject}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default BookingDetails;
