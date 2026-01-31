import { tutorService } from "@/services/tutor.service";

const TutorPage = async() => {
    const data = await tutorService.getAllTutors();
    console.log("tutors data", data);
    return (
        <div>
            this is tutors page
        </div>
    );
};

export default TutorPage;