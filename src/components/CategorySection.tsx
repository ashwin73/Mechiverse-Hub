
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ResourceCard, { ResourceProps } from "./ResourceCard";

interface CategorySectionProps {
  title: string;
  description: string;
  categorySlug: string;
  resources: ResourceProps[];
}

const CategorySection = ({ title, description, categorySlug, resources }: CategorySectionProps) => {
  return (
    <section className="category-section animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <Link 
          to={`/category/${categorySlug}`} 
          className="flex items-center text-primary hover:underline hover:text-primary/80 transition-all duration-300"
        >
          View All <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.slice(0, 3).map((resource, index) => (
          <div key={index} className="staggered-item animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
            <ResourceCard {...resource} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
