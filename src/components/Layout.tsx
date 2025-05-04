
import React, { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { ThemeProvider } from "next-themes";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SidebarProvider>
        <div className="min-h-screen flex flex-col w-full">
          <div className="flex flex-1 w-full">
            <Sidebar />
            <div className="flex flex-col flex-1">
              <Navbar />
              <main className="flex-1 container py-6">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Layout;
