
import { categoryService } from "@/services/category.service";

const CategoriesListPage = async() => {
    const data = await categoryService.getAllCategories();
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default CategoriesListPage;