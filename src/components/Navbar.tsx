
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, Sun, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { useAuthUser } from "@/hooks/useAuthUser";
import { useTheme } from "next-themes";
import CreatorModal from "./CreatorModal";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreatorModal, setShowCreatorModal] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuthUser();
  const { theme, setTheme } = useTheme();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/resources?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleAuth = async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) {
      await supabase.auth.signOut();
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account."
      });
    } else {
      navigate("/login");
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <header className="border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <h1 
              className="text-xl font-bold text-primary md:text-2xl cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setShowCreatorModal(true)}
            >
              Mechiverse
            </h1>
          </div>
          
          <form onSubmit={handleSearch} className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search resources..."
              className="w-full bg-background pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button variant="outline" size="sm" onClick={handleAuth}>
              {user ? "Logout" : "Login"}
            </Button>
          </div>
        </div>
      </header>
      
      <CreatorModal 
        open={showCreatorModal} 
        onOpenChange={setShowCreatorModal} 
      />
    </>
  );
};

export default Navbar;
