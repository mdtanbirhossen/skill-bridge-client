"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type FilterValues = {
  search: string;
  sortBy: "" | "hourlyRate" | "rating";
  sortOrder: "asc" | "desc";
};

type Props = {
  filters: FilterValues;
  onChange: (updated: Partial<FilterValues>) => void;
};

const TutorFilters = ({ filters, onChange }: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-6">
      {/* Search */}
      <Input
        placeholder="Search tutor, subject, bio..."
        value={filters.search}
        onChange={(e) => onChange({ search: e.target.value })}
        className="w-full md:w-64"
      />

      {/* Sort */}
      <Select
        value={filters.sortBy}
        onValueChange={(value) => onChange({ sortBy: value as FilterValues["sortBy"] })}
      >
        <SelectTrigger className="w-full md:w-48">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="hourlyRate">Price</SelectItem>
          <SelectItem value="rating">Rating</SelectItem>
        </SelectContent>
      </Select>

      {/* Order */}
      <Select
        value={filters.sortOrder}
        onValueChange={(value) => onChange({ sortOrder: value as FilterValues["sortOrder"] })}
      >
        <SelectTrigger className="w-full md:w-40">
          <SelectValue placeholder="Order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">Ascending</SelectItem>
          <SelectItem value="desc">Descending</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TutorFilters;
