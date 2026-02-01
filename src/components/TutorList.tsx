"use client";

import { useState, useMemo } from "react";
import { Tutor } from "@/types/tutor.types";
import { TutorCard } from "./TutorCard";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { Category } from "@/types/category.types";
import TutorFilters, { FilterValues } from "./TutorFilters";

type Props = {
    tutors: Tutor[];
    categories: Category[];
};

const TutorList = ({ tutors, categories }: Props) => {
    // State for filters
    const [filters, setFilters] = useState<FilterValues>({
        search: "",
        sortBy: "",
        sortOrder: "asc",
    });

    const handleFilterChange = (updated: Partial<FilterValues>) => {
        setFilters((prev) => ({ ...prev, ...updated }));
    };

    // Filtered and sorted tutors
    const filteredTutors = useMemo(() => {
        let filtered = tutors;

        // Search filter
        if (filters.search) {
            const query = filters.search.toLowerCase();
            filtered = filtered.filter(
                (t) =>
                    t.category.name.toLowerCase().includes(query) ||
                    t.bio.toLowerCase().includes(query) ||
                    t.subjects.some((sub) => sub.toLowerCase().includes(query))
            );
        }

        // Sorting
        if (filters.sortBy) {
            filtered = [...filtered].sort((a, b) => {
                const fieldA = a[filters.sortBy as keyof Tutor];
                const fieldB = b[filters.sortBy as keyof Tutor];
                if (typeof fieldA === "number" && typeof fieldB === "number") {
                    return filters.sortOrder === "asc" ? fieldA - fieldB : fieldB - fieldA;
                }
                return 0;
            });
        }

        return filtered;
    }, [tutors, filters]);

    const tutorsByCategory = useMemo(() => {
        return filteredTutors.reduce<Record<string, Tutor[]>>((acc, tutor) => {
            const category = tutor.category.name;
            if (!acc[category]) acc[category] = [];
            acc[category].push(tutor);
            return acc;
        }, {});
    }, [filteredTutors]);

    return (
        <>
            <TutorFilters filters={filters} onChange={handleFilterChange} />

            <Tabs defaultValue="All" className="w-full">
                {/* Tabs Header */}
                <TabsList className="mb-6 flex flex-wrap">
                    <TabsTrigger value="All">All</TabsTrigger>
                    {categories.map((category) => (
                        <TabsTrigger key={category.id} value={category.name}>
                            {category.name}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {/* All Tutors */}
                <TabsContent value="All">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredTutors.map((tutor) => (
                            <TutorCard key={tutor.id} tutor={tutor} />
                        ))}
                    </div>
                </TabsContent>

                {/* Category-wise Tutors */}
                {categories.map((category) => (
                    <TabsContent key={category.id} value={category.name}>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {(tutorsByCategory[category.name] ?? []).map((tutor) => (
                                <TutorCard key={tutor.id} tutor={tutor} />
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </>
    );
};

export default TutorList;
