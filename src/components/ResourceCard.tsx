
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ResourceProps {
  title: string;
  subjectCode: string;
  description: string;
  link: string;
  tags: string[];
  category: string;
}

const ResourceCard = ({ 
  title, 
  subjectCode,
  description, 
  link, 
  tags, 
  category 
}: ResourceProps) => {
  return (
    <Card className="hover-lift animate-fade-in transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{subjectCode}</p>
          </div>
          <Badge variant="outline" className="text-xs">{category}</Badge>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4" />
            View
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
