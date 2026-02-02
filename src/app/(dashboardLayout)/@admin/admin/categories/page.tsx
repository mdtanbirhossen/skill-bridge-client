
import CategoryList from "@/components/categoryList";
import CreateCategoryDialog from "@/components/CreateCategoryDialog";
import { categoryService } from "@/services/category.service";

const CategoriesListPage = async() => {
    const data = await categoryService.getAllCategories();
    console.log(data)
    return (
        <div>
            <CreateCategoryDialog />
            <CategoryList categories={data.data.data} />
        </div>
    );
};

export default CategoriesListPage;