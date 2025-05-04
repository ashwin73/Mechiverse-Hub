
import React from "react";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";

interface ResourceFilterBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  semesterFilter: string;
  setSemesterFilter: (value: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

export const ResourceFilterBar: React.FC<ResourceFilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  categoryFilter,
  setCategoryFilter,
  semesterFilter,
  setSemesterFilter,
  onSearch
}) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <form onSubmit={onSearch} className="relative flex-1">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search resources..."
          className="pl-8 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      
      <div className="flex items-center gap-2 flex-wrap">
        <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Core Courses">Core Courses</SelectItem>
              <SelectItem value="Software Tools">Software Tools</SelectItem>
              <SelectItem value="Academic Resources">Academic Resources</SelectItem>
              <SelectItem value="Learning Resources">Learning Resources</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {categoryFilter === "Core Courses" && (
          <Select value={semesterFilter} onValueChange={setSemesterFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Semesters</SelectItem>
                {[...Array(8)].map((_, i) => (
                  <SelectItem key={i + 1} value={String(i + 1)}>
                    Semester {i + 1}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  );
};
