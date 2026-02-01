import StudentBookingList from "@/components/StudentBookingList";
import { bookingServerService } from "@/services/booking.server.service";

const StudentBookingsPage = async() => {
    const data = await bookingServerService.getAllBookings();
    return (
        <div>
            <StudentBookingList bookings={data.data.data} />

        </div>
    );
};

export default StudentBookingsPage
    ;