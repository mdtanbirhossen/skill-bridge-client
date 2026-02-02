import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Category } from "@/types/category.types";
import EditCategoryDialog from "./EditCategoryDialog";

interface CategoryListProps {
    categories: Category[];
}

const CategoryList = ({ categories }: CategoryListProps) => {

    return (
        <div className="p-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Category ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {categories.map((category) => (
                        <TableRow key={category.id}>
                            <TableCell>{category.id.slice(0, 8)}...</TableCell>
                            <TableCell>{category.name}</TableCell>
                            <TableCell>{category.createdAt}</TableCell>
                            <TableCell className="space-x-2">
                                <EditCategoryDialog
                                    categoryId={category.id}
                                    name={category.name}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default CategoryList;
