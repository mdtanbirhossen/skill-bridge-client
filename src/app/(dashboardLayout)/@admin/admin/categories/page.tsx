
import CategoryList from "@/components/categoryList";
import { categoryService } from "@/services/category.service";

const CategoriesListPage = async() => {
    const data = await categoryService.getAllCategories();
    console.log(data)
    return (
        <div>
            <CategoryList categories={data.data.data} />
        </div>
    );
};

export default CategoriesListPage;