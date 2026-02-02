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
import { Plus } from "lucide-react";

const CreateCategoryDialog = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateCategory = async () => {
    if (!categoryName.trim()) {
      toast.error("Category name is required");
      return;
    }

    try {
      setLoading(true);

      const response = await categoryClientService.createCategory({
        name: categoryName,
      });

      if (!response.ok) {
        toast.error(response.message || "Failed to create category");
        return;
      }

      toast.success("Category created successfully");
      setCategoryName("");
      setOpen(false);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Category
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Category</DialogTitle>
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
            onClick={handleCreateCategory}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Category"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryDialog;
