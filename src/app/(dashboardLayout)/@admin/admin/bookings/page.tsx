import { adminService } from "@/services/admin.service";

const BookingsListPage = async () => {
    const data= await adminService.getAllBookings();
    console.log(data)
    return (
        <div>
            this is admin bookings BookingsListPage

        </div>
    );
};

export default BookingsListPage;