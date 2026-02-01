import TutorList from "@/components/TutorList";
import { categoryService } from "@/services/category.service";
import { tutorService } from "@/services/tutor.service";

const TutorPage = async () => {
    const [{ data: tutorRes }, { data: categoryRes }] = await Promise.all([
        tutorService.getAllTutors(),
        categoryService.getAllCategories(),
    ]);

    return (
        <div className="max-w-7xl mx-auto px-2 md:px-5">
            <TutorList
                tutors={tutorRes.data}
                categories={categoryRes.data}
            />
        </div>
    );
};

export default TutorPage;