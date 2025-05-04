
import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-4 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mechiverse. Created with ❤️ for Mechies. by 卂丂卄山丨几
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.instagram.com/ashwin_.73" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/ashwin-ravikumar-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
