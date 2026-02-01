import { tutorService } from "@/services/tutor.service";
import { TutorCard } from "./TutorCard";
import { Tutor } from "@/types/tutor.types";

const FeaturedTutors = async () => {
    const data = await tutorService.getAllTutors({ limit: 6 })
    return (
        <div className=" py-10">
            <h2 className="text-3xl font-bold mb-4">Featured Tutors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {data?.data?.data?.map((tutor: Tutor) => <TutorCard key={tutor.id} tutor={tutor} />)}
            </div>
        </div>
    );
};

export default FeaturedTutors;