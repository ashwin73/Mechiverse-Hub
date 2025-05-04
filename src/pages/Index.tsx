
import React from "react";
import Layout from "@/components/Layout";
import CategorySection from "@/components/CategorySection";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { allResources } from "@/data/resourcesData";

const Index = () => {
  // Filter resources by category for display on the homepage
  const courses = allResources.filter(resource => 
    resource.category === "Core Course"
  ).slice(0, 3);
  
  const softwareTools = allResources.filter(resource => 
    resource.category === "Software"
  ).slice(0, 3);
  
  const templates = allResources.filter(resource => 
    resource.category === "Templates"
  ).slice(0, 3);
  
  const extraSupplements = allResources.filter(resource => 
    resource.category === "Extra Supplements"
  ).slice(0, 3);
  
  const importantWebsites = allResources.filter(resource => 
    resource.category === "Websites"
  ).slice(0, 3);

  return (
    <Layout>
      <div className="space-y-12">
        <section className="text-center space-y-4 py-12 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight">Mechiverse Resource Hub</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your comprehensive library of resources for Mechanical Engineering students.
            Find everything you need for your academic journey in one place.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="outline" asChild className="hover-lift transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
              <Link to="/category/courses">
                Courses <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <div className="space-y-16">
          <CategorySection 
            title="Courses" 
            description="Essential courses for mechanical engineering curriculum"
            categorySlug="courses"
            resources={courses}
          />
          
          <CategorySection 
            title="Software Tools" 
            description="Essential software applications for mechanical engineering design and analysis"
            categorySlug="software-tools"
            resources={softwareTools}
          />
          
          <CategorySection 
            title="Templates" 
            description="Templates, guides, and resources for academic success"
            categorySlug="templates"
            resources={templates}
          />

          <CategorySection 
            title="Extra Supplements" 
            description="Additional learning resources and guides"
            categorySlug="extra-supplements"
            resources={extraSupplements}
          />

          <CategorySection 
            title="Important Websites" 
            description="Essential websites and portals for academic and administrative purposes"
            categorySlug="important-websites"
            resources={importantWebsites}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
