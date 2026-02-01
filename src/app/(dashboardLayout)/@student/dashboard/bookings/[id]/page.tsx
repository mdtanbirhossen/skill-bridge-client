import BookingDetails from "@/components/BookingDetails";
import { bookingServerService } from "@/services/booking.server.service";

const StudentBookingDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    console.log(id)
    const data = await bookingServerService.getBookingById(id);
    console.log(data)
    return (
        <div>
            <BookingDetails booking={data.data.data} />
        </div>
    );
};

export default StudentBookingDetailsPage;