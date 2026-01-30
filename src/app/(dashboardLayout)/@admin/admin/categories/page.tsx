import { adminService } from "@/services/admin.service";

const CategoriesListPage = async() => {
    const data = await adminService.getAllCategories();
    console.log(data)
    return (
        <div>
            this is admin categories page
        </div>
    );
};

export default CategoriesListPage;