import TutorBookingList from "@/components/TutorBookingList";
import { bookingServerService } from "@/services/booking.server.service";

const page = async () => {
    const data = await bookingServerService.getAllBookings();
    return (
        <div>
            <TutorBookingList bookings={data.data.data} />
        </div>
    );
};

export default page;