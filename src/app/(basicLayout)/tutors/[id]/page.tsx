import TutorDetails from "@/components/TutorDetails";
import { tutorService } from "@/services/tutor.service";

interface TutorDetailsPageProps {
    params: Promise<{ id: string }>;
}

const TutorDetailsPage = async ({ params }: TutorDetailsPageProps) => {
    const { id } = await params;
    const data = await tutorService.getTutorById(id);
    return (
        <div className="max-w-7xl mx-auto px-2 md:px-5 mt-5">
            <TutorDetails tutor={data.data} />
        </div>
    );
};

export default TutorDetailsPage;