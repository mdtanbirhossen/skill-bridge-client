"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tutor } from "@/types/tutor.types";
import { Category } from "@/types/category.types";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { tutorClientService } from "@/services/tutor.client.service";

type Props = {
    tutor?: Tutor;
    categories: Category[];
};

const TutorProfileUpdate = ({ tutor, categories }: Props) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        bio: tutor?.bio || "",
        hourlyRate: tutor?.hourlyRate?.toString() || "",
        experience: tutor?.experience?.toString() || "",
        subjects: tutor?.subjects?.join(", ") || "",
        categoryId: tutor?.categoryId || "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpsert = async () => {
        if (!formData.categoryId) {
            toast.error("Category is required");
            return;
        }

        try {
            setLoading(true);

            const res = await tutorClientService.upsertTutor({
                bio: formData.bio,
                hourlyRate: Number(formData.hourlyRate),
                experience: Number(formData.experience),
                subjects: formData.subjects
                    .split(",")
                    .map(s => s.trim())
                    .filter(Boolean),
                categoryId: formData.categoryId,
            });

            if (!res.ok) {
                toast.error(res.message || "Operation failed");
                return;
            }

            toast.success(
                tutor ? "Tutor profile updated" : "Tutor profile created"
            );
            setOpen(false);
            router.refresh();
        } catch {
            toast.error("Operation failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm" className="w-full">
                    {tutor ? "Edit Tutor" : "Create Tutor"}
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {tutor ? "Update Tutor Profile" : "Create Tutor Profile"}
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-3">
                    {/* BIO */}
                    <div>
                        <Label>Bio</Label>
                        <Textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                        />
                    </div>

                    {/* CATEGORY */}
                    <div>
                        <Label>Category</Label>
                        <Select
                            value={formData.categoryId}
                            onValueChange={(value) =>
                                setFormData({ ...formData, categoryId: value })
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category) => (
                                    <SelectItem
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* HOURLY RATE */}
                    <div>
                        <Label>Hourly Rate</Label>
                        <Input
                            name="hourlyRate"
                            value={formData.hourlyRate}
                            onChange={handleChange}
                        />
                    </div>

                    {/* EXPERIENCE */}
                    <div>
                        <Label>Experience (years)</Label>
                        <Input
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                        />
                    </div>

                    {/* SUBJECTS */}
                    <div>
                        <Label>Subjects (comma separated)</Label>
                        <Input
                            name="subjects"
                            value={formData.subjects}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => setOpen(false)}
                        disabled={loading}
                    >
                        Cancel
                    </Button>
                    <Button onClick={handleUpsert} disabled={loading}>
                        {loading ? "Saving..." : "Save"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default TutorProfileUpdate;
