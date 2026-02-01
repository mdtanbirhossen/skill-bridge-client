import { tutorService } from "@/services/tutor.service";

interface TutorDetailsPageProps {
    params: { id: string };
}

const TutorDetailsPage = async ({ params }: TutorDetailsPageProps) => {
    const { id } = await params;
    const data = await tutorService.getTutorById(id);
    console.log(data)
    return (
        <div>
            This is tutor details page for tutor with id: {id}
            {JSON.stringify(data)}
        </div>
    );
};

export default TutorDetailsPage;