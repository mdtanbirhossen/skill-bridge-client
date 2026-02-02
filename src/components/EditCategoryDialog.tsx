"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { categoryClientService } from "@/services/category.client.service";
import { Edit } from "lucide-react";

type EditCategoryDialogProps = {
  categoryId: string;
  name: string;
};

const EditCategoryDialog = ({ categoryId, name }: EditCategoryDialogProps) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState(name);
  const [loading, setLoading] = useState(false);

  const handleUpdateCategory = async () => {
    if (!categoryName.trim()) {
      toast.error("Category name is required");
      return;
    }

    try {
      setLoading(true);

      const response = await categoryClientService.updateCategoryById(
        categoryId,
        { name: categoryName }
      );

      if (!response.ok) {
        toast.error(response.message || "Failed to update category");
        return;
      }

      toast.success("Category updated successfully");
      setOpen(false);  
      router.refresh();  
    } catch (error) {
      console.error(error);
      toast.error("Failed to update category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Edit />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-1">
            <Label>Category Name</Label>
            <Input
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter category name"
            />
          </div>

          <Button
            className="w-full"
            onClick={handleUpdateCategory}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Category"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditCategoryDialog;
