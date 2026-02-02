import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Availability } from "@/types/availability.types";
import EditAvailabilityDialog from "./EditAvailabilityDialog";

interface AvailabilityListProps {
    availabilities: Availability[];
}

const AvailabilityList = ({ availabilities }: AvailabilityListProps) => {
    return (
        <div className="p-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Day</TableHead>
                        <TableHead>Start</TableHead>
                        <TableHead>End</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {availabilities.map((availability) => (
                        <TableRow key={availability.id}>
                            <TableCell>
                                {availability.id.slice(0, 8)}...
                            </TableCell>
                            <TableCell>{availability.day}</TableCell>
                            <TableCell>{availability.startTime}</TableCell>
                            <TableCell>{availability.endTime}</TableCell>

                            <TableCell>
                                <EditAvailabilityDialog
                                    availability={availability}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default AvailabilityList;
