
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import ResourceCard, { ResourceProps } from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";
import { ResourceFilterBar } from "@/components/ResourceFilterBar";
import ResourceGrid from "@/components/ResourceGrid";
import { allResources } from "@/data/resourcesData";
import { useSearchParams } from "react-router-dom";

const Resources = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [semesterFilter, setSemesterFilter] = useState("all");

  useEffect(() => {
    setSearchQuery(initialSearch);
  }, [initialSearch]);

  const filteredResources = allResources.filter(resource => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.subjectCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      categoryFilter === "all" ||
      resource.category.toLowerCase() === categoryFilter.toLowerCase();

    // Only Core Courses have semester filter
    const matchesSemester =
      categoryFilter === "Core Courses"
        ? (semesterFilter === "all" ||
            resource.tags.some(tag => tag.toLowerCase() === `sem ${semesterFilter}`))
        : true;

    return matchesSearch && matchesCategory && matchesSemester;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setCategoryFilter("all");
    setSemesterFilter("all");
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Resources</h1>
          <p className="text-muted-foreground">Browse and search all available resources</p>
        </div>
        <ResourceFilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          semesterFilter={semesterFilter}
          setSemesterFilter={setSemesterFilter}
          onSearch={handleSearch}
        />
        <ResourceGrid
          resources={filteredResources}
          onClearFilters={handleClearFilters}
        />
      </div>
    </Layout>
  );
};

export default Resources;
