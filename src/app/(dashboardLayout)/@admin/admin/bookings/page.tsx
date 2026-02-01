
import AdminBookingList from "@/components/AdminBookingList";
import { bookingServerService } from "@/services/booking.server.service";

const BookingsListPage = async () => {
    const data = await bookingServerService.getAllBookings();
    return (
        <div>
            <AdminBookingList bookings={data.data.data} />

        </div>
    );
};

export default BookingsListPage;