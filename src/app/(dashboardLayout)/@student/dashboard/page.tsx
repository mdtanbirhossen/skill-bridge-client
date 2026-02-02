import { statisticsService } from "@/services/statistics.service";
import DashboardStats, { StatItem } from "@/components/DashboardStats";
import { bookingServerService } from "@/services/booking.server.service";
import { Booking, BookingStatus } from "@/types/booking.types";
import DashBookingList from "@/components/DashBookingList";

const StudentDashboardPage = async () => {
    const studentStats = await statisticsService.getStudentStats();
    const bookingRes = await bookingServerService.getAllBookings();
    const upcomingBookings = bookingRes?.data?.data?.filter((booking: Booking) => booking.status === BookingStatus.CONFIRMED)
    console.log(studentStats)
    const stats: StatItem[] = [
        { title: "Total Bookings", value: studentStats.data?.data?.totalBookings || 0 },
        { title: "Upcoming Sessions", value: studentStats.data?.data?.upcomingBookings || 0 },
        { title: "Completed Sessions", value: studentStats.data?.data?.completedBookings || 0 },
        { title: "Cancelled Sessions", value: studentStats.data?.data?.cancelledBookings || 0 },
    ];

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold">Student Dashboard</h1>
            <DashboardStats stats={stats} />
            <DashBookingList bookings={upcomingBookings} />
        </div>
    );
};

export default StudentDashboardPage;
