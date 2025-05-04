
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CreatorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreatorModal = ({ open, onOpenChange }: CreatorModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>About the Creator</DialogTitle>
          <DialogDescription>
            Ashwin Ravikumar. Batch'27. Mech DD.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="text-center sm:text-left">
            <h3 className="font-medium text-lg">Mission</h3>
            <p className="text-muted-foreground text-sm">
               Assist fellow cadets (you!) in navigating the academic multiverse.
               The right tools, make all the difference.
            </p>
          </div>
          
          <p className="text-sm">
            Mechiverse Resource Hub was created to provide IIT BBS students with easy 
            access to course materials, notes, and resources to support their academic journey.
          </p>
          <p>
            "Be who you are and say what you feel because those who mind don't MATTER And those who MATTER Don't Mind."
          </p>
          
          <div className="flex justify-center sm:justify-start space-x-2 pt-2">
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.instagram.com/ashwin_.73" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/ashwin-ravikumar-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:itsashwinr@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatorModal;
