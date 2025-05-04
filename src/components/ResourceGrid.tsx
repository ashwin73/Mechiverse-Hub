
import React from "react";
import ResourceCard, { ResourceProps } from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";

interface ResourceGridProps {
  resources: ResourceProps[];
  onClearFilters: () => void;
}

const ResourceGrid: React.FC<ResourceGridProps> = ({
  resources,
  onClearFilters,
}) => {
  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No resources found</h3>
        <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={onClearFilters}
        >
          Clear Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource, index) => (
        <ResourceCard key={index} {...resource} />
      ))}
    </div>
  );
};

export default ResourceGrid;
