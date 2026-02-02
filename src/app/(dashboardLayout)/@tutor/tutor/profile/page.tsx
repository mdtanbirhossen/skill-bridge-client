import UserProfile from "@/components/UserProfile";
import { authServerService } from "@/services/auth.server.service";
import { categoryService } from "@/services/category.service";

const TutorProfilePage = async() => {
    const {data} = await authServerService.getMe()
    const {data:categoryRes} = await categoryService.getAllCategories()
    console.log(data.data)
    return (
        <div>
            <UserProfile user={data.data} categories={categoryRes.data} />
        </div>
    );
};

export default TutorProfilePage;