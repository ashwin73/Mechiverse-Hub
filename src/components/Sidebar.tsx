
import React from "react";
import { Link } from "react-router-dom";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { 
  Book, BookOpen, Building2, GraduationCap, 
  Home, Terminal, Globe, List, Send
} from "lucide-react";
import SettingsDialog from "./SettingsDialog";

const Sidebar = () => {
  const mainMenuItems = [
    { title: "Home", icon: Home, path: "/" },
    { title: "All Resources", icon: List, path: "/resources" },
    { title: "Update Resources", icon: Send, path: "/update-resources" },
  ];

  const categoriesMenuItems = [
    { title: "Courses", icon: Book, path: "/category/courses" },
    { title: "Software Tools", icon: Terminal, path: "/category/software-tools" },
    { title: "Templates", icon: GraduationCap, path: "/category/templates" },
    { title: "Extra Supplements", icon: BookOpen, path: "/category/extra-supplements" },
    { title: "Internship Opportunities", icon: Building2, path: "/category/internship-opportunities" },
    { title: "About SMS", icon: GraduationCap, path: "/category/about-sms" },
    { title: "Important Websites", icon: Globe, path: "/category/important-websites" },
  ];

  return (
    <SidebarComponent>
      <SidebarHeader className="px-4 py-2">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">M</span>
          </div>
          <div>
            <h3 className="font-medium text-sidebar-foreground">Mechiverse</h3>
            <p className="text-xs text-muted-foreground">Resource Hub</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categoriesMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SettingsDialog />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
