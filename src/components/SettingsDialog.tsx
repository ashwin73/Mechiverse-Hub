
import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Settings, Type } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const SettingsDialog = () => {
  const [fontSizePreference, setFontSizePreference] = React.useState(() => {
    return localStorage.getItem("fontSizePreference") || "medium";
  });

  useEffect(() => {
    // Apply font size preference
    document.documentElement.classList.remove("font-size-small", "font-size-medium", "font-size-large");
    document.documentElement.classList.add(`font-size-${fontSizePreference}`);
    localStorage.setItem("fontSizePreference", fontSizePreference);
  }, [fontSizePreference]);

  const handleFontSizeChange = (value: string) => {
    if (value) {
      setFontSizePreference(value);
      toast.success(`Font size updated to ${value}`);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="w-full justify-start hover:scale-105 transition-transform">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] animate-scale-in">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label className="flex items-center">
              <Type className="mr-2 h-4 w-4" /> Font Size
            </Label>
            <ToggleGroup 
              type="single" 
              value={fontSizePreference}
              onValueChange={handleFontSizeChange}
              className="animate-fade-in"
            >
              <ToggleGroupItem value="small" className="transition-all hover:bg-primary/10">Small</ToggleGroupItem>
              <ToggleGroupItem value="medium" className="transition-all hover:bg-primary/10">Medium</ToggleGroupItem>
              <ToggleGroupItem value="large" className="transition-all hover:bg-primary/10">Large</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
