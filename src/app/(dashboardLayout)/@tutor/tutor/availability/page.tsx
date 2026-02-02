import AvailabilityList from "@/components/AvailabilityList";
import CreateAvailability from "@/components/CreateAvailability";
import { availabilityServerService } from "@/services/availability.server.service";

const TutorAvailabilityPage = async() => {
const data = await availabilityServerService.getMyAvailability()
console.log(data)
    return (
        <div>
            <CreateAvailability/>
            <AvailabilityList availabilities={data.data.data} />
        </div>
    );
};

export default TutorAvailabilityPage;